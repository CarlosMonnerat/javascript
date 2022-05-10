class Bola{
    constructor(ctx,jogador){
        this.ctx=ctx
        this.jogador=jogador
        this.move=false
        this.dirX=0
        this.dirY=0
        this.vel=3
        this.larg=20
        this.alt=20
        this.x=(this.ctx.canvas.width/2)-(this.larg/2)
        this.y=(this.ctx.canvas.height/2)-(this.alt/2)
        
        
    }

    iniciar(){
        this.move=true
        this.dirX=(Math.random()*10 > 5 ? 1 : -1)
        this.dirY=(Math.random()*10 > 5 ? 1 : -1)
    }
    
    gerenciar(){
        //MOVIMENTAÇÃO
        if(this.move){
            this.x+=(this.dirX*this.vel)
            this.y+=(this.dirY*this.vel)
        //LIMITANDO AS BORDAS
            if(this.x >= this.ctx.canvas.width-this.larg){      //Limita a lateral Direita
                this.dirX=-1
                pj1++
                this.resetarBola()
                
            }
            if(this.x <= 0){                                    //Limita a lateral Esquerda
                this.dirX=1
                pj2++
                this.resetarBola()
            }
            if((this.y + this.alt) >= this.ctx.canvas.height){      //Limita a parte Inferior
                this.dirY*=-1
            }
            if(this.y <= 0){                                    //Limita a parte Superior
                this.dirY*=-1
            }
        //COLISÃO COM A BARRA DO PLAYER
            if(
                (this.x <= this.jogador.x + this.jogador.larg && this.x + this.larg >= this.jogador.x)&&
                (this.y + this.alt >= this.jogador.y && this.y <= this.jogador.y + this.jogador.alt)
            ){
                this.dirX*=-1
                this.dirY=((this.y+(this.alt/2))-(this.jogador.y+(this.jogador.alt/2)))/16
            }
        }
    }

    resetarBola(){
        this.move=false
        this.x=(this.ctx.canvas.width/2)-(this.larg/2)
        this.y=(this.ctx.canvas.height/2)-(this.alt/2)
        jogador.x=0
        jogador.y=(this.ctx.canvas.height/2)-(jogador.alt/2)
        
    }

    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.larg,this.alt)

    }
}