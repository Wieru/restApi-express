const express = require('express');
const path = require('path')
const db = require('./db.js');

const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(8000, () => {
  console.log('Server is running on port: 8000');
});

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());

app.use(express.urlencoded({ extended: false }))

// app.use(cors());

app.use('/', testimonialsRoutes); 
app.use('/', concertsRoutes);
app.use('/', seatsRoutes); 

app.use((req, res) => {
  res.status(404).send( { message: '404 not found...'});
})