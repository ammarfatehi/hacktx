from flask import Flask, request, jsonify
from flask_restful import Resource, Api, abort, reqparse, fields, marshal_with
from wikipedia import wikipediaInfo
import requests
import json

app = Flask(__name__)
api = Api(app)


# to add routes do:
# api.add_resource(route,'/urroute')
@app.route("/")
def home():
    return("This is the API for our Hack TX Project")

@app.route("/wikipedia")
def pinterest():
    query = request.args.get('q')
    l = wikipediaInfo(query)
    return jsonify(results = l)

if __name__ == "__main__":
    app.run(debug=True)  # debug-True lets u see logs of what goes wrong
