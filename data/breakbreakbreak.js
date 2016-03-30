/* global sounding */

sounding.value('RESOURCES', [{
  "@id": "Break_Break_Break_AET",
  "@type": "oa:Annotation",
  "label": "Break, Break, Break (Emily Tennyson)",
  "motivation": "performance",
  "resource": {
    "@id": "media/audio/Break_Break_Break_AET.mp3",
    "@type": "dctypes:Sound",
    "format": "audio/mpeg"
  }
}, {
  "@id": "Break_Break_Break_Janotha",
  "@type": "oa:Annotation",
  "label": "Break, Break, Break (arr Janotha)",
  "motivation": "performance",
  "resource": {
    "@id": "media/audio/Break_Break_Break_Janotha.mp3",
    "@type": "dctypes:Sound",
    "format": "audio/mpeg"
  }
}, {
  "@id": "Break_Break_Break_Henschel",
  "@type": "oa:Annotation",
  "label": "Break, Break, Break (Henschel)",
  "motivation": "performance",
  "resource": {
    "@id": "media/audio/Break_Break_Break_Henschel.mp3",
    "@type": "dctypes:Sound",
    "format": "audio/mpeg"
  }
}]);
sounding.value('MANIFESTS', [
{
  "@id": "Henschel_Manifest",
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@type": "sc:Manifest",
  "label": 'Henschel, “Break”',
  "description": 'from https://musopen.org/sheetmusic/17538/george-henschel/break-break-break/',
  "resources": ["Break_Break_Break_Henschel"],
  "layers": ["PianoLayer"],
  "metadata":[
  {}
  ],
  "sequences": [{
    "@id": "Henschel normal sequence",
    "@type": "sc:Sequence",
    "canvases": [{
      "label": "1",
      "@id": "Henschel1",
      "width": 1524,
      "height": 2150,
      "@type": "sc:Canvas",
      "images": [{
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "on": "Henschel1",
        "resource": {
          "format": "image/jpeg",
          "height": 2866,
          "width": 2032,
          "@id": "media/Henschel/HenschelScore1.jpg",
          "@type": "dcterms:Image"
        }
      }],
      "otherContent": [{
        "@id":"Haudio",
        "@type":"oa:Annotation",
        "label": "page 1",
        "motivation": "sc:painting",
        "resource": "Break_Break_Break_Henschel#t=0,60.03",
        "on": "Henschel1",
        "within": "PianoLayer"
      },{
        "@id": "H1PianoMeasures",
        "@type": "sc:AnnotationList",
        "label": "measures",
        "@list": [
        {
          "@id": 00101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=312,485,212,382",
          "Break_Break_Break_Henschel#t=0,5.53"
          ]
        },
        {
          "@id": 10101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=546,485,186,382",
          "Break_Break_Break_Henschel#t=5.53,10.2"
          ]
        },
        {
          "@id": 20101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=751,485,148,382",
          "Break_Break_Break_Henschel#t=10.2,14.99"
          ]
        },
        {
          "@id": 30101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=918,485,194,382",
          "Break_Break_Break_Henschel#t=14.99,19.41"
          ]
        },
        {
          "@id": 40101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=1132,485,145,382",
          "Break_Break_Break_Henschel#t=19.41,22.78"
          ]
        },
        {
          "@id": 50101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=232,934,237,345",
          "Break_Break_Break_Henschel#t=22.78,25.65"
          ]
        },
        {
          "@id": 60101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=482,934,161,345",
          "Break_Break_Break_Henschel#t=25.65,29.91"
          ]
        },
        {
          "@id": 70101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=659,934,221,345",
          "Break_Break_Break_Henschel#t=29.91,33.97"
          ]
        },
        {
          "@id": 80101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=902,934,158,345",
          "Break_Break_Break_Henschel#t=33.97,39.05"
          ]
        },
        {
          "@id": 90101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=1081,934,191,345",
          "Break_Break_Break_Henschel#t=39.05,46.02"
          ]
        },
        {
          "@id": 100101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=234,1335,186,375",
          "Break_Break_Break_Henschel#t=46.02,49.13"
          ]
        },
        {
          "@id": 110101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=439,1335,97,375",
          "Break_Break_Break_Henschel#t=49.13,54.91"
          ]
        },
        {
          "@id": 120101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=557,1335,390,375",
          "Break_Break_Break_Henschel#t=54.91,57"
          ]
        },
        {
          "@id": 130101,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel1#xywh=963,1335,315,375",
          "Break_Break_Break_Henschel#t=57,60.03"
          ]
        }
        ]
      }]
    }, {
      "label": "2",
      "@id": "Henschel2",
      "width": 1524,
      "height": 2150,
      "@type": "sc:Canvas",
      "images": [{
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "on": "Henschel2",
        "resource": {
          "format": "image/jpeg",
          "height": 2866,
          "width": 2032,
          "@id": "media/Henschel/HenschelScore2.jpg",
          "@type": "dcterms:Image"
        }
      }],
      "otherContent": [{
        "@id":"Haudio",
        "@type":"oa:Annotation",
        "label": "page 2",
        "motivation": "sc:painting",
        "resource": "Break_Break_Break_Henschel#t=60.03,81.22",
        "on": "Henschel2",
        "within": "PianoLayer"
      },{
        "@id": "H2PianoMeasures",
        "@type": "sc:AnnotationList",
        "label": "measures",
        "@list": [
        {
          "@id": 00102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=218,250,506,344",
          "Break_Break_Break_Henschel#t=60.03,62.45"
          ]
        },
        {
          "@id": 10102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=737,250,525,344",
          "Break_Break_Break_Henschel#t=62.45,65.15"
          ]
        },
        {
          "@id": 20102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=207,619,541,315",
          "Break_Break_Break_Henschel#t=65.15,67.69"
          ]
        },
        {
          "@id": 30102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=767,619,492,315",
          "Break_Break_Break_Henschel#t=67.69,70.56"
          ]
        },
        {
          "@id": 40102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=212,979,557,331",
          "Break_Break_Break_Henschel#t=70.56,72.93"
          ]
        },
        {
          "@id": 50102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=783,979,476,331",
          "Break_Break_Break_Henschel#t=72.93,75.67"
          ]
        },
        {
          "@id": 60102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=207,1340,535,360",
          "Break_Break_Break_Henschel#t=75.67,78.38"
          ]
        },
        {
          "@id": 70102,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel2#xywh=759,1340,497,360",
          "Break_Break_Break_Henschel#t=78.38,81.22"
          ]
        }
        ]
      }]
    }, {
      "label": "3",
      "@id": "Henschel3",
      "width": 1524,
      "height": 2150,
      "@type": "sc:Canvas",
      "images": [{
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "on": "Henschel3",
        "resource": {
          "format": "image/jpeg",
          "height": 2866,
          "width": 2032,
          "@id": "media/Henschel/HenschelScore3.jpg",
          "@type": "dcterms:Image"
        }
      }],
      "otherContent": [{
        "@id":"Haudio",
        "@type":"oa:Annotation",
        "label": "page 3",
        "motivation": "sc:painting",
        "resource": "Break_Break_Break_Henschel#t=81.22,112.84",
        "on": "Henschel3",
        "within": "PianoLayer"
      },
      {
        "@id": "H3PianoMeasures",
        "@type": "sc:AnnotationList",
        "label": "measures",
        "@list": [
        {
          "@id": 002023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=229,255,457,352",
          "Break_Break_Break_Henschel#t=81.22,83.76"
          ]
        },
        {
          "@id": 102023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=702,255,579,352",
          "Break_Break_Break_Henschel#t=83.76,86.59"
          ]
        },
        {
          "@id": 202023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=229,627,614,318",
          "Break_Break_Break_Henschel#t=86.59,89.13"
          ]
        },
        {
          "@id": 302023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=856,627,425,318",
          "Break_Break_Break_Henschel#t=89.13,93.3"
          ]
        },
        {
          "@id": 402023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=234,977,298,326",
          "Break_Break_Break_Henschel#t=93.3,97.69"
          ]
        },
        {
          "@id": 502023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=546,977,377,326",
          "Break_Break_Break_Henschel#t=97.69,100.4"
          ]
        },
        {
          "@id": 602023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=939,977,336,326",
          "Break_Break_Break_Henschel#t=100.4,102.86"
          ]
        },
        {
          "@id": 702023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=232,1340,320,331",
          "Break_Break_Break_Henschel#t=102.86,105.47"
          ]
        },
        {
          "@id": 802023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=568,1340,186,331",
          "Break_Break_Break_Henschel#t=105.47,108.01"
          ]
        },
        {
          "@id": 902023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=772,1340,229,331",
          "Break_Break_Break_Henschel#t=108.01,110.39"
          ]
        },
        {
          "@id": 1002023,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel3#xywh=1020,1340,212,331",
          "Break_Break_Break_Henschel#t=110.39,112.84"
          ]
        }]
      }]
    }, {
      "label": "4",
      "@id": "Henschel4",
      "width": 1524,
      "height": 2150,
      "@type": "sc:Canvas",
      "images": [{
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "on": "Henschel4",
        "resource": {
          "format": "image/jpeg",
          "height": 2866,
          "width": 2032,
          "@id": "media/Henschel/HenschelScore4.jpg",
          "@type": "dcterms:Image"
        }
      }],
      "otherContent": [{
        "@id":"Haudio",
        "@type":"oa:Annotation",
        "label": "page 4",
        "motivation": "sc:painting",
        "resource": "Break_Break_Break_Henschel#t=112.84,169.6",
        "on": "Henschel4",
        "within": "PianoLayer"
      },
      {
        "@id": "H4PianoMeasures",
        "@type": "sc:AnnotationList",
        "label": "measures",
        "@list": [{
          "@id": 00404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=210,245,296,336",
          "Break_Break_Break_Henschel#t=112.84,115.76"
          ]
        },
        {
          "@id": 10404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=522,245,234,336",
          "Break_Break_Break_Henschel#t=115.76,118.46"
          ]
        },
        {
          "@id": 20404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=778,245,221,336",
          "Break_Break_Break_Henschel#t=118.46,121.04"
          ]
        },
        {
          "@id": 30404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=1017,245,240,336",
          "Break_Break_Break_Henschel#t=121.04,123.83"
          ]
        },
        {
          "@id": 40404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=212,616,283,336",
          "Break_Break_Break_Henschel#t=123.83,127.15"
          ]
        },
        {
          "@id": 50404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=511,616,253,336",
          "Break_Break_Break_Henschel#t=127.15,130.46"
          ]
        },
        {
          "@id": 60404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=783,616,202,336",
          "Break_Break_Break_Henschel#t=130.46,133.5"
          ]
        },
        {
          "@id": 70404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=996,616,261,336",
          "Break_Break_Break_Henschel#t=133.5,136.49"
          ]
        },
        {
          "@id": 80404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=212,984,315,334",
          "Break_Break_Break_Henschel#t=136.49,140.38"
          ]
        },
        {
          "@id": 90404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=549,984,229,334",
          "Break_Break_Break_Henschel#t=140.38,144.14"
          ]
        },
        {
          "@id": 100404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=788,984,285,334",
          "Break_Break_Break_Henschel#t=144.14,147.38"
          ]
        },
        {
          "@id": 110404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=1090,984,169,334",
          "Break_Break_Break_Henschel#t=147.38,151.12"
          ]
        },
        {
          "@id": 120404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=212,1348,288,355",
          "Break_Break_Break_Henschel#t=151.12,155.22"
          ]
        },
        {
          "@id": 130404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=520,1348,186,355",
          "Break_Break_Break_Henschel#t=155.22,158.54"
          ]
        },
        {
          "@id": 140404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=721,1348,183,355",
          "Break_Break_Break_Henschel#t=158.54,161.76"
          ]
        },
        {
          "@id": 150404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=920,1348,129,355",
          "Break_Break_Break_Henschel#t=161.76,166.31"
          ]
        },
        {
          "@id": 160404,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel4#xywh=1055,1348,207,355",
          "Break_Break_Break_Henschel#t=166.31,169.6"
          ]
        }]
      }]
    }, {
      "label": "5",
      "@id": "Henschel5",
      "width": 1524,
      "height": 2150,
      "@type": "sc:Canvas",
      "images": [{
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "on": "Henschel5",
        "resource": {
          "format": "image/jpeg",
          "height": 2866,
          "width": 2032,
          "@id": "media/Henschel/HenschelScore5.jpg",
          "@type": "dcterms:Image"
        }
      }],
      "otherContent": [{
        "@id":"Haudio",
        "@type":"oa:Annotation",
        "label": "page 5",
        "motivation": "sc:painting",
        "resource": "Break_Break_Break_Henschel#t=169.6,201.29",
        "on": "Henschel5",
        "within": "PianoLayer"
      },
      {
        "@id": "H5PianoMeasures",
        "@type": "sc:AnnotationList",
        "label": "measures",
        "@list": [{
          "@id": 00505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=232,226,342,382",
          "Break_Break_Break_Henschel#t=169.6,174.26"
          ]
        },
        {
          "@id": 10505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=586,226,342,382",
          "Break_Break_Break_Henschel#t=174.26,178.52"
          ]
        },
        {
          "@id": 20505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=941,226,161,382",
          "Break_Break_Break_Henschel#t=178.52,181.06"
          ]
        },
        {
          "@id": 30505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=1117,226,164,382",
          "Break_Break_Break_Henschel#t=181.06,184.95"
          ]
        },
        {
          "@id": 40505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=229,611,581,374",
          "Break_Break_Break_Henschel#t=184.95,187.45"
          ]
        },
        {
          "@id": 50505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=821,611,454,374",
          "Break_Break_Break_Henschel#t=187.45,190.47"
          ]
        },
        {
          "@id": 60505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=218,996,508,366",
          "Break_Break_Break_Henschel#t=190.47,193.01"
          ]
        },
        {
          "@id": 70505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=740,996,538,366",
          "Break_Break_Break_Henschel#t=193.01,195.75"
          ]
        },
        {
          "@id": 80505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=224,1367,511,309",
          "Break_Break_Break_Henschel#t=195.75,198.38"
          ]
        },
        {
          "@id": 90505,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel5#xywh=751,1367,527,309",
          "Break_Break_Break_Henschel#t=198.38,201.29"
          ]
        }]
      }]
    }, {
      "label": "6",
      "@id": "Henschel6",
      "width": 1524,
      "height": 2150,
      "@type": "sc:Canvas",
      "images": [{
        "@type": "oa:Annotation",
        "motivation": "sc:painting",
        "on": "Henschel6",
        "resource": {
          "format": "image/jpeg",
          "height": 2866,
          "width": 2032,
          "@id": "media/Henschel/HenschelScore6.jpg",
          "@type": "dcterms:Image"
        }
      }],
      "otherContent": [{
        "@id":"Haudio",
        "@type":"oa:Annotation",
        "label": "page 6",
        "motivation": "sc:painting",
        "resource": "Break_Break_Break_Henschel#t=201.29,272",
        "on": "Henschel6",
        "within": "PianoLayer"
      },
      {
        "@id": "H6PianoMeasures",
        "@type": "sc:AnnotationList",
        "label": "measures",
        "@list": [{
          "@id": 00606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=212,250,535,328",
          "Break_Break_Break_Henschel#t=201.29,203.91"
          ]
        },
        {
          "@id": 10606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=767,250,492,328",
          "Break_Break_Break_Henschel#t=203.91,206.86"
          ]
        },
        {
          "@id": 20606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=204,605,520,385",
          "Break_Break_Break_Henschel#t=206.86,209.76"
          ]
        },
        {
          "@id": 30606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=742,605,183,385",
          "Break_Break_Break_Henschel#t=209.76,212.92"
          ]
        },
        {
          "@id": 40606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=941,605,164,385",
          "Break_Break_Break_Henschel#t=212.92,217.67"
          ]
        },
        {
          "@id": 50606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=1114,605,143,385",
          "Break_Break_Break_Henschel#t=217.67,222.29"
          ]
        },
        {
          "@id": 60606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=215,1020,242,369",
          "Break_Break_Break_Henschel#t=222.29,227.09"
          ]
        },
        {
          "@id": 70606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=474,1020,137,369",
          "Break_Break_Break_Henschel#t=227.09,231.39"
          ]
        },
        {
          "@id": 80606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=627,1020,204,369",
          "Break_Break_Break_Henschel#t=231.39,237.37"
          ]
        },
        {
          "@id": 90606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=847,1020,102,369",
          "Break_Break_Break_Henschel#t=237.37,241.06"
          ]
        },
        {
          "@id": 100606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=966,1020,132,369",
          "Break_Break_Break_Henschel#t=241.06,244.7"
          ]
        },
        {
          "@id": 110606,
          "@type": "oa:Annotation",
          "motivation": "sc:painting",
          "label": "",
          "on": [
          "Henschel6#xywh=1117,1020,143,369",
          "Break_Break_Break_Henschel#t=244.7,null"
          ]
        }]
      }]
    }]
  }]
},   {
  "@id": "AET_Engraving_Manifest",
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@type": "sc:Manifest",
  "label": 'Emily Tennyson, “Break," Engraving',
  "description": '"Break, Break, Break”, music by Emily Tennyson, words by Alfred Tennyson, Engraving',
  "resources": ["Break_Break_Break_AET"],
  "layers": ["PianoLayer"],
  "sequences": [{
    "@id": "music album normal sequence",
    "@type": "sc:Sequence",
    "canvases": [{
      "label": "1",
      "@id": "AETE1",
            "width": 1277*1.175, // weird trouble with augmented notes
            "height": 1650*1.175,
            "@type": "sc:Canvas",
            "images": [{
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "on": "AETE1",
              "resource": {
                "format": "image/jpeg",
                "height": 1650,
                "width": 1277,
                "@id": "media/engraving/Break_break-FINAL-p1.jpg",
                "@type": "dcterms:Image"
              }
            }],
            "otherContent": [{
              "@id":"aete1audio",
              "@type":"oa:Annotation",
              "label": "page 1",
              "motivation": "sc:painting",
              "resource": "Break_Break_Break_AET#t=0,54.11",
              "on": "AETE1",
              "within": "PianoLayer"
            },
            {
              "@id": "E1PianoMeasures",
              "@type": "sc:AnnotationList",
              "label": "measures",
              "@list": [{
                "@id": "0p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=168,171,265,366",
                "Break_Break_Break_AET#t=0,2.53"
                ]
              },
              {
                "@id": "1p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=447,171,141,366",
                "Break_Break_Break_AET#t=2.53,3.83"
                ]
              },
              {
                "@id": "2p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=607,171,135,366",
                "Break_Break_Break_AET#t=3.83,5.5"
                ]
              },
              {
                "@id": "3p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=758,171,152,366",
                "Break_Break_Break_AET#t=5.5,7.02"
                ]
              },
              {
                "@id": "4p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=923,171,143,366",
                "Break_Break_Break_AET#t=7.02,8.3"
                ]
              },
              {
                "@id": "5p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1083,171,141,366",
                "Break_Break_Break_AET#t=8.3,9.45"
                ]
              },
              {
                "@id": "6p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1243,171,146,366",
                "Break_Break_Break_AET#t=9.45,10.65"
                ]
              },
              {
                "@id": "7p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=124,607,265,347",
                "Break_Break_Break_AET#t=10.65,11.9"
                ]
              },
              {
                "@id": "8p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=406,607,171,347",
                "Break_Break_Break_AET#t=11.9,13.33"
                ]
              },
              {
                "@id": "9p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=592,607,114,347",
                "Break_Break_Break_AET#t=13.33,15.13"
                ]
              },
              {
                "@id": "10p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=723,607,116,347",
                "Break_Break_Break_AET#t=15.13,17.92"
                ]
              },
              {
                "@id": "11p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=853,607,111,347",
                "Break_Break_Break_AET#t=17.92,20.66"
                ]
              },
              {
                "@id": "12p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=972,607,149,347",
                "Break_Break_Break_AET#t=20.66,23.16"
                ]
              },
              {
                "@id": "13p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1140,607,114,347",
                "Break_Break_Break_AET#t=23.16,25.02"
                ]
              },
              {
                "@id": "14p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1267,607,122,347",
                "Break_Break_Break_AET#t=25.02,26.86"
                ]
              },
              {
                "@id": "15p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=124,1032,236,354",
                "Break_Break_Break_AET#t=26.86,28.91"
                ]
              },
              {
                "@id": "16p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=373,1032,135,354",
                "Break_Break_Break_AET#t=28.91,30.28"
                ]
              },
              {
                "@id": "17p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=531,1032,105,354",
                "Break_Break_Break_AET#t=30.28,31.72"
                ]
              },
              {
                "@id": "18p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=653,1032,135,354",
                "Break_Break_Break_AET#t=31.72,33.7"
                ]
              },
              {
                "@id": "19p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=807,1032,152,354",
                "Break_Break_Break_AET#t=33.7,35.4"
                ]
              },
              {
                "@id": "20p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=974,1032,108,354",
                "Break_Break_Break_AET#t=35.4,37.42"
                ]
              },
              {
                "@id": "21p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1096,1032,78,354",
                "Break_Break_Break_AET#t=37.42,39.85"
                ]
              },
              {
                "@id": "22p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1193,1032,55,354",
                "Break_Break_Break_AET#t=39.85,40.9"
                ]
              },
              {
                "@id": "23p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1258,1032,127,354",
                "Break_Break_Break_AET#t=40.9,42.32"
                ]
              },
              {
                "@id": "24p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=122,1470,238,366",
                "Break_Break_Break_AET#t=42.32,43.65"
                ]
              },
              {
                "@id": "25p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=377,1470,133,366",
                "Break_Break_Break_AET#t=43.65,45.2"
                ]
              },
              {
                "@id": "26p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=527,1470,149,366",
                "Break_Break_Break_AET#t=45.2,46.64"
                ]
              },
              {
                "@id": "27p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=695,1470,120,366",
                "Break_Break_Break_AET#t=46.64,48.15"
                ]
              },
              {
                "@id": "28p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=834,1470,124,366",
                "Break_Break_Break_AET#t=48.15,49.67"
                ]
              },
              {
                "@id": "29p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=977,1470,122,366",
                "Break_Break_Break_AET#t=49.67,51.14"
                ]
              },
              {
                "@id": "30p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1110,1470,135,366",
                "Break_Break_Break_AET#t=51.14,52.45"
                ]
              },
              {
                "@id": "31p0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE1#xywh=1262,1470,124,366",
                "Break_Break_Break_AET#t=52.45,54.11"
                ]
              }]
            }]
          },{
            "label": "2",
            "@id": "AETE2",
            "width": 1277*1.175, // weird trouble with augmented notes
            "height": 1650*1.175,
            "@type": "sc:Canvas",
            "images": [{
              "@type": "oa:Annotation",
              "motivation": "sc:painting",
              "on": "AETE2",
              "resource": {
                "format": "image/jpeg",
                "height": 1650,
                "width": 1277,
                "@id": "media/engraving/Break_break-FINAL-p2.jpg",
                "@type": "dcterms:Image"
              }
            }],
            "otherContent": [{
              "@id":"aete2audio",
              "@type":"oa:Annotation",
              "label": "page 2",
              "motivation": "sc:painting",
              "resource": "Break_Break_Break_AET#t=54.11,121",
              "on": "AETE2",
              "within": "PianoLayer"
            },
            {
              "@id": "E2PianoMeasures",
              "@type": "sc:AnnotationList",
              "label": "measures",
              "@list": [{
                "@id": "0p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=124,168,225,373",
                "Break_Break_Break_AET#t=54.11,55.5"
                ]
              },
              {
                "@id": "1p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=365,168,120,373",
                "Break_Break_Break_AET#t=55.5,57"
                ]
              },
              {
                "@id": "2p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=495,168,84,373",
                "Break_Break_Break_AET#t=57,59.09"
                ]
              },
              {
                "@id": "3p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=596,168,73,373",
                "Break_Break_Break_AET#t=59.09,60.44"
                ]
              },
              {
                "@id": "4p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=691,168,120,373",
                "Break_Break_Break_AET#t=60.44,62.02"
                ]
              },
              {
                "@id": "5p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=822,168,120,373",
                "Break_Break_Break_AET#t=62.02,63.8"
                ]
              },
              {
                "@id": "6p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=961,168,154,373",
                "Break_Break_Break_AET#t=63.8,65.66"
                ]
              },
              {
                "@id": "7p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1129,168,122,373",
                "Break_Break_Break_AET#t=65.66,67.16"
                ]
              },
              {
                "@id": "8p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1269,168,120,373",
                "Break_Break_Break_AET#t=67.16,69.1"
                ]
              },
              {
                "@id": "9p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=127,609,230,352",
                "Break_Break_Break_AET#t=69.1,71.26"
                ]
              },
              {
                "@id": "10p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=373,609,127,352",
                "Break_Break_Break_AET#t=71.26,72.76"
                ]
              },
              {
                "@id": "11p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=514,609,143,352",
                "Break_Break_Break_AET#t=72.76,74.72"
                ]
              },
              {
                "@id": "12p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=672,609,130,352",
                "Break_Break_Break_AET#t=74.72,76.54"
                ]
              },
              {
                "@id": "13p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=815,609,143,352",
                "Break_Break_Break_AET#t=76.54,78.43"
                ]
              },
              {
                "@id": "14p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=977,609,135,352",
                "Break_Break_Break_AET#t=78.43,79.94"
                ]
              },
              {
                "@id": "15p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1129,609,139,352",
                "Break_Break_Break_AET#t=79.94,82.48"
                ]
              },
              {
                "@id": "16p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1281,609,105,352",
                "Break_Break_Break_AET#t=82.48,85.89"
                ]
              },
              {
                "@id": "17p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=120,1039,213,354",
                "Break_Break_Break_AET#t=85.89,89.09"
                ]
              },
              {
                "@id": "18p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=346,1039,116,354",
                "Break_Break_Break_AET#t=89.09,91.47"
                ]
              },
              {
                "@id": "19p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=479,1039,179,354",
                "Break_Break_Break_AET#t=91.47,94.17"
                ]
              },
              {
                "@id": "20p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=677,1039,162,354",
                "Break_Break_Break_AET#t=94.17,95.61"
                ]
              },
              {
                "@id": "21p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=850,1039,160,354",
                "Break_Break_Break_AET#t=95.61,97.47"
                ]
              },
              {
                "@id": "22p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1020,1039,184,354",
                "Break_Break_Break_AET#t=97.47,100.45"
                ]
              },
              {
                "@id": "23p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1218,1039,171,354",
                "Break_Break_Break_AET#t=100.45,102.26"
                ]
              },
              {
                "@id": "24p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=122,1481,316,346",
                "Break_Break_Break_AET#t=102.26,103.93"
                ]
              },
              {
                "@id": "25p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=453,1481,181,346",
                "Break_Break_Break_AET#t=103.93,105.5"
                ]
              },
              {
                "@id": "26p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=649,1481,200,346",
                "Break_Break_Break_AET#t=105.5,107.69"
                ]
              },
              {
                "@id": "27p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=858,1481,194,346",
                "Break_Break_Break_AET#t=107.69,109.6"
                ]
              },
              {
                "@id": "28p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1064,1481,168,346",
                "Break_Break_Break_AET#t=109.6,111.73"
                ]
              },
              {
                "@id": "29p1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "AETE2#xywh=1250,1481,133,346",
                "Break_Break_Break_AET#t=111.73,121"
                ]
              }]
            }]
          }]
        }]
      },   {
        "@id": "RB_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'Emily Tennyson, “Break," draft 1 (5321)',
        "description": '"Break, Break, Break”, music by Emily Tennyson, words by Alfred Tennyson, red MS music album. TRC/Music/5321, ff 3r-4v. Lincolnshire County Council, UK.',
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
            "width": 1384*.9,
            "height": 1832*.9,
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
              "resource": "Break_Break_Break_AET#t=0,15.18",
              "on": "RB1",
              "within": "PianoLayer"
            },{
              "@id": "RB1PianoMeasures",
              "@type": "sc:AnnotationList",
              "label": "measures",
              "@list": [{
                "@id": "0a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=146,1120,145,268",
                "Break_Break_Break_AET#t=0,2.54"
                ]
              },
              {
                "@id": "1a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=326,1120,145,268",
                "Break_Break_Break_AET#t=2.54,3.84"
                ]
              },
              {
                "@id": "2a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=496,1120,197,268",
                "Break_Break_Break_AET#t=3.84,5.33"
                ]
              },
              {
                "@id": "3a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=713,1120,178,268",
                "Break_Break_Break_AET#t=5.33,6.77"
                ]
              },
              {
                "@id": "4a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=911,1120,112,268",
                "Break_Break_Break_AET#t=6.77,7.99"
                ]
              },
              {
                "@id": "5a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=1043,1120,159,268",
                "Break_Break_Break_AET#t=7.99,9.18"
                ]
              },
              {
                "@id": "6a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=151,1389,178,220",
                "Break_Break_Break_AET#t=9.18,10.45"
                ]
              },
              {
                "@id": "7a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=354,1384,230,225",
                "Break_Break_Break_AET#t=10.45,11.62"
                ]
              },
              {
                "@id": "8a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=614,1384,131,225",
                "Break_Break_Break_AET#t=11.62,12.89"
                ]
              },
              {
                "@id": "9a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB1#xywh=779,1384,51,225",
                "Break_Break_Break_AET#t=12.89,15.18"
                ]
              }]
            }]
          }, {
            "label": "4r",
            "@id": "RB2",
            "width": 1508*.9,
            "height": 1888*.9,
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
              "resource": "Break_Break_Break_AET#t=15.18,70.12",
              "on": "RB2",
              "within": "PianoLayer"
            },{
              "@id": "RB2PianoMeasures",
              "@type": "sc:AnnotationList",
              "label": "measures",
              "@list": [{
                "@id": "10a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=49,94,173,385",
                "Break_Break_Break_AET#t=15.18,16.95"
                ]
              },
              {
                "@id": "11a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=252,94,69,385",
                "Break_Break_Break_AET#t=16.95,19.83"
                ]
              },
              {
                "@id": "12a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=341,94,131,385",
                "Break_Break_Break_AET#t=19.83,22.83"
                ]
              },
              {
                "@id": "13a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=497,94,98,390",
                "Break_Break_Break_AET#t=22.83,24.45"
                ]
              },
              {
                "@id": "14a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=615,94,112,390",
                "Break_Break_Break_AET#t=24.45,26.05"
                ]
              },
              {
                "@id": "15a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=733,94,46,390",
                "Break_Break_Break_AET#t=26.05,27.3"
                ]
              },
              {
                "@id": "16a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=799,94,65,390",
                "Break_Break_Break_AET#t=27.3,28.21"
                ]
              },
              {
                "@id": "17a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=875,94,135,390",
                "Break_Break_Break_AET#t=28.21,29.1"
                ]
              },
              {
                "@id": "18a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=1035,94,93,390",
                "Break_Break_Break_AET#t=29.1,30.75"
                ]
              },
              {
                "@id": "19a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=1148,94,122,390",
                "Break_Break_Break_AET#t=30.75,31.85"
                ]
              },
              {
                "@id": "20a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=72,515,102,361",
                "Break_Break_Break_AET#t=31.85,32.35"
                ]
              },
              {
                "@id": "21a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=199,515,159,361",
                "Break_Break_Break_AET#t=32.35,33.4"
                ]
              },
              {
                "@id": "22a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=374,515,84,361",
                "Break_Break_Break_AET#t=33.4,35.55"
                ]
              },
              {
                "@id": "23a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=483,515,46,361",
                "Break_Break_Break_AET#t=35.55,37.2"
                ]
              },
              {
                "@id": "24a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=530,515,46,361",
                "Break_Break_Break_AET#t=37.2,38.26"
                ]
              },
              {
                "@id": "25a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=596,515,112,361",
                "Break_Break_Break_AET#t=38.26,39.97"
                ]
              },
              {
                "@id": "26a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=738,515,135,361",
                "Break_Break_Break_AET#t=39.97,41.29"
                ]
              },
              {
                "@id": "27a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=898,525,164,343",
                "Break_Break_Break_AET#t=41.29,42.65"
                ]
              },
              {
                "@id": "28a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=1073,525,197,343",
                "Break_Break_Break_AET#t=42.65,43.55"
                ]
              },
              {
                "@id": "29a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=58,888,102,352",
                "Break_Break_Break_AET#t=43.55,43.98"
                ]
              },
              {
                "@id": "30a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=181,888,84,352",
                "Break_Break_Break_AET#t=43.98,45.31"
                ]
              },
              {
                "@id": "31a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=280,888,102,352",
                "Break_Break_Break_AET#t=45.31,46.78"
                ]
              },
              {
                "@id": "32a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=398,888,107,352",
                "Break_Break_Break_AET#t=46.78,48.21"
                ]
              },
              {
                "@id": "33a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=530,888,84,352",
                "Break_Break_Break_AET#t=48.21,49.5"
                ]
              },
              {
                "@id": "34a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=634,888,102,352",
                "Break_Break_Break_AET#t=49.5,51"
                ]
              },
              {
                "@id": "35a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=771,888,122,352",
                "Break_Break_Break_AET#t=51,52.28"
                ]
              },
              {
                "@id": "36a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=926,888,117,352",
                "Break_Break_Break_AET#t=52.28,53.69"
                ]
              },
              {
                "@id": "37a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=1073,888,192,352",
                "Break_Break_Break_AET#t=53.69,56.04"
                ]
              },
              {
                "@id": "38a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=39,1261,178,352",
                "Break_Break_Break_AET#t=56.04,56.6"
                ]
              },
              {
                "@id": "39a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=242,1261,79,352",
                "Break_Break_Break_AET#t=56.6,58.01"
                ]
              },
              {
                "@id": "40a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=346,1261,89,352",
                "Break_Break_Break_AET#t=58.01,59.89"
                ]
              },
              {
                "@id": "41a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=459,1261,89,352",
                "Break_Break_Break_AET#t=59.89,61.54"
                ]
              },
              {
                "@id": "42a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=577,1261,93,352",
                "Break_Break_Break_AET#t=61.54,63.04"
                ]
              },
              {
                "@id": "43a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=695,1261,117,352",
                "Break_Break_Break_AET#t=63.04,64.76"
                ]
              },
              {
                "@id": "44a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=832,1261,107,352",
                "Break_Break_Break_AET#t=64.76,66.88"
                ]
              },
              {
                "@id": "45a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=978,1261,84,352",
                "Break_Break_Break_AET#t=66.88,68.38"
                ]
              },
              {
                "@id": "46a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB2#xywh=1087,1261,140,352",
                "Break_Break_Break_AET#t=68.38,70.12"
                ]
              }]
            }]
          }, {
            "label": "4v",
            "@id": "RB3",
            "width": 1524*1.475,
            "height": 1998*1.475,
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
              "resource": "Break_Break_Break_AET#t=70.12,118",
              "on": "RB3",
              "within": "PianoLayer"
            },{
              "@id": "RB1PianoMeasures",
              "@type": "sc:AnnotationList",
              "label": "measures",
              "@list": [{
                "@id": "0a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=153,124,248,720",
                "Break_Break_Break_AET#t=70.12,71.68"
                ]
              },
              {
                "@id": "1a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=422,124,297,720",
                "Break_Break_Break_AET#t=71.68,73.33"
                ]
              },
              {
                "@id": "2a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=742,124,206,720",
                "Break_Break_Break_AET#t=73.33,74.73"
                ]
              },
              {
                "@id": "3a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=974,124,239,720",
                "Break_Break_Break_AET#t=74.73,76.18"
                ]
              },
              {
                "@id": "4a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1227,124,148,720",
                "Break_Break_Break_AET#t=76.18,78.5"
                ]
              },
              {
                "@id": "5a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1400,124,143,720",
                "Break_Break_Break_AET#t=78.5,80.99"
                ]
              },
              {
                "@id": "6a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1567,124,140,720",
                "Break_Break_Break_AET#t=80.99,83.08"
                ]
              },
              {
                "@id": "7a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1720,124,239,720",
                "Break_Break_Break_AET#t=83.08,85.49"
                ]
              },
              {
                "@id": "8a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1989,124,214,720",
                "Break_Break_Break_AET#t=85.49,86.87"
                ]
              },
              {
                "@id": "9a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=149,866,256,720",
                "Break_Break_Break_AET#t=86.87,88.58"
                ]
              },
              {
                "@id": "10a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=431,866,260,720",
                "Break_Break_Break_AET#t=88.58,91"
                ]
              },
              {
                "@id": "11a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=713,866,156,720",
                "Break_Break_Break_AET#t=91,92.85"
                ]
              },
              {
                "@id": "12a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=887,866,193,720",
                "Break_Break_Break_AET#t=92.85,94.35"
                ]
              },
              {
                "@id": "13a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1098,866,235,720",
                "Break_Break_Break_AET#t=94.35,95.94"
                ]
              },
              {
                "@id": "14a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1351,866,252,720",
                "Break_Break_Break_AET#t=95.94,97.4"
                ]
              },
              {
                "@id": "15a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1628,866,281,720",
                "Break_Break_Break_AET#t=97.4,99.26"
                ]
              },
              {
                "@id": "16a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=1932,866,190,720",
                "Break_Break_Break_AET#t=99.26,101.32"
                ]
              },
              {
                "@id": "17a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "label": "",
                "on": [
                "RB3#xywh=2134,866,82,720",
                "Break_Break_Break_AET#t=101.32,118"
                ]
              }]
            }]
          }]
        }]
      }, {
        "@id": "Janotha_Manifest",
        "@context": "http://iiif.io/api/presentation/2/context.json",
        "@type": "sc:Manifest",
        "label": 'Emily Tennyson / arr Janotha, “Break”',
        "description": '"Break, Break, Break," music by Emily Tennyson, arr. by Natalie Janotha, words by Alfred Tennyson, <i>Sunday Hours</i>, vol. 2 (1897): 568–72. P.P.357.fb, The British Library',
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
                "Break_Break_Break_Janotha#t=31.7,33.97"
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
                  "Break_Break_Break_Janotha#t=124.61,127.45"
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
              "label": 'Alfred Tennyson, “Break," Ms poem',
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
              "@id": "AET-MSS-5312-001",
              "@context": "http://iiif.io/api/presentation/2/context.json",
              "@type": "sc:Manifest",
              "label": 'Emily Tennyson, “Break," draft 2 (5312/1)',
              "description": '"Break, Break, Break”, music by Emily Tennyson, words by Alfred Tennyson, Pink MS music book. TRC/Music/5312/1, ff 11r-12v, Lincolnshire County Council, UK.',
              "resources": ["Break_Break_Break_AET"],
              "metadata":[
              { "title" : "Emily Tennyson's manuscipt music notebook 1" },
              { "creator" : "Tennyson, Lady Emily (1813-1896)" },
              { "contributor" : "Tennyson, Lord Alfred (1809-1892)" },
              { "date" : "c.1834-c.1860" },
              { "source" : "Lincolnshire County Council" },
              { "subject" : ["Tennyson, Emily Sellwood Tennyson, Baronness, 1813-1896—Musical settings.",
              "Tennyson, Alfred Tennyson, Baron, 1809-1892—Musical settings.",
              "Tennyson, Emily Sellwood Tennyson, Baronness, 1813-1896.",
              "Tennyson, Alfred Tennyson, Baron, 1809-1892.",
              "Tennyson family.",
              "Poets, English—19th century.",
              "Authors' spouses—Great Britain—Diaries.",
              "Songs with piano—19th century."] },
              { "description" : 'Pink manuscript music book setting by Emily Lady Tennyson of Alfred Lord Tennyson\'s "Break, Break, Break”, written in black ink with pencil markings' },
              { "website" : "http://www.soundingtennyson.org" },
              { "contributing institution" : "Lincolnshire County Council" },
              { "publisher" : "Sounding Tennyson" },
              { "rights" : "This item is reproduced by permission of Lincolnshire County Council, UK." },
              { "language" : "English" },
              { "media type" : "Manuscript" },
              { "type" : "Music and Text" },
              { "resource identifier" : "AET-MSS-5312-001" },
              { "note" : '"VI" crossed out; IV added, I written in pencil; "copied on green book" written top right in pencil; pencilled line down center of page' },
              { "bibliographic citation" : "TRC/MSS 5312/1" },
              { "digital collection (relation)" : "Sounding Tennyson" },
              { "digital assistant" : "Heather Bozant Witcher" }
              ],
              "layers": ["PianoLayer"],
              "sequences": [{
                "@id": "pink book normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                  "label": "11r",
                  "@id": "PB1",
                  "width": 1513*1.7,
                  "height": 2000*1.7,
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
                  },
                  {
                    "@id": "pb1Measures",
                    "@type": "sc:AnnotationList",
                    "label": "measures",
                    "@list": [{
                      "@id": "0p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=111,226,502,806",
                      "Break_Break_Break_AET#t=0,2.63"
                      ]
                    },
                    {
                      "@id": "1p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=640,226,322,806",
                      "Break_Break_Break_AET#t=2.63,4.04"
                      ]
                    },
                    {
                      "@id": "2p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=981,226,428,806",
                      "Break_Break_Break_AET#t=4.04,5.33"
                      ]
                    },
                    {
                      "@id": "3p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1441,226,336,806",
                      "Break_Break_Break_AET#t=5.33,6.88"
                      ]
                    },
                    {
                      "@id": "4p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1805,226,460,806",
                      "Break_Break_Break_AET#t=6.88,8.18"
                      ]
                    },
                    {
                      "@id": "5p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=134,1261,493,746",
                      "Break_Break_Break_AET#t=8.18,9.34"
                      ]
                    },
                    {
                      "@id": "6p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=658,1261,313,746",
                      "Break_Break_Break_AET#t=9.34,10.61"
                      ]
                    },
                    {
                      "@id": "7p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1004,1261,304,746",
                      "Break_Break_Break_AET#t=10.61,11.85"
                      ]
                    },
                    {
                      "@id": "8p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1345,1261,341,746",
                      "Break_Break_Break_AET#t=11.85,13.18"
                      ]
                    },
                    {
                      "@id": "9p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1718,1261,249,746",
                      "Break_Break_Break_AET#t=13.18,14.38"
                      ]
                    },
                    {
                      "@id": "10p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1998,1261,313,746",
                      "Break_Break_Break_AET#t=14.38,15.01"
                      ]
                    },
                    {
                      "@id": "11p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=161,2026,488,792",
                      "Break_Break_Break_AET#t=15.01,17.39"
                      ]
                    },
                    {
                      "@id": "12p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=672,2026,203,792",
                      "Break_Break_Break_AET#t=17.39,20.17"
                      ]
                    },
                    {
                      "@id": "13p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=893,2026,424,792",
                      "Break_Break_Break_AET#t=20.17,23.08"
                      ]
                    },
                    {
                      "@id": "14p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1340,2026,327,792",
                      "Break_Break_Break_AET#t=23.08,24.89"
                      ]
                    },
                    {
                      "@id": "15p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=1699,2026,304,792",
                      "Break_Break_Break_AET#t=24.89,26.44"
                      ]
                    },
                    {
                      "@id": "16p0",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB1#xywh=2040,2026,322,792",
                      "Break_Break_Break_AET#t=26.44,28.01"
                      ]
                    }]
                  }]
                }, {
                  "label": "11v",
                  "@id": "PB2",
                  "width": 1567*.85,
                  "height": 2000*.85,
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
                    "resource": "Break_Break_Break_AET#t=28.01,57.91",
                    "on": "PB1",
                    "within": "PianoLayer"
                  },
                  {
                    "@id": "pb2Measures",
                    "@type": "sc:AnnotationList",
                    "label": "measures",
                    "@list": [{
                      "@id": "0p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=147,120,367,396",
                      "Break_Break_Break_AET#t=28.01,30.02"
                      ]
                    },
                    {
                      "@id": "1p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=543,120,161,396",
                      "Break_Break_Break_AET#t=30.02,31.47"
                      ]
                    },
                    {
                      "@id": "2p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=726,120,161,396",
                      "Break_Break_Break_AET#t=31.47,33.02"
                      ]
                    },
                    {
                      "@id": "3p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=910,120,308,396",
                      "Break_Break_Break_AET#t=33.02,34.56"
                      ]
                    },
                    {
                      "@id": "4p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=144,511,235,372",
                      "Break_Break_Break_AET#t=34.56,36.27"
                      ]
                    },
                    {
                      "@id": "5p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=401,511,63,372",
                      "Break_Break_Break_AET#t=36.27,38.24"
                      ]
                    },
                    {
                      "@id": "6p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=487,511,78,372",
                      "Break_Break_Break_AET#t=38.24,39.68"
                      ]
                    },
                    {
                      "@id": "7p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=587,511,176,372",
                      "Break_Break_Break_AET#t=39.68,40.7"
                      ]
                    },
                    {
                      "@id": "8p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=785,511,200,372",
                      "Break_Break_Break_AET#t=40.7,42.45"
                      ]
                    },
                    {
                      "@id": "9p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=1012,511,215,372",
                      "Break_Break_Break_AET#t=42.45,43.62"
                      ]
                    },
                    {
                      "@id": "10p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=149,893,343,386",
                      "Break_Break_Break_AET#t=43.62,45.35"
                      ]
                    },
                    {
                      "@id": "11p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=514,893,122,386",
                      "Break_Break_Break_AET#t=45.35,46.33"
                      ]
                    },
                    {
                      "@id": "12p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=655,893,132,386",
                      "Break_Break_Break_AET#t=46.33,48"
                      ]
                    },
                    {
                      "@id": "13p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=812,893,186,386",
                      "Break_Break_Break_AET#t=48,49.12"
                      ]
                    },
                    {
                      "@id": "14p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=1012,893,127,386",
                      "Break_Break_Break_AET#t=49.12,50.53"
                      ]
                    },
                    {
                      "@id": "15p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=149,1279,288,362",
                      "Break_Break_Break_AET#t=50.53,52.18"
                      ]
                    },
                    {
                      "@id": "16p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=460,1279,166,362",
                      "Break_Break_Break_AET#t=52.18,53.53"
                      ]
                    },
                    {
                      "@id": "17p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=660,1281,142,357",
                      "Break_Break_Break_AET#t=53.53,55.25"
                      ]
                    },
                    {
                      "@id": "18p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=824,1281,113,357",
                      "Break_Break_Break_AET#t=55.25,57"
                      ]
                    },
                    {
                      "@id": "19p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB2#xywh=966,1276,171,362",
                      "Break_Break_Break_AET#t=57,57.91"
                      ]
                    }]
                  }]
                }, {
                  "label": "12r",
                  "@id": "PB3",
                  "width": 1538*.9,
                  "height": 2000*.9,
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
                    "resource": "Break_Break_Break_AET#t=57.91,114.63",
                    "on": "PB1",
                    "within": "PianoLayer"
                  },
                  {
                    "@id": "pb2Measures",
                    "@type": "sc:AnnotationList",
                    "label": "measures",
                    "@list": [{
                      "@id": "20p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=90,125,230,372",
                      "Break_Break_Break_AET#t=57.91,59.67"
                      ]
                    },
                    {
                      "@id": "21p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=344,125,117,377",
                      "Break_Break_Break_AET#t=59.67,61.2"
                      ]
                    },
                    {
                      "@id": "22p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=464,125,142,377",
                      "Break_Break_Break_AET#t=61.2,63.02"
                      ]
                    },
                    {
                      "@id": "23p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=632,125,83,372",
                      "Break_Break_Break_AET#t=63.02,64.47"
                      ]
                    },
                    {
                      "@id": "24p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=740,125,132,372",
                      "Break_Break_Break_AET#t=64.47,66.22"
                      ]
                    },
                    {
                      "@id": "25p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=904,125,88,372",
                      "Break_Break_Break_AET#t=66.22,68.28"
                      ]
                    },
                    {
                      "@id": "26p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=1014,125,132,372",
                      "Break_Break_Break_AET#t=68.28,69.82"
                      ]
                    },
                    {
                      "@id": "27p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=82,528,249,367",
                      "Break_Break_Break_AET#t=69.82,71.64"
                      ]
                    },
                    {
                      "@id": "28p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=359,528,137,367",
                      "Break_Break_Break_AET#t=71.64,73.15"
                      ]
                    },
                    {
                      "@id": "29p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=525,528,195,367",
                      "Break_Break_Break_AET#t=73.15,74.84"
                      ]
                    },
                    {
                      "@id": "30p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=745,528,176,367",
                      "Break_Break_Break_AET#t=74.84,76.67"
                      ]
                    },
                    {
                      "@id": "31p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=951,528,191,367",
                      "Break_Break_Break_AET#t=76.67,78.25"
                      ]
                    },
                    {
                      "@id": "32p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=94,912,211,372",
                      "Break_Break_Break_AET#t=78.25,80.77"
                      ]
                    },
                    {
                      "@id": "33p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=339,912,98,372",
                      "Break_Break_Break_AET#t=80.77,83.09"
                      ]
                    },
                    {
                      "@id": "34p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=461,912,83,372",
                      "Break_Break_Break_AET#t=83.09,85.23"
                      ]
                    },
                    {
                      "@id": "35p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=569,912,176,372",
                      "Break_Break_Break_AET#t=85.23,87.59"
                      ]
                    },
                    {
                      "@id": "36p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=781,912,132,372",
                      "Break_Break_Break_AET#t=87.59,89.05"
                      ]
                    },
                    {
                      "@id": "37p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=934,912,113,372",
                      "Break_Break_Break_AET#t=89.05,90.71"
                      ]
                    },
                    {
                      "@id": "38p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=1068,912,142,372",
                      "Break_Break_Break_AET#t=90.71,93.17"
                      ]
                    },
                    {
                      "@id": "39p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=92,1301,166,347",
                      "Break_Break_Break_AET#t=93.17,94.9"
                      ]
                    },
                    {
                      "@id": "40p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=278,1301,147,347",
                      "Break_Break_Break_AET#t=94.9,96.46"
                      ]
                    },
                    {
                      "@id": "41p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=447,1298,156,352",
                      "Break_Break_Break_AET#t=96.46,98.01"
                      ]
                    },
                    {
                      "@id": "42p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=627,1298,108,352",
                      "Break_Break_Break_AET#t=98.01,99.55"
                      ]
                    },
                    {
                      "@id": "43p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=755,1298,147,352",
                      "Break_Break_Break_AET#t=99.55,101.36"
                      ]
                    },
                    {
                      "@id": "44p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=928,1298,113,352",
                      "Break_Break_Break_AET#t=101.36,103.35"
                      ]
                    },
                    {
                      "@id": "45p1",
                      "@type": "oa:Annotation",
                      "motivation": "sc:painting",
                      "label": "",
                      "on": [
                      "PB3#xywh=1060,1298,171,352",
                      "Break_Break_Break_AET#t=103.35,108.54"
                      ]
                    }]
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
              "label": 'Emily Tennyson, “Break," draft 3 (5312/2)',
              "description": '"Break, Break, Break”, music by Emily Tennyson, words by Alfred Tennyson, green MS music book, TRC/Music/5312/2, ff 5r-6r. Lincolnshire County Council, UK.',
              "resources": ["Break_Break_Break_AET"],
              "layers": ["PianoLayer"],
              "sequences": [{
                "@id": "green book normal sequence",
                "@type": "sc:Sequence",
                "canvases": [{
                  "label": "5r",
                  "@id": "GB1",
                        "width": 1629*1.5, // weird trouble with augmented notes
                        "height": 2000*1.5,
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
                        "otherContent": [{
                          "@id":"Gaudio",
                          "@type":"oa:Annotation",
                          "label": "page 1",
                          "motivation": "sc:painting",
                          "resource": "Break_Break_Break_AET#t=0,35.2",
                          "on": "Henschel1",
                          "within": "PianoLayer"
                        },{
                          "@id": "G1PianoMeasures",
                          "@type": "sc:AnnotationList",
                          "label": "measures",
                          "@list": [{
                            "@id": "0g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=258,205,450,472",
                            "Break_Break_Break_AET#t=0,2.47"
                            ]
                          },
                          {
                            "@id": "1g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=732,205,276,472",
                            "Break_Break_Break_AET#t=2.47,3.87"
                            ]
                          },
                          {
                            "@id": "2g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1035,205,285,472",
                            "Break_Break_Break_AET#t=3.87,5.11"
                            ]
                          },
                          {
                            "@id": "3g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1342,205,365,472",
                            "Break_Break_Break_AET#t=5.11,7.07"
                            ]
                          },
                          {
                            "@id": "4g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1743,205,388,472",
                            "Break_Break_Break_AET#t=7.07,8.4"
                            ]
                          },
                          {
                            "@id": "5g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=268,686,472,406",
                            "Break_Break_Break_AET#t=8.4,9.31"
                            ]
                          },
                          {
                            "@id": "6g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=767,686,250,406",
                            "Break_Break_Break_AET#t=9.31,10.82"
                            ]
                          },
                          {
                            "@id": "7g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1035,686,254,406",
                            "Break_Break_Break_AET#t=10.82,12.06"
                            ]
                          },
                          {
                            "@id": "8g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1311,686,254,406",
                            "Break_Break_Break_AET#t=12.06,13.33"
                            ]
                          },
                          {
                            "@id": "9g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1588,686,161,406",
                            "Break_Break_Break_AET#t=13.33,15.01"
                            ]
                          },
                          {
                            "@id": "10g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=268,1115,330,655",
                            "Break_Break_Break_AET#t=15.01,17.81"
                            ]
                          },
                          {
                            "@id": "11g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=624,1115,187,655",
                            "Break_Break_Break_AET#t=17.81,20.53"
                            ]
                          },
                          {
                            "@id": "12g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=839,1115,410,655",
                            "Break_Break_Break_AET#t=20.53,23.07"
                            ]
                          },
                          {
                            "@id": "13g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1267,1115,263,655",
                            "Break_Break_Break_AET#t=23.07,24.95"
                            ]
                          },
                          {
                            "@id": "14g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1552,1115,232,655",
                            "Break_Break_Break_AET#t=24.95,26.84"
                            ]
                          },
                          {
                            "@id": "15g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1815,1115,321,655",
                            "Break_Break_Break_AET#t=26.84,28.94"
                            ]
                          },
                          {
                            "@id": "16g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=268,1788,585,660",
                            "Break_Break_Break_AET#t=28.94,30.35"
                            ]
                          },
                          {
                            "@id": "17g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=878,1788,312,660",
                            "Break_Break_Break_AET#t=30.35,31.95"
                            ]
                          },
                          {
                            "@id": "18g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1217,1788,272,660",
                            "Break_Break_Break_AET#t=31.95,33.9"
                            ]
                          },
                          {
                            "@id": "19g0",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB1#xywh=1507,1788,589,660",
                            "Break_Break_Break_AET#t=33.9,35.2"
                            ]
                          }]
                        }]
                      }, {
                        "label": "5v",
                        "@id": "GB2",
                        "width": 1541 * .8, // weird augmented notes trouble...
                        "height": 2000 * .8,
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
                        "otherContent": [{
                          "@id":"Gaudio",
                          "@type":"oa:Annotation",
                          "label": "page 2",
                          "motivation": "sc:painting",
                          "resource": "Break_Break_Break_AET#t=35.2,76.62",
                          "on": "GB2",
                          "within": "PianoLayer"
                        },{
                          "@id": "G2PianoMeasures",
                          "@type": "sc:AnnotationList",
                          "label": "measures",
                          "@list": [{
                            "@id": "0g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=126,126,179,345",
                            "Break_Break_Break_AET#t=35.2,37.61"
                            ]
                          },
                          {
                            "@id": "1g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=328,126,54,345",
                            "Break_Break_Break_AET#t=37.61,39.2"
                            ]
                          },
                          {
                            "@id": "2g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=408,126,54,345",
                            "Break_Break_Break_AET#t=39.2,41.14"
                            ]
                          },
                          {
                            "@id": "3g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=494,126,157,345",
                            "Break_Break_Break_AET#t=41.14,42.4"
                            ]
                          },
                          {
                            "@id": "4g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=682,126,175,345",
                            "Break_Break_Break_AET#t=42.4,44"
                            ]
                          },
                          {
                            "@id": "5g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=875,126,206,345",
                            "Break_Break_Break_AET#t=44,45.45"
                            ]
                          },
                          {
                            "@id": "6g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=126,498,296,314",
                            "Break_Break_Break_AET#t=45.45,46.7"
                            ]
                          },
                          {
                            "@id": "7g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=444,498,108,314",
                            "Break_Break_Break_AET#t=46.7,48.15"
                            ]
                          },
                          {
                            "@id": "8g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=570,498,112,314",
                            "Break_Break_Break_AET#t=48.15,49.67"
                            ]
                          },
                          {
                            "@id": "9g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=709,498,126,314",
                            "Break_Break_Break_AET#t=49.67,51.15"
                            ]
                          },
                          {
                            "@id": "10g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=852,498,72,314",
                            "Break_Break_Break_AET#t=51.15,52.67"
                            ]
                          },
                          {
                            "@id": "11g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=947,498,135,314",
                            "Break_Break_Break_AET#t=52.67,54.31"
                            ]
                          },
                          {
                            "@id": "12g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=126,830,274,309",
                            "Break_Break_Break_AET#t=54.31,55.73"
                            ]
                          },
                          {
                            "@id": "13g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=413,830,139,309",
                            "Break_Break_Break_AET#t=55.73,57.13"
                            ]
                          },
                          {
                            "@id": "14g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=570,830,67,309",
                            "Break_Break_Break_AET#t=57.13,59.51"
                            ]
                          },
                          {
                            "@id": "15g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=664,830,103,309",
                            "Break_Break_Break_AET#t=59.51,60.63"
                            ]
                          },
                          {
                            "@id": "16g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=785,830,94,309",
                            "Break_Break_Break_AET#t=60.63,62.26"
                            ]
                          },
                          {
                            "@id": "17g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=897,830,108,309",
                            "Break_Break_Break_AET#t=62.26,64.11"
                            ]
                          },
                          {
                            "@id": "18g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=1023,830,58,309",
                            "Break_Break_Break_AET#t=64.11,65"
                            ]
                          },
                          {
                            "@id": "19g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=121,1157,179,314",
                            "Break_Break_Break_AET#t=65,66.01"
                            ]
                          },
                          {
                            "@id": "20g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=323,1157,63,314",
                            "Break_Break_Break_AET#t=66.01,67.35"
                            ]
                          },
                          {
                            "@id": "21g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=408,1157,108,314",
                            "Break_Break_Break_AET#t=67.35,68.98"
                            ]
                          },
                          {
                            "@id": "22g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=534,1157,126,314",
                            "Break_Break_Break_AET#t=68.98,71.33"
                            ]
                          },
                          {
                            "@id": "23g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=677,1157,108,314",
                            "Break_Break_Break_AET#t=71.33,72.91"
                            ]
                          },
                          {
                            "@id": "24g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=816,1157,112,314",
                            "Break_Break_Break_AET#t=72.91,74.73"
                            ]
                          },
                          {
                            "@id": "25g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB2#xywh=951,1162,126,309",
                            "Break_Break_Break_AET#t=74.73,76.62"
                            ]
                          }]
                        }]
                      }, {
                        "label": "6r",
                        "@id": "GB3",
                        "width": 1541 * .84, // weird augmented notes trouble...
                        "height": 2000 * .84,
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
                        "otherContent": [{
                          "@id":"Gaudio",
                          "@type":"oa:Annotation",
                          "label": "page 3",
                          "motivation": "sc:painting",
                          "resource": "Break_Break_Break_AET#t=76.62,118",
                          "on": "GB3",
                          "within": "PianoLayer"
                        },{
                          "@id": "G3PianoMeasures",
                          "@type": "sc:AnnotationList",
                          "label": "measures",
                          "@list": [{
                            "@id": "26g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=126,130,311,323",
                            "Break_Break_Break_AET#t=76.62,78.45"
                            ]
                          },
                          {
                            "@id": "27g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=453,130,141,318",
                            "Break_Break_Break_AET#t=78.45,80.15"
                            ]
                          },
                          {
                            "@id": "28g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=628,130,155,323",
                            "Break_Break_Break_AET#t=80.15,82.15"
                            ]
                          },
                          {
                            "@id": "29g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=803,130,65,323",
                            "Break_Break_Break_AET#t=82.15,85.77"
                            ]
                          },
                          {
                            "@id": "30g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=897,130,155,318",
                            "Break_Break_Break_AET#t=85.77,89.3"
                            ]
                          },
                          {
                            "@id": "31g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=126,480,181,332",
                            "Break_Break_Break_AET#t=89.3,91.4"
                            ]
                          },
                          {
                            "@id": "32g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=337,480,159,332",
                            "Break_Break_Break_AET#t=91.4,94.16"
                            ]
                          },
                          {
                            "@id": "33g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=516,480,150,332",
                            "Break_Break_Break_AET#t=94.16,95.58"
                            ]
                          },
                          {
                            "@id": "34g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=687,480,87,332",
                            "Break_Break_Break_AET#t=95.58,97.48"
                            ]
                          },
                          {
                            "@id": "35g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=799,480,141,332",
                            "Break_Break_Break_AET#t=97.48,100.48"
                            ]
                          },
                          {
                            "@id": "36g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=960,480,96,332",
                            "Break_Break_Break_AET#t=100.48,102"
                            ]
                          },
                          {
                            "@id": "37g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=126,835,222,301",
                            "Break_Break_Break_AET#t=102,104"
                            ]
                          },
                          {
                            "@id": "38g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=377,835,132,301",
                            "Break_Break_Break_AET#t=104,105.6"
                            ]
                          },
                          {
                            "@id": "39g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=525,835,123,301",
                            "Break_Break_Break_AET#t=105.6,107.7"
                            ]
                          },
                          {
                            "@id": "40g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=678,835,110,301",
                            "Break_Break_Break_AET#t=107.7,109.65"
                            ]
                          },
                          {
                            "@id": "41g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=803,835,92,301",
                            "Break_Break_Break_AET#t=109.65,111.75"
                            ]
                          },
                          {
                            "@id": "42g1",
                            "@type": "oa:Annotation",
                            "motivation": "sc:painting",
                            "label": "",
                            "on": [
                            "GB3#xywh=920,835,83,301",
                            "Break_Break_Break_AET#t=111.75,118"
                            ]
                          }]
                        }]
                      }]
                    }]
                  }]);

