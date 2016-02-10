/* global sounding */

sounding.value('RESOURCES', [{
        "@id": "Break_Break_Break_Janotha",
        "@type": "oa:Annotation",
        "label": "Break, Break, Break (Janotha)",
        "motivation": "performance",
        "resource": {
            "@id": "media/audio/Break_Break_Break_Janotha.mp3",
            "@type": "dctypes:Sound",
            "format": "audio/mpeg"
        }
    }, {
        "@id": "Break_Break_Break_AET",
        "@type": "oa:Annotation",
        "label": "Break, Break, Break (AET)",
        "motivation": "performance",
        "resource": {
            "@id": "media/audio/Break_Break_Break_AET.mp3",
            "@type": "dctypes:Sound",
            "format": "audio/mpeg"
        }
    }]);
sounding.value('MANIFESTS', [
// {
//         "@id": "MusicAlbum",
//         "@context": "http://iiif.io/api/presentation/2/context.json",
//         "@type": "sc:Manifest",
//         "label": "Music Album (5312 first drafts)",
//         "sequences": [{
//                 "@id": "music album sequence",
//                 "@type": "sc:Sequence",
//                 "canvases": [{
//                         "label": "3r",
//                         "@id": "MA1",
//                         "width": 956,
//                         "height": 1198,
//                         "@type": "sc:Canvas",
//                         "images": [{
//                                 "@type": "oa:Annotation",
//                                 "motivation": "sc:painting",
//                                 "on": "MA1",
//                                 "resource": {
//                                     "format": "image/jpeg",
//                                     "height": 3594,
//                                     "width": 2868,
//                                     "@id": "media/5312_fo3r.jpg",
//                                     "@type": "dcterms:Image"
//                                 }
//                             }]
//                     }, {
//                         "label": "3v",
//                         "@id": "MA2",
//                         "width": 1336,
//                         "height": 1815,
//                         "@type": "sc:Canvas",
//                         "images": [{
//                                 "@type": "oa:Annotation",
//                                 "motivation": "sc:painting",
//                                 "on": "MA2",
//                                 "resource": {
//                                     "format": "image/jpeg",
//                                     "height": 3630,
//                                     "width": 2672,
//                                     "@id": "media/5312_fo3v-4r.jpg#xywh=0,0,2672,3630",
//                                     "@type": "dcterms:Image"
//                                 }
//                             }]
//                     }, {
//                         "label": "4r",
//                         "@id": "MA3",
//                         "width": 1422,
//                         "height": 1815,
//                         "@type": "sc:Canvas",
//                         "images": [{
//                                 "@type": "oa:Annotation",
//                                 "motivation": "sc:painting",
//                                 "on": "MA3",
//                                 "resource": {
//                                     "format": "image/jpeg",
//                                     "height": 3630,
//                                     "width": 2844,
//                                     "@id": "media/5312_fo3v-4r.jpg#xywh=2670,0,2844,3630",
//                                     "@type": "dcterms:Image"
//                                 }
//                             }]
//                     }, {
//                         "label": "4v",
//                         "@id": "MA4",
//                         "width": 850,
//                         "height": 1082,
//                         "@type": "sc:Canvas",
//                         "images": [{
//                                 "@type": "oa:Annotation",
//                                 "motivation": "sc:painting",
//                                 "on": "MA4",
//                                 "resource": {
//                                     "format": "image/jpeg",
//                                     "height": 3246,
//                                     "width": 2551,
//                                     "@id": "media/5312_fo4v.jpg",
//                                     "@type": "dcterms:Image"
//                                 }
//                             }]
//                     }]
//             }]
//     },
    {
        "@id": "RB_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'AET, "Break," draft 1 (5321)',
        "description": '"Break, Break, Break", music by Emily Tennyson, words by Alfred Tennyson, red MS music album. TRC/Music/5321, ff 3r-4v. Lincolnshire County Council, UK.',
        "resources": ["Break_Break_Break_AET"],
        "layers": ["PianoLayer"],
        "sequences": [{
                "@id": "music album normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "3r",
                        "@id": "RB0",
                        "width": 1504,
                        "height": 1888,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB0",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 1888,
                                    "width": 1504,
                                    "@id": "media/album/r5321_fo3r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": []
                    }, {
                        "label": "3v",
                        "@id": "RB1",
                        "width": 1384,
                        "height": 1832,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 1832,
                                    "width": 1384,
                                    "@id": "media/album/r5321_fo3v.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                            "@id":"rb1audio",
                            "@type":"oa:Annotation",
                                "label": "page 1",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_AET#t=0,9",
                                "on": "RB1",
                                "within": "PianoLayer"
                        }]
                    }, {
                        "label": "4r",
                        "@id": "RB2",
                        "width": 1508,
                        "height": 1888,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 1888,
                                    "width": 1508,
                                    "@id": "media/album/r5321_fo4r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                            "@id":"rb2audio",
                            "@type":"oa:Annotation",
                                "label": "page 2",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_AET#t=9,74",
                                "on": "RB2",
                                "within": "PianoLayer"
                        }]
                    }, {
                "label": "4v",
                        "@id": "RB3",
                "width": 1524,
                "height": 1998,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB3",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 3008,
                                    "@id": "media/album/r5321_fo4v.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                "otherContent": [{
                            "@id":"rb3audio",
                            "@type":"oa:Annotation",
                                "label": "page 3",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_AET#t=74,118",
                                "on": "RB3",
                                "within": "PianoLayer"
                        }]
                    }]
            }]
    }, {
        "@id": "Janotha_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'AET / arr Janotha, "Break"',
        "description": '"Break, Break, Break," music by Emily Tennyson, arr. by Natalie Janotha, words by Alfred Tennyson, Sunday Hours, vol. 2 (1897): 568–72. P.P.357.fb, The British Library',
        "resources": ["Break_Break_Break_Janotha"],
        "layers": ["PianoLayer"],
        "sequences": [{
                "@id": "janotha normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "Page 568",
                        "@id": "Eng1",
                        "width": 673,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "Eng1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1346,
                                    "@id": "media/Sunday_Hours/T00028-43.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "EngAudio1",
                                "@type": "oa:Annotation",
                                "label": "Engraving, page 1",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_Janotha#t=0,31.7",
                                "on": "Eng1",
                                "within": "PianoLayer"
                            }, {
                                "@id": "EngPianoMeasures1",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [
                                    {
                                        "@id": 0,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=130.01308959602798,326.24779959377116,144.44211238997968,155.2259083728278",
                                            "Break_Break_Break_Janotha#t=0,3.37"
                                        ]
                                    },
                                    {
                                        "@id": 1,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=280.53058000451364,326.24779959377116,106.01534642292935,155.2259083728278",
                                            "Break_Break_Break_Janotha#t=3.37,5.31"
                                        ]
                                    },
                                    {
                                        "@id": 2,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=394.8995712028887,326.24779959377116,103.58519521552697,155.2259083728278",
                                            "Break_Break_Break_Janotha#t=5.31,7.68"
                                        ]
                                    },
                                    {
                                        "@id": 3,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=508.0534867975626,326.24779959377116,102.37011961182577,155.2259083728278",
                                            "Break_Break_Break_Janotha#t=7.68,10"
                                        ]
                                    },
                                    {
                                        "@id": 4,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=89.15617242157526,498.332881967953,95.07966598961859,196.23470999774315",
                                            "Break_Break_Break_Janotha#t=10,12.72"
                                        ]
                                    },
                                    {
                                        "@id": 5,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=191.37440758293837,498.332881967953,66.22162040171519,196.23470999774315",
                                            "Break_Break_Break_Janotha#t=12.72,15.76"
                                        ]
                                    },
                                    {
                                        "@id": 6,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=267.31663281426313,498.332881967953,109.50868878357029,196.23470999774315",
                                            "Break_Break_Break_Janotha#t=15.76,18.04"
                                        ]
                                    },
                                    {
                                        "@id": 7,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=385.3308508237418,498.332881967953,110.72376438727149,196.23470999774315",
                                            "Break_Break_Break_Janotha#t=18.04,20.52"
                                        ]
                                    },
                                    {
                                        "@id": 8,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=505.6233355901602,498.332881967953,106.01534642292935,196.23470999774315",
                                            "Break_Break_Break_Janotha#t=20.52,22.88"
                                        ]
                                    },
                                    {
                                        "@id": 9,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=85.51094561047167,707.7815391559467,175.73030918528548,201.09501241254796",
                                            "Break_Break_Break_Janotha#t=22.88,24.6"
                                        ]
                                    },
                                    {
                                        "@id": 10,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=270.8099751749041,707.7815391559467,111.93883999097268,201.09501241254796",
                                            "Break_Break_Break_Janotha#t=24.6,26.88"
                                        ]
                                    },
                                    {
                                        "@id": 11,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=392.4694199954863,707.7815391559467,110.72376438727149,201.09501241254796",
                                            "Break_Break_Break_Janotha#t=26.88,29.36"
                                        ]
                                    },
                                    {
                                        "@id": 12,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=512.9137892123674,707.7815391559467,98.72489280072217,201.09501241254796",
                                            "Break_Break_Break_Janotha#t=29.36,31.7"
                                        ]
                                    }
                                ]
                            }]
                    }, {
                        "label": "Page 569",
                        "@id": "Eng2",
                        "width": 687,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "Eng2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1375,
                                    "@id": "media/Sunday_Hours/T00028-44.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "EngAudio2",
                                "@type": "oa:Annotation",
                                "label": "Engraving, page 2",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_Janotha#t=31.7,79.64",
                                "on": "Eng2",
                                "within": "PianoLayer"
                            }, {
                                "@id": "Eng2PianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [
                                    {
                                        "@id": 0,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=62.64308035714286,101.1002232142857,117.92522321428571,197.39330357142856",
                                            "Break_Break_Break_Janotha#t=0,33.97"
                                        ]
                                    },
                                    {
                                        "@id": 1,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=190.18258928571427,101.1002232142857,87.88058035714285,197.39330357142856",
                                            "Break_Break_Break_Janotha#t=33.97,36.13"
                                        ]
                                    },
                                    {
                                        "@id": 2,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=285.2738839285714,101.1002232142857,77.06450892857143,197.39330357142856",
                                            "Break_Break_Break_Janotha#t=36.13,38.33"
                                        ]
                                    },
                                    {
                                        "@id": 3,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=369.5491071428571,101.1002232142857,101.1002232142857,197.39330357142856",
                                            "Break_Break_Break_Janotha#t=38.33,40.93"
                                        ]
                                    },
                                    {
                                        "@id": 4,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=480.4138392857143,101.1002232142857,87.88058035714285,197.39330357142856",
                                            "Break_Break_Break_Janotha#t=40.93,43.37"
                                        ]
                                    },
                                    {
                                        "@id": 5,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=63.84486607142857,309.4598214285714,145.71651785714286,182.97187499999998",
                                            "Break_Break_Break_Janotha#t=43.37,45.49"
                                        ]
                                    },
                                    {
                                        "@id": 6,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=219.17566964285714,309.4598214285714,109.51272321428571,182.97187499999998",
                                            "Break_Break_Break_Janotha#t=45.49,48.33"
                                        ]
                                    },
                                    {
                                        "@id": 7,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=338.30267857142854,309.4598214285714,107.10915178571427,182.97187499999998",
                                            "Break_Break_Break_Janotha#t=48.33,51.65"
                                        ]
                                    },
                                    {
                                        "@id": 8,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=455.02611607142853,309.4598214285714,79.46808035714285,182.97187499999998",
                                            "Break_Break_Break_Janotha#t=51.65,55.51"
                                        ]
                                    },
                                    {
                                        "@id": 9,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=65.04665178571429,502.0459821428571,150.5236607142857,205.80580357142856",
                                            "Break_Break_Break_Janotha#t=55.51,59.23"
                                        ]
                                    },
                                    {
                                        "@id": 10,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=225.1845982142857,502.0459821428571,108.3109375,205.80580357142856",
                                            "Break_Break_Break_Janotha#t=59.23,61.59"
                                        ]
                                    },
                                    {
                                        "@id": 11,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=341.9080357142857,502.0459821428571,107.10915178571427,205.80580357142856",
                                            "Break_Break_Break_Janotha#t=61.59,64.14"
                                        ]
                                    },
                                    {
                                        "@id": 12,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=458.6314732142857,502.0459821428571,110.71450892857142,205.80580357142856",
                                            "Break_Break_Break_Janotha#t=64.14,67.39"
                                        ]
                                    },
                                    {
                                        "@id": 13,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=63.84486607142857,720.0198660714285,146.91830357142857,178.16473214285713",
                                            "Break_Break_Break_Janotha#t=67.39,72.73"
                                        ]
                                    },
                                    {
                                        "@id": 14,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=219.17566964285714,720.0198660714285,110.71450892857142,178.16473214285713",
                                            "Break_Break_Break_Janotha#t=72.73,75.05"
                                        ]
                                    },
                                    {
                                        "@id": 15,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=339.5044642857143,720.0198660714285,105.90736607142857,178.16473214285713",
                                            "Break_Break_Break_Janotha#t=75.05,77.37"
                                        ]
                                    },
                                    {
                                        "@id": 16,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=455.02611607142853,720.0198660714285,113.11808035714286,178.16473214285713",
                                            "Break_Break_Break_Janotha#t=77.37,79.64"
                                        ]
                                    }
                                ]
                            }]
                    }, {
                        "label": "Page 570",
                        "@id": "Eng3",
                        "width": 675,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "Eng2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1349,
                                    "@id": "media/Sunday_Hours/T00028-45.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [
                            {
                                "@id": "EngAudio2",
                                "@type": "oa:Annotation",
                                "label": "Engraving, page 3",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_Janotha#t=79.64,124.61",
                                "on": "Eng2",
                                "within": "PianoLayer"
                            },
                            {
                                "@id": "Eng2PianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [{
                                "@id": 0,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=85.429552503323,89.15684536996012,142.08440407620736,192.6264953478068",
                                            "Break_Break_Break_Janotha#t=79.64,81.97"
                                ]
                            },
                            {
                                "@id": 1,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=236.012184315463,89.15684536996012,85.429552503323,192.6264953478068",
                                            "Break_Break_Break_Janotha#t=81.97,84.3"
                                ]
                            },
                            {
                                "@id": 2,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=331.13269827204255,89.15684536996012,85.429552503323,192.6264953478068",
                                            "Break_Break_Break_Janotha#t=84.3,86.66"
                                ]
                            },
                            {
                                "@id": 3,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=425.0604785112982,89.15684536996012,89.15684536996012,192.6264953478068",
                                            "Break_Break_Break_Janotha#t=86.66,88.98"
                                ]
                            },
                            {
                                "@id": 4,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=522.5664599025255,89.15684536996012,90.349579087284,192.6264953478068",
                                            "Break_Break_Break_Janotha#t=88.98,91.62"
                                ]
                            },
                            {
                                "@id": 5,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=87.81501993797076,301.0161719096145,137.31346920691183,197.39743021710234",
                                            "Break_Break_Break_Janotha#t=91.62,93.86"
                                ]
                            },
                            {
                                "@id": 6,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=232.43398316349135,301.0161719096145,89.15684536996012,197.39743021710234",
                                            "Break_Break_Break_Janotha#t=93.86,96.14"
                                ]
                            },
                            {
                                "@id": 7,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=329.93996455471864,301.0161719096145,87.81501993797076,197.39743021710234",
                                            "Break_Break_Break_Janotha#t=96.14,98.46"
                                ]
                            },
                            {
                                "@id": 8,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=426.25321222862203,301.0161719096145,89.15684536996012,197.39743021710234",
                                            "Break_Break_Break_Janotha#t=98.46,101.42"
                                ]
                            },
                            {
                                "@id": 9,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=523.7591936198494,301.0161719096145,89.15684536996012,197.39743021710234",
                                            "Break_Break_Break_Janotha#t=101.42,103.98"
                                ]
                            },
                            {
                                "@id": 10,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=87.81501993797076,511.68276473194504,158.93176783340718,205.895657953035",
                                            "Break_Break_Break_Janotha#t=103.98,106.18"
                                ]
                            },
                            {
                                "@id": 11,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=255.24501550731057,511.68276473194504,115.546078865751,205.895657953035",
                                            "Break_Break_Break_Janotha#t=106.18,108.98"
                                ]
                            },
                            {
                                "@id": 12,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=379.2893221089942,511.68276473194504,109.5824102791316,205.895657953035",
                                            "Break_Break_Break_Janotha#t=108.98,112.14"
                                ]
                            },
                            {
                                "@id": 13,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=497.220868409393,511.68276473194504,119.12428001772264,205.895657953035",
                                            "Break_Break_Break_Janotha#t=112.14,114.93"
                                ]
                            },
                            {
                                "@id": 14,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=87.81501993797076,727.1202924235711,160.12450155073105,201.12472308373947",
                                            "Break_Break_Break_Janotha#t=114.93,117.29"
                                ]
                            },
                            {
                                "@id": 15,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=255.24501550731057,727.1202924235711,113.16061143110323,201.12472308373947",
                                            "Break_Break_Break_Janotha#t=117.29,119.81"
                                ]
                            },
                            {
                                "@id": 16,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=375.5620292423571,727.1202924235711,120.466105449712,201.12472308373947",
                                            "Break_Break_Break_Janotha#t=119.81,122.25"
                                ]
                            },
                            {
                                "@id": 17,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng3#xywh=504.37727071333626,727.1202924235711,109.5824102791316,201.12472308373947",
                                            "Break_Break_Break_Janotha#t=122.25,124.61"
                                ]
                                    }]}
                        ]
                    }, {
                        "label": "Page 571",
                        "@id": "Eng4",
                        "width": 686,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "Eng2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1372,
                                    "@id": "media/Sunday_Hours/T00028-46.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [
                            {
                                "@id": "EngAudio2",
                                "@type": "oa:Annotation",
                                "label": "Engraving, page 4",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_Janotha#t=124.61,178.67",
                                "on": "Eng2",
                                "within": "PianoLayer"
                            }, {
                                "@id": "Eng2PianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [
                            {
                                "@id": 0,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=61.34624860022396,85.46270996640537,126.46069428891377,204.68846584546472",
                                            "Break_Break_Break_Janotha#t=0,127.45"
                                ]
                            },
                            {
                                "@id": 1,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=196.24770436730122,85.46270996640537,86.66853303471444,204.68846584546472",
                                            "Break_Break_Break_Janotha#t=127.45,129.85"
                                ]
                            },
                            {
                                "@id": 2,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=292.56282194848825,85.46270996640537,84.2568868980963,204.68846584546472",
                                            "Break_Break_Break_Janotha#t=129.85,132.13"
                                ]
                            },
                            {
                                "@id": 3,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=384.05464725643895,85.46270996640537,99.93258678611421,204.68846584546472",
                                            "Break_Break_Break_Janotha#t=132.13,134.94"
                                ]
                            },
                            {
                                "@id": 4,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=491.22217245240756,85.46270996640537,78.22777155655095,204.68846584546472",
                                            "Break_Break_Break_Janotha#t=134.94,137.38"
                                ]
                            },
                            {
                                "@id": 5,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=60.14042553191489,304.62105263157895,138.51892497200447,201.07099664053752",
                                            "Break_Break_Break_Janotha#t=137.38,140.13"
                                ]
                            },
                            {
                                "@id": 6,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=207.10011198208286,304.62105263157895,93.90347144456886,201.07099664053752",
                                            "Break_Break_Break_Janotha#t=140.13,142.45"
                                ]
                            },
                            {
                                "@id": 7,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=310.65016797312427,304.62105263157895,87.87435610302352,201.07099664053752",
                                            "Break_Break_Break_Janotha#t=142.45,144.89"
                                ]
                            },
                            {
                                "@id": 8,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=408.17110862262035,304.62105263157895,68.58118701007838,201.07099664053752",
                                            "Break_Break_Break_Janotha#t=144.89,149.07"
                                ]
                            },
                            {
                                "@id": 9,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=482.7814109742441,304.62105263157895,86.66853303471444,201.07099664053752",
                                            "Break_Break_Break_Janotha#t=149.07,152.28"
                                ]
                            },
                            {
                                "@id": 10,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=58.93460246360582,517.7502799552071,161.2788353863382,196.24770436730122",
                                            "Break_Break_Break_Janotha#t=152.28,155.36"
                                ]
                            },
                            {
                                "@id": 11,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=230.0107502799552,517.7502799552071,111.99081746920493,196.24770436730122",
                                            "Break_Break_Break_Janotha#t=155.36,158.88"
                                ]
                            },
                            {
                                "@id": 12,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=351.49742441209406,517.7502799552071,122.84322508398655,196.24770436730122",
                                            "Break_Break_Break_Janotha#t=158.88,164.05"
                                ]
                            },
                            {
                                "@id": 13,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=482.7814109742441,517.7502799552071,83.05106382978722,196.24770436730122",
                                            "Break_Break_Break_Janotha#t=164.05,167.39"
                                ]
                            },
                            {
                                "@id": 14,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=57.72877939529675,725.9054871220604,101.13840985442329,184.18947368421053",
                                            "Break_Break_Break_Janotha#t=167.39,170.43"
                                ]
                            },
                            {
                                "@id": 15,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=167.30795072788354,725.9054871220604,130.07816349384098,184.18947368421053",
                                            "Break_Break_Break_Janotha#t=170.43,173.47"
                                ]
                            },
                            {
                                "@id": 16,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=305.826875699888,725.9054871220604,122.84322508398655,184.18947368421053",
                                            "Break_Break_Break_Janotha#t=173.47,176.15"
                                ]
                            },
                            {
                                "@id": 17,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng4#xywh=436.96013437849945,725.9054871220604,128.87234042553192,184.18947368421053",
                                            "Break_Break_Break_Janotha#t=176.15,178.67"
                                ]
                            }
                                ]}]
                    }, {
                        "label": "Page 572",
                        "@id": "Eng5",
                        "width": 674,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "Eng2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1347,
                                    "@id": "media/Sunday_Hours/T00028-47.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [
                            {
                                "@id": "EngAudio2",
                                "@type": "oa:Annotation",
                                "label": "Engraving, page 5",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_Janotha#t=178.67,236",
                                "on": "Eng2",
                                "within": "PianoLayer"
                            },
                            {
                                "@id": "Eng2PianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [
                            {
                                "@id": 0,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=93.95826960891414,91.45859733449858,145.71618964387153,197.4741096788289",
                                            "Break_Break_Break_Janotha#t=178.67,180.79"
                                ]
                            },
                            {
                                "@id": 1,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=246.87939698492463,91.45859733449858,113.2204500764693,197.4741096788289",
                                            "Break_Break_Break_Janotha#t=180.79,183.11"
                                ]
                            },
                            {
                                "@id": 2,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=369.65741752239455,91.45859733449858,114.39676644090015,197.4741096788289",
                                            "Break_Break_Break_Janotha#t=183.11,185.55"
                                ]
                            },
                            {
                                "@id": 3,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=491.2591216954337,91.45859733449858,128.80664190517805,197.4741096788289",
                                            "Break_Break_Break_Janotha#t=185.55,188.07"
                                ]
                            },
                            {
                                "@id": 4,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=93.95826960891414,300.9899497487437,134.83526327288615,199.82674240769063",
                                            "Break_Break_Break_Janotha#t=188.07,191.75"
                                ]
                            },
                            {
                                "@id": 5,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=237.1747869783701,300.9899497487437,95.13458597334498,199.82674240769063",
                                            "Break_Break_Break_Janotha#t=191.75,193.95"
                                ]
                            },
                            {
                                "@id": 6,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=340.6906270482849,300.9899497487437,101.1632073410531,199.82674240769063",
                                            "Break_Break_Break_Janotha#t=193.95,196.31"
                                ]
                            },
                            {
                                "@id": 7,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=447.8824557570461,300.9899497487437,83.07734323792877,199.82674240769063",
                                            "Break_Break_Break_Janotha#t=196.31,198.79"
                                ]
                            },
                            {
                                "@id": 8,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=539.3410530915446,300.9899497487437,81.90102687349793,199.82674240769063",
                                            "Break_Break_Break_Janotha#t=198.79,203.27"
                                ]
                            },
                            {
                                "@id": 9,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=93.95826960891414,518.9025562595587,126.45400917631636,194.97443740441335",
                                            "Break_Break_Break_Janotha#t=203.27,206.15"
                                ]
                            },
                            {
                                "@id": 10,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=229.96984924623115,518.9025562595587,109.5444614376229,194.97443740441335",
                                            "Break_Break_Break_Janotha#t=206.15,209.67"
                                ]
                            },
                            {
                                "@id": 11,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=346.719248415993,518.9025562595587,73.37273323137426,194.97443740441335",
                                            "Break_Break_Break_Janotha#t=209.67,213.03"
                                ]
                            },
                            {
                                "@id": 12,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=428.6202752894909,518.9025562595587,85.42997596679047,194.97443740441335",
                                            "Break_Break_Break_Janotha#t=213.03,215.71"
                                ]
                            },
                            {
                                "@id": 13,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=523.7548612628359,518.9025562595587,97.48721870220668,194.97443740441335",
                                            "Break_Break_Break_Janotha#t=215.71,217.67"
                                ]
                            },
                            {
                                "@id": 14,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=91.45859733449858,723.5816036705265,157.77343237928773,213.06030150753767",
                                            "Break_Break_Break_Janotha#t=217.67,219.99"
                                ]
                            },
                            {
                                "@id": 15,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=256.4369674459253,723.5816036705265,116.74939916976184,213.06030150753767",
                                            "Break_Break_Break_Janotha#t=219.99,222.39"
                                ]
                            },
                            {
                                "@id": 16,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=376.8623552545335,723.5816036705265,143.21651736945597,213.06030150753767",
                                            "Break_Break_Break_Janotha#t=222.39,226.59"
                                ]
                            },
                            {
                                "@id": 17,
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "label": "",
                                "on": [
                                    "Eng5#xywh=528.4601267205593,723.5816036705265,92.63491369892942,213.06030150753767",
                                            "Break_Break_Break_Janotha#t=226.59,229.5"
                                ]
                            }
                        ]
                            }]}]
            }]
    }, {
        "@id": "ManuscriptPoem",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'AT, "Break," Ms poem',
        "resources": ["Break_Break_Break_Janotha","Break_Break_Break_AET"],
        "sequences": [{
                "@id": "handwritten poem normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "manuscript",
                        "@id": "MS1",
                        "width": 1118,
                        "height": 1728,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "MS1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 1728,
                                    "width": 1118,
                                    "@id": "media/manuscript.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "JB1",
                                "@type": "oa:Annotation",
                                "label": "Performance",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_Janotha#t=0,230",
                                "on": "MS1",
                                "within": "PianoLayer"
                            }, {
                                "@id": "EngPianoMeasures2",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": ["line_1", "line_2", "line_3", "line_4", "line_5",
            "line_6", "line_7", "line_8", "line_9", "line_10",
            "line_11", "line_12", "line_13", "line_14", "line_15",
            "line_16"
        ]

                        }]
                    }]
            }]
    }, {
        "@id": "P_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'AET, "Break," draft 2 (5312/1)',
        "description": '"Break, Break, Break", music by Emily Tennyson, words by Alfred Tennyson, Pink MS music book. TRC/Music/5312/1, ff 11r-12v, Lincolnshire County Council, UK.',
        "resources": ["Break_Break_Break_AET"],
        "layers": ["PianoLayer"],
        "sequences": [{
                "@id": "pink book normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "11r",
                        "@id": "PB1",
                        "width": 1513,
                        "height": 2000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1513,
                                    "@id": "media/pink/r5312-1_fo11r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "p1",
                                "@type": "oa:Annotation",
                                "label": "Performance",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_AET#t=0,28.01",
                                "on": "PB1",
                                "within": "PianoLayer"
                            }]
                    }, {
                        "label": "11v",
                        "@id": "PB2",
                        "width": 1567,
                        "height": 2000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1567,
                                    "@id": "media/pink/r5312-1_fo11v.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "p2",
                                "@type": "oa:Annotation",
                                "label": "Performance",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_AET#t=28.01,60.4",
                                "on": "PB1",
                                "within": "PianoLayer"
                            }]
                    }, {
                        "label": "12r",
                        "@id": "PB3",
                        "width": 1538,
                        "height": 2000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB3",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1538,
                                    "@id": "media/pink/r5312-1_fo12r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "p3",
                                "@type": "oa:Annotation",
                                "label": "Performance",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_AET#t=60.4,114.63",
                                "on": "PB1",
                                "within": "PianoLayer"
                            }]
                    }, {
                        "label": "12v",
                        "@id": "PB4",
                        "width": 1571,
                        "height": 2000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB4",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1538,
                                    "@id": "media/pink/r5312-1_fo12v.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "p4",
                                "@type": "oa:Annotation",
                                "label": "Performance",
                                "motivation": "sc:painting",
                                "resource": "Break_Break_Break_AET#t=100.6,114.63",
                                "on": "PB1",
                                "within": "PianoLayer"
                            }]
                    }]
            }]
    }, {
        "@id": "G_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'AET, "Break," draft 3 (5312/2)',
        "description": '"Break, Break, Break", music by Emily Tennyson, words by Alfred Tennyson, green MS music book, TRC/Music/5312/2, ff 5r-6r. Lincolnshire County Council, UK.',
        "resources": ["Break_Break_Break_AET"],
        "layers": ["PianoLayer"],
        "sequences": [{
                "@id": "green book normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "5r",
                        "@id": "GB1",
                        "width": 1629,
                        "height": 2000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "GB1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1629,
                                    "@id": "media/green/r5312-2_fo5r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": []
                    }, {
                        "label": "5v",
                        "@id": "GB2",
                        "width": 1541,
                        "height": 2000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "GB2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1541,
                                    "@id": "media/green/r5312-2_fo5v.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": []
                    }, {
                        "label": "6r",
                        "@id": "GB3",
                        "width": 1592,
                        "height": 2000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "GB3",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 1592,
                                    "@id": "media/green/r5312-2_fo6r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": []
                    }]
            }]
    }]);

