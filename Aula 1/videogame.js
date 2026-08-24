class Videogame {

    constructor(marca, nControles, tipoMidia) {
        this.marca = marca;
        this.nControles = nControles;
        this.tipoMidia = tipoMidia;
        this.ligado = false;
    }

    ligar(estado) {
        this.ligado = estado;
        console.log(this.marca + (estado ? " Ligado!" : " Desligado"));
    }

    jogar(){
        if (this.ligado){
            console.log("Jogando no " + this.marca + "...");
        }else{
            console.log("Ligue o videogame antes de jogar!")
        }
    }

    salvarJogos(){
        if(this.ligado){
            console.log("Jogo salvo com sucesso no " + this.marca + "!")
        }else{
            console.log("Não é possivel salvar com o game desligado!!!")
        }
    }
}

var ps4 = new Videogame('PS4','2','dvd');

ps4.jogar();
ps4.ligar(true);
ps4.jogar();
ps4.salvarJogos();
ps4.ligar(false);
ps4.salvarJogos();

console.log("")

var xbox = new Videogame('XBOX','4','digital');

xbox.ligar(true);
xbox.jogar();
xbox.salvarJogos();
xbox.ligar(false);
xbox.jogar();