var loginCard = document.querySelector(".login-card");

var colorButton = document.getElementById("color-button");

var submitButton = document.getElementById("submit-button");

var body = document.querySelector("body");

var input = document.querySelectorAll("input");

var colorMode = "light";

console.log(body.style.color);

colorButton.addEventListener("click", function () {
    if (colorMode === "light") {
        loginCard.style.background = "rgba(1, 1, 1, .6)";
        body.style.color = "rgb(255, 255, 255)";
        for (let i = 0; i < input.length; i++) {
            input[i].style.background = "rgba(1, 1, 1, .6)";
            input[i].style.color = "rgb(255, 255, 255)";
        }
        submitButton.style.background = "black";
        submitButton.style.color = "white";
        colorButton.style.background = "black";
        colorButton.style.color = "white";
        colorButton.innerHTML = "Tema: Escuro";
        colorMode = "dark";
    } else {
        loginCard.style.background = "rgba(255, 255, 255, .5)";
        body.style.color = "rgb(0, 0, 0)";
        for (let i = 0; i < input.length; i++) {
            input[i].style.background = "rgba(255, 255, 255, .6)";
            input[i].style.color = "rgb(1, 1, 1)";
        }
        submitButton.style.background = "white";
        submitButton.style.color = "black";
        colorButton.style.background = "white";
        colorButton.style.color = "black";
        colorButton.innerHTML = "Tema: Claro";
        colorMode = "light";
    }
});