sounding.value('TEXT', [{
        "@id": "publishedText",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "cnt:chars",
        "label": 'AT, "Break" (published 1842)',
        // Put all the text in one place and then annotate the stanzas,
        // lines, and words with offsets as needed.
        "@value": "Break, break, break,/" +
            "On thy cold gray stones, O Sea!/" +
            "And I would that my tongue could utter/" +
            "The thoughts that arise in me.//" +
            "O, well for the fisherman's boy,/" +
            "That he shouts with his sister at play!/" +
            "O, well for the sailor lad,/" +
            "That he sings in his boat on the bay!//" +
            "And the stately ships go on/" +
            "To their haven under the hill;/" +
            "But O for the touch of a vanish'd hand,/" +
            "And the sound of a voice that is still!//" +
            "Break, break, break/" +
            "At the foot of thy crags, O Sea!/" +
            "But the tender grace of a day that is dead/" +
            "Will never come back to me.//",
        "lines": ["line_1", "line_2", "line_3", "line_4", "line_5",
            "line_6", "line_7", "line_8", "line_9", "line_10",
            "line_11", "line_12", "line_13", "line_14", "line_15",
            "line_16"
        ]
    }, {
        "@id": "comment01",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "cnt:chars",
        "evidence": "anno_01",
        "@value": "Without the comma, this line is enjambed. It matches the way that Emily Tennyson set the music, but differs from the published version."
    }, {
        "@id": "comment02",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "cnt:chars",
        "evidence": ["anno_02"],
        "@value": "The Music Album has fermatas, drawing out the note, which don't exist in the Pink and Green versions."
    }
    ]);
