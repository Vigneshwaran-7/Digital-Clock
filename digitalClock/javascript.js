let hoursId = document.getElementById("hours");
let minsId = document.getElementById("mins");
let secsId = document.getElementById("secs");
let ampmId = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "am";

    if (h > 13) {
        h = h - 12;
        ampm = "pm";
    }
    else {
        ampm = "am";
    }

    h = h < 10 ? "0" + h : h;  // Using ternory operator.
    m = m < 10 ? "0" + m : m;  // Using ternory operator.
    s = s < 10 ? "0" + s : s;  // Using ternory operator.

    hoursId.innerHTML = h;
    minsId.innerHTML = m;
    secsId.innerHTML = s;
    ampmId.innerHTML = ampm;
}
updateClock();
setInterval(updateClock, 1000);  // 1 seconds = 1000 milleseconds... thats why here used 1000. Now our clock auto update every seconds

