/**
 * @author cubap@slu.edu
 * @file Main AngularJS application and routing for Sounding Tennyson
 * @copyright Copyright 2015 Saint Louis University
 * @disclaimer Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

function authorize ($route) {
    return true;
    if (!window.authorized) {
        var key = $route.current.params.authKey;
        while (key !== 'Lurgashall') {
            key = prompt("Authorization Required");
        }
    }
    return window.authorized = true;
}
;

var sounding = angular.module('sounding',
    ['ui.bootstrap', 'ngRoute', 'ngAnimate', 'ngSanitize', 'utils', 'ui.sortable', 'angular-loading-bar', 'wavesurfer'])
    .config(['$routeProvider',
        function ($routeProvider, $locationProvider, Edition) {
            $routeProvider
                .when('/break', {
                    templateUrl: 'app/view/base.html',
                    controller: 'viewController',
                    resolve: {
                        authkey: function ($route) {
                            return authorize($route);
                        },
                        load: function (MANIFESTS, RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS, RERUM) {
                            var everything = MANIFESTS.concat(RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS);
                            angular.forEach(everything, function (obj) {
                                RERUM.extractResources(obj);
                            });
                        }
                    }
                })
                .when('/annotate', {
                    templateUrl: 'app/annotation/annotation.html',
                    controller: 'viewController'
                })
                .when('/about', {
                    templateUrl: 'app/static/about.html',
                    controller: 'viewController'
                })
                .when('/acknowledgments', {
                    templateUrl: 'app/static/acknowledgment.html',
                    controller: 'viewController'
                })
                .when('/funding', {
                    templateUrl: 'app/static/funding.html',
                    controller: 'viewController'
                })
                .when('/glossary', {
                    templateUrl: 'app/static/glossary.html',
                    controller: 'viewController'
                })
                .when('/history', {
                    templateUrl: 'app/static/history.html',
                    controller: 'viewController'
                })
                .when('/team', {
                    templateUrl: 'app/static/team.html',
                    controller: 'viewController'
                })
                .when('/archive', {
                    templateUrl: 'app/static/archive.html',
                    controller: function($scope,MANIFESTS,RESOURCES,ANNOTATIONS,ESSAYS,TEXT){
                        $scope.categories = [
                            { label: "Essays", list:ESSAYS },
                            { label: "Manuscripts", list:MANIFESTS },
                            { label: "Performances", list:RESOURCES },
                            { label: "Text", list:TEXT },
                            { label: "Annotations", list:ANNOTATIONS }
                        ]
                    }
                })
                .when('/welcome', {
                    templateUrl: 'app/view/viewAnnotation.html',
                    controller: 'viewController',
                    resolve: {
                        authkey: function ($route) {
                            return authorize($route);
                        },
                        displayAnnotation: function ($route, ViewValues, RERUM, ANNOTATIONS) {
                            var a = $route.current.params.annotation;
                            ViewValues.annotation = (a)
                                ? RERUM.getResource(a)
                                : ANNOTATIONS[0]; // default to Break, Break observation
                        },
                        load: function (MANIFESTS, RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS, RERUM) {
                            var everything = MANIFESTS.concat(RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS);
                            angular.forEach(everything, function (obj) {
                                RERUM.extractResources(obj);
                            });
                        }
                    }
                })
                .when('/summary/:id', {
                    templateUrl: 'app/view/viewAnnotation.html',
                    controller: 'viewController',
                    resolve: {
                        authkey: function ($route) {
                            return authorize($route);
                        },
                        load: function ($route, ViewValues, RERUM, MANIFESTS, RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS, RERUM) {
                            var everything = MANIFESTS.concat(RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS);
                            angular.forEach(everything, function (obj) {
                                RERUM.extractResources(obj);
                            });
                            // find referenced resource in this mess
                            var a = $route.current.params.id;
                            ViewValues.annotation = (a)
                                ? RERUM.getResource(a)
                                : ANNOTATIONS[0]; // default to Break, Break observation
                        }
                    }
                })
                .otherwise(({redirectTo: '/welcome'}));
        }]);
sounding.controller('mainController', function () {
});




/*! https://mths.be/startswith v0.2.0 by @mathias */
String.prototype.startsWith || !function () {
    "use strict";
    var t = function () {
        try {
            var t = {}, r = Object.defineProperty, e = r(t, t, t) && r
        } catch (n) {
        }
        return e
    }(), r = {}.toString, e = function (t) {
        if (null == this)
            throw TypeError();
        var e = String(this);
        if (t && "[object RegExp]" == r.call(t))
            throw TypeError();
        var n = e.length, i = String(t), a = i.length, o = arguments.length > 1 ? arguments[1] : void 0, h = o ? Number(o) : 0;
        h != h && (h = 0);
        var u = Math.min(Math.max(h, 0), n);
        if (a + u > n)
            return!1;
        for (var g = -1; ++g < a; )
            if (e.charCodeAt(u + g) != i.charCodeAt(g))
                return!1;
        return!0
    };
    t ? t(String.prototype, "startsWith", {value: e, configurable: !0, writable: !0}) : String.prototype.startsWith = e
}();