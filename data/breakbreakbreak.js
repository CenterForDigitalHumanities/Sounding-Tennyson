/* global sounding */

sounding.value('RESOURCES', [{
        "@id": "BBPiano",
        "@type": "oa:Annotation",
        "label": "Recording 4",
        "motivation": "sc:painting",
        "resource": {
            "@id": "media/Recording4.m4a",
            "@type": "dctypes:Sound",
            "format": "audio/mpeg"
        }
    }, {
        "@id": "EngPiano",
        "@type": "oa:Annotation",
        "label": "Recording 4",
        "motivation": "sc:painting",
        "resource": {
            "@id": "media/Recording4.m4a",
            "@type": "dctypes:Sound",
            "format": "audio/mpeg"
        }
    }, {
        "@id": "BBPiano",
        "@type": "oa:Annotation",
        "label": "Recording 4",
        "motivation": "sc:painting",
        "resource": {
            "@id": "media/Recording4.m4a",
            "@type": "dctypes:Sound",
            "format": "audio/mpeg"
        }
    }, {
        "@id": "BBPiano",
        "@type": "oa:Annotation",
        "label": "Recording 4",
        "motivation": "sc:painting",
        "resource": {
            "@id": "media/Recording4.m4a",
            "@type": "dctypes:Sound",
            "format": "audio/mpeg"
        }
    }]);
