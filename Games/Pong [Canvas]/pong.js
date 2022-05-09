class Pad{
    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.larg=20
        this.alt=130
        this.x=0
        this.y=(this.ctx.canvas.height/2)-(this.alt/2)
        this.vel=5
        
    }
    
    gerenciar(){
        if(this.teclado.esquerda){
            if(this.x > 0)                                  //Limita a Lateral esquerda do Canvas
                this.x-=this.vel
        }
        if(this.teclado.direita){
            if(this.x < (this.ctx.canvas.width/4)-this.larg)   //Limita a Lateral direita do Canvas
                this.x+=this.vel
        }
        if(this.teclado.cima){
            if(this.y > 0)                                  //Limita a parte superior do Canvas
                this.y-=this.vel
        }
        if(this.teclado.baixo){
            if(this.y < this.ctx.canvas.height-this.alt)  //Limita a parte inferior do Canvas
                this.y+=this.vel
        }
    }

    desenhar(){
        this.gerenciar()
        this.ctx.fillStyle="#000"
        this.ctx.fillRect(this.x,this.y,this.larg,this.alt)

    }
}