sounding.value('AGENTS', [{
        "@id": "sounding/user/01",
        "@type": "foaf:Person",
        "foaf:name": "Agent 1"
    }]);

sounding.value('ESSAYS', [{
    "@context": "http://iiif.io/api/presentation/2/context.json",
    "@id": "EssayToBreak",
    "@type": "rr:Essay",
    "label": "To Break or not to Break?",
    "metadataResources": [],
    "metadata": [
        {
            "label": "author",
            "value": "Phyllis Weliver"
        },
        {
            "label": "title",
            "value": "To Break or not to Break?"
        },
        {
            "label": "subtitle",
                "value": 'Recording Tennyson’s Recitation of "Break, Break, Break" in Music'
        }
    ],
    "resource": "data/essayBreakToBreak.xml",
    "style": "",
    "footnotes": [],
    "endnotes": [],
    "indices": [],
    "comments": [],
    "otherContent": []
},
//{
//    "@context": "http://iiif.io/api/presentation/2/context.json",
//    "@id": "EssayManuscriptBooks",
//    "@type": "rr:Essay",
//    "label": "Emily Tennyson's Music Manuscript Books",
//    "metadataResources": [],
//    "metadata": [
//        {
//            "label": "author",
//            "value": "Phyllis Weliver"
//        },
//        {
//            "label": "title",
//            "value": "Emily Tennyson's Music Manuscript Books"
//        }
//    ],
//    "resource": "data/essayManuscriptBooks.xml",
//    "style": "",
//    "footnotes": [],
//    "endnotes": [],
//    "indices": [],
//    "comments": [],
//    "otherContent": []
//},
{
    "@context": "http://iiif.io/api/presentation/2/context.json",
    "@id": "EssayBreakVariability",
    "@type": "rr:Essay",
    "label": "Variability and Musical Motion in ‘Break, break, break’",
    "metadataResources": [],
    "metadata": [
        {
            "label": "author",
            "value": "Phyllis Weliver"
        },
        {
            "label": "title",
            "value": "Variability and Musical Motion in ‘Break, break, break’"
        }
    ],
    "resource": "data/essayBreakVariability.xml",
    "style": "",
    "footnotes": [],
    "endnotes": [],
    "indices": [],
    "comments": [],
    "otherContent": []
},
//{
//    "@context": "http://iiif.io/api/presentation/2/context.json",
//    "@id": "EssayEmilysMusic",
//    "@type": "rr:Essay",
//    "label": "Performance and Publication of Emily Tennyson’s Music",
//    "metadataResources": [],
//    "metadata": [
//        {
//            "label": "author",
//            "value": "Phyllis Weliver"
//        },
//        {
//            "label": "title",
//            "value": "Performance and Publication of Emily Tennyson’s Music"
//        }
//    ],
//    "resource": "data/essayEmilysMusic.xml",
//    "style": "data/essayStyle.xsl",
//    "footnotes": [],
//    "endnotes": [],
//    "indices": [],
//    "comments": [],
//    "otherContent": []
//}
]);

