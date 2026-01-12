
var selectPio = document.getElementById("selectPioGuess");
let allPioneers=[];
let randomArray=[];
let unique =[];

let numGuesses=1;
let scoreToBeat=100;
let guesses = document.getElementById('countGuesses');
let bestScore = document.getElementById('result');
let win = 0; //0 = lost 1 = won;
let hint = document.getElementById('hint');
let hintCounter=1;
const guessButton = document.getElementById('submitGuess');
const resetButton = document.getElementById('resetGame');
const newGame = document.getElementById('newGame');


function populateGamePio(object) {
      
    const randPio = object.members;
    //get random pioneer from JSON data
    for (pio of randPio) {
    allPioneers.push(pio);
    //console.log(allPioneers);
    }

    const rand1 = allPioneers[Math.floor(Math.random() * allPioneers.length)];
    randomArray.push (rand1);
    console.log(randomArray.name);
    //document.getElementById("pioName").innerHTML = rand1.name;
    //document.getElementById("firstFact").innerHTML=rand1.facts[0];
    //document.getElementById("secondFact").innerHTML=rand1.facts[1];
    /*if (rand.facts[2]==""){
    document.getElementById("thirdFact").innerHTML=rand.facts[2];
    }
    */
    const potdGrid = document.getElementById("grid-container")
    const factContainer = document.createElement("div")
    //const buttonBar = document.createElement("div")

//the following is to dynamically pull and creat divs instead of hard coding 
//hard coding has been commented out
guessButton.addEventListener('click', ()=>{
  checkGuess(rand1.name);})
resetButton.addEventListener('click',()=>{
  resetGame(potdGrid,factContainer);
})
newGame.addEventListener('click',()=>{
  restartGame(potdGrid,factContainer);
})
  console.log(rand1.facts[0]);
  const fact1 = rand1.facts[0];
  const fact2 = rand1.facts[1];
  const fact3 = rand1.facts[2];
  const fact4 = rand1.facts[3];
  const fact5 = rand1.facts[4];

  genFacts(fact1,fact2,fact3,fact4,fact5,potdGrid,factContainer);
  hint.addEventListener('click', ()=>{
    genFacts(fact1,fact2,fact3,fact4,fact5,potdGrid,factContainer);})
  
    populateDropDown(allPioneers,selectPio);


}

function hintCount(){
  hintCounter++
  
}

function genFacts(fact1,fact2,fact3,fact4,fact5,potdGrid,factContainer){
  let facts = fact1
  if (hintCounter ==1) {
    facts = fact1;
  }
  else if (hintCounter==2) {
     facts = fact2;
    
  } 
  else if(hintCounter==3){
     facts = fact3;
  }
  else if(hintCounter==4){
     facts = fact4;
  }
  else {
     facts = fact5;
  }
  const factBoard = document.createElement("div");
//styling for CREATED DIVS
  if(facts===undefined){
    window.alert("no more hints");
  }
  else {
    factBoard.textContent = facts;
    factContainer.appendChild(factBoard);
    factBoard.style.display = "flex";
    factBoard.style.backgroundColor= "lightblue"
    factBoard.style.color="#4a4a4a";
    factBoard.style.width= "500px";
    factBoard.style.height="147.5px"
    factBoard.style.margin="auto"
    factBoard.style.justifyContent="center";
    factBoard.style.display = "column";
    factBoard.style.border="10px";
    factBoard.style.borderStyle="dotted";
    factBoard.style.borderColor="#9999ff"
    factBoard.style.alignItems="center";
   
  
//append facts to div and style
  //factContainer.appendChild(buttonBar);
  factContainer.style.display="grid";
  factContainer.gridGap="500px";
  potdGrid.appendChild(factContainer);
}
}
  
 
    
    
  /*
     function randomize (arr)
     {
      
         // Start from the last element and swap
         // one by one. We don't need to run for
         // the first element that's why i > 0
         for (let i = arr.length - 1; i > 0; i--)
         {
          
             // Pick a random index from 0 to i inclusive
             let j = Math.floor(Math.random() * (i + 1));
      
             // Swap arr[i] with the element
             // at random index
             [arr[i], arr[j]] = [arr[j], arr[i]];
         }
     }
  
 */
  function populateDropDown(array,select) {
      array.forEach(element=> {
          if (!unique.includes(element)) {
              unique.push(element);
          }
      });
    
   // console.log(randomize(allPioneers));
  //console.log(removeDuplicates(array));
    for (var i = 0; i < unique.length ; i++) {

        var selection = array[i].name;
        var option = document.createElement("option");
        option.textContent = selection;
        option.value = selection;
        select.appendChild(option);
    }

    console.log(array)
    
  }


createPioArray();

      async function createPioArray() {
        const requestURL =
          "https://kpf1.github.io/pioneers.json";
        const request = new Request(requestURL);
      
        const response = await fetch(request);
        const csPioneersText = await response.text();
      
        const csPioneers = JSON.parse(csPioneersText);
        populateGamePio(csPioneers);
      }

      function checkGuess(name) {
        output = selectPio.value;
        console.log("this is the output: " + output);
        countGuesses();
        if (name == output) {
        won();
        win = 1;
        }
        else {
        window.alert('Try Again');
        }
        }
        
        function countGuesses() {
        guesses.innerHTML = numGuesses++;
        }
        function won(){
            var numGuessesActual = numGuesses-1;
            //maybe should have just called Clear() 
            bestScoreCheck();
            window.alert("YOU WON WITH " + numGuessesActual + " GUESSES MADE..Click Start New Game");
            resetGame();

        }
        function bestScoreCheck() {
            if(numGuesses<scoreToBeat) {
               scoreToBeat=bestScore;
               bestScore.innerHTML=numGuesses-1;
            }
            else if(numGuesses ==1) {
               bestScore.innerHTML=numGuesses;
               window.alert("YOU HAVE THE HIGHEST SCORE POSSIBLE")
            }
            else if (numGuesses<bestScore){
              scoreToBeat=bestScore;
               bestScore.innerHTML=numGuesses-1;
            }
            
            
          }

        function resetGame(potdGrid,factContainer){
            //randomArray.splice(0,1);
            console.log("new array"+allPioneers)
          

         // allPioneers=[];
          numGuesses=1;
          createPioArray();
        console.log("reset");
        console.log("new array" + allPioneers);
        potdGrid.removeChild(factContainer);
        }

        function restartGame(potdGrid,factContainer){
      
      
       // allPioneers=[];
        numGuesses=1;
        createPioArray();
      console.log("reset");
      console.log("new array" + allPioneers);
      potdGrid.removeChild(factContainer);
      }
        function clear(facts,button){
         // facts.removeChild(button);
          win =0;
        }
        

      