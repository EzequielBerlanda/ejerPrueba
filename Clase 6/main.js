/* ARRAY = ESTRUCTURA DE DATOS, PERMITE ORGANIZAR LOS DATOS, TIENEN POSICIONES (ARRANCAN DESDE 0), */

/* 
ESTRUCTURA DE UN ARREGLO

[item0, item1, ...., itemn];

*/


/* const arregloVacio = [];
const numeros = [2, 3, 4, 5];
const nombres = ["Enzo", "Angeles", "Andres"]
const valores = [true, false, false, true];
const varios = [1, true, "Angeles"]; */

// console.log(nombres); 

                                        /* ACCEDER A UN DATO */

// console.log(nombres[1]);

                                        /* OPERACIONES */

// console.log(numeros[1] + numeros[3]);

                                        /* RECORRER UN ARREGLO */

// const nombres = ["Enzo", "Angeles", "Andres"]

//for(let index = 0; index < 3; index++){
//console.log(nombres[index]);
// } 

//for(let index = 0; index < nombres.length; index++){
//    console.log(nombres[index]);
// }


                                        /* COMO MODIFICAR UN ELEMENTO AL ARREGLO */


/* const nombres = ["Enzo", "Angeles"];

nombres.push("Andres"); //agrega el elemento al final del arreglo

nombres.unshift("Camila"); // agrega el elemento al principio del arreglo

nombres.pop(); // retira un elemento del final del arreglo

nombres.shift(); // retira un elemento del principio del arreglo

console.log(nombres); */

// const nombres = ["Enzo", "Angeles", "Andres", "camila", "maria"];

// nombres.splice(2, 1); // primer parametro la posicion donde se para, segundo parametro la cantidad a retirar (contando la posicion donde se para)

// console.log(nombres);

// console.log(nombres.join(" ")); // unir todos los elementos en un solo string, separados por lo que esta entre las comillas

//const nombres = ["Enzo", "Angeles", "Andres", "camila", "maria"];
//const mascotas = ["Max", "Zeus"];

//const variados = nombres.concat(mascotas).concat().concat(); // combinar dos arreglos en uno solo

//console.log(variados);

//const nombres = ["Enzo", "Angeles", "Andres", "camila", "maria"];
//const copia = nombres.slice(1, 5); // copia el arreglo, desde la posicion del parametro uno (incluida), hasta una posicion menos del segundo parametro
//console.log(copia);


                                                /* BUSCAR UN ELEMENTO */

//const nombres = ["Enzo", "Angeles", "Andres", "camila", "maria"];
//console.log(nombres.indexOf("Angeles")); // nos dice en que posicion se encuentra el elemento si existe, sino retorna -1

//const productos = ["camisa", "gorra", "zapato", "medias"];

//let nombre = prompt("Ingrese el nombre del producot");
//let posicion = productos.indexOf(nombre);

//if(posicion != -1){
//    alert(`El producto ${nombre} esta en la puesto ${posicion}`)
//}else{
//    alert("El producto no se encuentra en la bodega")
//}

//const productos = ["camisa", "gorra", "zapato", "medias"];
//console.log(productos.includes("gorra")); // valida la existencia del elemento

//productos.reverse()// invierte el orden de los elementos del arreglo
//console.log(productos);


                            /* ELIMINAR UN ELEMENTO DE UN ARREGLO POR SU NOMBRE */

/* const productos = ["camisa", "gorra", "zapato", "medias"];
const eliminar = (nombre) => {
    let index = productos.indexOf(nombre);

    if(index != -1){
        productos.splice(index, 1);
        console.log(productos);
    }
}
eliminar("gorra"); */


/* const productos = [
{id: 1, nombre: "camisa", precio: 1000},
{id: 2, nombre: "zapato", precio: 750 },
{id: 3, nombre: "gorra", precio: 350},
{id: 4, nombre: "media", precio: 1500},
]

for(const item of productos){
    if (item.id <= 3){ //para ver un numero especifico, si lo sacas se muestra todo
    console.log(item.nombre);
    console.log(item.precio);
    }
} */



const nombres = [
    {id: 1 , nombre:  "Juan", turno: 1},
    {id: 2 , nombre:  "Oscar", turno: 2},
    {id: 3 , nombre:  "Ezequiel", turno: 3},
    {id: 4 , nombre:  "Micaela", turno: 4},
]

let nombre = "Juan";
let posicion = nombres.indexOf(nombre);


/* for(let index = 0; index < 3; index++){
    if(posicion != -1){
        console.log(`${nombre} tiene el turno nro ${turno}`);
    }else{
        console.log(`${nombre} no tiene un turno registrado`);
    }
}  */

for(const item of nombres){
    if (item.id <= 4){ 
    
    }
}






