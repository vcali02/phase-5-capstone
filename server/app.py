#!/usr/bin/env python3


# Remote library imports
from flask import make_response, request, session
from flask_migrate import Migrate
from flask_restful import Resource
from models import User, CompletedPrompt, NudgePrompt, Nudge, JournalPrompt, Journal, Pillar, Recommendation
# Local imports
from config import app, db, api
#importing LoginManager class
#contains the code that lets your application and Flask-Login work together
from flask_login import LoginManager
#instance
login_manager = LoginManager()
#configure the instance for login
login_manager.init_app(app)
#flask login
#Flask-Login uses sessions for authentication
#!!!!!MUST SET A SECRET KEY!!!!
app.secret_key = "6f4f5aa7a1cb8a0aa26bedd6997f14fce66d7d31e4e56d7abc75be4749bd58d5"





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




#-------------------LOGIN--------------------#
#USER POST




#-------------------LOGIN--------------------#
#--------------------USER--------------------#
#GET /user
class Users(Resource):
    def get(self):
        #1. query
        users = User.query.all()
        if not users:
            return {"error" : "User not found."}, 404
        #2. dict
        users_dict = [u.to_dict() for u in users]
        #3. res
        res = make_response(
            users_dict,
            200
        )
        return res
#4.route
api.add_resource(Users, "/users")

