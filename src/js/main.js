let botonNav = document.querySelector("#full-menu");
let botonCerrarNav = document.querySelector("#close-menu");
let menuNav = document.querySelector(".menu__interno");
let listaAreas = document.querySelector("#areas");
let linkAreas = document.querySelector("#linkAreasMovil");
let menuVideos = document.querySelector("#menuCateg");
let listaCateg = document.querySelector("#categAreas");
let video = document.querySelector("#video");
let fondoVideo = document.querySelector(".video__filtro");


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

/*FUNCION ABRIR MENU CATEGORIA VIDEOS*/

menuVideos.addEventListener("click", () => {

    listaCateg.classList.toggle("ocultar");
})
    
if(window.innerWidth >= 992) {
    
    listaCateg.classList.remove("ocultar");

    menuVideos.addEventListener("click", () => {

        listaCateg.classList.remove("ocultar");
    })
}

/*FUNCION REPRODUCIR Y PAUSAR VIDEO*/

video.addEventListener("click", () => {
    
    if(video.paused) {

        video.play();
    
        fondoVideo.classList.add("play");

    } else {

        video.pause();
        
        fondoVideo.classList.remove("play");
    }
})