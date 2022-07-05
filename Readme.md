# Blog Website
A normal webite to create, read, update or delete blogs.

## Technologies
* Node.js
* EJS
* Express.js
* MongoDB

## Setup
To run this app, you will need to follow these steps:

##### 1. Requirements 
- Laptop
- A Text Editor installed on your laptop
- Git installed on your Laptop. 

##### 2. Install Node.js
- [Node.js](https://nodejs.org/en/)

##### 4. Create MogoDB Atlas Database and connect it:
- [Create Account](https://www.mongodb.com/atlas/database)
  
- Create a project and in the project create a new cluster.

- Connect the cluster and get the connection string.

##### 3. Clone the repository using the following command:
```
    git clone https://github.com/akshatmittal2002/blog-website.git
```
##### 5. Create `.env` file inside project directory:
- Specify the variable `DBURI` as the connection string.

##### 6. Set up and run the server from your command line inside the project directory:
- Install all dependences 
```
    npm install
```
- Run App
```
    node app.js
```
- Open [localhost:3000](http://localhost:3000) in your browser.

## Inspiration
This project is based on the goal of improving my Node.js and EJS skills.