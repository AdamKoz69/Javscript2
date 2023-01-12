function load(){
    date()
    triangle()
    leap()
    jan()
}

function date(){
    var element = document.getElementById("Date");
    const day = function(){
        var d = new Date();
        let dw = d.getDay();
        let t = d.getHours() + ":" + d.getMinutes();
        let dt = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear() 
        switch(dw) {
            case(1):
                return "Monday on the " + dt + " at " + t;
            case(2):
                return "Tuesday on the " + dt + " at " + t;
            case(3):
                return "Wednesday on the " + dt + " at " + t;
            case(4):
                return "Thursday on the " + dt + " at " + t;
            case(5):
                return "Friday on the " + dt + " at " + t;
            case(6):
                return "Saturday on the " + dt + " at " + t;
            case(7):
                return "Sunday on the " + dt + " at " + t;
            default:
                return "Brokenday on the " + dt + " at " + t;
        }
    };
    element.innerHTML = day();
}

function triangle(){
    const element = document.getElementById("tri");
    var semiper = (5 + 6 + 7) / 2
    var area = Math.sqrt(semiper * (semiper - 5) * (semiper - 6) * (semiper - 7));
    element.innerHTML = "The area of a tringle with sides 5, 6 & 7 has a area of: " + area.toFixed(4) + " (nice)";
}

function leap(){
    const element = document.getElementById("leap");
    const year = new Date().getFullYear()

    if((Number.isSafeInteger(year/4))){
        element.innerHTML = year + " is a leap year"
    } else {
        element.innerHTML = year + " is not a leap year"
    }
}

function jan(){
    const element = document.getElementById("jan")
    var years_with_Sun = new Array()
    for(i=2014 ; i <= 2050; i++){
        var d = new Date()
        d.setFullYear(i)
        d.setDate(1)
        d.setMonth(0)

        if(d.getDay()==6){
            years_with_Sun.push(i)
            
        }
    }
    console.log(years_with_Sun)
    element.innerHTML = "The years which are the 1st of januray on a sunday are: " + years_with_Sun.join(", ")
}

function range(){
    const element = document.getElementById("range");
    const num = document.getElementById("range_num").value;

    if(!num.match(/\S/)){
        element.innerHTML = "Please enter a number!"
        return;
    } else {
        if(((num <= 120) && (num >= 80)) || ((num <= 420) && (num >= 380))){
            element.innerHTML = "The number " + num + " is in range of 100 or 400 by 20"
        } else {
            element.innerHTML = "The number " + num + " is not in range of 100 or 400 by 20"
        }
    }
    
}

function nameswap(){
    const element = document.getElementById("nameout");
    const input = document.getElementById("name").value;
    console.log(input)
    if(!input.match(/\S/)) {
        element.innerHTML = "Please enter some text!"
        return
    } else {
        const firstchar = input.substring(0,1)
        element.innerHTML = firstchar + input + firstchar;
    }
}

function decimals(){
    const elements = [document.getElementById("num1").value,document.getElementById("num2").value,document.getElementById("num3").value];
    const out = document.getElementById("decresult");
    for(i=0; i < elements.length ; i++){
        if((elements[i] < 0) || (!elements[i].match(/\S/))){
            out.innerHTML = "Numers are negative or empty"
            return;
        }
    }

    if(elements[0]== elements[1] == elements[2]){
        out.innerHTML = "All numbers match"
    } else if(elements[0]==elements[1]){
        out.innerHTML = "Two numbers match"
    } else if(elements[1]==elements[2]){
        out.innerHTML = "Two numbers match"
    } else if(elements[0]==elements[2]){
        out.innerHTML = "Two numbers match"
    } else {
        out.innerHTML = "No numbers match"
    }
}