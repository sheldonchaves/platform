(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-execution-execution-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/execution/job/job.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/execution/job/job.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-form [form]=\"form\"></app-layout-form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/execution/joblist/joblist.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/execution/joblist/joblist.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-list [list]=\"list\"></app-layout-list>\n"

/***/ }),

/***/ "./src/app/modules/execution/execution-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/execution/execution-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: routes, ExecutionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionRoutingModule", function() { return ExecutionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/execution/job/job.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/execution/joblist/joblist.component.ts");





var routes = [
    { path: '', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'job', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'joblist', component: _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__["JoblistComponent"] },
];
var ExecutionRoutingModule = /** @class */ (function () {
    function ExecutionRoutingModule() {
    }
    ExecutionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExecutionRoutingModule);
    return ExecutionRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/execution/execution.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/execution/execution.module.ts ***!
  \*******************************************************/
/*! exports provided: ExecutionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutionModule", function() { return ExecutionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/execution/joblist/joblist.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/execution/job/job.component.ts");
/* harmony import */ var src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _execution_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./execution-routing.module */ "./src/app/modules/execution/execution-routing.module.ts");







var ExecutionModule = /** @class */ (function () {
    function ExecutionModule() {
    }
    ExecutionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_joblist_joblist_component__WEBPACK_IMPORTED_MODULE_3__["JoblistComponent"], _job_job_component__WEBPACK_IMPORTED_MODULE_4__["JobComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _execution_routing_module__WEBPACK_IMPORTED_MODULE_6__["ExecutionRoutingModule"],
                src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ]
        })
    ], ExecutionModule);
    return ExecutionModule;
}());



/***/ }),

/***/ "./src/app/modules/execution/job/job.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/execution/job/job.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhlY3V0aW9uL2pvYi9qb2IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/execution/job/job.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/execution/job/job.component.ts ***!
  \********************************************************/
