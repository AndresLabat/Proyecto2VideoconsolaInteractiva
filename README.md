<h1 align="center"># README - 🕹️Nintendo Switch Interactive Console🕹️</h1>

__<p align="center">Proyecto 2 - Videoconsola Interactiva - Semana 2</p>__

<p align="center">Nintendo Switch Interactive Console, por Andrés Labat.
<br>
Desarrollada como parte del Bootcamp de Full Stack Developer de Geekshubs Academy.</p>

<p align="center">_______________________________________________</p>


**Nintendo Switch Interactive Console** es un proyecto que recrea una experiencia interactiva de una videoconsola Nintendo Switch utilizando HTML, CSS, JavaScript, GIT y GitHub. Este proyecto incluye una serie de elementos interactivos que simulan la consola y sus mandos, así como algunas funciones divertidas y creativas.

## 📋 Contenido del Proyecto

El proyecto **Nintendo Switch Interactive Console** consta de los siguientes archivos:

1. **🔌index.html🔌**: Página principal que muestra una pequeña ambientación y que tiene un acceso en forma de botón a console.html.

<p>
   <div align="center">
      <img src="img/imagenes README/pantalla de inicio.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Acceso a la consola</b></em>
   </div>   
</p>

2. **🎮console.html🎮**: Esta es la página realmente importante, muestra la videoconsola Nintendo Switch y permite interactuar con ella.

<p>
   <div align="center">
      <img src="img/imagenes README/posicion todo desmontado, consola encendida.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Consola desmontada y encendida</b></em>
   </div>   
</p>

3. **🎨styles.css🎨**: Archivo CSS que proporciona estilos y diseño a la página.

4. **👾main.js👾**: Archivo JavaScript que controla las interacciones y funciones de la videoconsola.

## 🔧 Tecnologías Utilizadas

- **HTML**: Utilizado para estructurar la página web y crear elementos interactivos.
<img src="img/logos README/logo html.png" style="max-width: 100%;" width="30">

- **CSS**: Aplicado para dar estilo y diseño a la videoconsola y sus elementos.
<img src="img/logos README/logo css.png" style="max-width: 100%;" width="40">

- **JavaScript**: Utilizado para controlar las interacciones y las funciones de la videoconsola.
<img src="img/logos README/logo Javascript.png" style="max-width: 100%;" width="40">

- **Git**: Sistema de control de versiones para el seguimiento de cambios en el proyecto.
<img src="img/logos README/logo git.png" style="max-width: 100%;" width="60">

- **GitHub**: Plataforma para alojar el repositorio en línea y colaborar en el desarrollo del proyecto.
<img src="img/logos README/logo github.png" style="max-width: 100%;" width="60">

## 🍃Ramas del Repositorio

Este proyecto se desarrolló en una rama separada llamada "dev" que se creó desde la rama principal ("master"). Todos los commits se realizaron en la rama "dev" durante el desarrollo del proyecto, una vez finalizado, se ha realizado un merge a la rama master, y un último commit.

## ⚙️Instrucciones de Uso

1. Clona este repositorio en tu máquina local usando el siguiente comando: `git clone [URL del repositorio]`.

2. Abre el archivo `index.html` en tu navegador web para comenzar a interactuar con la videoconsola.

3. Explora todas las funcionalidades y diviértete interactuando con la videoconsola virtual.

## 🎮 Funcionalidades Destacadas

El proyecto **Nintendo Switch Interactive Console** incluye las siguientes funcionalidades destacadas:

- **Botón On**: Puedes encender y apagar la videoconsola con el botón de encendido, esto afectará al sonido, a la pantalla y también a la luz lateral del Dock.

<p>
   <div align="center">
      <img src="img/imagenes README/boton On.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>El botón ON controla el encendido y apagado de la consola</b></em>
   </div>   
</p>

- **Dock (Base de carga)**: Se puede quitar y poner la consola dentro del Dock. Si pulsamos sobre este, la consola se desplaza hacia el lateral, imitando cuando la quitamos del dock en la vida real, y los joycons se desplazan tambien imitando cuando los sacamos de la consola, quedando uno al lado del otro y ambos en la parte superior de la pantalla, de forma que se ve la consola a la izquierda, los mandos encima de esta, y el doc a la derecha de la consola, si volvemos a hacer click en el dock, todo vuelve a su estado original, mandos y consola a su posicion inicial dentro del dock.

