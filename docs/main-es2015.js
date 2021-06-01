(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\WebDev\airada.github.io\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../portfolio-featured/portfolio-featured.component */ "G6HO");





class AboutComponent {
    constructor(router, cdr) {
        this.router = router;
        this.cdr = cdr;
        this.state = 'down';
    }
    ngOnInit() {
        this.stars = this.box_shadow(400, 250);
        this.stars1 = this.box_shadow(125, 200);
        this.stars2 = this.box_shadow(50, 200);
        document.getElementById("stars").style.boxShadow = this.stars;
        document.getElementById("stars1").style.boxShadow = this.stars1;
        document.getElementById("stars2").style.boxShadow = this.stars2;
    }
    onWindowScroll(event) {
        let height = window.scrollY;
        let bg = document.getElementById("whitebg");
        bg.style.top = height * 0.25 + 'px';
    }
    ngAfterViewInit() {
        if (this.state === "down") {
            this.state = "up";
        }
        else {
            this.state = "down";
        }
        this.cdr.detectChanges();
    }
    onEnd(event) {
        if (this.state === "up") {
            this.state = "down";
        }
        else {
            this.state = "up";
        }
        console.log("animation ended: state = ", this.state);
    }
    rng(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    box_shadow(num_stars, vh_height) {
        let box_shadow_str = "";
        for (let i = 0; i <= num_stars; i++) {
            box_shadow_str += this.rng(0, 100).toString() + "vw " + this.rng(0, vh_height).toString() + "vh " + "white";
            if (i != num_stars) {
                box_shadow_str += ",";
            }
        }
        return box_shadow_str;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 100, vars: 3, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "container-fluid"], ["title", "Toggle navigation", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ms-auto"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "py-2"], ["routerLink", "/About", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "active", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["routerLink", "/Portfolio", "routerLinkActive", "active", 1, "nav-link", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://drive.google.com/file/d/1H18dQx-U2BO1mgFXNuwFs9mMy0ebcHDu/view?usp=sharing", 1, "nav-link", "small-txt", "my-1", "ms-auto", "ms-lg-3", "me-lg-5"], ["id", "header", 1, "container-fluid"], ["src", "/assets/new_theme/header/white_bg_compressed.png", "alt", "White Upside Down Arch", "id", "whitebg", 1, "img-fluid"], ["id", "stars"], ["id", "stars1"], ["id", "stars2"], ["id", "space"], ["id", "text", 1, "row", "m-0", "pt-5", 2, "position", "absolute", "bottom", "15vh", "left", "0", "right", "0"], [1, "col", "mb-0", "pb-0", "ms-3", "text-center", "text-white"], [1, "text-white", "mb-3"], [1, "d-flex", "justify-content-center", "p-0", "mx-0", "mt-2"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Checkout my GitHub", "src", "/assets/img/github-brands.svg", 1, "filter-white"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Connect with me on Linkedin", "src", "/assets/img/linkedin-brands.svg", 1, "filter-white"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Send me an email", "src", "/assets/img/envelope-solid.svg", 1, "filter-white"], ["id", "portfolio", 1, "page-section", "portfolio", "bg-white"], ["badges", "Angular,Bootstrap,Design", "image", "/assets/img/portfolio/personal/personal_mockup.jpg", "title", "Personal Website", "date", "September 2019 - Ongoing", "description", "Personal website with portfolio and accomplishments.", "code", "https://github.com/airada/happy-for-you", "link", "https://mimi-ai.herokuapp.com/"], [1, "bg-white", "py-5", "my-5"], [1, "text-center", "text-uppercase", "mb-5"], [1, "container-xxxl", "d-flex", "flex-wrap"], [1, "col-6", "col-lg-3", "p-0", "mx-auto"], [1, "card", "bg-white", "card-size"], ["src", "/assets/img/avataaars.svg", "alt", "Smiling Girl Avatar Icon from avataaars.com", 1, "card-img", "mx-auto"], [1, "card-body"], [1, "card-text", "text-center"], ["src", "assets/img/graduation-cap-solid.svg", "alt", "Graduation Cap Icon", 1, "card-img-top", "mx-auto", "mt-4", "p-4", "rounded-circle", "bg-dark"], [1, "text-center", "small-txt"], ["src", "assets/img/lightbulb-regular.svg", "alt", "Lightbulb Icon", 1, "card-img-top", "mx-auto", "mt-4", "p-4", "rounded-circle", "bg-dark"], ["src", "assets/img/laptop-code-solid.svg", "alt", "Laptop with Code brackets Icon", 1, "card-img-top", "mx-auto", "mt-4", "p-4", "rounded-circle", "bg-dark"], [1, "footer", "bg-white", "text-dark", "text-center"], [1, "container"], [1, "row"], [1, "col", "mb-5", "mb-lg-0"], [1, "name-custom", "mb-4"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Checkout my GitHub", "src", "/assets/img/github-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Connect with me on Linkedin", "src", "/assets/img/linkedin-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Send me an email", "src", "/assets/img/envelope-solid.svg", 1, "filter-black"], [1, "copyright", "py-4", "bg-white", "text-center", "text-dark"], [1, "small-txt"], ["alt", "Love", "src", "/assets/img/heart-solid.svg", 2, "height", "1rem"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "./home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "./portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "./resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim.done", function AboutComponent_Template_div_animation_starsAnim_done_18_listener($event) { return ctx.onEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim1.done", function AboutComponent_Template_div_animation_starsAnim1_done_20_listener($event) { return ctx.onEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim2.done", function AboutComponent_Template_div_animation_starsAnim2_done_22_listener($event) { return ctx.onEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "JASMINE IRADA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "app-portfolio-featured", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " I'm Jasmine Irada. (she/her) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " UC Irvine ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Computer Science B.S. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Class of 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " I develop ideas into impactful, successful products. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " I'm looking for opportunities that allow me to grow as a developer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "footer", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Let's Connect!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u00A92020 - 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " JASMINE IRADA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " MADE WITH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@starsAnim", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@starsAnim1", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@starsAnim2", ctx.state);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioFeaturedComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] { font-family: \"Playfair Display\"; font-style: normal; font-variant: normal;  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n}\r\n\r\np[_ngcontent-%COMP%], .subheading[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n  color: black;\r\n}\r\n\r\n.small-txt[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: #f5f5f7;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  color: #f5f5f7;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n  \r\n}\r\n\r\n#whitebg[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  pointer-events: none;\r\n  z-index: -1;\r\n}\r\n\r\n#stars[_ngcontent-%COMP%] {\r\n  width: 0.05rem;\r\n  height: 0.05rem;\r\n  background: transparent;\r\n}\r\n\r\n#stars1[_ngcontent-%COMP%] {\r\n  width: 0.15rem;\r\n  height: 0.15rem;\r\n  border-radius: 0.075rem;\r\n  background: transparent;\r\n}\r\n\r\n#stars2[_ngcontent-%COMP%] {\r\n  width: 0.25rem;\r\n  height: 0.25rem;\r\n  border-radius: 0.125rem;\r\n  background: transparent;\r\n}\r\n\r\n#space[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  pointer-events: none;\r\n  \r\n  background-image: \r\n  radial-gradient(circle at bottom, #303e4eaf 0%, #1b2735 10%,black 70%), \r\n  url('black.jpg');\r\n  z-index: -4;\r\n}\r\n\r\n\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  z-index: 5;\r\n}\r\n\r\n.container-xxxl[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 1.5rem;\r\n  padding-left: 1.5rem;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n.filter-white[_ngcontent-%COMP%] {\r\n  filter: invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-black[_ngcontent-%COMP%] {\r\n  filter: invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-white[_ngcontent-%COMP%] {\r\n  filter: none;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    margin-top: 2rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 4000px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 14rem;\r\n    width: 14rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 4rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-top: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 1824px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 10rem;\r\n    width: 10rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 2rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 6rem;\r\n    width: 6rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    width: 8rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 0.90rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: normal;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.5em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7WUFPWSwrQkFBK0IsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsR0FBRzs7QUFFeEY7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUscUJBQXFCO0VBQ3JCOztnRkFFOEU7RUFDOUUsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7O0NBRUM7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7Q0FFQzs7QUFDRDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiOzt3QkFFc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiw2RUFBNkU7RUFDN0U7O2tCQUU0QztFQUM1QyxXQUFXO0FBQ2I7O0FBRUE7O0NBRUM7O0FBRUQ7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUdBOztFQUVFOztBQUVGO0VBQ0UsZ0dBQWdHO0FBQ2xHOztBQUVBO0VBQ0UsZ0dBQWdHO0FBQ2xHOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbi5uYXZiYXItYnJhbmQsXHJcbi5uYXYtbGluayB7IGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIjsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgIH1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG5wLFxyXG4uc3ViaGVhZGluZyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgICBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zbWFsbC10eHQge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLyogXHJcbk5BVkJBUiBcclxuKi9cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiAjZjVmNWY3O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiwgLm5hdi1saW5rLCAubmF2YmFyLWJyYW5kIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBjb2xvcjogI2Y1ZjVmNztcclxufVxyXG5cclxuLm5hdmJhci1uYXYgbGkgYSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLyogXHJcbkhFQURFUiBcclxuKi9cclxuaGVhZGVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5oZWFkZXIgPiAuY29udGFpbmVyLWZsdWlkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8qIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cclxufVxyXG5cclxuI3doaXRlYmcge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbiNzdGFycyB7XHJcbiAgd2lkdGg6IDAuMDVyZW07XHJcbiAgaGVpZ2h0OiAwLjA1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc3RhcnMxIHtcclxuICB3aWR0aDogMC4xNXJlbTtcclxuICBoZWlnaHQ6IDAuMTVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4wNzVyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNzdGFyczIge1xyXG4gIHdpZHRoOiAwLjI1cmVtO1xyXG4gIGhlaWdodDogMC4yNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI3NwYWNlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC8qIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgIzFiMjczNSAwJSwjMDkwYTBmIDEwMCUpOyAqL1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IFxyXG4gIHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgYm90dG9tLCAjMzAzZTRlYWYgMCUsICMxYjI3MzUgMTAlLGJsYWNrIDcwJSksIFxyXG4gIHVybChcInNyYy9hc3NldHMvbmV3X3RoZW1lL2hlYWRlci9ibGFjay5qcGdcIik7XHJcbiAgei1pbmRleDogLTQ7XHJcbn1cclxuXHJcbi8qIFxyXG5TRUNUSU9OIFxyXG4qL1xyXG5cclxuc2VjdGlvbiB7XHJcbiAgei1pbmRleDogNTtcclxufVxyXG5cclxuLmNvbnRhaW5lci14eHhsIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxLjVyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuLyogXHJcbklDT05TXHJcbiAqL1xyXG5cclxuLmZpbHRlci13aGl0ZSB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOTElKSBzYXR1cmF0ZSgzOCUpIGh1ZS1yb3RhdGUoMzIxZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDExMCUpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIC5maWx0ZXItYmxhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDkxJSkgc2F0dXJhdGUoMzglKSBodWUtcm90YXRlKDMyMWRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMTAlKTtcclxufVxyXG5cclxuLmJ0bjpob3ZlciAuZmlsdGVyLXdoaXRlIHtcclxuICBmaWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodCwgLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogXHJcbiAgTUVESUEgUVVFUklFU1xyXG4gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIteHh4bCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMDBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZ3tcclxuICAgIGhlaWdodDogMTRyZW07XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ibGFjayAge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXh4eGwge1xyXG4gICAgbWF4LXdpZHRoOiAxODI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ibGFjayAge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgyNHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWcge1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ibGFjayAge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMS4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAwLjkwcmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlLCAuZmlsdGVyLWJsYWNrIHtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("50s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                    ]))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                    ]))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim2', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("150s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                    ]))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-about",
                templateUrl: "./about.component.html",
                styleUrls: ["./about.component.css"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("50s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                            ]))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                            ]))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim2', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("150s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                            ]))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", ["$event"]]
        }] }); })();


