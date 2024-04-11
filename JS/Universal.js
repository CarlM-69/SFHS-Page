let lastScrollTop = 0;
let lastScrollUpdate = Date.now()

window.addEventListener("scroll", function() {
    var check = window.pageYOffset || document.documentElement.scrollTop;

    if (check > lastScrollTop) {
        lastScrollUpdate = Date.now()
        document.documentElement.style.setProperty("--sb_bg", "linear-gradient(to bottom, transparent 0%, rgb(25, 129, 25) 100%)");
    } else if (check < lastScrollTop) {
        lastScrollUpdate = Date.now()
        document.documentElement.style.setProperty("--sb_bg", "linear-gradient(to bottom, rgb(25, 129, 25) 0%, transparent 100%)");
    }

	lastScrollTop = check <= 0 ? 0 : check;
});