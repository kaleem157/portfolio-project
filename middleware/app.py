from flask import Flask, jsonify
from flask_cors import CORS

# Create a Flask application
app = Flask(__name__)
CORS(app)

# Define a route for the homepage
@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Flask Middleware!"})

# Run the Flask app
if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5000,debug=True)