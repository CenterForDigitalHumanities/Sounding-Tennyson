
/* global angular, sounding */

sounding.controller('makeAnnotationController', function ($scope, ViewValues, ViewService, MANIFESTS) {
    $scope.manifests = MANIFESTS;
// Load dummy data or import from augmented_notes_data
    var augmented_notes_data = {
        "pages": [{
                "measure_ends": [5.2400000000000002, 8.6999999999999993, 11.49, 14.42, 16.949999999999999, 20.120000000000001, 21.98, 24.41, 27.600000000000001, 30.289999999999999, 33.299999999999997, 36.259999999999998, 39.079999999999998, 42.82, 46.939999999999998, 50.479999999999997, 54.130000000000003, 55.490000000000002, 57.549999999999997, 58.450000000000003, 59.030000000000001],
                "measure_bounds": [[138, 736, 304, 107], [492, 722, 386, 122], [753, 464, 386, 168], [1064, 690, 365, 175], [1465, 675, 383, 172], [81, 1498, 304, 150], [431, 1312, 290, 161], [438, 1530, 293, 150], [753, 1316, 250, 182], [767, 1541, 236, 147], [1043, 1294, 301, 254], [1390, 1294, 161, 401], [1633, 1309, 240, 179], [206, 1770, 204, 186], [442, 1773, 512, 236], [1000, 1777, 519, 232], [1572, 1806, 336, 222], [202, 1981, 208, 200], [456, 2052, 143, 168], [657, 2042, 633, 190], [1361, 2070, 469, 222]]
            }]};
    $scope.parseAnnotations = function (pageText) {
        var annos;
        if (!pageText)
            pageText = "nothing";
        var index = pageText.indexOf("mented_notes_data = ");
        if (index === -1) {
            annos = augmented_notes_data; // DEBUG, default dummy
        } else {
            var endIndex = pageText.indexOf(";", index);
            try {
                annos = JSON.parse(pageText.substring(index + 20, endIndex));
            } catch (erR) {
                console.error("String is not JSON");
                annos = augmented_notes_data; // DEBUG, default dummy
            }
        }
        angular.forEach(annos.pages, function (p, index) {
            var image = document.getElementById("image");
            var ratio = $scope.vv.annotating.width / image.naturalWidth;
            for (var i = 0; i < p.measure_ends.length; i++) {
                var xywh = [p.measure_bounds[i][0] * ratio, p.measure_bounds[i][1] * ratio, p.measure_bounds[i][2] * ratio, p.measure_bounds[i][3] * ratio].join(",");
                $scope.vv.annotating.otherContent[1]['@list'].push({
                    "@id": i,
                    "@type": "oa:Annotation",
                    motivation: "sc:painting",
                    label: "",
                    on: ["RB1#xywh=" + xywh, "RBPiano#t=" + (p.measure_ends[i - 1] || 0) + "," + p.measure_ends[i]]
                });
            }
        });
    };
});
sounding.directive('xmlDiv', function ($sce) {
    return {
        restrict: 'E',
        scope: {
            xml: '='
        },
        link: function (scope, $element) {
            var xmlDoc = new XMLHttpRequest();
            xmlDoc.open('GET', scope.xml.resource);
            xmlDoc.onreadystatechange = function () {
                if (xmlDoc.readyState === 4) {
                    applyStyle(xmlDoc);
                }
            };

            function applyStyle (xmlDoc) {
                var xsl = new XMLHttpRequest();
                var xsltProcessor = new XSLTProcessor();
                xsl.open('GET', scope.xml.style);
                xsl.onreadystatechange = function () {
                    if (xsl.readyState === 4) {
                        xsltProcessor.importStylesheet(xsl.responseXML);
                        var fragment = xsltProcessor.transformToFragment(xmlDoc.responseXML, document);
                        $element.prepend(fragment);
                        scope.$apply();
                    }
                };
                xsl.send();
            }
            xmlDoc.send();
        }
    };
});

sounding.directive('drawBox', function () {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            var drawing = false;
            var newAnnotation, startX, startY, currentX, currentY;

            $element.bind('mousedown', function (event) {
                startX = event.offsetX;
                startY = event.offsetY;
                // begins new box
                newAnnotation = $element.after("<div class='bookmark bg-info'></div>");
                drawing = true;
            });

            $element.bind('mousemove', function (event) {
                if (drawing) {
                    // get current mouse position
                    currentX = event.offsetX;
                    currentY = event.offsetY;
                    if (currentY > startY) {
                        newAnnotation.css({
                            top: startY + "px",
                            height: currentY - startY + "px"
                        })
                    } else {
                        newAnnotation.css({
                            top: currentY + "px",
                            height: startY - currentY + "px"
                        })
                    }
                    if (currentX > startX) {
                        newAnnotation.css({
                            width: currentX - startX + "px",
                            left: startX + "px"
                        });
                    } else {
                        newAnnotation.css({
                            width: startX - currentX + "px",
                            left: currentX + "px"
                        });
                        $scope.$apply();
                    }
                }
            });
            $element.bind('mouseup', function (event) {
                // stop drawing
                drawing = false;
            });
        }
    };
});

