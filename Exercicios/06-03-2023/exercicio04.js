class Pessoa {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`);
  }
}

let pessoa1 = new Pessoa("Adalberto", 30, "Engenheiro de Produção");
pessoa1.exibirInfo();