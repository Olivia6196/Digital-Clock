function makeItWork() {
    const recentTime = new Date();
    let hours = recentTime.getHours();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hour = hours % 12 || 12;
    hours = hour.toString().padStart(2,0);
    const minutes = recentTime.getMinutes().toString().padStart(2,0);
    const seconds = recentTime.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("time").textContent = timeString;
    document.getElementById("meridiem").textContent = meridiem;

    const days = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const dayName = days[recentTime.getDay()];
    const day = recentTime.getDate();
    const month = months[recentTime.getMonth()];
    document.getElementById("date").textContent = 
    `${dayName}, ${month} ${day}`;
}

makeItWork();
setInterval(makeItWork, 1000)
