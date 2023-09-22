
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
        joyconDerecho.style.marginBottom = "32em";
        setTimeout(() => {
            joyconDerecho.style.marginRight = "24.5em";   //49em
        }, 2000);
        desplazamientoJoyconDerecho = false;
    }
});


// JOYCON IZQUIERDO:

const joyconIzquierdo = document.querySelector(".joyconIzquierdo");

let desplazamientoJoyconIzquierdo = false;

joyconIzquierdo.addEventListener("click", () => {
    if (desplazamientoJoyconIzquierdo == false) {
        joyconIzquierdo.style.marginLeft = "";
        setTimeout(() => {
            joyconIzquierdo.style.marginBottom = "";
        }, 2000);
        desplazamientoJoyconIzquierdo = true;
    } else {
        joyconIzquierdo.style.marginBottom = "32em";
        setTimeout(() => {
            joyconIzquierdo.style.marginLeft = "24.5em";   //49em
        }, 2000);
        desplazamientoJoyconIzquierdo = false;
    }    
});    


// CONSOLA Y DOC:

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

        joyconDerecho.style.marginRight = "";
        setTimeout(() => {
            joyconDerecho.style.marginBottom = "";
        }, 2000);

        desplazamientoJoyconDerecho = true;

        joyconIzquierdo.style.marginLeft = "";
        setTimeout(() => {
            joyconIzquierdo.style.marginBottom = "";
        }, 2000);

        desplazamientoJoyconIzquierdo = true;
        

    } else {
        baseDeCarga.style.marginLeft = "35em";
        consola.style.marginRight = "35em";
        setTimeout(() => {
            consola.style.marginTop = "8em";
        }, 2000);    

        margenesAplicados = false;

        joyconDerecho.style.marginBottom = "32em";
        setTimeout(() => {
            joyconDerecho.style.marginRight = "24.5em";   //49em
        }, 2000);

        desplazamientoJoyconDerecho = false;

        joyconIzquierdo.style.marginBottom = "32em";
        setTimeout(() => {
            joyconIzquierdo.style.marginLeft = "24.5em";   //49em
        }, 2000);

        desplazamientoJoyconIzquierdo = false;
    }    
});    


// BOTON ENCENDIDO:

const botonOn = document.querySelector("#botonEncendido");
const luzEncendido = document.querySelector(".luzEncendido");
const pantalla = document.querySelector(".pantalla");

let botonOnEncendido = false;

botonOn.addEventListener("click", () => {
    if (botonOnEncendido == false) {
        pantalla.style.backgroundImage  = "";
        luzEncendido.style.backgroundColor = "#303235"
        botonOnEncendido = true;
    } else {
        pantalla.style.backgroundImage = "url('video\video de fondo.mp4')";
        luzEncendido.style.backgroundColor = "#D6FF99"
        botonOnEncendido = false;
    }    
});    



// BOTON HACIA DELANTE:

const botonA = document.getElementById("botonA");


// BOTON HACIA DETRAS:

const botonB = document.getElementById("botonB");