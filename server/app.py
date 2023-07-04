#!/usr/bin/env python3


# Remote library imports
from flask import make_response, request
from flask_migrate import Migrate
from flask_restful import Resource
from models import User, CompletedPrompt, NudgePrompt, Nudge, JournalPrompt, Journal, Pillar, Recommendation
# Local imports
from config import app, db, api

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.json.compact = False

# migrate = Migrate(app, db)

#bcrypt = Bcrypt(app)

# db.init_app(app)

# api = Api(app)

# # Instantiate CORS
# #CORS(app)

@app.route('/')
def index():
    return '<h1>micelio</h1>'

# Views go here!

if __name__ == '__main__':
    app.run(port=5555, debug=True)
