# Project Overview

## Project Name

IceBreaker
## Project Description

This full CRUD mini-game allows users to create, update, and play through levels from an airtable database. The goal of the game is to travel from point A to point B on a grid, touching each non-obstacle tile on the grid exactly once. Once a tile has been traversed, it cracks, meaning that traveling back to that tile will end the game.

## Wireframes

##### Homepage Wireframe
![Wireframe](./assets/homePage.png)

##### Level Select Wireframe
![Wireframe](./assets/levelSelect.png)

##### Level Editor Wireframe
![Wireframe](./assets/levelForm.png)

## Component Hierarchy
![Hierarchy](./assets/hierarchy.png)

## API and Data Sample

Below is a sample response from my airtable database, which tracks the author, level name, difficulty, width and height of the grid, and a stringified JSON representing the grid itself.

```json
{
    "records": [
        {
            "id": "recHTS4vn7mZSI4MU",
            "fields": {
                "levelName": "Beginner Level",
                "height": 3,
                "difficulty": "easy",
                "author": "Beej",
                "width": 3,
                "grid": "{\"0\":{\"x\":0,\"y\":0,\"obstacle\":false},\"1\":{\"x\":1,\"y\":0,\"obstacle\":false},\"2\":{\"x\":2,\"y\":0,\"obstacle\":false},\"3\":{\"x\":0,\"y\":1,\"obstacle\":false},\"4\":{\"x\":..."
            },
            "createdTime": "2021-01-19T23:25:04.000Z"
        },
    ],
    "offset": "recidGJw7Y1u393cZ"
}
```

### MVP/PostMVP
#### MVP 

- Home page with routes to respective pages
- Playable levels using on-click and/or keyboard controls
- Get and post level/level information from airtable

#### PostMVP  

- Alert users if their custom level is unsolvable using a pathfinding algorithm.
- Ability to update existing levels
- Timer to track time to complete level
- Functionality to create levels of varying dimensions
- Option to generate random levels

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 20| Proposal Approval / Airtable setup | Complete
|Jan 21| Component Layout & Routing / Get, Set, & Post Data | Incomplete
|Jan 22| Jan 21 cont'd / Basic CSS | Incomplete
|Jan 23| Basic CSS / MVP | Incomplete
|Jan 24| Post-MVP CSS  | Incomplete
|Jan 25-26| Post-MVP functionality | Incomplete
|Jan 27| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 3hrs| 3hrs | 3hrs |
| Airtable Setup | H | 1hrs| 1hrs | 1hrs |
| Basic Structure and Component Hierarchy | H | 1hrs | |  |
| Navbar Navigation and Routing | H | 1hrs|  |  |
| Basic CSS for Home | H | 3hrs|  |  |
| Basic CSS for Lvl Select | H | 3hrs|  |  |
| Basic CSS for Lvl Create | H | 3hrs|  |  |
| GET / POST Airtable Data | H | 2hrs|  |  |
| Logic for Reading Grid Layout From Airtable | H | 2hrs|  |  |
| Making Grid Editable | H | 2hrs|  |  |
| Logic for Traversing Grid / Playing Game | H | 3hrs|  |  |
| Logic for Win/Loss & Resetting | H | 3hrs|  |  |
| Pathfinding Logic for Checking Level Solution | H | 5hrs|  |  |
| Update/Delete Airtable Data | H | 3hrs|  |  |
| Total | H | 36hrs |  |  |

## SWOT Analysis

### Strengths:

I feel pretty comfortable with using React to create a full CRUD app, and I have a clear picture of what I want my project to look like at the end. I've also done a couple YT code-alongs of simple games to get a handle on a way to approach logic-based games in React and JS.

### Weaknesses:

My biggest weakness is that I've never built a game on my own, and it requires a lot of logic-based thinking. Also, figuring out the most efficient way to store the data of the grid layouts will be a new challenge, since we didn't handle that kind of data in class.

### Opportunities:

Honestly, this is a big opportunity to learn a ton about both React development and (simple) game development. I already felt pretty solid on the basics of React and CRUD-based applications, so I wanted to try to stretch myself like I did in P1.
### Threats:

If I'm not careful, I'm a rabbit-holer when it comes to features and debugging. Additionally, I don't like asking for help unless I absolutely feel I need it, because I know squad leads already have their hands full with other students. I generally feel I have the capability to solve most issues with some research and elbow grease. While self-learning is defintely a good trait, I should try to touch base with my squad lead / IAs more often--something I didn't do at all with P1 aside from stand-ups.