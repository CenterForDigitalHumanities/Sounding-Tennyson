angular.module('wavesurfer', [])

    .directive('wavesurfer', function (ViewValues) {
        return {
            restrict: 'E',
            link: function ($scope, $element, $attrs) {
                $element.css('display', 'block');

                var options = angular.extend({container: $element[0]}, $attrs);
                var wavesurfer = WaveSurfer.create(options);

                if ($attrs.url) {
                    wavesurfer.load($attrs.url, $attrs.data || null);
                }
                $scope.$emit('wavesurferInit', wavesurfer);
                // override to get time in Angular
                WaveSurfer.WebAudio.getCurrentTime = function () {
                    var time = this.state.getCurrentTime.call(this);
                    $scope.$evalAsync(function () {
                        ViewValues.currentTime = time;
                    });
                    return time;
                };
                WaveSurfer.seekTo = function (progress) {
                    var paused = this.backend.isPaused();
                    // avoid small scrolls while paused seeking
                    var oldScrollParent = this.params.scrollParent;
                    if (paused) {
                        this.params.scrollParent = false;
                    }
                    this.backend.seekTo(progress * this.getDuration());
                    this.drawer.progress(this.backend.getPlayedPercents());

                    if (!paused) {
                        this.backend.pause();
                        this.backend.play();
                    }
                    this.params.scrollParent = oldScrollParent;
                    this.fireEvent('seek', progress);
                };
            }
        };
    })

    .controller('wavesurferController', function ($scope, ViewValues) {
        ViewValues.wav = $scope.wavesurfer;
        var activeUrl = null;
        $scope.paused = true;
        $scope.$on('wavesurferInit', function (e, wavesurfer) {
            $scope.wavesurfer = wavesurfer;
            ViewValues.wav = $scope.wavesurfer;
            $scope.wavesurfer.on('play', function () {
                $scope.paused = false;
            });
            $scope.wavesurfer.on('pause', function () {
                $scope.paused = true;
            });
            $scope.wavesurfer.on('finish', function () {
                $scope.paused = true;
                $scope.wavesurfer.seekTo(0);
                $scope.$apply();
            });
        });

        $scope.play = function (url) {
            if (!$scope.wavesurfer) {
                return;
            }

            activeUrl = url;

            $scope.wavesurfer.once('ready', function () {
                $scope.wavesurfer.play();
                $scope.$apply();
            });

            $scope.wavesurfer.load(activeUrl);
        };

        $scope.isPlaying = function (url) {
            return url == activeUrl;
        };
    });
