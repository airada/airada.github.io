(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\Projects\WebDev\airada.github.io\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../portfolio-featured/portfolio-featured.component */
      "G6HO");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent(router, cdr) {
          _classCallCheck(this, AboutComponent);

          this.router = router;
          this.cdr = cdr;
          this.state = 'down';
          this.reach_the_stars = 0;
          this.year = new Date().getFullYear();
          this.colors = ["#3C4F6C75", "#1A4C4A75", "#FED3B7", "#FF925E80", "#FF7A66", "#ABA3D275", "#FFD9EE50", "#FFD96C", "#D65F9150"];
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.stars = this.box_shadow(400, 250, 7, 8);
            this.stars1 = this.box_shadow(200, 200, 2, 6);
            this.stars2 = this.box_shadow(75, 200, 0, 1);
            document.getElementById("stars").style.boxShadow = this.stars;
            document.getElementById("stars1").style.boxShadow = this.stars1;
            document.getElementById("stars2").style.boxShadow = this.stars2;
          }
        }, {
          key: "onWindowScroll",
          value: function onWindowScroll(event) {
            var height = window.scrollY;
            var bg = document.getElementById("whitebg");
            bg.style.top = height * 0.25 + 'px';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.state === "down") {
              this.state = "up";
            } else {
              this.state = "down";
            }

            this.cdr.detectChanges();
          }
        }, {
          key: "onEnd",
          value: function onEnd(event) {
            if (this.state === "up") {
              this.state = "down";
            } else {
              this.state = "up";
            } // console.log("animation ended: state = ", this.state);

          }
        }, {
          key: "rng",
          value: function rng(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        }, {
          key: "box_shadow",
          value: function box_shadow(num_stars, vh_height, color1, color2) {
            var box_shadow_str = "";

            for (var i = 0; i <= num_stars; i++) {
              box_shadow_str += this.rng(0, 100).toString() + "vw " + this.rng(0, vh_height).toString() + "vh " + "#faf9f7";

              if (i != num_stars) {
                box_shadow_str += ",";
              }
            }

            return box_shadow_str;
          }
        }, {
          key: "add_trip",
          value: function add_trip() {
            this.reach_the_stars += 1;
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        hostBindings: function AboutComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AboutComponent_scroll_HostBindingHandler($event) {
              return ctx.onWindowScroll($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 92,
        vars: 4,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top", "bg-dark", "text-white"], [1, "container-fluid"], ["title", "Toggle navigation", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ms-auto"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ms-auto", "py-2"], ["routerLink", "/home", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "active", "text-sm", "my-1", "ms-auto", "mx-lg-3"], ["routerLink", "/portfolio", "routerLinkActive", "active", 1, "nav-link", "text-sm", "my-1", "ms-auto", "mx-lg-3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://drive.google.com/file/d/1juvooQNMBCzWMf_cCjyGVTFOwWlOVk3i/view?usp=sharing", 1, "nav-link", "text-sm", "my-1", "ms-auto", "ms-lg-3", "me-lg-5"], ["id", "header", 1, "container-fluid"], ["id", "whitebg", "src", "/assets/new_theme/header/white_bg_only.png", "alt", "White, upside-down arch with checkered and diagonal cross patterns.", 1, "img-fluid"], [1, "stars-position"], ["id", "stars", "alt", ""], ["id", "stars1", "alt", ""], ["id", "stars2", "alt", ""], ["id", "whitebg", "src", "/assets/img/stars.png", "alt", "Tiny stars placed all over the background.", 1, "d-xxxl-block"], ["id", "space", "alt", "Black background.", 1, "img-fluid"], ["id", "name", 1, "row", "m-0", "pt-lg-5"], [1, "col", "mb-0", "pb-0", "ms-3", "text-center"], ["data-aos", "fade-down", "data-aos-duration", "1500", "data-aos-once", "true"], [1, "text-white", "mb-3"], [1, "d-flex", "justify-content-center", "p-0", "mx-0", "mt-2"], ["data-aos", "zoom-in-down", "data-aos-duration", "1000", "data-aos-once", "true"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Checkout my GitHub!", "src", "/assets/img/github-brands.svg", 1, "filter-white"], ["data-aos", "zoom-in-down", "data-aos-duration", "1500", "data-aos-once", "true"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Connect with me on Linkedin!", "src", "/assets/img/linkedin-brands.svg", 1, "filter-white"], ["data-aos", "zoom-in-down", "data-aos-duration", "2000", "data-aos-once", "true"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-light", "me-2"], ["alt", "Send me an email!", "src", "/assets/img/envelope-solid.svg", 1, "filter-white"], ["id", "introduction", 1, "m-0", "pt-lg-5", "px-0"], [1, "row", "p-0", "m-0"], [1, "d-none", "d-lg-block", "col-lg-1"], [1, "col-12", "col-lg-5", "px-5", "px-lg-0"], ["data-aos", "fade-right", "data-aos-duration", "1500", "data-aos-once", "true"], [1, "text-dark", "title", "text-lg"], [1, "text-dark", "mb-0", "pb-0", "text-left", "text-dark"], [1, "text-dark"], ["routerLink", "/portfolio", "routerLinkActive", "active"], ["href", "..."], [1, "col-12", "col-lg-6", "d-none", "d-lg-block", "px-5"], [1, "astrokitty", "d-flex", "align-items-end", "justify-content-end", "flex-column", "pt-3", "px-5"], ["id", "portfolio", 1, "page-section", "portfolio", "bg-white"], ["badges", "Angular,TypeScript,Bootstrap,Design", "image", "/assets/img/portfolio/personal/mockup_website_01.jpg", "image2", "/assets/img/portfolio/personal/mockup_website_01.jpg", "title", "personal website", "date", "June 2020 - Ongoing", "description", "Personal website with portfolio and accomplishments.", "problem", "Creating a minimalist, accessible, responsive design while optimizing website performance.", "solution", "Heavy test-driven development using accessibility checkers, performance and network metrics, and user interface design theories and best practices.", "features", "Open-source portfolio multi-filter component, original interface and mockup designs."], [1, "footer", "bg-white", "text-center", "text-dark"], [1, "container"], [1, "row"], [1, "col", "mb-5", "mb-lg-0"], [1, "name-custom", "mb-4"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Checkout my GitHub", "src", "/assets/img/github-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Connect with me on Linkedin", "src", "/assets/img/linkedin-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Send me an email", "src", "/assets/img/envelope-solid.svg", 1, "filter-black"], [1, "copyright", "bg-white", "text-center", "text-dark", "py-4"], [1, "text-sm"], ["alt", "Love", "src", "/assets/img/heart-solid.svg", 1, "filter-red", 2, "height", "1rem"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim.done", function AboutComponent_Template_div_animation_starsAnim_done_18_listener($event) {
              return ctx.onEnd($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim1.done", function AboutComponent_Template_div_animation_starsAnim1_done_20_listener($event) {
              return ctx.onEnd($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("@starsAnim2.done", function AboutComponent_Template_div_animation_starsAnim2_done_22_listener($event) {
              return ctx.onEnd($event);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "VIEW PROJECTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " or ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "READ ABOUT ME");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "app-portfolio-featured", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "footer", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Thanks for stopping by. Let's connect!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " JASMINE IRADA ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " MADE WITH ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@starsAnim", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@starsAnim1", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@starsAnim2", ctx.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9", ctx.year, " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_3__["PortfolioFeaturedComponent"]],
        styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]\r\n { font-family: \"Calibri Light\", \"Calibri\", \"Candara\", \"Segoe\", \"Optima\", \"Arial\", \"sans-serif\", -apple-system, BlinkMacSystemFont,\r\n  Roboto, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; font-variant: normal;  }\r\n\r\na[_ngcontent-%COMP%], p[_ngcontent-%COMP%], .subheading[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .title[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Calibri Light\", \"Calibri\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n}\r\n\r\n\r\n\r\n.text-sm[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n}\r\n\r\n.text-rg[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\n\r\n.text-lg[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n\r\n.text-dark[_ngcontent-%COMP%] {\r\n  color:  #2a2a2a !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color:  #faf9f7 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7 !important;\r\n}\r\n\r\n.bg-dark[_ngcontent-%COMP%] {\r\n  background-color: #121212 !important;\r\n}\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-weight: 900;\r\n}\r\n\r\n\r\n\r\nheader[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]    > .container-fluid[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n#whitebg[_ngcontent-%COMP%]  {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  pointer-events: none;\r\n  z-index: 0;\r\n}\r\n\r\n.stars-position[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: -1;\r\n}\r\n\r\n#stars[_ngcontent-%COMP%] {\r\n  width: 0.05rem;\r\n  height: 0.05rem;\r\n  background: transparent;\r\n}\r\n\r\n#stars1[_ngcontent-%COMP%] {\r\n  width: 0.1rem;\r\n  height: 0.1rem;\r\n  border-radius: 0.05rem;\r\n  background: transparent;\r\n}\r\n\r\n#stars2[_ngcontent-%COMP%] {\r\n  width: 0.25rem;\r\n  height: 0.25rem;\r\n  border-radius: 0.125rem;\r\n  background: transparent;\r\n}\r\n\r\n#space[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  pointer-events: none;\r\n  \r\n  background-image: url('gray.png');\r\n  z-index: -2;\r\n}\r\n\r\n#name[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 45vh;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n#introduction[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 10vh;\r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n  font-weight: 900;\r\n  cursor: pointer;\r\n}\r\n\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #2a2a2a;\r\n}\r\n\r\np[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: gray;\r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n  z-index: 1;\r\n}\r\n\r\n.container-xxxl[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 1.5rem;\r\n  padding-left: 1.5rem;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.filter-white[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.filter-red[_ngcontent-%COMP%] {\r\n  filter: invert(9%) sepia(71%) saturate(5688%) hue-rotate(4deg) brightness(97%) contrast(117%);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-black[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-white[_ngcontent-%COMP%] {\r\n  filter: none;\r\n}\r\n\r\n.btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: block;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    margin-top: 2rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 4000px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 14rem;\r\n    width: 14rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 4rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-top: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 1824px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 10rem;\r\n    width: 10rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 2rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 6rem;\r\n    width: 6rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    width: 8rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%]  {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .d-xxxl-block[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n  \r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 0.90rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: normal;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.5em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0NBRUM7O0FBRUQ7Ozs7OztHQU1HO2tFQUMrRCxFQUFFLG9CQUFvQixHQUFHOztBQUUzRjs7Ozs7O0VBTUUscUJBQXFCO0VBQ3JCOztnRkFFOEU7RUFDOUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztDQUVDOztBQUNEO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7O0NBRUM7O0FBQ0Q7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7O0NBRUM7O0FBRUQ7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOztDQUVDOztBQUNEO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixzSkFBc0o7RUFDdEosaUNBQTRDO0VBQzVDLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7O0NBRUM7O0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOztHQUVHOztBQUdIOztFQUVFOztBQUVGO0VBQ0UsOEZBQThGLEVBQUUsWUFBWTtBQUM5Rzs7QUFHQTtFQUNFLDZGQUE2RjtBQUMvRjs7QUFFQTtFQUNFLDhGQUE4RixFQUFFLFlBQVk7QUFDOUc7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG5GT05UU1xyXG4qL1xyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNlxyXG4geyBmb250LWZhbWlseTogXCJDYWxpYnJpIExpZ2h0XCIsIFwiQ2FsaWJyaVwiLCBcIkNhbmRhcmFcIiwgXCJTZWdvZVwiLCBcIk9wdGltYVwiLCBcIkFyaWFsXCIsIFwic2Fucy1zZXJpZlwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsXHJcbiAgUm9ib3RvLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjsgZm9udC12YXJpYW50OiBub3JtYWw7ICB9XHJcblxyXG5hLCBcclxucCxcclxuLnN1YmhlYWRpbmcsXHJcbi5uYXZiYXItYnJhbmQsXHJcbi5uYXYtbGluayxcclxuLnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiLCBcIkNhbGlicmlcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgICBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLyogXHJcbkNVU1RPTSBURVhUIFNJWkVTXHJcbiovXHJcbi50ZXh0LXNtIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4udGV4dC1yZyB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4udGV4dC1sZyB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxudWwge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4vKiBcclxuQ1VTVE9NIENPTE9SU1xyXG4qL1xyXG4udGV4dC1kYXJrIHtcclxuICBjb2xvcjogICMyYTJhMmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtd2hpdGUge1xyXG4gIGNvbG9yOiAgI2ZhZjlmNyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmctd2hpdGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5ZjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogXHJcbk5BVkJBUiBcclxuKi9cclxuXHJcbi5uYXZiYXItbmF2LCAubmF2LWxpbmssIC5uYXZiYXItYnJhbmQge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiBsaSBhIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcblxyXG4vKiBcclxuSEVBREVSIFxyXG4qL1xyXG5oZWFkZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbmhlYWRlciA+IC5jb250YWluZXItZmx1aWQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiN3aGl0ZWJnICB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uc3RhcnMtcG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuI3N0YXJzIHtcclxuICB3aWR0aDogMC4wNXJlbTtcclxuICBoZWlnaHQ6IDAuMDVyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbiNzdGFyczEge1xyXG4gIHdpZHRoOiAwLjFyZW07XHJcbiAgaGVpZ2h0OiAwLjFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4wNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuI3N0YXJzMiB7XHJcbiAgd2lkdGg6IDAuMjVyZW07XHJcbiAgaGVpZ2h0OiAwLjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4jc3BhY2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAvKiBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBib3R0b20sICMxYjI3MzUgMCUsIzA5MGEwZiAxMDAlKTsgcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBib3R0b20sICMzMDNlNGVhZiAwJSwgIzE4MWEyYyAxMCUsYmxhY2sgNzAlKSwgICovXHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9ncmF5LnBuZ1wiKTtcclxuICB6LWluZGV4OiAtMjtcclxufVxyXG5cclxuI25hbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDQ1dmg7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuI2ludHJvZHVjdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTB2aDtcclxufVxyXG5cclxuLyogXHJcblNFQ1RJT04gXHJcbiovXHJcbmEge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5wIGEge1xyXG4gIGNvbG9yOiAjMmEyYTJhO1xyXG59XHJcblxyXG5wIGE6aG92ZXIge1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXh4eGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEuNXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIC5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn0gKi9cclxuXHJcblxyXG4vKiBcclxuSUNPTlNcclxuICovXHJcblxyXG4uZmlsdGVyLXdoaXRlIHtcclxuICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDUzJSkgc2F0dXJhdGUoMzI5JSkgaHVlLXJvdGF0ZSg0MWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg5OCUpOyAvKiAjZmFmOWY3ICovXHJcbn1cclxuXHJcblxyXG4uZmlsdGVyLXJlZCB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoOSUpIHNlcGlhKDcxJSkgc2F0dXJhdGUoNTY4OCUpIGh1ZS1yb3RhdGUoNGRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDExNyUpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIC5maWx0ZXItYmxhY2sge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDk5JSkgc2VwaWEoNTMlKSBzYXR1cmF0ZSgzMjklKSBodWUtcm90YXRlKDQxZGVnKSBicmlnaHRuZXNzKDExMiUpIGNvbnRyYXN0KDk4JSk7IC8qICNmYWY5ZjcgKi9cclxufVxyXG5cclxuLmJ0bjpob3ZlciAuZmlsdGVyLXdoaXRlIHtcclxuICBmaWx0ZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1saWdodCwgLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLyogXHJcbiAgTUVESUEgUVVFUklFU1xyXG4gKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMjU2MHB4KSB7XHJcbiAgLmQteHh4bC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXh4eGwge1xyXG4gICAgbWF4LXdpZHRoOiA0MDAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItd2hpdGUsIC5maWx0ZXItYmxhY2sgIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZS1saWdodCwuYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgICBwYWRkaW5nOiAyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIC5kLXh4eGwtYmxvY2sge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXh4eGwge1xyXG4gICAgbWF4LXdpZHRoOiAxODI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ibGFjayAge1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTgyNHB4KSB7XHJcbiAgLmQteHh4bC1ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWcge1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ibGFjayAge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMS4yNWVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5kLXh4eGwtYmxvY2sge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDAuOTByZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItd2hpdGUsIC5maWx0ZXItYmxhY2sge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0vh)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-200vh)'
          })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("125s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0vh)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-200vh)'
          })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim2', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("150s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(0vh)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            transform: 'translateY(-200vh)'
          })]))])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-about",
            templateUrl: "./about.component.html",
            styleUrls: ["./about.component.css"],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("100s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(0vh)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(-200vh)'
            })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim1', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("125s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(0vh)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(-200vh)'
            })]))])]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('starsAnim2', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('down => up', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("150s linear", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(0vh)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              transform: 'translateY(-200vh)'
            })]))])])]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", ["$event"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "9enj":
    /*!***********************************************!*\
      !*** ./src/app/portfolio/portfolio.module.ts ***!
      \***********************************************/

    /*! exports provided: PortfolioModule */

    /***/
    function enj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioModule", function () {
        return PortfolioModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../filters/filters.component */
      "sH3A");
      /* harmony import */


      var _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../project-preview/project-preview.component */
      "Io3o");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../app-routing.module */
      "vY5A");
      /* harmony import */


      var _portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./portfolio.component */
      "zyDg");

      var PortfolioModule = function PortfolioModule() {
        _classCallCheck(this, PortfolioModule);
      };

      PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PortfolioModule
      });
      PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PortfolioModule_Factory(t) {
          return new (t || PortfolioModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PortfolioModule, {
          declarations: [_filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]],
          exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]],
            declarations: [_filters_filters_component__WEBPACK_IMPORTED_MODULE_2__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_3__["ProjectPreviewComponent"], _portfolio_component__WEBPACK_IMPORTED_MODULE_7__["PortfolioComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]]
          }]
        }], null, null);
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
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    "FQ1g":
    /*!***************************************!*\
      !*** ./src/app/about/about.module.ts ***!
      \***************************************/

    /*! exports provided: AboutModule */

    /***/
    function FQ1g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutModule", function () {
        return AboutModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../portfolio-featured/portfolio-featured.component */
      "G6HO");
      /* harmony import */


      var _about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about.component */
      "84zG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../app-routing.module */
      "vY5A");

      var AboutModule = function AboutModule() {
        _classCallCheck(this, AboutModule);
      };

      AboutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AboutModule
      });
      AboutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AboutModule_Factory(t) {
          return new (t || AboutModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutModule, {
          declarations: [_portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]],
          exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
            declarations: [_portfolio_featured_portfolio_featured_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioFeaturedComponent"], _about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "G6HO":
    /*!********************************************************************!*\
      !*** ./src/app/portfolio-featured/portfolio-featured.component.ts ***!
      \********************************************************************/

    /*! exports provided: PortfolioFeaturedComponent */

    /***/
    function G6HO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioFeaturedComponent", function () {
        return PortfolioFeaturedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PortfolioFeaturedComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
        }
      }

      var PortfolioFeaturedComponent = /*#__PURE__*/function () {
        function PortfolioFeaturedComponent() {
          _classCallCheck(this, PortfolioFeaturedComponent);

          this.skillExist = true;
        }

        _createClass(PortfolioFeaturedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.badges_list = this.badges.split(",");
          }
        }, {
          key: "details",
          value: function details() {
            console.log("to be added.");
            this.alert_fadein();
            this.alert_fadeout();
          }
        }, {
          key: "alert_fadein",
          value: function alert_fadein() {
            this.skillExist = false;
          }
        }, {
          key: "alert_fadeout",
          value: function alert_fadeout() {
            var _this = this;

            setTimeout(function () {
              _this.skillExist = true;
            }, 2000);
          }
        }]);

        return PortfolioFeaturedComponent;
      }();

      PortfolioFeaturedComponent.ɵfac = function PortfolioFeaturedComponent_Factory(t) {
        return new (t || PortfolioFeaturedComponent)();
      };

      PortfolioFeaturedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioFeaturedComponent,
        selectors: [["app-portfolio-featured"]],
        inputs: {
          badges: "badges",
          image: "image",
          image2: "image2",
          title: "title",
          date: "date",
          description: "description",
          problem: "problem",
          solution: "solution",
          features: "features"
        },
        decls: 39,
        vars: 8,
        consts: [["data-aos", "fade-up", "data-aos-duration", "1500", "data-aos-once", "true", "data-aos-anchor-placement", "top-center"], [1, "container-xxxl", "py-5", "text-dark"], [1, "row", "bg-white", "h-25"], ["id", "carouselExampleFade", "data-bs-ride", "carousel", 1, "col-12", "col-lg-6", "col-xl-6", "d-flex", "align-items-center", "justify-content-center", "carousel", "slide", "carousel-fade"], [1, "carousel-inner", 2, "max-width", "80%", "border-radius", "10px"], ["data-bs-interval", "5000", 1, "carousel-item", "active"], ["alt", "...", 1, "d-block", "w-100", 3, "src"], ["data-bs-interval", "5000", 1, "carousel-item"], [1, "col"], [1, "container", "h-100", "pb-5", "pb-lg-0", 2, "position", "relative"], [1, "text-uppercase", "title", "text-center", "my-3", "my-md-0", 2, "font-size", "large"], [1, "row", "pt-2", "mt-2"], [1, "d-flex", "flex-wrap", "align-items-center"], ["class", "badge text-uppercase my-1 me-1", 4, "ngFor", "ngForOf"], [1, "text-left", "mt-md-2", "mb-4", "me-5"], [1, "badge", "text-uppercase", "my-1", "me-1"]],
        template: function PortfolioFeaturedComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] { font-family: \"Calibri Light\", \"Calibri\", \"Candara\", \"Segoe\", \"Optima\", \"Arial\", \"sans-serif\", -apple-system, BlinkMacSystemFont,\r\n  Roboto, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; font-style: normal; font-variant: normal;}\r\n\r\np[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], button[_ngcontent-%COMP%], .badge[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Calibri Light\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n}\r\n\r\n\r\n\r\n.text-dark[_ngcontent-%COMP%] {\r\n  color:  #2a2a2a !important;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color:  #faf9f7 !important;\r\n}\r\n\r\n.bg-white[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7 !important;\r\n}\r\n\r\n.container-xxxl[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding-right: 1.5rem;\r\n  padding-left: 1.5rem;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  color: #121212;\r\n  box-shadow: 2px 2px 5px #e8e6e1;\r\n}\r\n\r\n.btn-portfolio[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  bottom: 0;\r\n}\r\n\r\n.btn-shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 5px 5px 10px #e8e6e1;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover {\r\n  color: #2a2a2a;\r\n  background-color: #faf9f7;\r\n  border-color: darkgray;\r\n  font-size: small;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n  color: #faf9f7;\r\n  background-color: #121212;\r\n  border-color: #121212;\r\n  font-size: small;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  h2[_ngcontent-%COMP%] {\r\n   font-size: 4rem;\r\n }\r\n\r\n p[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n \r\n .container-xxxl[_ngcontent-%COMP%] {\r\n   max-width: 90vw;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 20px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: 2rem;\r\n   padding: 2.5rem;\r\n }\r\n}\r\n\r\n@media only screen and (min-width: 1825px) and (max-width: 2559px) {\r\n  h2[_ngcontent-%COMP%] {\r\n   font-size: 3.5rem;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: 1.5rem;\r\n }\r\n \r\n .container-xxxl[_ngcontent-%COMP%] {\r\n   max-width: 90vw;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 20px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: 1.75rem;\r\n   padding: 2rem;\r\n }\r\n}\r\n\r\n@media only screen and (min-width: 601px) and (max-width: 1824px) {\r\n\r\n h2[_ngcontent-%COMP%] {\r\n   font-size: xx-large;\r\n }\r\n \r\n p[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n }\r\n \r\n .link[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: initial;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 10px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n   padding: 1.25rem;\r\n }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n h2[_ngcontent-%COMP%] {\r\n   font-size: large;\r\n }\r\n\r\n p[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n }\r\n\r\n .link[_ngcontent-%COMP%] {\r\n   font-size: x-small;\r\n }\r\n\r\n .badge[_ngcontent-%COMP%] {\r\n   font-size: x-small;\r\n }\r\n\r\n .fa-github[_ngcontent-%COMP%], .fa-external-link-alt[_ngcontent-%COMP%], i[_ngcontent-%COMP%] {\r\n   margin-right: 5px;\r\n }\r\n\r\n button[_ngcontent-%COMP%] {\r\n   font-size: small;\r\n   padding: 1rem;\r\n }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1mZWF0dXJlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0tBSUs7a0VBQzZELEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7O0FBRTdHO0VBQ0UscUJBQXFCO0VBQ3JCOztnRkFFOEU7RUFDOUUsZ0JBQWdCO0FBQ2xCOztBQUVBOztDQUVDOztBQUNEO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRTtHQUNDLGVBQWU7Q0FDakI7O0NBRUE7R0FDRSxlQUFlO0NBQ2pCOztDQUVBO0dBQ0UsZUFBZTtDQUNqQjs7Q0FFQTtHQUNFLGtCQUFrQjtDQUNwQjs7Q0FFQTtHQUNFLGVBQWU7Q0FDakI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxlQUFlO0dBQ2YsZUFBZTtDQUNqQjtBQUNEOztBQUVBO0VBQ0U7R0FDQyxpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxrQkFBa0I7Q0FDcEI7O0NBRUE7R0FDRSxpQkFBaUI7Q0FDbkI7O0NBRUE7R0FDRSxlQUFlO0NBQ2pCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0Usa0JBQWtCO0dBQ2xCLGFBQWE7Q0FDZjtBQUNEOztBQUVBOztDQUVDO0dBQ0UsbUJBQW1CO0NBQ3JCOztDQUVBO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLGdCQUFnQjtDQUNsQjs7QUFFRDs7QUFFQTtDQUNDO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0UsZ0JBQWdCO0NBQ2xCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0Usa0JBQWtCO0NBQ3BCOztDQUVBO0dBQ0UsaUJBQWlCO0NBQ25COztDQUVBO0dBQ0UsZ0JBQWdCO0dBQ2hCLGFBQWE7Q0FDZjs7QUFFRCIsImZpbGUiOiJwb3J0Zm9saW8tZmVhdHVyZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDQsXHJcbmg1LFxyXG5oNiB7IGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIiwgXCJDYWxpYnJpXCIsIFwiQ2FuZGFyYVwiLCBcIlNlZ29lXCIsIFwiT3B0aW1hXCIsIFwiQXJpYWxcIiwgXCJzYW5zLXNlcmlmXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCxcclxuICBSb2JvdG8sIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiOyBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsO31cclxuXHJcbnAsIGgzLCBidXR0b24sIC5iYWRnZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgICBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuLyogXHJcbkNVU1RPTSBDT0xPUlNcclxuKi9cclxuLnRleHQtZGFyayB7XHJcbiAgY29sb3I6ICAjMmEyYTJhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogICNmYWY5ZjcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJnLXdoaXRlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOWY3ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIteHh4bCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmJhZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOWY3O1xyXG4gIGNvbG9yOiAjMTIxMjEyO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNlOGU2ZTE7XHJcbn1cclxuXHJcbi5idG4tcG9ydGZvbGlvIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uYnRuLXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogNXB4IDVweCAxMHB4ICNlOGU2ZTE7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciwgLmJ0bjpob3ZlciB7XHJcbiAgY29sb3I6ICMyYTJhMmE7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZjlmNztcclxuICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbmJ1dHRvbiwgLmJ0biB7XHJcbiAgY29sb3I6ICNmYWY5Zjc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcclxuICBib3JkZXItY29sb3I6ICMxMjEyMTI7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLyogXHJcbk1FRElBIFFVRVJJRVNcclxuICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCkge1xyXG4gIGgyIHtcclxuICAgZm9udC1zaXplOiA0cmVtO1xyXG4gfVxyXG5cclxuIHAge1xyXG4gICBmb250LXNpemU6IDJyZW07XHJcbiB9XHJcblxyXG4gLmxpbmsge1xyXG4gICBmb250LXNpemU6IDJyZW07XHJcbiB9XHJcblxyXG4gLmJhZGdlIHtcclxuICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gfVxyXG4gXHJcbiAuY29udGFpbmVyLXh4eGwge1xyXG4gICBtYXgtd2lkdGg6IDkwdnc7XHJcbiB9XHJcblxyXG4gLmZhLWdpdGh1YiwgLmZhLWV4dGVybmFsLWxpbmstYWx0LCBpIHtcclxuICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gfVxyXG5cclxuIGJ1dHRvbiB7XHJcbiAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgcGFkZGluZzogMi41cmVtO1xyXG4gfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE4MjVweCkgYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIGgyIHtcclxuICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiB9XHJcbiBcclxuIHAge1xyXG4gICBmb250LXNpemU6IDEuNzVyZW07XHJcbiB9XHJcblxyXG4gLmxpbmsge1xyXG4gICBmb250LXNpemU6IDEuNzVyZW07XHJcbiB9XHJcblxyXG4gLmJhZGdlIHtcclxuICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiB9XHJcbiBcclxuIC5jb250YWluZXIteHh4bCB7XHJcbiAgIG1heC13aWR0aDogOTB2dztcclxuIH1cclxuXHJcbiAuZmEtZ2l0aHViLCAuZmEtZXh0ZXJuYWwtbGluay1hbHQsIGkge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiB9XHJcblxyXG4gYnV0dG9uIHtcclxuICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICBwYWRkaW5nOiAycmVtO1xyXG4gfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTgyNHB4KSB7XHJcblxyXG4gaDIge1xyXG4gICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gfVxyXG4gXHJcbiBwIHtcclxuICAgZm9udC1zaXplOiBsYXJnZTtcclxuIH1cclxuIFxyXG4gLmxpbmsge1xyXG4gICBmb250LXNpemU6IHNtYWxsO1xyXG4gfVxyXG5cclxuIC5iYWRnZSB7XHJcbiAgIGZvbnQtc2l6ZTogaW5pdGlhbDtcclxuIH1cclxuXHJcbiAuZmEtZ2l0aHViLCAuZmEtZXh0ZXJuYWwtbGluay1hbHQsIGkge1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiB9XHJcblxyXG4gYnV0dG9uIHtcclxuICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgcGFkZGluZzogMS4yNXJlbTtcclxuIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuIGgyIHtcclxuICAgZm9udC1zaXplOiBsYXJnZTtcclxuIH1cclxuXHJcbiBwIHtcclxuICAgZm9udC1zaXplOiBzbWFsbDtcclxuIH1cclxuXHJcbiAubGluayB7XHJcbiAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuIH1cclxuXHJcbiAuYmFkZ2Uge1xyXG4gICBmb250LXNpemU6IHgtc21hbGw7XHJcbiB9XHJcblxyXG4gLmZhLWdpdGh1YiwgLmZhLWV4dGVybmFsLWxpbmstYWx0LCBpIHtcclxuICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiB9XHJcblxyXG4gYnV0dG9uIHtcclxuICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgcGFkZGluZzogMXJlbTtcclxuIH1cclxuXHJcbn1cclxuIl19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioFeaturedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio-featured',
            templateUrl: './portfolio-featured.component.html',
            styleUrls: ['./portfolio-featured.component.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')])])]
          }]
        }], function () {
          return [];
        }, {
          badges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          image2: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          problem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          solution: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          features: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Io3o":
    /*!**************************************************************!*\
      !*** ./src/app/project-preview/project-preview.component.ts ***!
      \**************************************************************/

    /*! exports provided: ProjectPreviewComponent */

    /***/
    function Io3o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectPreviewComponent", function () {
        return ProjectPreviewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectPreviewComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1);
        }
      }

      var ProjectPreviewComponent = /*#__PURE__*/function () {
        function ProjectPreviewComponent() {
          _classCallCheck(this, ProjectPreviewComponent);
        }

        _createClass(ProjectPreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.skill_list = this.skills.split(",");
          }
        }]);

        return ProjectPreviewComponent;
      }();

      ProjectPreviewComponent.ɵfac = function ProjectPreviewComponent_Factory(t) {
        return new (t || ProjectPreviewComponent)();
      };

      ProjectPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectPreviewComponent,
        selectors: [["app-project-preview"]],
        inputs: {
          skills: "skills",
          image_thumbnail: "image_thumbnail",
          title: "title",
          link: "link"
        },
        decls: 8,
        vars: 3,
        consts: [["data-aos", "fade-up", "data-aos-duration", "1500", "data-aos-once", "true"], [1, "col", "mx-3", "mt-4"], [1, "card", "bg-light", "d-flex", "align-items-center", "justify-content-center"], ["target", "_blank", "rel", "noopener noreferrer", 1, "card-img-top", "pt-5", 3, "href"], ["alt", "title", 3, "src"], [1, "card-footer", "bg-light"], [1, "d-flex", "flex-wrap", "align-items-center", "m-0", "p-0"], ["class", "badge m-1", 4, "ngFor", "ngForOf"], [1, "badge", "m-1"]],
        template: function ProjectPreviewComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image_thumbnail, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skill_list);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n  margin-bottom: 0.5rem;\r\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n  line-height: 1.2;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\n\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  color: gray;\r\n  box-shadow: 2px 2px 5px #e8e6e1;\r\n  font-size: x-small;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-img-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%; \r\n  height: 100%;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 60em;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 2.25rem;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 40em;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 30em;\r\n  }\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 0.75rem;\r\n  }\r\n\r\n  \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .card[_ngcontent-%COMP%] {\r\n    width: 25rem;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3QtcHJldmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7RUFNRSxxQkFBcUI7RUFDckI7O2dGQUU4RTtFQUM5RSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7RUFFRTs7QUFDRDtFQUNDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFOztBQUVGO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOzs7S0FHRztBQUNMOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBOztLQUVHO0FBQ0w7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTs7S0FFRztBQUNMOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJwcm9qZWN0LXByZXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDMsXHJcbmg1LFxyXG5oNixcclxucCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgICBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbnVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFxyXG5DQVJEXHJcbiAqL1xyXG4gLmJhZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOWY3O1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNlOGU2ZTE7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1pbWctdG9wIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7IFxyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogXHJcbk1FRElBIFFVRVJJRVNcclxuICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA2MGVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1ncmF5IHtcclxuICAgIGhlaWdodDogMi4yNXJlbTtcclxuICB9XHJcblxyXG4gIC8qIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDEuNTVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgfSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiA0MGVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1ncmF5IHtcclxuICAgIGhlaWdodDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLyogLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH0gKi9cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODI0cHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICB3aWR0aDogMzBlbTtcclxuICB9XHJcbiAgLmZpbHRlci1ncmF5IHtcclxuICAgIGhlaWdodDogMC43NXJlbTtcclxuICB9XHJcblxyXG4gIC8qIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDAuNjByZW07XHJcbiAgfSAqL1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectPreviewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-project-preview",
            templateUrl: "./project-preview.component.html",
            styleUrls: ["./project-preview.component.css"]
          }]
        }], function () {
          return [];
        }, {
          skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          image_thumbnail: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
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

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.title = "Jasmine Irada | Portfolio";
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.navigate(["home"]);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-root",
            templateUrl: "./app.component.html",
            styleUrls: ["./app.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
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


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _about_about_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./about/about.module */
      "FQ1g");
      /* harmony import */


      var _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./portfolio/portfolio.module */
      "9enj");

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
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _about_about_module__WEBPACK_IMPORTED_MODULE_7__["AboutModule"], _portfolio_portfolio_module__WEBPACK_IMPORTED_MODULE_8__["PortfolioModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "sH3A":
    /*!**********************************************!*\
      !*** ./src/app/filters/filters.component.ts ***!
      \**********************************************/

    /*! exports provided: FiltersComponent */

    /***/
    function sH3A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FiltersComponent", function () {
        return FiltersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["input"];

      function FiltersComponent_ul_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_ul_4_Template_li_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var selected_item_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.toggle_skill(selected_item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var selected_item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_item_r4, " ");
        }
      }

      function FiltersComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_div_5_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function FiltersComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_li_14_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var item_r9 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.toggle_skill(item_r9);
          })("focus", function FiltersComponent_li_14_Template_li_focus_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var i_r10 = ctx.index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return i_r10 == ctx_r13.arrowkey_position;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_li_14_Template_input_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var item_r9 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.toggle_skill(item_r9);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", i_r10 == ctx_r3.arrowkey_position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r3.skills_list.indexOf(item_r9))("ngClass", ctx_r3.includeBG(item_r9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r9, " ");
        }
      }

      var _c1 = function _c1() {
        return {
          standalone: true
        };
      };

      var FiltersComponent = /*#__PURE__*/function () {
        function FiltersComponent(renderer) {
          _classCallCheck(this, FiltersComponent);

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

        _createClass(FiltersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.skills_list = this.skills.split(",");
            this.suggestions = this.skills_list.slice();
          }
        }, {
          key: "input_resize",
          value: function input_resize() {
            var length = this.input.nativeElement.value.length;

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
        }, {
          key: "onKeyUp",
          value: function onKeyUp() {
            this.input_resize();
          }
        }, {
          key: "onFocus",
          value: function onFocus() {
            this.input_resize();
          }
        }, {
          key: "set_scroll",
          value: function set_scroll(position) {
            document.getElementById("dropdown-content").scrollTop = position;
          }
        }, {
          key: "reset_scroll",
          value: function reset_scroll() {
            this.arrowkey_position = -1;
            this.scroll_position = 0;
            this.set_scroll(0);
          }
        }, {
          key: "emit_event",
          value: function emit_event(item) {
            switch (item) {
              case "C#":
                {
                  this.filter_skill.emit("cs");
                  break;
                }

              case "Project Management":
                {
                  this.filter_skill.emit("pm");
                  break;
                }

              case "HTML/CSS":
                {
                  this.filter_skill.emit("htmlcss");
                  break;
                }

              case "JavaScript":
                {
                  this.filter_skill.emit("js");
                  break;
                }

              default:
                {
                  this.filter_skill.emit(item.toLowerCase());
                  break;
                }
            }
          }
        }, {
          key: "keydown",
          value: function keydown(event) {
            switch (event.keyCode) {
              case 38:
                // Up Arrow Key
                if (this.arrowkey_position > -1) {
                  this.arrowkey_position--;
                  this.scroll_position -= 20;
                  this.set_scroll(this.scroll_position);
                }

                break;

              case 40:
                // Down Arrow Key
                if (this.arrowkey_position < this.skills_list.length - 1) {
                  this.arrowkey_position++;

                  if (this.arrowkey_position > 0) {
                    this.scroll_position += 20;
                    this.set_scroll(this.scroll_position);
                  }
                }

                break;

              case 8:
                // Backspace
                if (this.input.nativeElement.value == "" && this.selected.length > 0) {
                  this.emit_event(this.selected.pop());
                }

                this.reset_scroll();
                break;
            }
          }
        }, {
          key: "reset_input",
          value: function reset_input() {
            this.renderer.setProperty(this.input.nativeElement, "value", "");
            this.renderer.setAttribute(this.input.nativeElement, "size", this.search_size.toString());
          }
        }, {
          key: "reset_suggestions",
          value: function reset_suggestions() {
            this.suggestions = this.skills_list.slice();
          }
        }, {
          key: "toggle_skill",
          value: function toggle_skill(item) {
            this.reset_input();
            this.reset_suggestions();

            if (this.selected.indexOf(item) == -1) {
              this.selected.push(item);
            } else {
              this.selected.splice(this.selected.indexOf(item), 1);
            }

            this.emit_event(item);
          }
        }, {
          key: "update_suggestions",
          value: function update_suggestions(list) {
            this.arrowkey_position = -1;
            this.suggestions.splice(0, this.suggestions.indexOf(list[0]));
            var last = this.suggestions.indexOf(list.pop());
            this.suggestions.splice(last + 1, this.suggestions.length - last);
          }
        }, {
          key: "suggest",
          value: function suggest(str) {
            var matches = [];
            this.reset_suggestions();
            var regex = new RegExp("^" + str + "+");

            for (var i = 0; i < this.suggestions.length; i++) {
              if (this.suggestions[i].toLowerCase().search(regex) != -1) {
                matches.push(this.suggestions[i]);
              }
            }

            this.update_suggestions(matches);
          }
        }, {
          key: "search",
          value: function search(item) {
            if (item == "" && this.arrowkey_position != -1) {
              this.toggle_skill(this.suggestions[this.arrowkey_position]);
              return;
            } //Capitalize first letter


            var str = item.toLowerCase().charAt(0).toUpperCase() + item.toLowerCase().slice(1);

            if (this.skills_list.includes(str) && !this.selected.includes(str)) {
              this.toggle_skill(str);
            } else if (this.selected.includes(str) && this.suggestions.indexOf(str) == this.arrowkey_position) {
              this.selected.splice(this.selected.indexOf(str), 1);
            } else if (this.arrowkey_position != -1) {
              this.toggle_skill(this.suggestions[this.arrowkey_position]);
            } else if (!this.skills_list.includes(str)) {
              this.emit_event("invalid");
            }

            this.reset_input();
            this.reset_scroll();
            this.reset_suggestions();
          }
        }, {
          key: "content",
          value: function content(mode) {
            this.reset_scroll();
            var inputValue = document.getElementById("dropdown-content");
            var box = document.getElementById("box");
            var caret = document.getElementById("caret");

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
                } else {
                  this.caret_img = "/assets/img/caret-down-solid.svg";
                }

                break;
            }
          }
        }, {
          key: "modelChange",
          value: function modelChange(str) {
            this.content('show');

            if (!str) {
              this.reset_suggestions();
              return;
            }

            this.suggest(str.toLowerCase());
          }
        }, {
          key: "clear",
          value: function clear() {
            for (var i = 0; i < this.selected.length; i++) {
              this.emit_event(this.selected[i]);
            }

            this.selected = [];
          }
        }, {
          key: "includeBG",
          value: function includeBG(item) {
            if (this.selected.includes(item)) {
              return "dropdown-item bg-selected";
            } else {
              return "dropdown-item";
            }
          }
        }]);

        return FiltersComponent;
      }();

      FiltersComponent.ɵfac = function FiltersComponent_Factory(t) {
        return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FiltersComponent,
        selectors: [["app-filters"]],
        viewQuery: function FiltersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        hostBindings: function FiltersComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FiltersComponent_keyup_HostBindingHandler() {
              return ctx.onKeyUp();
            })("focus", function FiltersComponent_focus_HostBindingHandler() {
              return ctx.onFocus();
            });
          }
        },
        inputs: {
          skills: "skills"
        },
        outputs: {
          filter_skill: "filter_skill"
        },
        decls: 15,
        vars: 7,
        consts: [[1, "container-fluid", "pt-5", "mt-5", 2, "position", "relative"], [1, "row", "bar", "d-flex", "justify-content-center"], ["id", "box", 1, "col-11", "col-lg-6", "box", "px-1", "mt-2", "d-flex", "flex-wrap", 3, "click"], [1, "my-auto", "ms-3", "me-2"], ["id", "badges", "class", "d-inline-flex align-items-center p-0 m-0", 4, "ngFor", "ngForOf"], ["title", "Clear All", "class", "clear p-2 ml-auto my-auto", 3, "click", 4, "ngIf"], ["type", "text", "placeholder", "Search for a skill", 1, "p-0", "ms-1", "d-flex", "align-items-center", 3, "size", "ngModel", "ngModelOptions", "focus", "keydown", "keyup.enter", "ngModelChange"], ["input", ""], ["id", "caret", 1, "col-1", "caret", "pointer", "p-0", "mt-2", "d-flex", "justify-content-end", 3, "click"], ["title", "Toggle Dropdown", 1, "my-auto", "mx-auto", "p-0"], ["alt", "Toggle Dropdown", 1, "filter-gray", 3, "src"], [1, "row", "d-flex", "justify-content-center"], ["id", "dropdown-content", 1, "col", "col-lg-7", "dropdown-content", "pointer", "hide"], [1, "p-0", "m-0"], ["class", "m-0 item", 3, "id", "ngClass", "active", "click", "focus", 4, "ngFor", "ngForOf"], ["id", "badges", 1, "d-inline-flex", "align-items-center", "p-0", "m-0"], [1, "badge", "badge-pill", "pointer", "px-2", "m-1", "m-xxl-2", 3, "click"], ["title", "Clear All", 1, "clear", "p-2", "ml-auto", "my-auto", 3, "click"], [1, "pointer", "me-xxl-4"], ["alt", "Clear skills", "src", "/assets/img/times-circle-regular.svg", 1, "filter-gray"], [1, "m-0", "item", 3, "id", "ngClass", "click", "focus"], [1, "checkbox-hide"], ["type", "checkbox", 3, "click"]],
        template: function FiltersComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_div_click_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              return _r2.focus();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FiltersComponent_ul_4_Template, 3, 1, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FiltersComponent_div_5_Template, 3, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function FiltersComponent_Template_input_focus_6_listener() {
              return ctx.content("show");
            })("keydown", function FiltersComponent_Template_input_keydown_6_listener($event) {
              return ctx.keydown($event);
            })("keyup.enter", function FiltersComponent_Template_input_keyup_enter_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

              return ctx.search(_r2.value);
            })("ngModelChange", function FiltersComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.modelChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_Template_div_click_8_listener() {
              return ctx.input_focused ? ctx.content("hide") : ctx.content("toggle");
            });

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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: ["*[_ngcontent-%COMP%] {\r\n  scrollbar-color:grey;\r\n  scrollbar-width: thin;\r\n}\r\n\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n}\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background: none;\r\n}\r\n*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: grey;\r\n  border-radius: 20px;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:focus, *[_ngcontent-%COMP%]:hover{\r\n  outline:none;\r\n}\r\n[_ngcontent-%COMP%]::-moz-placeholder { \r\n  color: gray;\r\n  opacity: 1; \r\n}\r\n[_ngcontent-%COMP%]::placeholder { \r\n  color: gray;\r\n  opacity: 1; \r\n}\r\n[_ngcontent-%COMP%]:-ms-input-placeholder { \r\n  color: lightgray;\r\n}\r\n[_ngcontent-%COMP%]::-ms-input-placeholder { \r\n  color:  lightgray;\r\n}\r\n.filter-gray[_ngcontent-%COMP%] {\r\n  filter: invert(75%) sepia(12%) saturate(5%) hue-rotate(333deg) brightness(90%) contrast(83%);\r\n}\r\n.pointer[_ngcontent-%COMP%]:hover   .filter-gray[_ngcontent-%COMP%] {\r\n  filter: none;\r\n}\r\n.filter-white[_ngcontent-%COMP%] {\r\n  filter: invert(100%) sepia(91%) saturate(38%) hue-rotate(321deg) brightness(110%) contrast(110%);\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: #0b2228;\r\n  display: inline-block;\r\n  font-family: \"Calibri Light\";\r\n  font-weight: 900;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n.pointer[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown[_ngcontent-%COMP%] {\r\n  color: black;\r\n  min-width: 100%;\r\n\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  border: 2px ;\r\n  border-radius: 15px 0px 0px 15px;\r\n  color: #faf9f7;\r\n  cursor: text;\r\n  min-height: 40px;\r\n  box-shadow: 2px 2px 5px #e8e6e1;\r\n}\r\n.box-bottom[_ngcontent-%COMP%] {\r\n  border-radius: 15px 0px 0px 0px;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%], .badge-pill[_ngcontent-%COMP%] {\r\n  background-color: #343a40;\r\n  font-family: \"Calibri Light\";\r\n  color: #f5f5f7;\r\n  font-size: 10pt;\r\n}\r\n.badge[_ngcontent-%COMP%]:hover, .badge-pill[_ngcontent-%COMP%]:hover {\r\n  background-color: #0d1013;\r\n  cursor: pointer;\r\n}\r\n\r\n.caret[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n  border: 5px darkgray;\r\n  border-radius: 0px 15px 15px 0px;\r\n  box-shadow: 2px 2px 5px #e8e6e1;\r\n}\r\n.caret-bottom[_ngcontent-%COMP%] {\r\n  border-radius: 0px 15px 0px 0px;\r\n}\r\n.caret[_ngcontent-%COMP%]:hover {\r\n  background-color: darkgray;\r\n}\r\n.caret[_ngcontent-%COMP%]:hover   .filter-gray[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.dropdown-content[_ngcontent-%COMP%] {\r\n  background-color: #f5f5f7;\r\n  border: 2px solid #f5f5f7;\r\n  border-radius: 0px 0px 15px 15px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n  font-family: \"Calibri Light\";\r\n  max-height: 25vh;\r\n  overflow-y: auto;\r\n  position: absolute;\r\n  scrollbar-color: grey;\r\n  scrollbar-width: thin;\r\n  z-index: 4;\r\n}\r\n.bg-selected[_ngcontent-%COMP%] {\r\n  background-color: darkgray;\r\n  color: #f5f5f7;\r\n  font-weight: bold;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid rgba(220, 220, 220, 0.75);\r\n}\r\n.active[_ngcontent-%COMP%], .dropdown-item.active[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:active, .dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: lightgrey;\r\n}\r\n.active.bg-selected[_ngcontent-%COMP%], .dropdown-item[_ngcontent-%COMP%]:hover.bg-selected {\r\n  background-color: #343a40;\r\n  color: #f5f5f7;\r\n}\r\n.checkbox-hide[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  height: 0;\r\n  opacity: 0;\r\n  position: absolute;\r\n  width: 0;\r\n}\r\n@media only screen and (min-width: 2560px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 8em;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    border-radius: 1rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 1em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 2em;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%]  {\r\n    height: 4rem;\r\n  }\r\n\r\n  .filter-gray[_ngcontent-%COMP%] {\r\n    height: 2.5rem;\r\n  }\r\n\r\n}\r\n@media only screen and (max-width: 2559px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 4em;\r\n    border-radius: 2em;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n    font-weight: bold;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 1.75em;\r\n  }\r\n\r\n input[_ngcontent-%COMP%] {\r\n   font-size: 1.5rem;\r\n }\r\n\r\n  .filter-white[_ngcontent-%COMP%] {\r\n    height: 2rem;\r\n  }\r\n  \r\n  .filter-gray[_ngcontent-%COMP%]  {\r\n    height: 1.25rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 1824px) {\r\n  .bar[_ngcontent-%COMP%] {\r\n    min-height: 2em;\r\n    border-radius: 1em;\r\n  }\r\n\r\n  .badge[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    border-radius: 0.5rem;\r\n  }\r\n\r\n  .checkbox-hide[_ngcontent-%COMP%] {\r\n    padding-top: 0.25em;\r\n  }\r\n\r\n  .dropdown-content[_ngcontent-%COMP%] {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .item[_ngcontent-%COMP%] {\r\n    height: 1.75em;\r\n  }\r\n\r\n  input[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-gray[_ngcontent-%COMP%]  {\r\n    height: 1.25rem;\r\n  }\r\n}\r\n@media only screen and (max-width: 600px) {\r\n  input[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%], .badge[_ngcontent-%COMP%] {\r\n    font-size:1rem;\r\n  }\r\n\r\n  .filter-white[_ngcontent-%COMP%], .filter-gray[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7QUFDckI7RUFDRSxvQkFBb0I7RUFDcEIscUJBQXFCO0FBQ3ZCO0FBRUEsc0NBQXNDO0FBQ3RDO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBLHFCQUFnQix5Q0FBeUM7RUFDdkQsV0FBVztFQUNYLFVBQVUsRUFBRSxZQUFZO0FBQzFCO0FBSEEsZ0JBQWdCLHlDQUF5QztFQUN2RCxXQUFXO0VBQ1gsVUFBVSxFQUFFLFlBQVk7QUFDMUI7QUFFQSx5QkFBeUIsNEJBQTRCO0VBQ25ELGdCQUFnQjtBQUNsQjtBQUVBLDBCQUEwQixtQkFBbUI7RUFDM0MsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw0RkFBNEY7QUFDOUY7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0dBQWdHO0FBQ2xHO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQSxhQUFhO0FBQ2I7RUFDRSxZQUFZO0VBQ1osZUFBZTs7QUFFakI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUEsV0FBVztBQUNYOztFQUVFLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDO0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLDhGQUE4RixFQUFFLFlBQVk7QUFDOUc7QUFHQSxxQkFBcUI7QUFDckI7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLCtDQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7QUFFQTs7OztFQUlFLDJCQUEyQjtBQUM3QjtBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWO0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFRjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztDQUVEO0dBQ0UsaUJBQWlCO0NBQ25COztFQUVDO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOzs7QUFHRiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXb3JrcyBvbiBGaXJlZm94ICovXHJcbioge1xyXG4gIHNjcm9sbGJhci1jb2xvcjpncmV5O1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxufVxyXG5cclxuLyogV29ya3Mgb24gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpICovXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogOHB4O1xyXG59XHJcblxyXG4qOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuKjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuKiwqOmZvY3VzLCo6aG92ZXJ7XHJcbiAgb3V0bGluZTpub25lO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHsgLyogQ2hyb21lLCBGaXJlZm94LCBPcGVyYSwgU2FmYXJpIDEwLjErICovXHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6ICBsaWdodGdyYXk7XHJcbn1cclxuXHJcbi5maWx0ZXItZ3JheSB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoNzUlKSBzZXBpYSgxMiUpIHNhdHVyYXRlKDUlKSBodWUtcm90YXRlKDMzM2RlZykgYnJpZ2h0bmVzcyg5MCUpIGNvbnRyYXN0KDgzJSk7XHJcbn1cclxuXHJcbi5wb2ludGVyOmhvdmVyIC5maWx0ZXItZ3JheSB7XHJcbiAgZmlsdGVyOiBub25lO1xyXG59XHJcblxyXG4uZmlsdGVyLXdoaXRlIHtcclxuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSg5MSUpIHNhdHVyYXRlKDM4JSkgaHVlLXJvdGF0ZSgzMjFkZWcpIGJyaWdodG5lc3MoMTEwJSkgY29udHJhc3QoMTEwJSk7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwYjIyMjg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIjtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG51bCB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biAqL1xyXG4uZHJvcGRvd24ge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4uYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmOWY3O1xyXG4gIGJvcmRlcjogMnB4IDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4IDBweCAwcHggMTVweDtcclxuICBjb2xvcjogI2ZhZjlmNztcclxuICBjdXJzb3I6IHRleHQ7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjZThlNmUxO1xyXG59XHJcblxyXG4uYm94LWJvdHRvbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLyogQmFkZ2VzICovXHJcbi5iYWRnZSxcclxuLmJhZGdlLXBpbGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FsaWJyaSBMaWdodFwiO1xyXG4gIGNvbG9yOiAjZjVmNWY3O1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG5cclxuLmJhZGdlOmhvdmVyLFxyXG4uYmFkZ2UtcGlsbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkMTAxMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xyXG4uY2FyZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5Zjc7XHJcbiAgYm9yZGVyOiA1cHggZGFya2dyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMTVweCAwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggI2U4ZTZlMTtcclxufVxyXG5cclxuLmNhcmV0LWJvdHRvbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4IDE1cHggMHB4IDBweDtcclxufVxyXG5cclxuLmNhcmV0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JheTtcclxufVxyXG5cclxuLmNhcmV0OmhvdmVyIC5maWx0ZXItZ3JheSB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoOTklKSBzZXBpYSg1MyUpIHNhdHVyYXRlKDMyOSUpIGh1ZS1yb3RhdGUoNDFkZWcpIGJyaWdodG5lc3MoMTEyJSkgY29udHJhc3QoOTglKTsgLyogI2ZhZjlmNyAqL1xyXG59XHJcblxyXG5cclxuLyogRHJvcGRvd24gQ29udGVudCAqL1xyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1Zjc7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2Y1ZjVmNztcclxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBmb250LWZhbWlseTogXCJDYWxpYnJpIExpZ2h0XCI7XHJcbiAgbWF4LWhlaWdodDogMjV2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBzY3JvbGxiYXItY29sb3I6IGdyZXk7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIHotaW5kZXg6IDQ7XHJcbn1cclxuXHJcbi5iZy1zZWxlY3RlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7XHJcbiAgY29sb3I6ICNmNWY1Zjc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyMjAsIDIyMCwgMjIwLCAwLjc1KTtcclxufVxyXG5cclxuLmFjdGl2ZSxcclxuLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLFxyXG4uZHJvcGRvd24taXRlbTphY3RpdmUsXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbn1cclxuXHJcbi5hY3RpdmUuYmctc2VsZWN0ZWQsXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyLmJnLXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xyXG4gIGNvbG9yOiAjZjVmNWY3O1xyXG59XHJcblxyXG4uY2hlY2tib3gtaGlkZSBpbnB1dCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAyNTYwcHgpIHtcclxuICAuYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDhlbTtcclxuICB9XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jaGVja2JveC1oaWRlIHtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgfVxyXG5cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG5cclxuICAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItd2hpdGUgIHtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItZ3JheSB7XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI1NTlweCkge1xyXG4gIC5iYXIge1xyXG4gICAgbWluLWhlaWdodDogNGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWhpZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGhlaWdodDogMS43NWVtO1xyXG4gIH1cclxuXHJcbiBpbnB1dCB7XHJcbiAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZpbHRlci1ncmF5ICB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE4MjRweCkge1xyXG4gIC5iYXIge1xyXG4gICAgbWluLWhlaWdodDogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNoZWNrYm94LWhpZGUge1xyXG4gICAgcGFkZGluZy10b3A6IDAuMjVlbTtcclxuICB9XHJcblxyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5pdGVtIHtcclxuICAgIGhlaWdodDogMS43NWVtO1xyXG4gIH1cclxuXHJcbiAgaW5wdXQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci13aGl0ZSwgLmZpbHRlci1ncmF5ICB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaW5wdXQsIC5kcm9wZG93bi1jb250ZW50LCAuYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOjFyZW07XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXdoaXRlLCAuZmlsdGVyLWdyYXkge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuIFxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-filters",
            templateUrl: "./filters.component.html",
            styleUrls: ["./filters.component.css"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          skills: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          filter_skill: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["input"]
          }],
          onKeyUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["keyup"]
          }],
          onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["focus"]
          }]
        });
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


      var _app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../app/portfolio/portfolio.component */
      "zyDg");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");

      var routes = [{
        path: "portfolio",
        component: _app_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__["PortfolioComponent"]
      }, {
        path: "home",
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
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
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
    },

    /***/
    "zyDg":
    /*!**************************************************!*\
      !*** ./src/app/portfolio/portfolio.component.ts ***!
      \**************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function zyDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../filters/filters.component */
      "sH3A");
      /* harmony import */


      var _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../project-preview/project-preview.component */
      "Io3o");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent() {
          _classCallCheck(this, PortfolioComponent);

          this.skillExist = true;
          this.skill_tags = [["cs", "C#"], ["cpp", "C++"], ["typescript", "TypeScript"], ["python", "PYTHON"], ["java", "JAVA"], ["unity", "UNITY"], ["unreal", "UNREAL"], ["design", "DESIGN"], ["backend", "BACKEND"], ["mobile", "MOBILE"], ["vr", "VIRTUAL REALITY"], ["clear", "CLEAR ALL"]];
          this.chosen_skill = [];
          this.year = new Date().getFullYear();
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "filter",
          value: function filter($event) {
            if ($event == "invalid") {
              this.alert_fadein();
              this.alert_fadeout();
              return;
            }

            this.selected_skill = $event;

            if (this.chosen_skill.includes(this.selected_skill)) {
              this.chosen_skill.splice(this.chosen_skill.indexOf(this.selected_skill), 1);
            } else {
              this.chosen_skill.push(this.selected_skill);
            }

            console.log(this.chosen_skill);
            this.filter_skill();
          }
        }, {
          key: "filter_skill",
          value: function filter_skill() {
            var _this2 = this;

            var len = this.chosen_skill.length;

            for (var i = 0; i < this.skill_tags.length; i++) {
              if (len === 0) {
                this.toggle_class(this.skill_tags[i][0], false); //removes hidden class, if it exists
              } else if (len >= 1) {
                this.toggle_class(this.skill_tags[i][0], true); //adds hidden class to all projects
              }
            }

            if (len === 1) {
              this.toggle_class(this.chosen_skill[0], false);
            } else if (len > 1) {
              var elements = document.querySelectorAll("." + this.chosen_skill[0]);
              elements.forEach(function (element) {
                var result = _this2.chosen_skill.every(function (val) {
                  return element.classList.contains(val);
                });

                if (result) {
                  element.classList.remove("hidden");
                }
              });
            }
          }
        }, {
          key: "toggle_class",
          value: function toggle_class(skill, flag) {
            var elements = document.querySelectorAll("." + skill);
            elements.forEach(function (element) {
              element.classList.toggle("hidden", flag);
            });
          }
        }, {
          key: "alert_fadein",
          value: function alert_fadein() {
            var alert = document.getElementById("alert");
            alert.classList.remove("d-none");
            this.skillExist = false;
          }
        }, {
          key: "alert_fadeout",
          value: function alert_fadeout() {
            var _this3 = this;

            var alert = document.getElementById("alert");
            setTimeout(function () {
              _this3.skillExist = true;
              setTimeout(function () {
                alert.classList.add("d-none");
              }, 1000);
            }, 3000);
          }
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)();
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 44,
        vars: 1,
        consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "fixed-top"], [1, "container-fluid"], ["title", "Toggle navigation", "type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ms-auto"], [1, "navbar-toggler-icon"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "py-2"], ["routerLink", "/home", "routerLinkActive", "active", "aria-current", "page", 1, "nav-link", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["routerLink", "/portfolio", "routerLinkActive", "active", 1, "nav-link", "active", "small-txt", "my-1", "ms-auto", "mx-lg-3"], ["target", "_blank", "rel", "noopener noreferrer", "href", "https://drive.google.com/file/d/1juvooQNMBCzWMf_cCjyGVTFOwWlOVk3i/view?usp=sharing", 1, "nav-link", "small-txt", "my-1", "ms-auto", "ms-lg-3", "me-lg-5"], [1, "text-dark", "pb-5"], ["skills", "Angular,Bootstrap,C#,Design,Flask,HTML/CSS,Java,JavaScript,Python,TypeScript,Unity", 3, "filter_skill"], [1, "d-flex", "flex-wrap", "justify-content-center", "mt-3"], ["title", "Personal Website", "skills", "HTML/CSS,Bootstrap,Angular,Design", "image_thumbnail", "/assets/img/portfolio/personal/mockup_website_01.jpg", "link", "https://jasmineirada.com/About", 1, "htmlcss", "bootstrap", "angular", "design"], [1, "footer", "pt-5", "text-dark", "text-center"], [1, "container"], [1, "row"], [1, "col", "mb-5", "mb-lg-0"], [1, "name-custom", "mb-4"], [1, "d-flex", "justify-content-center", "p-0", "mx-0", "mt-2"], ["target", "_blank", "rel", "external", "href", "https://github.com/airada", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Checkout my GitHub", "src", "/assets/img/github-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "external", "href", "https://www.linkedin.com/in/jasmineirada/", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Connect with me on Linkedin", "src", "/assets/img/linkedin-brands.svg", 1, "filter-black"], ["target", "_blank", "rel", "nofollow", "href", "mailto:jasmineirada@gmail.com", 1, "btn", "btn-outline-dark", "me-2"], ["alt", "Send me an email", "src", "/assets/img/envelope-solid.svg", 1, "filter-black"], [1, "copyright", "py-4", "text-center", "text-dark"], [1, "small-txt"], ["alt", "Love", "src", "/assets/img/heart-solid.svg", 1, "filter-red", 2, "height", "1rem"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter_skill", function PortfolioComponent_Template_app_filters_filter_skill_16_listener($event) {
              return ctx.filter($event);
            });

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA9", ctx.year, " ");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__["FiltersComponent"], _project_preview_project_preview_component__WEBPACK_IMPORTED_MODULE_4__["ProjectPreviewComponent"]],
        styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .navbar-brand[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] { font-family: \"Calibri Light\"; font-style: normal; font-variant: normal;  }\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n  font-size: large;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: \"Calibri Light\", -apple-system, BlinkMacSystemFont, \"Segoe UI\",\r\n    Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\r\n  line-height: 1.2;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.small-txt[_ngcontent-%COMP%] {\r\n  font-size: small;\r\n}\r\n\r\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: none;\r\n  padding: none;\r\n}\r\n\r\nsection[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], .copyright[_ngcontent-%COMP%] {\r\n  background-color: #faf9f7;\r\n}\r\n\r\n\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  background-color: #121212;\r\n  color: #faf9f7;\r\n}\r\n\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #faf9f7;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  font-weight: 900;\r\n}\r\n\r\n\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.btn[_ngcontent-%COMP%]:hover   .filter-black[_ngcontent-%COMP%] {\r\n  filter: invert(99%) sepia(53%) saturate(329%) hue-rotate(41deg) brightness(112%) contrast(98%); \r\n}\r\n\r\n.btn-outline-dark[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n.filter-red[_ngcontent-%COMP%] {\r\n  filter: invert(9%) sepia(71%) saturate(5688%) hue-rotate(4deg) brightness(97%) contrast(117%);\r\n}\r\n\r\n\r\n\r\n@media only screen and (min-width: 2560px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 5rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2.5rem;\r\n    margin-top: 2rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 4000px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 14rem;\r\n    width: 14rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 4rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 2559px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: 4rem;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n    margin-top: 1.25rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: 1.25rem;\r\n  }\r\n\r\n  .container-xxxl[_ngcontent-%COMP%] {\r\n    max-width: 1824px;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 10rem;\r\n    width: 10rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%]{\r\n    height: 12rem;\r\n    width: 12rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.5rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 2rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 2em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 1824px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: large;\r\n  }\r\n\r\n  .card-img-top[_ngcontent-%COMP%] {\r\n    height: 6rem;\r\n    width: 6rem;\r\n  }\r\n\r\n  .card-img[_ngcontent-%COMP%] {\r\n    height: 8rem;\r\n    width: 8rem;\r\n  }\r\n\r\n  .nav-link[_ngcontent-%COMP%] {\r\n    font-size: 1.15rem;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.25em;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  h1[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n  }\r\n  \r\n  .subheading[_ngcontent-%COMP%] {\r\n    font-size: 0.90rem;\r\n  }\r\n\r\n  h2[_ngcontent-%COMP%] {\r\n    font-size: normal;\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    font-size: small;\r\n  }\r\n\r\n  .filter-black[_ngcontent-%COMP%] {\r\n    height: 1.5rem;\r\n  }\r\n\r\n  .btn-outline-light[_ngcontent-%COMP%], .btn-outline-dark[_ngcontent-%COMP%] {\r\n    padding: 1.5em;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O1lBT1ksNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEdBQUc7O0FBRXJGO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFOztnRkFFOEU7RUFDOUUsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3Qkc7O0FBRUg7O0VBRUU7O0FBRUY7RUFDRSw4RkFBOEYsRUFBRSxZQUFZO0FBQzlHOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkZBQTZGO0FBQy9GOztBQUNBOztFQUVFOztBQUVGO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbi5uYXZiYXItYnJhbmQsXHJcbi5uYXYtbGluayB7IGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIjsgZm9udC1zdHlsZTogbm9ybWFsOyBmb250LXZhcmlhbnQ6IG5vcm1hbDsgIH1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhbGlicmkgTGlnaHRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsXHJcbiAgICBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsXHJcbiAgICBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5zbWFsbC10eHQge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbnVsLFxyXG5saSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogbm9uZTtcclxuICBwYWRkaW5nOiBub25lO1xyXG59XHJcblxyXG5zZWN0aW9uLFxyXG5mb290ZXIsIC5jb3B5cmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWY5Zjc7XHJcbn1cclxuXHJcbi8qIFxyXG5OQVZCQVJcclxuICovXHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xyXG4gIGNvbG9yOiAjZmFmOWY3O1xyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmFmOWY3O1xyXG59XHJcblxyXG4ubmF2YmFyLW5hdiwgLm5hdi1saW5rIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLm5hdmJhci1uYXYgbGkgYSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLyogXHJcblBST0pFQ1RTXHJcbiAqL1xyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogLmFsZXJ0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6N3ZoO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmXHJcbn1cclxuXHJcbi5hbGVydC1kYW5nZXIge1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIGhyIHtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjZjFiMGI3O1xyXG59XHJcblxyXG4uYWxlcnQtZGFuZ2VyIC5hbGVydC1saW5rIHtcclxuICBjb2xvcjogIzQ5MTIxNztcclxufSAqL1xyXG5cclxuLyogXHJcbklDT05TXHJcbiAqL1xyXG5cclxuLmJ0bjpob3ZlciAuZmlsdGVyLWJsYWNrIHtcclxuICBmaWx0ZXI6IGludmVydCg5OSUpIHNlcGlhKDUzJSkgc2F0dXJhdGUoMzI5JSkgaHVlLXJvdGF0ZSg0MWRlZykgYnJpZ2h0bmVzcygxMTIlKSBjb250cmFzdCg5OCUpOyAvKiAjZmFmOWY3ICovXHJcbn1cclxuXHJcbi5idG4tb3V0bGluZS1kYXJrIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5maWx0ZXItcmVkIHtcclxuICBmaWx0ZXI6IGludmVydCg5JSkgc2VwaWEoNzElKSBzYXR1cmF0ZSg1Njg4JSkgaHVlLXJvdGF0ZSg0ZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoMTE3JSk7XHJcbn1cclxuLyogXHJcbk1FRElBIFFVRVJJRVNcclxuICovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1NjBweCkge1xyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YmhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXh4eGwge1xyXG4gICAgbWF4LXdpZHRoOiA0MDAwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMTJyZW07XHJcbiAgICB3aWR0aDogMTJyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgd2lkdGg6IDE0cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItYmxhY2sge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1vdXRsaW5lLWxpZ2h0LC5idG4tb3V0bGluZS1kYXJrIHtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjU1OXB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAuY29udGFpbmVyLXh4eGwge1xyXG4gICAgbWF4LXdpZHRoOiAxODI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWctdG9wIHtcclxuICAgIGhlaWdodDogMTByZW07XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWd7XHJcbiAgICBoZWlnaHQ6IDEycmVtO1xyXG4gICAgd2lkdGg6IDEycmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1ibGFjayB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODI0cHgpIHtcclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgd2lkdGg6IDZyZW07XHJcbiAgfVxyXG5cclxuICAuY2FyZC1pbWcge1xyXG4gICAgaGVpZ2h0OiA4cmVtO1xyXG4gICAgd2lkdGg6IDhyZW07XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1ibGFjayB7XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICB9XHJcblxyXG4gIC5idG4tb3V0bGluZS1saWdodCwuYnRuLW91dGxpbmUtZGFyayB7XHJcbiAgICBwYWRkaW5nOiAxLjI1ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIH1cclxuICBcclxuICAuc3ViaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDAuOTByZW07XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICB9XHJcblxyXG4gIC5maWx0ZXItYmxhY2sge1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLW91dGxpbmUtbGlnaHQsLmJ0bi1vdXRsaW5lLWRhcmsge1xyXG4gICAgcGFkZGluZzogMS41ZW07XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-portfolio",
            templateUrl: "./portfolio.component.html",
            styleUrls: ["./portfolio.component.css"],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('alert', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 1
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0
            })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('open => closed', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s ease-out')]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('closed => open', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.5s ease-in')])])]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map