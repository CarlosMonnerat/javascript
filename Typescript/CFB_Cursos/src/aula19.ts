// P.O.O - Modificadores de Acesso

class Computador {
    public nome: string; //Podemos usar 'public', mas quando não é atribuido nenhum modificador de acesso, já é automaticamente 'public'
    private ram: number;
    private cpu: number;
    private ligado: boolean;    //'private' define que a propriedade não pode ser acessada fora da Classe

    constructor(n: string, r: number, c: number){
        this.nome = n;          //'this' se refere à classe 'Computador'
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }

    info(): void{
        console.log(`Nome..: ${this.nome}`);
        console.log(`Ram...: ${this.ram}`);
        console.log(`CPU...: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("------------------------");
    }

    ligar(): void {
        this.ligado = true;
    }

    desligar(): void {
        this.ligado = false;
    }

    upRam(qtde: number): void{
        if(qtde >= 0 && qtde <= 1000){
            this.ram = qtde;
        }else{
            console.log(`Quantidade ${qtde} para o computador '${this.nome}' não é permitida`);
        }
        
    }
};

//Instanciar
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);

comp1.ligar();
comp3.ligar();
comp1.desligar();

// comp2.ligado = true; //Não é possível acessar à propriedade 'ligado' fora da Classe, pois ela foi definida como 'private'
comp1.nome = "Super Rápido";
comp1.upRam(128);


comp1.info();
comp2.info();
comp3.info();