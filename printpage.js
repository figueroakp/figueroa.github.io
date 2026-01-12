//Pull all glossary terms from github page JSON data
let words = [];
let definitions = [];
const grid =document.getElementById('grid');

function populateGlossary(object) {
    const vocabulary = object.vocabulary;
    for (const word of vocabulary) {
     words.push(word.word);
     definitions.push(word.definition);
     console.log("this is all the words: " + words); 
     console.log("definitions: " + definitions); 
    }

        for (var eachWord of vocabulary) {
        for (i = 0; i < 1; i++)  {
            cardCreation(eachWord)   
       
          }

        }
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
 const card = document.createElement("div");
 const div1 = document.createElement("div");
 const div2 = document.createElement("div");

 
 //title in div
 var wordArea = document.createElement("p");
 var definitionArea=document.createElement("p")
 //title.setAttribute("Id",counter);
wordArea.textContent=variable.word;
definitionArea.textContent=variable.definition;

 console.log("Created div for: " + wordArea.innerHTML);

 wordArea.style.fontWeight="bolder"

 div1.appendChild(wordArea);
 div2.appendChild(definitionArea);
field1 = document.createElement('fieldset')
field2 = document.createElement('fieldset')




legend1 = document.createElement('legend')
legendText1 =document.createTextNode("cut here")
legend1.appendChild(legendText1);


legend2 = document.createElement('legend')
legendText2 =document.createTextNode("fold along this line")
legend2.appendChild(legendText2);


field1.appendChild(legend1)
field2.appendChild(legend2);


 card.appendChild(div1);
 card.appendChild(div2);
 card.appendChild(field2);

field1.appendChild(card);


 grid.appendChild(field1);

   

//style for GRID
grid.style.display = "grid";
grid.style.gridTemplateColumns = "400px 400px";
grid.style.gridTemplateRows = "flex";
grid.gridGap = "10px";


//style for individual flashcard
card.style.marginTop="-20px"
card.style.marginLeft="0px"

 //style for NEW DIV containing vocab word
 div1.style.display = "grid";
 div1.style.justifyContent="center";
 div1.style.border = "5px dotted";
 div1.style.borderRadius = "10px";
 div1.style.borderColor = "gray";
 div1.style.backgroundColor = "lightblue";
 div1.style.color = "#4a4a4a";
 div1.style.height="70px";
 div1.style.width="350px";
 div1.style.fontSize="medium";
 div1.style.borderBottom="none";


//styling for div containing definition
 div2.style.display = "grid";
 div2.style.justifyContent="center";
 div2.style.alignText="right"
 div2.style.borderRadius = "10px";
 div2.style.backgroundColor = "lightblue";
 div2.style.color = "#4a4a4a";
 div2.style.height="90px";
 div2.style.fontSize="medium";
 div2.style.width="360px";
 div2.style.fontSize="small";
 div2.style.textAlign="center"
 //div2.style.marginTop="0px";

//styling for border indicating CUT LINE
field1.style.border="dotted";
field1.style.borderColor="black";
field1.style.boxSizing="border-box"
field1.style.height="200px"
field1.style.width="185px";
field1.style.padding="20px";
field1.gridArea="1/1";
field1.style.margin="auto";
field1.style.alignItems="center"
field1.justifyContent="center"
field1.gridGap="10px"
field1.style.display="inline-table"
field1.alignText ="auto"
legend1.style.fontSize="10px";


//styling for fold line
field2.style.border="5px dotted";

field2.style.borderColor="gray"
field2.style.display=""
field2.style.marginTop="-92.5px"
field2.style.marginLeft="-3px"
field2.style.width="332.5px"
field2.style.height="67.5px";
field2.style.borderRadius="10px";
legend2.style.fontSize ="8px"




}