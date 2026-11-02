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
    outputopgaveObj.innerHTML = randomgetal + " x " + tafelinput1Obj.value + " = ";
}