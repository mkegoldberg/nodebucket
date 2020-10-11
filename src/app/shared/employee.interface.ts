/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 10/07/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

import { Item } from './item.interface'

export interface Employee {
  empId: string,
  todo: Item[],
  done: Item[],
}
