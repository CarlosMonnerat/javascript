class Cpu{
    constructor(ctx,bola){
        this.ctx=ctx
        this.bola=bola
        this.larg=20
        this.alt=130
        this.x=(this.ctx.canvas.width-this.larg)
        this.y=(this.ctx.canvas.height/2)-(this.alt/2)
        this.vel=5
        this.Xo=this.x
        this.Yo=this.y
        this.pc=Math.random()*this.alt  //Variável para variar o ponto de colisão da barra com a bola (Ponto de Colisão)
        
    }
    
    gerenciar(){
        //MOVIMENTAÇÃO
       if(this.bola.dirX >0 && this.bola.x > this.ctx.canvas.width/2){  //Se Bola vai p/ direita & já passou da medade do campo
           //Ir ao encontro da bola
           if(this.bola.y + (this.bola.alt/2) > this.y + this.pc){               //Se o centro da Bola está abaixo do 'Ponto de Colisão' da CPU
               this.y+=this.vel
           }
           if(this.bola.y + (this.bola.alt/2) < this.y + this.pc){               //Se o centro da Bola está acima do 'Ponto de Colisão' da CPU
               this.y-=this.vel
           }
           if(this.bola.x + this.bola.larg < this.x){                            //Se a Bola está a frente da CPU
               this.x-=this.vel
           }
        }else{
            //Volta para a origem
            if(this.y > this.Yo){
                this.y-=this.vel
            }
            if(this.y < this.Yo){
                this.y+=this.vel
            }
            if(this.x > this.Xo){
                this.x-=this.vel
            }
            if(this.x < this.Xo){
                this.x+=this.vel
            }
       }
       //COLISÃO COM A BOLA
       if(
            (this.x <= this.bola.x + this.bola.larg && this.x + this.larg >= this.bola.x)&&
            (this.y + this.alt >= this.bola.y && this.y <= this.bola.y + this.bola.alt)
        ){
            this.bola.dirX*=-1
            this.bola.dirY*=((this.bola.y+(this.bola.alt/2)-(this.y+(this.alt/2))))/16
            this.pc=Math.random()*this.alt
        }

    }

    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.larg,this.alt)

    }
}