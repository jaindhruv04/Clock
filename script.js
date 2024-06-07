var buttonColour = document.querySelector(".button");
buttonColour.style.color = "red";


function toggle() {
    if (buttonColour.style.color === "red") {
        buttonColour.style.color = "blue";
    }
    else if (buttonColour.style.color === "blue") {
        buttonColour.style.color = "red";
    }
}
document.querySelector(".button").addEventListener("click", toggle)

function normalTime() {
    const time = new Date();
    var date = time.getDate();
    var month = time.getMonth();
    var day = time.getDay();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();

    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var monthName = monthNames[month];
    var dayName = dayNames[day];

    return { hour, min, sec, monthName, dayName, date };


}

function displayTime() {
    var { hour, min, sec, monthName, dayName, date } = normalTime();
    
    if (buttonColour.style.color === "red" && hour>12) {
        hour = hour - 12;
    }
        show(hour, min, sec, monthName, dayName, date);
}

setInterval(displayTime, 1000);

function show(hour, min, sec, monthName, dayName, date) {
    document.querySelector(".hoursMinutes").innerHTML = hour + ":" + min;
    document.querySelector(".seconds").innerHTML = sec;
    document.querySelector(".dayDate").innerHTML = monthName + ", " + dayName + ", " + date;
}