sounding.directive('selector', function () {
    return {
        scope: {
            selector: "=",
        },
        controller: function ($scope, $element, $cacheFactory, RERUM) {
            // tiny white pic
//            $element.attr('src', "data:image/gif;base64,R0lGODlhBAABAIAAAP///////yH5BAEAAAEALAAAAAAEAAEAAAIChFEAOw==");
            var cache = $cacheFactory.get('imageSelector') || $cacheFactory('imageSelector');
            $scope.updateCrop = function () {
                var note = "<div class='help-block text-center bg-secondary'>no image</div>";
                if (!$scope.selector) {
                    $element.next().remove(); // delete any backup <canvas> that has been added
                    $element.after(note); // add "no image" note
                    $element.addClass('ng-hide');
                    return false;
                }
                var dataURL = cache.get("image" + $scope.selector); // dataURL for cropped image
                if(dataURL){
                    try {
                        // has dataURL, let's not rebuild this thing
                        $element.attr('src', dataURL);
                        return;
                    } catch(err){
                        // just run like usual
                    }
                }
                $scope.canvas = RERUM.getResource($scope.selector);
                if (!$scope.canvas.height) {
                    throw "No sc:Canvas loaded with id:" + $scope.canvas;
                }
                var pos = ($scope.selector && ($scope.selector.indexOf("xywh")>1))
                    ? $scope.selector.substr($scope.selector.indexOf("xywh=") + 5).split(",").map(function(a){return parseInt(a);})
                    : [0, 0, $scope.canvas.width, $scope.canvas.height].map(function(a){return parseInt(a);});
                var hiddenCanvas = document.createElement('canvas');
                hiddenCanvas.width = pos[2];
                hiddenCanvas.height = pos[3];
                var ctx = hiddenCanvas.getContext("2d");
                var img = cache.get("img" + $scope.canvas['@id']) || new Image();
                var imgSelectorIndex = $scope.canvas.images[0].resource['@id'].indexOf("#");
                var src = (imgSelectorIndex > -1)
                    ? $scope.canvas.images[0].resource['@id'].substring(0, imgSelectorIndex)
                    : $scope.canvas.images[0].resource['@id'];
                var imgTrim = (imgSelectorIndex > -1)
                    ? $scope.canvas.images[0].resource['@id'].substring(imgSelectorIndex + 6).split(",") // #xywh=
                    : false;
                img.onload = function () {
                    cache.put("img" + $scope.canvas['@id'], img);
                    $element.next().remove(); // delete any backup <canvas> that has been added
                    $element.removeClass('ng-hide');
                    var scale = img.width / $scope.canvas.width;
                    if(imgTrim){
                        scale=imgTrim[2] / $scope.canvas.width;
                        for(var i=0;i<2;i++){
                            if(imgTrim[i]){                 // divide by zero protection
                                pos[i]+=parseInt(imgTrim[i]/scale);
                            }
                        }
                        for(i=2;i<4;i++){
                            pos[i]=pos[i]*scale;
                        }
                    }
                    ctx.drawImage(img, pos[0] * scale, pos[1] * scale, pos[2] * scale, pos[3] * scale, 0, 0, hiddenCanvas.width, hiddenCanvas.height);
                    try {
                        dataURL = cache.put("image"+ $scope.selector,hiddenCanvas.toDataURL());
                        $element.attr('src', dataURL);
                    } catch (err) {
                        // Doesn't serve CORS images, so this doesn't work.
                        // load the canvas itself into the DOM since it is 'tainted'
                        $element.after(hiddenCanvas);
                        var ratio = $element[0].width / hiddenCanvas.width;
                        // BUG: When the img element is hidden, the width is 100, which is often a smaller slice than the screen really allows
                        $element.addClass('ng-hide');
                        hiddenCanvas.width = hiddenCanvas.width * ratio;
                        hiddenCanvas.height = hiddenCanvas.height * ratio;
                        // redraw, after width change
                        ctx.drawImage(img, pos[0] * scale, pos[1] * scale, pos[2] * scale, pos[3] * scale, 0, 0, hiddenCanvas.width, hiddenCanvas.height);
                    }
                };
                img.onerror = function (event) {
                    // CORS H8, probably, load tainted canvas
                    img.crossOrigin = null;
                    img.src = $scope.canvas.images[0].resource['@id'];
                };
                img.crossOrigin = "anonymous";
                img.src = src;
            };
            $scope.$watch('selector', $scope.updateCrop);
        }
    };
});
