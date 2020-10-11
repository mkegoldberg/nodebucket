/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 09/16/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { CreateTaskDialogComponent } from './shared/create-task-dialog/create-task-dialog.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './pages/signin/signin.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MatDividerModule } from '@angular/material/divider/'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    SigninComponent,
    NotFoundComponent,
    CreateTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    DragDropModule,
    MatDividerModule,
    MatDialogModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