<p>
   <div align="center">
      <img src="img/imagenes README/tocar dock.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Posición inicial, hacer click en el dock para desmontar</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes README/posicion dos del dock.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Una vez desmontada, hacer click en el dock para volver a su posición original</b></em>
   </div>   
</p>

- **Joy-Cons y josticks**: los Joy-Cons se pueden quitar y volver a colocar en la videoconsola. la funcionalidad se encuentra al hacer click en cualquiera de los dos josticks, en cada caso el mando se desplaza fuera de la consola simulando la posibilidad de quitar los joycons en la consola original para mayor comodidad del usuario, si vuelves a hacer click sobre cualquiera de ellos, ese Joy-con en concreto vuelve a su posición inicial en el lateral de la consola.

<p>
   <div align="center">
      <img src="img/imagenes README/click en el jostick.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al hacer click en un jostick, el joy-con asciende, separandose del cuerpo de la consola</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes README/click en el jostick desmontado.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al volver a hacer click, el joy-condesciende, volviendo a montarse en la consola</b></em>
   </div>   
</p>

- **Botones A y B**: Los botones A y B permiten avanzar y retroceder entre los carruseles de imágenes y videos. 

<p>
   <div align="center">
      <img src="img/imagenes README/click en botones A y B posicion 1.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al hacer click en el boton A, avanzamos en el carrusel de imagenes y videos</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes README/click en botones A y B posicion 2.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al hacer click en el boton B, retrocedemos en el carrusel de imagenes y videos</b></em>
   </div>   
</p>

- **Botón Y (eShop)**: El botón Y simula una visita a la eShop de Nintendo con un carousel de imágenes, si se vuelve a pulsar el boton Y, se vuelve al carousel original.

<p>
   <div align="center">
      <img src="img/imagenes README/acceso a nintendo eshop.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al hacer click en el boton Y, accedemos a la Nintendo eshop</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes README/navegando por la eshop.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Ahora podemos usar los botones A y B para navegar por la eshop</b></em>
   </div>   
</p>

- **Botón X (Brillo de Pantalla)**: El botón X controla el brillo de la pantalla con tres niveles diferentes.

<p>
   <div align="center">
      <img src="img/imagenes README/brillo al maximo.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Aqui vemos la consola con el brillo al máximo</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes README/brillo a la mitad.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al pulsar el botón X, cambiamos ese brillo, tiene 3 posiciones distintas</b></em>
   </div>   
</p>

- **Botón Home**: El botón Home te lleva de vuelta al menú principal en cualquier momento.

<p>
   <div align="center">
      <img src="img/imagenes README/boton home.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al pulsar el botón Home, estemos en el carrusel o video que estemos, se mostrara la imagen del menú de la consola</b></em>
   </div>   
</p>

- **Botón +Vol**: El botón +Vol es el encargado de subir el volumen del audio, siempre que la consola esta encendida, aunque este audio comienza con 0 de volumen para evitar sobresaltos.

- **Botón -Vol**: El botón -Vol es el encargado de bajar el volumen en el caso de que lo hayamos subido previamente.

<p>
   <div align="center">
      <img src="img/imagenes README/volumen.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Al hacer click en el botón +Vol se sube el volumen un 30% cada vez y en el botón -Vol se baja la misma cantidad hasta que no se oye nada</b></em>
   </div>   
</p>


 Todo esto esta sobre un video de fondo de imita un salón con una chimenea encendida y lluvia cayendo en el exterior, mojando la ventana, queriendo simular el calor del hogar y un momento de confort en el que disfrutas de tu tiempo de ocio y relax jugando a la videoconsola.

 Este proyecto es una dedicatoria a mi mujer y a su gran afición por la Nintendo Switch, intentando simular lo que ella describe como "la definición de un buen día", lluvia exterior, el hogar, calor y su gran aficion, la Nintendo Switch.


## 🎯Problemas y Soluciones

### 1. El tamaño de la consola y el Dock son muy grandes

- **🚧Problema**: Debido a que el diseño original se ha realizado en el monitor de 32 pulgadas de mi ordenador de sobremesa, al abrir el proyecto en el ordenador portatil, que tiene una resolución distinta, quedaban enormes todos los elementos de la consola.

   - **💡Solución**: Escalar todos los elementos del Css menos el del vídeo que hay de fondo al 70% de su tamaño y redistribuirlos en altura y anchura por la pantalla.

<p>
   <div align="center">
      <img src="img/imagenes README/resolucion del monitor del pc, tamaño correcto.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Este es el aspecto de los elementos después del escalado, visto en el monitor de 32 pulgadas</b></em>
   </div>   
