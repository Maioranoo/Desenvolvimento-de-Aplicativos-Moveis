class Data {
    #dia;
    #mes;
    #ano;

    constructor(dia, mes, ano) {
        this.#dia = dia;
        this.#mes = mes;
        this.#ano = ano;
    }

    toString() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`;
    }
}

class Pessoa {
    #nome;
    #cpf;
    #nascimento;

    constructor(nome, cpf, nascimento) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#nascimento = nascimento;
    }

    getNome() {
        return this.#nome;
    }

    toString() {
        return `Nome: ${this.#nome}, CPF: ${this.#cpf}, Nascimento: ${this.#nascimento.toString()}`;
    }
}

class Funcionario extends Pessoa {
    #admissao;
    #salario;

    constructor(nome, cpf, nascimento, admissao, salario) {
        super(nome, cpf, nascimento);
        this.#admissao = admissao;
        this.#salario = salario;
    }

    getSalario() {
        return this.#salario;
    }

    toString() {
        return `${super.toString()}, Admissão: ${this.#admissao.toString()}, Salário: ${this.#salario}`;
    }
}

class Gerente extends Funcionario {
    #departamento;
    #promocaoGerente;

    constructor(nome, cpf, nascimento, admissao, salario, departamento, promocaoGerente) {
        super(nome, cpf, nascimento, admissao, salario);
        this.#departamento = departamento;
        this.#promocaoGerente = promocaoGerente;
    }

    getDepartamento() {
        return this.#departamento;
    }

    toString() {
        return `${super.toString()}, Departamento: ${this.#departamento}, Promoção a Gerente: ${this.#promocaoGerente.toString()}`;
    }
}

const nascimento = new Data(10, 5, 1985);
const admissao = new Data(1, 3, 2010);
const promocao = new Data(15, 8, 2018);

const gerente = new Gerente("Mariana Souza", 12345678900, nascimento, admissao, 8500, 4, promocao);

console.log(gerente.toString());
console.log(gerente.getNome());
console.log(gerente.getSalario());
console.log(gerente.getDepartamento());
