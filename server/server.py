from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
from flask_pymongo import PyMongo
from pymongo import MongoClient
from prefix_trie import PrefixTree
import requests, os

load_dotenv()
MONGODB_URI = os.getenv('MONGODB_URI')
MONGODB_NAME = os.getenv('MONGODB_NAME')

client = MongoClient(MONGODB_URI)
db = client[MONGODB_NAME]

allRecipeNames = []
# allRecipes = db.recipes.find()
for recipe in db.recipes.find():
  allRecipeNames.append(recipe["name"])
tree = PrefixTree(allRecipeNames)

app = Flask(__name__)
CORS(app)

@app.route('/')
def homepage():
  dict = {
    "welcome": "hello world!"
  }

  return jsonify(dict)

@app.route('/autocomplete', methods=['GET', 'POST'])
def autocomplete():
  args = request.json
  prefix = args.get('prefix')
  print(f'Args: {prefix}')
  responses = tree.complete(prefix)

  print(responses)
  return jsonify({"response": responses})

if __name__ == '__main__':
  app.run(host = '0.0.0.0')