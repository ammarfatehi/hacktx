from flask import Flask, request
from flask_restful import Resource, Api, abort, reqparse, fields, marshal_with
import requests
import json

app = Flask(__name__)
api = Api(app)


# to add routes do:
# api.add_resource(route,'/urroute')

if __name__ == "__main__":
    app.run(debug=True)  # debug-True lets u see logs of what goes wrong
