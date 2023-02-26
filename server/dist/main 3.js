"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([
  ["main"],
  {
    /***/ 5041:
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppComponent: () => /* binding */ AppComponent,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/router */ 124);

        class AppComponent {
          constructor() {
            this.title = "app";
          }
        }
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };
        AppComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: AppComponent,
            selectors: [["app-root"]],
            decls: 3,
            vars: 0,
            consts: [
              [1, "content"],
              [1, "content__main"],
            ],
            template: function AppComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "div",
                  0
                )(1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  2,
                  "router-outlet"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
              }
            },
            dependencies: [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet,
            ],
            styles: [
              "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */",
            ],
          });

        /***/
      },

    /***/ 6747:
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppModule: () => /* binding */ AppModule,
          /* harmony export */
        });
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(/*! @angular/platform-browser */ 4497);
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
        /* harmony import */ var _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./routes/app-routes.module */ 1364);
        /* harmony import */ var _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! ./modules/graphql.module */ 2504);
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ =
          __webpack_require__(/*! @angular/forms */ 2508);
        /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ =
          __webpack_require__(/*! @angular/common/http */ 8987);
        /* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ./pages/login/login.component */ 4902);
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ./app.component */ 5041);
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../environments/environment */ 2340);
        /* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(/*! @apollo/client/core */ 7156);
        /* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_11__ =
          __webpack_require__(/*! @apollo/client/core */ 4000);
        /* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @apollo/client/link/context */ 4765);
        /* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! @apollo/client/link/error */ 609);
        /* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(/*! apollo-angular */ 26);
        /* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_15__ =
          __webpack_require__(/*! apollo-angular/http */ 3334);
        /* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
        /* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! ./services/auth/auth-guard.service */ 9404);
        /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(/*! @angular/material/list */ 6517);
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(/*! @angular/material/card */ 2156);
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ =
          __webpack_require__(/*! @angular/material/form-field */ 5074);
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ =
          __webpack_require__(/*! @angular/material/input */ 8562);
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__ =
          __webpack_require__(/*! @angular/material/icon */ 7822);
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ =
          __webpack_require__(/*! @angular/material/button */ 4522);
        /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__ =
          __webpack_require__(/*! @angular/material/button-toggle */ 9837);
        /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__ =
          __webpack_require__(/*! @angular/material/snack-bar */ 930);
        /* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__ =
          __webpack_require__(/*! @angular/material/grid-list */ 2642);
        /* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ =
          __webpack_require__(/*! @angular/material/progress-bar */ 1294);
        /* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ =
          __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
        /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ =
          __webpack_require__(/*! @angular/material/paginator */ 6060);
        /* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ =
          __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
        /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ =
          __webpack_require__(/*! @angular/material/table */ 5288);
        /* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__ =
          __webpack_require__(/*! @angular/material/tabs */ 5892);
        /* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ./pages/dashboard/dashboard.component */ 4789
          );
        /* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! ./components/layout/layout.component */ 9520);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(/*! @angular/core */ 2560);

        //Components

        // Enviornment Variables

        // Google OAuth

        // Material

        const errorLink = (0,
        _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_8__.onError)(
          ({ graphQLErrors, networkError, response }) => {
            // React only on graphql errors
            if (graphQLErrors && graphQLErrors.length > 0) {
              if (
                graphQLErrors[0]?.statusCode >= 400 &&
                graphQLErrors[0]?.statusCode < 500
              ) {
                // handle client side error
                console.error(
                  `[Client side error]: ${graphQLErrors[0].message}`
                );
              } else {
                // handle server side error
                console.error(
                  `[Server side error]: ${graphQLErrors[0].message}`
                );
              }
            }
            if (networkError) {
              // handle network error
              console.error(`[Network error]: ${networkError.message}`);
            }
          }
        );
        const basicContext = (0,
        _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_9__.setContext)(
          (_, { headers }) => {
            return {
              headers: {
                ...headers,
                Accept: "charset=utf-8",
                authorization: `Bearer random token`,
                "Content-Type": "application/json",
              },
            };
          }
        );
        function createDefaultApollo(httpLink) {
          const cache =
            new _apollo_client_core__WEBPACK_IMPORTED_MODULE_10__.InMemoryCache(
              {}
            );
          // create http
          const http = httpLink.create({
            uri: `${location.protocol}//${location.host}${_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.serviceEndpoint}`,
          });
          return {
            connectToDevTools:
              !_environments_environment__WEBPACK_IMPORTED_MODULE_4__
                .environment.production,
            assumeImmutableResults: true,
            cache,
            link: _apollo_client_core__WEBPACK_IMPORTED_MODULE_11__.ApolloLink.from(
              [basicContext, errorLink, http]
            ),
            defaultOptions: {
              watchQuery: {
                errorPolicy: "all",
              },
            },
          };
        }
        class AppModule {}
        AppModule.ɵfac = function AppModule_Factory(t) {
          return new (t || AppModule)();
        };
        AppModule.ɵmod =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__[
            "ɵɵdefineNgModule"
          ]({
            type: AppModule,
            bootstrap: [
              _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
            ],
          });
        AppModule.ɵinj =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__[
            "ɵɵdefineInjector"
          ]({
            providers: [
              {
                provide: "SocialAuthServiceConfig",
                useValue: {
                  autoLogin: true,
                  providers: [
                    {
                      id: _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_13__
                        .GoogleLoginProvider.PROVIDER_ID,
                      provider:
                        new _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.GoogleLoginProvider(
                          _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.googleAuthClientId
                        ),
                    },
                  ],
                },
              },
              {
                provide:
                  apollo_angular__WEBPACK_IMPORTED_MODULE_14__.APOLLO_OPTIONS,
                useFactory: createDefaultApollo,
                deps: [
                  apollo_angular_http__WEBPACK_IMPORTED_MODULE_15__.HttpLink,
                ],
              },
              _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__.AuthGuardService,
            ],
            imports: [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
              _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
              _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule,
              _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
              _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
              _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.SocialLoginModule,
              // Material
              _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
              _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule,
              _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
              _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
              _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
              _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
              _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__.MatButtonToggleModule,
              _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__.MatTabsModule,
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule,
              // Material
              _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
              _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule,
              _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
              _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
              _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
              _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
              _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
              _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
              _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__.MatButtonToggleModule,
              _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__.MatTabsModule,
            ],
          });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](
              AppModule,
              {
                declarations: [
                  _app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
                  _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
                  _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__.DashboardComponent,
                  _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__.LayoutComponent,
                ],
                imports: [
                  _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
                  _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutes,
                  _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
                  _modules_graphql_module__WEBPACK_IMPORTED_MODULE_1__.GraphQLModule,
                  _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
                  _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
                  _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_13__.SocialLoginModule,
                  // Material
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
                  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
                  _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule,
                  _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
                  _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
                  _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
                  _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
                  _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
                  _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
                  _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__.MatButtonToggleModule,
                  _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__.MatTabsModule,
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule,
                ],
                exports: [
                  // Material
                  _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
                  _angular_material_card__WEBPACK_IMPORTED_MODULE_21__.MatCardModule,
                  _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormFieldModule,
                  _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInputModule,
                  _angular_material_icon__WEBPACK_IMPORTED_MODULE_34__.MatIconModule,
                  _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButtonModule,
                  _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_25__.MatSnackBarModule,
                  _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_26__.MatGridListModule,
                  _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__.MatProgressBarModule,
                  _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__.MatProgressSpinnerModule,
                  _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginatorModule,
                  _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
                  _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule,
                  _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_32__.MatButtonToggleModule,
                  _angular_material_tabs__WEBPACK_IMPORTED_MODULE_33__.MatTabsModule,
                ],
              }
            );
        })();

        /***/
      },

    /***/ 9520:
      /*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LayoutComponent: () =>
            /* binding */ LayoutComponent,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/router */ 124);

        class LayoutComponent {
          constructor() {
            this.showRightNav = false;
            this.alertSubscription = null;
            this.horizontalPosition = "center";
            this.verticalPosition = "bottom";
          }
          ngOnInit() {}
          ngOnDestroy() {
            this.alertSubscription?.unsubscribe();
          }
          toggleSideNav() {
            this.showRightNav = !this.showRightNav;
          }
        }
        LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
          return new (t || LayoutComponent)();
        };
        LayoutComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: LayoutComponent,
            selectors: [["app-layout"]],
            decls: 3,
            vars: 0,
            consts: [
              [1, "container__content"],
              [1, "container__content-main"],
            ],
            template: function LayoutComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "div",
                  0
                )(1, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  2,
                  "router-outlet"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
              }
            },
            dependencies: [
              _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet,
            ],
            styles: [
              '.container__content[_ngcontent-%COMP%] {\n  top: 50px;\n  position: absolute;\n  width: 100%;\n}\n.container__content[_ngcontent-%COMP%]   .container__content-main[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  grid-column: 2;\n}\n\n@media screen and (min-width: 800px) {\n  .container__content[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 200px auto;\n    grid-template-areas: "side-nav main-content";\n    grid-auto-flow: dense;\n    grid-gap: 0px;\n    top: 50px;\n    position: absolute;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUNOOztBQUlBO0VBQ0U7SUFDSSxhQUFBO0lBQ0EsaUNBQUE7SUFDQSw0Q0FBQTtJQUNBLHFCQUFBO0lBQ0EsYUFBQTtJQUNBLFNBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7RUFESjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9fY29udGVudHtcbiAgdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlOyAgICBcblxuICAuY29udGFpbmVyX19jb250ZW50LW1haW57XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICBncmlkLWNvbHVtbjogMjtcbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODAwcHgpIHtcbiAgLmNvbnRhaW5lcl9fY29udGVudHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInNpZGUtbmF2IG1haW4tY29udGVudFwiO1xuICAgICAgZ3JpZC1hdXRvLWZsb3c6ZGVuc2U7XG4gICAgICBncmlkLWdhcDogMHB4O1xuICAgICAgdG9wOiA1MHB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */',
            ],
          });

        /***/
      },

    /***/ 2504:
      /*!*******************************************!*\
  !*** ./src/app/modules/graphql.module.ts ***!
  \*******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ GraphQLModule: () => /* binding */ GraphQLModule,
          /* harmony export */ createApollo: () => /* binding */ createApollo,
          /* harmony export */
        });
        /* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! apollo-angular */ 26);
        /* harmony import */ var _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @apollo/client/core */ 7156);
        /* harmony import */ var apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! apollo-angular/http */ 3334);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/core */ 2560);

        const uri = "http://localhost:4000/graphql"; // <-- add the URL of the GraphQL server here
        function createApollo(httpLink) {
          return {
            link: httpLink.create({
              uri,
            }),
            cache:
              new _apollo_client_core__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache(),
          };
        }
        class GraphQLModule {}
        GraphQLModule.ɵfac = function GraphQLModule_Factory(t) {
          return new (t || GraphQLModule)();
        };
        GraphQLModule.ɵmod =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineNgModule"
          ]({
            type: GraphQLModule,
          });
        GraphQLModule.ɵinj =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__[
            "ɵɵdefineInjector"
          ]({
            providers: [
              {
                provide:
                  apollo_angular__WEBPACK_IMPORTED_MODULE_2__.APOLLO_OPTIONS,
                useFactory: createApollo,
                deps: [
                  apollo_angular_http__WEBPACK_IMPORTED_MODULE_3__.HttpLink,
                ],
              },
            ],
          });

        /***/
      },

    /***/ 4789:
      /*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DashboardComponent: () =>
            /* binding */ DashboardComponent,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 2560);

        class DashboardComponent {}
        DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
          return new (t || DashboardComponent)();
        };
        DashboardComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: DashboardComponent,
            selectors: [["app-dashboard"]],
            decls: 2,
            vars: 0,
            template: function DashboardComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "p"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
                  1,
                  "Hello World!"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
              }
            },
            styles: [
              "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */",
            ],
          });

        /***/
      },

    /***/ 4902:
      /*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ LoginComponent: () =>
            /* binding */ LoginComponent,
          /* harmony export */
        });
        /* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/router */ 124);
        /* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! @angular/material/snack-bar */ 930);
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/common */ 4666);
        /* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/material/divider */ 1528);
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(/*! @angular/material/card */ 2156);
        /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ =
          __webpack_require__(/*! @angular/material/form-field */ 5074);
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ =
          __webpack_require__(/*! @angular/material/button */ 4522);
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ =
          __webpack_require__(/*! @angular/material/icon */ 7822);

        function LoginComponent_button_7_Template(rf, ctx) {
          if (rf & 1) {
            const _r2 =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              0,
              "button",
              5
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"](
              "click",
              function LoginComponent_button_7_Template_button_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](
                  _r2
                );
                const ctx_r1 =
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                return _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵresetView"
                ](ctx_r1.loginWithGoogle());
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](
              1,
              " Login with Google "
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
              2,
              "mat-icon",
              6
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "login");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
        }
        class LoginComponent {
          constructor(socialAuthService, router, route, snackBar) {
            this.socialAuthService = socialAuthService;
            this.router = router;
            this.route = route;
            this.snackBar = snackBar;
            this.isLoggedin = false;
          }
          ngOnInit() {
            this.socialAuthService.authState.subscribe((user) => {
              this.googleUser = user;
              this.isLoggedin = user != null;
              if (this.isLoggedin) {
                this.router.navigate(["/"]);
              }
              // else
              //   this.snackBar.open("LogIn Failed");
            });
          }

          loginWithGoogle() {
            this.socialAuthService.signIn(
              _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__
                .GoogleLoginProvider.PROVIDER_ID
            );
          }
          logOut() {
            this.socialAuthService.signOut();
          }
        }
        LoginComponent.ɵfac = function LoginComponent_Factory(t) {
          return new (t || LoginComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](
              _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar
            )
          );
        };
        LoginComponent.ɵcmp =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineComponent"
          ]({
            type: LoginComponent,
            selectors: [["app-login"]],
            decls: 8,
            vars: 1,
            consts: [
              [1, "login"],
              [1, "login__card"],
              [1, "login__card--logo"],
              ["src", "/assets/brt-icon-sm.png"],
              [
                "mat-flat-button",
                "",
                "color",
                "primary",
                "type",
                "button",
                3,
                "click",
                4,
                "ngIf",
              ],
              [
                "mat-flat-button",
                "",
                "color",
                "primary",
                "type",
                "button",
                3,
                "click",
              ],
              ["matSuffix", "", "aria-label", "Log into Google"],
            ],
            template: function LoginComponent_Template(rf, ctx) {
              if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  0,
                  "div",
                  0
                )(1, "mat-card", 1)(2, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  3,
                  "img",
                  3
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  4,
                  "div"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](
                  5,
                  "mat-divider"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](
                  6,
                  "mat-card-actions"
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](
                  7,
                  LoginComponent_button_7_Template,
                  4,
                  0,
                  "button",
                  4
                );
                _angular_core__WEBPACK_IMPORTED_MODULE_0__[
                  "ɵɵelementEnd"
                ]()()();
              }
              if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"](
                  "ngIf",
                  ctx.isLoggedin === false
                );
              }
            },
            dependencies: [
              _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf,
              _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard,
              _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions,
              _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix,
              _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton,
              _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon,
            ],
            styles: [
              ".login[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: calc(100vh - 50px);\n  background-color: var(--blueriver);\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%] {\n  width: 100vw;\n  max-width: 500px;\n  max-height: 700px;\n  margin: auto;\n  align-self: center;\n  justify-self: center;\n  top: 50px;\n  display: flex;\n  flex-direction: column;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .login__card--logo[_ngcontent-%COMP%] {\n  justify-self: center;\n  align-self: center;\n  margin-bottom: 10px;\n  flex-basis: 1;\n  display: flex;\n  flex-direction: column;\n  justify-self: center;\n  align-items: center;\n  padding: 20px 0;\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\n  margin: auto;\n  flex-basis: 1;\n  width: 100%;\n}\n.login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%]   .mat-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 20px 0;\n}\n\n@media screen and (min-width: 800px) {\n  .login[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .login[_ngcontent-%COMP%]   .login__card[_ngcontent-%COMP%] {\n    top: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBR0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURSO0FBR1E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRFo7QUFJUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUZaO0FBS1E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FBSFo7O0FBUUE7RUFDSTtJQUNJLGFBQUE7RUFMTjtFQU9NO0lBQ0ksUUFBQTtFQUxWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlcml2ZXIpO1xuXG5cblxuICAgIC5sb2dpbl9fY2FyZCB7XG4gICAgICAgIHdpZHRoOjEwMHZ3O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA3MDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICB0b3A6NTBweDtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5sb2dpbl9fY2FyZC0tbG9nb3tcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgIG1hcmdpbjphdXRvO1xuICAgICAgICAgICAgZmxleC1iYXNpczogMTtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubWF0LWNhcmQtYWN0aW9uc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo4MDBweCkge1xuICAgIC5sb2dpbiB7XG4gICAgICAgIGRpc3BsYXk6ZmxleDtcblxuICAgICAgICAubG9naW5fX2NhcmQge1xuICAgICAgICAgICAgdG9wOjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */",
            ],
          });

        /***/
      },

    /***/ 1364:
      /*!*********************************************!*\
  !*** ./src/app/routes/app-routes.module.ts ***!
  \*********************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AppRoutes: () => /* binding */ AppRoutes,
          /* harmony export */
        });
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(/*! @angular/router */ 124);
        /* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ../pages/login/login.component */ 4902);
        /* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../pages/dashboard/dashboard.component */ 4789
          );
        /* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../components/layout/layout.component */ 9520
          );
        /* harmony import */ var _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../services/auth/auth-guard.service */ 9404);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! @angular/core */ 2560);

        const routes = [
          {
            path: "",
            component:
              _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent,
            canActivate: [
              _services_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.AuthGuardService,
            ],
            runGuardsAndResolvers: "always",
            children: [
              {
                // Main / Home Page
                path: "",
                component:
                  _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent,
              },
            ],
          },
          {
            path: "login",
            component:
              _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
          },
        ];
        class AppRoutes {}
        AppRoutes.ɵfac = function AppRoutes_Factory(t) {
          return new (t || AppRoutes)();
        };
        AppRoutes.ɵmod =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__[
            "ɵɵdefineNgModule"
          ]({
            type: AppRoutes,
          });
        AppRoutes.ɵinj =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__[
            "ɵɵdefineInjector"
          ]({
            imports: [
              _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(
                routes,
                {
                  onSameUrlNavigation: "reload",
                }
              ),
              _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
            ],
          });
        (function () {
          (typeof ngJitMode === "undefined" || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](
              AppRoutes,
              {
                imports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
                ],
                exports: [
                  _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
                ],
              }
            );
        })();

        /***/
      },

    /***/ 9404:
      /*!*****************************************************!*\
  !*** ./src/app/services/auth/auth-guard.service.ts ***!
  \*****************************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ AuthGuardService: () =>
            /* binding */ AuthGuardService,
          /* harmony export */
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! @angular/core */ 2560);
        /* harmony import */ var _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @abacritt/angularx-social-login */ 3218);
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! @angular/router */ 124);

        class AuthGuardService {
          constructor(socialAuthService, router) {
            this.socialAuthService = socialAuthService;
            this.router = router;
          }
          canActivate(route, state) {
            return new Promise((resolve) => {
              this.socialAuthService.authState.subscribe((user) => {
                if (user != null) resolve(user != null);
                else this.router.navigate(["/login"]);
              });
            });
          }
        }
        AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
          return new (t || AuthGuardService)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _abacritt_angularx_social_login__WEBPACK_IMPORTED_MODULE_1__.SocialAuthService
            ),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](
              _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
            )
          );
        };
        AuthGuardService.ɵprov =
          /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__[
            "ɵɵdefineInjectable"
          ]({
            token: AuthGuardService,
            factory: AuthGuardService.ɵfac,
            providedIn: "root",
          });

        /***/
      },

    /***/ 2340:
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ environment: () => /* binding */ environment,
          /* harmony export */
        });
        /* harmony import */ var _shared_confg__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./shared.confg */ 3029);
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.

        const environment = {
          production: false,
          ..._shared_confg__WEBPACK_IMPORTED_MODULE_0__["default"],
        };
        /*
         * For easier debugging in development mode, you can import the following file
         * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
         *
         * This import should be commented out in production mode because it will have a negative impact
         * on performance if an error is thrown.
         */
        // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

        /***/
      },

    /***/ 3029:
      /*!******************************************!*\
  !*** ./src/environments/shared.confg.ts ***!
  \******************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => /* binding */ sharedConfig,
          /* harmony export */
        });
        const sharedConfig = {
          googleAuthClientId:
            "1068443878218-kk375e4311cc3r2rk3b0hn9ukm900tjo.apps.googleusercontent.com",
          mapboxAPIKey:
            "pk.eyJ1IjoiYW50Ymx1ZXJpdmVydGVjaCIsImEiOiJja295a3IwemowbjMwMndwZ2RkdHY2bmJjIn0.xpY0kRQNFTeFgc5l6hqRtQ",
          serviceEndpoint: "/graphql",
        };

        /***/
      },

    /***/ 4431:
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! @angular/platform-browser */ 4497);
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./app/app.module */ 6747);

        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__
          .platformBrowser()
          .bootstrapModule(
            _app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule
          )
          .catch((err) => console.error(err));

        /***/
      },
  },
  /******/ (__webpack_require__) => {
    // webpackRuntimeModules
    /******/ var __webpack_exec__ = (moduleId) =>
      __webpack_require__((__webpack_require__.s = moduleId));
    /******/ __webpack_require__.O(0, ["vendor"], () => __webpack_exec__(4431));
    /******/ var __webpack_exports__ = __webpack_require__.O();
    /******/
  },
]);
//# sourceMappingURL=main.js.map