/***/ }),

/***/ "9enj":
/*!***********************************************!*\
  !*** ./src/app/portfolio/portfolio.module.ts ***!
  \***********************************************/
/*! exports provided: PortfolioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioModule", function() { return PortfolioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../filters/filters.component */ "sH3A");
/* harmony import */ var _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../project-preview/project-preview.component */ "Io3o");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portfolio.component */ "zyDg");









class PortfolioModule {
}
PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PortfolioModule });
PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PortfolioModule_Factory(t) { return new (t || PortfolioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioModule, { declarations: [_filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]], exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]],
                declarations: [_filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutModule", function() { return AboutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio-featured/portfolio-featured.component */ "G6HO");
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.component */ "84zG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");







class AboutModule {
}
AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutModule_Factory(t) { return new (t || AboutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
        ], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]], exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
                declarations: [_portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "G6HO":
/*!********************************************************************!*\
  !*** ./src/app/portfolio-featured/portfolio-featured.component.ts ***!
  \********************************************************************/
/*! exports provided: PortfolioFeaturedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioFeaturedComponent", function() { return PortfolioFeaturedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PortfolioFeaturedComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
} }
class PortfolioFeaturedComponent {
    constructor() {
        this.skillExist = true;
    }
    ngOnInit() {
        this.badges_list = this.badges.split(",");
    }
    details() {
        console.log("to be added.");
        this.alert_fadein();
        this.alert_fadeout();
    }
    alert_fadein() {
        this.skillExist = false;
    }
    alert_fadeout() {
        setTimeout(() => {
            this.skillExist = true;
        }, 2000);
    }
}
PortfolioFeaturedComponent.ɵfac = function PortfolioFeaturedComponent_Factory(t) { return new (t || PortfolioFeaturedComponent)(); };
PortfolioFeaturedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioFeaturedComponent, selectors: [["app-portfolio-featured"]], inputs: { badges: "badges", image: "image", title: "title", date: "date", description: "description", code: "code", link: "link" }, decls: 15, vars: 4, consts: [["data-aos", "fade-up", "data-aos-duration", "1500", "data-aos-once", "true", "data-aos-anchor-placement", "top-center"], [1, "container-xxxl", "py-5", "bg-white", "text-dark"], [1, "row", "h-25"], [1, "col-12", "col-md-6", "col-xl-6", "d-flex", "align-items-center", "justify-content-center", 2, "z-index", "5"], ["alt", "Project Preview", 2, "max-width", "80%", "border-radius", "10px", 3, "src"], [1, "col"], [1, "container", "h-100", "pb-5", "pb-lg-0", 2, "position", "relative"], [1, "text-center", "text-uppercase", "my-3", "my-md-0"], [2, "background", "linear-gradient(to top, lightgray 50%, transparent 50%)"], [1, "row", "pt-2", "mt-2", "text-white"], [1, "d-flex", "flex-wrap", "align-items-center"], ["class", "badge text-white my-1 me-1", 4, "ngFor", "ngForOf"], [1, "text-left", "mt-md-4", "mb-4"], [1, "badge", "text-white", "my-1", "me-1"]], template: function PortfolioFeaturedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, PortfolioFeaturedComponent_li_12_Template, 2, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.badges_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] { font-family: \"Playfair Display\"; font-weight: 900; font-style: normal; font-variant: normal;}\r\n\r\np[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n}\r\n\r\n.container-xxxl[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 1.5rem;\r\n  padding-left: 1.5rem;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n}\r\n\r\n\r\n\r\n.btn-shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 5px 5px 10px lightgray;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  h3[_ngcontent-%COMP%] {\r\n   font-size: 4rem;\r\n }\r\n\r\n p[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n \r\n .container-xxxl[_ngcontent-%COMP%] {\r\n   max-width: 90vw;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 20px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n   padding: 2.5rem;\r\n }\r\n}\r\n\r\n@media only screen and (min-width: 1825px) and (max-width: 2559px) {\r\n  h3[_ngcontent-%COMP%] {\r\n   font-size: 3.5rem;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: 1.5rem;\r\n }\r\n \r\n .container-xxxl[_ngcontent-%COMP%] {\r\n   max-width: 90vw;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 20px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n   padding: 2rem;\r\n }\r\n}\r\n\r\n@media only screen and (min-width: 601px) and (max-width: 1824px) {\r\n\r\n h3[_ngcontent-%COMP%]{\r\n   font-size: xx-large;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n }\r\n \r\n .link[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: initial;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 10px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n   padding: 1.25rem;\r\n }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n h3[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n }\r\n\r\n p[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: x-small;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: x-small;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 5px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n   padding: 1rem;\r\n }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1mZWF0dXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztLQUtLLCtCQUErQixFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDOztBQUVqRztFQUNFLHFCQUFxQjtFQUNyQjs7Z0ZBRThFO0VBQzlFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFO0dBQ0MsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFLGVBQWU7Q0FDakI7O0NBRUE7R0FDRSxlQUFlO0NBQ2pCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFLGtCQUFrQjtDQUNwQjs7Q0FFQTtHQUNFLGVBQWU7R0FDZixlQUFlO0NBQ2pCO0FBQ0Q7O0FBRUE7RUFDRTtHQUNDLGlCQUFpQjtDQUNuQjs7Q0FFQTtHQUNFLGtCQUFrQjtDQUNwQjs7Q0FFQTtHQUNFLGtCQUFrQjtDQUNwQjs7Q0FFQTtHQUNFLGlCQUFpQjtDQUNuQjs7Q0FFQTtHQUNFLGVBQWU7Q0FDakI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxrQkFBa0I7R0FDbEIsYUFBYTtDQUNmO0FBQ0Q7O0FBRUE7O0NBRUM7R0FDRSxtQkFBbUI7Q0FDckI7O0NBRUE7R0FDRSxnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRSxnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxnQkFBZ0I7R0FDaEIsZ0JBQWdCO0NBQ2xCOztBQUVEOztBQUVBO0NBQ0M7R0FDRSxnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRSxnQkFBZ0I7Q0FDbEI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxnQkFBZ0I7R0FDaEIsYUFBYTtDQUNmOztBQUVEIiwiZmlsZSI6InBvcnRmb2xpby1mZWF0dXJlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7IGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIjsgZm9udC13ZWlnaHQ6IDkwMDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDt9XHJcblxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcclxuICAgIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICAgIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXh4eGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIC5idG4tcG9ydGZvbGlvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG59ICovXHJcblxyXG4uYnRuLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLyogXHJcbk1FRElBIFFVRVJJRVNcclxuICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCkge1xyXG4gIGgzIHtcclxuICAgZm9udC1zaXplOiA0cmVtO1xyXG4gfVxyXG5cclxuIHAge1xyXG4gICBmb250LXNpemU6IDJyZW07XHJcbiB9XHJcblxyXG4gLmxpbmsge1xyXG4gICBmb250LXNpemU6IDJyZW07XHJcbiB9XHJcblxyXG4gLmJhZGdlIHtcclxuICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyLXh4eGwge1xyXG4gICBtYXgtd2lkdGg6IDkwdnc7XHJcbiB9XHJcblxyXG4gLmZhLWdpdGh1YiwgLmZhLWV4dGVybmFsLWxpbmstYWx0LCBpIHtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gfVxyXG5cclxuIGJ1dHRvbiB7XHJcbiAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgcGFkZGluZzogMi41cmVtO1xyXG4gfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MjVweCkgYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIGgzIHtcclxuICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiB9XHJcbiBcclxuIHAge1xyXG4gICBmb250LXNpemU6IDEuNzVyZW07XHJcbiB9XHJcblxyXG4gLmxpbmsge1xyXG4gICBmb250LXNpemU6IDEuNzVyZW07XHJcbiB9XHJcblxyXG4gLmJhZGdlIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiB9XHJcbiBcclxuIC5jb250YWluZXIteHh4bCB7XHJcbiAgIG1heC13aWR0aDogOTB2dztcclxuIH1cclxuXHJcbiAuZmEtZ2l0aHViLCAuZmEtZXh0ZXJuYWwtbGluay1hbHQsIGkge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiB9XHJcblxyXG4gYnV0dG9uIHtcclxuICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICBwYWRkaW5nOiAycmVtO1xyXG4gfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTgyNHB4KSB7XHJcblxyXG4gaDN7XHJcbiAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiB9XHJcbiBcclxuIHAge1xyXG4gICBmb250LXNpemU6IGxhcmdlO1xyXG4gfVxyXG4gXHJcbiAubGluayB7XHJcbiAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiB9XHJcblxyXG4gLmJhZGdlIHtcclxuICAgZm9udC1zaXplOiBpbml0aWFsO1xyXG4gfVxyXG5cclxuIC5mYS1naXRodWIsIC5mYS1leHRlcm5hbC1saW5rLWFsdCwgaSB7XHJcbiAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuIH1cclxuXHJcbiBidXR0b24ge1xyXG4gICBmb250LXNpemU6IGxhcmdlO1xyXG4gICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gaDMge1xyXG4gICBmb250LXNpemU6IGxhcmdlO1xyXG4gfVxyXG5cclxuIHAge1xyXG4gICBmb250LXNpemU6IHNtYWxsO1xyXG4gfVxyXG5cclxuIC5saW5rIHtcclxuICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gfVxyXG5cclxuIC5iYWRnZSB7XHJcbiAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuIH1cclxuXHJcbiAuZmEtZ2l0aHViLCAuZmEtZXh0ZXJuYWwtbGluay1hbHQsIGkge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuIH1cclxuXHJcbiBidXR0b24ge1xyXG4gICBmb250LXNpemU6IHNtYWxsO1xyXG4gICBwYWRkaW5nOiAxcmVtO1xyXG4gfVxyXG5cclxufVxyXG4iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioFeaturedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-portfolio-featured',
                templateUrl: './portfolio-featured.component.html',
                styleUrls: ['./portfolio-featured.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')
                        ]),
                    ]),
                ]
            }]
    }], function () { return []; }, { badges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], code: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Io3o":
/*!**************************************************************!*\
  !*** ./src/app/project-preview/project-preview.component.ts ***!
  \**************************************************************/
/*! exports provided: ProjectPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPreviewComponent", function() { return ProjectPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProjectPreviewComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
} }
class ProjectPreviewComponent {
    constructor() { }
    ngOnInit() {
        this.skill_list = this.skills.split(",");
    }
}
ProjectPreviewComponent.ɵfac = function ProjectPreviewComponent_Factory(t) { return new (t || ProjectPreviewComponent)(); };
ProjectPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectPreviewComponent, selectors: [["app-project-preview"]], inputs: { skills: "skills", image_thumbnail: "image_thumbnail", title: "title", link: "link" }, decls: 9, vars: 3, consts: [[1, "col", "mx-3", "mt-4"], [1, "card", "bg-light", "d-flex", "align-items-center", "justify-content-center"], ["target", "_blank", "rel", "noopener noreferrer", 1, "card-img-top", "pt-5", 3, "href"], ["alt", "Card image cap", 2, "width", "100%", "height", "100%", 3, "src"], [1, "card-footer", "bg-light", 2, "width", "100%"], [1, "d-flex", "flex-wrap", "align-items-center", "m-0", "p-0"], [1, "mx-1"], ["alt", "Tags:", "src", "/assets/img/tags-solid.svg", 1, "filter-gray"], ["style", "background-color: black;", "class", "badge text-white m-1", 4, "ngFor", "ngForOf"], [1, "badge", "text-white", "m-1", 2, "background-color", "black"]], template: function ProjectPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProjectPreviewComponent_li_8_Template, 2, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image_thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skill_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n  line-height: 1.2;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.filter-gray[_ngcontent-%COMP%] {\r\n  filter: none;\r\n  \r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 60em;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 2.25rem;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 1.55rem;\r\n    border-radius: 0.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 40em;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 0.8rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 30em;\r\n  }\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 0.75rem;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 0.60rem;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 25rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSxxQkFBcUI7RUFDckI7O2dGQUU4RTtFQUM5RSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxZQUFZO0VBQ1osa0dBQWtHO0FBQ3BHOztBQUVBOztFQUVFOztBQUVGO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJwcm9qZWN0LXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDMsXHJcbmg1LFxyXG5oNixcclxucCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgICBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFxyXG5DQVJEXHJcbiAqL1xyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogXHJcbklDT05TXHJcbiAqL1xyXG5cclxuLmZpbHRlci1ncmF5IHtcclxuICBmaWx0ZXI6IG5vbmU7XHJcbiAgLyogZmlsdGVyOiBpbnZlcnQoNzUlKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDUlKSBodWUtcm90YXRlKDMzM2RlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDgzJSk7ICovXHJcbn1cclxuXHJcbi8qIFxyXG5NRURJQSBRVUVSSUVTXHJcbiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogNjBlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItZ3JheSB7XHJcbiAgICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxLjU1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNTU5cHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogNDBlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItZ3JheSB7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgyNHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDMwZW07XHJcbiAgfVxyXG4gIC5maWx0ZXItZ3JheSB7XHJcbiAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgfVxyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjYwcmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-project-preview",
                templateUrl: "./project-preview.component.html",
                styleUrls: ["./project-preview.component.css"],
            }]
    }], function () { return []; }, { skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image_thumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = "Jasmine Irada | Portfolio";
    }
    ngOnInit() {
        this.router.navigate([`${"About"}`]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.module */ "FQ1g");
