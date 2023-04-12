# SmartBrain

This is a face recognition React application that uses the 
Clarifai API (via machine learning face recognition), linked to a server and uses the postgreSQL Database to host users


| Home Page | Register Page |
| ------------- | ------------- |
| <p align="center"><img width="1493" alt="Screen Shot 2023-01-06 at 11 00 23" src="images/home.PNG" width="800" height="300"></p> | <p align="center"><img width="1493" alt="Screen Shot 2023-01-06 at 11 00 23" src="images/register.png" width="800" height="300"></p>  |

<h2>Getting Started</h2>

Clone the repository
   ```sh
   git clone https://github.com/LiorAtiya/SmartBrain.git
   ```
Install NPM packages (main folder, Back-end folder, Front-end folder
   ```sh
   npm install
   ```
   
Use docker or download local PostgreSQL and create database 'smartbrain'
   ```sh
   CREATE DATABASE smartbrain;
   ```
Inside the smartbrain database create 2 tables
   ```sh
   CREATE TABLE users (
        id serial PRIMARY KEY,
        name VARCHAR(100),
        email text UNIQUE NOT NULL,
        entries BIGINT DEFAULT 0,
        joined TIMESTAMP NOT NULL
    );

   CREATE TABLE login (
        id serial PRIMARY KEY,
        hash VARCHAR(100) NOT NULL,
        email text UNIQUE NOT NULL
    );
   ```
   
Go to the server file in the backend folder and change
   ```sh
    //Connect to postgreSQL
    const db = knex({
      client: 'pg',
      connection: {
        host: 'localhost',
        user: 'YOUR_USER',
        password: 'YOUR_PASSWORD',
        database: 'smartbrain',
      }
    })
   ```


Run the project - Frontend & Backend folders
   ```sh
   npm run start
   ```
   

<h2>Usage</h2>

1. Signin

    - Enter email and password to login or click on the register buttons to register and create an account.

2. Home
    - Enter the URL in the input box and press the Detect Button
    - The image will display below the bar along with the bounding box detecting the face, if any.
    - Based on the number of users and the times you have detected faces, the app will give you a ranking of where you stand on the leaderboard.
3. Register
    - Fill the form and it will take you to the login page to signin.
    
    
<h2>Technologies</h2>

<span>
  
<img src="https://user-images.githubusercontent.com/68508896/192110139-17516596-8625-46be-8f8a-1f75f5f11a50.png" title="Java Script" alt="js" height="80"/>
<img src="https://user-images.githubusercontent.com/68508896/192110164-3cc0735d-a0b6-4b74-a3cc-dd29f730b34b.png" title="CSS" alt="css" height="80"/>
<img src="https://user-images.githubusercontent.com/68508896/192110177-06b7c17a-0317-40d7-9ba2-d5f1d8f708dc.png" title="Html" alt="html" height="80"/>
  
<img src="https://user-images.githubusercontent.com/68508896/192110208-46336dc4-59cf-486a-8cab-21d0990aee04.png" title="NodeJS" alt="nodejs" height="80"/>
  
 <img src="https://user-images.githubusercontent.com/68508896/192110399-78e8e720-449d-433e-aed0-9b48257cbb87.png" title="ExpressJS" alt="expressjs" height="80"/>
  
  <img src="https://user-images.githubusercontent.com/22147116/210971066-a21c5364-df69-4ec4-8b02-1ed5545cd9a0.png" title="React" alt="react" height="80"/>
  
  <img src="https://user-images.githubusercontent.com/22147116/219132005-9231b0b1-6524-4693-97bb-bebf5efa343d.png" title="postgreSQL" alt="postgreSQL" height="80"/>

<img src="images/clarifai.webp" title="postgreSQL" alt="postgreSQL" height="80"/>