/*! exports provided: JobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobComponent", function() { return JobComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobComponent = /** @class */ (function () {
    function JobComponent() {
        this.form = {
            label: 'Job Execution',
            icon: 'fa-rocket',
            items: [
                {
                    type: 'row', items: [
                        { type: 'text', label: 'Job Name', placeholder: '', value: 'Execution Idade Ossea 002 RX Google' },
                        { type: 'text', label: 'JobID', placeholder: '', value: 'EX019083000005', disabled: true },
                        { type: 'list', label: 'Priority Level', options: [
                                { label: 'Normal', value: '3' },
                                { label: 'Important', value: '2' },
                                { label: 'Critical', value: '1' },
                                { label: 'Low', value: '4' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Extraction Stage', icon: 'fa-share', items: [
                        { type: 'list', label: 'Extraction Job id', options: [
                                { label: 'E20190830D00005', value: '1' },
                                { label: 'E20190830D00022', value: '2' },
                                { label: 'E20190830D00199', value: '3' },
                                { label: 'E20190829D09877', value: '1' },
                                { label: 'E20190811D03232', value: '2' },
                                { label: 'E20190812D00011', value: '3' },
                                { label: 'E20190812D00033', value: '1' },
                                { label: 'E20190831D00111', value: '2' },
                                { label: 'E20190830D00009', value: '3' },
                            ] },
                        { type: 'text', label: 'Extraction Name', placeholder: '', value: 'Query Idade Ossea', disabled: true },
                        { type: 'list', label: 'Priority', options: [
                                { label: 'Critical', value: '1' },
                                { label: 'Important', value: '2' },
                                { label: 'Normal', value: '3' },
                                { label: 'Low', value: '1' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Anonymization Stage', icon: 'fa-share', items: [
                        { type: 'list', label: 'Anonymization Job id', options: [
                                { label: 'A20190830D00005', value: '1' },
                                { label: 'A20190830D00022', value: '2' },
                                { label: 'A20190830D00199', value: '3' },
                                { label: 'A20190829D09877', value: '1' },
                                { label: 'A20190811D03232', value: '2' },
                                { label: 'A20190812D00011', value: '3' },
                                { label: 'A20190812D00033', value: '1' },
                                { label: 'A20190831D00111', value: '2' },
                                { label: 'A20190830D00009', value: '3' },
                            ] },
                        { type: 'text', label: 'Anonymization Name', placeholder: '', value: 'AN_PSI_001', disabled: true },
                        { type: 'list', label: 'Priority', options: [
                                { label: 'Critical', value: '1' },
                                { label: 'Important', value: '2' },
                                { label: 'Normal', value: '3' },
                                { label: 'Low', value: '1' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Cloud IO Stage', icon: 'fa-share', items: [
                        { type: 'list', label: 'Cloud IO Job id', options: [
                                { label: 'IO20190830D00005', value: '1' },
                                { label: 'IO20190830D00022', value: '2' },
                                { label: 'IO20190830D00199', value: '3' },
                                { label: 'IO20190829D09877', value: '1' },
                                { label: 'IO20190811D03232', value: '2' },
                                { label: 'IO20190812D00011', value: '3' },
                                { label: 'IO20190812D00033', value: '1' },
                                { label: 'IO20190831D00111', value: '2' },
                                { label: 'IO20190830D00009', value: '3' },
                            ] },
                        { type: 'text', label: 'Cloud IO Name', placeholder: '', value: 'Send to Google Health', disabled: true },
                        { type: 'list', label: 'Priority', options: [
                                { label: 'Critical', value: '1' },
                                { label: 'Important', value: '2' },
                                { label: 'Normal', value: '3' },
                                { label: 'Low', value: '1' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Inference Stage (Container)', icon: 'fa-share', items: [
                        { type: 'list', label: 'Container Inference Job id', options: [
                                { label: 'CI20190830D00005', value: '1' },
                                { label: 'CI20190830D00022', value: '2' },
                                { label: 'CI20190830D00199', value: '3' },
                                { label: 'CI20190829D09877', value: '1' },
                                { label: 'CI20190811D03232', value: '2' },
                                { label: 'CI20190812D00011', value: '3' },
                                { label: 'CI20190812D00033', value: '1' },
                                { label: 'CI20190831D00111', value: '2' },
                                { label: 'CI20190830D00009', value: '3' },
                            ] },
                        { type: 'text', label: 'Container Inference Name', placeholder: '', value: 'Idade Ossea RX 004', disabled: true },
                        { type: 'list', label: 'Priority', options: [
                                { label: 'Critical', value: '1' },
                                { label: 'Important', value: '2' },
                                { label: 'Normal', value: '3' },
                                { label: 'Low', value: '1' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Return/Send Stage', icon: 'fa-share', items: [
                        { type: 'list', label: 'Return Stage Job id', options: [
                                { label: 'RT20190830D00005', value: '1' },
                                { label: 'RT20190830D00022', value: '2' },
                                { label: 'RT20190830D00199', value: '3' },
                                { label: 'RT20190829D09877', value: '1' },
                                { label: 'RT20190811D03232', value: '2' },
                                { label: 'RT20190812D00011', value: '3' },
                                { label: 'RT20190812D00033', value: '1' },
                                { label: 'RT20190831D00111', value: '2' },
                                { label: 'RT20190830D00009', value: '3' },
                            ] },
                        { type: 'text', label: 'Return Name', placeholder: '', value: 'Return to Pacs Central', disabled: true },
                        { type: 'list', label: 'Priority', options: [
                                { label: 'Critical', value: '1' },
                                { label: 'Important', value: '2' },
                                { label: 'Normal', value: '3' },
                                { label: 'Low', value: '1' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Return/Send Stage', icon: 'fa-share', items: [
                        { type: 'list', label: 'Return Stage Job id', options: [
                                { label: 'RT20190830D00022', value: '2' },
                                { label: 'RT20190830D00199', value: '3' },
                                { label: 'RT20190829D09877', value: '1' },
                                { label: 'RT20190811D03232', value: '2' },
                                { label: 'RT20190812D00011', value: '3' },
                                { label: 'RT20190812D00033', value: '1' },
                                { label: 'RT20190831D00111', value: '2' },
                                { label: 'RT20190830D00009', value: '3' },
                            ] },
                        { type: 'text', label: 'Return Name', placeholder: '', value: 'Send to Partner 002', disabled: true },
                        { type: 'list', label: 'Priority', options: [
                                { label: 'Critical', value: '1' },
                                { label: 'Important', value: '2' },
                                { label: 'Normal', value: '3' },
                                { label: 'Low', value: '1' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'New Stage', icon: 'fa-plus-circle', items: [
                        { type: 'list', label: 'Type of Stage', options: [
                                { label: 'Extraction', value: '2' },
                                { label: 'Anonymization', value: '3' },
                                { label: 'Cloud IO', value: '1' },
                                { label: 'Inference', value: '2' },
                                { label: 'Return/Send', value: '3' },
                            ] },
                        { type: 'list', label: 'Job id', options: [
                                { label: 'RT20190830D00022', value: '2' },
                                { label: 'RT20190830D00199', value: '3' },
                                { label: 'RT20190829D09877', value: '1' },
                                { label: 'RT20190811D03232', value: '2' },
                                { label: 'RT20190812D00011', value: '3' },
                                { label: 'RT20190812D00033', value: '1' },
                                { label: 'RT20190831D00111', value: '2' },
                                { label: 'RT20190830D00009', value: '3' },
                            ] },
                        { type: 'button', label: 'Add New', icon: 'plus-circle', style: 'btn-primary' },
                    ]
                },
            ],
            actions: [
                // {label:'Edit', style:'btn-warning', icon:'fa-pencil-square'},
                { label: 'Save', style: 'btn-primary', icon: 'fa-cloud-upload' },
            ]
        };
    }
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/execution/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/modules/execution/job/job.component.scss")]
        })
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/modules/execution/joblist/joblist.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/execution/joblist/joblist.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhlY3V0aW9uL2pvYmxpc3Qvam9ibGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/execution/joblist/joblist.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/execution/joblist/joblist.component.ts ***!
  \****************************************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JoblistComponent = /** @class */ (function () {
    function JoblistComponent() {
        this.list = {
            label: 'Job Execution History',
            icon: 'fa-rocket',
            labels: [
                { label: 'label', prop: 'label' },
                { label: 'Stages', prop: 'stages' },
                { label: 'Date', prop: 'executionDate' },
            ],
            items: [
                { id: 'EX20190830D00005', label: 'Exec Idade Ossea', stages: 'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate: '26/08/2019 | 10:00', status: 'success' },
                { id: 'EX20190830D00011', label: 'Exec Hemorragia IntraCraniana', stages: 'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate: '26/08/2019 | 10:00', status: 'success' },
                { id: 'EX20190830D00023', label: 'Exec Tromboembolismo', stages: 'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate: '26/08/2019 | 10:00', status: 'success' },
                { id: 'EX20190830D00033', label: 'Exec Custom 00155', stages: 'Extraction > Anonymization', executionDate: '26/08/2019 | 10:00', status: 'danger' },
                { id: 'EX20190830D00444', label: 'Exec FreshBread 00003', stages: 'Extraction > Anonymization > Cloud IO > FreshBread', executionDate: '26/08/2019 | 10:00', status: 'warning' },
                { id: 'EX20190830D00005', label: 'Exec Idade Ossea', stages: 'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate: '26/08/2019 | 10:00', status: 'warning' },
                { id: 'EX20190830D00011', label: 'Exec Hemorragia IntraCraniana', stages: 'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate: '26/08/2019 | 10:00', status: 'success' },
                { id: 'EX20190830D00023', label: 'Exec Tromboembolismo', stages: 'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate: '26/08/2019 | 10:00', status: 'success' },
                { id: 'EX20190830D00033', label: 'Exec Custom 02299', stages: 'Extraction > Anonymization', executionDate: '26/08/2019 | 10:00', status: 'warning' },
                { id: 'EX20190830D00005', label: 'Exec Idade Ossea', stages: 'Extraction > Anonymization > Cloud IO > Inference > Return PACS', executionDate: '26/08/2019 | 10:00', status: 'success' },
            ],
            actions: [
                { label: 'Edit', style: 'btn-warning', icon: 'fa-pencil-square' },
                { label: 'Reload', style: 'btn-primary', icon: 'fa-refresh' },
            ]
        };
    }
    JoblistComponent.prototype.ngOnInit = function () {
    };
    JoblistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joblist',
            template: __webpack_require__(/*! raw-loader!./joblist.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/execution/joblist/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.scss */ "./src/app/modules/execution/joblist/joblist.component.scss")]
        })
    ], JoblistComponent);
    return JoblistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-execution-execution-module-es5.js.map