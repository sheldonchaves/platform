(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cloudio-cloudio-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cloudio/job/job.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cloudio/job/job.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <span class=\"fa-stack fa-lg\">\n    <i class=\"fa fa-cloud fa-stack-2x\"></i>\n    <i class=\"fa fa-retweet fa-stack-1x fa-inverse\"></i>\n</span> -->\n\n<app-layout-form [form]=\"form\"></app-layout-form>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cloudio/joblist/joblist.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cloudio/joblist/joblist.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-list [list]=\"list\"></app-layout-list>\n"

/***/ }),

/***/ "./src/app/modules/cloudio/cloudio-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/cloudio/cloudio-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CloudioRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudioRoutingModule", function() { return CloudioRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/cloudio/job/job.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/cloudio/joblist/joblist.component.ts");





var routes = [
    { path: '', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'job', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'joblist', component: _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__["JoblistComponent"] },
];
var CloudioRoutingModule = /** @class */ (function () {
    function CloudioRoutingModule() {
    }
    CloudioRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CloudioRoutingModule);
    return CloudioRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/cloudio/cloudio.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/cloudio/cloudio.module.ts ***!
  \***************************************************/
/*! exports provided: CloudioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudioModule", function() { return CloudioModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/cloudio/joblist/joblist.component.ts");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/cloudio/job/job.component.ts");
/* harmony import */ var src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _cloudio_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloudio-routing.module */ "./src/app/modules/cloudio/cloudio-routing.module.ts");







var CloudioModule = /** @class */ (function () {
    function CloudioModule() {
    }
    CloudioModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_joblist_joblist_component__WEBPACK_IMPORTED_MODULE_3__["JoblistComponent"], _job_job_component__WEBPACK_IMPORTED_MODULE_4__["JobComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cloudio_routing_module__WEBPACK_IMPORTED_MODULE_6__["CloudioRoutingModule"],
                src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ]
        })
    ], CloudioModule);
    return CloudioModule;
}());



/***/ }),

/***/ "./src/app/modules/cloudio/job/job.component.scss":
/*!********************************************************!*\
  !*** ./src/app/modules/cloudio/job/job.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xvdWRpby9qb2Ivam9iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cloudio/job/job.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/cloudio/job/job.component.ts ***!
  \******************************************************/
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
            label: 'Job Cloud IO',
            icon: 'fa-retweet',
            items: [
                {
                    type: 'row', items: [
                        { type: 'text', label: 'Job Name', placeholder: '', value: '' },
                        { type: 'text', label: 'JobID', placeholder: '', value: 'IO2019083000005', disabled: true },
                        { type: 'list', label: 'Priority Level', options: [
                                { label: 'Normal', value: '3' },
                                { label: 'Important', value: '2' },
                                { label: 'Critical', value: '1' },
                                { label: 'Low', value: '4' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Source (Path or ID)', icon: '', items: [
                        { type: 'text', label: 'EndPoint', placeholder: '', value: '10.120.14.10/cloudio/api01' },
                        { type: 'text', label: 'Path IN', placeholder: '', value: '' },
                        { type: 'list', label: 'Extraction Query', options: [
                                { label: '', value: '' },
                                { label: '20190830D00005', value: '1' },
                                { label: '20190830D00022', value: '2' },
                                { label: '20190830D00199', value: '3' },
                            ] },
                        { type: 'list', label: 'Anonymization Job', options: [
                                { label: '', value: '' },
                                { label: '20190830D00005', value: '1' },
                                { label: '20190830D00022', value: '2' },
                                { label: '20190830D00199', value: '3' },
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Destination', icon: '', items: [
                        { type: 'list', label: 'Target', options: [
                                { label: 'Pacs Central', value: '1' },
                                { label: 'Google Health', value: '0' },
                                { label: 'Freshbread Portal', value: '2' },
                                { label: 'Partner 1', value: '3' },
                            ] },
                    ]
                },
                {
                    type: 'row', items: [
                        { type: 'checkbox', label: 'After Job', options: [
                                { label: 'Clear Source path', checked: false },
                                { label: 'Send a notification Partner 1', checked: false },
                                { label: 'Update System 002', checked: false },
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
    JobComponent.prototype.ngOnInit = function () {
    };
    JobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job',
            template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cloudio/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/modules/cloudio/job/job.component.scss")]
        })
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/modules/cloudio/joblist/joblist.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/cloudio/joblist/joblist.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xvdWRpby9qb2JsaXN0L2pvYmxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/cloudio/joblist/joblist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/cloudio/joblist/joblist.component.ts ***!
  \**************************************************************/
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
            label: 'Job Cloud IO History',
            icon: 'fa-retweet',
            labels: [
                { label: 'label', prop: 'label' },
                { label: 'Date', prop: 'date' },
                { label: 'From', prop: 'from' },
                { label: 'To', prop: 'to' },
            ],
            items: [
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'warning', from: 'Job Anony 0917', to: 'Google Health', date: '26/08/2019 | 10:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'success', from: 'Job Anony 0027', to: 'Partner 002', date: '27/08/2019 | 10:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 002', status: 'success', from: 'Google Health', to: 'Pacs Central', date: '30/08/2019 | 09:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 002', status: 'warning', from: 'Google Health', to: 'Pacs Central', date: '28/08/2019 | 10:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'success', from: 'Job Anony 0037', to: 'Freshbread', date: '29/08/2019 | 10:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'success', from: 'Job Anony 0777', to: 'Google Health', date: '30/08/2019 | 08:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'success', from: 'Job Anony 8989', to: 'Google Health', date: '28/08/2019 | 01:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 003', status: 'success', from: 'Google Health', to: 'Pacs Central', date: '29/08/2019 | 01:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'success', from: 'Google Health', to: 'Pacs Central', date: '01/09/2019 | 10:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'success', from: 'Job Anony 1141', to: 'Google Health', date: '01/09/2019 | 10:00' },
                { id: 'A2019083000005', label: 'Job Cloud IO 001', status: 'success', from: 'Job Anony 9941', to: 'Google Health', date: '02/09/2019 | 01:00' },
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
            template: __webpack_require__(/*! raw-loader!./joblist.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cloudio/joblist/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.scss */ "./src/app/modules/cloudio/joblist/joblist.component.scss")]
        })
    ], JoblistComponent);
    return JoblistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-cloudio-cloudio-module-es5.js.map