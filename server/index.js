require('dotenv').config();
const cors = require('cors');
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const auth = require('./controllers/authController');
const ctrl = require('./controllers/controller')
// const nodemailer = require("./controllers/nodemailerController");
const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();

app.use(express.json());
app.use(cors());

app.use(session({
	resave: false,
	saveUninitialized: true,
	secret: SESSION_SECRET,
	cookies: {
		maxAge: 1000 * 60 * 60 * 24
	}
}))

massive({
	connectionString: CONNECTION_STRING,
	ssl: {
		rejectUnauthorized: false
	}
}) .then (db => {
	app.set('db', db)
	console.log('DB connected')
}) .catch (err => console.log(err));

app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);

app.get("/api/posts/:id", ctrl.getPosts);
app.post("/api/posts/:id", ctrl.addPost);
app.put("/api/posts/:id", ctrl.editPost);
app.delete("/api/posts/:id", ctrl.deletePost);

// app.post('/api/email', nodemailer.email)

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));