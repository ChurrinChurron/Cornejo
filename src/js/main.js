let botonNav = document.querySelector("#full-menu");
let botonCerrarNav = document.querySelector("#close-menu");
let menuNav = document.querySelector(".menu__interno");
let listaAreas = document.querySelector("#areas");
let linkAreas = document.querySelector("#linkAreasMovil");

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