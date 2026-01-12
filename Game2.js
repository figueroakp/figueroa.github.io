
let allPioneers =[];
let randomPio=[];
let populateSearch =[];
let newGameClicked=0;
var selectPio = document.getElementById("selectPioGuess");
let unique =[];
let quitButton = document.getElementById("newGame");
let submitGuess=document.getElementById("submitGuess");
let bestScore = 100;
let guesses=0;
let best =document.getElementById("bestScore")
let guess = document.getElementById("countGuesses")
const potdGrid = document.getElementById("grid-container")
const factContainer = document.createElement("div")
factContainer.setAttribute('id', 'x');
let fact1div = document.getElementById("fact1");
let fact2div = document.getElementById("fact2");
let fact3div = document.getElementById("fact3");
document.getElementById("quit").disabled = true;
let randPio="";
let hintCounter=1;
let instruction = document.getElementById("label");
function populateAllPios(object) {
      
    const Pios = object.members;
    //get random pioneer from JSON data
    for (pio of Pios) {
    allPioneers.push(pio);
    //console.log(allPioneers);
    }
    runGame();
    instruction.textContent="";

    }

    function runGame(){
        chooseRandom();
        popSelections();
        const factContainer = document.createElement("div")
        console.log(newGameClicked);
        instruction.textContent="";

    }
    function newGame(){
        displaySettings(fact1div,fact1.textContent);
        document.getElementById("quit").disabled = true;
        newGameClicked=0;
        quitButton.disabled = false;
        instruction.textContent=" ";
        }

    function chooseRandom() {
        if (newGameClicked==1){
        randPio="";
        randPio = allPioneers[Math.floor(Math.random() * allPioneers.length)];
        randomPio.push(randPio);
        populateSearch.push(randPio);
        let fact1 = randPio.facts[0];
        let fact2 = randPio.facts[1];
        let fact3 = randPio.facts[2];
        let fact4 = randPio.facts[3];
        let fact5 = randPio.facts[4];
        console.log("FACT"+fact1);
        console.log("this is random chosen: " +randPio.name);
        console.log("random length " + randomPio.length);
        submitGuess.addEventListener('click', ()=>{
            checkGuess(randPio);})
       // if (newGameClicked==1){
         //   potdGrid.remove(factContainer);
        //} 
        //else{
        genFacts(fact1,fact2,fact3,fact4,fact5);

        hint.addEventListener('click', ()=>{
            genFacts(fact1,fact2,fact3,fact4,fact5);})
       // }

        }
        else{
        randPio = allPioneers[Math.floor(Math.random() * allPioneers.length)];
        randomPio.push(randPio);
        populateSearch.push(randPio);
        let fact1 = randPio.facts[0];
        let fact2 = randPio.facts[1];
        let fact3 = randPio.facts[2];
        let fact4 = randPio.facts[3];
        let fact5 = randPio.facts[4];
        console.log("FACT"+fact1);
        console.log("this is random chosen: " +randPio.name);
        console.log("random length " + randomPio.length);
        submitGuess.addEventListener('click', ()=>{
            checkGuess(randPio);})
       // if (newGameClicked==1){
         //   potdGrid.remove(factContainer);
        //} 
        //else{
        genFacts(fact1,fact2,fact3,fact4,fact5);

        hint.addEventListener('click', ()=>{
            genFacts(fact1,fact2,fact3,fact4,fact5);})
       // }
        }
    }
function popSelections(){
    if (populateSearch.length<5){
    for(i = 0;i<5;i++) {
        const randSel = allPioneers[Math.floor(Math.random() * allPioneers.length)];
        if (populateSearch.length==5){
            console.log("finished");
        }
        else{
            if (!populateSearch.includes(randSel)) {
                populateSearch.push(randSel);
                console.log(populateSearch.length);
            }
        }
}
shuffleArray(populateSearch);
    for (var i = 0; i < populateSearch.length; i++) {
        
        var selection = populateSearch[i];
        var option = document.createElement("option");
        option.textContent = selection.name;
        option.value = selection.name;
        selectPio.appendChild(option);
        if (newGameClicked==1){
            selectPio.remove(option);


        } 
    }
    console.log(populateSearch);
}



}

function removePop(option) {
    if (newGameClicked==1){
    for (var i = 0; i < allPioneers.length; i++) {
        selectPio.remove(option);
    }
    

}
}

