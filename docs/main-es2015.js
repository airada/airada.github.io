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
        this.reach_the_stars = 0;
        this.year = (new Date()).getFullYear();
        this.colors = ["#3C4F6C75", "#1A4C4A75", "#FED3B7", "#FF925E80", "#FF7A66", "#ABA3D275", "#FFD9EE50", "#FFD96C", "#D65F9150"];
    }
    ngOnInit() {
        this.stars = this.box_shadow(400, 250, 7, 8);
        this.stars1 = this.box_shadow(200, 200, 2, 6);
        this.stars2 = this.box_shadow(75, 200, 0, 1);
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
        // console.log("animation ended: state = ", this.state);
    }
    rng(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    box_shadow(num_stars, vh_height, color1, color2) {
        let box_shadow_str = "";
        for (let i = 0; i <= num_stars; i++) {
            box_shadow_str += this.rng(0, 100).toString() + "vw " + this.rng(0, vh_height).toString() + "vh " + "#faf9f7";
            if (i != num_stars) {
                box_shadow_str += ",";
            }
        }
        return box_shadow_str;
    }
    add_trip() {
        this.reach_the_stars += 1;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 94, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", "bg-dark", "text-white"], [1, "container-fluid"], ["title", "Toggle navigation", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ms-auto"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "py-2"], ["routerLink", "/home", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "active", "text-sm", "my-1", "ms-auto", "mx-lg-3"], ["routerLink", "/portfolio", "routerLinkActive", "active", 1, "nav-link", "text-sm", "my-1", "ms-auto", "mx-lg-3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://drive.google.com/file/d/1juvooQNMBCzWMf_cCjyGVTFOwWlOVk3i/view?usp=sharing", 1, "nav-link", "text-sm", "my-1", "ms-auto", "ms-lg-3", "me-lg-5"], ["id", "header", 1, "container-fluid"], ["id", "whitebg", "src", "/assets/new_theme/header/white_bg_only.png", "alt", "White, upside-down arch with checkered and diagonal cross patterns.", 1, "img-fluid"], [1, "stars-position"], ["id", "stars", "alt", ""], ["id", "stars1", "alt", ""], ["id", "stars2", "alt", ""], ["id", "whitebg", "src", "/assets/img/stars.png", "alt", "Tiny stars placed all over the background.", 1, "d-xxxl-block"], ["id", "space", "alt", "Black background.", 1, "img-fluid"], ["id", "name", 1, "row", "m-0", "pt-lg-5"], [1, "col", "mb-0", "pb-0", "ms-3", "text-center"], ["data-aos", "fade-down", "data-aos-duration", "1500", "data-aos-once", "true"], [1, "text-white", "mb-3"], [1, "d-flex", "justify-content-center", "p-0", "mx-0", "mt-2"], ["data-aos", "zoom-in-down", "data-aos-duration", "1000", "data-aos-once", "true"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Checkout my GitHub!", "src", "/assets/img/github-brands.svg", 1, "filter-white"], ["data-aos", "zoom-in-down", "data-aos-duration", "1500", "data-aos-once", "true"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Connect with me on Linkedin!", "src", "/assets/img/linkedin-brands.svg", 1, "filter-white"], ["data-aos", "zoom-in-down", "data-aos-duration", "2000", "data-aos-once", "true"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Send me an email!", "src", "/assets/img/envelope-solid.svg", 1, "filter-white"], ["id", "introduction", 1, "m-0", "pt-lg-5", "px-0"], [1, "row", "p-0", "m-0"], [1, "d-none", "d-lg-block", "col-lg-1"], [1, "col-12", "col-lg-5", "px-5", "px-lg-0"], ["data-aos", "fade-right", "data-aos-duration", "1500", "data-aos-once", "true"], [1, "text-dark", "title", "text-lg"], [1, "text-dark", "mb-0", "pb-0", "text-left", "text-dark"], [1, "text-dark", "text-sm"], ["routerLink", "/portfolio", "routerLinkActive", "active"], ["href", "..."], [1, "col-12", "col-lg-6", "d-none", "d-lg-block", "px-5"], [1, "astrokitty", "d-flex", "align-items-end", "justify-content-end", "flex-column", "pt-3", "px-5"], ["id", "portfolio", 1, "page-section", "portfolio", "bg-white"], ["badges", "Angular,TypeScript,Bootstrap,Design", "image", "/assets/img/portfolio/personal/mockup_website_01.jpg", "image2", "/assets/img/portfolio/personal/mockup_website_01.jpg", "title", "personal website", "date", "June 2020 - Ongoing", "description", "Personal website with portfolio and accomplishments.", "problem", "Creating a minimalist, accessible, responsive design while optimizing website performance.", "solution", "Heavy test-driven development using accessibility checkers, performance and network metrics, and user interface design theories and best practices.", "features", "Open-source portfolio multi-filter component, original interface and mockup designs."], [1, "footer", "bg-white", "text-center", "text-dark"], [1, "container"], [1, "row"], [1, "col", "mb-5", "mb-lg-0"], [1, "name-custom", "mb-4"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Checkout my GitHub", "src", "/assets/img/github-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Connect with me on Linkedin", "src", "/assets/img/linkedin-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Send me an email", "src", "/assets/img/envelope-solid.svg", 1, "filter-black"], [1, "copyright", "bg-white", "text-center", "text-dark", "py-4"], [1, "text-sm"], ["alt", "Love", "src", "/assets/img/heart-solid.svg", 1, "filter-red", 2, "height", "1rem"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "RESUME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim.done", function AboutComponent_Template_div_animation_starsAnim_done_18_listener($event) { return ctx.onEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim1.done", function AboutComponent_Template_div_animation_starsAnim1_done_20_listener($event) { return ctx.onEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim2.done", function AboutComponent_Template_div_animation_starsAnim2_done_22_listener($event) { return ctx.onEnd($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "JASMINE IRADA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "SOFTWARE ENGINEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " As a developer with a keen eye for design and problem-solving, I\u2019ve helped large organizations and small project teams successfully reach their full potential by satisfying clients and bringing products to life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "VIEW PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "READ ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "app-portfolio-featured", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "footer", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Thanks for stopping by. Let's connect!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " JASMINE IRADA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " MADE WITH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 58);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.year, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioFeaturedComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]\r\n { font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-weight: 700; font-variant: normal;  }\r\n\r\np[_ngcontent-%COMP%], .subheading[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n  font-weight: 400;\r\n}\r\n\r\n\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n}\r\n\r\n.text-rg[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.text-lg[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n\r\n.text-dark[_ngcontent-%COMP%] {\r\n  color:  #2a2a2a !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color:  #faf9f7 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7 !important;\r\n}\r\n\r\n.bg-dark[_ngcontent-%COMP%] {\r\n  background-color: #121212 !important;\r\n}\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n#whitebg[_ngcontent-%COMP%]  {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  pointer-events: none;\r\n  z-index: 0;\r\n}\r\n\r\n.stars-position[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n#stars[_ngcontent-%COMP%] {\r\n  width: 0.05rem;\r\n  height: 0.05rem;\r\n  background: transparent;\r\n}\r\n\r\n#stars1[_ngcontent-%COMP%] {\r\n  width: 0.1rem;\r\n  height: 0.1rem;\r\n  border-radius: 0.05rem;\r\n  background: transparent;\r\n}\r\n\r\n#stars2[_ngcontent-%COMP%] {\r\n  width: 0.25rem;\r\n  height: 0.25rem;\r\n  border-radius: 0.125rem;\r\n  background: transparent;\r\n}\r\n\r\n#space[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  pointer-events: none;\r\n  \r\n  background-image: url('gray.png');\r\n  z-index: -2;\r\n}\r\n\r\n#name[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 45vh;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#introduction[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 10vh;\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-weight: 700;\r\n}\r\n\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #2a2a2a;\r\n}\r\n\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: gray;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n}\r\n\r\n.container-xxxl[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 1.5rem;\r\n  padding-left: 1.5rem;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.filter-white[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.filter-red[_ngcontent-%COMP%] {\r\n  filter: invert(9%) sepia(71%) saturate(5688%) hue-rotate(4deg) brightness(97%) contrast(117%);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-black[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-white[_ngcontent-%COMP%] {\r\n  filter: none;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    margin-top: 2rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 4000px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 14rem;\r\n    width: 14rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 4rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-top: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 1824px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 10rem;\r\n    width: 10rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 2rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 6rem;\r\n    width: 6rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    width: 8rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 0.90rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: normal;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.5em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7O0FBRUQ7Ozs7Ozs7O0dBUUc7OzhFQUUyRSxFQUFFLGdCQUFnQixFQUFFLG9CQUFvQixHQUFHOztBQUV6SDs7Ozs7O0VBTUUscUJBQXFCO0VBQ3JCOzs4RUFFNEU7RUFDNUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTs7Q0FFQzs7QUFDRDtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBOztDQUVDOztBQUNEO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7Q0FFQzs7QUFDRDtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsc0pBQXNKO0VBQ3RKLGlDQUE0QztFQUM1QyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBOztDQUVDOztBQUNEO0VBQ0UsZUFBZTtFQUNmOzs4RUFFNEU7RUFDNUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7O0dBRUc7O0FBR0g7O0VBRUU7O0FBRUY7RUFDRSw4RkFBOEYsRUFBRSxZQUFZO0FBQzlHOztBQUdBO0VBQ0UsNkZBQTZGO0FBQy9GOztBQUVBO0VBQ0UsOEZBQThGLEVBQUUsWUFBWTtBQUM5Rzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbkZPTlRTXHJcbiovXHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG4ubmF2YmFyLWJyYW5kLFxyXG4ubmF2LWxpbmtcclxuIHsgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiLCBcIkNhbGlicmlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtdmFyaWFudDogbm9ybWFsOyAgfVxyXG5cclxucCxcclxuLnN1YmhlYWRpbmcsXHJcbi5uYXZiYXIsXHJcbi5uYXZiYXItYnJhbmQsXHJcbi5uYXYtbGluayxcclxuLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiLCBcIkNhbGlicmlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vKiBcclxuQ1VTVE9NIFRFWFQgU0laRVNcclxuKi9cclxuLnRleHQtc20ge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi50ZXh0LXJnIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi50ZXh0LWxnIHtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFxyXG5DVVNUT00gQ09MT1JTXHJcbiovXHJcbi50ZXh0LWRhcmsge1xyXG4gIGNvbG9yOiAgIzJhMmEyYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC13aGl0ZSB7XHJcbiAgY29sb3I6ICAjZmFmOWY3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjlmNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBcclxuTkFWQkFSIFxyXG4qL1xyXG5cclxuLm5hdmJhci1uYXYsIC5uYXYtbGluaywgLm5hdmJhci1icmFuZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IGxpIGEge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi8qIFxyXG5IRUFERVIgXHJcbiovXHJcbmhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuaGVhZGVyID4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI3doaXRlYmcgIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5zdGFycy1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4jc3RhcnMge1xyXG4gIHdpZHRoOiAwLjA1cmVtO1xyXG4gIGhlaWdodDogMC4wNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI3N0YXJzMSB7XHJcbiAgd2lkdGg6IDAuMXJlbTtcclxuICBoZWlnaHQ6IDAuMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjA1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc3RhcnMyIHtcclxuICB3aWR0aDogMC4yNXJlbTtcclxuICBoZWlnaHQ6IDAuMjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNzcGFjZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIC8qIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGJvdHRvbSwgIzFiMjczNSAwJSwjMDkwYTBmIDEwMCUpOyByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGJvdHRvbSwgIzMwM2U0ZWFmIDAlLCAjMTgxYTJjIDEwJSxibGFjayA3MCUpLCAgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2dyYXkucG5nXCIpO1xyXG4gIHotaW5kZXg6IC0yO1xyXG59XHJcblxyXG4jbmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogNDV2aDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4jaW50cm9kdWN0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxMHZoO1xyXG59XHJcblxyXG4vKiBcclxuU0VDVElPTiBcclxuKi9cclxuYSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIiwgXCJDYWxpYnJpXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxyXG4gIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnAgYSB7XHJcbiAgY29sb3I6ICMyYTJhMmE7XHJcbn1cclxuXHJcbnAgYTpob3ZlciB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXIteHh4bCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLyogLmNhcmQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufSAqL1xyXG5cclxuXHJcbi8qIFxyXG5JQ09OU1xyXG4gKi9cclxuXHJcbi5maWx0ZXItd2hpdGUge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoNTMlKSBzYXR1cmF0ZSgzMjklKSBodWUtcm90YXRlKDQxZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDk4JSk7IC8qICNmYWY5ZjcgKi9cclxufVxyXG5cclxuXHJcbi5maWx0ZXItcmVkIHtcclxuICBmaWx0ZXI6IGludmVydCg5JSkgc2VwaWEoNzElKSBzYXR1cmF0ZSg1Njg4JSkgaHVlLXJvdGF0ZSg0ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoMTE3JSk7XHJcbn1cclxuXHJcbi5idG46aG92ZXIgLmZpbHRlci1ibGFjayB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg1MyUpIHNhdHVyYXRlKDMyOSUpIGh1ZS1yb3RhdGUoNDFkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoOTglKTsgLyogI2ZhZjlmNyAqL1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIC5maWx0ZXItd2hpdGUge1xyXG4gIGZpbHRlcjogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWxpZ2h0LCAuYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vKiBcclxuICBNRURJQSBRVUVSSUVTXHJcbiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAuZC14eHhsLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIteHh4bCB7XHJcbiAgICBtYXgtd2lkdGg6IDQwMDBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZ3tcclxuICAgIGhlaWdodDogMTRyZW07XHJcbiAgICB3aWR0aDogMTRyZW07XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ibGFjayAge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgLmQteHh4bC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIteHh4bCB7XHJcbiAgICBtYXgtd2lkdGg6IDE4MjRweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiAxMHJlbTtcclxuICAgIHdpZHRoOiAxMHJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZ3tcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlLCAuZmlsdGVyLWJsYWNrICB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODI0cHgpIHtcclxuICAuZC14eHhsLWJsb2NrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDZyZW07XHJcbiAgICB3aWR0aDogNnJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZyB7XHJcbiAgICBoZWlnaHQ6IDhyZW07XHJcbiAgICB3aWR0aDogOHJlbTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDEuMTVyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlLCAuZmlsdGVyLWJsYWNrICB7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZS1saWdodCwuYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgICBwYWRkaW5nOiAxLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmQteHh4bC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMC45MHJlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ibGFjayB7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZS1saWdodCwuYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                    ]))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim1', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("125s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
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
                ]),
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
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(0vh)' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(-200vh)' })
                            ]))
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim1', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("125s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
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
                        ]),
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




function PortfolioFeaturedComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
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
PortfolioFeaturedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioFeaturedComponent, selectors: [["app-portfolio-featured"]], inputs: { badges: "badges", image: "image", image2: "image2", title: "title", date: "date", description: "description", problem: "problem", solution: "solution", features: "features" }, decls: 39, vars: 8, consts: [["data-aos", "fade-up", "data-aos-duration", "1500", "data-aos-once", "true", "data-aos-anchor-placement", "top-center"], [1, "container-xxxl", "py-5", "text-dark"], [1, "row", "bg-white", "h-25"], ["id", "carouselExampleFade", "data-bs-ride", "carousel", 1, "col-12", "col-lg-6", "col-xl-6", "d-flex", "align-items-center", "justify-content-center", "carousel", "slide", "carousel-fade"], [1, "carousel-inner", 2, "max-width", "80%", "border-radius", "10px"], ["data-bs-interval", "5000", 1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["data-bs-interval", "5000", 1, "carousel-item"], [1, "col"], [1, "container", "h-100", "pb-5", "pb-lg-0", 2, "position", "relative"], [1, "text-uppercase", "text-center", "my-3", "my-md-0", 2, "font-size", "large"], [1, "row", "pt-2", "mt-2"], [1, "d-flex", "flex-wrap", "align-items-center"], ["class", "badge text-uppercase my-1 me-1", 4, "ngFor", "ngForOf"], [1, "text-left", "mt-md-2", "mb-4", "me-5"], [1, "badge", "text-uppercase", "my-1", "me-1"]], template: function PortfolioFeaturedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PortfolioFeaturedComponent_li_15_Template, 2, 1, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "PROBLEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "SOLUTION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "NOTABLE FEATURES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.badges_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.problem, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.solution, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.features, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .badge[_ngcontent-%COMP%] { font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-weight: 700; font-style: normal; font-variant: normal;}\r\n\r\np[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n  font-weight: 400;\r\n}\r\n\r\n\r\n\r\n.text-dark[_ngcontent-%COMP%] {\r\n  color:  #2a2a2a !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color:  #faf9f7 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7 !important;\r\n}\r\n\r\n.container-xxxl[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 1.5rem;\r\n  padding-left: 1.5rem;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  color: #121212;\r\n  box-shadow: 2px 2px 5px #e8e6e1;\r\n}\r\n\r\n.btn-portfolio[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n\r\n.btn-shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 5px 5px 10px #e8e6e1;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover {\r\n  color: #2a2a2a;\r\n  background-color: #faf9f7;\r\n  border-color: darkgray;\r\n  font-size: small;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n  color: #faf9f7;\r\n  background-color: #121212;\r\n  border-color: #121212;\r\n  font-size: small;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  h2[_ngcontent-%COMP%] {\r\n   font-size: 4rem;\r\n }\r\n\r\n p[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n \r\n .container-xxxl[_ngcontent-%COMP%] {\r\n   max-width: 90vw;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 20px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n   padding: 2.5rem;\r\n }\r\n}\r\n\r\n@media only screen and (min-width: 1825px) and (max-width: 2559px) {\r\n  h2[_ngcontent-%COMP%] {\r\n   font-size: 3.5rem;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: 1.5rem;\r\n }\r\n \r\n .container-xxxl[_ngcontent-%COMP%] {\r\n   max-width: 90vw;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 20px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n   padding: 2rem;\r\n }\r\n}\r\n\r\n@media only screen and (min-width: 601px) and (max-width: 1824px) {\r\n\r\n h2[_ngcontent-%COMP%] {\r\n   font-size: xx-large;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n }\r\n \r\n .link[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: initial;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 10px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n   padding: 1.25rem;\r\n }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n h2[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n }\r\n\r\n p[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: x-small;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: x-small;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 5px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n   padding: 1rem;\r\n }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1mZWF0dXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztTQUtTOzs4RUFFcUUsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsQ0FBQzs7QUFFM0k7RUFDRSxxQkFBcUI7RUFDckI7OzhFQUU0RTtFQUM1RSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztDQUVDOztBQUNEO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRTtHQUNDLGVBQWU7Q0FDakI7O0NBRUE7R0FDRSxlQUFlO0NBQ2pCOztDQUVBO0dBQ0UsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFLGtCQUFrQjtDQUNwQjs7Q0FFQTtHQUNFLGVBQWU7Q0FDakI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxlQUFlO0dBQ2YsZUFBZTtDQUNqQjtBQUNEOztBQUVBO0VBQ0U7R0FDQyxpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxlQUFlO0NBQ2pCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0Usa0JBQWtCO0dBQ2xCLGFBQWE7Q0FDZjtBQUNEOztBQUVBOztDQUVDO0dBQ0UsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLGdCQUFnQjtDQUNsQjs7QUFFRDs7QUFFQTtDQUNDO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsaUJBQWlCO0NBQ25COztDQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLGFBQWE7Q0FDZjs7QUFFRCIsImZpbGUiOiJwb3J0Zm9saW8tZmVhdHVyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDQsXHJcbmg1LFxyXG5oNiwgXHJcbi5iYWRnZSB7IGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIiwgXCJDYWxpYnJpXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxyXG4gIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiOyBmb250LXdlaWdodDogNzAwOyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsO31cclxuXHJcbnAsIGgzLCBidXR0b24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBmb250LWZhbWlseTogXCJDYWxpYnJpIExpZ2h0XCIsIFwiQ2FsaWJyaVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcclxuICBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLFxyXG4gIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi8qIFxyXG5DVVNUT00gQ09MT1JTXHJcbiovXHJcbi50ZXh0LWRhcmsge1xyXG4gIGNvbG9yOiAgIzJhMmEyYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC13aGl0ZSB7XHJcbiAgY29sb3I6ICAjZmFmOWY3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy13aGl0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjlmNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGFpbmVyLXh4eGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjlmNztcclxuICBjb2xvcjogIzEyMTIxMjtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjZThlNmUxO1xyXG59XHJcblxyXG4uYnRuLXBvcnRmb2xpbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmJ0bi1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjZThlNmUxO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIsIC5idG46aG92ZXIge1xyXG4gIGNvbG9yOiAjMmEyYTJhO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5Zjc7XHJcbiAgYm9yZGVyLWNvbG9yOiBkYXJrZ3JheTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5idXR0b24sIC5idG4ge1xyXG4gIGNvbG9yOiAjZmFmOWY3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMTIxMjEyO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi8qIFxyXG5NRURJQSBRVUVSSUVTXHJcbiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICBoMiB7XHJcbiAgIGZvbnQtc2l6ZTogNHJlbTtcclxuIH1cclxuXHJcbiBwIHtcclxuICAgZm9udC1zaXplOiAycmVtO1xyXG4gfVxyXG5cclxuIC5saW5rIHtcclxuICAgZm9udC1zaXplOiAycmVtO1xyXG4gfVxyXG5cclxuIC5iYWRnZSB7XHJcbiAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuIH1cclxuIFxyXG4gLmNvbnRhaW5lci14eHhsIHtcclxuICAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gfVxyXG5cclxuIC5mYS1naXRodWIsIC5mYS1leHRlcm5hbC1saW5rLWFsdCwgaSB7XHJcbiAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuIH1cclxuXHJcbiBidXR0b24ge1xyXG4gICBmb250LXNpemU6IDJyZW07XHJcbiAgIHBhZGRpbmc6IDIuNXJlbTtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODI1cHgpIGFuZCAobWF4LXdpZHRoOiAyNTU5cHgpIHtcclxuICBoMiB7XHJcbiAgIGZvbnQtc2l6ZTogMy41cmVtO1xyXG4gfVxyXG4gXHJcbiBwIHtcclxuICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gfVxyXG5cclxuIC5saW5rIHtcclxuICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gfVxyXG5cclxuIC5iYWRnZSB7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyLXh4eGwge1xyXG4gICBtYXgtd2lkdGg6IDkwdnc7XHJcbiB9XHJcblxyXG4gLmZhLWdpdGh1YiwgLmZhLWV4dGVybmFsLWxpbmstYWx0LCBpIHtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gfVxyXG5cclxuIGJ1dHRvbiB7XHJcbiAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgcGFkZGluZzogMnJlbTtcclxuIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDE4MjRweCkge1xyXG5cclxuIGgyIHtcclxuICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuIH1cclxuIFxyXG4gcCB7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiB9XHJcbiBcclxuIC5saW5rIHtcclxuICAgZm9udC1zaXplOiBzbWFsbDtcclxuIH1cclxuXHJcbiAuYmFkZ2Uge1xyXG4gICBmb250LXNpemU6IGluaXRpYWw7XHJcbiB9XHJcblxyXG4gLmZhLWdpdGh1YiwgLmZhLWV4dGVybmFsLWxpbmstYWx0LCBpIHtcclxuICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gfVxyXG5cclxuIGJ1dHRvbiB7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiBoMiB7XHJcbiAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiB9XHJcblxyXG4gcCB7XHJcbiAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiB9XHJcblxyXG4gLmxpbmsge1xyXG4gICBmb250LXNpemU6IHgtc21hbGw7XHJcbiB9XHJcblxyXG4gLmJhZGdlIHtcclxuICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gfVxyXG5cclxuIC5mYS1naXRodWIsIC5mYS1leHRlcm5hbC1saW5rLWFsdCwgaSB7XHJcbiAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gfVxyXG5cclxuIGJ1dHRvbiB7XHJcbiAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgIHBhZGRpbmc6IDFyZW07XHJcbiB9XHJcblxyXG59XHJcbiJdfQ== */"], data: { animation: [
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
        }], image2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], problem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], solution: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], features: [{
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



function ProjectPreviewComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
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
ProjectPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectPreviewComponent, selectors: [["app-project-preview"]], inputs: { skills: "skills", image_thumbnail: "image_thumbnail", title: "title", link: "link" }, decls: 8, vars: 3, consts: [["data-aos", "fade-up", "data-aos-duration", "1500", "data-aos-once", "true"], [1, "col", "mx-3", "mt-4"], [1, "card", "bg-light", "d-flex", "align-items-center", "justify-content-center"], ["target", "_blank", "rel", "noopener noreferrer", 1, "card-img-top", "pt-5", 3, "href"], ["alt", "title", 3, "src"], [1, "card-footer", "bg-light"], [1, "d-flex", "flex-wrap", "align-items-center", "m-0", "p-0"], ["class", "badge m-1 text-uppercase", 4, "ngFor", "ngForOf"], [1, "badge", "m-1", "text-uppercase"]], template: function ProjectPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProjectPreviewComponent_li_7_Template, 2, 1, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image_thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skill_list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n  line-height: 1.2;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  color: gray;\r\n  box-shadow: 2px 2px 5px #e8e6e1;\r\n  font-size: x-small;\r\n  font-weight: bold;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; \r\n  height: 100%;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 60em;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 2.25rem;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 40em;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 30em;\r\n  }\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 0.75rem;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 25rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSxxQkFBcUI7RUFDckI7OzhFQUU0RTtFQUM1RSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRTs7QUFDRDtFQUNDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTs7O0tBR0c7QUFDTDs7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTs7S0FFRztBQUNMOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7O0tBRUc7QUFDTDs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoicHJvamVjdC1wcmV2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcclxuaDIsXHJcbmgzLFxyXG5oNSxcclxuaDYsXHJcbnAge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBmb250LWZhbWlseTogXCJDYWxpYnJpIExpZ2h0XCIsIFwiQ2FsaWJyaVwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIixcclxuICBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLFxyXG4gIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLyogXHJcbkNBUkRcclxuICovXHJcbiAuYmFkZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5Zjc7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2U4ZTZlMTtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3AgaW1nIHtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBcclxuTUVESUEgUVVFUklFU1xyXG4gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDYwZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWdyYXkge1xyXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLyogLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMS41NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcclxuICB9ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDQwZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWdyYXkge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAvKiAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjRweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiAzMGVtO1xyXG4gIH1cclxuICAuZmlsdGVyLWdyYXkge1xyXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLyogLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC42MHJlbTtcclxuICB9ICovXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"] });
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
        this.router.navigate([`${"home"}`]);
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
function FiltersComponent_ul_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_ul_4_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const selected_item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.toggle_skill(selected_item_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const selected_item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_item_r4, " ");
} }
function FiltersComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FiltersComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.toggle_skill(item_r9); })("focus", function FiltersComponent_li_14_Template_li_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return i_r10 == ctx_r13.arrowkey_position; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_li_14_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.toggle_skill(item_r9); });
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
        this.search_size = 12;
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
    } }, inputs: { skills: "skills" }, outputs: { filter_skill: "filter_skill" }, decls: 15, vars: 7, consts: [[1, "container-fluid", "pt-5", "mt-5", 2, "position", "relative"], [1, "row", "bar", "d-flex", "justify-content-center"], ["id", "box", 1, "col-11", "col-lg-6", "box", "px-1", "mt-2", "d-flex", "flex-wrap", 3, "click"], [1, "my-auto", "ms-3", "me-2"], ["id", "badges", "class", "d-inline-flex align-items-center p-0 m-0", 4, "ngFor", "ngForOf"], ["title", "Clear All", "class", "clear p-2 ml-auto my-auto", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Search skills", 1, "p-0", "ms-1", "d-flex", "align-items-center", 3, "size", "ngModel", "ngModelOptions", "focus", "keydown", "keyup.enter", "ngModelChange"], ["input", ""], ["id", "caret", 1, "col-1", "caret", "pointer", "p-0", "mt-2", "d-flex", "justify-content-end", 3, "click"], ["title", "Toggle Dropdown", 1, "my-auto", "mx-auto", "p-0"], ["alt", "Toggle Dropdown", 1, "filter-gray", 3, "src"], [1, "row", "d-flex", "justify-content-center"], ["id", "dropdown-content", 1, "col", "col-lg-7", "dropdown-content", "pointer", "hide"], [1, "p-0", "m-0"], ["class", "m-0 item", 3, "id", "ngClass", "active", "click", "focus", 4, "ngFor", "ngForOf"], ["id", "badges", 1, "d-inline-flex", "align-items-center", "p-0", "m-0"], [1, "badge", "badge-pill", "pointer", "px-2", "m-1", "m-xxl-2", 3, "click"], ["title", "Clear All", 1, "clear", "p-2", "ml-auto", "my-auto", 3, "click"], [1, "pointer", "me-xxl-4"], ["alt", "Clear skills", "src", "/assets/img/times-circle-regular.svg", 1, "filter-gray"], [1, "m-0", "item", 3, "id", "ngClass", "click", "focus"], [1, "checkbox-hide"], ["type", "checkbox", 3, "click"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return _r2.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FiltersComponent_ul_4_Template, 3, 1, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FiltersComponent_div_5_Template, 3, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function FiltersComponent_Template_input_focus_6_listener() { return ctx.content("show"); })("keydown", function FiltersComponent_Template_input_keydown_6_listener($event) { return ctx.keydown($event); })("keyup.enter", function FiltersComponent_Template_input_keyup_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.search(_r2.value); })("ngModelChange", function FiltersComponent_Template_input_ngModelChange_6_listener($event) { return ctx.modelChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_div_click_8_listener() { return ctx.input_focused ? ctx.content("hide") : ctx.content("toggle"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FiltersComponent_li_14_Template, 5, 5, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.search_size)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.caret_img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.suggestions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\r\n  scrollbar-color:grey;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: grey;\r\n  border-radius: 20px;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:focus, *[_ngcontent-%COMP%]:hover{\r\n  outline:none;\r\n}\r\n[_ngcontent-%COMP%]::-moz-placeholder { \r\n  color: rgb(196, 196, 196);\r\n  opacity: 1; \r\n}\r\n[_ngcontent-%COMP%]::placeholder { \r\n  color: rgb(196, 196, 196);\r\n  opacity: 1; \r\n}\r\n[_ngcontent-%COMP%]:-ms-input-placeholder { \r\n  color: lightgray;\r\n}\r\n[_ngcontent-%COMP%]::-ms-input-placeholder { \r\n  color:  lightgray;\r\n}\r\n.filter-gray[_ngcontent-%COMP%] {\r\n  filter: invert(75%) sepia(12%) saturate(5%) hue-rotate(333deg) brightness(90%) contrast(83%);\r\n}\r\n.pointer[_ngcontent-%COMP%]:hover   .filter-gray[_ngcontent-%COMP%] {\r\n  filter: none;\r\n}\r\n.filter-white[_ngcontent-%COMP%] {\r\n  filter: invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%);\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #0b2228;\r\n  display: inline-block;\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-weight: 700;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n.pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  color: black;\r\n  min-width: 100%;\r\n\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  border: 2px ;\r\n  border-radius: 15px 0px 0px 15px;\r\n  color: #faf9f7;\r\n  cursor: text;\r\n  min-height: 40px;\r\n  box-shadow: 2px 2px 5px lightgray;\r\n}\r\n.box-bottom[_ngcontent-%COMP%] {\r\n  border-radius: 15px 0px 0px 0px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%], .badge-pill[_ngcontent-%COMP%] {\r\n  background-color: #343a40;\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  color: #f5f5f7;\r\n  font-size: 10pt;\r\n}\r\n.badge[_ngcontent-%COMP%]:hover, .badge-pill[_ngcontent-%COMP%]:hover {\r\n  background-color: #0d1013;\r\n  cursor: pointer;\r\n}\r\n\r\n.caret[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  border: 5px darkgray;\r\n  border-radius: 0px 15px 15px 0px;\r\n  box-shadow: 2px 2px 5px lightgray;\r\n}\r\n.caret-bottom[_ngcontent-%COMP%] {\r\n  border-radius: 0px 15px 0px 0px;\r\n}\r\n.caret[_ngcontent-%COMP%]:hover {\r\n  background-color: darkgray;\r\n}\r\n.caret[_ngcontent-%COMP%]:hover   .filter-gray[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f7;\r\n  border: 2px solid #f5f5f7;\r\n  border-radius: 0px 0px 15px 15px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  font-weight: 400;\r\n  max-height: 25vh;\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  scrollbar-color: grey;\r\n  scrollbar-width: thin;\r\n  z-index: 4;\r\n}\r\n.bg-selected[_ngcontent-%COMP%] {\r\n  background-color: #343a40;\r\n  color: #f5f5f7;\r\n  font-weight: bold;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgba(220, 220, 220, 0.75);\r\n}\r\n.active[_ngcontent-%COMP%], .dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: lightgrey;\r\n}\r\n.active.bg-selected[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:hover.bg-selected {\r\n  background-color: darkgray;\r\n  color: #f5f5f7;\r\n}\r\n.checkbox-hide[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  height: 0;\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 0;\r\n}\r\n@media only screen and (min-width: 2560px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 8em;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    border-radius: 1rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 1em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 2em;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%]  {\r\n    height: 4rem;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 2.5rem;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 2559px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 4em;\r\n    border-radius: 2em;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 1.75em;\r\n  }\r\n\r\n input[_ngcontent-%COMP%] {\r\n   font-size: 1.5rem;\r\n }\r\n\r\n  .filter-white[_ngcontent-%COMP%] {\r\n    height: 2rem;\r\n  }\r\n  \r\n  .filter-gray[_ngcontent-%COMP%]  {\r\n    height: 1.25rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 1824px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 2em;\r\n    border-radius: 1em;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 1.75em;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-gray[_ngcontent-%COMP%]  {\r\n    height: 1.25rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  input[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%], .badge[_ngcontent-%COMP%] {\r\n    font-size:1rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-gray[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBLHFCQUFnQix5Q0FBeUM7RUFDdkQseUJBQXlCO0VBQ3pCLFVBQVUsRUFBRSxZQUFZO0FBQzFCO0FBSEEsZ0JBQWdCLHlDQUF5QztFQUN2RCx5QkFBeUI7RUFDekIsVUFBVSxFQUFFLFlBQVk7QUFDMUI7QUFFQSx5QkFBeUIsNEJBQTRCO0VBQ25ELGdCQUFnQjtBQUNsQjtBQUVBLDBCQUEwQixtQkFBbUI7RUFDM0MsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw0RkFBNEY7QUFDOUY7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0dBQWdHO0FBQ2xHO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckI7OzhFQUU0RTtFQUM1RSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUEsYUFBYTtBQUNiO0VBQ0UsWUFBWTtFQUNaLGVBQWU7O0FBRWpCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLCtCQUErQjtBQUNqQztBQUVBLFdBQVc7QUFDWDs7RUFFRSx5QkFBeUI7RUFDekI7OzhFQUU0RTtFQUM1RSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixnQ0FBZ0M7RUFDaEMsaUNBQWlDO0FBQ25DO0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0UsOEZBQThGLEVBQUUsWUFBWTtBQUM5RztBQUdBLHFCQUFxQjtBQUNyQjtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsK0NBQStDO0VBQy9DOzs4RUFFNEU7RUFDNUUsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEO0FBRUE7OztFQUdFLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztDQUVEO0dBQ0UsaUJBQWlCO0NBQ25COztFQUVDO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOzs7QUFHRiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXb3JrcyBvbiBGaXJlZm94ICovXHJcbioge1xyXG4gIHNjcm9sbGJhci1jb2xvcjpncmV5O1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxufVxyXG5cclxuLyogV29ya3Mgb24gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuKiwqOmZvY3VzLCo6aG92ZXJ7XHJcbiAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgY29sb3I6IHJnYigxOTYsIDE5NiwgMTk2KTtcclxuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiBsaWdodGdyYXk7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICBjb2xvcjogIGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmZpbHRlci1ncmF5IHtcclxuICBmaWx0ZXI6IGludmVydCg3NSUpIHNlcGlhKDEyJSkgc2F0dXJhdGUoNSUpIGh1ZS1yb3RhdGUoMzMzZGVnKSBicmlnaHRuZXNzKDkwJSkgY29udHJhc3QoODMlKTtcclxufVxyXG5cclxuLnBvaW50ZXI6aG92ZXIgLmZpbHRlci1ncmF5IHtcclxuICBmaWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5maWx0ZXItd2hpdGUge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDkxJSkgc2F0dXJhdGUoMzglKSBodWUtcm90YXRlKDMyMWRlZykgYnJpZ2h0bmVzcygxMTAlKSBjb250cmFzdCgxMTAlKTtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogIzBiMjIyODtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiLCBcIkNhbGlicmlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRHJvcGRvd24gKi9cclxuLmRyb3Bkb3duIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLmJveCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjlmNztcclxuICBib3JkZXI6IDJweCA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDE1cHg7XHJcbiAgY29sb3I6ICNmYWY5Zjc7XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggbGlnaHRncmF5O1xyXG59XHJcblxyXG4uYm94LWJvdHRvbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLyogQmFkZ2VzICovXHJcbi5iYWRnZSxcclxuLmJhZGdlLXBpbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiLCBcIkNhbGlicmlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgY29sb3I6ICNmNWY1Zjc7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcblxyXG4uYmFkZ2U6aG92ZXIsXHJcbi5iYWRnZS1waWxsOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxMDEzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcbi5jYXJldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjlmNztcclxuICBib3JkZXI6IDVweCBkYXJrZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5jYXJldC1ib3R0b20ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAxNXB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5jYXJldDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbn1cclxuXHJcbi5jYXJldDpob3ZlciAuZmlsdGVyLWdyYXkge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoNTMlKSBzYXR1cmF0ZSgzMjklKSBodWUtcm90YXRlKDQxZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDk4JSk7IC8qICNmYWY5ZjcgKi9cclxufVxyXG5cclxuXHJcbi8qIERyb3Bkb3duIENvbnRlbnQgKi9cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY3O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICNmNWY1Zjc7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiLCBcIkNhbGlicmlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBtYXgtaGVpZ2h0OiAyNXZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogZ3JleTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgei1pbmRleDogNDtcclxufVxyXG5cclxuLmJnLXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gIGNvbG9yOiAjZjVmNWY3O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjIwLCAyMjAsIDIyMCwgMC43NSk7XHJcbn1cclxuXHJcbi5hY3RpdmUsXHJcbi5kcm9wZG93bi1pdGVtLmFjdGl2ZSxcclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxufVxyXG5cclxuLmFjdGl2ZS5iZy1zZWxlY3RlZCxcclxuLmRyb3Bkb3duLWl0ZW06aG92ZXIuYmctc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gIGNvbG9yOiAjZjVmNWY3O1xyXG59XHJcblxyXG4uY2hlY2tib3gtaGlkZSBpbnB1dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAuYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDhlbTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1oaWRlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItd2hpdGUgIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItZ3JheSB7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIC5iYXIge1xyXG4gICAgbWluLWhlaWdodDogNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWhpZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGhlaWdodDogMS43NWVtO1xyXG4gIH1cclxuXHJcbiBpbnB1dCB7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlci1ncmF5ICB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjRweCkge1xyXG4gIC5iYXIge1xyXG4gICAgbWluLWhlaWdodDogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWhpZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGhlaWdodDogMS43NWVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ncmF5ICB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaW5wdXQsIC5kcm9wZG93bi1jb250ZW50LCAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlLCAuZmlsdGVyLWdyYXkge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuIFxyXG59Il19 */"] });
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
    { path: "portfolio", component: _app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"] },
    { path: "home", component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] }
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
            ["typescript", "TypeScript"],
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
        this.year = (new Date()).getFullYear();
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
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], decls: 44, vars: 1, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "container-fluid"], ["title", "Toggle navigation", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ms-auto"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "py-2"], ["routerLink", "/home", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["routerLink", "/portfolio", "routerLinkActive", "active", 1, "nav-link", "active", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://drive.google.com/file/d/1juvooQNMBCzWMf_cCjyGVTFOwWlOVk3i/view?usp=sharing", 1, "nav-link", "small-txt", "my-1", "ms-auto", "ms-lg-3", "me-lg-5"], [1, "text-dark", "pb-5"], ["skills", "Angular,Bootstrap,C#,Design,Flask,HTML/CSS,Java,JavaScript,Python,TypeScript,Unity", 3, "filter_skill"], [1, "d-flex", "flex-wrap", "justify-content-center", "mt-3"], ["title", "Personal Website", "skills", "HTML/CSS,Bootstrap,Angular,Design", "image_thumbnail", "/assets/img/portfolio/personal/mockup_website_01.jpg", "link", "https://jasmineirada.com/About", 1, "htmlcss", "bootstrap", "angular", "design"], [1, "footer", "pt-5", "text-dark", "text-center"], [1, "container"], [1, "row"], [1, "col", "mb-5", "mb-lg-0"], [1, "name-custom", "mb-4"], [1, "d-flex", "justify-content-center", "p-0", "mx-0", "mt-2"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Checkout my GitHub", "src", "/assets/img/github-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Connect with me on Linkedin", "src", "/assets/img/linkedin-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Send me an email", "src", "/assets/img/envelope-solid.svg", 1, "filter-black"], [1, "copyright", "py-4", "text-center", "text-dark"], [1, "small-txt"], ["alt", "Love", "src", "/assets/img/heart-solid.svg", 1, "filter-red", 2, "height", "1rem"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PORTFOLIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "RESUME");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Thanks for stopping by. Let's Connect!");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " JASMINE IRADA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " MADE WITH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.year, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_4__["ProjectPreviewComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] { font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-weight:700; font-style: normal; font-variant: normal;  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  font-size: large;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n  \"Roboto\", \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n  \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n  margin-bottom: 0.5rem;\r\n  font-weight: 400;\r\n}\r\n\r\n.small-txt[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n}\r\n\r\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: none;\r\n  padding: none;\r\n}\r\n\r\nsection[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], .copyright[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  background-color: #121212;\r\n  color: #faf9f7;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #faf9f7;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-black[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.btn-outline-dark[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.filter-red[_ngcontent-%COMP%] {\r\n  filter: invert(9%) sepia(71%) saturate(5688%) hue-rotate(4deg) brightness(97%) contrast(117%);\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    margin-top: 2rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 4000px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 14rem;\r\n    width: 14rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 4rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-top: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 1824px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 10rem;\r\n    width: 10rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 2rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 6rem;\r\n    width: 6rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    width: 8rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 0.90rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: normal;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.5em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O1lBT1k7OzhFQUVrRSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsR0FBRzs7QUFFNUk7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7OzhFQUU0RTtFQUM1RSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCRzs7QUFFSDs7RUFFRTs7QUFFRjtFQUNFLDhGQUE4RixFQUFFLFlBQVk7QUFDOUc7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2RkFBNkY7QUFDL0Y7O0FBQ0E7O0VBRUU7O0FBRUY7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxuLm5hdmJhci1icmFuZCxcclxuLm5hdi1saW5rIHsgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiLCBcIkNhbGlicmlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZixcclxuICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgIH1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIiwgXCJDYWxpYnJpXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLFxyXG4gIFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5zbWFsbC10eHQge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbnVsLFxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogbm9uZTtcclxuICBwYWRkaW5nOiBub25lO1xyXG59XHJcblxyXG5zZWN0aW9uLFxyXG5mb290ZXIsIC5jb3B5cmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5Zjc7XHJcbn1cclxuXHJcbi8qIFxyXG5OQVZCQVJcclxuICovXHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gIGNvbG9yOiAjZmFmOWY3O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmFmOWY3O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiwgLm5hdi1saW5rIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLm5hdmJhci1uYXYgbGkgYSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi8qIFxyXG5QUk9KRUNUU1xyXG4gKi9cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIC5hbGVydCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOjd2aDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZlxyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIHtcclxuICBjb2xvcjogIzcyMWMyNDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xyXG4gIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciBociB7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2YxYjBiNztcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciAuYWxlcnQtbGluayB7XHJcbiAgY29sb3I6ICM0OTEyMTc7XHJcbn0gKi9cclxuXHJcbi8qIFxyXG5JQ09OU1xyXG4gKi9cclxuXHJcbi5idG46aG92ZXIgLmZpbHRlci1ibGFjayB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg1MyUpIHNhdHVyYXRlKDMyOSUpIGh1ZS1yb3RhdGUoNDFkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoOTglKTsgLyogI2ZhZjlmNyAqL1xyXG59XHJcblxyXG4uYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZmlsdGVyLXJlZCB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoOSUpIHNlcGlhKDcxJSkgc2F0dXJhdGUoNTY4OCUpIGh1ZS1yb3RhdGUoNGRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDExNyUpO1xyXG59XHJcbi8qIFxyXG5NRURJQSBRVUVSSUVTXHJcbiAqL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJoZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci14eHhsIHtcclxuICAgIG1heC13aWR0aDogNDAwMHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaW1ne1xyXG4gICAgaGVpZ2h0OiAxNHJlbTtcclxuICAgIHdpZHRoOiAxNHJlbTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWJsYWNrIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZS1saWdodCwuYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lci14eHhsIHtcclxuICAgIG1heC13aWR0aDogMTgyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDEwcmVtO1xyXG4gICAgd2lkdGg6IDEwcmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaW1ne1xyXG4gICAgaGVpZ2h0OiAxMnJlbTtcclxuICAgIHdpZHRoOiAxMnJlbTtcclxuICB9XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItYmxhY2sge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgyNHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogNnJlbTtcclxuICAgIHdpZHRoOiA2cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtaW1nIHtcclxuICAgIGhlaWdodDogOHJlbTtcclxuICAgIHdpZHRoOiA4cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItYmxhY2sge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMS4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAwLjkwcmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLWJsYWNrIHtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDEuNWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"], data: { animation: [
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