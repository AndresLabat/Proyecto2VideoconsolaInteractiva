
// JOYCON DERECHO:

const joyconDerecho = document.querySelector(".joyconDerecho");

let desplazamientoJoyconDerecho = false;

joyconDerecho.addEventListener("click", () => {
    if (desplazamientoJoyconDerecho == false) {
        joyconDerecho.style.marginRight = "";
        setTimeout(() => {
            joyconDerecho.style.marginBottom = "";
        }, 2000);
        desplazamientoJoyconDerecho = true;
    } else {
        joyconDerecho.style.marginBottom = "34em";
        setTimeout(() => {
            joyconDerecho.style.marginRight = "49em";
        }, 2000);
        desplazamientoJoyconDerecho = false;
    }
});

// JOYCON IZQUIERDO:


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

// PANTALLA Y DOC:

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
        joyconDerecho.style.marginRight = "";
        setTimeout(() => {
            joyconDerecho.style.marginBottom = "";
        }, 2000);
        desplazamientoJoyconDerecho = true;

        joyconIzquierdo.style.marginBottom = "";
        joyconIzquierdo.style.marginRight = "";

        desplazamientoJoyconIzquierdo = true;
        
        margenesAplicados = true;

    } else {
        baseDeCarga.style.marginLeft = "35em";
        consola.style.marginRight = "35em";
        setTimeout(() => {
            consola.style.marginTop = "8em";
        }, 2000);    

        joyconDerecho.style.marginBottom = "34em";
        setTimeout(() => {
            joyconDerecho.style.marginRight = "49em";
        }, 2000);

        desplazamientoJoyconDerecho = false;

        joyconIzquierdo.style.marginBottom = "34em";
        
        desplazamientoJoyconIzquierdo = false;

        margenesAplicados = false;

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