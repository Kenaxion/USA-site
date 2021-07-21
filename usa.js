const h2 = document.getElementsByTagName("h2");
const li = document.getElementsByTagName("li");
const states = document.getElementById("States");
const stateHeader = document.getElementById("state-header");
const cap = document.getElementById("cap");
const reps = document.getElementById("reps");
const flag = document.getElementById("state-flag");
const randSate = document.getElementById("rand-state");
const abv = document.getElementById("abv");
const pop = document.getElementById("pop");
const ratif = document.getElementById("ratif");
const presidents = document.getElementById("Presidents");
const presName = document.getElementById("presName");
const presNum = document.getElementById("presNum");
const presTerm = document.getElementById("presTerm");
const presParty = document.getElementById("presParty");
const presState = document.getElementById("presState");
const presPic = document.getElementById("presPic");
const colonies = document.getElementById("13Colonies");
const colName = document.getElementById("colName");
const colEst = document.getElementById("colEst");
const colCap = document.getElementById("colCap");
const colFirstPop = document.getElementById("colFirstPop");
const colLastPop = document.getElementById("colLastPop");
const colPic = document.getElementById("presPic");
const colonyList = document.getElementsByClassName("colony-list");
const stateList = document.getElementsByClassName("state-list");
const presList = document.getElementsByClassName("pres-list");
const zIndex = document.getElementsByClassName("zindex");
const natMon = [
    "Statue of Liberty",
    "Independence Hall",
    "Castillo de San Marcos",
    "Mount Rushmore",
    "Grand Canyon",
    "Redwood Forest",
    "Devil's Tower",
    "Giant Sequoia National Monument",
    "World War II Valor in the Pacific",
    "Little Bighorn Battlefield"
];
// const colonies = [
//     "New Hampshire",
//     "Massachusetts",
//     "Connecticut",
//     "Rhode Island",
//     "New York",
//     "New Jersey",
//     "Pennsylvania",
//     "Delaware",
//     "Maryland",
//     "Virginia",
//     "North Carolina",
//     "South Carolina"
// ]
fetch(
    "https://gist.githubusercontent.com/Kenaxion/38448ed83c8dcb23380fc361ed5f554b/r" +
    "aw/5ac1ad99f2121238411d080f125777ca11accbc4/code.json"
)
    .then(response => response.json()) //JSON.parse(response)
    .then(function (data) {
        addStateDropdown(data);
        // addNatMon(natMon);
        getRandomState(data);
        setInterval(function () {
            getRandomState(data);
        }, 5000);
    })

// set interval to stop timeout???

function getRandomState(statesJson) {
    let stateIndex = Math.floor(Math.random() * statesJson.length);
    let randomState = statesJson[stateIndex];
    stateHeader.textContent = randomState.name;
    abv.textContent = randomState.abv;
    cap.textContent = randomState.capital;
    reps.textContent = randomState.num_reps;
    flag.src = "flags/" + randomState.abv + ".svg";
    pop.textContent = randomState.population;
    ratif.textContent = randomState.ratified;
    //  console.log(stateIndex);  console.log(randomState);
}



fetch(
    "https://gist.githubusercontent.com/Kenaxion/3689e2a3b1b1e5435ca5d96b27e72a97/r" +
    "aw/c178b59fa65bcca8abb6deefe2f9be6ec6dcb14a/presidentlist.json"
)
    .then(response => response.json())
    .then(function (data) {
        addPresidentDropdown(data);
        getRandomPresident(data);
        setInterval(function () {
            getRandomPresident(data);
        }, 5000);
    })

function getRandomPresident(presJson) {
    let presIndex = Math.floor(Math.random() * presJson.length);
    let randomPres = presJson[presIndex];
    presName.textContent = randomPres.president;
    presNum.textContent = randomPres.num;
    presTerm.textContent = randomPres.term;
    presParty.textContent = randomPres.party;
    presState.textContent = randomPres.birth_state;
    presPic.textContent = randomPres.num;
    presPic.src = "presidents/" + randomPres.num + ".jpg";
    console.log(presIndex);
    console.log(randomPres);
}

// ((randomPres.presNum.textContent).replace(" ", "")) for (const h of flag) {
// h.addEventListener("click", flagShow) } function flagShow (h) {   flag.src =
// "flags/"   if (states.textContent === ) }


fetch(
    "https://gist.githubusercontent.com/Kenaxion/ce6f1af7110dbec3c59518cf441ee786/raw/d5914ee6bb6129fb26fe0dd7d9f71f149d4324f8/colonies.json"
)
    .then(response => response.json())
    .then(function (data) {
        addColonyDropdown(data);
        getRandomColony(data);
        setInterval(function () {
            getRandomColony(data);
        }, 5000);
    })

function getRandomColony(colonyJson) {
    let colIndex = Math.floor(Math.random() * colonyJson.length);
    let randomColonies = colonyJson[colIndex];
    colName.textContent = randomColonies.name;
    colEst.textContent = randomColonies.est;
    colCap.textContent = randomColonies.capital;
    colFirstPop.textContent = randomColonies.first_pop;
    colLastPop.textContent = randomColonies.last_pop;
    colPic.textContent = randomColonies.name;
    colPic.src = "colonies/" + randomColonies.name + ".png";
    console.log(colIndex);
    console.log(randomColonies);
}