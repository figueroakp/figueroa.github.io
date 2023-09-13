
let allPioneers = [];
let loteriaPioneers = [];
let allChosen = [];
let factCard = document.getElementById("factHolder");
let newg = document.getElementById("genFact");
let Temp = [];
let rand = [];
let row1 = [];
let row2 = [];
let row3 = [];
let row4 = [];
let sliced = [];
let allred = [];
let random="";
let pioneers = "";
let j="";
let i="";
let temp="";
let pio="";
let index="";
let nameVar ="";
let gridLot = document.getElementById("gridLot");


let loteriaButton = document.getElementById("loteria");
let grid = document.getElementById("card");
let winmessage =document.getElementById("win");
let newGame=document.getElementById("newgame")

//let col1 =grid.gridTemplateColumns.1/4
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
// algorithm for deciding which pioneer to feature each day

function populateAllPios(object) {
    pioneers = object.members;
    for (let indivPioneer of pioneers) {
        allPioneers.push(indivPioneer);

    }
    genCard();
    factCar();

}

//Durstenfeld Shuffle
function shuffleArray(array) {
    for (i = array.length - 1; i > 0; i--) {
         j = Math.floor(Math.random() * (i + 1));
         temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function genCard() {
    console.log(pioneers.length)
console.log("thsis is all pios " +allPioneers)
    //for (var i=0;i<1;i++){
    //  loteriaPioneers.push(allPioneers[i])
    //}

    //for (pioneer of allPioneers){
    //  console.log(pioneer);
    ////for (var pioneer of loteriaPioneers){
    //const sliced = allPioneers.slice(0,16);
    shuffleArray(allPioneers);
    sliced = allPioneers.slice(0, 16);
    row1.push(sliced[0]);
    row1.push(sliced[1]);
    row1.push(sliced[2]);
    row1.push(sliced[3]);
    row2.push(sliced[4]);
    row2.push(sliced[5]);
    row2.push(sliced[6]);
    row2.push(sliced[7]);
    row3.push(sliced[8]);
    row3.push(sliced[9]);
    row3.push(sliced[10]);
    row3.push(sliced[11]);
    row4.push(sliced[12]);
    row4.push(sliced[13]);
    row4.push(sliced[14]);
    row4.push(sliced[15]);


    //console.log("this is row1" +row1[3].name)
    Temp = allPioneers.slice(0, 16);
console.log("temp lenght" +Temp.length)
    sliced.forEach(function (pio) {
        console.log(rand.length)
        console.log(sliced.length)
        let div = document.createElement("BUTTON");
    
        div.addEventListener('click', () => {
            addFrijol(div, frijol);
        })
        loteriaButton.addEventListener('click', () => {
            loteria(div);
        })
        /*newGame.addEventListener('click', () => {
            newG(div);
        })*/
        div.setAttribute('id', [pio.name]);
         nameVar = pio.name;
        console.log(div.id)
        let p = document.createElement("p");
        let frijol = "false";
        p.textContent = nameVar;
        div.style.border = "solid";
        div.style.backgroundColor = "#00be58";
        div.appendChild(p);
        grid.appendChild(div);
    })
    

    grid.style.display = "grid";
    grid.style.height = "500px";
    grid.style.width = "500px";
    grid.style.gridTemplateColumns = "125px 125px 125px 125px";


}

function addFrijol(div) {
    div.style.backgroundColor = "rgb(255,0,126)";
    div.setAttribute('id', 'red')
    allred.push(div.textContent);
    console.log(allred);

}
function factCar() {
    //clear(factCar,p);
    let p = document.createElement("p")

    random = Temp[Math.floor(Math.random() * Temp.length)];
console.log("this is randompick "+random)
    rand.push(random.name);
    console.log("this is rand " +rand)
    //Temp.random();
    //remove(Temp,random);
     index = Temp.indexOf(random);
    Temp.splice(index, 1);
    //make sure its taking exact same array as sliced
    console.log("Thiis is temp "+Temp);
    p.textContent = random.facts[0];
    factCard.appendChild(p);
    //clear(factCard,p);
    newg.addEventListener('click', () => {
        clear(factCard, p);
    })


}
function loteria(div) {
    //console.log(row1[0].name +row1[1].name+row1[2].name+row1[3].name)
    console.log("this is red " + allred);
    console.log("this is rand" + rand);
    if (allred.includes(row1[0].name) && allred.includes(row1[1].name) && allred.includes(row1[2].name) && allred.includes(row1[3].name) && rand.includes(row1[0].name) && rand.includes(row1[1].name) && rand.includes(row1[2].name) && rand.includes(row1[3].name)) {
        winner(div);

    }
    else if (allred.includes(row2[0].name) && allred.includes(row2[1].name) && allred.includes(row2[2].name) && allred.includes(row2[3].name) && rand.includes(row2[0].name) && rand.includes(row2[1].name) && rand.includes(row2[2].name) && rand.includes(row2[3].name)) {
        winner(div);

    }
    else if (allred.includes(row3[0].name) && allred.includes(row3[1].name) && allred.includes(row3[2].name) && allred.includes(row3[3].name) && rand.includes(row3[0].name) && rand.includes(row3[1].name) && rand.includes(row3[2].name) && rand.includes(row3[3].name)) {

        winner(div);

    }

    else if (allred.includes(row4[0].name) && allred.includes(row4[1].name) && allred.includes(row4[2].name) && allred.includes(row4[3].name) && rand.includes(row4[0].name) && rand.includes(row4[1].name) && rand.includes(row4[2].name) && rand.includes(row4[3].name)) {

        winner();
    }
}


function clear(div, p) {
    try {
        div.removeChild(p);
    }
    catch (err) {

    }
}
function remove(array, val) {
    //const index = array.indexOf(val)

    console.log(array)

}
function winner(div) {
    console.log("winner");
    winmessage.textContent="WINNER!"
    newG(div)
}

function clearCard(){

}
const notDisplayed = document.getElementById("notDisplayed");
const instructLot = document.getElementById("instructLot");
function newG(div){

    grid.remove(div);
  notDisplayed.style.display="inline";
  loteriaButton.disabled =true;
  newg.disabled=true;

  loteriaButton.style.display="none"
  instructLot.style.display="none";
  newg.style.display="none";
  gridLot.remove(div);

    //genCard();
    //factCar();
}



