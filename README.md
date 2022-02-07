# What is JobHunt ?

JobHunt is a Responsive MERN STACK Project where users can apply to different jobs very quickly with one click and companies can post their jobs.

---
### Link of the hosted Application on HEROKU : [JobHunt](https://jobhunt-org.herokuapp.com/)


---
## What was the need of it? OR What was the problem ?

One has to go to different websites and companies career page to apply for the job and fill their information again and again which might be frustrating for some people.

## How JobHunt Solves the problems ?

It provides an interface for both the companies and the job seekers. The companies can post their job for which they are hiring and the interested candidates can apply to the jobs directly through this app without going to different websites. Also, there is no need to fill the details again and again. One can store the information in the profile section and then while applying all the necessary details will be feteched automatically and shared with the company.


### Technologies and Frameworks Used:
<b>DataBase:</b> MongoDb <br>
<b>FrontEnd:</b> React <br>
<b>BackEnd:</b> Java Script <br>
<b> Platform for executing JavaScript:</b> NodeJs <br>
<b>FrameWorks Used:</b> ExpressJs for NodeJs and Antd, Bootstrap for frontend Designing

## Installation: 
<b>1.</b>  import the job_hunt folder into your pc first. <br>
<b>2.</b>  Install all the important packages from the console in the "job_hunt" folder: <br>
   -  npm i npm <br>
   -  npm i nodemon <br>
   -  npm i antd <br>
   -  npm i express <br>
   -  npm i mongoose <br>
   -  npm i aos <br>
   -  npm i bootstrap <br> 

<b>3.</b> Create a new Database named "JobHuntLocal" with MongoDb and create 2 collections inside the "JobHuntLocal" database namely "users" and "jobs".

<b>4.</b> Change the 6th line in "database.js" file with this line : "mongodb+srv://MongoDbUserName:YourMongoDbPassword@cluster0.vtfst.mongodb.net/JobHuntLocal", <br>

<b>5.</b> start the server from the "job_hunt" folder by typing the command "nodemon server".
<b>6.</b> start the app from the "job_hunt/client" folder by typing the command "npm start".

### That's all you have to do, open your browser and type "http://localhost:3000/" to see the application.

# Preview:
<img width="958" alt="Home" src="https://user-images.githubusercontent.com/72312677/152767268-16581914-c3c6-49b3-9b44-521f937061dc.png">
<img width="694" alt="jobdetail" src="https://user-images.githubusercontent.com/72312677/152767301-88a3cfd3-ba7c-4a29-9cc5-f0e563ece2d5.png">
<img width="960" alt="Login js" src="https://user-images.githubusercontent.com/72312677/152767323-c776e4c2-0401-470b-9b06-79f00c85d62e.png">
<img width="960" alt="cadidates" src="https://user-images.githubusercontent.com/72312677/152767355-ee169285-a828-46f1-971d-112f76150a5e.png">
