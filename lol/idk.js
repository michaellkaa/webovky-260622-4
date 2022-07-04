var root = document.querySelector(':root');

function setColorMode() {
    var elementBody = document.body;

    var logo = document.getElementById("logo");

    logo  = function() {
    if (localStorage.getItem("colorMode") === "dark-mode") {
        elementBody.classList.add("dark-mode");
    } else {
        elementBody.classList.remove("dark-mode");
        }
    };


    console.log(localStorage.getItem("colorMode"));
};





function changeColorMode () {
    var element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        localStorage.setItem("colorMode", "dark");
    } else {
        localStorage.setItem("colorMode", "light");
    }

    console.log(localStorage.getItem("colorMode")); 
};



console.log(localStorage.getItem("colorMode"));

setColorMode();




function newFunction() {
    console.log(localStorage.getItem("colorMode"));
}

