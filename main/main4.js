const botonJava = document.querySelector("#boton")// Creamos una variable constante y la selecciono mediante el id boton

botonJava.addEventListener('click', contraseña)// Le añado un evento click sobre la funcion al nuevo botonJava creado anteriormente

function contraseña(){// Esto es una funcion

    let random = Math.random().toString(36).substring(2,12)// Creo una variable que varia llamada random que me genera 10 caracteres aleatorios
    // Con el metodo .toString(36) le indico que quiero que me muestre 36 caracteres tanto todas las letras del abecedsario como del 0 al 9
    // Y con e metodo .substring(2,12) quiero que me muestre 10 caracteres y que me borre los 2 primeros y por eso empieza por el caracer 2
    // Ya que si fuera (0,10) un ejemplo de contraseña seria: 0.c17y24ar
    console.log(random)// Lo muestro por consola el aleatorio

    document.querySelector("#guardar").innerHTML = random// Añado el numero aleatorio al html mediante el innerHtml ya que lo inyecto al id guardar

}