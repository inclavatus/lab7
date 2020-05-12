let now = new Date();                     //плинне значення
let tssp = new Date(now.getTime()- 5000); //задане значення
console.log ("Зараз - \t\t" + now.toLocaleString());
console.log ("5 секунд назад було \t" + tssp.toLocaleString());

let ny = new Date(now.getFullYear() + ", 1, 1 00:00:00"); //дата та часу нового року
let fromny = {
    //кількість секунд з нового року
    totalsec: Math.fround((now.getTime() - ny.getTime())/1000)
}; 
//поділено на кількість секунд за добу
fromny.days = Math.floor(fromny.totalsec/(60*60*24));
//остача від ділення кількості годин з НР на 24 
fromny.hours = Math.floor(fromny.totalsec/(60*60)) % 24;
//остача від ділення кількості хивлин з НР на 60
fromny.mins = Math.floor(fromny.totalsec/(60)) % 60;
//остача від ділення кількості секунд з НР на 60
fromny.seconds = fromny.totalsec % 60;        
console.log ("З нового року пройшло \t" + fromny.days + " днів, " + fromny.hours + " годин," + fromny.mins + " хвилин, " + fromny.seconds + " секунд.");

//1) let now = new Date();-створюємо об'єкт типу Date з поточним значенням дати і часу
//  let tssp = new Date(now.getTime()- 5000); -отримання дати об'єкту типу Date, в данному випадку now - об'єкт типу Date
//  now.toLocaleString()- повертає строкове представлення дати та часу відповідно до національних налаштувань(в данному випадку з опціями за умовчанням 
//  now.getFullYear() - отримання року об'єкту типу Date, в данному випадкAу now - об'єкт типу Date
//  Math.floor()-округлення вниз. Округлює аргумент до найближчого меншого цілого.
//  a%b-остача при ділення а на b

//2) now.getFullYear()-повертає рік у вигляді Srting, потім додається рядок ", 1, 1 00:00:00", new Date() проаналізувавши рядок створює об'єкт типу Date з датою яка передавалася у рядку 

//3) '\t'-знак табуляції, вирівнює текст у рядках

//4)  % - знаходження остачі при діленні

//5)  не вистачає години, оскільки 29 березня в Україні перевели годинник на годину назад 