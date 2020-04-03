var vragen = ["Parijs", "8", "IJsselmeer"];

function controleer() {
    var punten = 0;
    var vraag1 = document.getElementById("ans1").value;
    var vraag2 = document.getElementById("ans2").value;
    var vraag3 = document.getElementById("ans3").value;

    if (vraag1 == vragen[0]) {
        document.getElementById("ans1");
        punten += 1;
    } else {
        document.getElementById("ans1");
    }

    if (vraag2 == vragen[1]) {
        document.getElementById("ans2")
        punten += 1;
    } else {
        document.getElementById("ans2")
    }

    if (vraag3 == vragen[2]) {
        document.getElementById("ans3")
        punten += 1;
    } else {
        document.getElementById("ans3")
    }

    if (punten == 3) {
        document.getElementById("goedeantwoorden").innerHTML = "Alle antwoorden zijn correct!";
    } else {
        document.getElementById("goedeantwoorden").innerHTML = punten + " van de drie antwoorden zijn goed";
    }
}
