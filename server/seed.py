#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, CompletedPrompt, NudgePrompt, Nudge, JournalPrompt, Journal, Pillar, Recommendation

#instantiating faker
fake = Faker()

if __name__ == '__main__':
    #a context (the state of the environment where the code is being executed) through which Flask and its extensions are accessible
    with app.app_context():
        print("Clearing database...")
        User.query.delete()


        print("Seeding users...")
        # users = [
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        #     User(name= fake.name(), email= fake.email(), username= fake.username(), image= fake.image(), bio= fake.sentence(10)),
        # ]
        # db.session.add_all(users)

        #OR
        users = []
        for _ in range(random.randint(10)):
            user = User(
                name= fake.name(), 
                email= fake.email(), 
                username= fake.username(), 
                image= fake.image(), 
                bio= fake.sentence(10)
            )

        db.session.add(users)
        db.session.commit()
        users.append(user)



        print("Starting seed...")
        # Seed code goes here!
  