function countNewGame(){
    newGameClicked++;
    populateSearch=[];
    randomPio=[];
    console.log(newGameClicked);
    guesses =0;
    guess.innerHTML=guesses;
    hintCounter=1;
    runGame();
    //NOT WORKING
    //potdGrid.removeChild(factContainer);
    dontDisplay(fact1div);
    dontDisplay(fact2div);
    dontDisplay(fact3div);
    document.getElementById("quit").disabled = false;
    bestScore=100;
    best.innerHTML="";
    quitButton.disabled = true;


}
/*
function removePopulated(){
    for (var i = 0; i < populateSearch.length; i++) {
        
        var option = document.getElementById("option");
        selectPio.remove(option);
    }
}
*/
function checkGuess(randPio) {
    resetGame();
    console.log("NUM OF GUESSES"+guesses);
    output = selectPio.value;
    console.log("This is User Selection: " + output);
    if (randPio.name == output) {
    console.log("winner")
    ifNewBestScore();
    winner();
    instruction.textContent="";

    }
    else if (output !== randPio.name) {
instruction.textContent="Oh Oh Try Again";
 }
 else {
    instruction.textContent="Oh Oh Try Again";

 }
    }
    
function winner(){
    instruction.textContent="";
    newGameClicked++;
    populateSearch=[];
    randomPio=[];
    console.log(newGameClicked);
    guesses =0;
    guess.innerHTML=guesses;
    hintCounter=1;
    runGame();
    //NOT WORKING
    //potdGrid.removeChild(factContainer);
    dontDisplay(fact1div);
    dontDisplay(fact2div);
    dontDisplay(fact3div);
    document.getElementById("quit").disabled = false;
    window.alert("Click New Game to get Next Pioneer to guess")
    instruction.textContent="";
    quitButton.disabled = true;
}

//Durstenfeld Shuffle
function shuffleArray(array){
    for (var i = array.length-1;i>0;i--){
        var j = Math.floor(Math.random()*(i+1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



function addGuess(){
    guesses++;
    guess.innerHTML=guesses;

}
/*
function resetGame(){
    populateSearch.length=0;
    randomPio.length=0;
    console.log("after end "+populateSearch);
    newGameClicked=0;
    //removePopulated();
    console.log(newGameClicked);
    console.log("this is length of popsearch "+populateSearch.length)
    guesses=0;
    guess.innerHTML=guesses;

}  
*/
function resetGame(){
    newGameClicked=0;
    console.log("NEW GAME CLICKED"+newGameClicked)
    //displaySettings(fact1div,fact1.textContent);
    

}

function ifNewBestScore(){
    if (guesses < bestScore || guesses == bestScore){
        bestScore=guesses;
        best.innerHTML=bestScore;
        instruction.textContent="";

    }
    else if (guesses > best.innerHTML){
        bestScore=bestScore;
        best.innerHTML=bestScore;
        instruction.textContent="";

    }
  
}  

function hintCount(){
    hintCounter++
    console.log("updated hintcount:" + hintCounter)
  }

function genFacts(fact1,fact2,fact3){
    
    console.log("FACTS GENERATED PROOF")
  
    //let facts = fact1
    if (hintCounter ==1) {
        displaySettings(fact1div,fact1)
      }
      else if (hintCounter==2) {
        displaySettings(fact2div,fact2)
        
      } 
      else if(hintCounter==3){
        displaySettings(fact3div,fact3)
      }
  
      else {
        instruction.textContent="No More Hints";
    }
      //const factBoard = document.createElement("div");
    //styling for CREATED DIVS


 
     
    
  //append facts to div and style
    //factContainer.appendChild(buttonBar);
    //factContainer.style.display="grid";
    //factContainer.gridGap="500px";
   // potdGrid.appendChild(factContainer);
    }


    function displaySettings(factBoard,fact){
        factBoard.textContent = fact;
        //factContainer.appendChild(factBoard);
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
    }
  function dontDisplay(factBoard){
    factBoard.style.display = "none";

  }

    createPioArray();

      async function createPioArray() {
        const requestURL =
          "https://kpf1.github.io/pioneers.json";
        const request = new Request(requestURL);
      
        const response = await fetch(request);
        const csPioneersText = await response.text();
      
        const csPioneers = JSON.parse(csPioneersText);
        populateAllPios(csPioneers);
      }