sounding.value('MANIFESTS', [{
        "@id": "MusicAlbum",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": "Music Album (5312 first drafts)",
        "sequences": [{
                "@id": "music album sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "3r",
                        "@id": "MA1",
                        "width": 956,
                        "height": 1198,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "MA1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3594,
                                    "width": 2868,
                                    "@id": "media/5312_fo3r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }]
                    }, {
                        "label": "3v",
                        "@id": "MA2",
                        "width": 1336,
                        "height": 1815,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "MA2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3630,
                                    "width": 2672,
                                    "@id": "media/5312_fo3v-4r.jpg#xywh=0,0,2672,3630",
                                    "@type": "dcterms:Image"
                                }
                            }]
                    }, {
                        "label": "4r",
                        "@id": "MA3",
                        "width": 1422,
                        "height": 1815,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "MA3",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3630,
                                    "width": 2844,
                                    "@id": "media/5312_fo3v-4r.jpg#xywh=2670,0,2844,3630",
                                    "@type": "dcterms:Image"
                                }
                            }]
                    }, {
                        "label": "4v",
                        "@id": "MA4",
                        "width": 850,
                        "height": 1082,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "MA4",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3246,
                                    "width": 2551,
                                    "@id": "media/5312_fo4v.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }]
                    }]
            }]
    }, {
        "@id": "RB_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": "Red Book (5312/3)",
        "resources": ["BBPiano"],
        "layers": ["PianoLayer"],
        "sequences": [{
                "@id": "red book normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "130",
                        "@id": "RB1",
                        "width": 1000,
                        "height": 1504,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 3008,
                                    "@id": "media/RedBook130.JPG",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "RBAudio1",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 1",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=0,23.67",
                                "on": "RB1",
                                "within": "PianoLayer"
                            }, {
                                "@id": "PianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [{
                                        "@id": "0f",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=79.5,177,137.5,247",
                                            "BBPiano#t=0,4.4"
                                        ]
                                    }, {
                                        "@id": "1",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=224.5,166,150.5,266.5",
                                            "BBPiano#t=4.4,6.01"
                                        ]
                                    }, {
                                        "@id": "2",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=382,160.5,175.5,266.5",
                                            "BBPiano#t=6.01,7.31"
                                        ]
                                    }, {
                                        "@id": "3",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=566,160.5,159,273.5",
                                            "BBPiano#t=7.31,8.56"
                                        ],
                                    }, {
                                        "@id": "4",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=736,162.5,191.5,272",
                                            "BBPiano#t=8.56,9.73"
                                        ],
                                    }, {
                                        "@id": "5",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=51,570,164.5,275.5",
                                            "BBPiano#t=9.73,10.88"
                                        ],
                                    }, {
                                        "@id": "6",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 10.88,
                                        "end": 12.13,
                                        "pageIndex": 0,
                                        "on": [
                                            "RB1#xywh=226.5,570,118,273.5",
                                            "BBPiano#t=10.88,12.13"
                                        ],
                                    }, {
                                        "@id": "7",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 12.13,
                                        "end": 13.54,
                                        "pageIndex": 0,
                                        "on": [
                                            "RB1#xywh=353.5,572,146.5,281",
                                            "BBPiano#t=12.13,13.54"
                                        ],
                                    }, {
                                        "@id": "10",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=69,368,152,53.5",
                                            "BBPiano#t=0,5.24"
                                        ],
                                    }, {
                                        "@id": "11",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=246,361,193,61",
                                            "BBPiano#t=5.24,8.7"
                                        ],
                                    }, {
                                        "@id": "12",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=376.5,232,193,84",
                                            "BBPiano#t=8.7,11.49"
                                        ],
                                    }, {
                                        "@id": "13",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=532,345,182.5,87.5",
                                            "BBPiano#t=11.49,14.42"
                                        ],
                                    }, {
                                        "@id": "14",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=732.5,337.5,191.5,86",
                                            "BBPiano#t=14.42,16.95"
                                        ],
                                    }, {
                                        "@id": "15",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=40.5,749,152,75",
                                            "BBPiano#t=16.95,20.12"
                                        ],
                                    }, {
                                        "@id": "16",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=215.5,656,145,80.5",
                                            "BBPiano#t=20.12,21.98"
                                        ]
                                    }, {
                                        "@id": "17",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=219,765,146.5,75",
                                            "BBPiano#t=21.98,24.41"
                                        ]
                                    }, {
                                        "@id": "18",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB1#xywh=376.5,658,125,91",
                                            "BBPiano#t=24.41,27.6"
                                        ]
                                    }]
                            }]
                    }, {
                        "label": "131",
                        "@id": "RB2",
                        "width": 1000,
                        "height": 1504,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 3008,
                                    "@id": "media/RedBook131.JPG",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "RBAudio1",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 2",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=23.68,75",
                                "on": "RB2",
                                "within": "PianoLayer"
                            }, {
                                "@id": "RB2List",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [{
                                        "@id": 29,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=383.5,770.5,118,73.5",
                                            "BBPiano#t=27.6,30.29"
                                        ]
                                    }, {
                                        "@id": 210,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=521.5,647,150.5,127",
                                            "BBPiano#t=30.29,33.3"
                                        ]
                                    }, {
                                        "@id": 211,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=695,647,80.5,200.5",
                                            "BBPiano#t=33.3,36.26"
                                        ]
                                    }, {
                                        "@id": 212,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=816.5,654.5,120,89.5",
                                            "BBPiano#t=36.26,39.08"
                                        ]
                                    }, {
                                        "@id": 213,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=103,885,102,93",
                                            "BBPiano#t=39.08,42.82"
                                        ]
                                    }, {
                                        "@id": 214,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=221,886.5,256,118",
                                            "BBPiano#t=42.82,46.94"
                                        ]
                                    }, {
                                        "@id": 215,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=500,888.5,259.5,116",
                                            "BBPiano#t=46.94,50.48"
                                        ]
                                    }, {
                                        "@id": 216,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=786,903,168,111",
                                            "BBPiano#t=50.48,54.13"
                                        ]
                                    }, {
                                        "@id": 217,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=101,990.5,104,100",
                                            "BBPiano#t=54.13,55.49"
                                        ]
                                    }, {
                                        "@id": 218,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=228,1026,71.5,84",
                                            "BBPiano#t=55.49,57.55"
                                        ]
                                    }, {
                                        "@id": 219,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=328.5,1021,316.5,95",
                                            "BBPiano#t=57.55,58.45"
                                        ]
                                    }, {
                                        "@id": 220,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "RB2#xywh=680.5,1035,234.5,111",
                                            "BBPiano#t=58.45,59.03"
                                        ]
                                    }]
                            }]
                    }, {
                        "label": "132",
                        "@id": "RB3",
                        "width": 1000,
                        "height": 1504,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB3",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 2000,
                                    "width": 3008,
                                    "@id": "media/RedBook132.JPG",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "RBAudio1",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 3",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=75,112",
                                "on": "RB3",
                                "within": "PianoLayer"
                            }, {
                                "@id": "RBList3",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": []
                            }]
                    }, {
                        "label": "133",
                        "@id": "RB4",
                        "width": 1504,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "RB4",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3008,
                                    "width": 2000,
                                    "@id": "media/RedBook133.JPG",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "RBAudio1",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 4",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=112,144",
                                "on": "RB4",
                                "within": "PianoLayer"
                            }, {
                                "@id": "RBList4",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": []
                            }]
                    }]
            }]
    }, {
        "@id": "Engraving_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": "Engraving",
        "resources": ["EngPiano"],
        "layers": ["PianoLayer"],
        "sequences": [{
                "@id": "engraving normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "Page 1",
                        "@id": "Eng1",
                        "width": 773,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "Eng1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 1650,
                                    "width": 1275,
                                    "@id": "media/BreakBreak_score_001.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "EngAudio1",
                                "@type": "oa:Annotation",
                                "label": "Engraving, page 1",
                                "motivation": "sc:painting",
                                "resource": "EngPiano#t=0,23.67",
                                "on": "Eng1",
                                "within": "PianoLayer"
                            }, {
                                "@id": "EngPianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [{
                                        "@id": "30",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=79.5,177,137.5,247",
                                            "EngPiano#t=0,4.4"
                                        ]
                                    }, {
                                        "@id": "31",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=224.5,166,150.5,266.5",
                                            "EngPiano#t=4.4,6.01"
                                        ]
                                    }, {
                                        "@id": "32",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=382,160.5,175.5,266.5",
                                            "EngPiano#t=6.01,7.31"
                                        ]
                                    }, {
                                        "@id": "33",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=566,160.5,159,273.5",
                                            "EngPiano#t=7.31,8.56"
                                        ],
                                    }, {
                                        "@id": "34",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=736,162.5,191.5,272",
                                            "EngPiano#t=8.56,9.73"
                                        ],
                                    }, {
                                        "@id": "35",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=51,570,164.5,275.5",
                                            "EngPiano#t=9.73,10.88"
                                        ],
                                    }, {
                                        "@id": "36",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 10.88,
                                        "end": 12.13,
                                        "pageIndex": 0,
                                        "on": [
                                            "Eng1#xywh=226.5,570,118,273.5",
                                            "EngPiano#t=10.88,12.13"
                                        ],
                                    }, {
                                        "@id": "37",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 12.13,
                                        "end": 13.54,
                                        "pageIndex": 0,
                                        "on": [
                                            "Eng1#xywh=353.5,572,146.5,281",
                                            "EngPiano#t=12.13,13.54"
                                        ],
                                    }, {
                                        "@id": "330",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=69,368,152,53.5",
                                            "EngPiano#t=0,5.24"
                                        ],
                                    }, {
                                        "@id": "331",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=246,361,193,61",
                                            "EngPiano#t=5.24,8.7"
                                        ],
                                    }, {
                                        "@id": "332",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=376.5,232,193,84",
                                            "EngPiano#t=8.7,11.49"
                                        ],
                                    }, {
                                        "@id": "333",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=532,345,182.5,87.5",
                                            "EngPiano#t=11.49,14.42"
                                        ],
                                    }, {
                                        "@id": "334",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=732.5,337.5,191.5,86",
                                            "EngPiano#t=14.42,16.95"
                                        ],
                                    }, {
                                        "@id": "335",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=40.5,749,152,75",
                                            "EngPiano#t=16.95,20.12"
                                        ],
                                    }, {
                                        "@id": "336",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=215.5,656,145,80.5",
                                            "EngPiano#t=20.12,21.98"
                                        ]
                                    }, {
                                        "@id": "337",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=219,765,146.5,75",
                                            "EngPiano#t=21.98,24.41"
                                        ]
                                    }, {
                                        "@id": "338",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng1#xywh=376.5,658,125,91",
                                            "EngPiano#t=24.41,27.6"
                                        ]
                                    }]
                            }]
                    }, {
                        "label": "Page 2",
                        "@id": "Eng2",
                        "width": 773,
                        "height": 1000,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "Eng2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 1650,
                                    "width": 1275,
                                    "@id": "media/BreakBreak_score_002.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "EngAudio2",
                                "@type": "oa:Annotation",
                                "label": "Engraving, page 2",
                                "motivation": "sc:painting",
                                "resource": "EngPiano#t=23.68,75",
                                "on": "Eng2",
                                "within": "PianoLayer"
                            }, {
                                "@id": "Eng2PianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [{
                                        "@id": 9,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=383.5,770.5,118,73.5",
                                            "EngPiano#t=27.6,30.29"
                                        ]
                                    }, {
                                        "@id": 10,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=521.5,647,150.5,127",
                                            "EngPiano#t=30.29,33.3"
                                        ]
                                    }, {
                                        "@id": 11,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=695,647,80.5,200.5",
                                            "EngPiano#t=33.3,36.26"
                                        ]
                                    }, {
                                        "@id": 12,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=816.5,654.5,120,89.5",
                                            "EngPiano#t=36.26,39.08"
                                        ]
                                    }, {
                                        "@id": 13,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=103,885,102,93",
                                            "EngPiano#t=39.08,42.82"
                                        ]
                                    }, {
                                        "@id": 14,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=221,886.5,256,118",
                                            "EngPiano#t=42.82,46.94"
                                        ]
                                    }, {
                                        "@id": 15,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=500,888.5,259.5,116",
                                            "EngPiano#t=46.94,50.48"
                                        ]
                                    }, {
                                        "@id": 16,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=786,903,168,111",
                                            "EngPiano#t=50.48,54.13"
                                        ]
                                    }, {
                                        "@id": 17,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=101,990.5,104,100",
                                            "EngPiano#t=54.13,55.49"
                                        ]
                                    }, {
                                        "@id": 18,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=228,1026,71.5,84",
                                            "EngPiano#t=55.49,57.55"
                                        ]
                                    }, {
                                        "@id": 19,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=328.5,1021,316.5,95",
                                            "EngPiano#t=57.55,58.45"
                                        ]
                                    }, {
                                        "@id": 20,
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "Eng2#xywh=680.5,1035,234.5,111",
                                            "EngPiano#t=58.45,59.03"
                                        ]
                                    }]
                            }]
                    }]
            }]
    }, {
        "@id": "ManuscriptPoem",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": "Handwrote",
        "resources": [{
                "@id": "BBPiano",
                "@type": "oa:Annotation",
                "label": "Recording 4",
                "motivation": "sc:painting",
                "resource": {
                    "@id": "media/Recording4.m4a",
                    "@type": "dctypes:Sound",
                    "format": "audio/mpeg"
                }
            }],
        "layers": ["PianoLayer"],
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
                                "@id": "RBAudio1",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 1",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=0,135",
                                "on": "MS1",
                                "within": "PianoLayer"
                            }, {
                                "@id": "WrittenPoemBoxes",
                                "@type": "sc:AnnotationList",
                                "label": "chunks",
                                "@list": [{
                                        "@id": "50",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=79.5,177,137.5,247",
                                            "BBPiano#t=0,4.4"
                                        ]
                                    }, {
                                        "@id": "51",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=224.5,166,150.5,266.5",
                                            "BBPiano#t=4.4,6.01"
                                        ]
                                    }, {
                                        "@id": "52",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=382,160.5,175.5,266.5",
                                            "BBPiano#t=6.01,7.31"
                                        ]
                                    }, {
                                        "@id": "53",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=566,160.5,159,273.5",
                                            "BBPiano#t=7.31,8.56"
                                        ],
                                    }, {
                                        "@id": "54",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=736,162.5,191.5,272",
                                            "BBPiano#t=8.56,9.73"
                                        ],
                                    }, {
                                        "@id": "55",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=51,570,164.5,275.5",
                                            "BBPiano#t=9.73,10.88"
                                        ],
                                    }, {
                                        "@id": "56",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 10.88,
                                        "end": 12.13,
                                        "pageIndex": 0,
                                        "on": [
                                            "MS1#xywh=226.5,570,118,273.5",
                                            "BBPiano#t=10.88,12.13"
                                        ],
                                    }, {
                                        "@id": "57",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 12.13,
                                        "end": 13.54,
                                        "pageIndex": 0,
                                        "on": [
                                            "MS1#xywh=353.5,572,146.5,281",
                                            "BBPiano#t=12.13,13.54"
                                        ],
                                    }, {
                                        "@id": "50",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=69,368,152,53.5",
                                            "BBPiano#t=0,5.24"
                                        ],
                                    }, {
                                        "@id": "51",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=246,361,193,61",
                                            "BBPiano#t=5.24,8.7"
                                        ],
                                    }, {
                                        "@id": "52",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=376.5,232,193,84",
                                            "BBPiano#t=8.7,11.49"
                                        ],
                                    }, {
                                        "@id": "53",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=532,345,182.5,87.5",
                                            "BBPiano#t=11.49,14.42"
                                        ],
                                    }, {
                                        "@id": "54",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=732.5,337.5,191.5,86",
                                            "BBPiano#t=14.42,16.95"
                                        ],
                                    }, {
                                        "@id": "55",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=40.5,749,152,75",
                                            "BBPiano#t=16.95,20.12"
                                        ],
                                    }, {
                                        "@id": "56",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=215.5,656,145,80.5",
                                            "BBPiano#t=20.12,21.98"
                                        ]
                                    }, {
                                        "@id": "57",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xywh=219,765,146.5,75",
                                            "BBPiano#t=21.98,24.41"
                                        ]
                                    }, {
                                        "@id": "58",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "MS1#xy wh=376.5,658,125,91",
                                            "BBPiano#t=24.41,27.6"
                                        ]
                                    }]
                            }]
                    }]
            }]
    }, {
        "@id": "P_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": "Pink Book (5312/1)",
        "resources": ["BBPiano"],
        "layers": ["PianoLayer"],
        "sequences": [{
                "@id": "pink book normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                        "label": "11r",
                        "@id": "PB1",
                        "width": 1287,
                        "height": 1701,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB1",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3402,
                                    "width": 2574,
                                    "@id": "media/5312-1_fo11r.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "PBAudio1",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 1",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=0,23.67",
                                "on": "PB1",
                                "within": "PianoLayer"
                            }, {
                                "@id": "PB1PianoMeasures",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [{
                                        "@id": "a0",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=79.5,177,137.5,247",
                                            "BBPiano#t=0,4.4"
                                        ]
                                    }, {
                                        "@id": "a1",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=224.5,166,150.5,266.5",
                                            "BBPiano#t=4.4,6.01"
                                        ]
                                    }, {
                                        "@id": "a2",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=382,160.5,175.5,266.5",
                                            "BBPiano#t=6.01,7.31"
                                        ]
                                    }, {
                                        "@id": "a3",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=566,160.5,159,273.5",
                                            "BBPiano#t=7.31,8.56"
                                        ],
                                    }, {
                                        "@id": "a4",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=736,162.5,191.5,272",
                                            "BBPiano#t=8.56,9.73"
                                        ],
                                    }, {
                                        "@id": "a5",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=51,570,164.5,275.5",
                                            "BBPiano#t=9.73,10.88"
                                        ],
                                    }, {
                                        "@id": "a6",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 10.88,
                                        "end": 12.13,
                                        "pageIndex": 0,
                                        "on": [
                                            "PB1#xywh=226.5,570,118,273.5",
                                            "BBPiano#t=10.88,12.13"
                                        ],
                                    }, {
                                        "@id": "a7",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "start": 12.13,
                                        "end": 13.54,
                                        "pageIndex": 0,
                                        "on": [
                                            "PB1#xywh=353.5,572,146.5,281",
                                            "BBPiano#t=12.13,13.54"
                                        ],
                                    }, {
                                        "@id": "0a",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=69,368,152,53.5",
                                            "BBPiano#t=0,5.24"
                                        ],
                                    }, {
                                        "@id": "1",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=246,361,193,61",
                                            "BBPiano#t=5.24,8.7"
                                        ],
                                    }, {
                                        "@id": "2",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=376.5,232,193,84",
                                            "BBPiano#t=8.7,11.49"
                                        ],
                                    }, {
                                        "@id": "3",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=532,345,182.5,87.5",
                                            "BBPiano#t=11.49,14.42"
                                        ],
                                    }, {
                                        "@id": "4",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=732.5,337.5,191.5,86",
                                            "BBPiano#t=14.42,16.95"
                                        ],
                                    }, {
                                        "@id": "5",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=40.5,749,152,75",
                                            "BBPiano#t=16.95,20.12"
                                        ],
                                    }, {
                                        "@id": "6",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=215.5,656,145,80.5",
                                            "BBPiano#t=20.12,21.98"
                                        ]
                                    }, {
                                        "@id": "7",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=219,765,146.5,75",
                                            "BBPiano#t=21.98,24.41"
                                        ]
                                    }, {
                                        "@id": "8",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB1#xywh=376.5,658,125,91",
                                            "BBPiano#t=24.41,27.6"
                                        ]
                                    }]
                            }]
                    }, {
                        "label": "11v",
                        "@id": "PB2",
                        "width": 911,
                        "height": 1167,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB2",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3501,
                                    "width": 2733,
                                    "@id": "media/5312-1_fo11v-12r.jpg#xywh=0,0,2733,3501",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "PBAudio3",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 2",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=23.68,75",
                                "on": "PB2",
                                "within": "PianoLayer"
                            }, {
                                "@id": "PB2List",
                                "_comment": "The @id isn't real, the music is only within this file.",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": [{
                                        "@id": "69",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=383.5,770.5,118,73.5",
                                            "BBPiano#t=27.6,30.29"
                                        ]
                                    }, {
                                        "@id": "610",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=521.5,647,150.5,127",
                                            "BBPiano#t=30.29,33.3"
                                        ]
                                    }, {
                                        "@id": "611",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=695,647,80.5,200.5",
                                            "BBPiano#t=33.3,36.26"
                                        ]
                                    }, {
                                        "@id": "612",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=816.5,654.5,120,89.5",
                                            "BBPiano#t=36.26,39.08"
                                        ]
                                    }, {
                                        "@id": "613",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=103,885,102,93",
                                            "BBPiano#t=39.08,42.82"
                                        ]
                                    }, {
                                        "@id": "614",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=221,886.5,256,118",
                                            "BBPiano#t=42.82,46.94"
                                        ]
                                    }, {
                                        "@id": "615",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=500,888.5,259.5,116",
                                            "BBPiano#t=46.94,50.48"
                                        ]
                                    }, {
                                        "@id": "616",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=786,903,168,111",
                                            "BBPiano#t=50.48,54.13"
                                        ]
                                    }, {
                                        "@id": "617",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=101,990.5,104,100",
                                            "BBPiano#t=54.13,55.49"
                                        ]
                                    }, {
                                        "@id": "618",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=228,1026,71.5,84",
                                            "BBPiano#t=55.49,57.55"
                                        ]
                                    }, {
                                        "@id": "619",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=328.5,1021,316.5,95",
                                            "BBPiano#t=57.55,58.45"
                                        ]
                                    }, {
                                        "@id": "620",
                                        "@type": "oa:Annotation",
                                        "motivation": "sc:painting",
                                        "label": "",
                                        "on": [
                                            "PB2#xywh=680.5,1035,234.5,111",
                                            "BBPiano#t=58.45,59.03"
                                        ]
                                    }]
                            }]
                    }, {
                        "label": "12r",
                        "@id": "PB3",
                        "width": 959,
                        "height": 1200,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB3",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3600,
                                    "width": 2877,
                                    "@id": "media/5312-1_fo11v-12r.jpg#xywh=2733,0,2877,3600",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "PBAudio3",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 3",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=75,112",
                                "on": "PB3",
                                "within": "PianoLayer"
                            }, {
                                "@id": "PB3List",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": []
                            }]
                    }, {
                        "label": "12v",
                        "@id": "PB4",
                        "width": 956,
                        "height": 1198,
                        "@type": "sc:Canvas",
                        "images": [{
                                "@type": "oa:Annotation",
                                "motivation": "sc:painting",
                                "on": "PB4",
                                "resource": {
                                    "format": "image/jpeg",
                                    "height": 3594,
                                    "width": 2868,
                                    "@id": "media/5312-1_fo12v.jpg",
                                    "@type": "dcterms:Image"
                                }
                            }],
                        "otherContent": [{
                                "@id": "PBAudio4",
                                "@type": "oa:Annotation",
                                "label": "Recording 4, page 4",
                                "motivation": "sc:painting",
                                "resource": "BBPiano#t=112,144",
                                "on": "PB4",
                                "within": "PianoLayer"
                            }, {
                                "@id": "PB4List",
                                "@type": "sc:AnnotationList",
                                "label": "measures",
                                "@list": []
                            }]
                    }]
            }]
    }]);

