
//Pull all glossary terms from github page JSON data
let words = [];
let definitions = [];
let clickPioInfo=0;
const grid = document.getElementById("flashcardGrid");
let divLength=0;
let click=0;




function populateGlossary(object) {
    const vocabulary = object.vocabulary;
    for (const word of vocabulary) {
     words.push(word.word);
     definitions.push(word.definition);
     console.log("this is all the words: " + words); 
    }

        for (var eachWord of vocabulary) {
        for (i = 0; i < 1; i++)  {
            cardCreation(eachWord)   
       
          }

        }
        printButton();
    }
//to fetch from JSON data
createGlossaryArray();
    async function createGlossaryArray() {
    const requestURL =
            "https://kpf1.github.io/glossary.json";
    const request = new Request(requestURL);
        
    const response = await fetch(request);
    const glossaryText = await response.text();
        
    const glossary = JSON.parse(glossaryText);
    populateGlossary(glossary);

    }

function cardCreation(variable) {
  // create divs to house each pioneers
 const div = document.createElement("div");
 
 //title in div
 var wordArea = document.createElement("p");
 //title.setAttribute("Id",counter);
wordArea.textContent=variable.word;

 console.log("Created div for: " + wordArea.innerHTML);

 wordArea.style.fontWeight="bolder"
 div.appendChild(wordArea);

 grid.appendChild(div);



  //CREATE BUTTONS AND ONCLICK FUNCTION
const viewDefButton = document.createElement("BUTTON");
var viewDefText = document.createTextNode(">");
viewDefButton.append(viewDefText)
div.appendChild(viewDefButton);
viewDefButton.addEventListener('click', ()=>{
    fun()});

let viewPioButton = document.createElement("BUTTON");
let viewPioTextView = document.createTextNode("View Pioneers");
let viewPioTextClear = document.createTextNode("Clear Pioneers from Panel");
//viewPioButton.appendChild(viewPioTextView);  
if (click ==0){
  viewPioButton.append(viewPioTextView);
}
else if (click % 2 === 0 ){
  viewPioButton.remove(viewPioTextView);  
  viewPioButton.append(viewPioTextClear);  
  console.log("view");
}
else  {
  viewPioButton.remove(viewPioTextClear);  
  viewPioButton.append(viewPioTextView);
  console.log("clear");
}
div.appendChild(viewPioButton);

viewPioButton.addEventListener('click', ()=>{
        createDiv(wordArea.textContent)});
viewPioButton.addEventListener('click', ()=>{
        clickFunc(viewPioButton,viewPioTextView,viewPioTextClear)});


 



function fun() {
 
if (wordArea.textContent==variable.word){
   wordArea.textContent=variable.definition;
}
else{
    
    wordArea.textContent=variable.word;

}
}


/*THINGS I TRIED TO AVOID INFINITY LOOP
 function viewDef (x,y){
    x.style.display="";
    y.style.display = "none";
   // viewDefButton.style.opacity=op;
    //div.style.transition="0.5s";

 }
 //DOES NOT WORK
 function resetButton(){
    viewDefButton.addEventListener('click', ()=>{
        fun()});
 }
 function viewWord (){
    wordArea.style.display="";
    //definitionArea.style.display = "none";
    viewDefButton.style.opacity="0.5";
    div.style.transition="0.5s";
 

 }
 */
   

//style for GRID
grid.style.display = "grid";
grid.style.gridTemplateColumns = "250px 250px 250px 250px";
grid.style.gridTemplateRows = "flex";
grid.style.justifyContent="center";
grid.gridGap = "50px";
 //style for NEW DIVS
 div.style.display = "grid";
 div.style.justifyContent="center";
 div.style.padding = "10px";
 div.style.width = "200px";
 div.style.margin = "10px";
 div.style.border = "5px dotted";
 div.style.borderRadius = "10px";
 div.style.borderColor = "#9999ff";
 div.style.backgroundColor = "lightblue";
 div.style.color = "#4a4a4a";
 //definitionArea.style.display = "none";

 //style for next buttons
 viewDefButton.style.height="50px";
 viewDefButton.style.width="20px";
 viewDefButton.style.opacity="0.75";
 viewDefButton.style.backgroundColor="plum";
 viewDefButton.style.border="none";
 viewDefButton.style.marginLeft="205px";
 viewDefButton.style.marginRight="2em";
 viewDefButton.style.float="right";
 viewDefButton.style.position="absolute";

 viewPioButton.style.maxHeight="25px";
 viewPioButton.width="75px";
 viewPioButton.style.position="relative";

function createDiv(word){
    console.log(word); //word is displaying correctly
let allPios =[];
 createPioneersArray();

      async function createPioneersArray() {
        const requestURL =
          "https://kpf1.github.io/pioneers.json";
        const request = new Request(requestURL);
      
        const response = await fetch(request);
        const csPioneersText = await response.text();
      
        const csPioneers = JSON.parse(csPioneersText);
        populatePioneers(csPioneers);
        //forFilter(csPioneers);
      }
      
      //creating array for womens history month (UK)
      function populatePioneers(object,word) {
      
        const pioneers = object.members;
        for (const indivPioneer of pioneers) {
           //doesnt do it for only algorithm but for all of the words.
            //however does only pull "Tester Figueroa"
            if ( indivPioneer.currTag == variable.word) {
         allPios.push(indivPioneer.name);
         let namePio = indivPioneer.name;
         console.log(indivPioneer.currTag);
         console.log(allPios);
         create1(indivPioneer)
            }
      
        
        }
      }
}
}
function minusClickPioInfo(){
  clickPioInfo--;
}
function plusClickPioInfo(){
  clickPioInfo++;
}
//function textPioButton(text){
 
