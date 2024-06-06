function showTime() {
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
    
    document.querySelector(".hoursMinutes").innerHTML = hour + ":" + min;
    document.querySelector(".seconds").innerHTML = sec;
    document.querySelector(".dayDate").innerHTML = monthName + ", " + dayName + ", " + date;
}

setInterval(showTime, 1000);
