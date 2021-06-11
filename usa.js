const h2 = document.getElementsByTagName("h2");
const states = document.getElementById("States");
const stateHeader = document.getElementById("state-header");
const cap = document.getElementById("cap");
const reps = document.getElementById("reps");
const flag = document.getElementById("state-flag");
const abv = document.getElementById("abv");
const pop = document.getElementById("pop");
const ratif = document.getElementById("ratif");
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
const colonies = ["New Hampshire",
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
"South Carolina",
]
fetch("https://gist.githubusercontent.com/Kenaxion/38448ed83c8dcb23380fc361ed5f554b/raw/5ac1ad99f2121238411d080f125777ca11accbc4/code.json")
  .then(response => response.json()) //JSON.parse(response)
  .then(
    function (data) {
      addStateDropdown(data);
      addNatMon(natMon);
      // addColonies(colonies);
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
