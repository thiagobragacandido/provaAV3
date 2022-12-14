class Veiculo {
    constructor(rodas,combustivel,cor){
        this.rodas = rodas;
        this.combustivel = combustivel;
        this.cor = cor;
    }
    frear () {
        console.log('freou');
    }
}

class Caminhao extends Veiculo {
    constructor(rodas,combustivel,cor,tamanho){
        super(rodas,combustivel,cor);
        this.tamanho = tamanho;
    }
    frear () {
        super.frear();
        console.log(6,rodas,combustivel + this.rodas + 'rodas');
    }
    acelerar () {
        super.frear();
        console.log(4,rodas,combustivel + this.rodas + 'rodas' );
    }
}
const mercedes = new Caminhao (4,'gasolina', 'vermelho',400, true);
const bmw = new Veiculo (4,5,'azul', true);