let now = new Date();

var d = new Date("2001-06-06T02:00:00");

function difference(data1,data2){

    let fromny = {
        totalsec: Math.fround((data1.getTime() - data2.getTime())/1000)
    }; 
    fromny.days = Math.floor(fromny.totalsec/(60*60*24));
    fromny.hours = Math.floor(fromny.totalsec/(60*60)) % 24;
    fromny.mins = Math.floor(fromny.totalsec/(60)) % 60;
    fromny.seconds = fromny.totalsec % 60;
    return fromny
}
fromny=difference(now,d);
console.log ("різниця у датах \t" + fromny.days + " днів, " + fromny.hours + " годин," + fromny.mins + " хвилин, " + fromny.seconds + " секунд.");
