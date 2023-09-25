
// JOYCON DERECHO:

const joyconDerecho = document.querySelector(".joyconDerecho");
const jostickDerecho = document.querySelector(".derecho");

let desplazamientoJoyconDerecho = false;

jostickDerecho.addEventListener("click", () => {
    if (desplazamientoJoyconDerecho == true) {
        joyconDerecho.style.marginRight = "";
        setTimeout(() => {
            joyconDerecho.style.marginBottom = "";
        }, 2000);
        desplazamientoJoyconDerecho = false;

        jostickDerecho.style.marginTop = "1.2em";
        setTimeout(() => {
            jostickDerecho.style.marginTop = "";
        }, 700);

    } else {
        joyconDerecho.style.marginBottom = "32em";
        setTimeout(() => {
            joyconDerecho.style.marginRight = "24.5em";
        }, 2000);
        desplazamientoJoyconDerecho = true;

        jostickDerecho.style.marginBottom = "1.2em";
        setTimeout(() => {
            jostickDerecho.style.marginBottom = "";
        }, 700);

    }
});


// JOYCON IZQUIERDO:

const joyconIzquierdo = document.querySelector(".joyconIzquierdo");
const jostickIzquierdo = document.querySelector(".izquierdo");

let desplazamientoJoyconIzquierdo = false;

jostickIzquierdo.addEventListener("click", () => {
    if (desplazamientoJoyconIzquierdo == true) {
        joyconIzquierdo.style.marginLeft = "";
        setTimeout(() => {
            joyconIzquierdo.style.marginBottom = "";
        }, 2000);
        desplazamientoJoyconIzquierdo = false;

        jostickIzquierdo.style.marginTop = "1.2em";
        setTimeout(() => {
            jostickIzquierdo.style.marginTop = "";
        }, 700);

    } else {
        joyconIzquierdo.style.marginBottom = "32em";
        setTimeout(() => {
            joyconIzquierdo.style.marginLeft = "24.5em";
        }, 2000);
        desplazamientoJoyconIzquierdo = true;

        jostickIzquierdo.style.marginBottom = "1.2em";
        setTimeout(() => {
            jostickIzquierdo.style.marginBottom = "";
        }, 700);

    }
});


// CONSOLA Y DOCK:

const baseDeCarga = document.querySelector(".divDoc");
const consola = document.querySelector(".consola");

let margenesAplicados = false;

baseDeCarga.addEventListener("click", () => {
    if (margenesAplicados == true) {
        consola.style.marginTop = "";
        setTimeout(() => {
            consola.style.marginRight = "";
        }, 2000);
        setTimeout(() => {
            baseDeCarga.style.marginLeft = "";
        }, 2000);

        margenesAplicados = false;

        joyconDerecho.style.marginRight = "";
        setTimeout(() => {
            joyconDerecho.style.marginBottom = "";
        }, 2000);

        desplazamientoJoyconDerecho = false;

        joyconIzquierdo.style.marginLeft = "";
        setTimeout(() => {
            joyconIzquierdo.style.marginBottom = "";
        }, 2000);

        desplazamientoJoyconIzquierdo = false;


    } else {
        baseDeCarga.style.marginLeft = "35em";
        consola.style.marginRight = "35em";
        setTimeout(() => {
            consola.style.marginTop = "8em";
        }, 2000);

        margenesAplicados = true;

        joyconDerecho.style.marginBottom = "32em";
        setTimeout(() => {
            joyconDerecho.style.marginRight = "24.5em";
        }, 2000);

        desplazamientoJoyconDerecho = true;

        joyconIzquierdo.style.marginBottom = "32em";
        setTimeout(() => {
            joyconIzquierdo.style.marginLeft = "24.5em";
        }, 2000);

        desplazamientoJoyconIzquierdo = true;
    }
});


// BOTON ENCENDIDO:

const botonOn = document.querySelector("#botonEncendido");
const luzEncendido = document.querySelector(".luzEncendido");
const pantalla = document.querySelector(".pantalla");
let posicion = 0;

let botonOnEncendido = false;

