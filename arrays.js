let frutas = ['laranja', 'lima', 'limão','banana', 'uva']
frutas.forEach(function (frutas, indice){
    console.log (frutas, indice)
})
var pos = frutas.indexOf('banana');
console.log(pos);

frutas.push('morango');
console.log(frutas);

frutas.unshift('pera');
console.log(frutas);

frutas.shift();
console.log(frutas);
frutas.pop()

// funções called back

function executarPasso1(nome, callback){
    var acao = "Buscar café -> " +nome;
    callback(acao);
}
function executarPasso2(acao){
    console.log(acao);
console.log("Fazer ligação enquanto toma café...");
}
executarPasso1("Pedro", executarPasso2);

// Função Anônima

executarPasso1("Pedro", (acao)=>{
    console.log (acao);
    console.log("Fazer ligação enquanto toma café...");
});

// SetTimeout

function verificaServidor(){
    console.log('verificando servidor...')
}
setTimeout(verificaServidor, 10000);

//Funão Anônima

setTimeout (() => {
   
},10000);

// SetInterval

setInterval (() =>{
    console.log('Estou utilizando a função setInterval')
},3000);

// Foreach, filter e map

let alunos = ['Gisele', 'Pedro','Adriana', 'Pedro', 'Alex', 'Berg']
alunos.forEach(function(aluno, indice){
    console.log(aluno,indice)
})
constalunosAtualizados = alunos.map((aluno,index)=>{
    returnaluno+' -> '+index;
});
console.log (alunosAtualizados)
const alunos = alunos.filter(aluno=>{
    returnaluno !== 'Pedro'
}
);
console.log(alunos)