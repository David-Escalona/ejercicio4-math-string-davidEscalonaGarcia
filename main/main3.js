const botonNombreJava = document.querySelector("#botonNombre")// Creo variable constante y la selecciono del HTML mediante el ID "botonNombre"
const botonFechaJava = document.querySelector("#botonFecha")// Creo variable constante y la selecciono del HTML mediante el ID "botonFecha"

botonNombreJava.addEventListener('click', Nombre);// A la variable anterior le añado un evento click sobre la funcion Nombre
botonFechaJava.addEventListener('click', Fecha);// A la variable anterior le añado un evento click sobre la funcion Fecha

function Nombre(){//Esto es una funcion

    const nombreJava = document.querySelector("#nombre").value// Que tiene una variable constante llamada nombreJava enlazada con el html ID "nombre" y le saco el valor que tiene
    const guardaTodoNombre = nombreJava.split(" ")// En guardaTodoNombre metemos el contenido de fechaNombre y le añadimos .split(" ") para meter un espacio
    const guardaTodoNombreGuion = guardaTodoNombre.join("-")// En guardaTodoNombreGuion metemos todo lo de guardaTodoNombre y le añadimos .join("-") para que en el espacion añadido anteriormente no lo cambien por el -
    console.log(guardaTodoNombreGuion.trim());// trim() elimina los espacios a ambos lados de nuestra cadena
    document.querySelector("#guardadoNombre").innerHTML = guardaTodoNombreGuion// Selecciono el id #guardadoNombre del documento HTML y meto todo el contenido de guardaTodoNombreGuion directamente con innerhtml

}

function Fecha(){//Esto es una funcion

    const fechaJava = document.querySelector("#fecha").value// Que tiene una variable constante llamada fehcaJava enlazada con el html ID "fecha" y le saco el valor que tiene
    const guardaTodoFecha = fechaJava.split(" ")// En guardaTodoFecha metemos el contenido de fechaJava y le añadimos .split(" ") para meter un espacio
    const guardaTodoFechaBarra = guardaTodoFecha.join("/")// En guardaTodoFechaBarra metemos todo lo de guardaTodoFecha y le añadimos .join("/") para que en el espacion añadido anteriormente no lo cambien por la /
    console.log(guardaTodoFechaBarra.trim());// trim() elimina los espacios a ambos lados de nuestra cadena
    document.querySelector("#guardadoFecha").innerHTML = guardaTodoFechaBarra// Selecciono el id #guardadoFecha del documento HTML y meto todo el contenido de guardaTodoFechaBarra directamente con innerhtml

}