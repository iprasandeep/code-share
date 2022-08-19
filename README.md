# Code Share A Full Stack Web Application
**Introduction**  <br />
Code Share is a full stack web application, developed for sharing code in real time envirorment with multiple users. Multiple users can login generate id and enter into the room or they can join the new room.  <br />
**Features**
 1. Users can create new room.
 2. Users can join by invited room id.
 3.  Every user can be get notification for join or left.
 4.  Multiple users can write code in realtime enviroment.
 5.  Joined users can copy room id for sharing same id with other to join coding share enviroment.

**Demo** 
**First Page Login**
![enter image description here](https://i.imgur.com/pFHcIYt.png)
**Page After Login**
![enter image description here](https://i.imgur.com/sNRIJ4g.png)
**Page of joined multiple users in two diffferent tab**
![enter image description here](https://i.imgur.com/FK4hPuN.png)

## Tech Stack Used

 - **[JavaScript](https://www.w3schools.com/js/)** -  *JavaScript is _a scripting language_ that enables you to create dynamically interactive web page.*
 - **[NPM](https://www.npmjs.com/)** - *npm is a package manager for the JavaScript programming language maintained by npm, Inc.*
 - **[ReactJs](https://reactjs.org/)** - *React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.*
 - **[Material UI](https://mui.com/material-ui/getting-started/overview/)** - *Material-UI is simply a library that allows us to import and use different components to create a user interface in our React applications.*
 - **[NodesJs](https://nodejs.org/en/docs/)**  -  *NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.*
 - **[CodeMirror](https://codemirror.net/)** -  *CodeMirror is a JavaScript component that provides a code editor in the browser.*
 - **[ExpressJs](https://expressjs.com/en/starter/installing.html)** - *Express.js, or simply Express, is a back end web application framework for Node.js.*

## Setup Guide
We are assuming that you know basics of JavaScript and familiar with building web pages in HTML, CSS.
Here are some steps to setup some required dependencies for setup this application in in your system.

**Step 1:** In the first step you need to install npm in your system, just open terminal and type this command or you can also follow npm docs from [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

    $ npm install -g npm
   Check your npm and nodejs version - 
   

     $ node -v
     $ npm -v 
**Step 2:** Install React Library dipendencies in your system - 

    $ npx create-react-app ./
    $ npm start
   **Step 3:**  In this step you need to install material ui dependencies 
   

    $ npm install @mui/material @emotion/react @emotion/styled
For more information you can follow material ui docs from [here](npm%20install%20@mui/material%20@emotion/react%20@emotion/styled).  <br />
**Step 4:** Setup uuid npm package for generating random id visit npm uuid docs for more info, [here](https://www.npmjs.com/package/uuid) - 

     $ npm install uuid
Setup npm toast notification packages and react avtar for generating name avatar  - 
   
    $ npm i react-hot-toast
    $ npm install react-avatar
  **Step 4:** Install CodemMirror dependencies using npm - 
  
    $ npm i codemirror
   **Step 5:** Install Express js dependencies for backend -
   
	$ npmm init
	$ npm install express
    $ npm install express socket.io socket.io-client
    $ npm add -D nodemon  
    
**Final Thoughts**   <br />
All required steps done for setup the code of this application in local envirorment. If there is any mistake or suggestions for new feature update please feel free to create issue for more interesting changes.
**Cheers 🥂**

        