#GET /user/<int:id>
class OneUser(Resource):
    def get(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return {"error" : "User not found."}, 404
        user_dict = user.to_dict()
        res = make_response(
            user_dict,
            200
        )
        return res

#PATCH /user/<int:id>
    def patch(self, id):
        user = User.query.filter_by(id=id).first()
        data = request.to_json()
        if not user:
            return {"error" : "User not found."}, 404
        else:
            try:
                for attr in data:
                    setattr(user, attr, data.get(attr))
                db.session.add(user)
                db.session.commit()
                return make_response(
                    user.to_dict(),
                    202
                )
            except:
                return make_response({"400" : "User update unsuccessful."}, 400)

#DELETE /user/<int:id>
    def delete(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return {"error" : "User not found."}, 404
        db.session.delete(user)
        db.session.commit()
        return make_response({}, 204)

api.add_resource(OneUser, "/users/<int:id>")

#--------------------USER--------------------#
#--------------COMPLETED PROMPTS-------------#
###########################################################ensure seed makes sense
#GET /completed_prompts
class CompletedPrompts(Resource):
    def get(self):
        cps = CompletedPrompt.query.all()
        if not cps:
            return {"error" : "Progress not found."}, 404
        cps_dict = [c.to_dict() for c in cps]
        res = make_response(
            cps_dict,
            200
        )
        return res

#POST??????? maybe not
#front end even listener will trigger a GET request to display the data 
#     def post(self):
#         #this gives us whatever is sent to the backend
#         #data is an object
#         #how can we go through the data obj to get the adventurer username key
#         #THIS IS WHAT I SEND IN THE FE POST
#         data = CompletedPrompt.query.all()
#         # try:
#             #instance
#         new_cp = CompletedPrompt(
#             # journal_prompt= data.get("journal_prompt"),
#             journal_prompt_id= data.get("journal_prompt_id"),
#             # nudge_prompt = data.get("nudge_prompt"),
#             nudge_prompt_id= data.get("nudge_prompt_id"),
#             # user = data.get("user"),
#             user_id = data.get("user_id")
#         )
#             #add/commit
#         db.session.add(new_cp)
#         db.session.commit()
#             #dict
#         new_cp_dict = new_cp.to_dict()
#             #res
#         res = make_response(
#             new_cp_dict,
#             201
#         )
#         return res
#         # except:
#         #     return {"400" : "Prompt completion unsuccessful."}, 400

api.add_resource(CompletedPrompts, "/completed_prompts")

#GET /completed_prompts/<int:id>
class OneCompletedPrompt(Resource):
    def get(self, id):
        cp = CompletedPrompt.query.filter_by(id=id).first()
        if not cp:
            return {"error" : "User not found."}, 404
        cp_dict = cp.to_dict()
        res = make_response(
            cp_dict,
            200
        )
        return res

#DELETE /completed_prompts/<int:id>
    def delete(self, id):
        cp = CompletedPrompt.query.filter_by(id=id).first()
        if not cp:
            return {"error" : "Progress not found."}, 404
        db.session.delete(cp)
        db.session.commit()
        return make_response({}, 204)


api.add_resource(OneCompletedPrompt, "/completed_prompts/<int:id>")

#--------------COMPLETED PROMPTS-------------#
#----------------NUDGE PROMPTS---------------#
#GET /nudge_prompt
class NudgePrompts(Resource):
    def get(self):
        nps = NudgePrompt.query.all()
        if not nps:
            return {"error" : "Nudge prompt not found."}, 404
        nps_dict = [n.to_dict() for n in nps]
        res = make_response(
            nps_dict,
            200
        )
        return res

api.add_resource(NudgePrompts, "/nudge_prompts")

#GET /nudge_prompt/<int:id>
class OneNudgePrompt(Resource):
    def get(self, id):
        np = NudgePrompt.query.filter_by(id=id).first()
        if not np:
            return {"error" : "Nudge prompt not found."}, 404
        np_dict = np.to_dict()
        res = make_response(
            np_dict,
            200
        )
        return res

api.add_resource(OneNudgePrompt, "/nudge_prompts/<int:id>")

#----------------NUDGE PROMPTS---------------#
#---------------JOURNAL PROMPTS--------------#
#GET /journal_prompt
class JournalPrompts(Resource):
    def get(self):
        jps = JournalPrompt.query.all()
        if not jps:
            return {"error" : "Journal prompt not found."}, 404
        jps_dict = [j.to_dict() for j in jps]
        res = make_response(
            jps_dict,
            200
        )
        return res

api.add_resource(JournalPrompts, "/journal_prompts")

#GET /journal_prompt/<int:id>
class OneJournalPrompt(Resource):
    def get(self, id):
        jp = JournalPrompt.query.filter_by(id=id).first()
        if not jp:
            return {"error" : "Nudge prompt not found."}, 404
        jp_dict = jp.to_dict()
        res = make_response(
            jp_dict,
            200
        )
        return res

api.add_resource(OneJournalPrompt, "/journal_prompts/<int:id>")

#---------------JOURNAL PROMPTS--------------#
#--------------------NUDGE-------------------#
#GET /nudges
class Nudges(Resource):
    def get(self):
        ns = Nudge.query.all()
        if not ns:
            return {"error" : "Journal prompt not found."}, 404
        ns_dict = [n.to_dict(only = ("image", "action_type", "description", "pillar_id")) for n in ns]
        res = make_response(
            ns_dict,
            200
        )
        return res

api.add_resource(Nudges, "/nudges")

#GET /nudges/<int:id>
class OneNudge(Resource):
    def get(self, id):
        n = Nudge.query.filter_by(id=id).first()
        if not n:
            return {"error" : "Nudge prompt not found."}, 404
        n_dict = n.to_dict(only = ("image", "action_type", "description", "pillar_id"))
        res = make_response(
            n_dict,
            200
        )
        return res

api.add_resource(OneNudge, "/nudges/<int:id>")




#--------------------NUDGE-------------------#
#-------------------JOURNAL------------------#
#GET /journals
class Journals(Resource):
    def get(self):
        js = Journal.query.all()
        if not js:
            return {"error" : "Journal prompt not found."}, 404
        js_dict = [j.to_dict(only = ("image", "action_type", "description", "pillar_id")) for j in js]
        res = make_response(
            js_dict,
            200
        )
        return res

api.add_resource(Journals, "/journals")

#GET /journals/<int:id>
class OneJournal(Resource):
    def get(self, id):
        j = Journal.query.filter_by(id=id).first()
        if not j:
            return {"error" : "Nudge prompt not found."}, 404
        j_dict = j.to_dict(only = ("image", "action_type", "description", "pillar_id"))
        res = make_response(
            j_dict,
            200
        )
        return res

api.add_resource(OneJournal, "/journals/<int:id>")




#-------------------JOURNAL------------------#
#-------------------PILLAR-------------------#
#GET /pillars
class Pillars(Resource):
    def get(self):
        ps = Pillar.query.all()
        if not ps:
            return {"error" : "Journal prompt not found."}, 404
        ps_dict = [p.to_dict() for p in ps]
        res = make_response(
            ps_dict,
            200
        )
        return res

api.add_resource(Pillars, "/pillars")

#GET /pillars/<int:id>
class OnePillar(Resource):
    def get(self, id):
        p = Pillar.query.filter_by(id=id).first()
        if not p:
            return {"error" : "Nudge prompt not found."}, 404
        p_dict = p.to_dict()
        res = make_response(
            p_dict,
            200
        )
        return res

api.add_resource(OnePillar, "/pillars/<int:id>")




#-------------------PILLAR-------------------#
#-----------------RECOMMENDED----------------#
#GET /recommendations
class Recommendations(Resource):
    def get(self):
        rs = Recommendation.query.all()
        if not rs:
            return {"error" : "Journal prompt not found."}, 404
        rs_dict = [r.to_dict() for r in rs]
        res = make_response(
            rs_dict,
            200
        )
        return res

api.add_resource(Recommendations, "/recommendations")

#GET /recommended/<int:id>
class OneRecommendation(Resource):
    def get(self, id):
        r = Recommendation.query.filter_by(id=id).first()
        if not r:
            return {"error" : "Nudge prompt not found."}, 404
        r_dict = r.to_dict()
        res = make_response(
            r_dict,
            200
        )
        return res

api.add_resource(OneRecommendation, "/recommendations/<int:id>")




#-----------------RECOMMENDED----------------#

















if __name__ == '__main__':
    app.run(port=5555, debug=True)