botonOn.addEventListener("click", () => {
    if (botonOnEncendido == true) {
        pantalla.style.backgroundImage = "";
        pantalla.style.filter = "grayscale(100%)";
        luzEncendido.style.backgroundColor = "#303235"
        videoElement.style.display = "none"; // Oculta el elemento de video
        audioElement.pause();
        botonOnEncendido = false;
    } else {
        pantalla.style.backgroundImage = "url('img/menu nsw.jpg')";
        pantalla.style.backgroundSize = "cover";
        pantalla.style.filter = "none";
        luzEncendido.style.backgroundColor = "#D6FF99";
        audioElement.play();
        videoElement.play();
        volumen = 0;
        posicion = 0;
        brilloActual = 100;
        saturacionActual = 100;
        botonOnEncendido = true;
    }
    audioElement.volume = volumen;
});


// BOTON A (HACIA DELANTE):

const botonA = document.querySelector("#botonA");
const videoElement = document.getElementById("videoElement");

botonA.addEventListener("click", () => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 0) {
            pantalla.style.backgroundImage = "url('img/super mario odyssey.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 1;
        } else if (posicion === 1) {
            pantalla.style.backgroundImage = "url('img/super mario odyssey in game.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 2;
        } else if (posicion === 2) {
            pantalla.style.backgroundImage = "url('img/menu super mario odyssey.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 3;
        } else if (posicion === 3) {
            pantalla.style.backgroundImage = "";  // Elimina el fondo de pantalla
            videoElement.style.display = "block"; // Muestra el elemento de video
            posicion = 4;
        } else if (posicion === 4) {
            pantalla.style.backgroundImage = "url('img/menu nsw.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 0;
        } else if (posicion === 5) {
            pantalla.style.backgroundImage = "url('img/menu nintendo eshop.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 6;
        } else if (posicion === 6) {
            pantalla.style.backgroundImage = "url('img/error compra nintendo shop.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 7;
        }
    }
});


// BOTON B (HACIA DETRAS):

const botonB = document.getElementById("botonB");

botonB.addEventListener("click", () => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 0) {
            pantalla.style.backgroundImage = "";
            videoElement.style.display = "block";
            posicion = 4;
        } else if (posicion === 1) {
            pantalla.style.backgroundImage = "url('img/menu nsw.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 0;
        } else if (posicion === 2) {
            pantalla.style.backgroundImage = "url('img/super mario odyssey.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 1;
        } else if (posicion === 3) {
            pantalla.style.backgroundImage = "url('img/super mario odyssey in game.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 2;
        } else if (posicion === 4) {
            pantalla.style.backgroundImage = "url('img/menu super mario odyssey.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 3;
        } else if (posicion === 6) {
            pantalla.style.backgroundImage = "url('img/apertura nintendo eshop.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 5;
        } else if (posicion === 7) {
            pantalla.style.backgroundImage = "url('img/menu nintendo eshop.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 6;
        }
    }
});

// BOTON Y (NINTENDO ESHOP):

const botonY = document.querySelector("#botonY");

botonY.addEventListener("click", () => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 0 || posicion === 1 || posicion === 2 || posicion === 3 || posicion === 4 || posicion === 8 || posicion === 9) {
            pantalla.style.backgroundImage = "url('img/apertura nintendo eshop.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 5;
        } else if (posicion === 5 || posicion === 6 || posicion === 7 || posicion === 8) {
            pantalla.style.backgroundImage = "url('img/menu nsw.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 0;
        }
    }
});


// BOTON X (PERFIL DE USUARIO):

const botonX = document.querySelector("#botonX");

botonX.addEventListener("click", () => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 0 || posicion === 1 || posicion === 2 || posicion === 3 || posicion === 4 || posicion === 5 || posicion === 6 || posicion === 7 || posicion === 9) {
            pantalla.style.backgroundImage = "url('img/perfil de usuario inicial.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 8;
        } else if (posicion === 8) {
            pantalla.style.backgroundImage = "url('img/menu nsw.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 0;
        }
    }
});


// BOTON DE RESETEO (HOME):

const home = document.querySelector(".divBotonHome");

home.addEventListener("click", () => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 1 || posicion === 2 || posicion === 3 || posicion === 4 || posicion === 5 || posicion === 6 || posicion === 7 || posicion === 8 || posicion === 9) {
            pantalla.style.backgroundImage = "url('img/menu nsw.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 0;
        }
    }
});


