
const baseDeCarga = document.querySelector(".divDoc");
const consola = document.querySelector(".consola");

let margenesAplicados = false;

baseDeCarga.addEventListener("click", () => {
    if (margenesAplicados == false) {
        consola.style.marginTop = "";
        setTimeout(() => {
            consola.style.marginRight = "";
        }, 2000);
        setTimeout(() => {
            baseDeCarga.style.marginLeft = "";
        }, 2000);
        margenesAplicados = true;
    } else {
        baseDeCarga.style.marginLeft = "35em";
        consola.style.marginRight = "35em";
        setTimeout(() => {
            consola.style.marginTop = "8em";
        }, 2000);
        margenesAplicados = false;
    }
});

/*-------------------------------------------------------------------------------*/

const joyconDerecho = document.querySelector(".joyconDerecho");

let desplazamientoJoyconDerecho = false;

joyconDerecho.addEventListener("click", () => {
    if (desplazamientoJoyconDerecho == false) {
        joyconDerecho.style.marginBottom = "";
        joyconDerecho.style.marginRight = "";
        desplazamientoJoyconDerecho = true;
    } else {
        joyconDerecho.style.marginBottom = "34em";
        desplazamientoJoyconDerecho = false;
    }
});


const joyconIzquierdo = document.querySelector(".joyconIzquierdo");

let desplazamientoJoyconIzquierdo = false;

joyconIzquierdo.addEventListener("click", () => {
    if (desplazamientoJoyconIzquierdo == false) {
        joyconIzquierdo.style.marginBottom = "";
        joyconIzquierdo.style.marginRight = "";
        desplazamientoJoyconIzquierdo = true;
    } else {
        joyconIzquierdo.style.marginBottom = "34em";
        desplazamientoJoyconIzquierdo = false;
    }
});


/*-------------------------------------------------------------------------------*/

const botonEncendido = document.getElementById("botonEncendido");
const luzEncendido = document.getElementsByClassName("luzEncendido");
const pantalla = document.getElementsByClassName("pantalla");

botonEncendido.addEventListener("click", cambiarBackground);

function cambiarBackground() {
    if (articleEfectivo.style.backgroundColor === "rgb(127, 255, 174)") {
        articleEfectivo.style.backgroundColor = "#f8f8f8";
    } else {
        articleEfectivo.style.backgroundColor = "rgb(127, 255, 174)";
    }
}

/*-------------------------------------------------------------------------------*/

const botonA = document.getElementById("botonA");
const botonB = document.getElementById("botonB");