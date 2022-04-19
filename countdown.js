import { add, formatDuration, isTuesday, nextTuesday, set, isAfter, isBefore, intervalToDuration } from "https://cdn.skypack.dev/date-fns";

(() => {
    // Blursed IIFE just for you, Ying.
    const element = document.createElement("h1");

    setInterval(() => {
        const now = new Date();

        // Special case for Tuesday after 2:15PM
        const isBeforeTwoFifteen = isBefore(
            now,
            set(now, {
                hours: 14,
                minutes: 15,
                seconds: 0,
            })
        );

        let schnittyDay = isTuesday(now) && isBeforeTwoFifteen ? now : nextTuesday(now)

        const schnittyTime = set(schnittyDay, {
            hours: 13,
            minutes: 15,
            seconds: 0,
        });

        const endSchnittyTime = add(schnittyTime, { hours: 1 });

        const schnitties = isAfter(now, schnittyTime) && isBefore(now, endSchnittyTime) ? 
            "Bet" : 
            formatDuration(
                intervalToDuration({ start: now, end: schnittyTime})
            );
        
        element.innerHTML = schnitties;
    }, 1000);

    document.body.appendChild(element);
})();