(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-anonymization-anonymization-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/anonymization/job/job.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/anonymization/job/job.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-layout-form [form]=\"form\"></app-layout-form>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/anonymization/joblist/joblist.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/anonymization/joblist/joblist.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-list [list]=\"list\"></app-layout-list>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/anonymization/type/type.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/anonymization/type/type.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-layout-form [form]=\"form\"></app-layout-form>\n\n\n"

/***/ }),

/***/ "./src/app/modules/anonymization/anonymization-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/anonymization/anonymization-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AnonymizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymizationRoutingModule", function() { return AnonymizationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/anonymization/job/job.component.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/anonymization/joblist/joblist.component.ts");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./type/type.component */ "./src/app/modules/anonymization/type/type.component.ts");






var routes = [
    { path: '', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'job', component: _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"] },
    { path: 'type', component: _type_type_component__WEBPACK_IMPORTED_MODULE_5__["TypeComponent"] },
    { path: 'joblist', component: _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_4__["JoblistComponent"] },
];
var AnonymizationRoutingModule = /** @class */ (function () {
    function AnonymizationRoutingModule() {
    }
    AnonymizationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AnonymizationRoutingModule);
    return AnonymizationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/anonymization/anonymization.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/anonymization/anonymization.module.ts ***!
  \***************************************************************/
/*! exports provided: AnonymizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymizationModule", function() { return AnonymizationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _job_job_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job/job.component */ "./src/app/modules/anonymization/job/job.component.ts");
/* harmony import */ var _anonymization_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./anonymization-routing.module */ "./src/app/modules/anonymization/anonymization-routing.module.ts");
/* harmony import */ var src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./joblist/joblist.component */ "./src/app/modules/anonymization/joblist/joblist.component.ts");
/* harmony import */ var _type_type_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./type/type.component */ "./src/app/modules/anonymization/type/type.component.ts");








var AnonymizationModule = /** @class */ (function () {
    function AnonymizationModule() {
    }
    AnonymizationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _job_job_component__WEBPACK_IMPORTED_MODULE_3__["JobComponent"],
                _joblist_joblist_component__WEBPACK_IMPORTED_MODULE_6__["JoblistComponent"],
                _type_type_component__WEBPACK_IMPORTED_MODULE_7__["TypeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _anonymization_routing_module__WEBPACK_IMPORTED_MODULE_4__["AnonymizationRoutingModule"],
                src_app_layout_layout_module__WEBPACK_IMPORTED_MODULE_5__["LayoutModule"]
            ]
        })
    ], AnonymizationModule);
    return AnonymizationModule;
}());



/***/ }),

/***/ "./src/app/modules/anonymization/job/job.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/anonymization/job/job.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5vbnltaXphdGlvbi9qb2Ivam9iLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/anonymization/job/job.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/anonymization/job/job.component.ts ***!
  \************************************************************/
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
            label: 'Job Anonymization',
            icon: 'fa-user-times',
            items: [
                {
                    type: 'row', items: [
                        { type: 'text', label: 'Job Name', placeholder: '', value: '' },
                        { type: 'text', label: 'JobID', placeholder: '', value: 'A2019083000005', disabled: true },
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
                        { type: 'text', label: 'Path IN', placeholder: '', value: '//extraction/20190830D00005' },
                        { type: 'list', label: 'Extraction Query', options: [
                                { label: '20190830D00005', value: '1' },
                                { label: '20190830D00022', value: '2' },
                                { label: '20190830D00199', value: '3' },
                                { label: '20190829D09877', value: '1' },
                                { label: '20190811D03232', value: '2' },
                                { label: '20190812D00011', value: '3' },
                                { label: '20190812D00033', value: '1' },
                                { label: '20190831D00111', value: '2' },
                                { label: '20190830D00009', value: '3' },
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Destination', icon: '', items: [
                        { type: 'text', label: 'Path IN', placeholder: '', value: '//anonymization/A2019083000005' },
                    ]
                },
                {
                    type: 'row', items: [
                        { type: 'list', label: 'Pre Definition Anonymization', options: [
                                { label: 'AN_PSI_001', value: '1' },
                                { label: 'AN_P_002', value: '2' },
                                { label: 'AN_S_003', value: '3' },
                            ] },
                        { type: 'checkbox', label: 'Level Anonymization', options: [
                                { label: 'STUDY', checked: true },
                                { label: 'SERIE', checked: false },
                                { label: 'INSTANCE', checked: false },
                            ] },
                        { type: 'list', label: 'Custom tags Anonymization', multiple: true, options: [
                                { label: '(0002,0000)	UL	File Meta Information Group Length	', value: '1', selected: true },
                                { label: '(0002,0001)	OB	File Meta Information Version	', value: '1', selected: true },
                                { label: '(0002,0002)	UI	Media Storage SOP Class UID	', value: '1', selected: true },
                                { label: '(0002,0003)	UI	Media Storage SOP Instance UID	', value: '1', selected: true },
                                { label: '(0002,0010)	UI	Transfer Syntax UID	', value: '1', selected: true },
                                { label: '(0002,0012)	UI	Implementation Class UID	', value: '1', selected: true },
                                { label: '(0002,0013)	SH	Implementation Version Name	', value: '1', selected: true },
                                { label: '(0002,0016)	AE	Source Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0017)	AE	Sending Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0018)	AE	Receiving Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0100)	UI	Private Information Creator UID	', value: '1', selected: true },
                                { label: '(0002,0102)	OB	Private Information', value: '1', selected: true },
                            ] }
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
            template: __webpack_require__(/*! raw-loader!./job.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/anonymization/job/job.component.html"),
            styles: [__webpack_require__(/*! ./job.component.scss */ "./src/app/modules/anonymization/job/job.component.scss")]
        })
    ], JobComponent);
    return JobComponent;
}());



