const potdGrid = document.getElementById("grid-container")
const factContainer = document.createElement("div")
const prev = document.getElementById("previous");
const next = document.getElementById("next");
const factBoard = document.createElement("div");
const image = document.getElementById("img");
const picture = document.getElementById("picture");
const printButton = document.getElementById("rando");
let fact1 ="";
let fact2 ="";
let fact3 ="";
let fact4 ="";
let fact5="";
let fact6="";
//090623 THIS FUNCTION PICKS A RANDOM PIO TO FEATURE (NO RULES YET)
let clicked =0;
let limit =0;
function addClick(){
  clicked++;
  if ((clicked+1) == limit){
    next.disabled=true;
  }
 
  console.log(clicked);
  genFacts(fact1,fact2,fact3,fact4,fact5,fact6)

}
function minusClick(){
  clicked--;
  if ((clicked+1)<limit){
    next.disabled = false;
  }
  console.log(clicked);
  genFacts(fact1,fact2,fact3,fact4,fact5,fact6)


}
    function populateRandomPio(object) {
      
        const section = document.querySelector("section");
        const randPio = object.members;
        //get random pioneer from JSON data
        const rand = randPio[Math.floor(Math.random() * randPio.length)];
        document.getElementById("potd").innerHTML = rand.name;
        document.getElementById("years").innerHTML = rand.years;
        document.getElementById("Title").innerHTML = rand.achievement;
        console.log(rand.source);
        if (rand.source==undefined){
          image.src="file:///Users/karlafigueroa/Downloads/headshot.jpeg"
        }
        else {
        image.src=rand.source;
        }
        //document.getElementById("fact1").innerHTML = rand.facts[0];
        //document.getElementById("fact2").innerHTML = rand.facts[1];
        //document.getElementById("fact3").innerHTML = rand.facts[2]; 
        //const buttonBar = document.createElement("div")
       // const leftArrow = document.createElement("BUTTON");
       // leftArrow.setAttribute('id', 'previous');
        //var leftArrowText = document.createTextNode("< Prev");
        //const rightArrow = document.createElement("BUTTON");
        //rightArrow.setAttribute('id', 'next');
       // var rightArrowText = document.createTextNode("Next >");
        //leftArrow.appendChild(leftArrowText);
        //rightArrow.appendChild(rightArrowText);
        //buttonBar.appendChild(leftArrow);
        //buttonBar.appendChild(rightArrow);
        //potdGrid.appendChild(buttonBar);
        /*leftArrow.addEventListener('click', ()=>{
          minusClick();})
          document.getElementById('next').addEventListener('click', ()=>{
            addClick();})*/
//the following is to dynamically pull and creat divs instead of hard coding 
//hard coding has been commented out
         fact1 = rand.facts[0];
         fact2 = rand.facts[1];
         fact3 = rand.facts[2];
         fact4 = rand.facts[3];
         fact5 = rand.facts[4];
         fact6 = rand.facts[5];
          genFacts(fact1,fact2,fact3,fact4,fact5,fact6)
        console.log("length "+ rand.facts.length);
        limit = rand.facts.length;
        const nameofPio=rand.name;
        const birthday = rand.birthday;
        const career = rand.altCareer;
        const gender = rand.publicGenderIdentity;
        const years = rand.years;
        const facts1 = rand.facts;
        const img = rand.source;
        const birthCountry=rand.birthCountry;
        const citation = rand.citation;

        printButton.addEventListener('click', ()=>{
          printPioInfo(nameofPio,birthday,career,gender,years,facts1,img,birthCountry,citation)});
      
    }

    function genFacts(fact1,fact2,fact3,fact4,fact5,fact6){
      if (clicked ==0){
        if (fact1==undefined){
        }
        else {
          factGenerator(factBoard,fact1);
          console.log(fact1);
          prev.disabled = true;

        }

      }
      if (clicked ==1){
        if (fact2==undefined){

        }
        else {
          factGenerator(factBoard,fact2);
          console.log(fact2);
          prev.disabled = false;

        }

      }
      if (clicked ==2){

        if (fact3==undefined){

        }
        else{
          factGenerator(factBoard,fact3);
          prev.disabled = false;

        }
      }
      if (clicked ==3){

        if (fact4==undefined){

        }
        else{
          factGenerator(factBoard,fact4);
          prev.disabled = false;

        }

      }
      if (clicked ==4){

        if (fact5==undefined){

        }
        else {
          factGenerator(factBoard,fact5);
          prev.disabled = false;

        }

      }
      if (clicked ==5){

        if (fact6==undefined){

        }
    else {
      factGenerator(factBoard,fact6);
      prev.disabled = false;

    }

      }
    }
      populate();

      async function populate() {
        const requestURL =
            "https://kpf1.github.io/pioneers.json";
          const request = new Request(requestURL);
      
        const response = await fetch(request);
        const csPioneersText = await response.text();
      
        const csPioneers = JSON.parse(csPioneersText);
        populateRandomPio(csPioneers);
      }
      function factGenerator(factBoard,facts){
        //styling for CREATED DIVS
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


      // Function to try and get facts on a slideshow -> STILL IN THE WORKS
     /* function genFacts(fact1,fact2,fact3,fact4,fact5){
    
        console.log("FACTS GENERATED PROOF")
      
        //let facts = fact1
        if (hintCounter ==0) {
            displaySettings(fact1div,fact1)

          }
          else if (hintCounter==2) {
            displaySettings(fact2div,fact2)
            
          } 
          else if(hintCounter==3){
            displaySettings(fact3div,fact3)
          }
      
          else {
            window.alert("no more hints")     
        }
*/

      //Function to Print Featured Pioneer Information//
        function printPioInfo(nameofPio,birthday,career,gender,years,facts1,image,birthCountry,citation) {

          var newPage = window.open('','height=500,width=500');
          newPage.document.write('<html>');
          newPage.document.write('<body style="border:dotted;border-color:#9999ff;background-color:lightblue;color:#290725"> <h1> Pioneer Fact Card for ');
          newPage.document.write(nameofPio);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
          newPage.document.write('<div style = "height:260;width:254.8;border:solid;border-width:12.5px;border-radius:20px;border-bottom-width:75px;border-color:#9999ff">')
          newPage.document.write("Image Goes Here");
          newPage.document.write('<br>');
          //const image1 = document.getElementById("imag");
          //image1.src="https://hips.hearstapps.com/hmg-prod/images/karlie-kloss-1549565171.jpg?resize=1200:*";
          newPage.document.write('<br>');
          newPage.document.write('</div>');
          newPage.document.write('<br>');
          newPage.document.write("Birthday: " +birthday );
          newPage.document.write('<br>');
          newPage.document.write("Lived: " + years);
          newPage.document.write('<br>');
          newPage.document.write("Born in: " +birthCountry);
          newPage.document.write('<br>');
          newPage.document.write("Career outside of CS: " + career);
          newPage.document.write('<br>');
          newPage.document.write("Public Gender Identity: " + gender);
        
          newPage.document.write('<div style = "border:dotted;border-color:#9999ff">')
          newPage.document.write("Fun Facts: ");
          newPage.document.write('<br>');
          newPage.document.write('<br>');
          if(facts1[0]==undefined){
          }
          else{
          newPage.document.write(facts1[0]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(facts1[1]==undefined){
          }
          else{
          newPage.document.write(facts1[1]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(facts1[2]==undefined){
          }
          else{
          newPage.document.write(facts1[2]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(facts1[3]==undefined){
          }
          else{
          newPage.document.write(facts1[3]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(facts1[4]==undefined){
          }
          else{
          newPage.document.write(facts1[4]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(facts1[5]==undefined){
          }
          else{
          newPage.document.write(facts1[5]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(facts1[6]==undefined){
          }
          else{
          newPage.document.write(facts1[6]);
          newPage.document.write('<br>');
          }
          newPage.document.write('</div>');
        
          newPage.document.write("Resources: ");
          newPage.document.write('<br>');
          newPage.document.write("Image Source: " + image);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          newPage.document.write("Information Source(s): ");
        
          if(citation[0]==undefined){
          }
          else{
          newPage.document.write(citation[0]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(citation[1]==undefined){
          }
          else{
          newPage.document.write(citation[1]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(citation[2]==undefined){
          }
          else{
          newPage.document.write(citation[2]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(citation[3]==undefined){
          }
          else{
          newPage.document.write(citation[3]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(citation[4]==undefined){
          }
          else{
          newPage.document.write(citation[4]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(citation[5]==undefined){
          }
          else{
          newPage.document.write(citation[5]);
          newPage.document.write('<br>');
          newPage.document.write('<br>');
        
          }
          if(citation[6]==undefined){
          }
          else{
          newPage.document.write(citation[6]);
          newPage.document.write('<br>');
          }
          newPage.document.write('</div></body></html>');
        
          newPage.document.close();
        
        }

   
      


   