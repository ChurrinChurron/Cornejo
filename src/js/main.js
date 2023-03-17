let botonNav = document.querySelector("#full-menu");
let botonCerrarNav = document.querySelector("#close-menu");
let menuNav = document.querySelector(".menu__interno");
let listaAreas = document.querySelector("#areas");
let linkAreas = document.querySelector("#linkAreasMovil");
let seccionNum = document.querySelector("#seccionNumeros");
let numeroUno = document.querySelector("#numero1");
let numeroDos = document.querySelector("#numero2");
let numeroTres = document.querySelector("#numero3");
let corden = seccionNum.getBoundingClientRect();
let intervaloUno = setInterval(interListoUno, 50);
let intervaloDos = setInterval(interListoDos, 140);
let intervaloTres = setInterval(interListoTres, 160);
let contadorUno = 1;
let contadorDos = 1;
let contadorTres = 1;

/*FUNCION ABRIR Y CERRAR MENU NAV*/

botonNav.addEventListener("click", () => {

    menuNav.classList.remove("ocultar");
})

botonCerrarNav.addEventListener("click", () => {

    menuNav.classList.add("ocultar");
})

/*FUNCION MOSTRAR LISTA AREAS MENU MOVIL*/

listaAreas.addEventListener("click", () => {

    linkAreas.classList.toggle("cerrar");
})

/*FUNCION ANIMACION NUMEROS*/

// window.addEventListener("scroll", () => {

//     if(corden.top < 200) {
    
        
//         }
//     })
    
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