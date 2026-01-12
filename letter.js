//pulling array for ALL CS Pioneers
var selectPio = document.getElementById("selectPioDropDown");
var search = document.getElementById("searchPio"); 
let selectTag = document.getElementById("selectTagDropDown")
var searchTag = document.getElementById("searchTag"); 
let selectCountry = document.getElementById("selectCountryDropDown")
var searchCountry = document.getElementById("searchCountry"); 
let selectCentury = document.getElementById("selectCenturyDropDown")
var searchCentury = document.getElementById("searchCentury"); 
var reset = document.getElementById("reset");
let showPio = document.getElementById("showPio");
let unique =[];
let uniqueCountries=[];
let uniqueCenturies=[];
const allPioneers = [];
const allTags = []; //HARD CODED GPS TO TEST WILL DELETE LATER
const allCountries=[];
const allCenturies=[];

function populatePioneers(object) {
    
    var counter = 0;
    const pioneers = object.members;
    for (const indivPioneer of pioneers) {
  
     allTags.push(indivPioneer.tags);
     allPioneers.push(indivPioneer.name);
     allCountries.push(indivPioneer.birthCountry);
     allCenturies.push(indivPioneer.century);
     unique = allTags.flat(Infinity).filter((value, index, self) => {
      return self.indexOf(value) == index;
  });
  uniqueCountries = allCountries.filter((value, index, self) => {
    return self.indexOf(value) == index;
});
uniqueCenturies = allCenturies.flat(Infinity).filter((value, index, self) => {
  return self.indexOf(value) == index;
});
     console.log("this is all the pioneers: " + allPioneers); 
     console.log("total number of pios: " + counter); 
    }
    populateDropDown(allPioneers.sort(),selectPio);
    populateDropDown(unique.sort(),selectTag);
    populateDropDown(uniqueCountries.sort(),selectCountry);
    populateDropDown(uniqueCenturies.sort(),selectCentury);
    inner();
    reset.addEventListener('click', ()=>{
      inner();})
     
    function inner () {
        for (var pioneers2 of pioneers) {
        for (i = 0; i < 1; i++)  {
        divCreation(pioneers2, counter);
          
          }
        
        }
      }
      
       } //needs to go here so only pulling exact number of pios
      
      
  
//bring all pioneers to drop down for filtering
    function populateDropDown(array,select) {
      let unique =[]
        array.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });    
    //console.log(removeDuplicates(array));
      for (var i = 0; i < unique.length; i++) {
          var selection = array[i];
          var option = document.createElement("option");
          option.textContent = selection;
          option.value = selection;
          select.appendChild(option);
      }
      
      console.log(array)
      
}


// begin code to filter drop down
//CODE FOR TESTING HAS BEEN COMMENTED OUT
//selectedPio = document.querySelector('#selectPioDropDown');

//output = selectedPio.value;
//output = "Karli Kloss"
//console.log(`${selectedPio}`);
//console.log("SELECTED: " +output);
//console.log(selectedPio);

//console.log("this is the output: " + output);
//select.onchange = Check(pioneers2);



