let tarjeta = document.querySelector("#tarjeta");
let miembros = document.querySelectorAll(".miembros__datos");
let imagen = document.querySelector("#tarjetaImg");
let nombre = document.querySelector("#tarjetaNombre");
let cargo = document.querySelector("#tarjetaCargo");
let area = document.querySelector("#tarjetaArea");
let admision = document.querySelector("#tarjetaAdmision");
let educacion = document.querySelector("#tarjetaEduc");
let idioma = document.querySelector("#tarjetaIdioma");
let tituloAdmision = document.querySelector("#admisionTit");
let salto = document.querySelector("#salto");


    for(let i = 0; i < miembros.length; i++) {
    
        miembros[i].addEventListener("mouseover", () => {
    
            switch(miembros[i]) {
    
                case miembros[0]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "block";
                    salto.style.display = "block";
                    imagen.src = "../../assets/nuestro-equipo/cornejo-tarjeta.webp";
                    nombre.innerHTML = "Alexandros Cornejo";
                    cargo.innerHTML = "Fundador y CEO";
                    area.innerHTML = "Inmigración, Penal y Lesiones Personales";
                    admision.innerHTML = `Colegio de Abogados del Estado de Nueva York <br/>
                        Corte Suprema de Nueva York <br/> 
                        Corte de Apelaciones de Nueva York <br/> 
                        Distrito Sur de Nueva York`;
                    educacion.innerHTML = "J.D., Atlanta John Marshall Law School";
                    idioma.innerHTML = "Inglés, español y portugués";
                break;
    
                case miembros[1]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "none";
                    salto.style.display = "none";
                    imagen.src = "../../assets/nuestro-equipo/dante-tarjeta.webp";
                    nombre.innerHTML = "Dante Mejía";
                    cargo.innerHTML = "Gerente General";
                    area.innerHTML = "General Manager / Gerente General";
                    admision.innerHTML = "";
                    educacion.innerHTML = "Peruvian University Of Applied Sciences UPC / Universidad Peruana de Ciencias Aplicadas UPC Certified as a professional for project management by PMP Institute / Certificado como profesional para la gestión de proyectos por Instituto PMP Chief of technology and project manager of the Employees Fund of Banco de la Nación / Jefe de tecnología y jefe de proyectos del Fondo de Empleados del Banco de la Nación. Systems Engineering / Ingenieria de Sistemas";
                    idioma.innerHTML = "Spanish";
                break;
    
                case miembros[2]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "none";
                    salto.style.display = "none";
                    imagen.src = "../../assets/nuestro-equipo/marcia-tarjeta.webp";
                    nombre.innerHTML = "Marcia Mariños";
                    cargo.innerHTML = "Directora del Área Laboral";
                    area.innerHTML = "Derecho Laboral / Labor Law";
                    admision.innerHTML = "";
                    educacion.innerHTML = "Universidad Privada Antenor Orrego / Antenor Orrego Private University Universidad Nacional de Trujillo / National University of Trujillo";
                    idioma.innerHTML = "Inglés y Español / English & Spanish";
                    
                break;
    
                case miembros[3]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "none";
                    salto.style.display = "none";
                    imagen.src = "../../assets/nuestro-equipo/jose-tarjeta.webp";
                    nombre.innerHTML = "Jose Carlos Palomino";
                    cargo.innerHTML = "Abogado Asociado del Área Corporativo";
                    area.innerHTML = "Derecho Corporativo / Corporate Law";
                    admision.innerHTML = "";
                    educacion.innerHTML = "Pontificia Universidad Católica del Perú / Pontifical Catholic University of Peru";
                    idioma.innerHTML = "English & Spanish";
                break;
    
                case miembros[4]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "none";
                    salto.style.display = "none";
                    imagen.src = "../../assets/nuestro-equipo/luciana-tarjeta.webp";
                    nombre.innerHTML = "Luciana La Torre";
                    cargo.innerHTML = "Directora De Marketing";
                    area.innerHTML = "Marketing Director / Directora de Marketing";
                    admision.innerHTML = "";
                    educacion.innerHTML = "Institute Toulouse Lautrec / Instituto Toulouse Lautrec";
                    idioma.innerHTML = "English & Spanish";
                break;
    
                case miembros[5]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "none";
                    salto.style.display = "none";
                    imagen.src = "../../assets/nuestro-equipo/martha-tarjeta.webp";
                    nombre.innerHTML = "Martha Anardo";
                    cargo.innerHTML = "Practicante Legal";
                    area.innerHTML = "Practicante Legal / Law Clerk";
                    admision.innerHTML = "";
                    educacion.innerHTML = "Universidad de San Martín de Porres / University of San Martín de Porres Universidad de Simon Bolivar / University of Simon Bolivar";
                    idioma.innerHTML = "English & Spanish";
                break;
    
                case miembros[6]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "none";
                    salto.style.display = "none";
                    imagen.src = "../../assets/nuestro-equipo/ivet-tarjeta.webp";
                    nombre.innerHTML = "Ivet Melany Bonifacio";
                    cargo.innerHTML = "Practicante Administrativo";
                    area.innerHTML = "Administrative Intern / Practicante Administrativo";
                    admision.innerHTML = "";
                    educacion.innerHTML = "Technological University of Peru / Universidad tecnológica del Perú Bank Training Institute - CERTUS/ Instituto de formación bancaria – CERTUS";
                    idioma.innerHTML = "English & Spanish";
                break;
    
                case miembros[7]:
                    tarjeta.classList.add("mostrar");
                    tituloAdmision.style.display = "none";
                    salto.style.display = "none";
                    imagen.src = "../../assets/nuestro-equipo/daniel-tarjeta.webp";
                    nombre.innerHTML = "Daniel Soriano Hidalgo";
                    cargo.innerHTML = "Practicante Administrativo";
                    area.innerHTML = "Administrative Intern / Practicante Administrativo";
                    admision.innerHTML = "";
                    educacion.innerHTML = "Universidad de Lima";
                    idioma.innerHTML = "English & Spanish";
                break;
            }
        })
    }