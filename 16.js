let now = new Date();
let strtday = new Date(now.toDateString());
let delta = now.getTime() - strtday.getTime();//кількість мілісекунд з початку доби
let scheduler = [];
scheduler.push({
    tbegin: delta + 5000, //кількість мілісекунд з початку доби + 5000 мс
    tend: delta + 10000, 
    topic: "lamp1", cmdbegin:"on", cmdend:"off"	
});
scheduler.push({
    tbegin:delta + 6000, 
    tend: delta + 8000,
    topic: "lamp2", cmdbegin:"on", cmdend:"off"
});
scheduler.push({
    tbegin: delta + 3000,
    tend: delta + 9000,
    topic: "power", cmdbegin:"85", cmdend:"0"	
});

//пам'ятайте, що об'єкти передаються за посиланнями а не за значенням
function daytoshed (scheduler ){
    let strtday = new Date(now.toDateString());
    for (let schedevt of scheduler) {
        schedevt.tbegin = new Date (strtday.getTime() + schedevt.tbegin);
        schedevt.tend = new Date (strtday.getTime() + schedevt.tend);    
    }    
}
daytoshed (scheduler);
for (let schedevt of scheduler) {
    console.log (schedevt.tbegin);
    console.log (schedevt.tend);         
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