//function for filtering
function filtersName() {
  selectElement = document.querySelector('#selectPioDropDown');
  output = selectElement.options[selectElement.selectedIndex].value;
  showPio.textContent="Click More Info, for facts and details about "+ `${output}`+"."
  if(allPioneers.includes(output)){
    function populateOnePio(object) {
      
      const pioneers = object.members;
      for (indivPioneer of pioneers) {
      if (indivPioneer.name == output) {

        divCreation(indivPioneer,indivPioneer.name);
        console.log("PIO chosen: " + output);    

      }
      }
    }

    
  
  createOnePioArray();
  
        async function createOnePioArray() {
          const requestURL =
            "https://kpf1.github.io/pioneers.json";
          const request = new Request(requestURL);
        
          const response = await fetch(request);
          const csPioneersText = await response.text();
        
          const csPioneers = JSON.parse(csPioneersText);
          populateOnePio(csPioneers);
        }
        
  }
  else{

    console.log(output)
  
  }
}
//filter for tags 
function filtersTags() {
  selectElement = document.querySelector('#selectTagDropDown');
  output = selectElement.options[selectElement.selectedIndex].value;
  showPio.textContent="Showing pioneers for the following tag: "+ `${output}`

  counter = 0;   
  if(allTags.flat(Infinity).includes(output)){
    function populateOnePio(object) {
      const pioneers = object.members;      
      console.log(pioneers);
      for (indivPioneer of pioneers) {
      for (i = 0; i < 1; i++)  { 
      const Temp = [];
      Temp.push(indivPioneer.tags);
      if (Temp.flat(Infinity).includes(output)){
      //indivPioneer.tags.flat(Infinity);
      //console.log("LENGTH"+indivPioneer.tags.length);
      //if (indivPioneer.tags.includes(output)){
        divCreation(indivPioneer,counter);
        console.log("PIO chosen: " + indivPioneer.name);    
  }
}
    }
  }

    
  
  createOnePioArray();
  
        async function createOnePioArray() {
          const requestURL =
            "https://kpf1.github.io/pioneers.json";
          const request = new Request(requestURL);
        
          const response = await fetch(request);
          const csPioneersText = await response.text();
        
          const csPioneers = JSON.parse(csPioneersText);
          populateOnePio(csPioneers);
        }
        
  }
  else{

    console.log(output)
  
  }
}
function filtersCountry() {
  selectElement = document.querySelector('#selectCountryDropDown');
  output = selectElement.options[selectElement.selectedIndex].value;
  counter = 0;   
  showPio.textContent="The following pioneers were born in "+ `${output}`+":"

  if(allCountries.includes(output)){
    function populateOnePio(object) {
      const pioneers = object.members;      
      console.log(pioneers);
      for (indivPioneer of pioneers) {
      for (i = 0; i < 1; i++)  { 
      const Temp = [];
      Temp.push(indivPioneer.birthCountry);
      if (Temp.includes(output)){
      //indivPioneer.tags.flat(Infinity);
      //console.log("LENGTH"+indivPioneer.tags.length);
      //if (indivPioneer.tags.includes(output)){
        divCreation(indivPioneer,counter);
        console.log("PIO chosen: " + indivPioneer.name);    
  }
}
    }
  }

    
  
  createOnePioArray();
  
        async function createOnePioArray() {
          const requestURL =
            "https://kpf1.github.io/pioneers.json";
          const request = new Request(requestURL);
        
          const response = await fetch(request);
          const csPioneersText = await response.text();
        
          const csPioneers = JSON.parse(csPioneersText);
          populateOnePio(csPioneers);
        }
        
  }
  else{

    console.log(output)
  
  }
}

function filtersCenturies() {
  selectElement = document.querySelector('#selectCenturyDropDown');
  output = selectElement.options[selectElement.selectedIndex].value;
  counter = 0; 
  showPio.textContent="The following pioneers lived in the "+ `${output}`+"th"+ " Century:"
  if(allCenturies.flat(Infinity).includes(output)){
    function populateOnePio(object) {
      const pioneers = object.members;      
      console.log(pioneers);
      for (indivPioneer of pioneers) {
      for (i = 0; i < 1; i++)  { 
      const Temp = [];
      Temp.push(indivPioneer.century);
      if (Temp.flat(Infinity).includes(output)){
      //indivPioneer.tags.flat(Infinity);
      //console.log("LENGTH"+indivPioneer.tags.length);
      //if (indivPioneer.tags.includes(output)){
        divCreation(indivPioneer,counter);
        console.log("PIO chosen: " + indivPioneer.name);    
  }
}
    }
  }

    
  
  createOnePioArray();
  
        async function createOnePioArray() {
          const requestURL =
            "https://kpf1.github.io/pioneers.json";
          const request = new Request(requestURL);
        
          const response = await fetch(request);
          const csPioneersText = await response.text();
        
          const csPioneers = JSON.parse(csPioneersText);
          populateOnePio(csPioneers);
        }
        
  }
  else{

    console.log(output)
  
  }
}
//clears out other selection of divs
//function clear() {
//COMING SOON
//In ideal world, when searching only those divs will show up
// all others should clear aka no duplicates should form
// and pios not within search limitations should not show up
//}