sounding.value('ANNOTATIONS', [{
        "@id": "anno_01",
        "@type": "oa:Annotation",
        "motivation": "oa:commenting",
        "label": "Enjambment variation",
        "on": ["intraAnno_01", "intraAnno_02", "intraAnno_03"],
        "resource": "comment01",
        "evidence": ["intraAnno_01", "intraAnno_02", "intraAnno_03"], // These are what we show immediately
        "oa:annotatedBy": "sounding/user/01"
    }, {
        "@id": "list_anno_02",
        "@type": "ore:Aggregation",
        "description": "Emily Tennyson's settings showing enjambment",
        // targets, but no body, as it trickles up to intraAnno_02
        "on": ["PB1#xywh=58,1018,1144,339", "RB1#xywh=8,862,961,380"]
    }, {
        "@id": "intraAnno_01",
        "@type": "oa:Annotation",
        "description": "assertion of form in the handwritten manuscript image",
        "on": ["MS1#xywh=217,228,671,168"],
        "resource": "comment01#offset=0,41" // There is a no comma in the handwritten copy
    }, {
        "@id": "intraAnno_02",
        "@type": "oa:Annotation",
        "description": "observation of similarity between Emily Tennyson's setting and the handwritten manuscript",
        "on": ["list_anno_02", "intraAnno_01"],
        "evidence": ["intraAnno_01", "list_anno_02"],
        "resource": "comment01#offset=42,95"
    }, {
        "@id": "intraAnno_03",
        "@type": "oa:Annotation",
        "description": "observation of comma in published text",
        "on": "publishedText#offset=0,20",
        "evidence": ["publishedText#offset=0,20"],
        "resource": "comment01#offset=96,137"
    }, {
        "@id": "anno_02",
        "@type": "oa:Annotation",
        "motivation": "oa:commenting",
        "description": "comparison of fermatas",
        "resource": "comment02",
        "on": ["MA3#xywh=33,78,246,124", "PB1#xywh=77,1012,493,177"], //TODO: add greenbook
        "evidence": ["MA3#xywh=33,78,246,124", "PB1#xywh=77,1012,493,177"], //TODO: add greenbook
        "oa:annotatedBy": "sounding/user/01"
    }, {
        "@id": "line_1",
        "@type": "oa:Annotation",
        "resource": "publishedText#offset=0,20", // offset selector: start,end
        "on": [
            "RB1#xywh=20,250,750,120", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,250,750,120", // target on a sc:Canvas engraving
            "MS1#xywh=170,245,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=15.76,22.88" // target on an audio resource
        ]
    }, {
        "@id": "line_2",
        "@type": "oa:Annotation",
        "resource": "publishedText#offset=21,52", // offset selector: start,end
        "on": [
            "RB1#xywh=20,100,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,100,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,313,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=22.88,32.21" // target on an audio resource
        ]
    }, {
        "@id": "line_3",
        "@type": "oa:Annotation", "resource": "publishedText#offset=53,91", // offset selector: start,end

        "on": [
            "RB1#xywh=20,140,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,140,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,365,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=32.21,40.8" // target on an audio resource
        ]
    }, {
        "@id": "line_4",
        "@type": "oa:Annotation", "resource": "publishedText#offset=92,122", // offset selector: start,end
        "on": [
            "RB1#xywh=20,180,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,180,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,421,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=40.8,51.60" // target on an audio resource
        ]
    }, {
        "@id": "line_5",
        "@type": "oa:Annotation", "resource": "publishedText#offset=124,156", // offset selector: start,end
        "on": [
            "RB1#xywh=20,220,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,220,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,545,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=70.77,79.03" // target on an audio resource
        ]
    }, {
        "@id": "line_6",
        "@type": "oa:Annotation", "resource": "publishedText#offset=157,196", // offset selector: start,end
        "on": [
            "RB1#xywh=20,280,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,280,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,613,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=79.03,86.04" // target on an audio resource
        ]
    }, {
        "@id": "line_7",
        "@type": "oa:Annotation", "resource": "publishedText#offset=197,224", // offset selector: start,end
        "on": [
            "RB1#xywh=20,320,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,320,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,677,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=86.4,92.39" // target on an audio resource
        ]
    }, {
        "@id": "line_8",
        "@type": "oa:Annotation", "resource": "publishedText#offset=225,262", // offset selector: start,end
        "on": [
            "RB1#xywh=20,400,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,400,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,749,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=92.39,101.67" // target on an audio resource
        ]
    }, {
        "@id": "line_9",
        "@type": "oa:Annotation", "resource": "publishedText#offset=264,291", // offset selector: start,end
        "on": [
            "RB1#xywh=20,450,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,450,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,905,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=114.18,121.13" // target on an audio resource
        ]
    }, {
        "@id": "line_10",
        "@type": "oa:Annotation", "resource": "publishedText#offset=292,322", // offset selector: start,end
        "on": [
            "RB1#xywh=20,500,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,500,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,960,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=121.13,129.09" // target on an audio resource
        ]
    }, {
        "@id": "line_11",
        "@type": "oa:Annotation", "resource": "publishedText#offset=323,362", // offset selector: start,end
        "on": [
            "RB1#xywh=20,550,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,550,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,1017,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=129.09,138.6" // target on an audio resource
        ]
    }, {
        "@id": "line_12",
        "@type": "oa:Annotation", "resource": "publishedText#offset=363,402", // offset selector: start,end
        "on": [
            "RB1#xywh=20,600,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,600,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,1093,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=138.6,148.5" // target on an audio resource
        ]
    }, {
        "@id": "line_13",
        "@type": "oa:Annotation", "resource": "publishedText#offset=404,423", // offset selector: start,end
        "on": [
            "RB1#xywh=20,650,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,650,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,1213,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=170.43,179.6" // target on an audio resource
        ]
    }, {
        "@id": "line_14",
        "@type": "oa:Annotation", "resource": "publishedText#offset=424,456", // offset selector: start,end
        "on": [
            "RB1#xywh=20,700,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,700,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,1290,853,80", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=179.6,188.95" // target on an audio resource
        ]
    }, {
        "@id": "line_15",
        "@type": "oa:Annotation", "resource": "publishedText#offset=457,499", // offset selector: start,end
        "on": [
            "RB2#xywh=20,60,750,40", // target on a sc:Canvas manuscript
            "Eng2#xywh=20,60,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,1350,920,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=188.95,201.3" // target on an audio resource
        ]
    }, {
        "@id": "line_16",
        "@type": "oa:Annotation", "resource": "publishedText#offset=500,527", // offset selector: start,end
        "on": [
            "RB2#xywh=20,120,750,40", // target on a sc:Canvas manuscript
            "Eng2#xywh=20,120,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=170,1409,853,90", // target on a sc:Canvas handwrote
            "Break_Break_Break_Janotha#t=201.3,214.6" // target on an audio resource
        ]
    }
]);