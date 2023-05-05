//Declarar uma variável com a palavra reservada var.
var nr1 = "10"
var nr2 = "6"
var resultado;

resultado = !(parseInt(nr1) % parseInt(nr2)) ? "PAR" : "IMPAR"
console.log("O NÚMERO É: " + (resultado));

//Vamos imprimir as variáveis com o objeto console.
console.log(nr1);
console.log(nr2);

//Realizando as operações básicas com estes valores:
// + / - / * e /

//REALIZE A CONCATENAÇÃO COM O TEXTO RESULTADO:
//EX: console.log(RESULTADO nr1 + nr2);

//ADIÇÃO
console.log("RESULTADO ADIÇÃ0: " + (nr1 + nr2));
console.log("RESULTADO ADIÇÃO: " + (parseInt(nr1) + parseInt(nr2)));
console.log(`RESULTADO ADIÇÃO: ${parseInt(nr1) + parseInt(nr2)}`);

//SUBTRAÇÃO
console.log("RESULTADO SUBTRAÇÃO: " + (parseInt(nr1) - parseInt(nr2)));

//MULTIPLICAÇÃO
console.log("RESULTADO MULTIPLIÇÃO: " + (parseInt(nr1) * parseInt(nr2)));

//DIVISÃO
console.log("RESULTADO DIVISÃO: " + (parseInt(nr1) / parseInt(nr2)));

//OBTENHA O RESTO DA DIVISÃO
console.log("RESULTADO RESTO DA DIVISÃO: " + (parseInt(nr1) % parseInt(nr2)));

//DIFERENÇA ENTRE VAR/LET/CONST
var nome1 = "Beatriz";
let nome2 = "Matheus";
const nome3 = "Violante";

//REGRAS DO CONST
//1ª Regra = Inicializar na declaração
//2ª Regra = Não pode ser alterado durante o fluxo do programa. Utilzar apenas com constantes (ex: Número pi)

//USO DO VAR DENTRO DO ESCOPO
//var nome = "João"
//if(nome != ""){
//    var nome = "Pedro";
//console.log(nome);
//}

//USO DO VAR FORA DO ESCOPO
//var nome = "João"
//if(nome != ""){
//    var nome = "Pedro";
//}
//console.log(nome);

//USO DO LET DENTRO DO ESCOPO
//let nome = "João"
//if(nome != ""){
//    let nome = "Pedro";
//}
//console.log(nome);

//USO DO LET DENTRO FORA DO ESCOPO
//let nome = "João"
//if(nome != ""){
//    let nome = "Pedro";
//    console.log(nome);
//}

