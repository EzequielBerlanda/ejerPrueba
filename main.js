




let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = parseInt(prompt("Ingrese su edad"));

const turnos = (nombre, apellido, edad) => {
    let resultado1 = "";
    for(let i = 1; i <= 10; i++){
        resultado1 = ` ${nombre} ${apellido} \n Edad: ${edad} años \n Tu turno es el numero ${i} \n`;
        return resultado1;
    }
    
}

const turnosEspeciales = (nombre, apellido, edad) => {
    let resultado2 = "";
    for(let i = 1; i <= 10 ; i++){
        resultado2 = ` ${nombre} ${apellido} \n Edad: ${edad} años \n Tu turno ESPECIAL es el numero ${i} \n`;
        return resultado2;
    }
    
}


if(edad > 0 && edad < 70){
    
    alert(turnos(nombre, apellido, edad));
} else if(edad > 70){
   
    alert(turnosEspeciales(nombre, apellido, edad));
} else{
    alert("edad invalida");
}



