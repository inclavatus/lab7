let now = new Date();    
let shedevt = {
    tbegin: new Date(now.getTime()+ 5000), //дата/час початку  події
    tend: new Date (now.getTime() + 10000), //датча/час кінця  події
    topic: "lamp", //адресат для події
    cmdbegin:"on", //команда на виконання для початку події
    cmdend:"off"	//команда на виконання для кінця події
};

let fnshed = function () {
    let dt = new Date();
    msgtxt = dt.toLocaleString();
    let msg = {};
    // якщо поточна дата більша або дорівнює часу кінця - винонується умова
    if (dt.getTime()>=shedevt.tend.getTime()) {
        clearTimeout(htmr);
        msgtxt = msg.msgtxt + ": Подію зупинено";
        shedevt.started = false;
        msg.payload = shedevt.cmdend;
        msg.topic = shedevt.topic;
        console.log (msg);
    }    
    // якщо поточна дата більша або дорівнює часу початку і властивість об'єкту(shedevt) started є false - винонується умова, якщо властивості в об'єкті немає (shedevt.started) повертає false
    else if ((dt.getTime()>=shedevt.tbegin.getTime()) && (!shedevt.started)) { 
        msgtxt = msg.msgtxt + ": Подію запущено";
        msg.payload = shedevt.cmdbegin;
        msg.topic = shedevt.topic;
        shedevt.started = true; //прапорець, що подія зараз працює
        console.log (msg);  
    }
    console.log (msgtxt);     
}
    
htmr = setInterval(fnshed, 1000);
console.log (now.toLocaleString () + " Планувальник запущено");