# Project 2: A Mile In Her Mind

## Project idea and description

My app is a word prompt for individuals who have experienced trauma to journal or write about their feelings on their trauma. The application will prompt the user a word for them to integrate into a journal entry or poem. They will then be able to write an entry in the application for themselves and in the future, to share. 

## Installation instructions

## Deployment link
A Mile In Her Mind - https://a-mile-in-her-mind-moodybleu.koyeb.app/

## Choice of API

Random-words-API - https://api.api-ninjas.com/v1/randomword

## Approach taken
I started with the set up of my NPM packages and making my models. Once i had those completed i started to set up my RESTful routes, these took me some time to figure out so i moved onto filling in the pages and came back to my routes toward the end of the project.

## Tech used
The tech I used to build my app was node.js, express.js, third-party API, RESTful routes, axios, a database, routers, and method Override.

## ERD
![Wireframe](./ERD.png)

## RESTful routes
| HTTP METHOD (_Verb_) | URL (_Nouns_)        | CRUD    | Response                             | Notes                                                                                                                    |
| -------------------- | -----------------    | ------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| GET                  | `/`                  | READ    | Array of entries you've made `{ [ entry1, entry2 ] }`  | Displays all entries made                                                                               |
| GET                  | `/entries/edit/:id`  | READ    | edit entry `{ entry }`                               | details view of a single entry (aka `/entry/1234`)                                                                                |
| POST                 | `/entries/new`       | CREATE  | new entry is created `{ entry }`                       | can send back a status `204` (no content), a redirect to where to find data (GET `/entries/:entry_id`) or just the new entry data |
| PUT/PATCH            | `/entries/edit/:id`  | UPDATE  | updated entry `{ entry }`                              | can send back a status `204` (no content), a redirect to where to find data (GET `/entries/:entry_id`) or just the new entry data |
| DELETE               | `/entries/:id`       | DESTROY | Delete an old entry or shared entry                    | can send back a status `204` (no content), a redirect to where to find data (GET `/entries`)                                      |

## Wireframe

![Wireframe](./A-Mile-In-Her-Mind-Wireframe/1.png)
![Wireframe](./A-Mile-In-Her-Mind-Wireframe/3.png)
![Wireframe](./A-Mile-In-Her-Mind-Wireframe/2.png)

## User Story

- as a user I want to be able to login to my own profile
- As a user want to be able to write an entry with a prompted word

## MVP 
 - user is able to log in 
 - user is able to write an entry
 - user is able to see a word for their prompt
 - user can see their past entries on their homepage
 

## stretch goals
- calm music in the background of entry page
- Anxiety attack button -- for users who have panic attacks mid-entry. The button will connect them to a serene scene and play a meditation that reminds them they are safe now
- access past entries by clicking prompted word in the list of your past prompts
- user can like other users entries
- users can optionally share entries

## Post-Project reflection
- This project proved very difficult for me. I had an exceptionally hard time understanding routes and how to get them functioning. I feel I would have had more fun with my project if it was a project for pleasure instead of for school. Obviously this would remove any time crunch I had for this project and allow me to just create. I do have a handful of bugs i'm still going to try to fix in the future. The delete function still deletes the first entry every time and I can't get the background image to cover all my pages. Given more time i think i would have been able to successfully implement all of the functionality I wanted for my app. But i did learn along the way that my time-management skills need work, and I need to rein in my expectations for any future projects. I've caught myself already expecting perfection from my coding abilities and that's just not feasible. this project definitely taught me a lot about myself and about coding. 

## sources
- Blog-pulse code along 
- dino-CRUD code along
- Express project-organizer code along