/***/ }),

/***/ "./src/app/modules/anonymization/joblist/joblist.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/anonymization/joblist/joblist.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5vbnltaXphdGlvbi9qb2JsaXN0L2pvYmxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/anonymization/joblist/joblist.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/anonymization/joblist/joblist.component.ts ***!
  \********************************************************************/
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
            label: 'Job Anonymization History',
            icon: 'fa-user-times',
            labels: [
                { label: 'label', prop: 'label' },
                { label: 'Anon Date', prop: 'anonymizationDate' },
                { label: 'Level', prop: 'level' },
                { label: 'Extraction ID', prop: 'extractionQuery' },
                { label: 'path', prop: 'path' },
            ],
            items: [
                { id: 'A2019083000005', label: 'Job Anon Manual001', status: 'warning', level: 'AN_PSI_001', anonymizationDate: '26/08/2019 | 10:00', extractionQuery: '-', path: '//extraction/20190830D00005' },
                { id: 'A2019083000005', label: 'Job Anon query 001', status: 'success', level: 'AN_S_003', anonymizationDate: '27/08/2019 | 10:00', extractionQuery: '20190830D00005', path: '-' },
                { id: 'A2019083000005', label: 'Job Anon query 002', status: 'success', level: 'Custom(PSI)', anonymizationDate: '30/08/2019 | 09:00', extractionQuery: '20190830D00005', path: '-' },
                { id: 'A2019083000005', label: 'Job Anon Manual002', status: 'warning', level: 'Custom(P)', anonymizationDate: '28/08/2019 | 10:00', extractionQuery: '-', path: '//extraction/20190830D00005' },
                { id: 'A2019083000005', label: 'Job Anon query 001', status: 'success', level: 'AN_PSI_001', anonymizationDate: '29/08/2019 | 10:00', extractionQuery: '20190830D00005', path: '-' },
                { id: 'A2019083000005', label: 'Job Anon query 001', status: 'success', level: 'Custom(P)', anonymizationDate: '30/08/2019 | 08:00', extractionQuery: '20190830D00005', path: '-' },
                { id: 'A2019083000005', label: 'Job Anon query 001', status: 'success', level: 'AN_S_003', anonymizationDate: '28/08/2019 | 01:00', extractionQuery: '20190830D00005', path: '-' },
                { id: 'A2019083000005', label: 'Job Anon Manual003', status: 'success', level: 'Custom(S)', anonymizationDate: '29/08/2019 | 01:00', extractionQuery: '-', path: '//extraction/20190830D00005' },
                { id: 'A2019083000005', label: 'Job Anon query 001', status: 'success', level: 'Custom(S)', anonymizationDate: '01/09/2019 | 10:00', extractionQuery: '20190830D00005', path: '-' },
                { id: 'A2019083000005', label: 'Job Anon query 001', status: 'success', level: 'AN_PSI_001', anonymizationDate: '01/09/2019 | 10:00', extractionQuery: '20190830D00005', path: '-' },
                { id: 'A2019083000005', label: 'Job Anon query 001', status: 'success', level: 'AN_S_003', anonymizationDate: '02/09/2019 | 01:00', extractionQuery: '20190830D00005', path: '-' },
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
            template: __webpack_require__(/*! raw-loader!./joblist.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/anonymization/joblist/joblist.component.html"),
            styles: [__webpack_require__(/*! ./joblist.component.scss */ "./src/app/modules/anonymization/joblist/joblist.component.scss")]
        })
    ], JoblistComponent);
    return JoblistComponent;
}());



