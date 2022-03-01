const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image');
const { password } = require('pg/lib/defaults');

//Connect to database - "heroku pg:psql"
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const db = knex({
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    }
})

const app = express()

//Middleware
app.use(bodyParser.json());
app.use(cors())


app.get('/', (req,res) => {res.send('Its working!')});

app.post('/signin', (req,res) => {signin.handleSignin(req,res,db,bcrypt)})

app.post('/register', (req,res) => {register.handleRegister(req,res,db,bcrypt)})

//Development for the future (for each profile)
app.get('/profile/:id', (req,res) => {profile.handleProfileGet(req,res,db)})

//Count the entries of each user
app.put('/image', (req,res) => {image.handleImage(req,res,db)})

app.post('/imageurl', (req,res) => {image.handleApiCall(req,res)})


app.listen(process.env.PORT || 3001,()=> {
    console.log(`app is running on port ${process.env.PORT}`);
})