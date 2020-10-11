/*
============================================
; Title: Nodebucket
; Author: Mike Goldberg
; Date: 10/01/2020
; Modified By: Mike Goldberg
; Description: MEAN Stack Application
;===========================================
*/

class BaseResponse {
  constructor(httpCode, message, data) {
    this.httpCode = httpCode;
    this.message = message;
    this.data = data;
  }

  toObject() {
    return {
      'httpCode': this.httpCode,
      'message': this.message,
      'data': this.data,
      'timestamp': new Date().toLocaleDateString()
    }
  }
}

module.exports = BaseResponse;
