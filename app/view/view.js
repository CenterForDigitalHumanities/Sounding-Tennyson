/* global angular */

sounding.value("ViewValues", {
    currentTime: {},
    // default setup for Break, Break, Break
    showManuscripts: [
        {
            manifest: "data/breakbreakbreak.js", // relative path or URI
            canvas: 0, //index in manifest or URI
            selector: "" // default xywh for display
        }
    ]
});
sounding.service("ViewService", function ($http, $q) {
    var service = this;
    this.fetchManifest = function (url) {
        return $http.get(url);
    };
    this.fetchXMLDoc = function (url, body) {
        var xmlDoc = new XMLHttpRequest();
        var deferred = $q.defer();
        xmlDoc.open('GET', url);
        xmlDoc.onreadystatechange = function () {
            if (xmlDoc.readyState === 4) {
                if (body) {
                    deferred.resolve(angular.element(xmlDoc.responseXML).find(body));
                }
                deferred.resolve(xmlDoc.responseXML);
            }
        };
        xmlDoc.send();
        return deferred.promise;
    };
});
sounding.directive('xmlDiv', function ($sce, ViewService) {
    return {
        restrict: 'E',
        scope: {
            xml: '='
        },
        controller: 'viewController',
        link: function (scope, $element) {
            ViewService.fetchXMLDoc(scope.xml.resource, scope.xml.view).then(function (xd) {
                applyStyle(xd);
            });

            function applyStyle (xmlDoc) {
                var xsl = new XMLHttpRequest();
                var xsltProcessor = new XSLTProcessor();
                xsl.open('GET', scope.xml.style);
                xsl.onreadystatechange = function () {
                    if (xsl.readyState === 4) {
                        xsltProcessor.importStylesheet(xsl.responseXML);
                        var fragment = xsltProcessor.transformToFragment(xmlDoc, document);
                        $element.prepend($sce.trustAsHtml(fragment));
                        scope.$apply();
                    }
                };
                xsl.send();
            }
        }
    };
});
sounding.directive('scCanvas', function (ViewValues, ViewService) {
    function updateCanvas (scope){
            var newSelection = [];
            angular.forEach(ViewValues.manifest.sequences[0].canvases, function(c, $index){
                if(c.otherContent[0] && scope.inTime(c.otherContent[0].resource)){
                    newSelection.push($index);
                }
            });
            if(newSelection.length===0){
                newSelection=[0];
            }
            ViewValues.selectedCanvas = newSelection;
        };
    return {
        restrict: 'E',
        // scope: {
        //     xml: '='
        // },
        // controller: 'viewController',
        link: function (scope, $element) {
            scope.$watchCollection('vv.currentTime',function(o,n){
                if (o && (o!==n)
                    && ViewValues.manifest.sequences[0].canvases[ViewValues.selectedCanvas].otherContent
                    && (!ViewValues.manifest.sequences[0].canvases[ViewValues.selectedCanvas].otherContent[0]
                    || !scope.inTime(ViewValues.manifest.sequences[0].canvases[ViewValues.selectedCanvas].otherContent[0].resource))){
                    updateCanvas(scope);
                }
            },true)
        }
    };
});

