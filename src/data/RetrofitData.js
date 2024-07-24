//Show Images
import CFC from "../ProductPhotos/CFC/CFC.png"
import frontCFC from "../ProductPhotos/CFC/Front_View_-_CFC.png"
import ThirdCFC from "../ProductPhotos/CFC/ThirdCFC.png"

import BTR from "../ProductPhotos/BTR/BTR-ISO.png"
import frontBTR from "../ProductPhotos/BTR/Front_View_-_BTR.png"
import ThirdBTR from "../ProductPhotos/BTR/ThirdBTR.png"

import DDR from "../ProductPhotos/DDR/DDR-ISO.png"
import frontDDR from "../ProductPhotos/DDR/Front_View_-_DDR.png"
import ThirdDDR from "../ProductPhotos/DDR/ThirdDDR.png"

import DTR from "../ProductPhotos/DTR/DTR-ISO.png"
import frontDTR from "../ProductPhotos/DTR/Front_View_-_DTR.png"
import ThirdDTR from "../ProductPhotos/DTR/ThirdDTR.png"

import MHR from "../ProductPhotos/MHR/MHR-ISO.png"
import frontMHR from "../ProductPhotos/MHR/Front_View_-_MHR.png"
import ThirdMHR from "../ProductPhotos/MHR/ThirdMHR.png"

//Size Diagrams

