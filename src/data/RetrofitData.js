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
        tabletype:1
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
        tabletype:1
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