
var selectPio = document.getElementById("selectPioGuess");
const allPioneers=[];
const randomArray=[];

function populateFemId(object) {
      
    const randPio = object.members;
    //get random pioneer from JSON data
    const rand = randPio[Math.floor(Math.random() * randPio.length)];
    randomArray.push(rand.name);
    console.log(rand.name);
    document.getElementById("pioName").innerHTML = rand.name;
    document.getElementById("firstFact").innerHTML=rand.facts[0];
    document.getElementById("secondFact").innerHTML=rand.facts[1];
    /*if (rand.facts[2]==""){
    document.getElementById("thirdFact").innerHTML=rand.facts[2];
    }
    */
 

}
 
function populatePioneers(object) {
    
  const pioneers = object.members;
  for (const indivPioneer of pioneers) {
   allPioneers.push(indivPioneer.name);
  }
  
  populateDropDown(allPioneers,selectPio);
 
    
     } 
  
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
  
 
  function populateDropDown(array,select) {
    let unique =[];
      array.forEach(element => {
          if (!unique.includes(element)) {
              unique.push(element);
          }
      });
    
    console.log(randomize(allPioneers));
  //console.log(removeDuplicates(array));
    for (var i = 0; i < 3 ; i++) {

        var selection = array[i];
        var option = document.createElement("option");
        option.textContent = selection;
        option.value = selection;
        select.appendChild(option);
    }

    console.log(array)
    
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
        populatePioneers(csPioneers);
      }