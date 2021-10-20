function addStateDropdown(statesJson) {
    for (const i of statesJson) {
        const li = document.createElement("li");
        li.className = "state-list";
        li.textContent = i.name;
        states.append(li);
    }
}

function addColonyDropdown(colonyJson) {
    for (const i of colonyJson) {
        const li = document.createElement("li");
        li.className = "colony-list";
        li.textContent = i.name;
        colonies.append(li);
    }
}

function addPresidentDropdown(presJson) {
    for (const i of presJson) {
        const li = document.createElement("li");
        li.className = "pres-list";
        li.textContent = i.president;
        presidents.append(li);
    }
}

function addNatMonDropdown(natMonJson) {
    for (const i of natMonJson) {
        const li = document.createElement("li");
        li.className = "mon-list";
        li.textContent = i.monument;
        NationalMonuments.append(li);
    }
}

for (const e of h2) {
    e.addEventListener("click", dropDown);
}

for (const f of zIndex) {
    f.addEventListener("click", hideDropDown);
}

function dropDown(e) {
    // console.log("dropDown function"); console.log(e); Find the element's text
    // content and use it to display the right dropdown The dropdown's id is the
    // same as the text content without spaces
    const ulId = document.getElementById((e.target.textContent).replace(" ", ""));
    if (ulId.className === "dropDown") {
        ulId
            .classList
            .remove("dropDown");
        // } else if (ulId.className !== "dropDown") {
        // ulId.classList.remove("dropDown");
    } else {
        ulId.className = "dropDown";
    }
}

function hideDropDown(f) {
    const findDropDown = document.getElementsByClassName("dropDown");
    if (findDropDown[0] != undefined) {
        findDropDown[0]
            .classList
            .remove("dropDown");
    }

}

// for (const s of stateList) {     s.addEventListener("click",
// stateClickDropdown); } function stateClickDropdown(s) {     for (const i of
// s) {         const li = document.createElement("")     }     if (stateList
// === randSate.abv.textContent) {         randSate.abv.textContent.display =
// "show";         s.stopPropagation()     } } function stateClickDropdown() {
// if (stateList === flag) {         flag.style.visibility = "visible";
// stopPropagation();     } } console.log(stateClickDropdown)
