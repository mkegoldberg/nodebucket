(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "/x30":
    /*!****************************************!*\
      !*** ./src/app/shared/task.service.ts ***!
      \****************************************/

    /*! exports provided: TaskService */

    /***/
    function x30(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskService", function () {
        return TaskService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var TaskService = /*#__PURE__*/function () {
        function TaskService(http) {
          _classCallCheck(this, TaskService);

          this.http = http;
        } // findAllTasks


        _createClass(TaskService, [{
          key: "findAllTasks",
          value: function findAllTasks(empId) {
            return this.http.get('/api/employees/' + empId + '/tasks');
          } // createTasks

        }, {
          key: "createTask",
          value: function createTask(empId, task) {
            return this.http.post('/api/employees/' + empId + '/tasks', {
              text: task
            });
          } // updateTasks

        }, {
          key: "updateTask",
          value: function updateTask(empId, todo, done) {
            return this.http.put('/api/employees/' + empId + '/tasks', {
              todo: todo,
              done: done
            });
          } // deleteTasks

        }, {
          key: "deleteTask",
          value: function deleteTask(empId, taskId) {
            return this.http["delete"]('/api/employees/' + empId + '/tasks/' + taskId);
          }
        }]);

        return TaskService;
      }();

      TaskService.ɵfac = function TaskService_Factory(t) {
        return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TaskService,
        factory: TaskService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/michaelgoldberg/bu-webdev/nodebucket/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "1LmZ":
    /*!**********************************************!*\
      !*** ./src/app/pages/home/home.component.ts ***!
      \**********************************************/

    /*! exports provided: HomeComponent */

    /***/
    function LmZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/create-task-dialog/create-task-dialog.component */
      "bvRM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/task.service */
      "/x30");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      function HomeComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 23, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_21_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var item_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.deleteTask(item_r4._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delete Task ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);
        }
      }

      function HomeComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "clear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 23, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_29_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var item_r8 = ctx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.deleteTask(item_r8._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(taskService, cookieService, dialog, fb) {
          var _this = this;

          _classCallCheck(this, HomeComponent);

          this.taskService = taskService;
          this.cookieService = cookieService;
          this.dialog = dialog;
          this.fb = fb;
          this.empId = this.cookieService.get('session_user'); //get the active session user

          this.taskService.findAllTasks(this.empId).subscribe(function (res) {
            console.log(res);
            _this.employee = res.data;
          }, function (err) {
            console.log(err);
          }, function () {
            _this.todo = _this.employee.todo;
            _this.done = _this.employee.done;
          });
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.taskForm = this.fb.group({
              text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
            });
          }
        }, {
          key: "drop",
          value: function drop(event) {
            if (event.previousContainer === event.container) {
              // movement in the same column
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
              console.log('reordered column');
              this.updateTaskList(this.empId, this.todo, this.done);
            } else {
              // movement to a different column
              Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
              console.log('moved item to new container');
              this.updateTaskList(this.empId, this.todo, this.done);
            }
          }
        }, {
          key: "updateTaskList",
          value: function updateTaskList(empId, todo, done) {
            var _this2 = this;

            this.taskService.updateTask(empId, todo, done).subscribe(function (res) {
              _this2.employee = res.data;
            }, function (err) {
              console.log(err);
            }, function () {
              _this2.todo = _this2.employee.todo;
              _this2.done = _this2.employee.done;
            });
          }
        }, {
          key: "openCreateTaskDialog",
          value: function openCreateTaskDialog() {
            var _this3 = this;

            var dialogRef = this.dialog.open(_shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateTaskDialogComponent"], {
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (data) {
              if (data) {
                _this3.taskService.createTask(_this3.empId, data.text).subscribe(function (res) {
                  _this3.employee = res.data;
                }, function (err) {
                  console.log(err);
                }, function () {
                  _this3.todo = _this3.employee.todo;
                  _this3.done = _this3.employee.done;
                });
              }
            });
          }
        }, {
          key: "addNewTask",
          value: function addNewTask() {
            var _this4 = this;

            debugger;

            if (this.taskForm.value) {
              this.taskService.createTask(this.empId, this.taskForm.value).subscribe(function (res) {
                _this4.employee = res.data;
              }, function (err) {
                console.log(err);
              }, function () {
                _this4.todo = _this4.employee.todo;
                _this4.done = _this4.employee.done;
              });
            } else {
              var dialogRef = this.dialog.open(_shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_2__["CreateTaskDialogComponent"], {
                disableClose: true
              });
            }
          }
        }, {
          key: "deleteTask",
          value: function deleteTask(taskId) {
            var _this5 = this;

            if (taskId) {
              console.log("Task item ".concat(taskId, " was deleted"));
              this.taskService.deleteTask(this.empId, taskId).subscribe(function (res) {
                _this5.employee = res.data;
              }, function (err) {
                console.log(err);
              }, function () {
                _this5.todo = _this5.employee.todo;
                _this5.done = _this5.employee.done;
              });
            }
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 30,
        vars: 12,
        consts: [["fxLayout", "column", 1, "main-welcome"], ["fxFlex", ""], [1, "title"], [1, "subtitle"], ["fxFlex", "", "fxLayout", "row", "fxLayoutGap", "15px", 1, "task-container"], ["fxFlex", "", "fxLayout", "column", 1, "todo"], [1, "mat-elevation-z1"], [1, "column-title"], [3, "formGroup"], [1, "create-task-input"], ["type", "text", "placeholder", "Type to enter a task...", "matInput", "", "formControlName", "text", 3, "keydown.enter"], ["mat-button", "", "fxLayoutAlign", "end", 3, "disabled", "click"], ["fxLayout", "column", "fxLayoutGap", "10px", "cdkDropList", "", 1, "task-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["todoList", "cdkDropList"], ["cdkDrag", "", 4, "ngFor", "ngForOf"], ["fxFlex", "", 1, "Done"], [1, "column-title", "done"], ["doneList", "cdkDropList"], ["cdkDrag", ""], [1, "mat-elevation-z3", "task-card"], ["fxLayout", "row"], ["fxFlex", "", "fxLayoutAlign", "end"], ["mat-icon-button", "", 1, "task-options-menu", 3, "matMenuTriggerFor"], ["x-position", "before"], ["todoOptions", "matMenu"], ["mat-menu-item", "", 3, "click"], ["doneOptions", "matMenu"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Welcome to Nodebucket ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Create a list of tasks and simply drag them to the Done column as they are completed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-title", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Todo ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card-content", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function HomeComponent_Template_input_keydown_enter_15_listener() {
              return ctx.addNewTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_16_listener() {
              return ctx.addNewTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function HomeComponent_Template_div_cdkDropListDropped_19_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, HomeComponent_div_21_Template, 14, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-card-title", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Done ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function HomeComponent_Template_div_cdkDropListDropped_27_listener($event) {
              return ctx.drop($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_div_29_Template, 14, 2, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.taskForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.taskForm.valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.todo)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, _r2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.todo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListData", ctx.done)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, _r0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.done);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["CdkDrag"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuItem"]],
        styles: [".main-welcome[_ngcontent-%COMP%] {\n    margin-top: 30px;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: lighter;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14px;\n}\n\n\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px -3px rgba(0,0,0,0.2), 0 8px 10px 1px rgba(0,0,0, 0.14), 0 3px 14px 2px rgba(0,0,0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0,0,0.2,1);\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%]   .task-card[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform  250ms cubic-bezier(0,0,0.2,1);\n}\n\n\n\n.task-container[_ngcontent-%COMP%] {\n  width: 85%;\n  max-width: 1040px;\n  margin: 0 auto;\n}\n\n.column-title[_ngcontent-%COMP%] {\n  padding: 1.75rem 0;\n  background-color: #27A0F2;\n  color: #fff;\n  margin-left: -1rem;\n  margin-right: -1rem;\n  margin-top: -1rem!important;\n  font-weight: 300;\n  font-size: 2.2rem;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.column-title.done[_ngcontent-%COMP%] {\n  background-color: #8B8B8C;\n}\n\n.task-list[_ngcontent-%COMP%] {\n  min-height: 68px;\n}\n\n.create-task-input[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 10px!important;\n  \n}\n\n.create-task-input[_ngcontent-%COMP%]   .mat-input-element[_ngcontent-%COMP%] {\n  width: initial;\n  font-size: 1.15rem;\n}\n\n.create-task-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: initial!important;\n  margin-top: -5px;\n  background-color: #27A0F2;\n  color: #fff;\n  transition: background-color, .2s;\n  float: right;\n  cursor: pointer;\n}\n\n.create-task-input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(39, 160, 242,.7);\n}\n\n.task-options-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{\n  color: rgba(0,0,0,0.5);\n  transition: color, .2s;\n  font-size: 1rem;\n}\n\n.task-options-menu[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover{\n  color: rgba(0,0,0,0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUEseUJBQXlCOztBQUN6QjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMEdBQTBHO0FBQzVHOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0Usb0RBQW9EO0FBQ3REOztBQUVBLDRCQUE0Qjs7QUFFNUI7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi13ZWxjb21lIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uc3VidGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogRHJhZyBhbmQgRHJvcCBzdHlsZXMgKi9cbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCAtM3B4IHJnYmEoMCwwLDAsMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLDAsMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLDAsMC4yLDEpO1xufVxuXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAudGFzay1jYXJkOm5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICAyNTBtcyBjdWJpYy1iZXppZXIoMCwwLDAuMiwxKTtcbn1cblxuLyogVGFzayBwYWdlIGN1c3RvbSBzdHlsZXMgKi9cblxuLnRhc2stY29udGFpbmVyIHtcbiAgd2lkdGg6IDg1JTtcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29sdW1uLXRpdGxlIHtcbiAgcGFkZGluZzogMS43NXJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBMEYyO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xuICBtYXJnaW4tcmlnaHQ6IC0xcmVtO1xuICBtYXJnaW4tdG9wOiAtMXJlbSFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29sdW1uLXRpdGxlLmRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEI4QjhDO1xufVxuXG4udGFzay1saXN0IHtcbiAgbWluLWhlaWdodDogNjhweDtcbn1cblxuLmNyZWF0ZS10YXNrLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDEwcHghaW1wb3J0YW50O1xuICAvKiBtYXJnaW4tYm90dG9tOiA3cHg7ICovXG59XG4uY3JlYXRlLXRhc2staW5wdXQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgd2lkdGg6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcbn1cbi5jcmVhdGUtdGFzay1pbnB1dCBidXR0b24ge1xuICBkaXNwbGF5OiBpbml0aWFsIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTBGMjtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IsIC4ycztcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY3JlYXRlLXRhc2staW5wdXQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMTYwLCAyNDIsLjcpO1xufVxuXG4udGFzay1vcHRpb25zLW1lbnUgLm1hdC1pY29ue1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciwgLjJzO1xuICBmb250LXNpemU6IDFyZW07XG59XG4udGFzay1vcHRpb25zLW1lbnUgLm1hdC1pY29uOmhvdmVye1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _shared_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "50Te":
    /*!*************************************************************!*\
      !*** ./src/app/shared/auth-layout/auth-layout.component.ts ***!
      \*************************************************************/

    /*! exports provided: AuthLayoutComponent */

    /***/
    function Te(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function () {
        return AuthLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var AuthLayoutComponent = /*#__PURE__*/function () {
        function AuthLayoutComponent() {
          _classCallCheck(this, AuthLayoutComponent);
        }

        _createClass(AuthLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthLayoutComponent;
      }();

      AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) {
        return new (t || AuthLayoutComponent)();
      };

      AuthLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthLayoutComponent,
        selectors: [["app-auth-layout"]],
        decls: 1,
        vars: 0,
        template: function AuthLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hdXRoLWxheW91dC9hdXRoLWxheW91dC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-layout',
            templateUrl: './auth-layout.component.html',
            styleUrls: ['./auth-layout.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      });
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */
      // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Cp0R":
    /*!**************************************!*\
      !*** ./src/app/shared/auth.guard.ts ***!
      \**************************************/

    /*! exports provided: AuthGuard */

    /***/
    function Cp0R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, cookieService) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.cookieService = cookieService;
        } // canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            var sessionUser = this.cookieService.get('session_user');

            if (sessionUser) {
              return true;
            } else {
              this.router.navigate(['/session/signin']);
              return false;
            }
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: [""]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styles: [""]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "UE1v":
    /*!**************************************************!*\
      !*** ./src/app/pages/signin/signin.component.ts ***!
      \**************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function UE1v(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function SigninComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
        }
      }

      function SigninComponent_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employee ID is a required field ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function SigninComponent_mat_error_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employee ID is a required field ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(router, cookieService, fb, http) {
          _classCallCheck(this, SigninComponent);

          this.router = router;
          this.cookieService = cookieService;
          this.fb = fb;
          this.http = http;
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.form = this.fb.group({
              empId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]*$')])]
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this6 = this;

            var empId = this.form.controls['empId'].value;
            console.log(empId);
            this.http.get('/api/employees/' + empId).subscribe(function (res) {
              if (res) {
                _this6.cookieService.set('session_user', empId, 1);

                _this6.router.navigate(['/']);

                setTimeout(function () {
                  _this6.form.reset();
                }, 500);
              } else {
                _this6.error = "The employee Id is invalid, please try again";

                _this6.form.reset();
              }
            });
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        decls: 20,
        vars: 6,
        consts: [["fxLayout", "column"], ["fxFlex", "", 1, "mat-elevation-z8", "signin-container"], ["class", "msg-container", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "10px", 1, "mat-elevation-z0"], [3, "formGroup", "ngSubmit"], ["fxFlex", "", "appearance", "fill"], ["for", "txtStudentId", "id", "lblStudentId"], ["id", "txtEmpId", "name", "txtEmpId", "type", "text", "required", "", "matInput", "", 3, "formControl"], [4, "ngIf"], ["type", "submit", "fxFlex", "", "mat-raised-button", "", "color", "primary", 3, "disabled"], [1, "msg-container"], [1, "msg-error"]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NodeBucket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please enter your Employee ID to login");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SigninComponent_div_7_Template, 3, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_9_listener() {
              return ctx.login();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Employee ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SigninComponent_mat_error_15_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SigninComponent_mat_error_16_Template, 2, 0, "mat-error", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Enter NodeBucket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.form.controls["empId"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["empId"].hasError("required") && ctx.form.controls["empId"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.controls["empId"].hasError("pattern") && ctx.form.controls["empId"].touched);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
        styles: [".signin-container[_ngcontent-%COMP%] {\n  width: 45%;\n  margin: 15% auto;\n  max-width: 415px;\n}\n\n.signin-container[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background-color: #27A0F2;\n  color: #fff;\n  margin-left: -1rem;\n  margin-right: -1rem;\n  margin-top: -1rem!important;\n  font-weight: 300;\n  font-size: 2.2rem;\n  letter-spacing: 1px;\n  text-align: center;\n}\n\n.signin-container[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%]:not(:first-child) {\n  text-align: center;\n  margin-bottom: .5rem;\n  margin-top: 1.5rem;\n}\n\n.signin-container[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.signin-container[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.signin-container[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%] {\n  padding: .65rem 1rem;\n}\n\n.signin-container[_ngcontent-%COMP%]   .mat-raised-button[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  color: #fff;\n}\n\n.mat-raised-button.mat-primary[_ngcontent-%COMP%]:not(.mat-button-disabled) {\n  background-color: #27A0F2;\n}\n\n.msg-container[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n\n.msg-error[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 12px;\n  color: #D8000C;\n  background-color: #FFD2D2;\n}\n\n\n\n@media screen and (max-width: 39.9375em) {\n  .signin-container[_ngcontent-%COMP%] {\n    width: 95%;\n  }\n}\n\n\n\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  .signin-container[_ngcontent-%COMP%] {\n    width: 65%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQSxlQUFlOztBQUNmO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduaW4tY29udGFpbmVyIHtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luOiAxNSUgYXV0bztcbiAgbWF4LXdpZHRoOiA0MTVweDtcbn1cblxuLnNpZ25pbi1jb250YWluZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3QTBGMjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgbWFyZ2luLXRvcDogLTFyZW0haW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDIuMnJlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2lnbmluLWNvbnRhaW5lciBtYXQtY2FyZC1zdWJ0aXRsZTpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cblxuLnNpZ25pbi1jb250YWluZXIgLm1hdC1jYXJkLWNvbnRlbnQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc2lnbmluLWNvbnRhaW5lciAubWF0LWNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5zaWduaW4tY29udGFpbmVyIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IC42NXJlbSAxcmVtO1xufVxuXG4uc2lnbmluLWNvbnRhaW5lciAubWF0LXJhaXNlZC1idXR0b246bm90KC5tYXQtYnV0dG9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5Om5vdCgubWF0LWJ1dHRvbi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdBMEYyO1xufVxuXG4ubXNnLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLm1zZy1lcnJvciB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBjb2xvcjogI0Q4MDAwQztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRDJEMjtcbn1cblxuLyogU21hbGwgb25seSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XG4gIC5zaWduaW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG59XG5cbi8qIE1lZGl1bSBvbmx5ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7XG4gIC5zaWduaW4tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjUlO1xuICB9XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/base-layout/base-layout.component */
      "tcz+");
      /* harmony import */


      var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./shared/auth-layout/auth-layout.component */
      "50Te");
      /* harmony import */


      var _shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./shared/create-task-dialog/create-task-dialog.component */
      "bvRM");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./pages/signin/signin.component */
      "UE1v");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /* harmony import */


      var _angular_material_divider___WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/divider/ */
      "f0Cb");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "5+WD");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__["DragDropModule"], _angular_material_divider___WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__["BaseLayoutComponent"], _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"], _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"], _shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskDialogComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__["DragDropModule"], _angular_material_divider___WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_6__["BaseLayoutComponent"], _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"], _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_15__["SigninComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"], _shared_create_task_dialog_create_task_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskDialogComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_21__["DragDropModule"], _angular_material_divider___WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bvRM":
    /*!***************************************************************************!*\
      !*** ./src/app/shared/create-task-dialog/create-task-dialog.component.ts ***!
      \***************************************************************************/

    /*! exports provided: CreateTaskDialogComponent */

    /***/
    function bvRM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateTaskDialogComponent", function () {
        return CreateTaskDialogComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var CreateTaskDialogComponent = /*#__PURE__*/function () {
        function CreateTaskDialogComponent(dialogRef, fb) {
          _classCallCheck(this, CreateTaskDialogComponent);

          this.dialogRef = dialogRef;
          this.fb = fb;
        }

        _createClass(CreateTaskDialogComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.taskForm = this.fb.group({
              text: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
            });
          }
        }, {
          key: "createTask",
          value: function createTask() {
            this.dialogRef.close(this.taskForm.value);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.dialogRef.close();
          }
        }]);

        return CreateTaskDialogComponent;
      }();

      CreateTaskDialogComponent.ɵfac = function CreateTaskDialogComponent_Factory(t) {
        return new (t || CreateTaskDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      CreateTaskDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateTaskDialogComponent,
        selectors: [["app-create-task-dialog"]],
        decls: 10,
        vars: 2,
        consts: [["mat-dialog-title", ""], [3, "formGroup"], [2, "width", "200px"], ["type", "text", "placeholder", "Enter a task...", "matInput", "", "formControlName", "text", 3, "keydown.enter"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-button", "", 3, "disabled", "click"]],
        template: function CreateTaskDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add new task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.enter", function CreateTaskDialogComponent_Template_input_keydown_enter_4_listener() {
              return ctx.createTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTaskDialogComponent_Template_button_click_6_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateTaskDialogComponent_Template_button_click_8_listener() {
              return ctx.createTask();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create task");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.taskForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.taskForm.valid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jcmVhdGUtdGFzay1kaWFsb2cvY3JlYXRlLXRhc2stZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTaskDialogComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-task-dialog',
            templateUrl: './create-task-dialog.component.html',
            styleUrls: ['./create-task-dialog.component.css']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tcz+":
    /*!*************************************************************!*\
      !*** ./src/app/shared/base-layout/base-layout.component.ts ***!
      \*************************************************************/

    /*! exports provided: BaseLayoutComponent */

    /***/
    function tcz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseLayoutComponent", function () {
        return BaseLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-cookie-service */
      "b6Qw");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var BaseLayoutComponent = /*#__PURE__*/function () {
        function BaseLayoutComponent(cookieService, router) {
          _classCallCheck(this, BaseLayoutComponent);

          this.cookieService = cookieService;
          this.router = router;
          this.year = Date.now();
        }

        _createClass(BaseLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "signOut",
          value: function signOut() {
            this.cookieService.deleteAll();
            this.router.navigate(['/session/signin']);
          }
        }]);

        return BaseLayoutComponent;
      }();

      BaseLayoutComponent.ɵfac = function BaseLayoutComponent_Factory(t) {
        return new (t || BaseLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      BaseLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BaseLayoutComponent,
        selectors: [["app-base-layout"]],
        decls: 23,
        vars: 4,
        consts: [["fxLayout", "column"], ["fxFlex", ""], [1, "bg-blue", "text-white"], [1, "navbar-container"], ["routerLink", "/", "mat-button", "", 1, "logo"], ["routerLink", "/", "mat-button", "", 1, "navbar-link"], ["mat-button", "", 1, "navbar-link"], ["mat-button", "", 1, "navbar-link", 3, "click"], ["fxFlex", "100%;", 1, "main-content"], [1, "footer"], [1, "footer-content"], ["href", "https://www.bellevue.edu/", "target", "_blank", 1, "bu-link"]],
        template: function BaseLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-toolbar", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "nodebucket");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BaseLayoutComponent_Template_button_click_10_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sign Out ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "footer", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-toolbar", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bellevue University");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 1, ctx.year, "yyyy"), " - nodebucket - ");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]],
        styles: [".logo[_ngcontent-%COMP%] {\n    margin-left: 75px;\n    font-size: 24px;\n    font-weight: lighter;;\n  }\n  \n  .navbar-container[_ngcontent-%COMP%] {\n    padding: 5px;\n  }\n  \n  .navbar-link[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: lighter;\n  }\n  \n  .main-content[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  \n  .footer[_ngcontent-%COMP%] {\n    bottom: 0;\n    position: absolute;\n    width: 100%;\n  }\n  \n  .footer-content[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: lighter;\n    padding-left: 100px;\n    letter-spacing: 3px;\n  }\n  \n  .bu-link[_ngcontent-%COMP%] {\n    text-decoration: none;\n  }\n  \n  .bu-link[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhc2UtbGF5b3V0L2Jhc2UtbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9iYXNlLWxheW91dC9iYXNlLWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjs7XG4gIH1cbiAgXG4gIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIC5uYXZiYXItbGluayB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG4gIFxuICAubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgXG4gIC5mb290ZXIge1xuICAgIGJvdHRvbTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5mb290ZXItY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgfVxuICBcbiAgLmJ1LWxpbmsge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuICBcbiAgLmJ1LWxpbms6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG4gICJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-base-layout',
            templateUrl: './base-layout.component.html',
            styleUrls: ['./base-layout.component.css']
          }]
        }], function () {
          return [{
            type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "v2M4":
    /*!********************************************************!*\
      !*** ./src/app/pages/not-found/not-found.component.ts ***!
      \********************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function v2M4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 10/05/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 2,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "404 - Not found");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/base-layout/base-layout.component */
      "tcz+");
      /* harmony import */


      var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pages/home/home.component */
      "1LmZ");
      /* harmony import */


      var _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/auth-layout/auth-layout.component */
      "50Te");
      /* harmony import */


      var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./shared/auth.guard */
      "Cp0R");
      /* harmony import */


      var _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages/signin/signin.component */
      "UE1v");
      /* harmony import */


      var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pages/not-found/not-found.component */
      "v2M4");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      var routes = [{
        path: '',
        component: _shared_base_layout_base_layout_component__WEBPACK_IMPORTED_MODULE_2__["BaseLayoutComponent"],
        children: [{
          path: '',
          component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
        }],
        canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: 'session',
        component: _shared_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutComponent"],
        children: [{
          path: 'signin',
          component: _pages_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
        }, {
          path: 'not-found',
          component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
        }]
      }, {
        path: '**',
        redirectTo: 'session/not-found'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true,
          enableTracing: false,
          scrollPositionRestoration: 'enabled'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true,
              enableTracing: false,
              scrollPositionRestoration: 'enabled'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /*
      ============================================
      ; Title: Nodebucket
      ; Author: Mike Goldberg
      ; Date: 09/16/2020
      ; Modified By: Mike Goldberg
      ; Description: MEAN Stack Application
      ;===========================================
      */


      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map