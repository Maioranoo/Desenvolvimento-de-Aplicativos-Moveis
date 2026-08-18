class FuncionariosDoHospital {
    #nome;
    #numeroRestantesDeFerias;

    constructor(nome) {
        this.#nome = nome;
        this.#numeroRestantesDeFerias = 20;
    }

    tirarFerias(num_dias) {
        if (num_dias <= this.#numeroRestantesDeFerias) {
            this.#numeroRestantesDeFerias -= num_dias;
            console.log(`${num_dias} dias de férias tirados.`);
        } else {
            console.log("Você não possui dias de férias suficientes.");
        }
    }
}  

class Medico extends FuncionariosDoHospital {
    #cpf;

    constructor(nome, cpf) {
        super(nome);
        this.#cpf = cpf;
    }
}

class Enfermeira extends FuncionariosDoHospital {
    #certificados;

    constructor(nome, certificados = []) {
        super(nome);
        this.#certificados = certificados;
    }

    adicionarCertificado(certificado) {
        this.#certificados.push(certificado);
        console.log(`Certificado "${certificado}" adicionado.`);
    }
}

let medico = new Medico("Carlos", "123.456.789-00");

medico.tirarFerias(5);

console.log("");

let enfermeira = new Enfermeira("Ana");

enfermeira.tirarFerias(20);
enfermeira.adicionarCertificado("UTI");
enfermeira.adicionarCertificado("Primeiros Socorros");