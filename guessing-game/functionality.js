let winningNum = Math.ceil(Math.random() * 100);
let previousNumArr = [];
const inputElement = document.querySelector("#guess-value");

document.querySelector("#submit").addEventListener("click", function () {
    const playerValue = inputElement.value;
    if (isNaN(playerValue) || playerValue < 1 || playerValue > 100) {
        document.querySelector("#hint-header").style.display = "none";
        document.querySelector("#hint").style.display = "none";
        document.querySelector("#nan").style.display = "block";
    } else if (previousNumArr.length >= 5) {
        document.querySelector("#on-win").style.display = "none";
        document.querySelector("#hint-header").style.display = "none";
        document.querySelector("#hint").style.display = "none";
        document.querySelector("#no-lives").style.display = "block";
    } else {
        if (playerValue < winningNum) {
            previousNumArr.push(" " + playerValue)
            document.querySelector("#nan").style.display = "none";
            document.querySelector("#hint-header").style.display = "block";
            document.querySelector(".guess").innerHTML = previousNumArr;
            document.querySelector(".mushroom").remove();
            document.querySelector("#hint").style.display = "block";
            document.querySelector("#hint").innerHTML = "Too small";
        } else if (playerValue > winningNum) {
            previousNumArr.push(" " + playerValue)
            document.querySelector("#nan").style.display = "none";
            document.querySelector("#hint-header").style.display = "block";
            document.querySelector(".guess").innerHTML = previousNumArr;
            document.querySelector(".mushroom").remove();
            document.querySelector("#hint").style.display = "block";
            document.querySelector("#hint").innerHTML = "Too big";
        } else {
            document.querySelector("#on-win").style.display = "none";
            document.querySelector("#hint-header").style.display = "none";
            document.querySelector("#hint").style.display = "none";
            document.querySelector("#win-message").style.display = "block";
            document.querySelector("#bmo-sad").style.display = "none";
            document.querySelector("#bmo-dance").style.display = "block";
            document.querySelector("#ty").style.display = "block";
        }
    }
});

document.querySelector("#play-again").addEventListener("click", function () {
    const resetMushrooms = `
        <img class="mushroom" src="img/mushroom.png">
        <img class="mushroom" src="img/mushroom.png">
        <img class="mushroom" src="img/mushroom.png">
        <img class="mushroom" src="img/mushroom.png">
        <img class="mushroom" src="img/mushroom.png">
    `
    inputElement.value = "";
    previousNumArr = [];
    document.querySelector("#lives").innerHTML = resetMushrooms;
    document.querySelector(".guess").innerHTML = [];
    document.querySelector("#on-win").style.display = "block";
    document.querySelector("#no-lives").style.display = "none";
    document.querySelector("#win-message").style.display = "none";
    document.querySelector("#hint-header").style.display = "none";
    document.querySelector("#hint").style.display = "none";
    document.querySelector("#bmo-sad").style.display = "flex";
    document.querySelector("#bmo-dance").style.display = "none";
    document.querySelector("#nan").style.display = "none";
    document.querySelector("#ty").style.display = "none";
});