/* harmony import */ var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.module */ "9enj");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"],
            _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"],
        _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"],
                    _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "sH3A":
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = ["input"];
function FiltersComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_ul_5_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const selected_item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggle_skill(selected_item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selected_item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_item_r4, " ");
} }
function FiltersComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FiltersComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_li_15_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggle_skill(item_r9); })("focus", function FiltersComponent_li_15_Template_li_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return i_r10 == ctx_r13.arrowkey_position; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_li_15_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggle_skill(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r10 == ctx_r3.arrowkey_position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3.skills_list.indexOf(item_r9))("ngClass", ctx_r3.includeBG(item_r9));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9, " ");
} }
const _c1 = function () { return { standalone: true }; };
class FiltersComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.filter_skill = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.arrowkey_position = -1;
        this.caret_img = "/assets/img/caret-down-solid.svg";
        this.input_focused = false;
        this.skills_list = [];
        this.scroll_position = 0;
        this.search_size = 7;
        this.selected = [];
        this.suggestions = [];
    }
    ngOnInit() {
        this.skills_list = this.skills.split(",");
        this.suggestions = this.skills_list.slice();
    }
    input_resize() {
        const length = this.input.nativeElement.value.length;
        switch (length) {
            case 0:
                this.renderer.setAttribute(this.input.nativeElement, "size", this.search_size.toString());
                break;
            case 1:
                this.renderer.setAttribute(this.input.nativeElement, "size", "1");
                break;
            default:
                this.renderer.setAttribute(this.input.nativeElement, "size", Math.round(length / 2).toString());
                break;
        }
    }
    onKeyUp() {
        this.input_resize();
    }
    onFocus() {
        this.input_resize();
    }
    set_scroll(position) {
        document.getElementById("dropdown-content").scrollTop = position;
    }
    reset_scroll() {
        this.arrowkey_position = -1;
        this.scroll_position = 0;
        this.set_scroll(0);
    }
    emit_event(item) {
        switch (item) {
            case "C#": {
                this.filter_skill.emit("cs");
                break;
            }
            case "Project Management": {
                this.filter_skill.emit("pm");
                break;
            }
            case "HTML/CSS": {
                this.filter_skill.emit("htmlcss");
                break;
            }
            case "JavaScript": {
                this.filter_skill.emit("js");
                break;
            }
            default: {
                this.filter_skill.emit(item.toLowerCase());
                break;
            }
        }
    }
    keydown(event) {
        switch (event.keyCode) {
            case 38: // Up Arrow Key
                if (this.arrowkey_position > -1) {
                    this.arrowkey_position--;
                    this.scroll_position -= 20;
                    this.set_scroll(this.scroll_position);
                }
                break;
            case 40: // Down Arrow Key
                if (this.arrowkey_position < this.skills_list.length - 1) {
                    this.arrowkey_position++;
                    if (this.arrowkey_position > 0) {
                        this.scroll_position += 20;
                        this.set_scroll(this.scroll_position);
                    }
                }
                break;
            case 8: // Backspace
                if (this.input.nativeElement.value == "" && this.selected.length > 0) {
                    this.emit_event(this.selected.pop());
                }
                this.reset_scroll();
                break;
        }
    }
    reset_input() {
        this.renderer.setProperty(this.input.nativeElement, "value", "");
        this.renderer.setAttribute(this.input.nativeElement, "size", this.search_size.toString());
    }
    reset_suggestions() {
        this.suggestions = this.skills_list.slice();
    }
    toggle_skill(item) {
        this.reset_input();
        this.reset_suggestions();
        if (this.selected.indexOf(item) == -1) {
            this.selected.push(item);
        }
        else {
            this.selected.splice(this.selected.indexOf(item), 1);
        }
        this.emit_event(item);
    }
    update_suggestions(list) {
        this.arrowkey_position = -1;
        this.suggestions.splice(0, this.suggestions.indexOf(list[0]));
        const last = this.suggestions.indexOf(list.pop());
        this.suggestions.splice(last + 1, this.suggestions.length - last);
    }
    suggest(str) {
        let matches = [];
        this.reset_suggestions();
        const regex = new RegExp("^" + str + "+");
        for (let i = 0; i < this.suggestions.length; i++) {
            if (this.suggestions[i].toLowerCase().search(regex) != -1) {
                matches.push(this.suggestions[i]);
            }
        }
        this.update_suggestions(matches);
    }
    search(item) {
        if (item == "" && (this.arrowkey_position != -1)) {
            this.toggle_skill(this.suggestions[this.arrowkey_position]);
            return;
        }
        //Capitalize first letter
        const str = item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1);
        if (this.skills_list.includes(str) && !(this.selected.includes(str))) {
            this.toggle_skill(str);
        }
        else if (this.selected.includes(str) && (this.suggestions.indexOf(str) == this.arrowkey_position)) {
            this.selected.splice(this.selected.indexOf(str), 1);
        }
        else if (this.arrowkey_position != -1) {
            this.toggle_skill(this.suggestions[this.arrowkey_position]);
        }
        else if (!this.skills_list.includes(str)) {
            this.emit_event("invalid");
        }
        this.reset_input();
        this.reset_scroll();
        this.reset_suggestions();
    }
    content(mode) {
        this.reset_scroll();
        let inputValue = (document.getElementById("dropdown-content"));
        let box = (document.getElementById("box"));
        let caret = (document.getElementById("caret"));
        switch (mode) {
            case "show":
                inputValue.classList.remove("hide");
                box.classList.add("box-bottom");
                caret.classList.add("caret-bottom");
                this.caret_img = "/assets/img/caret-up-solid.svg";
                this.input_focused = true;
                break;
            case "hide":
                inputValue.classList.add("hide");
                box.classList.remove("box-bottom");
                caret.classList.remove("caret-bottom");
                this.caret_img = "/assets/img/caret-down-solid.svg";
                this.input_focused = false;
                break;
            case "toggle":
                inputValue.classList.toggle("hide");
                box.classList.toggle("box-bottom");
                caret.classList.toggle("caret-bottom");
                if (this.caret_img == "/assets/img/caret-down-solid.svg") {
                    this.caret_img = "/assets/img/caret-up-solid.svg";
                }
                else {
                    this.caret_img = "/assets/img/caret-down-solid.svg";
                }
                break;
        }
    }
    modelChange(str) {
        this.content('show');
        if (!str) {
            this.reset_suggestions();
            return;
        }
        this.suggest(str.toLowerCase());
    }
    clear() {
        for (let i = 0; i < this.selected.length; i++) {
            this.emit_event(this.selected[i]);
        }
        this.selected = [];
    }
    includeBG(item) {
        if (this.selected.includes(item)) {
            return "dropdown-item bg-selected";
        }
        else {
            return "dropdown-item";
        }
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["app-filters"]], viewQuery: function FiltersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, hostBindings: function FiltersComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_keyup_HostBindingHandler() { return ctx.onKeyUp(); })("focus", function FiltersComponent_focus_HostBindingHandler() { return ctx.onFocus(); });
    } }, inputs: { skills: "skills" }, outputs: { filter_skill: "filter_skill" }, decls: 16, vars: 7, consts: [[1, "container-fluid", "pt-5", "mt-5", 2, "position", "relative"], [1, "row", "bar", "d-flex", "justify-content-center"], ["id", "box", 1, "col-11", "col-lg-6", "box", "px-1", "mt-2", "d-flex", "flex-wrap", 3, "click"], [1, "my-auto", "ms-3", "me-2"], ["alt", "Filter Icon", "src", "/assets/img/filter-solid.svg", 1, "filter-gray"], ["id", "badges", "class", "d-inline-flex align-items-center p-0 m-0", 4, "ngFor", "ngForOf"], ["title", "Clear All", "class", "clear p-2 ml-auto my-auto", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Search", 1, "p-0", "ms-1", "d-flex", "align-items-center", 3, "size", "ngModel", "ngModelOptions", "focus", "keydown", "keyup.enter", "ngModelChange"], ["input", ""], ["id", "caret", 1, "col-1", "caret", "pointer", "p-0", "mt-2", "d-flex", "justify-content-end", 3, "click"], ["title", "Toggle Dropdown", 1, "my-auto", "mx-auto", "p-0"], ["alt", "Toggle Dropdown", 1, "filter-white", 3, "src"], [1, "row", "d-flex", "justify-content-center"], ["id", "dropdown-content", 1, "col", "col-lg-7", "dropdown-content", "pointer", "hide"], [1, "p-0", "m-0"], ["class", "m-0 item", 3, "id", "ngClass", "active", "click", "focus", 4, "ngFor", "ngForOf"], ["id", "badges", 1, "d-inline-flex", "align-items-center", "p-0", "m-0"], [1, "badge", "badge-pill", "pointer", "px-2", "m-1", "m-xxl-2", 3, "click"], ["title", "Clear All", 1, "clear", "p-2", "ml-auto", "my-auto", 3, "click"], [1, "pointer", "me-xxl-4"], ["alt", "Clear skills", "src", "/assets/img/times-circle-regular.svg", 1, "filter-gray"], [1, "m-0", "item", 3, "id", "ngClass", "click", "focus"], [1, "checkbox-hide"], ["type", "checkbox", 3, "click"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r2.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FiltersComponent_ul_5_Template, 3, 1, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FiltersComponent_div_6_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function FiltersComponent_Template_input_focus_7_listener() { return ctx.content("show"); })("keydown", function FiltersComponent_Template_input_keydown_7_listener($event) { return ctx.keydown($event); })("keyup.enter", function FiltersComponent_Template_input_keyup_enter_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.search(_r2.value); })("ngModelChange", function FiltersComponent_Template_input_ngModelChange_7_listener($event) { return ctx.modelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_div_click_9_listener() { return ctx.input_focused ? ctx.content("hide") : ctx.content("toggle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FiltersComponent_li_15_Template, 5, 5, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.search_size)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.caret_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suggestions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\r\n  scrollbar-color:grey;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: grey;\r\n  border-radius: 20px;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:focus, *[_ngcontent-%COMP%]:hover{\r\n  outline:none;\r\n}\r\n[_ngcontent-%COMP%]::-moz-placeholder { \r\n  color: gray;\r\n  opacity: 1; \r\n}\r\n[_ngcontent-%COMP%]::placeholder { \r\n  color: gray;\r\n  opacity: 1; \r\n}\r\n[_ngcontent-%COMP%]:-ms-input-placeholder { \r\n  color: lightgray;\r\n}\r\n[_ngcontent-%COMP%]::-ms-input-placeholder { \r\n  color:  lightgray;\r\n}\r\n.filter-gray[_ngcontent-%COMP%] {\r\n  filter: invert(75%) sepia(12%) saturate(5%) hue-rotate(333deg) brightness(90%) contrast(83%);\r\n}\r\n.pointer[_ngcontent-%COMP%]:hover   .filter-gray[_ngcontent-%COMP%] {\r\n  filter: none;\r\n}\r\n.filter-white[_ngcontent-%COMP%] {\r\n  filter: invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%);\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #0b2228;\r\n  display: inline-block;\r\n  font-family: \"Montserrat\";\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n.pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  color: black;\r\n  min-width: 100%;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  background-color: rgba(128, 128, 128, 0.1);\r\n  border: 2px ;\r\n  border-radius: 15px 0px 0px 15px;\r\n  color: white;\r\n  cursor: text;\r\n  min-height: 40px;\r\n}\r\n.box-bottom[_ngcontent-%COMP%] {\r\n  border-radius: 15px 0px 0px 0px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%], .badge-pill[_ngcontent-%COMP%] {\r\n  background-color: #343a40;\r\n  color: white;\r\n  font-size: 10pt;\r\n}\r\n.badge[_ngcontent-%COMP%]:hover, .badge-pill[_ngcontent-%COMP%]:hover {\r\n  background-color: #0d1013;\r\n  cursor: pointer;\r\n}\r\n\r\n.caret[_ngcontent-%COMP%] {\r\n  background-color: darkgray;\r\n  border-radius: 0px 15px 15px 0px;\r\n}\r\n.caret-bottom[_ngcontent-%COMP%] {\r\n  border-radius: 0px 15px 0px 0px;\r\n}\r\n.caret[_ngcontent-%COMP%]:hover {\r\n  background-color: #0b2228;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  border: 2px solid white;\r\n  border-radius: 0px 0px 15px 15px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  max-height: 25vh;\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  scrollbar-color: grey;\r\n  scrollbar-width: thin;\r\n  z-index: 4;\r\n}\r\n.bg-selected[_ngcontent-%COMP%] {\r\n  background-color: darkgray;\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgba(220, 220, 220, 0.75);\r\n}\r\n.active[_ngcontent-%COMP%], .dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active, .dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: lightgrey;\r\n}\r\n.active.bg-selected[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:hover.bg-selected {\r\n  background-color: #343a40;\r\n  color: white;\r\n}\r\n.checkbox-hide[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  height: 0;\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 0;\r\n}\r\n@media only screen and (min-width: 2560px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 8em;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    border-radius: 1rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 1em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 2em;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%]  {\r\n    height: 4rem;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 2.5rem;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 2559px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 4em;\r\n    border-radius: 2em;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 1.75em;\r\n  }\r\n\r\n input[_ngcontent-%COMP%] {\r\n   font-size: 1.5rem;\r\n }\r\n\r\n  .filter-white[_ngcontent-%COMP%] {\r\n    height: 2rem;\r\n  }\r\n  \r\n  .filter-gray[_ngcontent-%COMP%]  {\r\n    height: 1.25rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 1824px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 2em;\r\n    border-radius: 1em;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 1.75em;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-gray[_ngcontent-%COMP%]  {\r\n    height: 1.25rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  input[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%], .badge[_ngcontent-%COMP%] {\r\n    font-size:1rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-gray[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBLHFCQUFnQix5Q0FBeUM7RUFDdkQsV0FBVztFQUNYLFVBQVUsRUFBRSxZQUFZO0FBQzFCO0FBSEEsZ0JBQWdCLHlDQUF5QztFQUN2RCxXQUFXO0VBQ1gsVUFBVSxFQUFFLFlBQVk7QUFDMUI7QUFFQSx5QkFBeUIsNEJBQTRCO0VBQ25ELGdCQUFnQjtBQUNsQjtBQUVBLDBCQUEwQixtQkFBbUI7RUFDM0MsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw0RkFBNEY7QUFDOUY7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0dBQWdHO0FBQ2xHO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBLGFBQWE7QUFDYjtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUEsV0FBVztBQUNYOztFQUVFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsMEJBQTBCO0VBQzFCLGdDQUFnQztBQUNsQztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFHQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsZ0NBQWdDO0VBQ2hDLCtDQUErQztFQUMvQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDtBQUVBOzs7O0VBSUUsMkJBQTJCO0FBQzdCO0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUY7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7Q0FFRDtHQUNFLGlCQUFpQjtDQUNuQjs7RUFFQztJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7O0FBR0YiLCJmaWxlIjoiZmlsdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogV29ya3Mgb24gRmlyZWZveCAqL1xyXG4qIHtcclxuICBzY3JvbGxiYXItY29sb3I6Z3JleTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbn1cclxuXHJcbi8qIFdvcmtzIG9uIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaSAqL1xyXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxufVxyXG5cclxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbiosKjpmb2N1cywqOmhvdmVye1xyXG4gIG91dGxpbmU6bm9uZTtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gIGNvbG9yOiAgbGlnaHRncmF5O1xyXG59XHJcblxyXG4uZmlsdGVyLWdyYXkge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDc1JSkgc2VwaWEoMTIlKSBzYXR1cmF0ZSg1JSkgaHVlLXJvdGF0ZSgzMzNkZWcpIGJyaWdodG5lc3MoOTAlKSBjb250cmFzdCg4MyUpO1xyXG59XHJcblxyXG4ucG9pbnRlcjpob3ZlciAuZmlsdGVyLWdyYXkge1xyXG4gIGZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmZpbHRlci13aGl0ZSB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoOTElKSBzYXR1cmF0ZSgzOCUpIGh1ZS1yb3RhdGUoMzIxZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDExMCUpO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjMGIyMjI4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duICovXHJcbi5kcm9wZG93biB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpO1xyXG4gIGJvcmRlcjogMnB4IDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5ib3gtYm90dG9tIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4vKiBCYWRnZXMgKi9cclxuLmJhZGdlLFxyXG4uYmFkZ2UtcGlsbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uYmFkZ2U6aG92ZXIsXHJcbi5iYWRnZS1waWxsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxMDEzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcbi5jYXJldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJldC1ib3R0b20ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJldDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjIyODtcclxufVxyXG5cclxuXHJcbi8qIERyb3Bkb3duIENvbnRlbnQgKi9cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBtYXgtaGVpZ2h0OiAyNXZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogZ3JleTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgei1pbmRleDogNDtcclxufVxyXG5cclxuLmJnLXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjc1KTtcclxufVxyXG5cclxuLmFjdGl2ZSxcclxuLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLFxyXG4uZHJvcGRvd24taXRlbTphY3RpdmUsXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5hY3RpdmUuYmctc2VsZWN0ZWQsXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyLmJnLXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoZWNrYm94LWhpZGUgaW5wdXQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgLmJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiA4ZW07XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuY2hlY2tib3gtaGlkZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMWVtO1xyXG4gIH1cclxuXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlICB7XHJcbiAgICBoZWlnaHQ6IDRyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWdyYXkge1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNTU5cHgpIHtcclxuICAuYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDRlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1oaWRlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEuNzVlbTtcclxuICB9XHJcblxyXG4gaW5wdXQge1xyXG4gICBmb250LXNpemU6IDEuNXJlbTtcclxuIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5maWx0ZXItZ3JheSAge1xyXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODI0cHgpIHtcclxuICAuYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1oaWRlIHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjI1ZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEuNzVlbTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItd2hpdGUsIC5maWx0ZXItZ3JheSAge1xyXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGlucHV0LCAuZHJvcGRvd24tY29udGVudCwgLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ncmF5IHtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-filters",
                templateUrl: "./filters.component.html",
                styleUrls: ["./filters.component.css"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], filter_skill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["input"]
        }], onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keyup"]
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["focus"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");






const routes = [
    { path: "Portfolio", component: _app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: "About", component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../filters/filters.component */ "sH3A");
/* harmony import */ var _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../project-preview/project-preview.component */ "Io3o");






class PortfolioComponent {
    constructor() {
        this.skillExist = true;
        this.skill_tags = [
            ["cs", "C#"],
            ["cpp", "C++"],
            ["python", "PYTHON"],
            ["java", "JAVA"],
            ["unity", "UNITY"],
            ["unreal", "UNREAL"],
            ["design", "DESIGN"],
            ["backend", "BACKEND"],
            ["mobile", "MOBILE"],
            ["vr", "VIRTUAL REALITY"],
            ["clear", "CLEAR ALL"],
        ];
        this.chosen_skill = [];
    }
    ngOnInit() { }
    filter($event) {
        if ($event == "invalid") {
            this.alert_fadein();
            this.alert_fadeout();
            return;
        }
        this.selected_skill = $event;
        if (this.chosen_skill.includes(this.selected_skill)) {
            this.chosen_skill.splice(this.chosen_skill.indexOf(this.selected_skill), 1);
        }
        else {
            this.chosen_skill.push(this.selected_skill);
        }
        console.log(this.chosen_skill);
        this.filter_skill();
    }
    filter_skill() {
        let len = this.chosen_skill.length;
        for (let i = 0; i < this.skill_tags.length; i++) {
            if (len === 0) {
                this.toggle_class(this.skill_tags[i][0], false); //removes hidden class, if it exists
            }
            else if (len >= 1) {
                this.toggle_class(this.skill_tags[i][0], true); //adds hidden class to all projects
            }
        }
        if (len === 1) {
            this.toggle_class(this.chosen_skill[0], false);
        }
        else if (len > 1) {
            let elements = document.querySelectorAll("." + this.chosen_skill[0]);
            elements.forEach((element) => {
                const result = this.chosen_skill.every((val) => element.classList.contains(val));
                if (result) {
                    element.classList.remove("hidden");
                }
            });
        }
    }
    toggle_class(skill, flag) {
        let elements = document.querySelectorAll("." + skill);
        elements.forEach((element) => {
            element.classList.toggle("hidden", flag);
        });
    }
    alert_fadein() {
        let alert = (document.getElementById("alert"));
        alert.classList.remove("d-none");
        this.skillExist = false;
    }
    alert_fadeout() {
        let alert = (document.getElementById("alert"));
        setTimeout(() => {
            this.skillExist = true;
            setTimeout(() => { alert.classList.add("d-none"); }, 1000);
        }, 3000);
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 44, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "container-fluid"], ["title", "Toggle navigation", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ms-auto"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "py-2"], ["routerLink", "/About", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["routerLink", "/Portfolio", "routerLinkActive", "active", 1, "nav-link", "active", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://drive.google.com/file/d/1H18dQx-U2BO1mgFXNuwFs9mMy0ebcHDu/view?usp=sharing", 1, "nav-link", "small-txt", "my-1", "ms-auto", "ms-lg-3", "me-lg-5"], [1, "text-dark", "my-5", "pb-5"], ["skills", "Angular,Bootstrap,C#,Design,Flask,HTML/CSS,Java,JavaScript,Python,Unity", 3, "filter_skill"], [1, "d-flex", "flex-wrap", "justify-content-center", "mt-3"], ["title", "PERSONAL WEBSITE", "skills", "HTML/CSS,Bootstrap,Angular,Design", "image_thumbnail", "/assets/img/portfolio/personal/personal_mockup.jpg", "link", "https://jasmineirada.com/About", 1, "htmlcss", "bootstrap", "angular", "design"], [1, "footer", "pt-5", "mt-5", "bg-white", "text-dark", "text-center"], [1, "container"], [1, "row"], [1, "col", "mb-5", "mb-lg-0"], [1, "name-custom", "mb-4"], [1, "d-flex", "justify-content-center", "p-0", "mx-0", "mt-2"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Checkout my GitHub", "src", "/assets/img/github-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Connect with me on Linkedin", "src", "/assets/img/linkedin-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Send me an email", "src", "/assets/img/envelope-solid.svg", 1, "filter-black"], [1, "copyright", "py-4", "bg-white", "text-center", "text-dark"], [1, "small-txt"], ["alt", "Love", "src", "/assets/img/heart-solid.svg", 2, "height", "1rem"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "./home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "./portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "./resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-filters", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter_skill", function PortfolioComponent_Template_app_filters_filter_skill_16_listener($event) { return ctx.filter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-project-preview", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "footer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Let's Connect!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u00A92020 - 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " JASMINE IRADA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " MADE WITH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_4__["ProjectPreviewComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] { font-family: \"Playfair Display\"; font-style: normal; font-variant: normal;  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  font-size: large;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.small-txt[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n}\r\n\r\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: none;\r\n  padding: none;\r\n}\r\n\r\nsection[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-black[_ngcontent-%COMP%] {\r\n  filter: invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%);\r\n}\r\n\r\n.btn-outline-dark[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    margin-top: 2rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 4000px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 14rem;\r\n    width: 14rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 4rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-top: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 1824px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 10rem;\r\n    width: 10rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 2rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 6rem;\r\n    width: 6rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    width: 8rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 0.90rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: normal;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.5em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O1lBT1ksK0JBQStCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEdBQUc7O0FBRXhGO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOztnRkFFOEU7RUFDOUUsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7O0FBRUg7O0VBRUU7O0FBRUY7RUFDRSxnR0FBZ0c7QUFDbEc7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxuLm5hdmJhci1icmFuZCxcclxuLm5hdi1saW5rIHsgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiOyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsOyAgfVxyXG5cclxuaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcclxuICAgIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICAgIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLnNtYWxsLXR4dCB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxudWwsXHJcbmxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiBub25lO1xyXG4gIHBhZGRpbmc6IG5vbmU7XHJcbn1cclxuXHJcbnNlY3Rpb24sXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIFxyXG5OQVZCQVJcclxuICovXHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2LCAubmF2LWxpbmsge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiBsaSBhIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4vKiBcclxuUFJPSkVDVFNcclxuICovXHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiAuYWxlcnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDo3dmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWZcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgY29sb3I6ICM3MjFjMjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcclxuICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIgaHIge1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICNmMWIwYjc7XHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIgLmFsZXJ0LWxpbmsge1xyXG4gIGNvbG9yOiAjNDkxMjE3O1xyXG59ICovXHJcblxyXG4vKiBcclxuSUNPTlNcclxuICovXHJcblxyXG4uYnRuOmhvdmVyIC5maWx0ZXItYmxhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDkxJSkgc2F0dXJhdGUoMzglKSBodWUtcm90YXRlKDMyMWRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMTAlKTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogXHJcbk1FRElBIFFVRVJJRVNcclxuICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXh4eGwge1xyXG4gICAgbWF4LXdpZHRoOiA0MDAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItYmxhY2sge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXh4eGwge1xyXG4gICAgbWF4LXdpZHRoOiAxODI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1ibGFjayB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODI0cHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWcge1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1ibGFjayB7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZS1saWdodCwuYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgICBwYWRkaW5nOiAxLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDAuOTByZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItYmxhY2sge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 0,
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-portfolio",
                templateUrl: "./portfolio.component.html",
                styleUrls: ["./portfolio.component.css"],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 0,
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')
                        ]),
                    ]),
                ]
            }]
    }], function () { return []; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map