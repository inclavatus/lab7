let frstName = "Павло";
let lastName = "Крещенко";
let nick = "inclavatus";
let age = 18;
let weight = 70;
let hight = 1.84   ;
let birthday;
let marital = false;
let isHigh = hight > 1.80;
let getIMT = function(weight,hight){return weight / (hight ** 2) }
let getIMTstate = function(IMT){return IMT > 18.5 && IMT < 24.9 }
function getLitfavor(frstName,lastName){
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
    return {'lit':lit,'cnt':cnt}
}
let IMT=getIMT(weight,hight);
let IMTstate=getIMTstate(IMT);
let obj=getLitfavor(frstName,lastName);
console.log("IMT: "+IMT);
console.log("IMTstate: "+IMTstate);
console.log("obj: "+obj.lit+":"+obj.cnt);