# micelio - expand your hidden dimensions 

## As a user you can:
- explore the four pillars of expansion
- explore methods for expansion
- view your growth
- navigate home
- explore recommended stimuli
- learn about micelio
- log in and out


## Wireframe
https://www.figma.com/file/hRXCinhvPWBrCFlWpTpQmO/micelio?type=design&node-id=0-1&mode=design&t=AYhDihunhCv6L994-0
![Screenshot 2023-07-04 at 3 27 56 PM](https://github.com/vcali02/micelio/assets/122405969/1f25688d-f7fa-4745-8d3d-9aaef76b49cb)
![Screenshot 2023-07-04 at 3 28 53 PM](https://github.com/vcali02/micelio/assets/122405969/ee550e44-a30d-44bd-a4c1-fda31c7adf8b)
![Screenshot 2023-07-04 at 3 28 20 PM](https://github.com/vcali02/micelio/assets/122405969/c953bf56-09bb-4565-aacf-de9632cf7cb1)
![Screenshot 2023-07-04 at 3 29 02 PM](https://github.com/vcali02/micelio/assets/122405969/7f5e9a86-bab5-4cd2-848d-19cbf4df4b89)

## Schema
![Screenshot 2023-07-04 at 3 29 51 PM](https://github.com/vcali02/micelio/assets/122405969/cf779568-94f3-476f-9960-d3765034664d)


## API Routes
| API Route                | Method | Body                                                                                   | Response                                                                                                                                                          |
|--------------------------|--------|----------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /user             | GET    |                                                                                        | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "valCal", "password": ****** }, {..}, {..},...                                                  |
| /user             | POST   | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" } | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" }                                                                            |
| /user/<int:id>    | GET    |                                                                                        | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "valCal", "password": "******"  }                                                               |
| /user/<int:id>    | PATCH  | { "attr":"data"}                                                                       | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "UpdatedvalCal", "password": "******"  }                                                        |
| /user/<int:id>    | DELETE |                                                                                        | {}                                                                                                                                                                |
| /completed_prompts      | GET    |                                         | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }, {..}, {..} |
| /completed_prompts/<int:id> | GET    |                                                                               | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }             |
| /completed_prompts       | POST   | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" } | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" }                                                                            |
| /completed_prompts/<int:id> | DELETE |                                                                                        | {}                                                                                                                                                                |
| /nudge_prompt            | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }, {..}, {..},...                                                            |
| /nudge_prompt/<int:id>   | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }                                                                            |
| /nudge_prompt       | POST   | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" } | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" }                                                                            |
| /nudge_prompt/<int:id>   | DELETE |                                                                                        | {}                                                                                                                                                                |
| /journal_prompt            | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }, {..}, {..},...                                                            |
| /journal_prompt/<int:id>   | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }                                                                            |
| /journal_prompt       | POST   | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" } | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" }                                                                            |
| /journal_prompt/<int:id>   | DELETE |                                                                                        | {}                                                                                                                                                              |
| /nudge           | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }, {..}, {..}, ..                                                                           |
| /journal           | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }, {..}, {..}, ..                                                                           |
| /pillar           | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }, {..}, {..}, ..                                                                           |
| /pillar/<int:id> | GET    |                                                                               | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }             |
| /trail_reviews           | POST   | {     "review" : "review here",     "adventurer_id" : 2, "rating":4  }                 | {     "review" : "review here",     "adventurer_id" : 2, "rating":4  }                                                                                            |
| /trail_reviews/<int:id>  | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }                                                                                           |
| /trail_reviews/<int:id>  | PATCH  | { "attr" : "data",     "adventurer_id" : 3 }                                           | { "attr" : "data",     "adventurer_id" : 3 }                                                                                                                      |
| /trail_reviews/<int:id>  | DELETE |                                                                                        | {}                                                                                                                                                                |
| /recommended      | GET    |                                         | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }, {..}, {..} |
| /recommended/<int:id> | GET    |                                                                               | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }             |
| /recommended       | POST   | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" } | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" }                                                                            |
| /recommended/<int:id> | DELETE |                                                                                        | {}                                                                                                                                                                |
|/login | POST | {"name":"Val", "password": "******"} |  |
|/authorize_session | GET | | |

## React Component Tree
![Screenshot 2023-07-04 at 4 14 25 PM](https://github.com/vcali02/micelio/assets/122405969/21c4a5f7-ab7d-4e3a-9cda-47addfdb5f61)



## Client-side Routes
| Client Route   | Component     |
|----------------|---------------|
| /home              | Home.js        |
| /about        | About.js  |
| /pillars      | Pillars.js  |
| /methods | Journal.js and Nudge.js|
| /signup    | SignupForm.js  |
| //login    | LoginForm.js  |
| /recommended        | Recommended.js     |
| /growth         | CompletedPrompts.js  |


