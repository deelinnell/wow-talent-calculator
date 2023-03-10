const mgArc = [
    {
        square: 0,
        row: {
            name: "row0",
            num: 0,
        },
        id: "mgArc0",
        talent: true,
        max: 2,
        pointsreq: 0,
        available: true,
        complete: false,
    },
    {
        square: 1,
        row: {
            name: "row0",
            num: 0,
        },
        id: "mgArc1",
        talent: true,
        max: 3,
        pointsreq: 0,
        available: true,
        complete: false,
    },
    {
        square: 2,
        row: {
            name: "row0",
            num: 0,
        },
        id: "mgArc2",
        talent: true,
        max: 5,
        pointsreq: 0,
        available: true,
        complete: false,
    },
    {
        square: 3,
        talent: false,
    },
    {
        square: 4,
        row: {
            name: "row1",
            num: 1,
        },
        id: "mgArc3",
        talent: true,
        max: 3,
        pointsreq: 5,
        available: false,
        complete: false,
    },
    {
        square: 5,
        row: {
            name: "row1",
            num: 1,
        },
        id: "mgArc4",
        talent: true,
        max: 2,
        pointsreq: 5,
        available: false,
        complete: false,
    },
    {
        square: 6,
        row: {
            name: "row1",
            num: 1,
        },
        id: "mgArc5",
        talent: true,
        max: 5,
        pointsreq: 5,
        available: false,
        complete: false,
    },
    {
        square: 7,
        talent: false,
    },
    {
        square: 8,
        row: {
            name: "row2",
            num: 2,
        },
        id: "mgArc6",
        talent: true,
        max: 2,
        pointsreq: 10,
        available: false,
        complete: false,
    },
    {
        square: 9,
        row: {
            name: "row2",
            num: 2,
        },
        id: "mgArc7",
        talent: true,
        max: 3,
        pointsreq: 10,
        available: false,
        complete: false,
    },
    {
        square: 10,
        row: {
            name: "row2",
            num: 2,
        },
        id: "mgArc8",
        talent: true,
        max: 3,
        pointsreq: 10,
        available: false,
        complete: false,
    },
    {
        square: 11,
        row: {
            name: "row2",
            num: 2,
        },
        id: "mgArc9",
        talent: true,
        max: 1,
        pointsreq: 10,
        available: false,
        complete: false,
    },
    {
        square: 12,
        row: {
            name: "row3",
            num: 3,
        },
        id: "mgArc10",
        talent: true,
        max: 2,
        pointsreq: 15,
        available: false,
        complete: false,
    },
    {
        square: 13,
        row: {
            name: "row3",
            num: 3,
        },
        id: "mgArc11",
        talent: true,
        max: 2,
        pointsreq: 15,
        available: false,
        complete: false,
    },
    {
        square: 14,
        row: {
            name: "row3",
            num: 3,
        },
        id: "mgArc12",
        talent: true,
        max: 3,
        pointsreq: 15,
        available: false,
        complete: false,
    },
    {
        square: 15,
        row: {
            name: "row3",
            num: 3,
        },
        id: "mgArc13",
        talent: true,
        max: 3,
        pointsreq: 15,
        available: false,
        complete: false,
    },
    {
        square: 16,
        row: {
            name: "row4",
            num: 4,
        },
        id: "mgArc14",
        talent: true,
        max: 2,
        pointsreq: 20,
        available: false,
        complete: false,
    },
    {
        square: 17,
        row: {
            name: "row4",
            num: 4,
        },
        id: "mgArc15",
        talent: true,
        max: 1,
        pointsreq: 20,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                mgArc[21].depend = undefined;
                mgArc[22].depend = undefined;
                mgArc[21].available = true;
                mgArc[22].available = true;
            } else if (arg === false) {
                mgArc[21].depend = true;
                mgArc[22].depend = true;
                mgArc[21].available = false;
                mgArc[22].available = false;
            }
        },
    },
    {
        square: 18,
        talent: false,
    },
    {
        square: 19,
        row: {
            name: "row4",
            num: 4,
        },
        id: "mgArc16",
        talent: true,
        max: 5,
        pointsreq: 20,
        available: false,
        complete: false,
    },
    {
        square: 20,
        row: {
            name: "row5",
            num: 5,
        },
        id: "mgArc17",
        talent: true,
        max: 3,
        pointsreq: 25,
        available: false,
        complete: false,
    },
    {
        square: 21,
        row: {
            name: "row5",
            num: 5,
        },
        id: "mgArc18",
        talent: true,
        max: 3,
        pointsreq: 25,
        available: false,
        complete: false,
        depend: true,
        dependency: function (arg) {
            if (arg === true) {
                mgArc[25].depend = undefined;
                mgArc[25].available = true;
            } else if (arg === false) {
                mgArc[25].depend = true;
                mgArc[25].available = false;
            }
        },
    },
    {
        square: 22,
        row: {
            name: "row5",
            num: 5,
        },
        id: "mgArc19",
        talent: true,
        max: 2,
        pointsreq: 25,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 23,
        talent: false,
    },
    {
        square: 24,
        row: {
            name: "row6",
            num: 6,
        },
        id: "mgArc20",
        talent: true,
        max: 3,
        pointsreq: 30,
        available: false,
        complete: false,
    },
    {
        square: 25,
        row: {
            name: "row6",
            num: 6,
        },
        id: "mgArc21",
        talent: true,
        max: 1,
        pointsreq: 30,
        available: false,
        complete: false,
        depend: true,
        dependency: function (arg) {
            if (arg === true) {
                mgArc[29].depend = undefined;
                mgArc[29].available = true;
            } else if (arg === false) {
                mgArc[29].depend = true;
                mgArc[29].available = false;
            }
        },
    },
    {
        square: 26,
        row: {
            name: "row6",
            num: 6,
        },
        id: "mgArc22",
        talent: true,
        max: 3,
        pointsreq: 30,
        available: false,
        complete: false,
    },
    {
        square: 27,
        talent: false,
    },
    {
        square: 28,
        talent: false,
    },
    {
        square: 29,
        row: {
            name: "row7",
            num: 7,
        },
        id: "mgArc23",
        talent: true,
        max: 2,
        pointsreq: 35,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 30,
        row: {
            name: "row7",
            num: 7,
        },
        id: "mgArc24",
        talent: true,
        max: 5,
        pointsreq: 35,
        available: false,
        complete: false,
    },
    {
        square: 31,
        talent: false,
    },
    {
        square: 32,
        talent: false,
    },
    {
        square: 33,
        row: {
            name: "row8",
            num: 8,
        },
        id: "mgArc25",
        talent: true,
        max: 1,
        pointsreq: 40,
        available: false,
        complete: false,
    },
    {
        square: 34,
        row: {
            name: "row8",
            num: 8,
        },
        id: "mgArc26",
        talent: true,
        max: 5,
        pointsreq: 40,
        available: false,
        complete: false,
    },
    {
        square: 35,
        talent: false,
    },
    {
        square: 36,
        talent: false,
    },
    {
        square: 37,
        row: {
            name: "row9",
            num: 9,
        },
        id: 'mgArc27',
        talent: true,
        max: 3,
        pointsreq: 45,
        available: false,
        complete: false,
    },
    {
        square: 38,
        row: {
            name: "row9",
            num: 9,
        },
        id: 'mgArc28',
        talent: true,
        max: 2,
        pointsreq: 45,
        available: false,
        complete: false
    },
    {
        square: 39,
        talent: false,
    },
    {
        square: 40,
        talent: false,
    },
    {
        square: 41,
        row: {
            name: "row10",
            num: 10,
        },
        id: 'mgArc29',
        talent: true,
        max: 1,
        pointsreq: 50,
        available: false,
        complete: false
    },
    {
        square: 42,
        talent: false,
    },
    {
        square: 43,
        talent: false,
    }
]

const mgFire = [
    {
        square: 0,
        talent: false
    },
    {
        square: 1,
        id: "mgFire0",
        talent: true,
        max: 5,
        available: true,
        complete: false,
        img: '/img/holy/SpiritualFocus.png'
    },
    {
        square: 2,
        talent: false
    },
    {
        square: 3,
        talent: false
    },
]

const mgFrst = [
    {
        square: 0,
        talent: false
    },
    {
        square: 1,
        id: "mgFrst0",
        talent: true,
        max: 5,
        available: true,
        complete: false,
        img: '/img/holy/SpiritualFocus.png'
    },
    {
        square: 2,
        talent: false
    },
    {
        square: 3,
        talent: false
    },
]

export { mgArc, mgFire, mgFrst }