//}
function clickFunc(){
  click++;
  console.log("CLICK: " +click);

}

function create1(variable){
  const grid = document.getElementById("pioPanel");
        // create divs to house each pioneers
  if (grid.contains(document.getElementById(click-1))){
    for (i=0; i<100;i++){
    grid.removeChild(document.getElementById(click-1));
    //grid.removeChild(document.getElementById(click-1));
    //grid.removeChild(document.getElementById(click-1));

    }
}
       const div = document.createElement("div");
    div.setAttribute('id',click);
    console.log(click);
       //BUTTON CURRENTLY ONLY GRABBING INFO FOR KARLI
      
       //title in div
       var title = document.createElement("p");
      
       title.textContent += variable.name;
       //button items for moreInfo Button
      divLength++;
       console.log("Created div for: " + title.innerHTML);
       //let input = `${counter}`
       //moreInfoButton.setAttribute("onClick","moreInfo(counter)");
       //moreInfoButton.addEventListener('click', ()=>{
        //moreInfo()});
       //console.log(title.innerHTML)
       title.style.fontWeight="bolder"
       div.appendChild(title);
       grid.appendChild(div);
      //console.log("test"+pioneers2.name)
      
      //style for GRID
      grid.style.display = "column";
      grid.style.gridTemplateColumns = "50px 100px 50px 50px";
      grid.style.gridTemplateRows = "flex";
      grid.style.justifyContent="center";
      //for popup on page:
      //grid.style.position="fixed"

      grid.gridGap = "70px";
       //style for NEW DIVS
       div.style.display = "grid";
       div.style.justifyContent="center";
       div.style.padding = "10px";
       div.style.width = "200px";
       div.style.margin = "10px";
       div.style.border = "2px solid";
       div.style.borderRadius = "10px";
       div.style.backgroundColor = "lightblue";
       div.style.color = "#4a4a4a";
       div.style.borderColor="#9999ff"
  
     // viewPioButton.addEventListener('click', ()=>{
       // clear(grid,div)});
      
}
function clear(grid, div){
    grid.remove(div);
  }  
function printButton() {
        printButton=document.createElement('BUTTON');
        printButtonText = document.createTextNode('PRINT FLASHCARDS')
        printButton.appendChild(printButtonText);
        grid.appendChild(printButton);
        printButton.addEventListener('click', ()=>{
            printFlashcards("printpage.html")});
}

//shows page and then have to click print button
//NEED TO FIGURE OUT HOW TO PRINT WITHOUT SHOWING
//BUT STILL WORKS
function printFlashcards(src){
        var newPage = window.open(src,'print','height=500,width=500');
        newPage.addEventListener(function(){
            newPage.print();
            newPage.close();
        }, true);

      }