sounding.controller("viewController", function ($scope, $filter, ViewService, ViewValues, Lists, MANIFESTS, RESOURCES, ANNOTATIONS, TEXT, $cacheFactory, RERUM, $rootScope) {
    $scope.Lists = Lists;
    $scope.vv = ViewValues;
    $scope.manifests = MANIFESTS;
    ViewValues.selectedCanvas = [0];
    $scope.performances = [];
    $scope.about = {
        citation: '<div style="text-align:left !important;text-indent: -2rem;padding-left: 2rem;"><i class="fa fa-quote-left fa-2x pull-right"></i> Weliver, Phyllis and Ewan Jones. "About <i>Sounding Tennyson</i>." <i>Sounding Tennyson</i>. 31 March 2016. Accessed ' + $filter('date')(Date.now(), 'dd MMMM yyyy') + '.</div>'
    };
    angular.forEach(RESOURCES,function(r){
        if(r.motivation === 'performance'){
Lists.addIfNotIn(r,$scope.performances);
        }
    });
    $scope.text = TEXT;
    var textCache = $cacheFactory.get('textCache') || $cacheFactory('textCache');
    if (!ViewValues.manifest) {
        ViewValues.manifest = MANIFESTS[2];
    }
    $scope.rerum = RERUM;
    /**
     * @deprecated
    **/
    $scope.pickM = function (m) {
        ViewValues.manifest = m;
    };
    $scope.pickCanvas = function(index){
        ViewValues.selectedCanvas = [index];
        if(ViewValues.manifest.sequences[0].canvases[index].otherContent[0])
        $scope.seekTo(ViewValues.manifest.sequences[0].canvases[index].otherContent[0].resource);
    };
    $scope.lockAnnotations = function () {
        ViewValues.lockAnnotations = ViewValues.revealAnnotations = !ViewValues.lockAnnotations;
    };
    $scope.seekTo = function (on) {
        if(!angular.isArray(on)){
            on=[on]
        }
        for(var i=0; i<on.length;i++){
        var _on = on[i].split("#t=");
        if(!_on[1]){
            continue;
        }
        var time = _on[1].split(",")[0];
        return $rootScope.$broadcast('seekTo', _on[0], time);
    }
    console.warn("Warning: No time discovered in selector.");
    };
/**
 * Find relevant 'on' URI if oa:Annotation from array of
 * on or hasTarget URIs by matching the @id of the intended
 * target.
 * @param array arr URIs to search through
 * @param string target [@id] to search for
 * @return string URI of result or ""
 */
    $scope.thisOn=function(arr,target){
        var on="";
        if(!angular.isArray(arr)){
            arr=[arr];
        }
        if(!angular.isArray(target)){
            target=[target];
        }
        for(var t=0;t<target.length;t++){
            for (var i = arr.length - 1; i >= 0; i--) {
                if (arr[i] && arr[i].startsWith(target[t])) {
                    on=arr[i];
                    break;
                }
            };
        }
        return on;
    }
    /**
     * Convert 'on' URI in oa:Annotation to CSS object.
     * @param string on URI with #xywh to fetch segment
     * @param object c sc:Canvas on which it is applied
     * @return object CSS for use in ng-class directive
     */
    $scope.annotationStyle = function (on, c) {
        var aXYWH = on.lastIndexOf("#xywh=");
        aXYWH = on.substring(aXYWH + 6).split(",");
        return {
            height: (aXYWH[3] / c.height * 100) + "%",
            width: (aXYWH[2] / c.width * 100) + "%",
            left: (aXYWH[0] / c.width * 100) + "%",
            top: (aXYWH[1] / c.height * 100) + "%"
        };
    };
    /**
     * Test if canvas is within audio time or return in/out from audio.on.
     * @param {type} audio resource from scCanvas
     * @param {number} ?time include to check if the current time is in range
     * @return {boolean || array} true false check for value in range or just the times on the selector
     */
    $scope.inTime = function (on) {
        if(!angular.isArray(on)){
            on=[on];
        }
        for(var i=0;i<on.length;i++){
        if (on[i]) {
            var _on = on[i].split("#t=");
            if (!_on[1]) {
                continue;
            }
            var t = ViewValues[on[i]] || _on[1].split(",");
            var time = ViewValues.currentTime[_on[0]];
            if (isNaN(time)) {
                continue;
            } else if(time >= t[0] && time < t[1]){
                return true;
                // TODO: return array of IDs intime for comparison at front
            }
        }
    }
    return false;
    };
 /*   $scope.$watch('vv.currentTime',function(oldVal,newVal){
        if(oldVal                       // not init
            && (oldVal!==newVal)        // playing
            && !$scope.inTime($scope.manifest.sequences[0].canvases[ViewValues.selectedCanvas].otherContent[0].resource)){
            var newSelection = [];
            angular.forEach($scope.manifest.sequences[0].canvases, function(c, $index){
                if($scope.inTime(c.otherContent[0].resource)){
                    newSelection.push($index);
                }
            });
            ViewValues.selectedCanvas = newSelection;
        }
    });*/
    /**
     * Find the line of poetry currently in focus and show that piece of the
     * engraved score.
     * @param {string} idPrefix search in @id for selector
     * @returns {String} @id and selector for canvas slice
     */
    $scope.findCanvas = function (idPrefix) {
        var selector, line, i;
        for (i = 0; i < TEXT.lines.length; i++) {
            for (var m = 0; m < TEXT.lines[i]['on'].length; m++) {
                if (TEXT.lines[i]['on'][m].startsWith("EngPiano")) {
                    if ($scope.inTime(TEXT.lines[i]['on'][m], ViewValues.currentTime)) {
                        line = TEXT.lines[i];
                        break;
                    }
                }
            }
            if (line) {
                break;
            }
        }
        if (line) {
            for (i = 0; i < line['on'].length; i++) {
                if (line['on'][i].startsWith(idPrefix)
                    && line['on'][i].indexOf("#xywh") > 0) {
                    selector = line['on'][i];
                    break;
                }
            }
        }
        return selector;
    };
    /**
     * Use the current position of the audio to find the text associated and
     * display it onscreen.
     * @returns {String} line of text at current audio mark
     */
    $scope.readAt = function () {
        var text, offset, line;
        for (var i = 0; i < TEXT.lines.length; i++) {
            for (var m = 0; m < TEXT.lines[i]['on'].length; m++) {
                if (TEXT.lines[i]['on'][m].indexOf("EngPiano") === 0) {
                    if ($scope.inTime(TEXT.lines[i]['on'][m], ViewValues.currentTime)) {
                        line = TEXT.lines[i];
                        break;
                    }
                }
            }
            if (line) {
                break;
            }
        }
        if (line) {
            if (textCache.get(line['@id'])) {
                return textCache.get(line['@id']);
            }
            for (var i = 0; i < line['on'].length; i++) {
                if (line['on'][i].indexOf("publishedText") === 0
                    && line['on'][i].indexOf("#offset=") > 0) {
                    offset = line['on'][i].substr((line['on'][i].lastIndexOf("#offset=") + 8)).split(",");
                    text = textCache.put(line['@id'], TEXT['@value'].substring(offset[0], offset[1]));
                    break;
                }
            }
        }
        return text;
    }

    /**
     * Return the text bounded as Target for annotation.
     * @param {Object} anno with offset selector on major object
     * @returns {string} text
     */
    $scope.getText = function (anno) {
        var text, offset, sel;
        var anno = RERUM.getResource(anno);
        if (textCache.get(anno['@id'])) {
            return textCache.get(anno['@id']);
        }
        sel = anno.resource['@id']||anno.resource;
        offset = sel.substr(sel.lastIndexOf("offset=") + 7).split(",");
        text = RERUM.getResource(anno.resource)['@value'].substring(offset[0], offset[1]);
        return text;
    };
    $scope.sameRef = function(anno){
        var body = anno['oa:hasBody'] || anno.resource || anno;
        if(!body){return false;}
        body=body.split("#")[0];
        return function(descendant,k){
            var d = RERUM.getResource(descendant);
            if(d[k]){
                var key = (angular.isArray(d[k])) ? d[k] : [d[k]];
                for(var i=0;i<key.length;i++){
                    if(key[i].startsWith(body)){
                        return true;
                    }
                }
            }
            return false;
        };
    };
    $scope.allAtTime = function(time,music){
        if(isNaN(time) || !music){return false;}
        return function(entry){
            var ts = [].concat(entry["on"],entry.on,entry.resource,entry["oa:hasBody"]);
            var t;
            while(ts.length){
                t=ts.pop();
                if(!t) continue;
                var tid = t['@id']||t;
                    if(tid.startsWith(music['@id']) && $scope.inTime(tid, time)) {
                        // keep looking if not inTime, since there may be several references
                            return true;
                        }
                    }
            return false;
        };
    };
    ViewValues.lines = ViewValues.lines = (function () {
        var lines = {};
        var annotations = [];
        var rows = [];
        angular.forEach(MANIFESTS, function (m) {
            angular.forEach(m.sequences[0].canvases, function (c) {
                angular.forEach(c.otherContent, function (a) {
                    if (a['@list']) {
                        annotations = annotations.concat(a['@list']);
                    }
                });
            });
        });
        angular.forEach(annotations, function (a) {
            if(a.on){
                if(!angular.isArray(a.on)){
                    a.on = [a.on];
                }
                for (var i = 0; i < a.on.length; i++) {
                    var _ton = a.on[i].split("#t=");
                    if (_ton[1]) {
                        // found a time clip, so get the canvas on
                        for (var j = 0; j < a.on.length; j++) {
                            var _con = a.on[j].split("#xywh=");
                            if (_con[1]) {
                                var canvas = RERUM.getResource(_con[0]);
                                var pos = _con[1].split(",");
                                rows.push({
                                    mid: _ton,
                                    label: _con[0],
                                    selector: _con[0] + "#xywh=0," + pos[1] + "," + canvas.width + "," + pos[3]
                                });
                                break;
                            }
                        }
                        break; // one match per anno
                    }
                }
            }
        });
        angular.forEach(RESOURCES, function(r){
            lines[r['@id']] = [];
            angular.forEach(rows, function(row){
                if(row.mid[0] === r['@id']){
                    lines[r['@id']].push(row);
                }
            });
        });
        return lines;
    })();
    $scope.findManifest = function(cid,prop){
        var manifest;
        for(var i=0;i<MANIFESTS.length;i++){
            var c = MANIFESTS[i].sequences[0].canvases;
            for(var j=0;j<c.length;j++){
                if(c[j]['@id']===cid){
                    manifest = prop ? MANIFESTS[i][prop] : MANIFESTS[j];
                    return manifest;
                }
            }
        }
        return manifest;
    };

//    $scope.getLines = function (music) {
//        var selector = function (annos, canvas) {
//            for (var i = 0; i < annos.length; i++) {
//                var _ons = annos[i].on;
//                if (!angular.isArray(_ons)) {
//                    _ons = [_ons];
//                }
//                for (var j = 0; j < _ons.length; j++) {
//                    if ($scope.inTime(_ons[j])) {
//                        // make a row selector
//                        var pos = _ons[j].split(",");
//                        var sel = canvas['@id'] + "#xywh=0,"
//                            + pos[1] + ","
//                            + canvas.width + ","
//                            + pos[3];
//                        return sel;
//                    }
//                }
//            }
//        }
//        var lines = [];
//        angular.forEach(MANIFESTS,function(m){
//            if((m.resources[0]['@id'] || m.resources[0]) === music['@id']){
//                // TODO: look through array for the match
//                for (var i = 0; i < m.sequences[0].canvases.length; i++) {
//                    if (m.sequences[0].canvases[i].otherContent[0]
//                        && $scope.inTime(m.sequences[0].canvases[i].otherContent[0].resource)) {
//                        if (!m.sequences[0].canvases[i].otherContent[1]) {
//                            break;
//                            // No augmented notes applied yet.
//                        }
//                        var annos = m.sequences[0].canvases[i].otherContent[1]['@list'];
//                        var width = m.sequences[0].canvases[i].width;
//                        var line = {
//                            label: m.label,
//                            selector: selector(annos, m.sequences[0].canvases[i])
//                        };
//                        if (line.selector) {
//                            lines.push(line);
//                        }
//                        break; // stop looking after the first
//                    }
//                }
//            }
//        });
//        return lines;
//    };
    $scope.$watch('vv.showManuscripts', function () {
        angular.forEach(ViewValues.showManuscripts, function (m) {
            var index = Lists.indexBy(m.manifest, "path", $scope.manifests);
            if (index === -1) {
                // ViewService.fetchManifest(m.manifest)
                //     .success(function (manifest) {
                //         manifest.path = m.manifest;
                //         $scope.manifests.push(manifest);
                //     });
            }
        });
    });
});
sounding.directive('revealAnnotations', function (ViewValues, $document) {
    return {
        restrict: 'A',
        link: function ($scope, $element) {
            function revealCtrl (e) {
                if (!ViewValues.lockAnnotations) {
                    $scope.$evalAsync(function () {
                        ViewValues.revealAnnotations = e.ctrlKey;
                    });
                }
            }
            $document.bind('keydown', revealCtrl);
            $document.bind('keyup', revealCtrl);
        }
    };
});