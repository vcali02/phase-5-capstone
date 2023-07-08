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

###NUDGE AND JOURNAL PROMPTS WITH NULL
#how to separate prompts per pillar
#journal prompt has journal id which goes to pillars 
#journal prompts has pillars through journals 

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
        Pillar.query.delete()

        db.session.commit()
    
        #---------------USERS---------------#
        print("Seeding users...")
        users = []
        for i in range(10):
            users.append(User(name= fake.name(), email= fake.email(), username= fake.user_name(), image= "none", bio= fake.sentence(10)))
        
        db.session.add_all(users)
        #---------------USERS---------------#





        #-----------NUDGE PROMPTS-----------#
        #PILLAR 1 be impeccable with your word
        print("Seeding pillar one nudge action prompts...")
        p1n_action_prompts = [
            "Correct negative self talk. ex: `I can't do this.` to `This is hard, but I'm still learning.`",
            "Ask yourself: Is what I'm saying helping me achieve my goal?",
            "Do one thing that makes you feel cared for today.",
            "Today's mantra: When I love myself, I express love.",
            "Ask yourself: Do I agree with the opinion that was shared with me?",
            "Ask yourself: Will gossip fuel me or hinder me?",
            "Don't let your mind be fertile ground for negativity.",
            "Do one thing to make someone feel cared for today.",
            "Words are magic, find a way to use them to change someone's day for the better.",
            "Consider the impact of others' words on your mindset and offer someone a genuine compliment."
        ]
        
        #PILLAR 1 be impeccable with your word
        print("Seeding pillar one nudge prompts...")
        p1_nudge_prompts = []
        for i in range(10):
            one_p1_prompt = rc(p1n_action_prompts)
            p1_nudge_prompts.append(
                NudgePrompt(action_prompt=one_p1_prompt, nudges_id=1)
            )
        db.session.add_all(p1_nudge_prompts)

        #PILLAR 2 don't take anything personally 
        print("Seeding pillar two nudge action prompts...")
        p2n_action_prompts = [
            "When someone's words or actions leave you unsteady, ask them: Tell me how you decided that was an okay thing to say/do?",
            "Reminder: The behavior of others cannot rule you without first giving it permission to do so.",
            "Reminder: You are no more a one eyed, one horned, flying purple people eater, than you are whatever anyone says you are.",
            "When someone's words or actions leave you unsteady, ask yourself: What must this person be dealing with that they cannot act with kindness?",
            "When someone's words or actions leave you unsteady, consider the wounds you have that have been touched by what has been said.",
            "When someone sends you emotional poison, decide if you'd like to eat it.",
            "Remind a friend that they too, can choose to deny the poison of others.",
            "Remind someone that they are allowed to change their mind.",
            "Tell a friend in distress the power of unsubscribing to other's poison."
            "Lend an ear to someone in need."
        ]

        #PILLAR 2 don't take anything personally
        print("Seeding pillar two nudge prompts...")
        p2_nudge_prompts = []
        for i in range(10):
            one_p2_prompt = rc(p2n_action_prompts)
            p2_nudge_prompts.append(
                NudgePrompt(action_prompt=one_p2_prompt, nudges_id=2)
            )
        db.session.add_all(p2_nudge_prompts)

        #PILLAR 3 don't make assumptions
        print("Seeding pillar three nudge action prompts...")
        p3n_action_prompts = [
            "Communication gives you the power to gain knowledge. Ask questions to better understand someone's perspective.",
            "While we cannot control others, we can control ourselves. Take a pause before responding to conflict.",
            "Communicate your needs in your personal relationships. People can't read your mind.",
            "Communicate your needs in your professional relationships. People can't read your mind.",
            "Ask someone what they need from you. You cannot read minds.",
            "Ask yourself how you allow an assumption to ring true, even when it's not, simply to avoid being wrong.",
            "Have courage, ask questions.",
            "Pick a person, and see the world through their eyes today.",
            "Encourage someone to abandon their fear of being themselves by celebrating who they are today.",
            "Find ways to accept people without wanting to change them."
        ]

        #PILLAR 3 don't make assumptions
        print("Seeding pillar three nudge prompts...")
        p3_nudge_prompts = []
        for i in range(10):
            one_p3_prompt = rc(p3n_action_prompts)
            p3_nudge_prompts.append(
                NudgePrompt(action_prompt=one_p3_prompt, nudges_id=3)
            )
        db.session.add_all(p3_nudge_prompts)

        #PILLAR 4 always do your best 
        print("Seeding pillar four nudge action prompts...")
        p4n_action_prompts = [
            "Check in with yourself: Did you do the best you could given your current state?",
            "Consider how the state of `success` ebbs and flows based on the available resources of your current state.",
            "Encourage someone to view the value of their efforts higher than the value of the current outcome.",
            "Where can you give yourself grace today and congratulate yourself for the growth you have done?"
            "Where can you give someone grace today and accept someone for where they are?",
            "Your best is never going to be the same from one moment to the next. How can you use this to empower you?",
            "Does thinking 'I could have done better' help you accomplish your goals?",
            "Take action for the sake of it, and don't expect a reward.",
            "When you don't do your best, you deny yourself the right to be you.",
            "Shift your perspective on what is 'your best' and you will find yourself more at peace with your growth."
        ]

        #PILLAR 4 always do your best 
        print("Seeding pillar four nudge prompts...")
        p4_nudge_prompts = []
        for i in range(10):
            one_p4_prompt = rc(p4n_action_prompts)
            p4_nudge_prompts.append(
                NudgePrompt(action_prompt=one_p4_prompt, nudges_id=4)
            )
        db.session.add_all(p4_nudge_prompts)

        #-----------NUDGE PROMPTS-----------#





        #----------JOURNAL PROMPTS----------#
        #PILLAR 1 be impeccable with your word
        print("Seeding pillar one journal action prompts...")
        p1j_action_prompts = [
            "Consider the  grand destruction and magnificence that is created through speech.",
        ]
        
        #PILLAR 1 be impeccable with your word
        print("Seeding pillar one journal prompts...")
        p1_journal_prompts = []
        for i in range(10):
            one_p1_prompt = rc(p1j_action_prompts)
            p1_journal_prompts.append(
                JournalPrompt(action_prompt=one_p1_prompt, journals_id=1)
            )
        db.session.add_all(p1_journal_prompts)

        #PILLAR 2 don't take anything personally
        print("Seeding pillar two journal action prompts...")
        p2j_action_prompts = [
            "Journal about the difference between understanding someone's trauma and subjecting yourself to gaslighting.",
        ]
        
        #PILLAR 2 don't take anything personally
        print("Seeding pillar two journal prompts...")
        p2_journal_prompts = []
        for i in range(10):
            one_p2_prompt = rc(p2j_action_prompts)
            p2_journal_prompts.append(
                JournalPrompt(action_prompt=one_p2_prompt, journals_id=2)
            )
        db.session.add_all(p2_journal_prompts)

        #PILLAR 3 don't make assumptions
        print("Seeding pillar three journal action prompts...")
        p3j_action_prompts = [
            "Journal about the difference between understanding someone's trauma and subjecting yourself to gaslighting.",
        ]
        
        #PILLAR 3 don't make assumptions
        print("Seeding pillar three journal prompts...")
        p3_journal_prompts = []
        for i in range(10):
            one_p3_prompt = rc(p3j_action_prompts)
            p3_journal_prompts.append(
                JournalPrompt(action_prompt=one_p3_prompt, journals_id=3)
            )
        db.session.add_all(p3_journal_prompts)


        #PILLAR 4 always do your best
        print("Seeding pillar three journal action prompts...")
        p4j_action_prompts = [
            "Journal about the difference between understanding someone's trauma and subjecting yourself to gaslighting.",
        ]
        
        #PILLAR 4 always do your best
        print("Seeding pillar three journal prompts...")
        p4_journal_prompts = []
        for i in range(10):
            one_p4_prompt = rc(p4j_action_prompts)
            p4_journal_prompts.append(
                JournalPrompt(action_prompt=one_p4_prompt, journals_id=4)
            )
        db.session.add_all(p4_journal_prompts)



        # print("Seeding journal prompts...")
        # journal_prompts = [
        #     JournalPrompt(action_prompt = "Journal about what life means to you.", journals_id=1),
        #     JournalPrompt(action_prompt = "Journal about a time that you felt joy.", journals_id=2)
        # ]

        # completed_prompts = []
        # for completed_prompt in completed_prompts:
        #     one_user = rc(users)
        #     nudge_prompt = rc(nudge_prompts)
        #     journal_prompt = rc(journal_prompts)
        #     completed_prompts.append(
        #         CompletedPrompt(user_id=one_user.id, nudge_prompt_id=nudge_prompt.id, journal_prompt_id=journal_prompt.id)
        #     )

        # journal_prompts = []
        # for _ in range(random.randint(10, 25)):
        #     journal_prompt = JournalPrompt(action_prompt = fake.sentence(10), journals)

        # db.session.add_all(journal_prompts)
        #----------JOURNAL PROMPTS----------#





        #--------------NUDGES---------------#
        print("Seeding nudges...")
        # p1_nudges = []
        # for i in range(1):
        #     one_p1_nudge = rc(p1_nudge_prompts)
        #     p1_nudges.append(
        #         Nudge(image="url_here", action_type=one_p1_nudge, description="Nudges help you...", pillar_id=1)
        #     )
        # db.session.add_all(p1_nudges)
        p1_nudges = [
            Nudge(image="url_here", action_type="nudge", description="Nudges help you...", pillar_id=1)
        ]
        db.session.add_all(p1_nudges)

        p2_nudges = [
            Nudge(image="url_here", action_type="nudge", description="Nudges help you...", pillar_id=2)
        ]
        db.session.add_all(p2_nudges)

        p3_nudges = [
            Nudge(image="url_here", action_type="nudge", description="Nudges help you...", pillar_id=3)
        ]
        db.session.add_all(p3_nudges)

        p4_nudges = [
            Nudge(image="url_here", action_type="nudge", description="Nudges help you...", pillar_id=4)
        ]
        db.session.add_all(p4_nudges)


        #--------------NUDGES---------------#





        #-------------JOURNALS--------------#
        print("Seeding journals...")
        journals = [
            Journal(image="url_here", action_type="journal", description="Journaling is about...", pillar_id=1)
        ]
        db.session.add_all(journals)
        #-------------JOURNALS--------------#





        #--------------PILLARS--------------#
        print("Seeding pillars...")
        pillars = [
            Pillar(image="url_here", pillar_name="be impeccable with your word", description="explain what this means"),
            Pillar(image="url_here", pillar_name="never make assumptions", description="explain what this means"),
            Pillar(image="url_here", pillar_name="don't take anything personally", description="explain what this means"),
            Pillar(image="url_here", pillar_name="always do your best", description="explain what this means")
        ]
        db.session.add_all(pillars)
        #--------------PILLARS--------------#





        #---------COMPLETED PROMPTS---------#
        #PILLAR 1 be impeccable with your word
        print("Seeding pillar one completed prompts...")
        p1_completed_prompts = []
        for i in range(20):
            one_user = rc(users)
            nudge_prompt = rc(p1_nudge_prompts)
            journal_prompt = rc(p1_journal_prompts)
            p1_completed_prompts.append(
                CompletedPrompt(user_id=one_user.id, nudge_prompt_id=nudge_prompt.id, journal_prompt_id=journal_prompt.id)
            )
        db.session.add_all(p1_completed_prompts)
        
        #PILLAR 2 don't take anything personally
        print("Seeding pillar two completed prompts...")
        p2_completed_prompts = []
        for i in range(20):
            one_user = rc(users)
            nudge_prompt = rc(p2_nudge_prompts)
            journal_prompt = rc(p2_journal_prompts)
            p2_completed_prompts.append(
                CompletedPrompt(user_id=one_user.id, nudge_prompt_id=nudge_prompt.id, journal_prompt_id=journal_prompt.id)
            )
        db.session.add_all(p2_completed_prompts)

        #PILLAR 3 don't make assumptions
        print("Seeding pillar three completed prompts...")
        p3_completed_prompts = []
        for i in range(20):
            one_user = rc(users)
            nudge_prompt = rc(p3_nudge_prompts)
            journal_prompt = rc(p3_journal_prompts)
            p3_completed_prompts.append(
                CompletedPrompt(user_id=one_user.id, nudge_prompt_id=nudge_prompt.id, journal_prompt_id=journal_prompt.id)
            )
        db.session.add_all(p3_completed_prompts)

        #PILLAR 4 always do your best
        print("Seeding pillar four completed prompts...")
        p4_completed_prompts = []
        for i in range(20):
            one_user = rc(users)
            nudge_prompt = rc(p4_nudge_prompts)
            journal_prompt = rc(p4_journal_prompts)
            p4_completed_prompts.append(
                CompletedPrompt(user_id=one_user.id, nudge_prompt_id=nudge_prompt.id, journal_prompt_id=journal_prompt.id)
            )
        db.session.add_all(p4_completed_prompts)
        
        #---------COMPLETED PROMPTS---------#





        #----------RECOMMENDATIONS----------#
        print("seeding recommendations...")
        recommendations = [
            Recommendation(rec_type="book", rec_link = "url_here", image="url_here", blurb="why this is a recommendation for micelio users"),
            Recommendation(rec_type="podcast", rec_link = "url_here", image="url_here", blurb="why this is a recommendation for micelio users")
        ]
        db.session.add_all(recommendations)
        #----------RECOMMENDATIONS----------#


        db.session.commit()
        print("Done seeding!")
        # Seed code goes here!
  
