//Show Images
import CFC from "../ProductPhotos/CFC/CFC.png"
import BTR from "../ProductPhotos/BTR/BTR-ISO.png"
import DDR from "../ProductPhotos/DDR/DDR-ISO.png"
import DTR from "../ProductPhotos/DTR/DTR-ISO.png"
import MHR from "../ProductPhotos/MHR/MHR-ISO.png"
import useMeasure from "react-use-measure"

//Size Diagrams

export const RetrofitData = [
    {
        id: "cfc",
        name: "CFC",
        type: "Closet Fan",
        cabin: "Cabin",
        description: "Aurum’s CFC Series is our replacement solution for outdated closet fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement.",
        images:[CFC],
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

        lines:[
            {
                title: "0.2 in wc",
                plots: [
                    {"x": "96.00000000000009", "y": "23.225806451612904"},
                    {"x": "195.69230769230768", "y": "25.161290322580648"},
                    {"x": "302.76923076923083", "y": "46.45161290322581"},
                    {"x": "396.9230769230769", "y": "75.48387096774194"},
                    {"x": "502.1538461538461", "y": "127.74193548387098"},
                    {"x": "594.4615384615385", "y": "183.8709677419355"},
                    {"x": "694.1538461538461", "y": "253.5483870967742"},
                    {"x": "792", "y": "334.8387096774194"},
                    {"x": "897.2307692307692", "y": "420"},
                    {"x": "993.230769230769", "y": "495.483,87096774195"},
                ]
            },
            {
                title: "0.3 in wc",
                plots: [
                    {"x": "96.00000000000009", "y": "32.903225806451616"},
                    {"x": "195.69230769230768", "y": "40.645161290322584"},
                    {"x": "300.92307692307696", "y": "63.87096774193549"},
                    {"x": "396.9230769230769", "y": "98.70967741935485"},
                    {"x": "494.76923076923066", "y": "149.03225806451613"},
                    {"x": "594.4615384615385", "y": "201.29032258064518"},
                    {"x": "694.1538461538461", "y": "263.2258064516129"},
                    {"x": "790.1538461538461", "y": "329.03225806451616"},
                    {"x": "889.8461538461537", "y": "416.1290322580645"},
                    {"x": "989.5384615384615", "y": "497.4193548387097"},
                ]
            },
            {
                title: "0.5 in wc",
                plots: [
                    {"x": "96.00000000000009", "y": "63.87096774193549"},
                    {"x": "193.84615384615392", "y": "85.16129032258064"},
                    {"x": "299.0769230769231", "y": "121.93548387096774"},
                    {"x": "396.9230769230769", "y": "166.45161290322582"},
                    {"x": "496.6153846153845", "y": "232.25806451612902"},
                    {"x": "594.4615384615385", "y": "265.16129032258067"},
                    {"x": "697.8461538461538", "y": "354.19354838709677"},
                    {"x": "790.1538461538461", "y": "408.38709677419354"},
                    {"x": "908.3076923076922", "y": "499.35483870967744"},
                    {"x": "993.230769230769", "y": "576.7741935483871"},
                ]
            },
            {
                title: "0.7 in wc",
                plots: [
                    {"x": "94.15384615384622", "y": "46.45161290322581"},
                    {"x": "193.84615384615392", "y": "60"},
                    {"x": "293.5384615384616", "y": "85.16129032258064"},
                    {"x": "396.9230769230769", "y": "125.80645161290323"},
                    {"x": "494.76923076923066", "y": "172.25806451612902"},
                    {"x": "594.4615384615385", "y": "226.45161290322582"},
                    {"x": "692.3076923076922", "y": "290.3225806451613"},
                    {"x": "792", "y": "373.5483870967742"},
                    {"x": "891.6923076923076", "y": "462.58064516129036"},
                    {"x": "991.3846153846154", "y": "545.8064516129033"},
                ]
            }
        ]
    },
    {
        id: "dtr",
        name: "DTR",
        type: "Blow Through",
        cabin: "Cabin",
        description: "Aurum’s DTR Series is our replacement solution for outdated blow through fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement. ",
        images:[DTR],
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
        tabletype:1
    },
    {
        id: "btr",
        name: "BTR",
        type: "Blow Through",
        cabin: "No Cabin",
        description: "Aurum’s BTR Series is our replacement solution for outdated blow through fan coil units. By keeping the basic operations on this system, Aurum has revolutionized our fan coil unit to provide better energy efficiency, airflow and overall comfort. The slide in chassis is designed for an efficient, non-invasive replacement. ",
        images:[BTR],
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
        tabletype:2
    },
    {
        id: "mhr",
        name: "MHR",
        type: "New Modal",
        cabin: "No Cabin",
        description: "This is a placeholder. Write a description for the product Lorem",
        images:[MHR],
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
        tabletype:2
    },
    {
        id: "ddr",
        name: "DDR",
        type: "New Modal",
        cabin: "No Cabin",
        description: "This is a placeholder. Write a description for the product Lorem",
        images:[DDR],
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
        tabletype:2
    },
  ];