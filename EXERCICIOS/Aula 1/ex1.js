
//Crie a classe Aluno Herdando a classe Pessoa.
//Crie o atributo ra como privado
//Adicione os métodos get e set do ra.
//Crie um objeto do tipo aluno e testes os métodos
//get e set ra.
class Pessoa {
#nome = "";
constructor(nome) {
this.#nome = nome;
}
get nome() {
return this.#nome;
}
set nome(nome) {
this.#nome = nome;
}
}
class Aluno extends Pessoa {
#ra = "";
constructor(nome, ra) {
super(nome);
this.#ra = ra;
}
get ra() {
return this.#ra;
}
set ra(ra) {
this.#ra = ra;
}
}
const aluno = new Aluno("Fulano", 123456);
console.log(aluno.nome); // Fulano
console.log(aluno.ra); // 123456
aluno.ra = 654321;
console.log(aluno.ra); // 654321