/***/ }),

/***/ "./src/app/modules/anonymization/type/type.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/anonymization/type/type.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW5vbnltaXphdGlvbi90eXBlL3R5cGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/anonymization/type/type.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/anonymization/type/type.component.ts ***!
  \**************************************************************/
/*! exports provided: TypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeComponent", function() { return TypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypeComponent = /** @class */ (function () {
    function TypeComponent() {
        this.form = {
            label: 'Pre Definition Anonymization',
            icon: 'fa-list',
            items: [
                {
                    type: 'row', items: [
                        { type: 'text', label: 'Code', placeholder: '', value: 'AN_PSI_001' },
                        { type: 'checkbox', label: 'Option', options: [
                                { label: 'Generate Random Hash', checked: true },
                                { label: 'Save Hash in DB', checked: true },
                            ] },
                        { type: 'checkbox', label: 'Level Anonymization', options: [
                                { label: 'STUDY', checked: true },
                                { label: 'SERIE', checked: true },
                                { label: 'INSTANCE', checked: true },
                            ] },
                    ]
                },
                {
                    type: 'fieldset', label: 'Tags for Anonymization', icon: '', items: [
                        { type: 'list', label: 'Selected', multiple: true, options: [
                                { label: '(0002,0012)	UI	Implementation Class UID	', value: '1', selected: true },
                                { label: '(0002,0013)	SH	Implementation Version Name	', value: '1', selected: true },
                                { label: '(0002,0016)	AE	Source Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0017)	AE	Sending Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0018)	AE	Receiving Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0100)	UI	Private Information Creator UID	', value: '1', selected: true },
                                { label: '(0002,0102)	OB	Private Information', value: '1', selected: true },
                            ] },
                        { type: 'button', label: 'Add New', icon: 'plus-circle', style: 'btn-primary' },
                    ]
                },
                {
                    type: 'fieldset', label: 'Tags to Keep Original', icon: '', items: [
                        { type: 'list', label: 'Selected', multiple: true, options: [
                                { label: '(0002,0000)	UL	File Meta Information Group Length	', value: '1', selected: true },
                                { label: '(0002,0001)	OB	File Meta Information Version	', value: '1', selected: true },
                                { label: '(0002,0002)	UI	Media Storage SOP Class UID	', value: '1', selected: true },
                                { label: '(0002,0003)	UI	Media Storage SOP Instance UID	', value: '1', selected: true },
                                { label: '(0002,0010)	UI	Transfer Syntax UID	', value: '1', selected: true },
                                { label: '(0002,0012)	UI	Implementation Class UID	', value: '1', selected: true },
                                { label: '(0002,0013)	SH	Implementation Version Name	', value: '1', selected: true },
                                { label: '(0002,0016)	AE	Source Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0017)	AE	Sending Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0018)	AE	Receiving Application Entity Title	', value: '1', selected: true },
                                { label: '(0002,0100)	UI	Private Information Creator UID	', value: '1', selected: true },
                                { label: '(0002,0102)	OB	Private Information', value: '1', selected: true },
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
    TypeComponent.prototype.ngOnInit = function () {
    };
    TypeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-type',
            template: __webpack_require__(/*! raw-loader!./type.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/anonymization/type/type.component.html"),
            styles: [__webpack_require__(/*! ./type.component.scss */ "./src/app/modules/anonymization/type/type.component.scss")]
        })
    ], TypeComponent);
    return TypeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-anonymization-anonymization-module-es5.js.map