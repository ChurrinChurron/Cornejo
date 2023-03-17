let seccionNum = document.querySelector("#seccionNumeros");
let numeroUno = document.querySelector("#numero1");
let numeroDos = document.querySelector("#numero2");
let numeroTres = document.querySelector("#numero3");
// let corden = seccionNum.getBoundingClientRect();
let intervaloUno = setInterval(interListoUno, 50);
let intervaloDos = setInterval(interListoDos, 140);
let intervaloTres = setInterval(interListoTres, 160);
let contadorUno = 1;
let contadorDos = 1;
let contadorTres = 1;

function interListoUno() {

    contadorUno++;
    numeroUno.innerHTML = `${contadorUno}+`;

    if(contadorUno == 60) {

        clearInterval(intervaloUno);
    }
}

function interListoDos() {

    contadorDos++;
    numeroDos.innerHTML = contadorDos;

    if(contadorDos === 6) {

        clearInterval(intervaloDos);
    }
}

function interListoTres() {

    contadorTres++;
    numeroTres.innerHTML = contadorTres;

    if(contadorTres === 5) {

        clearInterval(intervaloTres);
    }
}