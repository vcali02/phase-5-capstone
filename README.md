# micelio - expand your hidden dimensions 

## User Stories:
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
| /adventurers             | GET    |                                                                                        | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "valCal", "password": ****** }, {..}, {..},...                                                  |
| /adventurers             | POST   | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" } | { "name": "data", "username": "data", "email": "data@email.com"' "password": "*****" }                                                                            |
| /adventurers/<int:id>    | GET    |                                                                                        | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "valCal", "password": "******"  }                                                               |
| /adventurers/<int:id>    | PATCH  | { "attr":"data"}                                                                       | { "id": 1, "name": "Val", "email": "val@awesome.com", "username": "UpdatedvalCal", "password": "******"  }                                                        |
| /adventurers/<int:id>    | DELETE |                                                                                        | {}                                                                                                                                                                |
| /trails                  | GET    |                                                                                        | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }, {..}, {..} |
| /trails/<int:id>         | GET    |                                                                                        | {     "id" : 2,     "name" : "trail name",     "difficulty" : 5,     "distance" : 2,     "altitude" : 5280,     "description" : "trail description" }             |
| /hiked_trails            | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }, {..}, {..},...                                                            |
| /hiked_trails/<int:id>   | GET    |                                                                                        | {     "id" : 2,     "date" : 06-23-2023,     "adventurer_id" : 1,     "trail_id" : 2 }                                                                            |
| /hiked_trails/<int:id>   | DELETE |                                                                                        | {}                                                                                                                                                                |
| /trail_reviews           | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }, {..}, {..}, ..                                                                           |
| /trail_reviews           | POST   | {     "review" : "review here",     "adventurer_id" : 2, "rating":4  }                 | {     "review" : "review here",     "adventurer_id" : 2, "rating":4  }                                                                                            |
| /trail_reviews/<int:id>  | GET    |                                                                                        | {     "id" : 1,     "review" : "review here",     "adventurer_id" : 2 }                                                                                           |
| /trail_reviews/<int:id>  | PATCH  | { "attr" : "data",     "adventurer_id" : 3 }                                           | { "attr" : "data",     "adventurer_id" : 3 }                                                                                                                      |
| /trail_reviews/<int:id>  | DELETE |                                                                                        | {}                                                                                                                                                                |
| /friends                 | GET    |                                                                                        | {     "id" : 5,     "name" : "Beau" }, {..}, {..}, ...                                                                                                            |
| /friends/<int:id>        | GET    |                                                                                        | {     "id" : 5,     "name" : "Beau" }                                                                                                                             |
| /friends/<int:id>        | DELETE |                                                                                        | {}                                                                                                                                                                |
|/login | POST | {"name":"Val", "password": "******"} |  |
|/authorize_session | GET | | |

## React Component Tree
![Screenshot 2023-06-28 at 2 54 32 PM](https://github.com/vcali02/micelio/assets/122405969/d3ba5be2-3e7c-4c2f-8c0b-87327fe67894)


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

## Trello Board
<img src='./Trello.png' alt='Trello'>
