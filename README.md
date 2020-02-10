# TaskManager [Screenshots](https://drive.google.com/drive/folders/1N4k5mwwF00IWWDYa-Hr1d-AZ_-jr80w5?usp=sharing)
MERN Stack Todo List App

![Task Manager](https://doc-10-84-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/3nb2okgg1hpk3rkjbpo2577obrm5gqjt/1581349500000/12405018376592197353/*/1Wf5et1c9O1pM5DQyaCFOUnXtdVWwFNzq)

## How to Run
1. Install node 
1. Install Mongodb
1. Go to TaskManager/backend, do an npm install
1. From TaskManager/backend folder run node src/index.js 
1. Go to TaskManager/frontend, do an npm install
1. From TaskManager/frontend run npm start
1. Open browser and navigate to `localhost:3000/todo`


## How it use
1. Upon opening the page, you will see login option in the navbar
1. Enter credentials, 
    1. if the username and password exists it will signin 
    1. else it will sign up with those credentials and signin
1. upon login you will see your already added tasks and option to add new task
1. Each task will have a complete button to mark the task as complete and delete from the list

## How Backend works
1. Backend uses Node, Express, Mongoose and Body Parser
1. For every API request is routed through express router, body is parsed through bodyparser and calls to mongo are made through Mongoose.
1. Created REST APIs for each user functionality
1. **/login:** 
    1. to signin existing user or sign up and sign in a new user
    1. Make a call to MongoDB to check if user with these credentials exist
    1. If user does not exists, make another call to mongo to save new credentials.
1. **/addtask:** 
    1. to add new task for a specific user
    1. Get count of all tasks of the user from mongo
    1. make another call to mongo to add new task with taskid of count+1
1. **/get/:username:** to get all tasks of a specific user
1. **/updateTask:** to mark a task as complete

## How Frontend works
1. Frontend uses React, Redux, Redux-Saga and React-Bootstrap
1. All UI Component use React-Bootstrap's Bootstrap styled React components
1. Used redux store to store user info and tasks list
1. calls to backend are routed through Redux-Saga
1. Root UI Component is MainView
1. Navbar (which also includes Login), TasksList and TaskAdder are child componenets
1. Upon Login,
    1. User entered credentials are sent to LoginSaga
    1. Upon successful signin or signup, credentials are stored in Redux Store 
    1. Another backend call is made to get tasks for the given username and those tasks are stored in Redux Store
1. Upon Completing Task,
    1. Task Id is sent to TasksSaga
    1. Backend call to mark task as complete is made. 
    1. Another backend call is made to get tasks for the given username and those tasks are stored in Redux Store
1. Upon Adding Task,
    1. Task Description is sent to TasksSaga
    1. Backend call to add task is made. 
    1. Another backend call is made to get tasks for the given username and those tasks are stored in Redux Store

## Improvements
1. Validations on Frontend
1. Use token based authentication like passport.js

## Screenshots
Url: [G Drive](https://drive.google.com/drive/folders/1N4k5mwwF00IWWDYa-Hr1d-AZ_-jr80w5?usp=sharing)
