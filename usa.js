const wrapper = document.getElementById("wrapper");
const navBar = document.getElementById("navbar");
const links = document.querySelectorAll(".links");
const states = document.getElementById("States");
const randState = document.getElementById("rand-state");
const stateHeader = document.getElementById("state-header");
const cap = document.getElementById("cap");
const reps = document.getElementById("reps");
const flag = document.getElementById("state-flag");
const abv = document.getElementById("abv");
const pop = document.getElementById("pop");
const ratif = document.getElementById("ratif");
const h2 = document.getElementsByTagName("h2");
const body = document.body;
const dropContent = document.querySelectorAll("drop");
const category = document.querySelectorAll("category")
const varArry = [wrapper, navBar, links, states, randState, stateHeader, cap, reps, flag, abv, pop, ratif, h2, body, dropContent];
const dropElems = document.querySelectorAll(".category .links > li")
const natMon =
   ["Statue of Liberty",
   "Independence Hall",
   "Castillo de San Marcos",
   "Mount Rushmore",
   "Grand Canyon",
   "Redwood Forest",
   "Devil's Tower",
   "Giant Sequoia National Monument",
   "World War II Valor in the Pacific",
   "Little Bighorn Battlefield"];

fetch("https://gist.githubusercontent.com/Kenaxion/38448ed83c8dcb23380fc361ed5f554b/raw/925ea6f5720738d57f781bff901e746f63f8846e/code.json")
  .then(response => response.json()) //JSON.parse(response)
  .then(
    function (data) {
      addStateDropdown(data);
      addNatMon(natMon);
      getRandomState(data);
      setInterval(function() {getRandomState(data)}, 5000);
    }
  )

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
  //  console.log(stateIndex);
  //  console.log(randomState);
  }

