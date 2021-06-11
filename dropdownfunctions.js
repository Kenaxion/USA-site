function addStateDropdown(statesJson) {
    // console.log(statesJson.body);
    for (const i of statesJson) {
        const li = document.createElement("li");
        li.className = "state-list";
        li.textContent = i.name;
        states.append(li);
    }
}

function addNatMon(natMonLi) {
    for (const i of natMonLi) {
        const li = document.createElement("li");
        li.className = "mon-list";
        li.textContent = i;
        NationalMonuments.append(li);
    }
}

for (const e of h2) {
    e.addEventListener("click", dropDown);
}

function dropDown(e) {
    // console.log("dropDown function");
    // console.log(e);
    const ulId = document.getElementById((e.target.textContent).replace(" ", ""));
    if (ulId.className === "dropDown") {
        ulId.classList.remove("dropDown");
    } else {
        ulId.className = "dropDown";
    }
}

const dropDownMenu = (e) => {
    
}