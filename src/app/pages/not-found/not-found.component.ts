/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 10/05/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  empId: string;
  route: string;

  constructor(private cookieService: CookieService) {
    this.empId = this.cookieService.get('session_user');
  }

  ngOnInit(): void {
    if (this.empId) {
      this.route = "Home"
    } else {
      this.route = "Sign In"
    }
  }

}
