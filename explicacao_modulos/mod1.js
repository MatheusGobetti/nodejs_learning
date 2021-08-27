class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

const sobrenome = 'Gobetti';
const idade = 20;

exports.Pessoa = Pessoa;
exports.sobrenome = sobrenome; 
exports.idade = idade;


// const nome = 'Matheus';
// const sobrenome = 'Gobetti';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;

// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;

// this.qualquerCoisa = 'O que eu quiser exportar';

// console.log(exports);