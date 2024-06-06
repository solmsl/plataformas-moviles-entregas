// Implementar una función "suma" que retorne la suma de 2 numeros, ejemplo: suma(2,3) retorna 
const suma = function() {
    let num1=Number(prompt("Ingrese el primer número"));
    let num2=Number(prompt("Ingrese el segundo número"));

    return console.log(`${num1}+${num2}): ${num1+num2}`);
}

// Implementar una función "elevarAlCubo" que eleve al cubo un numero, ejemplo: elevarAlCubo(3) 
const elevacion= function elevarAlCubo(){
    let numero=Number(prompt("Ingrese un numero"));
    resultado=numero**3;
    console.log(`Elevar: ${resultado}`);
}

// Implementar una función "restoDivisionEntera" para devolver el resto de una división entera entre un dividendo y un divisor ejemplo: restoDivisionEntera(3,2) retorna 1
const restoDivisionEntera = function(){
    let num1=Number(prompt("Ingrese el primer número"));
    let num2=Number(prompt("Ingrese el segundo número"));

    resultado=num1%num2; 
    console.log(`Resto division entera (${num1},${num2}): ${resultado}`)
}
// Implementar una función "numeroPi" para devolver el numero PI
function numeroPi(){
    console.log(`Pi vale: ${Math.PI}`);
}

// Implementar una función "numeroRandom" para devolver un número random / aleatorio
function numeroRandom(){
    let numAleatorio=parseInt(Math.random() * 100);
    console.log(`Random:${numAleatorio}`); 
}


// Implementar una función "mejorNumeroRandom" para devolver un número random entre 2 valores recibidos como parámetros
function mejorNumeroRandom(max,min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/* CADENAS DE CARACTERES */

// Implementar una función "transformarMayuscula" que transforme a mayúscula la palabra recibida como parámetro
function transformarMayuscula(plataformasmoviles){
    console.log(plataformasmoviles.toUpperCase());
}


// Implementar una función "primeraLetra" que nos devuelva la inicial de la palabra recibida como parámetro
function primeraLetra(palabra){
    console.log(palabra[0].toUpperCase());
}


// Implementar una función "ultimaLetra" que nos devuelva la letra final la palabra recibida como parámetro
function ultimaLetra(lastLetter){
    console.log(lastLetter.slice(-1));
}


// Implementar una función "primeraLetraMayuscula" que devuelve la palabra original con su primera letra en mayúscula
function primeraLetraMayuscula(letra){
    console.log("primer letra mayuscula");   
    console.log(letra.charAt(0).toUpperCase() + letra.slice(1));
}


// Implementar una función "palabraAListaDeLetras" que dada una palabra me retorne un listado de sus letras
function letterList(listedLetters){
    let array=[];
    for(let i=0;i<listedLetters.length-1;i++){
        array.push(listedLetters[i]);
    }
    console.log(array);
    // console.log(listedLetters.split(""));
    //return console.log(Array.from(listedLetters));
}

//console.log("palabraAListaDeLetras(\"hola\"): ", palabraAListaDeLetras("hola"))


// Implementar una función "listaDeLetrasAPalabra" que dado un listado de letras, devuelva una palabra
const listLettersToWord=(letters)=>console.log(letters.join(""));

//console.log("listadoDeLetrasAPalabra([\"h\", \"o\", \"l\", \"a\"]): ", listadoDeLetrasAPalabra(["h", "o", "l", "a"]))


// Implementar una función "palabraInvertida" que devuelva la palabra invertida
const palabraInvertida = str => {
    let convertir = str.split("");
    let revertir = convertir.reverse().join("");

    return console.log(revertir);
}

/*LLAMADO A LAS FUNCIONES*/
//suma();
//console.log(elevacion(3));
//restoDivisionEntera(); 
//numeroPi();
//numeroRandom();
//mejorNumeroRandom(1,6); 
//transformarMayuscula("plataformas moviles"); 
//primeraLetra("locura"); 
//ultimaLetra("toro");
//primeraLetraMayuscula("plataformas"); 
//letterList("sole");              
//listLettersToWord(["l","o","c","u","r","a"]);
palabraInvertida("Hola");
