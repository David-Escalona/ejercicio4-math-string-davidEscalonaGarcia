const botonJava = document.querySelector("#boton")//Creo variable constante y la selecciono del html mediante el id boton

const numeroAleatorioJava = document.querySelector("#numeroAleatorio");//Creo variable constante y la selecciono del html mediante el id numeroAleatorio

botonJava.addEventListener('click', pintaNumero)//A la varialbe botonJava le añado un evento click relacionado con la funcion1

function funcionAleatorio(num1, num2){//Creo una funcion

    console.log('Este es el numero minimo',num1)//Mostramos por consola el valor del num1
    console.log('Este es el numero maximo',num2)//Mostramos por consola el valor del num2

    let aleatorio = Math.floor(Math.random()* (num2-num1)+num1)//Creo una variable llamada aleatorio que me genera un numero aleatorio del num1 al num2

    return aleatorio//Devuelve el numero aletorio 
}

function pintaNumero(){//Creo otra funcion

    const primerNum = document.querySelector("#num1").value//Creo variable constante y la selecciono del html mediante el id num1
    const ultimoNum = document.querySelector("#num2").value//Creo variable constante y la selecciono del html mediante el id num2

    let aleatorio = funcionAleatorio(parseInt (primerNum), parseInt (ultimoNum))//Llamo la funcionAleatorio y le paso los dos numero convertidos en numerico y lo meto en la variable aleatorio
    console.log('Este es el numero aleatorio', aleatorio)//Saco por consola el numero aleatorio
    document.querySelector('#numeroAleatorio').innerHTML = aleatorio//Inyecto en el html el numero aleatorio en la ubicacion del id que es el numeroAleatorio
}