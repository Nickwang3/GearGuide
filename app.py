from flask import Flask
from flask_restful import Resource
from flask_restful import Api
from item_database import engine, session, Base, Item
from flask import jsonify

app = Flask(__name__)
api = Api(app)

#resources
class Items(Resource):
    def get(self):
        result = {}
        for instance in session.query(Item).order_by(Item.id):
            row = {}
            row['sport'] = instance.sport
            row['subgroup'] = instance.subgroup
            row['name'] = instance.name
            row['price'] = instance.price
            row['website'] = instance.website
            row['link'] = instance.link

            result[instance.id] = row

        return jsonify(result)


class Search(Resource):
    def get(self, item_id):
        result = {}
        for instance in session.query(Item).filter(Item.id == item_id):
            row = {}
            row['sport'] = instance.sport
            row['subgroup'] = instance.subgroup
            row['name'] = instance.name
            row['price'] = instance.price
            row['website'] = instance.website
            row['link'] = instance.link

            result[instance.id] = row

        return jsonify(result)



#route
api.add_resource(Items, '/Items')
api.add_resource(Search, '/Search/<item_id>')






if __name__ == '__main__':
    app.run(debug=True)