//function below can be reused to create cards
//needs to be called and variable/counter need to be replaced
//variable is meant to be person/pioneers
//counter is meant to be counter for above to keep track of div names
function divCreation(variable,counter){
  // create divs to house each pioneers
 const grid = document.getElementById("allPioneers");
 const div = document.createElement("div");
 const moreInfoButton = document.createElement("BUTTON");
 var moreInfoButtonText = document.createTextNode("More Info");
 //BUTTON CURRENTLY ONLY GRABBING INFO FOR KARLI
 moreInfoButton.appendChild(moreInfoButtonText);
 const letterButton = document.createElement("BUTTON");
 var letterButtonText = document.createTextNode("Write Letter");
 letterButton.appendChild(letterButtonText);

 //title in div
 var title = document.createElement("p");
 //title.setAttribute("Id",counter);
 console.log(title);
 var pio_birthday = document.createElement("p");
 var pio_achievement = document.createElement("p");
 title.textContent += variable.name;
 //button items for moreInfo Button
let birthday = variable.birthday;
let career = variable.altCareer;
let gender = variable.publicGenderIdentity;
let years = variable.years;
let facts1 = variable.facts;
let image = variable.source;
let birthCountry=variable.birthCountry;
let citation = variable.citation;
var image1 = document.createElement("img");
image1.src=variable.source;
console.log(variable.source);

 moreInfo(moreInfoButton,title.innerHTML,birthday,career,gender,years,facts1,image,birthCountry,citation);
 dearPio(letterButton);

 pio_birthday.textContent += ("Birthday: "+variable.birthday);
 pio_achievement.textContent += (variable.achievement);


 console.log("Created div for: " + title.innerHTML);
 console.log("THIS IS THE COUNTER: " + counter);
 //let input = `${counter}`
 //moreInfoButton.setAttribute("onClick","moreInfo(counter)");
 //moreInfoButton.addEventListener('click', ()=>{
  //moreInfo()});
 //console.log(title.innerHTML)
 title.style.fontWeight="bolder"
 image1.style.height="75px";
 image1.style.width="75px";
 image1.style.borderRadius="50px";
 image1.style.marginLeft="65px";
 div.appendChild(image1);
 div.appendChild(title);
 div.appendChild(pio_achievement);
 div.appendChild(pio_birthday);
 div.appendChild(moreInfoButton);
 div.appendChild(letterButton);
 grid.appendChild(div);
//console.log("test"+pioneers2.name)

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
 div.style.border = "2px solid";
 div.style.borderRadius = "10px";
 div.style.backgroundColor = "lightblue";
 div.style.color = "#4a4a4a";
 search.addEventListener('click', ()=>{
  clear(grid,div)})
  searchTag.addEventListener('click', ()=>{
    clear(grid,div)})
    searchCountry.addEventListener('click', ()=>{
      clear(grid,div)})
      searchCentury.addEventListener('click', ()=>{
        clear(grid,div)})
    reset.addEventListener('click', ()=>{
      clear(grid, div);})
 
   }    

   
   function clear(grid, div){
    grid.removeChild(div);
  }  

//More Information pioneers
function moreInfo(buttonName, nameofPio,birthday,career,gender,years,facts1,image,birthCountry,citation) {
  var self = this;
  this.button = buttonName;
  this.bar = function() {console.log("BUTTON PUSH: " + nameofPio)};
  this.button.addEventListener('click', function(e) {self.bar();}, false);
  counter =0;
  button.addEventListener('click', ()=>{
    printPioInfo(nameofPio,birthday,career,gender,years,facts1,image,birthCountry,citation)});}
    
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


//More Information pioneers
function dearPio(buttonName) {
  var self = this;
  this.button = buttonName;
  this.bar = function() {window.open('dearPio.html','height=500,width=500');};
  this.button.addEventListener('click', function(e) {self.bar();}, false);
}

 




//function moreInfo(){
 // console.log("BUTTON PUSH: " + counter);
//alert("more information on pioneer will be shown")
  //}

  











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
      function populateFemId(object) {
      
        const pioneers = object.members;
        const femaleIdentifying = [];
        for (const indivPioneer of pioneers) {
            if ( indivPioneer.publicGenderIdentity = "female") {
         femaleIdentifying.push(indivPioneer.name);
            }
      
        
        }
      }

//START of DATE CODE *************TO BE MOVED TO CSPIO.JS****************
//pulling today's date
const todaysDate = new Date();
let day = todaysDate.getDate();
//get month; need to add plus 1 because January is 0
let month = todaysDate.getMonth()+1;
let dateCheck = `${month}-${day}`
console.log(todaysDate);
console.log(dateCheck);

//creating array per date plans
function populateBirthdays(object) {
      
    const pioneers = object.members;
    const birthdays = [];
    for (const indivPioneer of pioneers) {
     birthdays.push(indivPioneer.birthday);
    
     console.log("BIRTHDAY ARRAY: " + birthdays);    
    }
  }

createBirthdayArray();

      async function createBirthdayArray() {
        const requestURL =
          "https://kpf1.github.io/pioneers.json";
        const request = new Request(requestURL);
      
        const response = await fetch(request);
        const csPioneersText = await response.text();
      
        const csPioneers = JSON.parse(csPioneersText);
        populateBirthdays(csPioneers);
      }
      
      //creating array for womens history month (UK)
      function populateFemId(object) {
      
        const pioneers = object.members;
        const femaleIdentifying = [];
        for (const indivPioneer of pioneers) {
            if ( indivPioneer.publicGenderIdentity = "female") {
         femaleIdentifying.push(indivPioneer.name);
            }
        
         console.log("WOMEN ARRAY: " + femaleIdentifying);
      
        
        }
      }
     
    
    createFemIDArray();
    
          async function createFemIDArray() {
            const requestURL =
              "https://kpf1.github.io/pioneers.json";
            const request = new Request(requestURL);
          
            const response = await fetch(request);
            const csPioneersText = await response.text();
          
            const csPioneers = JSON.parse(csPioneersText);
            populateFemId(csPioneers);
          }
      // algorithm for deciding which pioneer to feature each day

      function populatePioneers2(object) {
    
      
        for (const indivPioneer of pioneers) {
         const name = indivPioneer.name;
         const birthday = indivPioneer.birthday;
   
        }
          
           }