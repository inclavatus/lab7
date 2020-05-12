let frstName = "Павло";
let lastName = "Крещенко";
let nick = "inclavatus";
let age = 18;
let weight = 70;
let hight = 1.84   ;
let birthday;
let marital = false;

let isHigh = hight > 1.80;

let IMT = weight / (hight ** 2);

let IMTstate = (IMT > 18.5 && IMT < 24.9) ? true : false;


if (IMT < 18.5) {
    IMTstate = "недостатня вага"
    console.log("Показник Менше 18,5");
} else if (IMT > 18.5 && IMT < 24.9) {
    IMTstate = "нормальна вага"
    console.log("Показник між 18,5 та 24,9");
} else if (IMT > 25.0 && IMT < 29.9) {
    IMTstate = "зайва вага"
    console.log("Показник між 25,0 та 29,9");
} else {
    IMTstate = "дуже надмірна вага"
    console.log("Показник Понад 30");
} //вивело "Показник між 18,5 та 24,9"

console.log("IMTstate:" + IMTstate); // вивело "IMTstate:нормальна вага"

switch (true) {
    case (IMT > 0 && IMT <= 10):
        console.log("IMT нульове");
        break;
    case (IMT > 10 && IMT <= 20):
        console.log("IMT від 10 до 20");
        break;
    case (IMT > 20 && IMT <= 30):
        console.log("IMT від 20 до 30");
        break;
    case (IMT > 30 && IMT <= 40):
        console.log("IMT від 30 до 40")
        break;
    case (IMT > 40):
        console.log("IMT неможливе");
        break;
}// вивело "IMT від 20 до 30"