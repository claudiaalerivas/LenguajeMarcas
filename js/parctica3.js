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
      howManyPairs();
      break;
    case 2:
      biggerNumber();
      break;
    case 3:
      half(numerosA);
      break;
    case 4:
      oddSum(numerosA);
      break;
    case 5:
      let number = window.prompt("¿Los divisibles del nº ? ");
      divisible(numerosA, number);
      break;
    case 6:
      let percentage = window.prompt("Indica el porcentaje: "); 
      increment(numerosB, percentage);
      break;
    case 7:
      product(numerosA, numerosB);
      break;
    case 8:
      foreInsert([100, 110, 310, 420, 530]);
      break;
    case 9:
      sumTable(tabla);
      break;
    case 10:
      sumRow(tabla, 2);
      break;
    default:
      alert("Opcion invalida, introduzca un numero desde el 0 hasta el 10");
      break;
  }
} 

/**
 * howManyPairs()
 * In this function we are going to calculate how many even numbers are contained in an array
 */
function howManyPairs() {
  let numPairs = 0;
  numerosA.forEach( element => {
    if (element % 2 == 0) {
      numPairs++;
    }
  });
  window.alert("El nº de pares es :" + numPairs );
}

/**
 * biggerNumber()
 * In this function according to the "numerosB" arrangement we will see which is the largest number
 * 
 */
function biggerNumber() {
  let biggerNumber = numerosB[0];
  numerosB.forEach( element => {
    if (biggerNumber < element) {
      biggerNumber = element;
    }
  });
  window.alert("El nº mayor es : " + biggerNumber );
}

/**
 * half(array)
 * In this function, when passing an array, we will see what the average of this is.
 * @param {elements[]} array type int
 */
function half(array) {
  let elementsTotals = array.length;
  let sumArray = 0;
  array.forEach( element => {
    sumArray += element; 
  });
  let half = sumArray / elementsTotals;
  window.alert("La media es : " + half );
}

/**
 * oddSum(array)
 * In this function, when passing an array we will make a sum based on the odd elements
 * @param {elements[]} array type int
 */
function oddSum(array) {

  let sumElementsOdd = 0;
  array.forEach( element => {
    if(element % 2 != 0){
      sumElementsOdd += element; 
    }
  });
  window.alert("El total de impares es : " + sumElementsOdd );
}

/**
 * divisibles(array, number)
 * This function, based on a number passed to it by the user, will calculate which numbers are divisible based on the number passed by the user.
 * @param {elements[]} array type int
 * @param {int} number int
 */
function divisibles(array, number) {
  let numberDivisible = [];
  array.forEach( element => {
    if(element % number == 0){
      numberDivisible.push(element); 
    }
  });
  window.alert("Los numeros divisibles por " + number + " son :\n " + numberDivisible);
}

/**
 * increment(array, porcentage)
 * This function, based on a percentage that the user entered, that percentage will be added to an array that we pass to the function
 * @param {elements[]} array type int
 * @param {float} porcentage number porcentage
 */
function increment(array, porcentage) {
  porcentage = porcentage/100;
  let auxiliarArray = array; // I am declaring an auxiliary variable to save an array of constant type (numerosA) and that can be modified.
  let newArrayPorcentage = [];
  auxiliarArray.forEach( element => {
    newArrayPorcentage.push(element + element * porcentage);
  });
  console.log(newArrayPorcentage);
}


/**
 * product(array1, array2)
 * In this function we will pass arrays where we will multiply the elements of the two arrays 
 * @param {elements[]} array1 type int
 * @param {elements[]} array2 type int
 */
function product(array1, array2) {
  let multiplicationArrays = [];
  array1.forEach( i => {
    array2.forEach( j => {
      multiplicationArrays.push(i * j);
    });
  });
  console.log(multiplicationArrays);
}

/**
 * foreInsert(array)
 * In this function we will insert an array to the array called "numerosB"
 * @param {elements[]} array type int
 */
function foreInsert(array) {
  array.forEach( x => {
    numerosB.unshift(x);
  });
  console.log(numerosB);
}

/**
 * sumTable(table)
 * In this function we sum all the elements of a matrix, or an array of dimensions
 * @param {elements[]} table type int
 */
function sumTable(table) {
  let result = 0;
  for(let i = 0; i < table.length; i++){
    for (let j = 0; j < table[i].length; j++) {
      result += table[i][j];
    }
  }
  console.log("la suma es: " + result); 
}

/**
 * sumRow(table, row)
 * In this function we will sum the elements of a row
 * @param {elements[]} table type int
 * @param {number} row number row of array 
 */
function sumRow(table, row) {
  let result = 0;
  for (let i = 0; i < table[row].length; i++) {
    result += table[row][i];    
  }
  console.log("la suma es: " + result); 
}

