document.write("<h1>Teste de document.write()</h1>");
////////////////////////////////////////////////////////////////////////

function entrar() {
    var area2 = document.getElementById('area2');
    var texto = prompt('Digite seu nome?');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area2.innerHTML = 'Bem vindo ...';
    }else{
        area2.innerHTML = 'Bem vindo ' + texto;
    }
}

function entrar3(nome) {
    var area3 = document.getElementById('area3');
    var texto3 = prompt('Digite seu nome?');

    if(texto3 == '' || texto3 == null){
        alert('Digite seu nome novamente!');
        area3.innerHTML = 'Bem vindo ...';
    }else{
        area3.innerHTML = nome + ' ' + texto3;
    }
}

function acaoTemporizador() {
    document.write("Executando .... <br/>")
}

// setInterval(acaoTemporizador, 1000);
// setTimeout(acaoTemporizador, 3000);

// var timer = setInterval(acaoTemporizador, 500);
// setTimeout(function () {
//     clearInterval(timer);
// }, 5000);

var nome = '';
if (typeof localStorage.nome == 'undefined' || localStorage.nome == null || localStorage.nome == ''){
    localStorage.nome = prompt("Digite seu nome?");
    // sessionStorage.nome = 'Teste';
}

nome = localStorage.getItem("nome");

document.getElementById("name").innerHTML = nome;
// localStorage.removeItem("nome");


/* Descontruindo objetos */
const pessoa = {
    _nome: "Matheus",
    _sobrenome: "Fraga",
    _idade: 25,
    _cargo: "Desenvolvedor"
};
let { _nome } = pessoa;
console.log(_nome);
let { _nome:nome2 } = pessoa;
console.log(nome2);

/* Descontruindo arrays */
const lista = ["Marcio", "Oséias", 23];
let { 1:segundoNome } = lista;
console.log(segundoNome);
let [ primeiroNome2 ] = lista;
console.log(primeiroNome2);

/* Spread Operator */
let primeiros = [1, 2, 3];
let numeros = [...primeiros, 4, 5, 6];
console.log(numeros);
let pessoa2 = {
    nome: "Daiana",
    idade: 22,
    cargo: "Programadora"
};
let novaPessoa2 = {
    ...pessoa2,
    anoAtual: 2050,
    cidade: "Campo Grande"
};
console.log(novaPessoa2);

function cadastroPessoa(params) {
    let novosDados = {
        ...params,
        teste: "Teste de cadastro",
        alteracao: "true"
    };
    return novosDados;
}
let t = cadastroPessoa({nome: "Reinaldo", sobrenome: "Oliveira", anoInicio: 2054});
console.log(t);

/* Rest Operator */
function minhaLista(...nomes) {
    console.log(nomes);
}
minhaLista("Raj", "Teodoro", "Oliveira")

function cadastrar(usuarios, ...novosUsuarios) {
    return [...usuarios, ...novosUsuarios];
}

let usuarios = ["Matheus", "Joao"];
let novosUsuarios = cadastrar(usuarios, "Henrique", "Lucas");
console.log(novosUsuarios);

// Operacao com arrays
const listaNumeros = [1, 2, 3, 4, 5, 6];

let novaListaNumeros = listaNumeros.map(function (item) {
    return item * 5;
});
console.log(novaListaNumeros);
novaListaNumeros = listaNumeros.map(function (item, index) {
    return item + index;
});
console.log(novaListaNumeros);
const soma = listaNumeros.reduce(function (total, proximo) {
    return total + proximo;
});
console.log(soma);
const find = listaNumeros.find(function (item) {
    // return item === 50;
    return item === 6;
});
console.log(find);