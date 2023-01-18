
const paHoly = [
    {
        square: 0,
        talent: false
    },
    {
        square: 1,
        row: {
            name: "row0",
            num: 0,
        },
        id: "paHoly0",
        talent: true,
        max: 5,
        pointsreq: 0,
        available: true,
        complete: false,
        img: '/img/holy/SpiritualFocus.png',
        tooltip: "Spiritual Focus",
    },
    {
        square: 2,
        row: {
            name: "row0",
            num: 0,
        },
        id: "paHoly1",
        talent: true,
        max: 5,
        pointsreq: 0,
        available: true,
        complete: false,
        img: '/img/holy/SealofPure.png',
        tooltip: "Seals of the Pure"
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
        id: "paHoly2",
        talent: true,
        max: 3,
        pointsreq: 5,
        available: false,
        complete: false,
        img: "/img.holy.UnyieldingFaith.png"
    },
    {
        square: 5,
        row: {
            name: "row1",
            num: 1,
        },
        id: "paHoly3",
        talent: true,
        max: 5,
        pointsreq: 5,
        available: false,
        complete: false,
        img: "img/holy/DivineIntellect.png"
    },
    {
        square: 6,
        row: {
            name: "row1",
            num: 1,
        },
        id: 'paHoly4',
        talent: true,
        max: 2,
        pointsreq: 5,
        available: false,
        complete: false
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
        id: 'paHoly5',
        talent: true,
        max: 1,
        pointsreq: 10,
        available: false,
        complete: false
    },
    {
        square: 9,
        row: {
            name: "row2",
            num: 2,
        },
        id: 'paHoly6',
        talent: true,
        max: 5,
        pointsreq: 10,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                paHoly[17].depend = undefined;
                paHoly[17].available = true;
            } else if (arg === false) {
                paHoly[17].depend = true;
                paHoly[17].available = false;
            }
        },
    },
    {
        square: 10,
        row: {
            name: "row2",
            num: 2,
        },
        id: 'paHoly7',
        talent: true,
        max: 2,
        pointsreq: 10,
        available: false,
        complete: false
    },
    {
        square: 11,
        talent: false,
    },
    {
        square: 12,
        row: {
            name: "row3",
            num: 3,
        },
        id: 'paHoly8',
        talent: true,
        max: 3,
        pointsreq: 15,
        available: false,
        complete: false
    },
    {
        square: 13,
        talent: false,
    },
    {
        square: 14,
        row: {
            name: "row3",
            num: 3,
        },
        id: 'paHoly9',
        talent: true,
        max: 2,
        pointsreq: 15,
        available: false,
        complete: false
    },
    {
        square: 15,
        row: {
            name: "row3",
            num: 3,
        },
        id: 'paHoly10',
        talent: true,
        max: 2,
        pointsreq: 15,
        available: false,
        complete: false
    },
    {
        square: 16,
        row: {
            name: "row4",
            num: 4,
        },
        id: 'paHoly11',
        talent: true,
        max: 2,
        pointsreq: 20,
        available: false,
        complete: false
    },
    {
        square: 17,
        row: {
            name: "row4",
            num: 4,
        },
        id: 'paHoly12',
        talent: true,
        max: 1,
        pointsreq: 20,
        depend: true,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                paHoly[25].depend = undefined;
                paHoly[25].available = true;
            } else if (arg === false) {
                paHoly[25].depend = true;
                paHoly[25].available = false;
            }
        },
    },
    {
        square: 18,
        row: {
            name: "row4",
            num: 4,
        },
        id: 'paHoly13',
        talent: true,
        max: 3,
        pointsreq: 20,
        available: false,
        complete: false
    },
    {
        square: 19,
        talent: false,
    },
    {
        square: 20,
        row: {
            name: "row5",
            num: 5,
        },
        id: 'paHoly14',
        talent: true,
        max: 2,
        pointsreq: 25,
        available: false,
        complete: false
    },
    {
        square: 21,
        talent: false,
    },
    {
        square: 22,
        row: {
            name: "row5",
            num: 5,
        },
        id: 'paHoly15',
        talent: true,
        max: 5,
        pointsreq: 25,
        available: false,
        complete: false
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
        id: 'paHoly16',
        talent: true,
        max: 3,
        pointsreq: 30,
        available: false,
        complete: false
    },
    {
        square: 25,
        row: {
            name: "row6",
            num: 6,
        },
        id: 'paHoly17',
        talent: true,
        max: 1,
        pointsreq: 30,
        available: false,
        complete: false,
        depend: true,
        dependency: function (arg) {
            if (arg === true) {
                paHoly[37].depend = undefined;
                paHoly[37].available = true;
            } else if (arg === false) {
                paHoly[37].depend = true;
                paHoly[37].available = false;
            }
        },
    },
    {
        square: 26,
        row: {
            name: "row6",
            num: 6,
        },
        id: 'paHoly18',
        talent: true,
        max: 3,
        pointsreq: 30,
        available: false,
        complete: false
    },
    {
        square: 27,
        talent: false,
    },
    {
        square: 28,
        row: {
            name: "row7",
            num: 7,
        },
        id: 'paHoly19',
        talent: true,
        max: 3,
        pointsreq: 35,
        available: false,
        complete: false
    },
    {
        square: 29,
        talent: false,
    },
    {
        square: 30,
        row: {
            name: "row7",
            num: 7,
        },
        id: 'paHoly20',
        talent: true,
        max: 5,
        pointsreq: 35,
        available: false,
        complete: false
    },
    {
        square: 31,
        talent: false,
    },
    {
        square: 32,
        row: {
            name: "row8",
            num: 8,
        },
        id: 'paHoly21',
        talent: true,
        max: 1,
        pointsreq: 40,
        available: false,
        complete: false
    },
    {
        square: 33,
        talent: false,
    },
    {
        square: 34,
        row: {
            name: "row8",
            num: 8,
        },
        id: 'paHoly22',
        talent: true,
        max: 5,
        pointsreq: 40,
        available: false,
        complete: false
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
        id: 'paHoly23',
        talent: true,
        max: 2,
        pointsreq: 45,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 38,
        row: {
            name: "row9",
            num: 9,
        },
        id: 'paHoly24',
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
        id: 'paHoly25',
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

const paProt = [
    {
        square: 0,
        talent: false,
    },
    {
        square: 1,
        row: {
            name: "row0",
            num: 0,
        },
        pointsreq: 0,
        id: "paProt0",
        talent: true,
        max: 5,
        available: true,
        complete: false
    },
    {
        square: 2,
        row: {
            name: "row0",
            num: 0,
        },
        pointsreq: 0,
        id: "paProt1",
        talent: true,
        max: 5,
        available: true,
        complete: false
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
        pointsreq: 5,
        id: "paProt2",
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 5,
        row: {
            name: "row1",
            num: 1,
        },
        pointsreq: 5,
        id: "paProt3",
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 6,
        row: {
            name: "row1",
            num: 1,
        },
        pointsreq: 5,
        id: 'paProt4',
        talent: true,
        max: 5,
        available: false,
        complete: false
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
        pointsreq: 10,
        id: 'paProt5',
        talent: true,
        max: 1,
        available: false,
        complete: false
    },
    {
        square: 9,
        row: {
            name: "row2",
            num: 2,
        },
        pointsreq: 10,
        id: 'paProt6',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 10,
        row: {
            name: "row2",
            num: 2,
        },
        pointsreq: 10,
        id: 'paProt7',
        talent: true,
        max: 5,
        available: false,
        complete: false
    },
    {
        square: 11,
        talent: false,
    },
    {
        square: 12,
        row: {
            name: "row3",
            num: 3,
        },
        pointsreq: 15,
        id: 'paProt8',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 13,
        row: {
            name: "row3",
            num: 3,
        },
        pointsreq: 15,
        id: 'paProt9',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 14,
        row: {
            name: "row3",
            num: 3,
        },
        pointsreq: 15,
        id: 'paProt10',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 15,
        talent: false,
    },
    {
        square: 16,
        talent: false,
    },
    {
        square: 17,
        row: {
            name: "row4",
            num: 4,
        },
        pointsreq: 20,
        id: 'paProt11',
        talent: true,
        max: 1,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                paProt[25].depend = undefined;
                paProt[25].available = true;
            } else if (arg === false) {
                paProt[25].depend = true;
                paProt[25].available = false;
            }
        },
    },
    {
        square: 18,
        row: {
            name: "row4",
            num: 4,
        },
        pointsreq: 20,
        id: 'paProt12',
        talent: true,
        max: 5,
        available: false,
        complete: false
    },
    {
        square: 19,
        talent: false,
    },
    {
        square: 20,
        row: {
            name: "row5",
            num: 5,
        },
        pointsreq: 25,
        id: 'paProt13',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 21,
        talent: false,
    },
    {
        square: 22,
        row: {
            name: "row5",
            num: 5,
        },
        pointsreq: 25,
        id: 'paProt14',
        talent: true,
        max: 3,
        available: false,
        complete: false
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
        pointsreq: 30,
        id: 'paProt15',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 25,
        row: {
            name: "row6",
            num: 6,
        },
        pointsreq: 30,
        id: 'paProt16',
        talent: true,
        max: 1,
        available: false,
        complete: false,
        depend: true,
        dependency: function (arg) {
            if (arg === true) {
                paProt[33].depend = undefined;
                paProt[33].available = true;
            } else if (arg === false) {
                paProt[33].depend = true;
                paProt[33].available = false;
            }
        },
    },
    {
        square: 26,
        row: {
            name: "row6",
            num: 6,
        },
        pointsreq: 30,
        id: 'paProt17',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 27,
        talent: false,
    },
    {
        square: 28,
        row: {
            name: "row7",
            num: 7,
        },
        pointsreq: 35,
        id: 'paProt18',
        talent: true,
        max: 3,
        available: false,
        complete: false

    },
    {
        square: 29,
        talent: false,
    },
    {
        square: 30,
        row: {
            name: "row7",
            num: 7,
        },
        pointsreq: 35,
        id: 'paProt19',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 31,
        talent: false,
    },
    {
        square: 32,
        row: {
            name: "row8",
            num: 8,
        },
        pointsreq: 40,
        id: 'paProt20',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 33,
        row: {
            name: "row8",
            num: 8,
        },
        pointsreq: 40,
        id: 'paProt21',
        talent: true,
        max: 1,
        available: false,
        complete: false,
        depend: true,
        dependency: function (arg) {
            if (arg === true) {
                paProt[37].depend = undefined;
                paProt[37].available = true;
            } else if (arg === false) {
                paProt[37].depend = true;
                paProt[37].available = false;
            }
        },
    },
    {
        square: 34,
        row: {
            name: "row8",
            num: 8,
        },
        pointsreq: 40,
        id: 'paProt22',
        talent: true,
        max: 2,
        available: false,
        complete: false
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
        pointsreq: 45,
        id: 'paProt23',
        talent: true,
        max: 3,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 38,
        row: {
            name: "row9",
            num: 9,
        },
        pointsreq: 45,
        id: 'paProt24',
        talent: true,
        max: 2,
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
        pointsreq: 50,
        id: 'paProt25',
        talent: true,
        max: 1,
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

const paRet = [
    {
        square: 0,
        talent: false,
    },
    {
        square: 1,
        row: {
            name: "row0",
            num: 0,
        },
        pointsreq: 0,
        id: "paRet0",
        talent: true,
        max: 5,
        available: true,
        complete: false

    },
    {
        square: 2,
        row: {
            name: "row0",
            num: 0,
        },
        pointsreq: 0,
        id: "paRet1",
        talent: true,
        max: 5,
        available: true,
        complete: false
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
        pointsreq: 5,
        id: "paRet2",
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 5,
        row: {
            name: "row1",
            num: 1,
        },
        pointsreq: 5,
        id: "paRet3",
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 6,
        row: {
            name: "row1",
            num: 1,
        },
        pointsreq: 5,
        id: 'paRet4',
        talent: true,
        max: 2,
        available: false,
        complete: false
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
        pointsreq: 10,
        id: 'paRet5',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 9,
        row: {
            name: "row2",
            num: 2,
        },
        pointsreq: 10,
        id: 'paRet6',
        talent: true,
        max: 5,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                paRet[21].depend = undefined;
                paRet[21].available = true;
            } else if (arg === false) {
                paRet[21].depend = true;
                paRet[21].available = false;
            }
        },
    },
    {
        square: 10,
        row: {
            name: "row2",
            num: 2,
        },
        pointsreq: 10,
        id: 'paRet7',
        talent: true,
        max: 1,
        available: false,
        complete: false
    },
    {
        square: 11,
        row: {
            name: "row2",
            num: 2,
        },
        pointsreq: 10,
        id: 'paRet8',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 12,
        row: {
            name: "row3",
            num: 3,
        },
        pointsreq: 15,
        id: 'paRet9',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 13,
        talent: false
    },
    {
        square: 14,
        row: {
            name: "row3",
            num: 3,
        },
        pointsreq: 15,
        id: 'paRet10',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 15,
        row: {
            name: "row3",
            num: 3,
        },
        pointsreq: 15,
        id: 'paRet11',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 16,
        row: {
            name: "row4",
            num: 4,
        },
        pointsreq: 20,
        id: 'paRet12',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 17,
        talent: false,
    },
    {
        square: 18,
        row: {
            name: "row4",
            num: 4,
        },
        pointsreq: 20,
        id: 'paRet13',
        talent: true,
        max: 1,
        available: false,
        complete: false
    },
    {
        square: 19,
        talent: false,
    },
    {
        square: 20,
        talent: false,
    },
    {
        square: 21,
        row: {
            name: "row5",
            num: 5,
        },
        pointsreq: 25,
        id: 'paRet14',
        talent: true,
        max: 3,
        available: false,
        complete: false,
        depend: true,
    },
    {
        square: 22,
        row: {
            name: "row5",
            num: 5,
        },
        pointsreq: 25,
        id: 'paRet15',
        talent: true,
        max: 2,
        available: false,
        complete: false
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
        pointsreq: 30,
        id: 'paRet16',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 25,
        row: {
            name: "row6",
            num: 6,
        },
        pointsreq: 30,
        id: 'paRet17',
        talent: true,
        max: 1,
        available: false,
        complete: false
    },
    {
        square: 26,
        row: {
            name: "row6",
            num: 6,
        },
        pointsreq: 30,
        id: 'paRet18',
        talent: true,
        max: 3,
        available: false,
        complete: false
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
        pointsreq: 35,
        id: 'paRet19',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 30,
        row: {
            name: "row7",
            num: 7,
        },
        pointsreq: 35,
        id: 'paRet20',
        talent: true,
        max: 2,
        available: false,
        complete: false
    },
    {
        square: 31,
        talent: false,
    },
    {
        square: 32,
        row: {
            name: "row8",
            num: 8,
        },
        pointsreq: 40,
        id: 'paRet21',
        talent: true,
        max: 3,
        available: false,
        complete: false
    },
    {
        square: 33,
        row: {
            name: "row8",
            num: 8,
        },
        pointsreq: 40,
        id: 'paRet22',
        talent: true,
        max: 1,
        available: false,
        complete: false,
        dependency: function (arg) {
            if (arg === true) {
                paRet[37].depend = undefined;
                paRet[37].available = true;
            } else if (arg === false) {
                paRet[37].depend = true;
                paRet[37].available = false;
            }
        },
    },
    {
        square: 34,
        row: {
            name: "row8",
            num: 8,
        },
        pointsreq: 40,
        id: 'paRet23',
        talent: true,
        max: 3,
        available: false,
        complete: false
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
        pointsreq: 45,
        id: 'paRet24',
        talent: true,
        max: 3,
        available: false,
        complete: false,
        depend: true
    },
    {
        square: 38,
        talent: false,
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
        pointsreq: 50,
        id: 'paRet25',
        talent: true,
        max: 1,
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

export { paHoly, paProt, paRet };