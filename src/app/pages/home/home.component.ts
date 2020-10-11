/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 09/16/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Employee } from '../../shared/employee.interface';
import { TaskService } from '../../shared/task.service';
import { Item } from '../../shared/item.interface';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from '../../shared/create-task-dialog/create-task-dialog.component'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // task: any;
  todo: Item[];
  done: Item[];
  employee: Employee;

  empId: string;

  taskForm: FormGroup;

  constructor(private taskService: TaskService, private cookieService: CookieService, private dialog: MatDialog, private fb: FormBuilder) {

    this.empId = this.cookieService.get('session_user'); //get the active session user

    this.taskService.findAllTasks(this.empId).subscribe(res => {
      console.log(res);
      this.employee = res.data;
    }, err => {
      console.log(err);
    }, () => {
      this.todo = this.employee.todo;
      this.done = this.employee.done;
    })
  }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      text: [null, Validators.compose([Validators.required])]
    })
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      // movement in the same column
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log('reordered column');

      this.updateTaskList(this.empId, this.todo, this.done);
    } else {
      // movement to a different column
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
      console.log('moved item to new container');

      this.updateTaskList(this.empId, this.todo, this.done)
    }
  }

  private updateTaskList(empId: string, todo: Item[], done: Item[]): void {
    this.taskService.updateTask(empId, todo, done).subscribe(res => {
      this.employee = res.data;
    }, err => {
      console.log(err)
    }, () => {
      this.todo = this.employee.todo;
      this.done = this.employee.done;
    })
  }

  openCreateTaskDialog() {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent, {
      disableClose: true
    })

    dialogRef.afterClosed().subscribe(data => {
      if (data) {
        this.taskService.createTask(this.empId, data.text).subscribe(res => {
          this.employee = res.data;
        }, err => {
          console.log(err);
        }, () => {
          this.todo = this.employee.todo;
          this.done = this.employee.done;
        })
      }
    })
  }

  deleteTask(taskId: string) {
    if (taskId) {
      console.log(`Task item ${taskId} was deleted`);

      this.taskService.deleteTask(this.empId, taskId).subscribe(res => {
        this.employee = res.data;
      }, err => {
        console.log(err);
      }, () => {
        this.todo = this.employee.todo;
        this.done = this.employee.done;
      })
    }
  }
}
