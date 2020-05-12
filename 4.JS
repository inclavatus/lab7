let frstName = "Павло";
let lastName = "Крещенко";
let nick = "inclavatus";
let age = 18;
let weight = 70;
let hight = 1.84;
let birthday;
let marital = false;

console.log(hight % 1);  //вивело "0.84`"

isHigh = hight > 1.80;
console.log("isHigh:" + isHigh); //вивело "isHigh:true"

IMT = weight / (hight ** 2) ;
console.log("IMT:" + IMT); //вивело "IMT:20.6758034026465"

IMTstate = (IMT > 18.5 && IMT < 24.9) ? true : false;
console.log("IMTstate:" + IMTstate); //вивело "IMTstate:true"