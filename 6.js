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

let lit_obj = {}
let sum_liters=frstName+lastName;
for (let i = 0, litera; i < sum_liters.length; i++) {
    litera = sum_liters[i].toLowerCase();
    if (litera in lit_obj) {
        lit_obj[litera] += 1;
    } else {
        lit_obj[litera] = 1;
    }
}
let lit='',cnt=0;
for (litera in lit_obj) {
    if (lit_obj[litera]>cnt){
        lit=litera;
        cnt=lit_obj[litera];
    }else if(lit_obj[litera]===cnt){
        if (!(lit instanceof Array)){
            lit=[lit];
        }
        lit.push(litera);
    }
}
console.log(`Найчастіше використовувана у імені та прізвищі літера(и) - ${lit}, зустрічається ${cnt} рази(ів) `) // вивело "Найчастіше використовувана у імені та прізвищі літера(и) - е,к,о, зустрічається 2 рази(ів)"