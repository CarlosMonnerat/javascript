// Métodos GETTER e SETTER
//Classes Abstratas

abstract class Contas {     // 'abstract' indica que a classe funciona apenas como base, e não pode ser criado um obj dessa Classe
    private readonly numero: number;
    protected titular: string;
    private saldoConta: number;
    
    constructor(titular: string) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    };

    private gerarNumeroConta(): number {
        return Math.floor(Math.random()*100000)+1;
    };

    protected info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    };

    get saldo(): number {       //'GETTER' permite que o método possa ser acessado como uma propriedade e não como função
        return this.saldoConta;
    };

    private set saldo(saldoConta: number) { // 'SETTER' permite setar um valor para uma variável
        this.saldoConta = saldoConta;
    };

    protected deposito(valor: number) {
        if(valor < 0){
            console.log(`Valor Inválido`);
            return;
        }
        this.saldo += valor;
        console.log(`Depósito realizado com sucesso`);
    };

    protected saque(valor: number) {
        if(valor < 0){
            console.log(`Valor Inválido`);
            return;
        }
        if(valor <= this.saldoConta){
            this.saldo -= valor;
            console.log(`Saque realizado com sucesso`);
        }else{
            console.log(`Saldo insuficiente`);
        }       
    };
};

//Classes filhas da Classe Contas
class Cont_PF extends Contas {
    cpf: number;
    constructor(cpf: number, titular: string) {
        super(titular);           // 'super' faz referência ao constructor da classe pai. Repassa os parâmetros para a Classe Pai
        this.cpf = cpf;
    };

    info(){
        console.log(`Tipo...: Pessoa Física`);
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log(`--------------------------`);
    };

    public deposito(valor: number) {
        if(valor > 1000){
            console.log(`Valor muito alto para este tipo de conta`);
        }else{
            super.deposito(valor);
        }
    };

    public saque(valor: number) {
        if(valor > 1000){
            console.log(`Valor muito alto para este tipo de conta`);
        }else{
            super.saque(valor);
        }
    };
};

class Cont_PJ extends Contas {
    cnpj: number;
    constructor(cnpj: number,titular: string) {
        super(titular);
        this.cnpj = cnpj;
    };

    info(){
        console.log(`Tipo...: Pessoa Jurídica`);
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log(`--------------------------`);
    };

    public deposito(valor: number) {
        if(valor > 10000){
            console.log(`Valor muito alto para este tipo de conta`);
        }else{
            super.deposito(valor);
        }
    };

    public saque(valor: number) {
        if(valor > 10000){
            console.log(`Valor muito alto para este tipo de conta`);
        }else{
            super.saque(valor);
        }
    };
}

const conta3 = new Cont_PF(1111111,"Carlos");
const conta4 = new Cont_PJ(2222222,"CFBCursos");
//const conta5 = new Contas ("Clark");  //Nao pode ser instanciada, pois a Classe 'Contas' é abstrata


conta3.deposito(800);
conta3.deposito(500);
conta3.deposito(700);

console.log(conta3.saldo); //Saldo acessado como uma propriedade e não como método

conta3.info();