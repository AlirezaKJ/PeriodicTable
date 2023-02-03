function range(start, stop, step) { // PY Range in JS
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

let darktheme = localStorage.getItem("darkTheme")
let cssr = document.querySelector(':root');

if (darktheme === null) {
    darktheme = "true"
    localStorage.setItem("darkTheme","true")
}

if (darktheme == "true") {
    cssr.style.setProperty('--main', '#000');
    cssr.style.setProperty('--semi', '#fff');
    cssr.style.setProperty('--alt', '#333');
} else {
    cssr.style.setProperty('--main', '#fff');
    cssr.style.setProperty('--semi', '#000');
    cssr.style.setProperty('--alt', '#ccc');
}

function toggletheme() {
    if (darktheme == "true") {
        cssr.style.setProperty('--main', '#fff');
        cssr.style.setProperty('--semi', '#000');
        cssr.style.setProperty('--alt', '#ccc');
        darktheme = "false"
        localStorage.setItem("darkTheme","false")
    } else {
        darktheme = "true"
        localStorage.setItem("darkTheme","true")
        cssr.style.setProperty('--main', '#000');
        cssr.style.setProperty('--semi', '#fff');
        cssr.style.setProperty('--alt', '#333');
    }
}

let tablediv = document.getElementById("table")

function addcell(elindex = "0") {
    if (elindex != 0) {
        element = elementdb[elindex]
        var cell = document.createElement("div")
        cell.setAttribute("onmouseover",`elementHover(${element.atomicnum})`)
        cell.setAttribute("onclick",`elementClick(${element.atomicnum})`)
        cell.innerHTML = `
        <span class="elname">${element.shortname}
        </span><span class="elatomicnum">${element.atomicnum}</span>
        `
        cell.classList.add("element")
        cell.classList.add("item")
        cell.classList.add(element.series)
        cell.classList.add(element.group)
        cell.classList.add(`column${element.column}`)
        cell.classList.add(`row${element.row}`)
        cell.setAttribute("id",element.name)
    
        tablediv.appendChild(cell)
    } else {
        var cell = document.createElement("div")
        cell.classList.add("item")
        cell.classList.add("emptycell")
        tablediv.appendChild(cell)
    }
}

let nothingToggled = true

function elementHover(atomicnum) {
    if (nothingToggled) {
        showElInfo(atomicnum)
    }
}
function elementClick(atomicnum) {
    showElInfo(atomicnum)
    // Find Element Div
    eldata = wmdb[atomicnum]
    console.log(eldata)
}

// Adding Table Items
for (i in range(126)) {
    elementindex = parseInt(i) + 1
    var element = elementdb[elementindex]
    if (element != undefined) {
        addcell(elementindex)
    } else {
        addcell()   
    }
}

// Info Bar Vars And Functions
let tableels = document.querySelectorAll("#table .element")
let infobar_shortname = document.querySelector("#elinfo_shortname")
let infobar_fullname = document.querySelector("#elinfo_fullname")
let infobar_atmnumber = document.querySelector("#elinfo_atmnumber")
let infobar_atmmass = document.querySelector("#elinfo_atmmass")
let membershipdiv = document.querySelector(".membershipbar")
// Function To Remove Unwanted Quote From String
function formatQuote(text) {
    endingindex = text.length
    text = text.slice(1,endingindex - 1)
    return text
}

function showElInfo(atomicnum) {
    membershipdiv.innerHTML = ""
    elementinfo = wmdb[atomicnum - 1]
    elementabbr = formatQuote(elementinfo['"Abbreviation"'])
    elementfullname = formatQuote(elementinfo['"StandardName"'])
    elementatmNumber = formatQuote(elementinfo['"AtomicNumber"'])
    elementatmMass = formatQuote(elementinfo['"AtomicMass"'])
    elementmemberships = formatQuote(formatQuote(elementinfo['"Memberships"'])).split(", ") // Not Applied
    for (var i = elementmemberships.length - 1; i >= 0; i--) {
        var membershipspan = document.createElement("span")
        membershipspan.innerHTML = elementmemberships[i]
        membershipdiv.appendChild(membershipspan)
    }
    elementseries = formatQuote(elementinfo['"Series"']) // Not Applied
    elementphase = formatQuote(elementinfo['"Phase"']) // Not Applied
    elementseries = formatQuote(elementinfo['"Series"']) // Not Applied
    elementseries = formatQuote(elementinfo['"Series"']) // Not Applied
    infobar_shortname.innerHTML = elementabbr
    infobar_fullname.innerHTML = elementfullname
    infobar_atmnumber.innerHTML = elementatmNumber
    infobar_atmmass.innerHTML = elementatmMass
}