const botonJava = document.querySelector("#boton")// Creamos una variable constante y la selecciono mediante el id boton

botonJava.addEventListener('click', generarEmoticono)// Le añado un evento click sobre la funcion al nuevo botonJava creado anteriormente

function generarEmoticono(){// Esto es una funcion

    const array =// Creo un array con una serie de emoticonos
    [
        '😀',
        '😁',
        '😂',
        '🤣',
        '😃',
        '😄',
        '😅',
        '😆',
        '😗',
        '🥰',
        '😘',
    ]

    let aleatorio = array[Math.floor(Math.random()* array.length)]// Creo una variable aleatorio que nos generara un emoticono aleatorio
    // Mediante el array[Math.floor(Math.random()* array.length)] y al final pongo array.length para que el .length me indique una posicion y me muestre el emoticono por posicion

    document.querySelector("#emoticono").innerHTML = aleatorio// Lo inyecto al html mediante innerHTML y buscando el id emoticono

}