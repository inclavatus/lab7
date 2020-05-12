let now = new Date();    //взято поточний момент
let scheduler = []; //створення порожнього масиву
scheduler.push({ 
    tbegin: new Date(now.getTime()+ 5000), 
    tend: new Date (now.getTime() + 10000), 
    topic: "lamp1", cmdbegin:"on", cmdend:"off"	
}); //додає елемент масиву, який є об'єктом
scheduler.push({
    tbegin: new Date(now.getTime()+ 6000), 
    tend: new Date (now.getTime() + 8000),
    topic: "lamp2", cmdbegin:"on", cmdend:"off"
}); //додає елемент масиву, який є об'єктом
scheduler.push({
    tbegin: new Date(now.getTime()+ 3000),
    tend: new Date (now.getTime() + 9000),
    topic: "power", cmdbegin:"85", cmdend:"0"	
}); //додає елемент масиву, який є об'єктом
// для кожного елементу масиву виконати
for (let schedevt of scheduler) {
    console.log (schedevt.topic); //вивести topic об'єксту schedevt
}
let fnshed = function () //створення функції
 {
    let dt = new Date(); //створення об'єкту дати
    msgtxt = dt.toLocaleString(); //створення змінної с датою у вигляді String
    console.log (msgtxt); // вивід на консоль змінної msgtxt
    for (let schedevt of scheduler) checkshed (schedevt); //для кожного елеменрту масиву виконується функція checkshed()
    for (let i = 0; i < scheduler.length; i++) {
        //якщо поточний час більший закінцевий об'єкту - виуонується умова
        if (dt.getTime()> scheduler[i].tend.getTime()){
            console.log (scheduler[i].topic);//вивід на консоль
            scheduler.splice(i,1); // видалення і-того еленту масиву
        }
    }
    if (scheduler.length === 0) clearTimeout(htmr); // якщо кількість елментів масиву дорівнює 0 - закінчення виконання інтервальної функції    
} 

function checkshed (shedevt) {
    let dt = new Date(); //створення об'єкту дати
    let msg = {}; //створення об'єкту 
    // якщо поточний більша або дорівнює часу кінця об'єкту - винонується умова
    if (dt.getTime()>=shedevt.tend.getTime()) {
        //якщо об'єкт працює-виконується умова
        if (shedevt.started){
            shedevt.started = false; //властивості об'єкту присвоюється значення false
            msg.payload = shedevt.cmdend;//властивості об'єкту присвоюється значення shedevt.cmdend
            msg.topic = shedevt.topic; //властивості об'єкту присвоюється значенняshedevt.topic
            console.log ("Подію для "  + msg.topic + " зупинено "); //вивід на консоль
        }        
    }    //якщо поточний час більший або дорівнює часу почтаку роботи об'єкту та властивість об'єкту false - виконується умова
    else if ((dt.getTime()>=shedevt.tbegin.getTime()) && (! shedevt.started)) {
        msg.payload = shedevt.cmdbegin;//властивості об'єкту присвоюється значення shedevt.cmdbegin
        msg.topic = shedevt.topic;//властивості об'єкту присвоюється значення shedevt.topic
        shedevt.started = true;//властивості об'єкту присвоюється значення true
        console.log ("Подію для "  + msg.topic + " запущено");//вивід на консоль 
    }
}    
htmr = setInterval(fnshed, 1000);//створення інтервальної функції
console.log (now.toLocaleString () + " Планувальник запущено");//вивід на консоль