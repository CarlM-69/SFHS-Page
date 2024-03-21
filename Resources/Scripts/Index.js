// For Background Slider in 2nd page

document.addEventListener("DOMContentLoaded", function() { // run when the website is loaded
    var r = document.querySelectorAll("input[name='r']");
    var slides_bar = document.querySelectorAll(".slides_bar");
    let time = Date.now();
    let current = 0;

    slides_bar[0].style.background = "rgb(26, 205, 26)";

    r.forEach(function(rButton, i) { // runs for each button
        rButton.addEventListener("change", function(selected) {
            slides_bar.forEach(function(label) { // resets all the button
                label.style.background = "transparent";
            });

            slides_bar[i].style.background = "rgb(26, 205, 26)"; // highlight the current background
            current = i; // set the current background so it wont warp from the previous one
            time = Date.now(); // reset the time when the user clicks on the button
        });
    });

    function doTask() { // loop function
        if((Date.now() - time) >= 5000) { // unix time (if now time subtracted to the last background change is more than 5000ms or 5 seconds)
            time = Date.now(); // reset the time
            r[current].checked = true; // tick as checked

            slides_bar.forEach(function(label) { // resets all the button
                label.style.background = "transparent";
            });

            slides_bar[current].style.background = "rgb(26, 205, 26)"; // highlight the current background

            if(current == 4) { // if current background is on the last background
                current = 0; // then go back to the first one
            }
            else { // if there's still background left
                current += 1; // then proceed to the next background
            }
        }

        setTimeout(doTask, 1000); // recall the doTask() function again, simulating the loop function
    }

    doTask(); // runs the loop function
});