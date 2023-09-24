from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="*")


@app.route('/api/profile')
def my_profile():
    data = ["juju", "lena", "lisa", "jennie"]
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
