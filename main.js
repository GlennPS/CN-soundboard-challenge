

// =========== Sounds

// New element = frompage.findObjectsUniqueId("object")
let rasp = document.getElementById("rasp");
let bang = document.getElementById("bang");
let pop = document.getElementById("pop");
let bzzz = document.getElementById("bzzz");
let smash = document.getElementById("smash");
let tap = document.getElementById("tap");
let nom = document.getElementById("nom");

// key codes; 1=49,2=50,3=51... and so on ????????

// frompage.addEventListener("actiontotake", (functionname)) => {instructions}
document.addEventListener("keydown", (activate) => {


// Get my new element.displayonpage = myfunctionname.id;
rasp.innerHTML= activate.rasp;

bang.innerHTML = activate.bang;

pop.innerHTML = activate.pop;

bzzz.innerHTML = activate.bzzz;

smash.innerHTML = activate.smash;

tap.innerHTML = activate.tap;

nom.innerHTML = activate.nom;

console.log(rasp);
console.log(bang);
console.log(pop);
console.log(bzzz);
console.log(smash);
console.log(tap);
console.log(nom);

})