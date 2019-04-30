Introduction:

This is for work on site for IJC27.

A first dip into  a project for supporting a juggling festival.

TBD:
1. Site with whom is responsible for what
2. Support tickets
3. Bathroom Status

Requirements:

Overall:
1. Overall
    1. Authentication via gmail
    2. Authentication via facebook
    3. Link to IJC site
    4. Support access (read support calls and answer)
    5. Customer access 

2. Ability to seem whom is responsible for what 
    1. Email viewable
    2. Cell phone if allowed
    3 Message via an app (optional)
3. Bathroom status
    1. Location of bathrooms
    2. Number of stalls
    3. Status of stalls
    4. Ability to open support ticket 
4. Support tickets
    1. Name of person
    2. Status
        1. Opened
        2. In Progress
        3. Resolved
        4. Closed
    3. Email of status change
    4. Backend where it goes to
5. List of Jugglers
    1. Name of person (first , last) (hebrew , english)
    2. Optional contact information
    3. Objects they juggle
        1. Type
        2. Number
    4. Optional list of IJC's attended
6. Volunteers page
    1. Comments for solutions and what you can do.
    
Data Structure:
Key Value
* Support:

* Support Person
```json
{
 "uid" : "String",
 "firstName": "String",
 "lastName": "String",
 "contact": "String",
 "inProgressCallsNumber":"Number"
 }
```
* Project
```json
 {
 "uid" : "String",
 "project" : "String",
 "title" : "String",
 "Start" : "Date",
 "ActualStart" : "Date",
 "End" : "Date",
 "ActualEnd" : "Date",
 "userArray" : ["String"]
 
 }
```

 

User Stories: