// toggling each period and group functions
function togglePeriod(periodnum) {
    let periodels = document.querySelectorAll(`.Period${periodnum}`)
    if (periodnum == -1) {
        tableelements.forEach(element => {
            element.classList.remove("periodandgrouptgl")
        });
    } else {
        periodels.forEach(element => {
            element.classList.add("periodandgrouptgl")
        });
    }
}

function toggleGroup(groupnum) {
    let groupels = document.querySelectorAll(`.Group${groupnum}`)
    if (groupnum == -1) {
        tableelements.forEach(element => {
            element.classList.remove("periodandgrouptgl")
        });
    } else {
        groupels.forEach(element => {
            element.classList.add("periodandgrouptgl")
        });
    }
}

// toggling based on memberships functions

function toggleMetal(state) {
    let metals = document.querySelectorAll(".Metal")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("metaltgl")
        });
    } else if (state == 2) {
        metals.forEach(element => {
            element.classList.toggle("metaltgl")
        });
    } else {
        metals.forEach(element => {
            element.classList.add("metaltgl")
        });    
    }
}

function toggleMetalloid(state) {
    let metalloids = document.querySelectorAll(".Metalloid")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("metalloidtgl")
        });
    } else if (state == 2) {
        metalloids.forEach(element => {
            element.classList.toggle("metalloidtgl")
        });
    } else {
        metalloids.forEach(element => {
            element.classList.add("metalloidtgl")
        });
    }
}

function togglenonMetal(state) {
    let nonmetals = document.querySelectorAll(".Nonmetal")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglenonmetal")
        });
    } else if (state == 2) {
        nonmetals.forEach(element => {
            element.classList.toggle("togglenonmetal")
        });
    } else {
        nonmetals.forEach(element => {
            element.classList.add("togglenonmetal")
        });
    }
}

function toggleGas(state) {
    let gases = document.querySelectorAll(".Gas")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglegas")
        });
    } else if (state == 2) {
        gases.forEach(element => {
            element.classList.toggle("togglegas")
        });
    } else {
        gases.forEach(element => {
            element.classList.add("togglegas")
        });    
    } 
}

function toggleSolid(state) {
    let solids = document.querySelectorAll(".Solid")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglesolid")
        });
    } else if (state == 2) {
        solids.forEach(element => {
            element.classList.toggle("togglesolid")
        });
    } else {
        solids.forEach(element => {
            element.classList.add("togglesolid")
        });
    }
}

function toggleLiquid(state) {
    let liquids = document.querySelectorAll(".Liquid")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleliquid")
        });
    } else if (state == 2) {
        liquids.forEach(element => {
            element.classList.toggle("toggleliquid")
        });
    } else {
        liquids.forEach(element => {
            element.classList.add("toggleliquid")
        });
    }
}

function toggleDiamagnetic(state) {
    let diamagnetics = document.querySelectorAll(".Diamagnetic")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglediamagnetic")
        });
    } else if (state == 2) {
        diamagnetics.forEach(element => {
            element.classList.toggle("togglediamagnetic")
        });
    } else {
        diamagnetics.forEach(element => {
            element.classList.add("togglediamagnetic")
        });
    }
}

function toggleParamagnetic(state) {
    let paramagnetics = document.querySelectorAll(".Paramagnetic")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleparamagnetic")
        });
    } else if (state == 2) {
        paramagnetics.forEach(element => {
            element.classList.toggle("toggleparamagnetic")
        });
    } else {
        paramagnetics.forEach(element => {
            element.classList.add("toggleparamagnetic")
        });
    }
}

function toggleFerromagnetic(state) {
    let ferromagnetics = document.querySelectorAll(".Ferromagnetic")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleferromagnetic")
        });
    } else if (state == 2) {
        ferromagnetics.forEach(element => {
            element.classList.toggle("toggleferromagnetic")
        });
    } else {
        ferromagnetics.forEach(element => {
            element.classList.add("toggleferromagnetic")
        });
    }
}

function toggleAntiferromagnetic(state) {
    let antiferromagnetics = document.querySelectorAll(".Antiferromagnetic")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleantiferromagnetic")
        });
    } else if (state == 2) {
        antiferromagnetics.forEach(element => {
            element.classList.toggle("toggleantiferromagnetic")
        });
    } else {
        antiferromagnetics.forEach(element => {
            element.classList.add("toggleantiferromagnetic")
        });
    }
}

function toggleRadioactive(state) {
    let radioactives = document.querySelectorAll(".Radioactive")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleradioactive")
        });
    } else if (state == 2) {
        radioactives.forEach(element => {
            element.classList.toggle("toggleradioactive")
        });
    } else {
        radioactives.forEach(element => {
            element.classList.add("toggleradioactive")
        });
    }
}

function toggleStable(state) {
    let stables = document.querySelectorAll(".Stable")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglestable")
        });
    } else if (state == 2) {
        stables.forEach(element => {
            element.classList.toggle("togglestable")
        });
    } else {
        stables.forEach(element => {
            element.classList.add("togglestable")
        });
    }
}

function toggleVeryUnstable(state) {
    let veryunstables = document.querySelectorAll(".VeryUnstable")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleveryunstable")
        });
    } else if (state == 2) {
        veryunstables.forEach(element => {
            element.classList.toggle("toggleveryunstable")
        });
    } else {
        veryunstables.forEach(element => {
            element.classList.add("toggleveryunstable")
        });
    }
}   

function toggleNatural(state) {
    let naturals = document.querySelectorAll(".Natural")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglenatural")
        });
    } else if (state == 2) {
        naturals.forEach(element => {
            element.classList.toggle("togglenatural")
        });
    } else {
        naturals.forEach(element => {
            element.classList.add("togglenatural")
        });
    }
}

function toggleSynthetic(state) {
    let synthetics = document.querySelectorAll(".Synthetic")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglesynthetic")
        });
    } else if (state == 2) {
        synthetics.forEach(element => {
            element.classList.toggle("togglesynthetic")
        });
    } else {
        synthetics.forEach(element => {
            element.classList.add("togglesynthetic")
        });
    }
}

function toggleSBlock(state) {
    let sblocks = document.querySelectorAll(".SBlock")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglesblock")
        });
    } else if (state == 2) {
        sblocks.forEach(element => {
            element.classList.toggle("togglesblock")
        });
    } else {
        sblocks.forEach(element => {
            element.classList.add("togglesblock")
        });
    }
}

function togglePBlock(state) {
    let pblocks = document.querySelectorAll(".PBlock")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglepblock")
        });
    } else if (state == 2) {
        pblocks.forEach(element => {
            element.classList.toggle("togglepblock")
        });
    } else {
        pblocks.forEach(element => {
            element.classList.add("togglepblock")
        });
    }
}

function toggleDBlock(state) {
    let dblocks = document.querySelectorAll(".DBlock")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggledblock")
        });
    } else if (state == 2) {
        dblocks.forEach(element => {
            element.classList.toggle("toggledblock")
        });
    } else {
        dblocks.forEach(element => {
            element.classList.add("toggledblock")
        });
    }
}

function toggleConductor(state) {
    let conductors = document.querySelectorAll(".Conductor")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleconductor")
        });
    } else if (state == 2) {
        conductors.forEach(element => {
            element.classList.toggle("toggleconductor")
        });
    } else {
        conductors.forEach(element => {
            element.classList.add("toggleconductor")
        });
    }
}

function toggleSemiconductor(state) {
    let semiconductors = document.querySelectorAll(".Semiconductor")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("togglesemiconductor")
        });
    } else if (state == 2) {
        semiconductors.forEach(element => {
            element.classList.toggle("togglesemiconductor")
        });
    } else {
        semiconductors.forEach(element => {
            element.classList.add("togglesemiconductor")
        });
    }
}

function toggleInsulator(state) {
    let insulators = document.querySelectorAll(".Insulator")
    if (state == 0) {
        tableelements.forEach(element => {
            element.classList.remove("toggleinsulator")
        });
    } else if (state == 2) {
        insulators.forEach(element => {
            element.classList.toggle("toggleinsulator")
        });
    } else {
        insulators.forEach(element => {
            element.classList.add("toggleinsulator")
        });
    }
}

function toggleStates() {
    toggleSolid(2)
    toggleGas(2)
    toggleLiquid(2)
}

function toggleMetals() {
    toggleMetal(2)
    toggleMetalloid(2)
    togglenonMetal(2)
}

function toggleMagnetics() {
    toggleDiamagnetic(2)
    toggleParamagnetic(2)
    toggleFerromagnetic(2)
    toggleAntiferromagnetic(2)
}

function toggleBlocks() {
    toggleSBlock(2)
    togglePBlock(2)
    toggleDBlock(2)
}

function toggleConduction() {
    toggleConductor(2)
    toggleSemiconductor(2)
    toggleInsulator(2)
}

function toggleNaturals () {
    toggleNatural(2)
    toggleSynthetic(2)
}

function toggleReactions() {
    toggleRadioactive(2)
    toggleStable(2)
    toggleVeryUnstable(2)
}

// TODO: add fblock elements to membership toggling system