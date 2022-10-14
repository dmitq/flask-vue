from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(__name__)
CORS(app, resources={r'/*': {'origins': '*'}})

FILMS = [
    {
        'title': 'On the Road',
        'author': 'Jack Kerouac',
        'year': 1000,
        'checked': False
    },
    {
        'title': 'Harry Potter and the Philosopher\'s Stone',
        'author': 'J. K. Rowling',
        'year': 41142,
        'checked': False
    },
    {
        'title': 'Green Eggs and Ham',
        'author': 'Dr. Seuss',
        'year': 2007,
        'checked': False
    }
]


@app.route('/ping', methods=['GET'])
def serv_answer():
    return jsonify('pong')


@app.route('/films', methods=['GET'])
def films_list():
    return jsonify({
        'films': FILMS
    })


if __name__ == '__main__':
    app.run(debug=True)
