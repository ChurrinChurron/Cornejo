let tarjetaMapa = document.querySelector(".mapa__tarjetas");
let iconoMapa = document.querySelectorAll(".iconos__mapa");
let nombreSede = document.querySelector("#sedeNombre");
let imagenSede = document.querySelector("#sedeImg");
let ubicSede = document.querySelector("#sedeUbic");
let horaSede = document.querySelector("#sedeHora");

for(let i = 0; i < iconoMapa.length; i++) {
    
    iconoMapa[i].addEventListener("mouseover", () => {

        switch(iconoMapa[i]) {

            case iconoMapa[0]:
                tarjetaMapa.classList.add("mostrar");
                tarjetaMapa.style.left = "50%";
                tarjetaMapa.style.top = "-15%";
                imagenSede.src = "../../assets/inicio/new-york.webp";
                nombreSede.innerHTML = "NEW YORK";
                ubicSede.innerHTML = "12e,49th St. New York, NY 10017- EEUU";
                horaSede.innerHTML = "Horario: Previa cita";
            break;

            case iconoMapa[1]:
                tarjetaMapa.classList.add("mostrar");
                tarjetaMapa.style.left = "40%";
                tarjetaMapa.style.top = "20%";
                imagenSede.src = "../../assets/inicio/dalton.webp";
                nombreSede.innerHTML = "DALTON";
                ubicSede.innerHTML = "104 South Pentz St. Dalton, GA 30720-EEUU";
                horaSede.innerHTML = "Horario: Previa cita";
            break;

            case iconoMapa[2]:
                tarjetaMapa.classList.add("mostrar");
                tarjetaMapa.style.left = "44%";
                tarjetaMapa.style.top = "28%";
                imagenSede.src = "../../assets/inicio/newnan.webp";
                nombreSede.innerHTML = "NEWNAN";
                ubicSede.innerHTML = "39 Main Street. Newnan,GA 30263-EEUU";
                horaSede.innerHTML = "Horario: Previa cita";
                
            break;

            case iconoMapa[3]:
                tarjetaMapa.classList.add("mostrar");
                tarjetaMapa.style.left = "40%";
                tarjetaMapa.style.top = "34%";
                imagenSede.src = "../../assets/inicio/woodstock.webp";
                nombreSede.innerHTML = "WOODSTOCK";
                ubicSede.innerHTML = "313 Creekstone Ridge, Woodstock, GA 30188 – EEUU";
                horaSede.innerHTML = "Horario: Lunes a Viernes 9am - 6pm";
            break;
        }
    })
}

iconoMapa.forEach(iconos => {

    iconos.addEventListener("mouseout", () => {

        tarjetaMapa.classList.remove("mostrar");
    })
})