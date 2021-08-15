function handleAnchorClick(anchor) {
    //console.log(anchor);
    var venue = document.querySelector("#venueAnchor");
    var schedule = document.querySelector("#scheduleAnchor");
    var speaker = document.querySelector("#speakerAnchor");
    var x = anchor.getAttribute("id");
    if (x === "home") {
        venue.style.border = "#64189E";
        schedule.style.backgroundColor = "#64189E";
        speaker.style.backgroundColor = "#64189E";
    } else if (x === "venueAnchor") {
        venue.style.backgroundColor = "red";
        schedule.style.backgroundColor = "#64189E";
        speaker.style.backgroundColor = "#64189E";

    } else if (x === "speakerAnchor") {

        venue.style.backgroundColor = "#64189E";
        schedule.style.backgroundColor = "#64189E";
        speaker.style.backgroundColor = "red";
    } else {
        venue.style.backgroundColor = "#64189E";
        schedule.style.backgroundColor = "red";
        speaker.style.backgroundColor = "#64189E";

    }

    //console.log(x);

    //venueAnchor   scheduleAnchor   speakerAnchor
}