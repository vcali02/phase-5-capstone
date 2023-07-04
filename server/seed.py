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
        NudgePrompt.query.delete()
        JournalPrompt.query.delete()
        Nudge.query.delete()
        Journal.query.delete()
        CompletedPrompt.query.delete()
        Recommendation.query.delete()

        print("Seeding users...")
        users = [
            User(name= "val", email= "val@micelio.com", username= "valicali", image= "none", bio= "I love to grow."),
            User(name= "winnie", email= "winnie@micelio.com", username= "winnieboo", image= "none", bio= "I'm here for the snacks.")
        ]
        db.session.add_all(users)

        print("Seeding nudge prompts...")
        nudge_prompts = [
            NudgePrompt(action_prompt = "Smile at a stranger.", nudges_id=1),
            NudgePrompt(action_prompt = "Tell someone they look nice today.", nudges_id=2)
        ]
        db.session.add_all(nudge_prompts)

        print("Seeding journal prompts...")
        journal_prompts = [
            JournalPrompt(action_prompt = "Journal about what life means to you.", journals_id=1),
            JournalPrompt(action_prompt = "Journal about a time that you felt joy.", journals_id=2)
        ]
        db.session.add_all(journal_prompts)

        print("Seeding nudges...")
        nudges = [
            Nudge(image="url_here", action_type="nudge", description="Nudges help you...", pillar_id=1)
        ]
        db.session.add_all(nudges)

        print("Seeding journals...")
        journals = [
            Journal(image="url_here", action_type="journal", description="Journaling is about...", pillar_id=1)
        ]
        db.session.add_all(journals)

        print("Seeding pillars...")
        pillars = [
            Pillar(image="url_here", pillar_name="be impeccable with your word", description="explain what this means"),
            Pillar(image="url_here", pillar_name="never make assumptions", description="explain what this means"),
            Pillar(image="url_here", pillar_name="don't take anything personally", description="explain what this means"),
            Pillar(image="url_here", pillar_name="always do your best", description="explain what this means")
        ]
        db.session.add_all(pillars)

        print("Seeding completed prompts...")
        completed_prompts = []
        for journal_prompt in journal_prompts:
            one_user = rc(users)
            nudge_prompt = rc(nudge_prompts)
            journal_prompt = rc(journal_prompts)
            completed_prompts.append(
                CompletedPrompt(user_id=one_user.id, nudge_prompt_id=nudge_prompt.id, journal_prompt_id=journal_prompt.id)
            )
        db.session.add_all(completed_prompts)

        print("seeding recommendations...")
        recommendations = [
            Recommendation(rec_type="book", rec_link = "url_here", image="url_here", blurb="why this is a recommendation for micelio users"),
            Recommendation(rec_type="podcast", rec_link = "url_here", image="url_here", blurb="why this is a recommendation for micelio users")
        ]
        db.session.add_all(recommendations)


        db.session.commit()
        print("Done seeding!")
        # Seed code goes here!
  
