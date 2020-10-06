/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 10/01/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

const express = require('express');
const Employee = require('../models/employee');
const router = express.Router();
const BaseResponse = require('../services/base-response');
const ErrorResponse = require('../services/error-response');


// findEmployeeById
router.get('/:empId', async(req, res) => {
  try {
    // Use mongoose employee model to query the database of employees
    Employee.findOne({ 'empId': req.params.empId }, function(err, employee) {
      if (err) {
        console.log(err);
        res.status(500).send({
          'message': 'Internal server error'
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
    const errorCatchResponse = new ErrorResponse( '500', 'Internal server error', e.message);
    res.status(500).send(errorCatchResponse.toObject());
  }
})

// findAllTasks
router.get('/:empId/tasks', async(req, res) => {
  try {
    Employee.findOne({'empId': req.params.empId }, 'empId todo done', function(err, employee) {
      if (err) {
        console.log(err);
        const mongodbError = new ErrorResponse( '500', 'Internal server error', err);
        res.status(500).send(mongodbError.toObject());
      } else {
        console.log("findAllTasks called", employee);
        const successResponse = new BaseResponse("200", 'Successful query!', employee);
        res.json(successResponse.toObject());
      }
    })
  } catch (e) {
    console.log(e);
    const errorFindAllCatchResponse = new ErrorResponse( '500', 'Internal server error', e.message);
    res.status(500).send(errorFindAllCatchResponse.toObject());
  }
})

// Create Task
router.post('/:empId/tasks', async(req, res) => {
  try {
    Employee.findOne({'empId': req.params.empId }, function(err, employee) {
      if (err) {
        console.log(err);
        const mongoCreateError = new ErrorResponse( '500', 'Internal server error', err);
        res.status(500).send(mongoCreateError.toObject());
      } else {
        console.log("createTask called", employee);
        // create new item
        const item = {
          text: req.body.text
        };
        // push to todo array
        employee.todo.push(item);

        employee.save(function(err, updatedEmployee) {
          if (err) {
            console.log(err);
            const createTaskOnSaveError = new ErrorResponse('500', 'Internal server error', err.message);
            res.status(500).send(createTaskOnSaveError.toObject());
          } else {
            console.log(updatedEmployee);

            const createTaskOnSaveSuccess = new BaseResponse('200', 'Successful entry', updatedEmployee);
            res.json(createTaskOnSaveSuccess.toObject());
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    const errorCreateCatchResponse = new ErrorResponse( '500', 'Internal server error', e.message);
    res.status(500).send(errorCreateCatchResponse.toObject());
  }
});

// Update Task
router.put('/:empId/tasks', async(req, res) => {
  try {
    Employee.findOne({'empId': req.params.empId }, function(err, employee) {
      if (err) {
        console.log(err);
        const mongoUpdateError = new ErrorResponse( '500', 'Internal server error', err);
        res.status(500).send(mongoUpdateError.toObject());
      } else {
        console.log("updateTask called", employee);

        employee.set({
          todo: req.body.todo,
          done: req.body.done
        });

        employee.save(function(err, updatedEmployee) {
          if (err) {
            console.log(err);
            const updateTaskOnSaveError = new ErrorResponse('500', 'Internal server error', err.message);
            res.status(500).send(updateTaskOnSaveError.toObject());
          } else {
            console.log(updatedEmployee);

            const updateTaskOnSaveSuccess= new BaseResponse('200','Update successful!', updatedEmployee);
            res.json(updateTaskOnSaveSuccess.toObject());
          }
        })
      }
    })
  } catch (e) {
    console.log(e);
    const errorUpdateCatchResponse = new ErrorResponse( '500', 'Internal server error', e.message);
    res.status(500).send(errorUpdateCatchResponse.toObject());
  }
});

// Delete Task
router.delete('/:empId/tasks/:taskId', async(req, res) => {
  try {
    Employee.findOne({ 'empId': req.params.empId }, function(err, employee) {
      if (err) {
        console.log(err);
        const mongoDeleteError = new ErrorResponse( '500', 'Internal server error', err);
        res.status(500).send(mongoDeleteError.toObject());
      } else {
        console.log("deleteTask called", employee);

        const todoItem = employee.todo.find(item => item._id.toString() === req.params.taskId);
        const doneItem = employee.done.find(item => item._id.toString() === req.params.taskId);

        if (todoItem) {
          employee.todo.id(todoItem._id).remove();

          employee.save(function(err, updatedTodoEmployee) {
            if (err) {
              console.log(err);
              const deleteTodoOnSaveError = new ErrorResponse('500', 'Internal server error', err.message);
              res.status(500).send(deleteTodoOnSaveError.toObject());
            } else {
              console.log(updatedTodoEmployee);

              const deleteTodoOnSaveSuccess= new BaseResponse('200','Item deleted', updatedTodoEmployee);
              res.json(deleteTodoOnSaveSuccess.toObject());
            }
          });
        } else if (doneItem) {
            employee.done.id(doneItem._id).remove();

            employee.save(function(err, updatedDoneEmployee) {
              if (err) {
                console.log(err);
                const deleteDoneOnSaveError = new ErrorResponse('500', 'Internal server error', err.message);
                res.status(500).send(deleteDoneOnSaveError.toObject());
              } else {
                console.log(updatedDoneEmployee);

                const deleteDoneOnSaveSuccess= new BaseResponse('200','Item deleted', updatedDoneEmployee);
                res.json(deleteDoneOnSaveSuccess.toObject());
              }
            });
        } else {
          console.log('Invalid task Id');

          const deleteItemNotFound = new ErrorResponse('200', 'Unable to locate the requested item', null);
          res.status(200).send(deleteItemNotFound.toObject());
        }
      }
    })
  } catch (e) {
    console.log(e);
    const errorDeleteCatchResponse = new ErrorResponse( '500', 'Internal server error', e.message);
    res.status(500).send(errorDeleteCatchResponse.toObject());
  }
});

module.exports = router;
