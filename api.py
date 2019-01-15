from flask import Flask, abort
from flask_restful import Resource
from flask_restful import Api
from databases import engine, session, Base, Item, User
from flask import jsonify
from flask_restful import reqparse
from flask import make_response
import requests
from sqlalchemy.exc import IntegrityError

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()

@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

@app.errorhandler(409)
def user_exists(error):
    return make_response(jsonify({'error':'username already exists'}), 409)

#resources
class Items(Resource):
    def get(self):
        result = {}
        item_list = []
        for instance in session.query(Item):

            row = {}
            row['id'] = instance.id
            row['sport'] = instance.sport
            row['subgroup'] = instance.subgroup
            row['name'] = instance.name
            row['price'] = instance.price
            row['website'] = instance.website
            row['link'] = instance.link

            item_list.append(row)

        result['item_list'] = item_list

        print()
        return jsonify(result)


class Search_by_id(Resource):
    def get(self, item_id):
        result = {}
        for instance in session.query(Item).filter(Item.id == item_id):
            row = {}
            row['id'] = instance.id
            row['sport'] = instance.sport
            row['subgroup'] = instance.subgroup
            row['name'] = instance.name
            row['price'] = instance.price
            row['website'] = instance.website
            row['link'] = instance.link

            result['item'] = row

        if result == {}:
            abort(404)

        response = jsonify(result)
        response.headers.extend({'Access-Control-Allow-Origin':'*'})
        return response

class Search_by_sport(Resource):
    def get(self, sport):
        result = {}
        for instance in session.query(Item).filter(Item.sport == sport).order_by(Item.id):
            row = {}
            row['id'] = instance.id
            row['sport'] = instance.sport
            row['subgroup'] = instance.subgroup
            row['name'] = instance.name
            row['price'] = instance.price
            row['website'] = instance.website
            row['link'] = instance.link

            result['item'] = row

        if result == {}:
            abort(404)

        response = jsonify(result)
        response.headers.extend({'Access-Control-Allow-Origin':'*'})
        return response


class Search_by_name(Resource):
    def get(self, input):
        result = {}
        item_list = []
        for instance in session.query(Item).filter(Item.name.ilike("%"+input+"%")):
            row = {}
            row['id'] = instance.id
            row['sport'] = instance.sport
            row['subgroup'] = instance.subgroup
            row['name'] = instance.name
            row['price'] = instance.price
            row['website'] = instance.website
            row['link'] = instance.link

            item_list.append(row)

        result['item_list'] = item_list

        response = jsonify(result)
        response.headers.extend({'Access-Control-Allow-Origin':'*'})
        return response


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
        parser.add_argument('username', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        args = parser.parse_args()

        username = args['username']
        password = args['password']
        email = args['email']

        if not username or not password or not email:
            abort(422)

        user = User(username, password, email)
        session.add(user)

        try:
            session.commit()
        except IntegrityError:
            abort(409)

        response = jsonify({"message":"user created"})
        response.status_code = 201

        response.headers.extend({'Access-Control-Allow-Headers: Content-Type'})
        response.headers.extend({"Access-Control-Allow-Methods", "POST"})
        return response




#routes
api.add_resource(Items, '/items')
api.add_resource(Search_by_id, '/items/search/id/<item_id>')
api.add_resource(Search_by_sport, '/items/search/sport/<sport>')
api.add_resource(Search_by_name, '/items/search/name/<input>')
api.add_resource(Users, '/users')
api.add_resource(Create_Account, '/create_account')





if __name__ == '__main__':
    app.run(debug=True)
