/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 09/16/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const Employee = require('./models/employee');

/**
 * App configurations
 */
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/nodebucket')));
app.use('/', express.static(path.join(__dirname, '../dist/nodebucket')));

/**
 * Variables
 */
const port = 3000; // server port

// database connection string
const conn = 'mongodb+srv://user-01:dbUser01@buwebdev-cluster-1.f4r04.mongodb.net/nodebucket?retryWrites=true&w=majority';

/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndexes: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)
}); // end mongoose connection

/**
 * API(s) go here...
 */
//  Find employee by ID
app.get('/api/employees/:empId', async(req, res) => {
  try {
    // Use mongoose employee model to query the database of employees
    Employee.findOne({ 'empId': req.params.empId }, function (err, employee) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'internal server error!'
        })
      } else {
        // if no database errors, return employee data
        console.log(employee);
        res.json(employee);
      }
    })
  } catch (e) {
    // catch any errors not prepared for
    console.log(e);
    res.status(500).send({
      'message': 'internal server error!'
    })
  }
})


/**
 * Create and start server
 */
http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
}); // end http create server function



//login:
//pass:
//connection: mongodb+srv://<username>:<password>@buwebdev-cluster-1.f4r04.mongodb.net/<dbname>?retryWrites=true&w=majority

// npm run local host to check errors and run
// or do 2 terminal => angular on 4200 servere on 3000
