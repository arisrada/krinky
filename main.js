// navbar color change

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
        document.getElementById("navbar").style.backgroundColor = "white";
        // document.getElementById("back").style.zIndex = "10";
    } else {
        document.getElementById("navbar").style.backgroundColor = "#FFF7ED";

    }
});