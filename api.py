from flask import Flask, abort
from flask_restful import Resource
from flask_restful import Api
from databases import engine, session, Base, Item, User
from flask import jsonify
from flask_restful import reqparse
from flask import make_response
import requests

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

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

        if result == {}:
            abort(404)

        return jsonify(result)


class Users(Resource):
    def get(self):
        result = {}
        for instance in session.query(User).order_by(User.id):
            row = {}
            row['username'] = instance.username
            row['email'] = instance.email
            row['password'] = instance.password

            result[instance.id] = row

        return jsonify(result)

class Create_Account(Resource):
    def post(self):
        parser.add_argument('username', type=str)
        parser.add_argument('password', type=str)
        parser.add_argument('email', type=str)
        args = parser.parse_args()

        username = args['username']
        password = args['password']
        email = args['email']

        user = User(username, password, email)
        session.add(user)
        session.commit()

        response = jsonify({"message":"user created"})
        response.status_code = 201

        return response


#route
api.add_resource(Items, '/items')
api.add_resource(Search, '/items/search/<item_id>')
api.add_resource(Users, '/users')
api.add_resource(Create_Account, '/create_account')





if __name__ == '__main__':
    app.run(debug=True)
