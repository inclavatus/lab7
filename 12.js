let fnshed = function (begin, end) {
    let dt = new Date(); // сворення об'єкту з поточним часом
    let msg = dt.toLocaleString(); // повертає строкове представлення дати та часу
    if (dt.getTime()>=end.getTime()) { // умова:ящко поточна дата більша кінцеву
        clearTimeout(htmr); // припинити повторення 
        msg = msg + ": Подію зупинено";// додавання рядку до рядка msg
    }    
    else if (dt.getTime()>=begin.getTime()) { //інша умова: якщо поточна дата більша або дорівнює почтаковій
        msg = msg + ": Подія працює"; // додавання рядку до рядка msg
    }
    console.log (msg); //виведення змінної msg в консоль
} 
let now = new Date(); //поточна дата                   
let begin = new Date(now.getTime() + 3000); // початкова дата
let end =  new Date (now.getTime() + 8000); // кінцева дата
htmr = setInterval(fnshed, 1000, begin, end ); //запускає функцію, з вказаною періодичністю
console.log (now.toLocaleString () + " Планувальник запущено:"); //видає момент коли запущено Планувальник
console.log ("- початок події о " + begin.toLocaleString()); //видає момент початку подї
console.log ("- кінець події о " + end.toLocaleString()); //видає момент зупинення події