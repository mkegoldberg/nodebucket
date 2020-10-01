/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 09/16/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Item = require('./item');

// Employee Schema
let employeeSchema = new Schema({
  empId:        { type: String, unique: true, dropDups: true },
  firstName:    { type: String },
  lastName:     { type: String },
  todo:         [ Item ],
  done:         [ Item ]
}, { collection: 'employees'});

module.exports = mongoose.model('Employee', employeeSchema);
