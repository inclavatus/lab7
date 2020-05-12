let Student = {
    frstName: "Павло",
    lastName: "Крещенко",
    nick: "inclavatus",
    age: 18,
    weight: 70,
    hight: 1.84,
    birthday: undefined,
    marital: false,
    traits: ["здоровий","дружелюбний","працелюбний"],
    getIMT() {
        IMT = this.weight / (this.hight ** 2);
        IMTstate = IMT > 18.5 && IMT < 24.9;
        return {"IMT":IMT,"IMTstate":IMTstate}
    },
    getLitfavor(){
        let lit_obj = {}
        let sum_liters=this.frstName+this.lastName;
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
    },
    getTraits(){return this.traits.join(',')},
    addTraits(value){return this.traits.push(value)}
}

console.log(Student.getTraits()); // вивело "працелюбний,веселей,розумний"
Student.addTraits("допитливий");
console.log(Student.getTraits()) //  вивело "працелюбний,веселей,розумний,винахідливий"