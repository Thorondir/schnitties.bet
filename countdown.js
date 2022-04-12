function getSecondsTillSchnitties() {
    setInterval(function() {
        let tues = new Date();
        let today = new Date();
        let day = today.getDay();
        let diff = day - today.getDay();
        tues.setDate(tues.getDate() + diff);
        tues.setHours(13);
        tues.setMinutes(15);
        tues.setSeconds(0);
        tues.setMilliseconds(0);

        if (tues < today) {
            tues.setDate(tues.getDate() + 7);
        }

        let seconds = document.getElementById("seconds");
        seconds.textContent = Math.floor((tues - today)/1000);
    }, 1000);
}
