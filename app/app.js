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
                .when('/manuscript/:id', {
                    templateUrl: 'app/view/viewManuscript.html',
                    controller: 'viewController',
                    resolve: {
                        authkey: function ($route) {
                            return authorize($route);
                        },
                        load: function ($route, MANIFESTS, ViewValues, RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS, RERUM) {
                            var everything = MANIFESTS.concat(RESOURCES, TEXT, ANNOTATIONS, ESSAYS, AGENTS);

                            angular.forEach(everything, function (obj) {
                                RERUM.extractResources(obj);
                            });
                            var m = $route.current.params.id;
                            var t = $route.current.params.t;
                            ViewValues.manifest = (m)
                            ? RERUM.getResource(m)
                                : MANIFESTS[0]; // default
                            ga('set', 'page', '/viewManuscript.html');
                            ga('send', 'pageview');
                            ga('send', 'event', 'Manuscript', 'view', 'itemID', ViewValues.manifest['@id']);
                            if (t) {
                                    ViewValues.currentTime[ViewValues.manifest.resources[0]]=parseFloat(t);
                                }
                                return ViewValues.manifest;
                            }
                        }
                    })
                .when('/recording/:id', {
                    templateUrl: 'app/view/viewAudio.html',
                    controller: 'viewController',
                    resolve: {
                        authkey: function ($route) {
                            return authorize($route);
                        },
                        load: function ($route, ViewValues, RESOURCES, RERUM) {

                            angular.forEach(RESOURCES, function (obj) {
                                RERUM.extractResources(obj);
                            });
                            var m = $route.current.params.id;
                            var t = $route.current.params.t;
                            ViewValues.recording = (m)
                            ? RERUM.getResource(m)
                                : RESOURCES[0]; // default
                            ga('set', 'page', '/viewAudio.html');
                            ga('send', 'pageview');
                            ga('send', 'event', 'Recording', 'view', 'itemID', ViewValues.recording['@id']);
                            if (t) {
                                    ViewValues.currentTime[ViewValues.recording['@id']]=parseFloat(t);
                                }
                                return ViewValues.recording;
                            }
                        }
                    })
.when('/annotate', {
    templateUrl: 'app/annotation/annotation.html',
                    controller: 'viewController'
                })
                .when('/about', {
                    templateUrl: 'app/static/about.html',
                    controller: 'viewController',
                    resolve: {
                        tracker: function () {
                            ga('set', 'page', '/about.html');
                            ga('send', 'pageview');
                        }
                    }
                })
                .when('/acknowledgments', {
                    templateUrl: 'app/static/acknowledgment.html',
                    controller: 'viewController',
                    resolve: {
                        tracker: function () {
                            ga('set', 'page', '/acknowledgment.html');
                            ga('send', 'pageview');
                        }
                    }
                })
                .when('/permissions', {
                    templateUrl: 'app/static/permissions.html',
                    controller: 'viewController',
                    resolve: {
                        tracker: function () {
                            ga('set', 'page', '/permissions.html');
                            ga('send', 'pageview');
                        }
                    }
                })
                .when('/funding', {
                    templateUrl: 'app/static/funding.html',
                    controller: 'viewController',
                    resolve: {
                        tracker: function () {
                            ga('set', 'page', '/funding.html');
                            ga('send', 'pageview');
                        }
                    }
                })
                .when('/glossary', {
                    templateUrl: 'app/static/glossary.html',
                    controller: 'viewController',
                    resolve: {
                        tracker: function () {
                            ga('set', 'page', '/glossary.html');
                            ga('send', 'pageview');
                        }
                    }
                })
                .when('/history', {
                    templateUrl: 'app/static/history.html',
                    controller: 'viewController',
                    resolve: {
                        tracker: function () {
                            ga('set', 'page', '/history.html');
                            ga('send', 'pageview');
                        }
                    }
                })
                .when('/team', {
                    templateUrl: 'app/static/team.html',
                    controller: 'viewController',
                    resolve: {
                        tracker: function () {
                            ga('set', 'page', '/team.html');
                            ga('send', 'pageview');
                        }
                    }
                })
                .when('/archive', {
                    templateUrl: 'app/static/archive.html',
                    controller: function ($scope, MANIFESTS, RESOURCES, ANNOTATIONS, ESSAYS, TEXT) {
                        $scope.categories = [
                            {label: "Essays", list: []},
                            {label: "“Break, Break, Break”", list: [ESSAYS[9], ESSAYS[0], ESSAYS[2]], isSubcat: true},
                            {label: "Contextual Essays", list: [ESSAYS[1], ESSAYS[3]], isSubcat: true},
                            {label: "Manuscripts", list: []}, // subcats follow
                            {label: "Music", list: [
                            MANIFESTS[2],
                            MANIFESTS[5],
                            MANIFESTS[6],
                            MANIFESTS[1],
                            MANIFESTS[3],
                            MANIFESTS[0]
                            ],isSubcat:true},
                            {label: "Poems", list: [MANIFESTS[4]],isSubcat:true},
                            {label: "Letters to Emily and Hallam Tennyson", list: [MANIFESTS[7]], isSubcat: true},
                            {label: "Earwitness Accounts", list: ESSAYS.slice(4)},
                            {label: "Text", list: [TEXT[0]]}
//                            ,
//                            {label: "Annotations", list: [ANNOTATIONS[0]]}
                        ];

                                                ga('set', 'page', '/archive.html');
                            ga('send', 'pageview');
 }
                })
                .when('/music', {
                    templateUrl: 'app/static/music.html',
                    controller: function ($scope, MANIFESTS, RESOURCES, RERUM,Lists) {
                        $scope.music = {
                            "Break_Break_Break_AET": ["AET-MSS-5321-001", "AET-MSS-5312-001", "AET-MSS-5312-002", "AET-MSS-2015-001"],
                            "Break_Break_Break_Janotha":["AET-MSS-2843-001"],
                            "Break_Break_Break_Henschel":["AET-MSS-1880-001"]
                        };
                        $scope.performances = RESOURCES;
                        angular.forEach($scope.music, function(r,m){
                            angular.forEach(r, function(man,i){
                                $scope.music[m][i]=Lists.getAllByProp("@id",man,MANIFESTS)[0];
                            });
                        });
                        $scope.Lists = Lists;
                                                ga('set', 'page', '/music.html');
                            ga('send', 'pageview');
                            }
                })
                .when('/essays', {
                    templateUrl: 'app/static/essays.html',
                    controller: function ($scope, ESSAYS, Lists) {
                        $scope.essays = ESSAYS;
                        $scope.Lists = Lists;
                        $scope.categories = [
                        {
                            label: '“Break, Break, Break”',
                                list: [ESSAYS[9], ESSAYS[0], ESSAYS[2]]
                        },{
                            label: 'Contextual Essays',
                            list:[ESSAYS[1],ESSAYS[3]]
                        }
                        ];
                            ga('set', 'page', '/essays.html');
                            ga('send', 'pageview');
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
                            ga('set', 'page', '/viewAnnotation.html');
                            ga('send', 'pageview');
                            ga('send', 'event', 'Annotation', 'view', 'itemID', ViewValues.annotation['@id']);
                        }
                    }
                })
                .otherwise(({redirectTo: '404'}));
        }]);
sounding.controller('mainController', function ($scope, ViewValues) {
});

sounding.directive('stFooter', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/components/footer.html'
    };
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