(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-cloudcontainer-cloudcontainer-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cloudcontainer/job/job.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cloudcontainer/job/job.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-form [form]=\"form\"></app-layout-form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/cloudcontainer/joblist/joblist.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/cloudcontainer/joblist/joblist.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-list [list]=\"list\"></app-layout-list>\n"

/***/ }),

/***/ "./src/app/modules/cloudcontainer/cloudcontainer-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/cloudcontainer/cloudcontainer-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CloudContainerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudContainerRoutingModule", function() { return CloudContainerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/cloudcontainer/job/job.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/cloudcontainer/joblist/joblist.component.ts");





var routes = [
    { path: '', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'job', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'joblist', component: _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__["JoblistComponent"] },
];
var CloudContainerRoutingModule = /** @class */ (function () {
    function CloudContainerRoutingModule() {
    }
    CloudContainerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CloudContainerRoutingModule);
    return CloudContainerRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/cloudcontainer/cloudcontainer.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/cloudcontainer/cloudcontainer.module.ts ***!
  \*****************************************************************/
/*! exports provided: CloudcontainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudcontainerModule", function() { return CloudcontainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/cloudcontainer/job/job.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/cloudcontainer/joblist/joblist.component.ts");
/* harmony import */ var src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _cloudcontainer_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloudcontainer-routing.module */ "./src/app/modules/cloudcontainer/cloudcontainer-routing.module.ts");







var CloudcontainerModule = /** @class */ (function () {
    function CloudcontainerModule() {
    }
    CloudcontainerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"], _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__["JoblistComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _cloudcontainer_routing_module__WEBPACK_IMPORTED_MODULE_6__["CloudContainerRoutingModule"],
                src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ]
        })
    ], CloudcontainerModule);
    return CloudcontainerModule;
}());



/***/ }),

/***/ "./src/app/modules/cloudcontainer/job/job.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/cloudcontainer/job/job.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xvdWRjb250YWluZXIvam9iL2pvYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/cloudcontainer/job/job.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/cloudcontainer/job/job.component.ts ***!
  \*************************************************************/
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
            label: 'Job Container ',
            icon: 'fa-th-large',
            items: [
                {
                    type: 'row', items: [
                        { type: 'text', label: 'Job Name', placeholder: '', value: '' },
                        { type: 'text', label: 'JobID', placeholder: '', value: 'C2019083000005', disabled: true },
                        { type: 'list', label: 'Priority Level', options: [
                                { label: 'Normal', value: '3' },
                                { label: 'Important', value: '2' },
                                { label: 'Critical', value: '1' },
                                { label: 'Low', value: '4' }
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Type', icon: '', items: [
                        { type: 'list', label: 'Container', options: [
                                { label: 'Container Docker', value: '1' },
                            ] },
                        { type: 'list', label: 'Template', options: [
                                { label: 'Python3 inference API GPU', value: '1' },
                                { label: 'Python2 inference API', value: '2' },
                                { label: 'Custom API 001', value: '3' },
                            ] },
                        { type: 'list', label: 'Result Type', options: [
                                { label: 'Image', value: '1' },
                                { label: 'Value', value: '2' },
                                { label: 'Study', value: '3' },
                                { label: 'Custom 001', value: '4' },
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Code', icon: '', items: [
                        { type: 'text', label: 'Git Source', placeholder: '', value: 'https://bitbucket.org/dasainova/code001' },
                        { type: 'list', label: 'Template', options: [
                                { label: 'Python3 Tensorflow', value: '2' },
                                { label: 'Python3 Keras', value: '1' },
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Destination', icon: '', items: [
                        { type: 'list', label: 'Target', options: [
                                { label: 'Google Cloud', value: '1' },
                            ] },
                        { type: 'checkbox', label: 'After inference', options: [
                                { label: 'Kill Container', checked: true },
                                { label: 'Send a notification Partner 1', checked: false },
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
            template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cloudcontainer/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/modules/cloudcontainer/job/job.component.scss")]
        })
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/modules/cloudcontainer/joblist/joblist.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/modules/cloudcontainer/joblist/joblist.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2xvdWRjb250YWluZXIvam9ibGlzdC9qb2JsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cloudcontainer/joblist/joblist.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/cloudcontainer/joblist/joblist.component.ts ***!
  \*********************************************************************/
/*! exports provided: JoblistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoblistComponent", function() { return JoblistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JoblistComponent = /** @class */ (function () {
    function JoblistComponent() {
    }
    JoblistComponent.prototype.ngOnInit = function () {
    };
    JoblistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-joblist',
            template: __webpack_require__(/*! raw-loader!./joblist.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/cloudcontainer/joblist/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.scss */ "./src/app/modules/cloudcontainer/joblist/joblist.component.scss")]
        })
    ], JoblistComponent);
    return JoblistComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-cloudcontainer-cloudcontainer-module-es5.js.map