// BOTON CAPTURA DE PANTALLA:

const capturaPantalla = document.querySelector(".botonCapturaPantalla");

capturaPantalla.addEventListener("click", () => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 0 || posicion === 1 || posicion === 2 || posicion === 3 || posicion === 4 || posicion === 5
            || posicion === 6 || posicion === 7 || posicion === 8) {
            pantalla.style.backgroundImage = "url('img/capturar pantalla.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 9;
        } else if (posicion === 9) {
            pantalla.style.backgroundImage = "url('img/menu nsw.jpg')";
            pantalla.style.backgroundSize = "cover";
            videoElement.style.display = "none";
            posicion = 0;
        }
    }
});



// BOTON SUBIR VOLUMEN (+vol):

const audioElement = document.querySelector("#audio");
const subirAudio = document.querySelector("#volumenUp");
let volumen = 0;

subirAudio.addEventListener("click", function () {
    if (botonOnEncendido == true) {
        if (volumen === 0) {
            volumen = 0.2;
        } else if (volumen === 0.2) {
            volumen = 0.6;
        } else if (volumen === 0.6) {
            volumen = 1;
        }

        audioElement.volume = volumen;
    }
});


// BOTON BAJAR VOLUMEN:

const bajarAudio = document.querySelector("#volumenDown");

bajarAudio.addEventListener("click", function () {
    if (botonOnEncendido == true) {
        if (volumen === 1) {
            volumen = 0.6;
        } else if (volumen === 0.6) {
            volumen = 0.2;
        } else if (volumen === 0.2) {
            volumen = 0;
        }

        audioElement.volume = volumen;
    }
});


// BOTON CRUCETA SUPERIOR:

let brilloActual = 100;
let saturacionActual = 100;

const crucetaSuperior = document.querySelector("#crucetaSuperior");

crucetaSuperior.addEventListener("click", function () {
    if (botonOnEncendido == true) {
        if (brilloActual < 100) {
            brilloActual += 20;
        }
        pantalla.style.filter = `brightness(${brilloActual}%) saturate(${saturacionActual}%)`;
    }
});


// BOTON CRUCETA INFERIOR:

const crucetaInferior = document.querySelector("#crucetaInferior");

crucetaInferior.addEventListener("click", function () {
    if (botonOnEncendido == true) {
        if (brilloActual >= 60) {
            brilloActual -= 20;
        }
        pantalla.style.filter = `brightness(${brilloActual}%) saturate(${saturacionActual}%)`;
    }
});


// BOTON CRUCETA DERECHA:

const crucetaDerecha = document.querySelector("#crucetaDerecha");

crucetaDerecha.addEventListener("click", function () {
    if (botonOnEncendido == true) {
        if (saturacionActual < 100) {
            saturacionActual += 25;
        }
        pantalla.style.filter = `brightness(${brilloActual}%) saturate(${saturacionActual}%)`;
    }
});


// BOTON CRUCETA IZQUIERDA:

const crucetaIzquierda = document.querySelector("#crucetaIzquierda");

crucetaIzquierda.addEventListener("click", function () {
    if (botonOnEncendido == true) {
        if (saturacionActual >= 0) {
            saturacionActual -= 25;
        }
        pantalla.style.filter = `brightness(${brilloActual}%) saturate(${saturacionActual}%)`;
    }
});


// BOTON MAS:

const simboloMas = document.querySelector(".botonMas");

simboloMas.addEventListener("click", (event) => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 4) {
            videoElement.play();
        }
    }
});


// BOTON MENOS:

const simboloMenos = document.querySelector(".botonMenos");

simboloMenos.addEventListener("click", (event) => {
    event.stopPropagation();
    if (botonOnEncendido == true) {
        if (posicion === 4) {
            videoElement.pause();
        }
    }
});


// PARA HACER QUE FUNCIONE EL HOVER DEL SIMBOLO + (HOVERED):

const rows = document.querySelectorAll(".row");

rows.forEach((row) => {
    row.addEventListener("mouseenter", () => {
        rows.forEach((otherRow) => {
            otherRow.classList.add("hovered");
        });
    });

    row.addEventListener("mouseleave", () => {
        rows.forEach((otherRow) => {
            otherRow.classList.remove("hovered");
        });
    });
});




