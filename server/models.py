#flask extension; import the class
from flask_sqlalchemy import SQLAlchemy
#the metadata class is used to store/represent database metadata
#usually: python classes called ORM models
#metadata class: define additional database structure 
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
#import library
#adds .to_dict() method to model instances
#allows control over max recursion
from sqlalchemy_serializer import SerializerMixin
#an instance of MetaData
metadata = MetaData(naming_convention={
    #specifies how the name of the foreign key should be generated
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
#an instance of SQLAlchemy
#db = SQLAlchemy() 
db = SQLAlchemy(metadata=metadata)

#password hashing
#from config import db, bcrypt

#associating MetaData instance with the SQLAlchemy instance to define/manage
#the structure of the database tables

# Models go here!

# -one user has many completed prompts; many prompts are completed by one user
# -one user has completed nudges through completed prompts
# -^the same for completed journals

# -one nudge prompt has many completed prompts; many completed prompts are a nudge prompt
# ^the same for journal

# -one completed prompt has one pillar; one pillar has many completed prompts !!ACCESSED THROUGH OTHER RELATIONSHIPS

# -one nudge has many prompts; many nudge prompts belong to one nudge
# -^ the same for journal

# -one pillar has one nudge; one nudge has one pillar
# -^the same for journal

################USER################
class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    username = db.Column(db.String)
    _password_hash = db.Column(db.String)
    image = db.Column(db.String)
    bio = db.Column(db.String)

    #RELATIONSHIP
    # -one user has many completed prompts; many prompts are completed by one user
    completed_prompts = db.relationship("CompletedPrompt", back_populates="user")


    #ASSOCIATION PROXY
    # -one user has completed nudges through completed prompts
    completed_nudges = association_proxy("completed_prompts", "nudge_prompt")
    # -one user has completed journals through completed prompts
    completed_journals = association_proxy("completed_prompts", "journal_prompt")

    #VALIDATION


################COMPLETED PROMPTS################
class CompletedPrompt(db.Model, SerializerMixin):
    __tablename__ = "completed_prompts"

    id = db.Column(db.Integer, primary_key=True)

    #FOREIGN KEY
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    nudge_prompt_id = db.Column(db.Integer, db.ForeignKey("nudge_prompts.id"))
    journal_prompt_id = db.Column(db.Integer, db.ForeignKey("journal_prompts.id"))

    #RELATIONSHIP
    # -one user has many completed prompts; many prompts are completed by one user
    user = db.relationship("User", back_populates="completed_prompts")
    # -one nudge prompt has many completed prompts; many completed prompts are a nudge prompt
    nudge_prompt = db.relationship("NudgePrompt", back_populates="completed_prompt")
    # -one journal prompt has many completed prompts; many completed prompts are a journal prompt
    journal_prompt = db.relationship("JournalPrompt", back_populates="completed_prompt")

    #VALIDATION


################NUDGE PROMPTS################
class NudgePrompt(db.Model, SerializerMixin):
    __tablename__ = "nudge_prompts"

    id = db.Column(db.Integer, primary_key=True)
    action_prompt = db.Column(db.String)

    #FOREIGN KEY
    nudges_id = db.Column(db.Integer, db.ForeignKey("nudges.id"))

    #RELATIONSHIP
    # -one nudge prompt has many completed prompts; many completed prompts are a nudge prompt 
    completed_prompt = db.relationship("CompletedPrompt", back_populates="nudge_prompt")
    # -one nudge has many prompts; many nudge prompts belong to one nudge
    action_type = db.relationship("Nudge", back_populates = "nudge_prompts")

    #VALIDATION


################NUDGES################
class Nudge(db.Model, SerializerMixin):
    __tablename__ = "nudges"

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String)
    action_type = db.Column(db.String)
    description = db.Column(db.String)

    #FOREIGN KEY
    pillar_id = db.Column(db.Integer, db.ForeignKey("pillars.id"))

    #RELATIONSHIP
    # -one nudge has many prompts; many nudge prompts belong to one nudge
    nudge_prompts = db.relationship("NudgePrompt", back_populates = "action_type")
    # -one pillar has one nudge; one nudge has one pillar
    pillar = db.relationship("Pillar", back_populates = "nudge")

    #VALIDATION


################JOURNAL PROMPTS################
class JournalPrompt(db.Model, SerializerMixin):
    __tablename__ = "journal_prompts"

    id = db.Column(db.Integer, primary_key=True)
    action_prompt = db.Column(db.String)

    #FOREIGN KEY
    journals_id = db.Column(db.Integer, db.ForeignKey("journals.id"))

    #RELATIONSHIP
    # -one nudge prompt has many completed prompts; many completed prompts are a nudge prompt 
    completed_prompt = db.relationship("CompletedPrompt", back_populates="journal_prompt")
    # -one journal has many prompts; many journal prompts belong to one journal
    action_type = db.relationship("Journal", back_populates = "journal_prompts")

    #VALIDATION


################JOURNALS################
class Journal(db.Model, SerializerMixin):
    __tablename__ = "journals"

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String)
    action_type = db.Column(db.String)
    description = db.Column(db.String)

    #FOREIGN KEY
    pillar_id = db.Column(db.Integer, db.ForeignKey("pillars.id"))

    #RELATIONSHIP
    # -one journal has many prompts; many journal prompts belong to one journal
    journal_prompts = db.relationship("JournalPrompt", back_populates = "action_type")
    # -one pillar has one journal; one journal has one pillar
    pillar = db.relationship("Pillar", back_populates = "journal")

    #VALIDATION


################PILLARS################
class Pillar(db.Model, SerializerMixin):
    __tablename__ = "pillars"

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String)
    pillar_name = db.Column(db.String)
    description = db.Column(db.String)

    #FOREIGN KEY
    #none at this time

    #RELATIONSHIP
    # -one pillar has one nudge; one nudge has one pillar
    nudge = db.relationship("Nudge", back_populates = "pillar")
    # -one pillar has one journal; one journal has one pillar
    journal = db.relationship("Journal", back_populates = "pillar")


################RECOMMENDATIONS################
class Recommendation(db.Model, SerializerMixin):
    __tablename__ = "recommendations"

    id = db.Column(db.Integer, primary_key = True)
    rec_type = db.Column(db.String)
    rec_link = db.Column(db.String)
    image = db.Column(db.String)
    blurb = db.Column(db.String)
