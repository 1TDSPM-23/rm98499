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

console.log(nome1);
console.log(nome2);
console.log(nome3);

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

//ARRAY e seus métodos
let frutas = ["banana", "maça", "kiwi", "melância", "morango", "laranja"];
console.table(frutas);
console.log(frutas);

//Adicionar um item ao final do array com o método push(item);
frutas.push("melão");
console.log(frutas);

//Adicionar um item no início do array com o método unshift(item);
frutas.unshift("cajú");
console.log(frutas);

//Remover um item do final do array com o método pop();
frutas.pop();
console.log(frutas);

//Remover um item do início do array com o método shift();
frutas.shift();
console.log(frutas);

//Para localizar um item dentro do array, utilizamos o método indexOf(itenNome);
//let indice = frutas.indexOf("morango");
//console.log(frutas[indice]);

//Para localizar um itém dentro do array, e apagar ele apagar ele utilizamos o método splice(indice do item, quantidade de vezes que o indice será removido).
//Obs: utilize o método indexOf(itenNome) para obter o indice do iten;
let indice = frutas.indexOf("carambola");
frutas.splice(indice,1);
console.log(frutas);

frutas.forEach((fruta)=>{
    console.log("A fruta escolhida foi: " + fruta);
});
