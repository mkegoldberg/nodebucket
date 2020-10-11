/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 10/05/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  // findAllTasks
  findAllTasks(empId: string): Observable<any> {
    return this.http.get('/api/employees/' + empId + '/tasks')
  }

  // createTasks
  createTask(empId: string, task: string): Observable<any> {
    return this.http.post('/api/employees/' + empId + '/tasks', {
      text: task
    })
  }

  // updateTasks
  updateTask(empId: string, todo: Item[], done: Item[]): Observable<any> {
    return this.http.put('/api/employees/' + empId + '/tasks', {
      todo,
      done
    })
  }

  // deleteTasks
  deleteTask(empId: string, taskId: string): Observable<any> {
    return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId)
  }

}
