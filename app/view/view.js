sounding.value("ViewValues", {
    currentTime: 0,
    // default setup for Break, Break, Break
    showManuscripts: [
        {
            manifest: "data/breakbreakbreak.js", // relative path or URI
            canvas: 0, //index in manifest or URI
            selector: "" // default xywh for display
        }
    ],
    showAudio: {
        sources: [{
            src: "media/Recording4.m4a", // relative path or URI
            type: "audio/mpeg"
        }],
        label: "Recording 4",
        time: 0 // default beginning time
    }
});
sounding.service("ViewService", function ($http) {
    var service = this;
    this.fetchManifest = function (url) {
        return $http.get(url);
    };
});
sounding.controller("viewController", function ($scope, ViewService, ViewValues, Lists, MANIFESTS, TEXT, $cacheFactory, RERUM) {
    $scope.vv = ViewValues;
    $scope.manifests = MANIFESTS;
    $scope.text = TEXT;
    var textCache = $cacheFactory.get('textCache') || $cacheFactory('textCache');
    if (!$scope.manifest) {
        $scope.manifest = MANIFESTS[2];
    }
    $scope.rerum = RERUM;
    $scope.pickM = function (m) {
        $scope.manifest = m;
    };
    $scope.lockAnnotations = function () {
        ViewValues.lockAnnotations = ViewValues.revealAnnotations = !ViewValues.lockAnnotations;
    };
    $scope.seekTo = function (on) {
        var time = ViewValues[on] || on.substring(on.lastIndexOf("#t=") + 3).split(",");
        ViewValues[on] = time;
        ViewValues.wav.seekTo(time[0] / ViewValues.wav.getDuration());
    };
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
    $scope.inTime = function (on, time) {
        if (on) {
            var t = ViewValues[on] || on.substring(on.lastIndexOf("#t=") + 3).split(",");
            if (isNaN(time)) {
                return t;
            } else {
                return time >= t[0] && time < t[1];
            }
        }
    };
    /**
     * Find the line of poetry currently in focus and show that piece of the
     * engraved score.
     * @param {string} idPrefix search in @id for selector
     * @returns {String} @id and selector for canvas slice
     */
    $scope.findCanvas = function (idPrefix) {
        var selector, line, i;
        for (i = 0; i < TEXT.lines.length; i++) {
            for (var m = 0; m < TEXT.lines[i]['oa:hasTarget'].length; m++) {
                if (TEXT.lines[i]['oa:hasTarget'][m].startsWith("EngPiano")) {
                    if ($scope.inTime(TEXT.lines[i]['oa:hasTarget'][m], ViewValues.currentTime)) {
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
            for (i = 0; i < line['oa:hasTarget'].length; i++) {
                if (line['oa:hasTarget'][i].startsWith(idPrefix)
                    && line['oa:hasTarget'][i].indexOf("#xywh") > 0) {
                    selector = line['oa:hasTarget'][i];
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
            for (var m = 0; m < TEXT.lines[i]['oa:hasTarget'].length; m++) {
                if (TEXT.lines[i]['oa:hasTarget'][m].indexOf("EngPiano") === 0) {
                    if ($scope.inTime(TEXT.lines[i]['oa:hasTarget'][m], ViewValues.currentTime)) {
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
            for (var i = 0; i < line['oa:hasTarget'].length; i++) {
                if (line['oa:hasTarget'][i].indexOf("HMS") === 0
                    && line['oa:hasTarget'][i].indexOf("#offset=") > 0) {
                    offset = line['oa:hasTarget'][i].substr((line['oa:hasTarget'][i].lastIndexOf("#offset=") + 8)).split(",");
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
        }
    };
    $scope.allAtTime = function(time,music){
        if(isNaN(time) || !music){return false;}
        return function(entry){
            var ts = [].concat(entry["oa:hasTarget"],entry.on,entry.resource,entry["oa:hasBody"]);
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
        }
    };
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