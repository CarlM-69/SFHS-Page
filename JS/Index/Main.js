document.addEventListener("DOMContentLoaded", function() { // run when the website is loaded
    var r = document.querySelectorAll("input[name='r']");
    var slides_bar = document.querySelectorAll(".slides_bar");
    let time = Date.now();
    let current = 0;
    let reversing = false;

    slides_bar[0].style.background = "rgb(26, 205, 26)";

    r.forEach(function(rButton, i) { // runs for each button
        rButton.addEventListener("change", function(selected) {
            slides_bar.forEach(function(label) { // resets all the button's background
                label.style.background = "transparent";
            });

            slides_bar[i].style.background = "rgb(26, 205, 26)"; // highlight the current background
            current = i; // set the current background so it wont warp from the previous one
            time = Date.now(); // reset the time when the user clicks on the button
        });
    });

    function doTask() { // loop function
        if((Date.now() - time) >= 5000) { // if now time subtracted to the last background change is more than 7000ms or 7 seconds
            time = Date.now(); // reset the time
            r[current].checked = true; // mark as checked

            slides_bar.forEach(function(label) { // resets all the button's background
                label.style.background = "transparent";
            });

            slides_bar[current].style.background = "rgb(26, 205, 26)"; // highlight the current background

            if(reversing == false) { // check if the background is reversing
                if(current == 4) { // if current background is on the last background
                    current = 3; // then go back to the previous one
                    reversing = true; // reverse the background
                }
                else { // if there's still background left
                    current += 1; // then proceed to the next background
                }
            }
            else {
                if(current == 0) { // if current background is on the first background
                    current = 1; // then go back to the next one
                    reversing = false; // disable reversing again
                }
                else {
                    current -= 1;
                }
            }
        }
        
        if((Date.now() - lastScrollUpdate) >= 500) { // if now time subtracted to the last time the user scrolled is more than 100ms or 0.1 second
            lastScrollUpdate = Date.now() // reset the time
            document.documentElement.style.setProperty("--sb_bg", "linear-gradient(to bottom, rgb(25, 129, 25) 0%, rgb(25, 129, 25) 100%)"); // reset the scrollbar background
        }

        setTimeout(doTask, 500); // recall the doTask() function again, simulating the loop function
    }

    doTask(); // runs the loop function
});