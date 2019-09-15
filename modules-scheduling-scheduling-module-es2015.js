(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-scheduling-scheduling-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/scheduling/job/job.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/scheduling/job/job.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-form [form]=\"form\"></app-layout-form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/scheduling/joblist/joblist.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/scheduling/joblist/joblist.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-list [list]=\"list\"></app-layout-list>\n"

/***/ }),

/***/ "./src/app/modules/scheduling/job/job.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/scheduling/job/job.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2NoZWR1bGluZy9qb2Ivam9iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/scheduling/job/job.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/scheduling/job/job.component.ts ***!
  \*********************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JobComponent = class JobComponent {
    constructor() {
        this.form = {
            label: 'Job Scheduling',
            icon: 'fa-calendar',
            items: [
                {
                    type: 'row', items: [
                        { type: 'text', label: 'Scheduling Name', placeholder: '', value: '' },
                        { type: 'text', label: 'SchedulingID', placeholder: '', value: 'SC2019083000005', disabled: true },
                        { type: 'list', label: 'Priority Level', options: [
                                { label: 'Normal', value: '3' },
                                { label: 'Important', value: '2' },
                                { label: 'Critical', value: '1' },
                                { label: 'Low', value: '4' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Source (ID)', icon: '', items: [
                        { type: 'list', label: 'Execution Job', options: [
                                { label: '20190830D00005 - Execution Idade Ossea', value: '1' },
                                { label: '20190830D00022 - Execution Hemorragia IntraCraniana', value: '2' },
                                { label: '20190830D00199 - Execution Tromboembolismo', value: '3' },
                                { label: '20190829D09877 - Execution Custom Partner 002', value: '1' },
                                { label: '20190830D00005 - Execution Idade Ossea', value: '1' },
                                { label: '20190830D00022 - Execution Hemorragia IntraCraniana', value: '2' },
                                { label: '20190830D00199 - Execution Tromboembolismo', value: '3' },
                                { label: '20190829D09877 - Execution Custom Partner 002', value: '1' },
                                { label: '20190830D00005 - Execution Idade Ossea', value: '1' },
                                { label: '20190830D00022 - Execution Hemorragia IntraCraniana', value: '2' },
                                { label: '20190830D00199 - Execution Tromboembolismo', value: '3' },
                                { label: '20190829D09877 - Execution Custom Partner 002', value: '1' },
                            ] },
                        { type: 'text', label: 'Path of Scheduling Job', placeholder: '', value: '//scheduling/SC2019083000005' },
                    ]
                },
                {
                    type: 'fieldset', label: 'Repetition', items: [
                        { type: 'list', label: 'Week Selection', multiple: true, options: [
                                { label: 'Every day', value: '2' },
                                { label: 'Day of week', value: '1' },
                                { label: 'Day of month', value: '1' },
                                { label: 'Only once', value: '1' },
                                { label: 'Custom', value: '1' },
                            ] },
                        { type: 'date', label: 'Day of month', placeholder: '', value: '' },
                        { type: 'checkbox', label: 'Days of week', options: [
                                { label: 'Monday', checked: true },
                                { label: 'Tuesday', checked: false },
                                { label: 'Wednesday', checked: false },
                                { label: 'Thursday', checked: false },
                                { label: 'Friday', checked: false },
                                { label: 'Saturday', checked: false },
                                { label: 'Sunday', checked: false },
                            ] },
                    ]
                },
            ],
            actions: [
                // {label:'Edit', style:'btn-warning', icon:'fa-pencil-square'},
                { label: 'Save', style: 'btn-primary', icon: 'fa-cloud-upload' },
            ]
        };
    }
    ngOnInit() {
    }
};
JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-job',
        template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/scheduling/job/job.component.html"),
        styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/modules/scheduling/job/job.component.scss")]
    })
], JobComponent);



/***/ }),

/***/ "./src/app/modules/scheduling/joblist/joblist.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/scheduling/joblist/joblist.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2NoZWR1bGluZy9qb2JsaXN0L2pvYmxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/scheduling/joblist/joblist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/scheduling/joblist/joblist.component.ts ***!
  \*****************************************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JoblistComponent = class JoblistComponent {
    constructor() {
        this.list = {
            label: 'Job Scheduling Execution History',
            icon: 'fa-calendar',
            labels: [
                { label: 'label', prop: 'label' },
                { label: 'Scheduling Date', prop: 'schedulingDate' },
                { label: 'Repetition', prop: 'repetition' },
            ],
            items: [
                { id: '20190830D00005', label: 'Job Schedule Idade Ossea', status: 'success', schedulingDate: '26/08/2019 | 10:00', repetition: 'Every Day' },
                { id: '20190830D00002', label: 'Job Schedule Hemorragia Intracraniana', status: 'success', schedulingDate: '30/08/2019 | 09:00', repetition: 'Every Day' },
                { id: '20190830D00011', label: 'Job Schedule Tromboembolismo', status: 'success', schedulingDate: '28/08/2019 | 01:00', repetition: 'Every Day' },
                { id: '20190830D00005', label: 'Job Schedule Extraction Custom', status: 'success', schedulingDate: '01/09/2019 | 10:00', repetition: 'Monday' },
            ],
            actions: [
                { label: 'Edit', style: 'btn-warning', icon: 'fa-pencil-square' },
                { label: 'Reload', style: 'btn-primary', icon: 'fa-refresh' },
            ]
        };
    }
    ngOnInit() {
    }
};
JoblistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-joblist',
        template: __webpack_require__(/*! raw-loader!./joblist.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/scheduling/joblist/joblist.component.html"),
        styles: [__webpack_require__(/*! ./joblist.component.scss */ "./src/app/modules/scheduling/joblist/joblist.component.scss")]
    })
], JoblistComponent);



/***/ }),

/***/ "./src/app/modules/scheduling/scheduling-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/scheduling/scheduling-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SchedulingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingRoutingModule", function() { return SchedulingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/scheduling/job/job.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/scheduling/joblist/joblist.component.ts");





const routes = [
    { path: '', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'job', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'joblist', component: _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__["JoblistComponent"] },
];
let SchedulingRoutingModule = class SchedulingRoutingModule {
};
SchedulingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SchedulingRoutingModule);



/***/ }),

/***/ "./src/app/modules/scheduling/scheduling.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/scheduling/scheduling.module.ts ***!
  \*********************************************************/
/*! exports provided: SchedulingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulingModule", function() { return SchedulingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/scheduling/job/job.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/scheduling/joblist/joblist.component.ts");
/* harmony import */ var src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _scheduling_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scheduling-routing.module */ "./src/app/modules/scheduling/scheduling-routing.module.ts");







let SchedulingModule = class SchedulingModule {
};
SchedulingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"], _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__["JoblistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _scheduling_routing_module__WEBPACK_IMPORTED_MODULE_6__["SchedulingRoutingModule"],
            src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
        ]
    })
], SchedulingModule);



/***/ })

}]);
//# sourceMappingURL=modules-scheduling-scheduling-module-es2015.js.map