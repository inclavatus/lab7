let frstName="Павло"; 
let lastName="Крещенко"; 
let nick="inclavatus";
let age=18;
let weight=70;
let hight=1.84;
let birthday;
let marital=false;

console.log("typeof(frstName):"+typeof(frstName)); //вивело "typeof(frstName):string"
console.log("typeof(lastName):"+typeof(lastName)); //вивело "typeof(lastName):string"
console.log("typeof(nick):"+typeof(nick)); //вивело "typeof(nick):string"
console.log("typeof(age):"+typeof(age)); //вивело "typeof(age):number"
console.log("typeof(weight):"+typeof(weight)); //вивело "typeof(weight):number"
console.log("typeof(hight):"+typeof(hight)); //вивело "typeof(hight):number"
console.log("typeof(birthday):"+typeof(birthday)); //вивело "undefined"
console.log("typeof(marital):"+typeof(marital)); //вивело "typeof(marital):boolean"

console.log("height*100="+hight*100); //вивело "height*100=184"

console.log(`Привіт! Мене звати ${frstName} ${lastName}, мені ${age} років.`); //вивело "Привіт! Мене звати Павло Крещенко, мені 18 років."

console.log(age.toString(10)); //вивело "18"
console.log(age.toString(2)); //вивело "10010"
console.log(age.toString(16)); //вивело "12"

console.log(frstName.toUpperCase()+" "+lastName.toUpperCase()); //вивело "ПАВЛО КРЕЩЕНКО"

console.log(`Довжина імені ${frstName.length}, довжина прізвища ${lastName.length}, сума довжин імені та прізвища ${frstName.length+lastName.length}`);
// вивело "Довжина імені 5, довжина прізвища 8, сума довжин імені та прізвища 13"