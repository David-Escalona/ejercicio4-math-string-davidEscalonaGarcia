const botonMinus = document.querySelector("#botonMinus"); // Creo variable constante y la selecciono del HTML mediante el ID "botonMinus"
const botonMayus = document.querySelector("#botonMayus"); // Creo variable constante y la selecciono del HTML mediante el ID "botonMayus"
const botonBuscar = document.querySelector("#botonBuscar"); // Creo variable constante y la selecciono del HTML mediante el ID "botonMayus"

botonMinus.addEventListener('click', Minus);// A la variable anterior le añado un evento click sobre la funcion Minus
botonMayus.addEventListener('click', Mayus);// A la variable anterior le añado un evento click sobre la funcion Mayus
botonBuscar.addEventListener('click', Buscador);// A la variable anterior le añado un evento click sobre la funcion Mayus

function Minus(){// Esto es una funcion Minus

    const texto = document.querySelector("#texto").value;// Que tiene una variable constante llamada texto enlazada con el html ID "texto" y le saco el valor que tiene
    const boton = texto.toLowerCase();// Creo una variable boton que tendra dentro la variable texto con .toLowerCase() para que el texto sea en minusculas
    document.querySelector("#ultimoTexto").innerHTML = boton;// Selecciono en el documento la ID ultimoTexto para que me añada el contenido del boton dentro del html
    console.log("El texto contiene",boton.length ,"palabras");// Lo saco por consola y añado .length para que me muestra los caracteres

    document.querySelector("#contador").innerHTML = boton.length// Dentro del documento selecciono el ID Contador y le añado el valor de boton que contiene el texto que le añadimos
    //al html y le metemos el .length para que nos lo cambio el texto por numero de caracteres
}

function Mayus(){// Esto es una funcion Mayus

    const texto = document.querySelector("#texto").value;// Que tiene una variable constante llamada texto enlazada con el html ID "texto" y le saco el valor que tiene
    const boton = texto.toUpperCase();// Creo una variable boton que tendra dentro la variable texto con .toUpperCase() para que el texto sea en mayusculas
    document.querySelector("#ultimoTexto").innerHTML = boton;// Selecciono en el documento la ID ultimoTexto para que me añada el contenido del boton dentro del html
    console.log("El texto contiene",boton.length ,"palabras");// Lo saco por consola y añado .length para que me muestra los caracteres

    document.querySelector("#contador").innerHTML = boton.length// Dentro del documento selecciono el ID Contador y le añado el valor de boton que contiene el texto que le añadimos
    //al html y le metemos el .length para que nos lo cambio el texto por numero de caracteres

}

function Buscador(){// Esto es una funcion
    
    const introduceTextos1 = document.querySelector("#introduceTextos").value// Que tiene una variable constante llamada texto enlazada con el html ID "texto" y le saco el valor que tiene
    const guardaTexto = introduceTextos1// Creo una variable guardaTexto que tendra dentro la variable texto con .toUpperCase() para que el texto sea en mayusculas

    console.log("La palabra Hola es:",guardaTexto.includes("Hola"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra buenas es:",guardaTexto.includes("buenas"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra tardes es:",guardaTexto.includes("tardes"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra me es:",guardaTexto.includes("me"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra llamo es:",guardaTexto.includes("llamo"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra David es:",guardaTexto.includes("David"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra Escalona es:",guardaTexto.includes("Escalona"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra García es:",guardaTexto.includes("García"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra y es:",guardaTexto.includes("y"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra estudio es:",guardaTexto.includes("estudio"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra en es:",guardaTexto.includes("en"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    console.log("La palabra FPllefia es:",guardaTexto.includes("FPllefia"))// Muestro por consola si la palabra seleccionada esta mediante true o no esta mediante false
    
    if(guardaTexto.includes("Hola")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }
        
    if(guardaTexto.includes("buenas")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("tardes")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("me")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }
    
    if(guardaTexto.includes("llamo")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("David")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("Escalona")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("García")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("y")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("estudio")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("en")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }

    if(guardaTexto.includes("FPllefia")){// Si en guardaTexto esta la palabra seleccionada
            document.querySelector("#concidencia").innerHTML = guardaTexto// La meto dentro del html mediante el document.querySelector.innerhtml y lo meto en guardaTexto que tiene guardado el id introduceTextos
        }
    

    const frase = "Hola buenas tardes me llamo David Escalona García y estudio en FPllefia"// Creo una variable frase con este texto
    console.log('Resumen de 10 palabras:', frase.substring(0, 60))// Lo muestro por consoloa y le añado .substring para que me muestre desde la palabra 0 hasta la 10

    document.querySelector("#resumen").innerHTML = frase.substring(0, 60)// Lo inyecto en el html y le añado el .substring(0,10) para que me muestre de la palabra 0 hasta la 10
}
