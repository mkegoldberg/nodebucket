/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 09/16/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { AuthGuard} from './shared/auth.guard';
import { SigninComponent } from './pages/signin/signin.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'about',
        component: AboutComponent,
      },
    ],
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    enableTracing: false,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