sounding.value('TEXT', [{
  "@id": "publishedText",
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@type": "cnt:chars",
  "label": 'Alfred Tennyson, “Break” (published 1842)',
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
    "label":"citeAuthor",
    "value":"Weliver, Phyllis"
  },
  {
    "label":"publicationDate",
    "value":"31 March 2016"
  },
  {
    "label": "title",
    "value": "To Break or not to Break?"
  },
  {
    "label": "subtitle",
    "value": 'Emily Tennyson’s Scansion of “Break, Break, Break”'
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
{
 "@context": "http://iiif.io/api/presentation/2/context.json",
 "@id": "EssayManuscriptBooks",
 "@type": "rr:Essay",
 "label": "Emily Tennyson's Music Manuscript Books",
 "metadataResources": [],
 "metadata": [
 {
   "label": "author",
   "value": "Phyllis Weliver"
 },
 {
  "label":"citeAuthor",
  "value":"Weliver, Phyllis"
},
{
  "label":"publicationDate",
  "value":"31 March 2016"
},
{
 "label": "title",
 "value": "Emily Tennyson's Music Manuscript Books"
}
],
"resource": "data/essayManuscriptBooks.xml",
"style": "",
"footnotes": [],
"endnotes": [],
"indices": [],
"comments": [],
"otherContent": []
},
{
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@id": "EssayBreakVariability",
  "@type": "rr:Essay",
  "label": "Variability and Musical Motion in ‘Break, Break, Break’",
  "metadataResources": [],
  "metadata": [
  {
    "label": "author",
    "value": "Phyllis Weliver"
  },
  {
    "label":"citeAuthor",
    "value":"Weliver, Phyllis"
  },
  {
    "label":"publicationDate",
    "value":"31 March 2016"
  },
  {
    "label": "title",
    "value": "Variability and Musical Motion in ‘Break, Break, Break’"
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
{
 "@context": "http://iiif.io/api/presentation/2/context.json",
 "@id": "EssayEmilysMusic",
 "@type": "rr:Essay",
 "label": "Performance and Publication of Emily Tennyson’s Music",
 "metadataResources": [],
 "metadata": [
 {
   "label": "author",
   "value": "Phyllis Weliver"
 },
 {
  "label":"citeAuthor",
  "value":"Weliver, Phyllis"
},
{
  "label":"publicationDate",
  "value":"31 March 2016"
},
{
 "label": "title",
 "value": "Performance and Publication of Emily Tennyson’s Music"
}
],
"resource": "data/essayEmilysMusic.xml",
"style": "data/essayStyle.xsl",
"footnotes": [],
"endnotes": [],
"indices": [],
"comments": [],
"otherContent": []
},{
 "@context": "http://iiif.io/api/presentation/2/context.json",
 "@id": "Cecilia1839",
 "@type": "rr:Essay",
 "label": "Cecilia Tennyson (poet’s sister) recites, 1839",
 "metadata":[
 {
  "label":"title",
  "value":"Cecilia Tennyson (poet’s sister) recites, 1839"
},{
  "label":"citeAuthor",
  "value":"unknown"
},{
  "label":"publicationDate",
  "value":"31 March 2016"
}],
"resource":"data/witnessCecilaTennyson.xml",
"note":{
  "text":"Louisa Lanesborough stayed with Alfred Tennyson’s sisters in May 1839 at Beech Hill, having disguised herself as the nurse of her consumptive friend, Mrs. Neville (“Mimosa”), and assuming the name Marion Langlais. Mary and Emily Tennyson, Louisa Lanesborough, and Mary Neville together were part of a literary circle called “The Husks” who idolized the young Alfred Tennyson’s poetry.",
  "citation":"Bartle Teeling, “A Visit to the Tennysons in 1839,” <cite>Blackwood’s Edinburgh Magazine</cite> CLV (May 1894): 605–21 (605–6)."
}
},{
 "@context": "http://iiif.io/api/presentation/2/context.json",
 "@id": "TennysonRecites",
 "@type": "rr:Essay",
 "label": "Tennyson recites, 1857, 1890",
 "metadata":[
 {
  "label":"title",
  "value":"Tennyson recites, 1857, 1890"
},{
  "label":"citeAuthor",
  "value":"unknown"
},{
  "label":"publicationDate",
  "value":"31 March 2016"
}],
"resource":"data/witnessTennysonRecites.xml"
},{
 "@context": "http://iiif.io/api/presentation/2/context.json",
 "@id": "ChildRecites",
 "@type": "rr:Essay",
 "label": "A child recites to Emily Tennyson, 1859",
 "metadata":[
 {
  "label":"title",
  "value":"A child recites to Emily Tennyson, 1859"
},{
  "label":"citeAuthor",
  "value":"unknown"
},{
  "label":"publicationDate",
  "value":"31 March 2016"
}],
"resource":"data/witnessChildRecites.xml"
},{
 "@context": "http://iiif.io/api/presentation/2/context.json",
 "@id": "JaneRecites",
 "@type": "rr:Essay",
 "label": "Elizabeth Jane, Lady Charlemont reads “Break, Break, Break” to Tennyson, 1871",
 "metadata":[
 {
  "label":"title",
  "value":"Elizabeth Jane, Lady Charlemont reads “Break, Break, Break” to Tennyson, 1871"
},{
  "label":"citeAuthor",
  "value":"unknown"
},{
  "label":"publicationDate",
  "value":"31 March 2016"
}],
"resource":"data/witnessJaneRecites.xml"
},{
 "@context": "http://iiif.io/api/presentation/2/context.json",
 "@id": "TennysonHearsGeorg",
 "@type": "rr:Essay",
 "label": "Tennyson hearing Henschel sing his musical setting of “Break, Break, Break,” 1880",
 "metadata":[
 {
  "label":"title",
  "value":"Tennyson hearing Henschel sing his musical setting of “Break, Break, Break,” 1880"
},{
  "label":"citeAuthor",
  "value":"unknown"
},{
  "label":"publicationDate",
  "value":"31 March 2016"
}],
"resource":"data/witnessTennysonHearsGeorg.xml"
}
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