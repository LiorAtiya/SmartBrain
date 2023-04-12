const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const image = require('./controllers/image');
// const profile = require('./controllers/profile')
// const { password } = require('pg/lib/defaults');

require('dotenv').config();
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

// //Connect to local postgreSQL
// const db = knex({
//   client: 'pg',
//   connection: {
//     host: 'localhost',
//     user: 'postgres',
//     password: 'mysecretpassword',
//     database: 'smartbrain',
//   }
// })

const app = express()

//Middleware
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => { res.send('Its working!') });

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) })

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })

//Count the entries of each user
app.put('/image', (req, res) => { image.handleImage(req, res, db) })

//Execution of the facial recognition model
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

// //Development for the future (for each profile)
// app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })

// const port = process.env.PORT || 3015
const port = 3015
app.listen(port, () => {
  console.log(`app is running on port http://localhost:${port}`);
})