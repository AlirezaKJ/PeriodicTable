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

function openFBlock() {
    console.log("FBlock Open Req")
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

let tableelements = document.querySelectorAll("#table .element")
let nothingToggled = true

function elementHover(atomicnum) {
    if (nothingToggled) {
        showElInfo(atomicnum)
    }
}

function elementClick(atomicnum) {
    showElInfo(atomicnum)
    nothingToggled = false
    // Find Element Div
    eldata = wmdb[atomicnum] // Element Data
    elStandardName = formatQuote(elementinfo['"StandardName"'])
    elIconColor = formatQuote(elementinfo['"IconColor"'])
    elIconColor = elIconColor.split("[")[1].split("]")[0].split(",")
    elIconColor = [parseFloat(elIconColor[0]) * 255, parseFloat(elIconColor[1]) * 255, parseFloat(elIconColor[2]) * 255]
    csscolorstring = `rgb(${elIconColor[0]},${elIconColor[1]},${elIconColor[2]})`
    cssr.style.setProperty('--tableclicktglborder', csscolorstring);
    elementdiv = document.querySelector(`#table #${elStandardName}`)
    console.log(elementdiv)
    if (elementdiv.classList.contains("clicktgled")) {
        elementdiv.classList.remove("clicktgled")
        elementdiv.classList.remove("clicktglrow7")
        elementdiv.classList.remove("clicktglcolumn1")
        elementdiv.classList.remove("clicktglcolumn18")
        nothingToggled = true
    } else {
        tableelements.forEach(element => {
            element.classList.remove("clicktgled")
            element.classList.remove("clicktglrow7")
            element.classList.remove("clicktglcolumn1")
            element.classList.remove("clicktglcolumn18")
        });
        elementdiv.classList.add("clicktgled")
        if (elementdiv.classList.contains("row7")) {
            elementdiv.classList.add("clicktglrow7")
        } else if (elementdiv.classList.contains("column1")) {
            elementdiv.classList.add("clicktglcolumn1")
        } else if (elementdiv.classList.contains("column18")) {
            elementdiv.classList.add("clicktglcolumn18")
        }
    }
}

// Info Bar Vars And Functions
let membershipdiv = document.querySelector(".membershipbar")

let infobar_shortname = document.querySelector("#elinfo_shortname")
let infobar_fullname = document.querySelector("#elinfo_fullname")
let infobar_atmnumber = document.querySelector("#elinfo_atmnumber")
let infobar_atmmass = document.querySelector("#elinfo_atmmass")

let infobar_adiabaticindex = document.querySelector("#elinfo_adiabaticindex")
let infobar_atomicradius = document.querySelector("#elinfo_atomicradius")
let infobar_block = document.querySelector("#elinfo_block")
let infobar_boilingpoint = document.querySelector("#elinfo_boilingpoint")
let infobar_casnumber = document.querySelector("#elinfo_casnumber")
let infobar_color = document.querySelector("#elinfo_color")
let infobar_covalentradius = document.querySelector("#elinfo_covalentradius")
let infobar_criticalpressure = document.querySelector("#elinfo_criticalpressure")
let infobar_criticaltemperature = document.querySelector("#elinfo_criticaltemperature")
let infobar_crustabundance = document.querySelector("#elinfo_crustabundance")
let infobar_crystalstructure = document.querySelector("#elinfo_crystalstructure")
let infobar_discoveryyear = document.querySelector("#elinfo_discoveryyear")
let infobar_electricalConductivity = document.querySelector("#elinfo_electricalConductivity")
let infobar_electricalType = document.querySelector("#elinfo_electricalType")
let infobar_electronAffinity = document.querySelector("#elinfo_electronAffinity")
let infobar_Electronegativity = document.querySelector("#elinfo_Electronegativity")
let infobar_FusionHeat = document.querySelector("#elinfo_FusionHeat")
let infobar_HalfLife = document.querySelector("#elinfo_HalfLife")
let infobar_Lifetime = document.querySelector("#elinfo_Lifetime")
let infobar_MagneticType = document.querySelector("#elinfo_MagneticType")
let infobar_MeltingPoint = document.querySelector("#elinfo_MeltingPoint")
let infobar_MolarVolume = document.querySelector("#elinfo_MolarVolume")
let infobar_Radioactive = document.querySelector("#elinfo_Radioactive")
let infobar_Resistivity = document.querySelector("#elinfo_Resistivity")
let infobar_RefractiveIndex = document.querySelector("#elinfo_RefractiveIndex")
let infobar_SoundSpeed = document.querySelector("#elinfo_SoundSpeed")
let infobar_humanabundance = document.querySelector("#elinfo_humanabundance")
let infobar_MeteoriteAbundance = document.querySelector("#elinfo_MeteoriteAbundance")
let infobar_oceanabundance = document.querySelector("#elinfo_oceanabundance")
let infobar_solarabundance = document.querySelector("#elinfo_solarabundance")
let infobar_universeabundance = document.querySelector("#elinfo_universeabundance")

// Function To Remove Unwanted Quote From String
function formatQuote(text) {
    endingindex = text.length
    text = text.slice(1,endingindex - 1)
    if (text == "NotApplicable") {
        return "N/A"
    } else if (text == "NotAvailable") {
        return "N/A"        
    }
    return text
}

function showElInfo(atomicnum) {
    membershipdiv.innerHTML = ""
    elementinfo = wmdb[atomicnum - 1]
    elementabbr = formatQuote(elementinfo['"Abbreviation"'])
    elementfullname = formatQuote(elementinfo['"StandardName"'])
    elementatmNumber = formatQuote(elementinfo['"AtomicNumber"'])
    elementatmMass = formatQuote(elementinfo['"AtomicMass"'])
    elementmemberships = formatQuote(formatQuote(elementinfo['"Memberships"'])).split(", ") 
    // Loop For Group Memberships Display
    for (var i = elementmemberships.length - 1; i >= 0; i--) {
        var membershipspan = document.createElement("span")
        membershipspan.innerHTML = elementmemberships[i]
        membershipdiv.appendChild(membershipspan)
    }
    elementseries = formatQuote(elementinfo['"Series"']) // Not Applied
    elementphase = formatQuote(elementinfo['"Phase"']) // Not Applied
    elementseries = formatQuote(elementinfo['"Series"']) // Not Applied
    elementadiabaticIndex = formatQuote(elementinfo['"AdiabaticIndex"'])

    elementatomicRadius = formatQuote(elementinfo['"AtomicRadius"'])
    elementblock = formatQuote(elementinfo['"Block"'])  
    elementboilingPoint = formatQuote(elementinfo['"BoilingPoint"'])  
    elementcasNumber = formatQuote(elementinfo['"CASNumber"'])
    elementcolor = formatQuote(elementinfo['"Color"'])
    elementcovalentRadius = formatQuote(elementinfo['"CovalentRadius"'])
    elementcrustAbundance = formatQuote(elementinfo['"CrustAbundance"'])
    elementcriticalPressure = formatQuote(elementinfo['"CriticalPressure"'])
    elementcriticalTemperature = formatQuote(elementinfo['"CriticalTemperature"'])
    elementcrystalStructure = formatQuote(elementinfo['"CrystalStructure"'])
    elementdiscoveryYear = formatQuote(elementinfo['"DiscoveryYear"'])
    elementelectricalConductivity = formatQuote(elementinfo['"ElectricalConductivity"'])
    elementelectricalType = formatQuote(elementinfo['"ElectricalType"'])
    elementelectronAffinity = formatQuote(elementinfo['"ElectronAffinity"'])
    elementElectronegativity = formatQuote(elementinfo['"Electronegativity"'])
    elementFusionHeat = formatQuote(elementinfo['"FusionHeat"'])
    elementHalfLife = formatQuote(elementinfo['"HalfLife"'])
    elementHumanAbundance = formatQuote(elementinfo['"HumanAbundance"'])
    elementLifetime = formatQuote(elementinfo['"Lifetime"'])
    elementMagneticType = formatQuote(elementinfo['"MagneticType"'])
    elementMeltingPoint = formatQuote(elementinfo['"MeltingPoint"'])
    elementMeteoriteAbundance = formatQuote(elementinfo['"MeteoriteAbundance"'])
    elementMolarVolume = formatQuote(elementinfo['"MolarVolume"'])
    elementOceanAbundance = formatQuote(elementinfo['"OceanAbundance"'])
    elementRadioactive = formatQuote(elementinfo['"Radioactive"'])
    elementRefractiveIndex = formatQuote(elementinfo['"RefractiveIndex"'])
    elementResistivity = formatQuote(elementinfo['"Resistivity"'])
    elementSolarAbundance = formatQuote(elementinfo['"SolarAbundance"'])
    elementSoundSpeed = formatQuote(elementinfo['"SoundSpeed"'])
    elementThermalConductivity = formatQuote(elementinfo['"ThermalConductivity"'])
    elementThermalExpansion = formatQuote(elementinfo['"ThermalExpansion"'])
    elementUniverseAbundance = formatQuote(elementinfo['"UniverseAbundance"'])
    elementValence = formatQuote(elementinfo['"Valence"'])
    elementVanDerWaalsRadius = formatQuote(elementinfo['"VanDerWaalsRadius"'])
    elementVaporizationHeat = formatQuote(elementinfo['"VaporizationHeat"'])
    elementVaporizationHeat = formatQuote(elementinfo['"VanDerWaalsRadius"'])
    elementVickersHardness = formatQuote(elementinfo['"VickersHardness"'])

    infobar_shortname.innerHTML = elementabbr
    infobar_fullname.innerHTML = elementfullname
    infobar_atmnumber.innerHTML = elementatmNumber
    infobar_atmmass.innerHTML = elementatmMass

    infobar_adiabaticindex.innerHTML = "Adiabatic Index: " + elementadiabaticIndex
    infobar_atomicradius.innerHTML = "Atomic Radius: " + elementatomicRadius
    infobar_block.innerHTML = "Block: " + elementblock
    infobar_boilingpoint.innerHTML = "Boiling Point: " + elementboilingPoint
    infobar_casnumber.innerHTML = "CAS Number: " + elementcasNumber
    infobar_color.innerHTML = "Color: " + elementcolor
    infobar_covalentradius.innerHTML = "Covalent Radius: " + elementcovalentRadius
    infobar_criticaltemperature.innerHTML = "Critical Temperature: " + elementcriticalTemperature
    infobar_criticalpressure.innerHTML = "Critical Pressure: " + elementcriticalPressure
    infobar_crystalstructure.innerHTML = "Crystal Structure: " + elementcrystalStructure
    infobar_discoveryyear.innerHTML = "Discovery Year: " + elementdiscoveryYear
    infobar_electricalConductivity.innerHTML = "Electrical Conductivity: " + elementelectricalConductivity
    infobar_electricalType.innerHTML = "Electrical Type: " + elementelectricalType
    infobar_electronAffinity.innerHTML = "Electron Affinity: " + elementelectronAffinity
    infobar_Electronegativity.innerHTML = "Electron Negativity: " + elementElectronegativity
    infobar_FusionHeat.innerHTML = "Fusion Heat: " + elementFusionHeat
    infobar_HalfLife.innerHTML = "Half Life: " + elementHalfLife
    infobar_Lifetime.innerHTML = "Life Time: " + elementLifetime
    infobar_MagneticType.innerHTML = "Magnetic Type: " + elementMagneticType
    infobar_MeltingPoint.innerHTML = "MeltingPoint: " + elementMeltingPoint
    infobar_MolarVolume.innerHTML = "Molar Volume: " + elementMolarVolume
    infobar_Radioactive.innerHTML = "Radioactive: " + elementRadioactive
    infobar_Resistivity.innerHTML = "Resistivity: " + elementResistivity
    infobar_RefractiveIndex.innerHTML = "Refractive Index: " + elementRefractiveIndex
    infobar_SoundSpeed.innerHTML = "Sound Speed: " + elementSoundSpeed
    infobar_crustabundance.innerHTML = "Crust Abundance: <br>" + elementcrustAbundance
    infobar_humanabundance.innerHTML = "Human Abundance: <br>" + elementHumanAbundance
    infobar_MeteoriteAbundance.innerHTML = "Meteorite Abundance: <br>" + elementMeteoriteAbundance
    infobar_oceanabundance.innerHTML = "Ocean Abundance: <br>" + elementOceanAbundance
    infobar_solarabundance.innerHTML = "Solar Abundance: <br>" + elementSolarAbundance
    infobar_universeabundance.innerHTML = "Universe Abundance: <br>" + elementUniverseAbundance
    showElectronConfig(atomicnum)
}

// Electron Config Info
function showElectronConfig(atomicnum) {
    elementinfo = wmdb[atomicnum - 1]
    elementElectronShellConfiguration = formatQuote(elementinfo['"ElectronShellConfiguration"'])
    console.log(elementElectronShellConfiguration)
}