const menu = `Seleccionar una opcion: 
                    0.- Finalizar programa
                    1.- Cuantos Pares
                    2.- Mayor
                    3.- Media
                    4.- SumaImpares
                    5.- Divisibles
                    6.- Incrementar
                    7.- Producto
                    8.- foreInsert
                    9.- sumaTable
                    10.- sumaFila
                    `;

let condition = true;
let result;

const numerosA = [4, 5, 6, 10, 13, 25];
let numerosB = [4, 6, 8, 5];
const tabla = [
  [10, 20, 30, 40],
  [20, 30, 40, 50],
  [60, 70, 80, 90],
];

while (condition) {
  let mainMenu = window.prompt(menu);
  switch (parseInt(mainMenu)) {
    case 0:
      condition = false;
      break;
    case 1:
      cuantosPares();
      break;
    case 2:
      mayor();
      break;
    case 3:
      media(numerosA);
      break;
    case 4:
      sumaImpares(numerosA);
      break;
    case 5:
      let numero = window.prompt("¿Los divisibles del nº ? ");
      divisibles(numerosA, numero);
      break;
    case 6:
      let porcentaje = window.prompt("Indica el porcentaje: "); 
      incrementar(numerosB, porcentaje);
      break;
    case 7:
      producto(numerosA, numerosB);
      break;
    case 8:
      foreInsert([100, 110, 310, 420, 530]);
      break;
    case 9:
      sumaTable(tabla);
      break;
    case 10:
      sumaFila(tabla, 2);
      break;
    default:
      alert("Opcion invalida, introduzca un numero desde el 0 hasta el 10");
      break;
  }
} 

// Funcion cuantosPares
function cuantosPares() {
  let numPares = 0;
  numerosA.forEach( x => {
    if (x % 2 == 0) {
      numPares++;
    }
  });
  window.alert("El nº de pares es :" + numPares );
}

function mayor() {
  let numeroMayor = numerosB[0];
  numerosB.forEach( x => {
    if (numeroMayor < x) {
      numeroMayor = x;
    }
  });
  window.alert("El nº mayor es : " + numeroMayor );
}

function media(array) {
  let elementosTotales = array.length;
  let sumaArray = 0;
  array.forEach( x => {
    sumaArray += x; 
  });
  let media = sumaArray / elementosTotales;
  window.alert("La media es : " + media );
}

function sumaImpares(array) {
  let sumaElementosImpares = 0;
  array.forEach( x => {
    if(x % 2 != 0){
      sumaElementosImpares += x; 
    }
  });
  window.alert("El total de impares es : " + sumaElementosImpares );
}

function divisibles(array, numero) {
  let numerosDivisibles = [];
  array.forEach( x => {
    if(x % numero == 0){
      numerosDivisibles.push(x); 
    }
  });
  window.alert("Los numeros divisibles por " + numero + " son :\n " + numerosDivisibles + ",");
}

function incrementar(array, porcentaje) {
  porcentaje = porcentaje/100;
  let arrayAuxiliar = array; // Estoy declarando una variable auxiliar para guardar un array de tipo constante (numerosA) y que pueda ser modificado.
  let nuevoArrayPorcentaje = [];
  arrayAuxiliar.forEach( x => {
    nuevoArrayPorcentaje.push(x + x * porcentaje);
  });
  console.log(nuevoArrayPorcentaje);
}

function producto(array1, array2) {
  let multiplicacionArrays = [];
  array1.forEach( x => {
    array2.forEach( y => {
      multiplicacionArrays.push(x * y);
    });
  });
  console.log(multiplicacionArrays);
}

function foreInsert(array) {
  array.forEach( x => {
    numerosB.unshift(x);
  });
  console.log(numerosB);
}

function  sumaTable(table) {
  let resultado = 0;
  for(let i = 0; i < table.length; i++){
    for (let j = 0; j < table[i].length; j++) {
      resultado += table[i][j];
    }
  }
  console.log("la suma es: " + resultado); 

}

function  sumaFila(table, row) {
  let resultado = 0;
  for (let i = 0; i < table[row].length; i++) {
    resultado += table[row][i];    
  }
  console.log("la suma es: " + resultado); 

}