let juisteantwoord = 0;
let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");

let tafelinput1Obj = document.getElementById("inputTafel1");
let outputopgaveObj = document.getElementById("outputOpgave");
let outputfeedbackObj = document.getElementById("outputFeedback");
let inputTafel11Obj = document.getElementById("inputTafel11");


function showTafel() {
    let tafel = tafelinputObj.value
    //let teller = 1;
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++ ) {
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    // while (teller < 11) {
    //     uitkomst = teller * tafel;
    //     output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    //     teller++;
    // }
    tafeloutputObj.innerHTML = output;
}

function showOpgave() {
    let randomgetal = Math.floor(Math.random() * 10) + 1;
    juisteantwoord = randomgetal * tafelinput1Obj.value;
    outputopgaveObj.innerHTML = randomgetal + " x " + tafelinput1Obj.value + " = ?";
}

function controleerknop() {
    let antwoord = Number(inputTafel11Obj.value);
    if (antwoord === juisteantwoord) {
        outputfeedbackObj.innerHTML = "✅ Correct!";
        inputTafel11Obj.value = "";
        showOpgave();
    } else {
        outputfeedbackObj.innerHTML =
            "❌ Fout Het juiste antwoord is " + juisteantwoord + ". Probeer het nog eens!";
    }
}

// function controleerknop() {
//     let antwoord = Number(inputTafel11Obj.value);

//     alert(
//         "Antwoord: " +
//         antwoord +
//         " | Juiste uitkomst: " +
//         juisteantwoord +
//         ")"
//     );
//}