var root = document.querySelector(':root');

function setColorMode() {
    var elementBody = document.body;
    
    if (localStorage.getItem("colorMode") == "dark") {
        elementBody.classList.add("dark-mode");
    } else {
        elementBody.classList.remove("dark-mode");
    }



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

function changeImage () {
    const logo = document.getElementById("logo")
    
    if (localStorage.getItem("colorMode") == "dark") {
        logo.classList.add("invert");
    } else {
        logo.classList.remove("invert");
    }
}

changeImage ();


