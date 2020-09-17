/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 09/16/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