</p>

<p>
   <div align="center">
      <img src="img/imagenes README/posicion todo desmontado, consola encendida.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Este es el aspecto de los elementos en el ordenador portatil</b></em>
   </div>   
</p>

### 2. Doble click en algunas posiciones para que los eventos ocurran

- **🚧Problema**: El mayor problema que he tenido a la hora de realizar los carruseles es hacer la parte de Css de forma que quede bien definido lo que quiero que ocurra en cada posición, ya que a veces necesitaba 2 clicks en un mismo botón para que ocurriera el cambio de imagen.

   - **💡Solución**: El uso de una variable definida anteriormente fuera del evento para poder usarla como condición en los "if" e "if else".

<p>
   <div align="center">
      <img src="img/imagenes README/variable posicion.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>La variable "posición" es la encargada del correcto funcionamiento de los carrusel</b></em>
   </div>   
</p>

### 3. Evitar que el evento del Joy-con ocurriera al hacer click en un botón contenido dentro del mismo

- **🚧Problema**: En un principio diseñe que cuando se hiciera click en un mando, en cualquiera de sus puntos, este se desplazara hasta la parte superior de la consola y, en caso de estar ya en la posición superior, volviera al lateral de la consola, pero esto hacía que al hacer click en alguno de sus botones, en lugar de suceder el evento del botón en concreto, sucediera el evento del mando .

   - **💡Solución**: Agregarle a los botones en el código de javascript un event.stopPropagation(); de esta forma, solo su evento particular sucedía al hacerle click en dicho botón.

<p>
   <div align="center">
      <img src="img/imagenes README/error evento Joycon.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Hacer click en cualquier punto del mando provocaba su desplazamiento y anulaba el resto de eventos de sus botones</b></em>
   </div>   
</p>

### 4. Evitar que un evento ocurriera al hacer click por accidente en el Joy-con

- **🚧Problema**: El hecho de haber diseñado que cuando se hiciera click en un mando, en cualquiera de sus puntos esto provocara su desplazamiento hacía que al hacer click en alguno de sus botones, si por accidente pinchabas fuera, ocurriera el evento del mando, siendo incómodo ya que implicaba un desplazamiento del mismo.

   - **💡Solución 1**: Eliminar el evento de desplazamiento del mando en cualquier punto del mismo, y asignarselo a su propio jostick, quedando mucho mas controlado y elegante en la ejecución, ya que además le he añadido movimiento al jostick al clickar sobre él.

<p>
   <div align="center">
      <img src="img/imagenes README/click en el jostick desmontado.jpeg" style="max-width: 100%;" width="500">
   </div>    
   <div align="center">
      <em><b>Ahora para provocar el desplazamiento del mando, hay que hacer click en el jostick</b></em>
   </div>   
</p>


## 🤝 Cómo Contribuir

Si deseas contribuir a este proyecto, puedes realizar un fork del repositorio en GitHub, hacer tus cambios y enviar una solicitud de extracción (pull request). Tu contribución será revisada y, si es apropiada, se fusionará con la rama principal.

1. Haz un fork de este repositorio.

2. Crea una nueva rama para tu contribución: `git checkout -b tu-nueva-caracteristica`.

3. Realiza tus cambios y commitea: `git commit -m "Añade una nueva característica"`.

4. Envía tus cambios al repositorio: `git push origin tu-nueva-caracteristica`.

5. Crea una solicitud de extracción en GitHub.

Espero que disfrutes explorando y utilizando la Nintendo Switch Interactive Console. Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto conmigo a través de la información de contacto proporcionada.

## 📝Autor

- **Nombre**: Andrés Labat Beltrán
- **Fecha de Comienzo del Proyecto**: 20/09/2023
- **Email**: andreslabat89@gmail.com.
- **Linkedin**: www.linkedin.com/in/andres-labat-beltran-99a082292.

## ⚖️ Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más información.

## 👏Agradecimientos

Agradecimentos a GeeksHubs Academy por los conocimientos que he podido adquirir estas dos semanas y que han hecho posible este proyecto, y a nuestro querido profesor David Ochando y su gran paciencia con nosotros.

Quiero hacer una mención especial a mi mujer, Alba, ya que sin su apoyo e inspiracion ni este ni ningún otro proyecto llegarían a ser una realidad.

¡Gracias por visitar **Nintendo Switch Interactive Console** y explorar mi proyecto!



