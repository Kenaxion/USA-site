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

//This code displays the dropdown when you click on the menu headers

// function dropdownShow(){
//     dropdown.classList.add("show");
// } 

// for (const e of h2) {
//     e.addEventListener("click", dropdown);
// }

// window.onclick = function(e){
//     let category = document.getElementsByClassName(".category");
//     if (!e.target.matches(".category")) {
//         const links = document.getElementsByClassName("links");
//         let i;
//         for (i = 0; i < links.length; i++) {
//             let openDropdown = links[i];
//             if (openDropdown.classList.contains("show")) {
//                 openDropdown.classList.remove("show");
//             }
//         }
//     }
// }

for (const e of h2) {
    e.addEventListener("click", dropDown);
    
}

function dropDown(e) {
    console.log("dropDown function");
    console.log(e);
    const ulId = document.getElementById((e.target.textContent).replace(" ", ""));
    if (ulId.className === "dropDown") {
        ulId.classList.remove("dropDown");
    } else {
        ulId.className = "dropDown";
    }
}

const dropDownMenu = (e) => {
    
}