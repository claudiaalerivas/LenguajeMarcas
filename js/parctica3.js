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
      media();
      break;
    case 4:
      sumaImpares();
      break;
    case 5:
      divisibles();
      break;
    case 6:
      incrementar();
      break;
    case 7:
      producto();
      break;
    case 8:
      foreInsert();
      break;
    case 9:
      sumaTable();
      break;
    case 10:
      sumaFila();
      break;
    default:
      alert("Opcion invalida, introduzca un numero desde el 0 hasta el 10");
      break;
  }
} 

const numerosA = [4, 5, 6, 10, 13, 25];
let numerosB = [4, 6, 8, 5];
const tabla = [
  [10, 20, 30, 40],
  [20, 30, 40, 50],
  [60, 70, 80, 90],
];

// Funcion cuantosPares
function cuantosPares() {
  let numPares = 0;
  numerosA.forEach( x => {
    console.log(x);
    if (x % 2 == 0) {
      numPares++;
    }
    window.alert("El nº de pares es :" + numPares );
  });
}