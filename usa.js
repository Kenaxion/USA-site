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
const presList = document.getElementById("Presidents");
const presName = document.getElementById("presName");
const presNum = document.getElementById("presNum");
const presTerm = document.getElementById("presTerm");
const presParty = document.getElementById("presParty");
const presState = document.getElementById("presState");
const presPic = document.getElementById("presPic");
const stateList = document.getElementsByClassName("state-list");
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
const colonies = [
    "New Hampshire",
    "Massachusetts",
    "Connecticut",
    "Rhode Island",
    "New York",
    "New Jersey",
    "Pennsylvania",
    "Delaware",
    "Maryland",
    "Virginia",
    "North Carolina",
    "South Carolina"
]
fetch(
    "https://gist.githubusercontent.com/Kenaxion/38448ed83c8dcb23380fc361ed5f554b/r" +
    "aw/5ac1ad99f2121238411d080f125777ca11accbc4/code.json"
)
    .then(response => response.json()) //JSON.parse(response)
    .then(function (data) {
        addStateDropdown(data);
        addNatMon(natMon);
        // addColonies(colonies);
        getRandomState(data);
        setInterval(function () {
            getRandomState(data)
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
    .then(function (presidentData) {
        getRandomPresident(presidentData)
        setInterval(function () {
            getRandomPresident(presidentData)
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