sounding.value('TEXT', [{
        "@id": "HMS",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "cnt:chars",
        "label": "Published Text",
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
    },
    {
        "@id": "TextToBreak",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "cnt:chars",
        "@value": "Break, break, break occupies a special place in that it is the only poem that Emily Tennyson set and that her husband, Alfred Tennyson, later recorded on a phonograph. The poet laureate may have deemed it especially worthy of preservation because during his lifetime it had already attracted myriad scansions by composers and poetic theorists. The poem still elicits much critical attention regarding how to speak the first line. The poem has uneven line lengths, varying from seven to eleven beats in addition to the famous three-beat line \"Break, break, break.\" Do we read to the commas between \"Break, break, break,\" thereby stretching the line approximately to the length of the rest of the poem's lines? If we break, how long should the pause be? Or do we roll through the commas as Tennyson frequently does in the extant phonograph recitations. In her diary, Emily Tennyson gestures to the last every time that she mentions the poem. She leaves out the commas when noting that Alfred read Break Break in 1857, a child says Break break to her in 1859, and when Elizabeth Jane, Lady  Charlemont and wife of James Molyneux, 3rd earl of Charlemont reads Break break break in the poet's presence in 1871: This, the only extant copy of the diary, was re-written by Emily for Hallam's use in preparing Tennyson’s memoir after his death. The diarist may have consistently omitted the commas because she was writing hurriedly. Emily's piano/vocal scores give us some idea of her husband's recitations, as a note from their son makes clear. In the fly-leaf of one of his mother's four music manuscript books, Hallam made a note at the prompting of a prominent composer who also set some of Tennyson's poems: If we examine Emily Tennyson's piano/vocal score of Break, Break, Break, we see that she heard the first line of poem as in the manuscript: It does not include a comma after the third \"break\" as does the published version. The musical setting similarly breaks after the first two words, and then runs over the line break. With fermatas and rests on the first two \"breaks,\" singing this music demands melodramatic emphasis on each of the first two words, before continuing onto the ideas of the rest of the stanza: the speaker's heartbreak heard in the breaking surf. When \"Break, break, break\" repeats as the first line of the last stanza, we see that Emily sets the words both to and against punctuation. Reading the two lines as published poetry, they look exactly the same. However, the commas are no longer strongly marked by rests in Emily's setting of line 13. Of course, there is inherent separation between the three stressed words because of the concluding \"k\", but the overall effect is to carry on.",
        "formatting": [
            {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=0,19",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#poem,title"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=995,1006",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#poem,title"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=1029,1040",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#poem,title"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=1154,1171",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#poem,title"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=1754,1773",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#poem,title"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=0,850",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#paragraph"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=851,1423",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#paragraph"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=1424,2270",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#paragraph"
            }, {
                "@type": "oa:Annotation",
                "on": "TextToBreak#offset=2271,2713",
                "motivation": "rr:formatting",
                "oa:hasStyle": "MainStyle#paragraph"
            }
        ]
    }]);
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
    "metadata": [{
            "label": "author",
            "value": "Phyllis Weliver"
        }, {
            "label": "title",
            "value": "To Break or not to Break?"
        }, {
            "label": "subtitle",
            "value": "Recording Tennyson’s Recitation of ‘Break, Break, Break’ in Music"
        }],
    "resource": "data/essayBreakToBreak.xml",
    "style": "data/essayStyle.xsl",
    "footnotes": [],
    "endnotes": [],
    "indices": [],
    "comments": [],
    "otherContent": []
}]);

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
        "on": "HMS#offset=0,20",
        "evidence": ["HMS#offset=0,20"],
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
        "resource": "HMS#offset=0,20", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,250,750,120", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,250,750,120", // target on a sc:Canvas engraving
            "MS1#xywh=220,250,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=3,15" // target on an audio resource
        ]
    }, {
        "@id": "line_2",
        "@type": "oa:Annotation",
        "resource": "HMS#offset=21,52", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,100,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,100,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,280,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=15,25" // target on an audio resource
        ]
    }, {
        "@id": "line_3",
        "@type": "oa:Annotation", "resource": "HMS#offset=53,91", // offset selector: start,end

        "oa:hasTarget": [
            "RB1#xywh=20,140,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,140,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,360,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=25,30" // target on an audio resource
        ]
    }, {
        "@id": "line_4",
        "@type": "oa:Annotation", "resource": "HMS#offset=92,122", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,180,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,180,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,400,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=30,35" // target on an audio resource
        ]
    }, {
        "@id": "line_5",
        "@type": "oa:Annotation", "resource": "HMS#offset=124,156", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,220,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,220,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,460,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=35,40" // target on an audio resource
        ]
    }, {
        "@id": "line_6",
        "@type": "oa:Annotation", "resource": "HMS#offset=157,196", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,280,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,280,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,500,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=40,45" // target on an audio resource
        ]
    }, {
        "@id": "line_7",
        "@type": "oa:Annotation", "resource": "HMS#offset=197,224", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,320,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,320,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,560,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=45,50" // target on an audio resource
        ]
    }, {
        "@id": "line_8",
        "@type": "oa:Annotation", "resource": "HMS#offset=225,262", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,400,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,400,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,620,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=50,55" // target on an audio resource
        ]
    }, {
        "@id": "line_9",
        "@type": "oa:Annotation", "resource": "HMS#offset=264,291", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,450,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,450,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,680,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=55,60" // target on an audio resource
        ]
    }, {
        "@id": "line_10",
        "@type": "oa:Annotation", "resource": "HMS#offset=292,322", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,500,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,500,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,750,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=60,65" // target on an audio resource
        ]
    }, {
        "@id": "line_11",
        "@type": "oa:Annotation", "resource": "HMS#offset=323,362", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,550,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,550,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,800,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=65,70" // target on an audio resource
        ]
    }, {
        "@id": "line_12",
        "@type": "oa:Annotation", "resource": "HMS#offset=363,402", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,600,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,600,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,850,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=70,75" // target on an audio resource
        ]
    }, {
        "@id": "line_13",
        "@type": "oa:Annotation", "resource": "HMS#offset=404,423", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,650,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,650,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,900,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=75,80" // target on an audio resource
        ]
    }, {
        "@id": "line_14",
        "@type": "oa:Annotation", "resource": "HMS#offset=424,456", // offset selector: start,end
        "oa:hasTarget": [
            "RB1#xywh=20,700,750,40", // target on a sc:Canvas manuscript
            "Eng1#xywh=20,700,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,950,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=80,85" // target on an audio resource
        ]
    }, {
        "@id": "line_15",
        "@type": "oa:Annotation", "resource": "HMS#offset=457,499", // offset selector: start,end
        "oa:hasTarget": [
            "RB2#xywh=20,60,750,40", // target on a sc:Canvas manuscript
            "Eng2#xywh=20,60,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,1000,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=85,90" // target on an audio resource
        ]
    }, {
        "@id": "line_16",
        "@type": "oa:Annotation", "resource": "HMS#offset=500,527", // offset selector: start,end
        "oa:hasTarget": [
            "RB2#xywh=20,120,750,40", // target on a sc:Canvas manuscript
            "Eng2#xywh=20,120,750,40", // target on a sc:Canvas engraving
            "MS1#xywh=220,1100,750,90", // target on a sc:Canvas handwrote
            "EngPiano#t=90,95" // target on an audio resource
        ]
    }
]);