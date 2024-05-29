# ManageProject App

<h3>Description</h3>

ManageProject is an application that can be utilized by users who need to mange their projects specifically for those working in software engineering.

The manageProject app has two repositories:
 - MangeProject---Front-End: is for front-end of the app with React (No EJS)
 - MangeProject ---Back-End: is for back-end of the app with with mongoose

Users will need to signup and login if they need to access the app.


 <h2> ManageProject---Front-End </h2></br>
 <h3>Wireframes</h3>
 The front-end repository can be accessed through the link below: </br> </br>
 https://github.com/davedawita/ManageProject---Front-End.git  </br> </br>
 
 - Please see the wireframe for the Create Account/Login page below: </br></br> 

![image](https://github.com/davedawita/ManageProject---Front-End/assets/155693018/e5ae9793-1608-47ab-afcf-24db53e466f7)


 - Please see the wireframe for the index page below: </br></br>

 ![image](https://github.com/davedawita/ManageProject---Front-End/assets/155693018/c06231ac-84f1-44fd-a41d-12f7df249701)


 - Please see the wireframe for the show page page below: </br></br>

 ![image](https://github.com/davedawita/ManageProject---Front-End/assets/155693018/59f4f250-f00e-40b8-a43e-f59cc3c9136b)


**<h3>User Stories</h3>** 
 - As a user, I want to be able to sign up and create an account with a username and password, so that I have access to the app.</br>
 - As a user, I want to be able to log in with my username and password, so that I can use the app’s features and functionalities and ensure that anything I do within the app is saved to my account.</br>
 - As a user, I want my name to be displayed at the top of the web page, so that it provides a personalized and welcoming experience each time I access the app.</br>
 - As a user, I want to have a “board” for my project, so that I can see and manage my project.</br>
 - As a user, I want the board for my project to have three lists called “To Do,” “Doing,” and “Done,” so that I can keep track of what needs to get done, what I am in the process of doing, and what has 
   already gotten done.</br>
 - As a user, I want to be able to add or create a “task” to any of the three lists, so that I can add to the progress of my project at any stage.</br>
 - As a user, I want to add a task to a list and be able to input specific details, including a title, description, date created, date due, and status, so that I can understand the task, its 
   requirements, its creation and due dates, and its placement within the three lists based on its status.</br>
 - As a user, I want to be able to edit the details of any task, so that I can update its information or move it to a different list as needed.</br>
 - As a user, I want to be able to delete a task, so that if it is no longer necessary it will no longer appear in the list.</br>
 - As a user, I want to be able to log out of my account, so that I can ensure the security of my information and prevent others from using my account.

The folder structure includes components: Header & main & pages: Create, Edit, Index, & Show.</br>
The App is basically codded in App.js and all user log-in/createaccount code is in App.js.</br>

<h2>ManageProject ---Back-End</h2>

<h3>MODELS:</h3> 
The following models are included: </br></br>

<b>Users.js:</b></br>
const userSchema = new mongoose.Schema({</br>
    username: {type: String, unique: true, required: true},</br>
    password: {type: String, required: true},</br>
    image: String</br>
})</br></br>
<b>tasks.js:</b></br>
const taskSchema = new mongoose.Schema({</br>
    title: {type: String, required: true},</br>
    description: String,</br>
    dateCreated: {type: Date, default: Date.now, required: true},</br>
    dateDue: {type: Date, required: true},</br>
    status: {type: String, enum: ['To Do', 'Doing', 'Done'], required: true}</br>
})</br>

<h3>ROUTES:</h3>
The following list of routes are included:</br>

![image](https://github.com/davedawita/ManageProject---Front-End/assets/155693018/d19eac79-0bde-42a4-a446-b2401a0c2e51)


<h4>In controllers/tasks.js:</h4> </br>

GET/Tasks allows users to see the main project board with all tasks.</br>
POST/Tasks allows users to add a task to the project board.</br>
PUT/Tasks/:id allows users to update the specific task's details</br>
DELETE/Tasks/:id allows users to delete tasks</br>


<h4>In controllers/users.js:</h4> </br>
PUT/login allows users to login. </br>
POST/createaccount allows users to have user name and password</br>

handleLogout() function on the front-end allows users to logout</br></br>


<h2>Installation Instructions</h2>
 - Please use the link below to install the app. Enjoy the app!   </br> </br>
 https://manage-project-app.netlify.app <br> </br>

 
If you are on a browser, use of Google chrome is highly recommended.    </br>
<h2>Technologies used</h2>
REACT, Javascript, Node.js, CSS, ejs, Express, MongoDB, Mongoose, Postman, and Figma(Only for wireframes without Dev Mode). We can also say that we use MERN (Mongodb, Express, React, Node.js) stack.  </br>

<h2>MVP Goals</h2>
Full CRUD(Create, Read, Update, Delete) Functionality. </br>
Login and Logout access for users   </br>

<h2>Troubleshooting</h2>
Please click the back button of the browser to go back to previous page. Refresh the page.   </br>

<h2>Forthcoming Features</h2>
In the future, we need users to be able to create multiple task boards. In addition, we need to enable users invite someone and add other collaborators to the app. We may also add chat rooms and make commenting functionality.

