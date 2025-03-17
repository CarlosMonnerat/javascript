// HERANÇA
    //Public: Acessado de qualquer lugar
    //Private: Acessado somente na sua própria classe
    //Protected: Acessado somente na sua própria classe e nas classes filhas

class Conta {
    protected numero: number;
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

    public saldo(): number {
        return this.saldoConta;
    };

    protected deposito(valor: number) {
        if(valor < 0){
            console.log(`Valor Inválido`);
            return;
        }
        this.saldoConta += valor;
        console.log(`Depósito realizado com sucesso`);
    };

    protected saque(valor: number) {
        if(valor < 0){
            console.log(`Valor Inválido`);
            return;
        }
        if(valor <= this.saldoConta){
            this.saldoConta -= valor;
            console.log(`Saque realizado com sucesso`);
        }else{
            console.log(`Saldo insuficiente`);
        }       
    };
};

//Classes filhas da Classe Conta
class ContaPF extends Conta {
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

class ContaPJ extends Conta {
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

const conta1 = new ContaPF(1111111,"Carlos");
const conta2 = new ContaPJ(2222222,"CFBCursos");

// conta1.deposito(200);
// conta1.deposito(800);
// conta1.deposito(1000);
// conta1.saque(1000);
// conta1.saque(500);
// conta1.saque(500);
// conta1.saque(50);
// console.log(conta1.saldo());



conta2.deposito(-5000);
conta2.deposito(10000);
conta2.deposito(5000);
console.log(conta2.saldo());
console.log("---------------");
// conta2.saque(5000);
// conta2.saque(5000);
// conta2.saque(10000);
conta2.saque(1000);
console.log(conta2.saldo());



// conta1.info();
// conta2.info();
