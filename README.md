# Bad Bank Capstone Project
Full-Stack Bad Bank Capstone Project for the MIT xPRO 

### Description/Motivation
This bad bank project uses a 3 tier system including a react front end hosted on an HTTP server using node and express and then a back end of mongoDB and docker. It incorporates the full stack and runs off of an independent server.

### Installation Guidelines
Download all of the files to your PC.
In order to install this application, you should already have Docker installed on your local machine. If you do not, use the Docker setup guide (Links to an external site.) to get you started.

Go into the root of that folder in a terminal window and run the following commands:
1.	npm install
2.	npm init -y
3.	npm install express
4.	npm install cors
5.	npm install mongodb
6.	docker run -p 27017:27017 --name badbank -d mongo. 
7.	Once it is running, check that it is functioning by navigating to localhost:27017 in a browser. Note: If you do not install this application in one sitting and need to restart your MongoDB Docker container, you may need to remove the previously created “bad bank” container with the command: docker rm /badbank before re-running the command above.
8.	To verify that the test has been successful, you will need to download Robo 3T, which will allow you to browse your MongoDB database.
9.	Run the node mongo_test.js command in the same directory as the file to test out your Docker MongoDB instance. Note: You will need to both initialize a node project in the same folder and run the npm install mongodb command in order to run the file as is.
10.	Next, use Robo 3T to check the contents of your MongoDB database. Start by selecting the Create link at the top of the smaller window. Since we started MongoDB in localhost, port 27017, the default settings will work for. Now choose the newly created connection and select Connect. 
11.	node index.js
12.	Once you have followed the instructions above, you should be able to go to your browser and navigate to localhost:3000

### Screenshots
    
    
### Technology Used
•	HTML/CSS/JS
•	Express
•	React
•	Node
•	MongoDB
•	Docker

### Features
•	Account Creation
•	Login Authentication
•	Hosted on Server
•	Maintaining State Across Logins

### License
MIT 

