// 1#
/* Esta es la funcnionalidad que muestra la hora y la fecha actual ubicada en el header*/

const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");

if (hora && fecha) {
    function mostrarHora() {
        const fechaActual = new Date();
        hora.textContent = fechaActual.toLocaleTimeString();
        
const opciones = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        fecha.textContent = fechaActual.toLocaleDateString("es-ES",opciones);
    }

    setInterval(mostrarHora, 1000);
    mostrarHora();
}


//-------------------------------------------------------------------
// 2#
/*Esta es la funcion para el cambio de imagen al momento de usar el mouse ubicada en la pagina principal*/

const cambioImagen1 = document.getElementById("cambioImagen1");
const cambioImagen2 = document.getElementById("cambioImagen2");

if (cambioImagen1) {
    cambioImagen1.addEventListener("mouseover", () => {
        cambioImagen1.src = "../image/cambio1.png";
    });

    cambioImagen1.addEventListener("mouseout", () => {
        cambioImagen1.src = "https://fepropaz.com/wp-content/uploads/2023/07/2-4.jpg";
    });
}

if (cambioImagen2) {
    cambioImagen2.addEventListener("mouseover", () => {
        cambioImagen2.src = "../image/cambio2.png";
    });

    cambioImagen2.addEventListener("mouseout", () => {
        cambioImagen2.src = "https://fepropaz.com/wp-content/uploads/2023/07/4-4.jpg";
    });
}

//--------------------------------------------------------------------------------------
// 3#
/* esta es la funcnionalidad  es para enviar el formulario solo si se activa el checkbox y desabilita el boton de enviar esta ubicado el la pagina de contacto*/

document.addEventListener("DOMContentLoaded", () => {

    const botonEnviar = document.getElementById("botonEnviar");
    const checkbox = document.getElementById("politicas");

    if (botonEnviar && checkbox) {
        botonEnviar.disabled = true;

        checkbox.addEventListener("change", () => {
            botonEnviar.disabled = !checkbox.checked;
        });
    }

    //--------------------------------------------------------------------------------------
    // 4#
    /* Validación de login */

    const user = "admin";
    const pass = "1234";

    const btn = document.getElementById("btnLogin");
    if (btn) {
        btn.onclick = () => {
            if (document.getElementById("email").value === user &&
                document.getElementById("password").value === pass) {
                alert("Login correcto");
            } else {
                alert("Error de login");
            }
        };
    }



    //---------------------------------------------------------------------------------------
    // 5#
    /* Menu hamburguesa */
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    if (hamburger && nav) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            nav.classList.toggle("active");
        });
    }

});    
