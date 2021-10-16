console.info("hola bienvenido a la tabla de tareas porfavor escribe: Quiero_tarea() en la consola")


function Quiero_tarea()
{

console.log("que tipo de tarea deseas? \n 1 para Tarea operativa \n 2 para  tarea de limpieza")    

 let opciones = prompt ("1 o 2 ? ")
 if(prompt===1){console.log ("opcion operativa")}
 else{}
}
// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// function contarletras(cadena=""){
//     if(!cadena){
//                 console.warn("no ingresaste texto");}
//     else{console.info(`La cadena"${cadena}"tiene ${cadena.length} caracteres`)};

// }
//funcion flechas es = const nombre_de_la_funcion =(Parametros)=> 
const contarletras = (cadena="")=>(!cadena)?console.warn("no ingresaste texto"):console.info(`La cadena "${cadena} tiene ${cadena.length} caracteres`);

contarletras();
contarletras("hola mundo curel");
contarletras("jajajajajjajajajajaj");

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
const recortado = (cadena="", longitud = undefined)=> (!cadena)
?console.warn("no ingresaste texto")
:console.info(cadena.slice(0,longitud));
recortado("and on and on",5);
// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

const cadenaAArreglo = (cadena="", separador= undefined) => 
(!cadena)
?console.warn("no ingresaste una cadena de texto")
:(separador===undefined)
?console.warn("no ingresaste el caracter separador")
:console.info(cadena.split(separador));
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
const repetirTexto = (texto="", veces = undefined)=>{
    if(!texto)return console.warn("no ingresaste un texto");

    if (veces === undefined) return  console.warn("no ingresaste el numero de veces a repetir el texto");

    if(veces === 0 )return console.error("en numero de veces no puede ser 0");

    if(Math.sign(veces)===-1)return console.error("el número de veces no puede ser negativo");

    for(let i=1; i<=veces;i++){console.info(`${texto},${i}`);   }
    
    }

repetirTexto("ahahah",6);
repetirTexto("",1);


// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertir = (texto="")=>{
    (!texto)
    ? console.warn("no has ingresasdo texto alguno")
    : console.info(texto.split("").reverse().join(""));
}

invertir("");
invertir(" ");
invertir("torneo de globos")
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const textoEnCadena = (cadena ="", texto ="")=>{
    if (!cadena)return console.warn("no ingresaste el texto largo");
    if (!texto) return console.warn("no ingresaste la palabra a evualuar");

    let i = 0,
    contador = 0;
    while (i !==-1){
        i =cadena.indexOf(texto,i);
        if (i!==-1){
            i++;
            contador++;
        }
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`)
}
textoEnCadena("Programa una función que valide si una palabra o frase dada, es un palíndromo ", "función");
textoEnCadena("elimine cierto patrón de caracteres de un texto dado","de")
textoEnCadena("elimine cierto patrón de caracteres de un texto dado")
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palindromo = (palabra = "")=>{
    if(!palabra) return console.warn("no ingresaste una palabra o frase");
    palabra = palabra.toLowerCase();
    let alReves = palabra.split("").reverse().join("");

    return (palabra===alReves)
    ?console.info(`si es un palindromo, palabra original${palabra}, Palabra al reves ${alReves}`)
    :console.info(`no es un palindromo, palabra original${palabra} palabra al reves${alReves}`);
}
palindromo("salas");

// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const elimCrt = (texto="",patron="")=>{
    (!texto)
    ?console.warn("no ingresaste un texto")
    :(!patron)
    ?console.warn("no ingresaste un patron de caracteres")
    :console.info(texto.replace(new RegExp(patron, "ig"),""));
}

elimCrt("xyz1, xyz2, xyz3, xyz4 y xyz5", "x");

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const random = ()=>console.info(Math.round(Math.random()*100+500));
random();

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = (numero=0)=>{
    if (!numero)return console.warn("no ingresaste un numero");
    if (typeof numero !== "number") return console.error(`El valor"${numero}" ingresado, NO es un número`);
    numero = numero.toString();
    let alReves = numero.split("").reverse().join("");
    return (numero===alReves)
    ?console.info(`si es capicua, Numero original ${numero}, numero al reves ${alReves}`)
    :console.info(`no es capicua, numero original ${numero}, numero al reves ${alReves}`)
}

capicua();
capicua("19");
capicua({});
capicua(2002);
// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const factorial = (numero= undefined ) =>{

if (numero===undefined) return console.error("no has ingresado un numero");
if (typeof numero !=="number") return console.error(`el valor"${numero}" ingresado, NO es un número`);
if (!numero===0) return console.error("El número no puede ser 0");
if (Math.sign(numero)===-1) return console.error("El número no puede ser negativo");

let factorial =1;

for(let i = numero;i>1; i --){
    factorial *= i;
}

return console.info (`${numero} es ${factorial}`);
}