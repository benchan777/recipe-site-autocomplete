from flask import Flask, jsonify
from flask_cors import CORS
from prefix_trie import PrefixTree
import requests

app = Flask(__name__)
CORS(app)

@app.route('/')
def homepage():
  dict = {
    "welcome": "hello world!"
  }

  return jsonify(dict)

if __name__ == '__main__':
  app.run()