function range(start, stop, step) {
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

let tablediv = document.getElementById("table")

function addcell(elindex = "0") {
    if (elindex != 0) {
        element = elementdb[elindex]
        var cell = document.createElement("div")
        cell.innerHTML = `
        <span class="elname">${element.shortname}</span>
        <img src="${element.hoverbg}" alt="">
        `
        cell.classList.add("item")
        cell.classList.add(`column${element.column}`)
        cell.classList.add(`row${element.row}`)
        cell.setAttribute("id",element.name)
    
        tablediv.appendChild(cell)
    } else {
        var cell = document.createElement("div")
        cell.classList.add("item")
        tablediv.appendChild(cell)
    }
}

for (i in range(126)) {
    elementindex = parseInt(i) + 1
    var element = elementdb[elementindex]
    console.log(element)
    if (element != undefined) {
        addcell(elementindex)
    } else {
        addcell()
    }

    // console.log(element)
}