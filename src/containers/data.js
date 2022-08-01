export function overAll0() {
    return [   
        {
            area: "Центр",
            percent: 1,
            amount: 101,
            fieldCount: 11,
            fieldComplite: 111,
            info: true
        },
        {
            area: "Юг",
            percent: 2,
            amount: 202,
            fieldCount: 12,
            fieldComplite: 112,
            info: true
        },
        {
            area: "Север",
            percent: 3,
            amount: 303,
            fieldCount: 13,
            fieldComplite: 113,
            info: true
        },
    ]
}

export function overAll1() {
    return [   
        {
            area: "Центр",
            percent: 100,
            amount: 50000,
            info: true
        },
        {
            area: "Юг",
            percent: 100,
            amount: 44000,
            info: true
        },
        {
            area: "Север",
            percent: 100,
            amount: 42000,
            info: true
        },
        // ---------------------------------------
        {
            area: "Центр",
            percent: 100,
            amount: 815,
            info: true
        },
        {
            area: "Юг",
            percent: 100,
            amount: 377,
            info: true
        },
        {
            area: "Север",
            percent: 100,
            amount: 754,
            info: true
        }

    ]
};

export function overAll2() {
    return [   
        {
            area: "Центр",
            percent: 39,
            amount: 50000,
            info: true
        },
        {
            area: "Юг",
            percent: 45,
            amount: 44000,
            info: true
        },
        {
            area: "Север",
            percent: 34,
            amount: 42000,
            info: true
        },
        // ---------------------------------------
        {
            area: "Центр",
            percent: 39,
            amount: 815,
            info: true
        },
        {
            area: "Юг",
            percent: 45,
            amount: 377,
            info: true
        },
        {
            area: "Север",
            percent: 34,
            amount: 752,
            info: true
        }

    ]
};

export function overAll3() {
    return [   
        {
            area: "Центр",
            percent: 12,
            amount: 50000,
            info: true
        },
        {
            area: "Юг",
            percent: 13,
            amount: 44000,
            info: false
        },
        {
            area: "Север",
            percent: 8,
            amount: 42000,
            info: true
        },

        
        {
            area: "Центр",
            percent: 15,
            amount: 850,
            info: true
        },
        {
            area: "Юг",
            percent: 13,
            amount: 45500,
            info: true
        },
        {
            area: "Север",
            percent: 2,
            amount: 234,
            info: true
        },
    ]
};

export function overAll4() {
    return [   
        {
            area: "Центр",
            percent: 9,
            amount: 50000,
            info: false
        },
        {
            area: "Юг",
            percent: 0,
            amount: 44000,
            info: false
        },
        {
            area: "Север",
            percent: 0,
            amount: 42000,
            info: false
        },
        // ---------------------------------------
        {
            area: "Центр",
            percent: 0,
            amount: 850,
            info: true
        },
        {
            area: "Юг",
            percent: 0,
            amount: 415,
            info: true
        },
        {
            area: "Север",
            percent: 0,
            amount: 710,
            info: false
        }

    ]
};

function crops() {
    return [    
        {
            id: "1001",
            name: "Пшеница яровая",
            plan: 49166,
            fact: 38234,
            factOverTime: 7894,
            factToday: 3896,
            factTodayOver: 830,
            progress: 78,
            plan1: 234,
            fact1: 644,
            factOverTime1: 240,
            factToday1: 333,
            factTodayOver1: 20,
            progress1: 81,
            info: true
        }, 
        {
            id: "1002",
            name: "Рапс яровой",
            plan: 15841,
            fact: 6494,
            factOverTime: 743,
            factToday: 1985,
            factTodayOver: 0,
            progress: 41,
            plan1: 4151,
            fact1: 245,
            factOverTime1: 77, 
            factToday1: 776,
            factTodayOver1: 0,
            progress1: 39,
            info: true
        }, 
        {
            id: "1003",
            name: "Подсолнечник",
            plan: 70899,
            fact: 34031,
            factOverTime: 11381,
            factToday: 2943,
            factTodayOver:652,
            progress: 48,
            plan1: 5467,
            fact1: 667,
            factOverTime1: 87,
            factToday1: 74,
            factTodayOver1: 97, 
            progress1: 50,
            info: true
        }, 
        
        {
            id: "2001",
            name: "Пшеница озимая",
            plan: 0,
            fact: 0,
            factOverTime: 0,
            factToday: 0,
            factTodayOver: 0,
            progress: 0,
            plan1: 0,
            fact1: 0,
            factOverTime1: 0,
            factToday1: 0,
            factTodayOver1: 0,
            progress1: 0,
            info: false
        }, 
        {
            id: "2002",
            name: "Ячмень яровой",
            plan: 10841,
            fact: 5124,
            factOverTime: 343,
            factToday: 2980,
            factTodayOver: 0,
            progress: 41,
            plan1: 4151, 
            fact1: 245, 
            factOverTime1: 77,
            factToday1: 776,
            factTodayOver1: 0,
            progress1: 39,
            info: true

        }, 
        {
            id: "2003",
            name: "Подсолнечник ВО",
            plan: 33899,
            fact: 24031,
            factOverTime: 11381,
            factToday: 2943,
            factTodayOver: 652,
            progress: 48,
            plan1: 5467,
            fact1: 667,
            factOverTime1: 87,
            factToday1: 74,
            factTodayOver1: 97,
            progress1: 40,
            info: true
        }, 
    ]            
    };
    export default crops;
    
    