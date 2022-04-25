from flask import Flask, jsonify
import requests

app = Flask(__name__)


@app.route('/')
def homepage():
    dict = {
        "welcome": "hello world!"
    }

    return jsonify(dict)


if __name__ == '__main__':
    app.run()