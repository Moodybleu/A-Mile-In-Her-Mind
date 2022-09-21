# Project 2: A Mile In Her Mind

## Project idea and description

My app is a word prompt for individuals who have experienced trauma to journal or write about their feelings on their trauma. The application will prompt the user a word for them to integrate into a journal entry or poem. They will then be able to write an entry in the application for themselves and in the future, to share. 

## Installation instructions

## Choice of API

Random-words-API - https://api.api-ninjas.com/v1/randomword

## Approach taken
As we began our second project i felt very overwhelmed by the tasks ahead of me. I knew i would be able to set up my app just fine. Set up and installing my dependencies was the easy part. It wasn't until i got around to making my models and creating my RESTful route that I became unsure. 

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