export const RetrofitData = [
    {
        id: "cfc",
        name: "CFC",
        type: "Closet Fan",
        cabin: "Cabin",
        description: "Aurum’s CFC Series is our replacement solution for outdated closet fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement.",
        images:[CFC, frontCFC, ThirdCFC],
        capacityChart:[
            {
                title:"CFC600Z",
                measurements:["4 X 2", "0.20", "MAX 10", "3", "18700", "MAX 10", "3", "44600", "4.9", "6.1", "15"],
            },
            {
                title:"CFFC800Z",
                measurements:["4 X 2", "0.20", "MAX 10", "3.5", "25100", "MAX 10", "3.5", "59200", "4.9", "6.1", "15"],
            },
            {
                title:"CFC1000Z",
                measurements:["4 X 2", "0.20", "11.7", "5", "34400", "11.7", "5", "77500", "4.9", "6.1", "15"],
            },
            {
                title:"CFC1200Z",
                measurements:["4 X 2", "0.20", "16.0", "6", "39500", "16.0", "6", "90500", "6.9", "8.6", "15"],
            },
        ],
        coolingHeating:[
            {
                title:"COOLING",
                measurements:["45/55", "78", "67"],
            },
            {
                title:"HEATING",
                measurements:["160/130", "70", ""],
            }
        ],
        measurementChart:[
            {
                title:"DTR350Z/DTR450Z",
                measurements:['13.75"','23.75"', '15"', '13.3125"', '21"', '4.5"', '10"', '20"', '4.5625"', '5.6875"'],
            },
            {
                title:"DTR800ZW/DTR1000ZW",
                measurements:['17.75"','25.5"', '16.5"', '17.3125"', '21"', '4.5"', '14"', '20"', '4.56525"', '5.8125"'],
            },
        ],
        tabletype:1,

        //Line Graph Details
        lines:[
            {
                name: "0.2 in wc",
                data: [
                    {"x": 307, "y": 192},
                    {"x": 382, "y": 221},
                    {"x": 485, "y": 269},
                    {"x": 789, "y": 425},
                    {"x": 1111, "y": 529}
                  ]
                  
            },
            {
                name: "0.3 in wc",
                data: [
                    {"x": 286, "y": 202},
                    {"x": 389, "y": 240},
                    {"x": 580, "y": 333},
                    {"x": 758, "y": 433},
                    {"x": 835, "y": 463},
                    {"x": 792, "y": 448},
                    {"x": 1109, "y": 540}
                ]
            },
            {
                name: "0.5 in wc",
                data: [
                    {"x": 297, "y": 263},
                    {"x": 469, "y": 340},
                    {"x": 608, "y": 383},
                    {"x": 647, "y": 402},
                    {"x": 792, "y": 498},
                    {"x": 843, "y": 521},
                    {"x": 1101, "y": 598}
                ]
            },
            {
                name: "0.7 in wc",
                data: [
                    {"x": 297, "y": 227},
                    {"x": 449, "y": 279},
                    {"x": 565, "y": 337},
                    {"x": 779, "y": 458},
                    {"x": 871, "y": 494},
                    {"x": 1096, "y": 567}
                ]
            }
        ],
        xaxis: {
            type: 'numeric',
            min: 0,
            max: 1400,
            title: {
              text: 'CFM'
            }
        },
        yaxis: {
        min: 0,
        max: 700,
        title: {
            text: 'WATTAGE'
        }
        },
    },
    {
        id: "dtr",
        name: "DTR",
        type: "Blow Through",
        cabin: "Cabin",
        description: "Aurum’s DTR Series is our replacement solution for outdated blow through fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement. ",
        images:[DTR, frontDTR, ThirdDTR],
        capacityChart:[
            {
                title:"DTR350Z",
                measurements:["3 X 1", "0.20", "4.3", "1.5", "9900", "3.3", "1.5", "24100", "4.9", "6.1", "15"],
            },
            {
                title:"DTR450Z",
                measurements:["4 X 2", "0.20", "4.3", "2.5", "11407", "1.7", "2", "34000", "4.9", "6.1", "15"],
            },
            {
                title:"DTR600Z / DTR600ZT",
                measurements:["4 X 2", "0.20", "MAX 10", "3", "18700", "MAX 10", "2.5", "44600", "4.9", "6.1", "15"],
            },
            {
                title:"DTR800ZW",
                measurements:["4 X 2", "0.20", "MAX 10", "3.5", "25100", "MAX 10", "3", "59200", "4.9", "6.1", "15"],
            },
            {
                title:"DTR1000Z",
                measurements:["4 X 2", "0.20", "11.7", "5", "34400", "11.7", "5", "77500", "6.9", "8.6", "15"],
            },
        ],
        coolingHeating:[
            {
                title:"COOLING",
                measurements:["45/55", "78", "67"],
            },
            {
                title:"HEATING",
                measurements:["160/130", "70", ""],
            }
        ],
        measurementChart:[
            {
                title:"DTR350Z/DTR450Z",
                measurements:['13.75"','23.75"', '15"', '13.3125"', '21"', '4.5"', '10"', '20"', '4.5625"', '5.6875"'],
            },
            {
                title:"DTR600Z",
                measurements:['13.75"','23.75"', '15"', '13.3125"', '21"', '4.5"', '10"', '20"', '4.5625"', '5.6875"'],
            },
            {
                title:"DTR600ZT",
                measurements:['13.75"','25.5"', '16.5"', '13.3125"', '21"', '4.5"', '10"', '20"', '4.5625"', '5.6875"'],
            },
            {
                title:"DTR800ZW/DTR1000ZW",
                measurements:['17.75"','25.5"', '16.5"', '17.3125"', '21"', '4.5"', '14"', '20"', '4.56525"', '5.8125"'],
            },
        ],
        tabletype:1,

        //Line Graph Details
        lines:[
            {
                name: "0.2 in wc",
                data: [
                    {"x": 96, "y": 23},
                    {"x": 196, "y": 25},
                    {"x": 303, "y": 46},
                    {"x": 397, "y": 75},
                    {"x": 502, "y": 128},
                    {"x": 594, "y": 184},
                    {"x": 694, "y": 254},
                    {"x": 792, "y": 335},
                    {"x": 897, "y": 420},
                    {"x": 993, "y": 495}
                ]
            },
            {
                name: "0.3 in wc",
                data: [
                    {"x": 96, "y": 33},
                    {"x": 196, "y": 41},
                    {"x": 301, "y": 64},
                    {"x": 397, "y": 99},
                    {"x": 495, "y": 149},
                    {"x": 594, "y": 201},
                    {"x": 694, "y": 263},
                    {"x": 790, "y": 329},
                    {"x": 890, "y": 416},
                    {"x": 990, "y": 497}
                ]
            },
            {
                name: "0.5 in wc",
                data: [
                    {"x": 96, "y": 64},
                    {"x": 194, "y": 85},
                    {"x": 299, "y": 122},
                    {"x": 397, "y": 166},
                    {"x": 497, "y": 232},
                    {"x": 594, "y": 265},
                    {"x": 698, "y": 354},
                    {"x": 790, "y": 408},
                    {"x": 908, "y": 499},
                    {"x": 993, "y": 577}
                ]
            },
            {
                name: "0.7 in wc",
                data: [
                    {"x": 94, "y": 46},
                    {"x": 194, "y": 60},
                    {"x": 294, "y": 85},
                    {"x": 397, "y": 126},
                    {"x": 495, "y": 172},
                    {"x": 594, "y": 226},
                    {"x": 692, "y": 290},
                    {"x": 792, "y": 374},
                    {"x": 892, "y": 463},
                    {"x": 991, "y": 546}
                ]
            }
        ],
        xaxis: {
            type: 'numeric',
            min: 0,
            max: 1200,
            title: {
              text: 'CFM'
            }
        },
        yaxis: {
        min: 0,
        max: 600,
        title: {
            text: 'WATTAGE'
        }
        },
    },
    {
        id: "btr",
        name: "BTR",
        type: "Blow Through",
        cabin: "No Cabin",
        description: "Aurum’s BTR Series is our replacement solution for outdated blow through fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement. ",
        images:[BTR, frontBTR, ThirdBTR],
        capacityChart:[
            {
                title:"BTR350Z",
                measurements:["3 X 1", "0.20", "4.3", "1.5", "9900", "3.3", "1.5", "24100", "4.9", "6.1", "15"],
            },
            {
                title:"BTR450Z",
                measurements:["4 X 2", "0.20", "4.3", "2.5", "11407", "1.7", "2", "34000", "4.9", "6.1", "15"],
            },
            {
                title:"BTR600Z / BTR600ZW",
                measurements:["4 X 2", "0.20", "MAX 10", "3", "18700", "MAX 10", "2.5", "44600", "4.9", "6.1", "15"],
            },
            {
                title:"BTR800Z / BTR800ZW",
                measurements:["4 X 2", "0.20", "MAX 10", "3.5", "25100", "MAX 10", "3", "59200", "4.9", "6.1", "15"],
            },
            {
                title:"BTR1000Z",
                measurements:["4 X 2", "0.20", "11.7", "5", "34400", "11.7", "5", "77500", "6.9", "8.6", "15"],
            },
        ],
        coolingHeating:[
            {
                title:"COOLING",
                measurements:["45/55", "78", "67"],
            },
            {
                title:"HEATING",
                measurements:["160/130", "70", ""],
            }          
        ],
        measurementChart:[
            {
                title:"BTR350Z",
                measurements:['13.75"','36.5"', '15"', '25.75"', '25.75"', '13.3125', '7.25"', '4.5"', '10"', '6.25"', '4.5625"', '5.6875'],
            },
            {
                title:"BTR450Z",
                measurements:['13.75"','36.5"', '15"', '26.75"', '25.75"', '13.3125', '14.25"', '4.5"', '10"', '13.25"', '4.5625"', '5.6875'],
            },
            {
                title:"BTR600Z",
                measurements:['13.75"','38.5"', '15"', '30.5"', '27.75"', '13.3125', '21"', '4.5"', '10"', '20"', '4.5625"', '5.6875'],
            },
            {
                title:"BTR800Z",
                measurements:['13.75"','43"', '16.5"', '32.25"', '29.5"', '13.3125', '23.5"', '4.5"', '10"', '22.5"', '4.5625"', '5.6875'],
            },
            {
                title:"BTR800ZW",
                measurements:['17.75"','46.5"', '16.5"', '31.75"', '28.75"', '13.3125', '23.5"', '4.5"', '10"', '22.5"', '4.5625"', '5.6875'],
            },
            {
                title:"BTR1000Z",
                measurements:['17.75"','46.5"', '16.5"', '31.5"', '28.75"', '16.3125', '23.5"', '4.5"', '13"', '22.5"', '4.5625"', '5.6875'],
            }
        ],
        tabletype:2,

        //Line Graph Details
        lines:[
            {
                name: "0.2 in wc",
                data: [
                    {"x": 96, "y": 23},
                    {"x": 157, "y": 21},
                    {"x": 218, "y": 31},
                    {"x": 366, "y": 66},
                    {"x": 484, "y": 121},
                    {"x": 603, "y": 193},
                    {"x": 982, "y": 492}
                ]
                  
            },
            {
                name: "0.3 in wc",
                data: [
                    {"x": 94, "y": 33},
                    {"x": 148, "y": 35},
                    {"x": 216, "y": 47},
                    {"x": 290, "y": 62},
                    {"x": 390, "y": 95},
                    {"x": 555, "y": 181},
                    {"x": 747, "y": 301},
                    {"x": 980, "y": 492}
                ]
                  
            },
            {
                name: "0.5 in wc",
                data: [
                    {"x": 92, "y": 45},
                    {"x": 196, "y": 60},
                    {"x": 279, "y": 78},
                    {"x": 342, "y": 105},
                    {"x": 423, "y": 140},
                    {"x": 518, "y": 183},
                    {"x": 618, "y": 239},
                    {"x": 714, "y": 311},
                    {"x": 980, "y": 544}
                ]
            },
            {
                name: "0.7 in wc",
                data: [
                    {"x": 96, "y": 62},
                    {"x": 196, "y": 86},
                    {"x": 244, "y": 101},
                    {"x": 399, "y": 163},
                    {"x": 455, "y": 200},
                    {"x": 483, "y": 220},
                    {"x": 505, "y": 231},
                    {"x": 592, "y": 268},
                    {"x": 623, "y": 280},
                    {"x": 640, "y": 303},
                    {"x": 740, "y": 393},
                    {"x": 784, "y": 414},
                    {"x": 817, "y": 428},
                    {"x": 899, "y": 500},
                    {"x": 980, "y": 576}
                ]
                
            }
        ],
        xaxis: {
            type: 'numeric',
            min: 0,
            max: 1200,
            title: {
              text: 'CFM'
            }
        },
        yaxis: {
        min: 0,
        max: 700,
        title: {
            text: 'WATTAGE'
        }
        },
    },
    {
        id: "mhr",
        name: "MHR",
        type: "New Modal",
        cabin: "No Cabin",
        description: "This is a placeholder. Write a description for the product Lorem",
        images:[MHR, frontMHR, ThirdMHR],
        capacityChart:[
            {
                title:"MHR400Z",
                measurements:["4 X 2", "0.20", "2.3", "2", "11407", "1.7", "2", "29650", "4.9", "6.1", "15"],
            },
            {
                title:"MHR600Z",
                measurements:["4 X 2", "0.20", "MAX 10", "2.5", "18700", "MAX 10", "2.5", "40600", "4.9", "6.1", "15"],
            },
        ],
        coolingHeating:[
            {
                title:"COOLING",
                measurements:["45/55", "78", "67"],
            },
            {
                title:"HEATING",
                measurements:["160/130", "70", ""],
            }      
        ],
        measurementChart:[
            {
                title:"MHR400Z",
                measurements:['17.75"','37.1"', '9"', '30.975"', '27.875"', '13.3125"', '13.3125"', '4.75"', '4.5"', '10"', '4.56"', '5.69"'],
            },
            {
                title:"MHR600Z",
                measurements:['17.75"','37.875"', '12"', '31.975"', '27.875"', '13.3125"', '13.3125"', '4.5"', '10"', '20"', '4.56"', '5.69"'],
            },
        ],
        tabletype:2,

        //Line Graph Details
        lines:[
            {
                name: "60% Speed",
                data:[
                    {"x": 1, "y": 330},
                    {"x": 50, "y": 293},
                    {"x": 92, "y": 283},
                    {"x": 117, "y": 277},
                    {"x": 215, "y": 263},
                    {"x": 230, "y": 252},
                    {"x": 239, "y": 226},
                    {"x": 260, "y": 195},
                    {"x": 290, "y": 136},
                    {"x": 301, "y": 120},
                    {"x": 311, "y": 100},
                    {"x": 323, "y": 43},
                    {"x": 358, "y": 2}
                ]
                  
            },
            {
                name: "80% Speed",
                data: [
                    {"x": 2, "y": 440},
                    {"x": 62, "y": 389},
                    {"x": 148, "y": 374},
                    {"x": 159, "y": 364},
                    {"x": 319, "y": 342},
                    {"x": 330, "y": 334},
                    {"x": 339, "y": 307},
                    {"x": 356, "y": 246},
                    {"x": 363, "y": 228},
                    {"x": 381, "y": 204},
                    {"x": 389, "y": 179},
                    {"x": 454, "y": 61},
                    {"x": 466, "y": 33},
                    {"x": 479, "y": 0}
                ]
            },
            {
                name: "100% Speed",
                data: [
                    {"x": 1, "y": 553},
                    {"x": 49, "y": 498},
                    {"x": 82, "y": 480},
                    {"x": 106, "y": 474},
                    {"x": 181, "y": 466},
                    {"x": 199, "y": 460},
                    {"x": 359, "y": 439},
                    {"x": 380, "y": 429},
                    {"x": 401, "y": 399},
                    {"x": 452, "y": 301},
                    {"x": 503, "y": 197},
                    {"x": 531, "y": 134},
                    {"x": 573, "y": 65},
                    {"x": 597, "y": 2}
                ]
                  
            },
        ],
        xaxis: {
            type: 'numeric',
            min: 0,
            max: 700,
            title: {
              text: 'CFM'
            }
        },
        yaxis: {
        min: 0,
        max: 600,
        title: {
            text: 'STATIC PRESSURE [PA]'
        }
        },
    },
    {
        id: "ddr",
        name: "DDR",
        type: "New Modal",
        cabin: "No Cabin",
        description: "This is a placeholder. Write a description for the product Lorem",
        images:[DDR, frontDDR, ThirdDDR],
        capacityChart:[
            {
                title:"CFC1200Z",
                measurements:["4 X 4", "0.20", "16", "6", "39500", "16.0", "6", "90500", "6.9", "8.6", "15"],
            },
        ],
        coolingHeating:[
            {
                title:"COOLING",
                measurements:["45/55", "78", "67"],
            },
            {
                title:"HEATING",
                measurements:["160/130", "70", ""],
            }      
        ],
        measurementChart:[
            {
                title:"DDR1200Z",
                measurements:['17.75"','37.1"', '9"', '30.975"', '27.875"', '13.3125"', '13.3125"', '4.75"', '4.5"', '10"', '4.56"', '5.69"'],
            },
        ],
        tabletype:2,

        //Line Graph Details
        lines:[
            {
                name: "0.2 in wc",
                data: [
                    {"x": 865, "y": 365},
                    {"x": 1003, "y": 470},
                    {"x": 1213, "y": 578}
                  ]
            },
            {
                name: "0.3 in wc",
                data: [
                    {"x": 857, "y": 379},
                    {"x": 995, "y": 494},
                    {"x": 1209, "y": 591}
                ]  
            },
            {
                name: "0.5 in wc",
                data: [
                    {"x": 867, "y": 398},
                    {"x": 998, "y": 513},
                    {"x": 1201, "y": 621}
                ]
                  
            },
            {
                name: "0.7 in wc",
                data: [
                    {"x": 870, "y": 423},
                    {"x": 999, "y": 555},
                    {"x": 1205, "y": 657}
                ]
            }
        ],
        xaxis: {
            type: 'numeric',
            min: 600,
            max: 1300,
            title: {
              text: 'WATTAGE'
            }
        },
        yaxis: {
        min: 300,
        max: 700,
        title: {
            text: 'WATTAGE'
        }
        },
    },
  ];