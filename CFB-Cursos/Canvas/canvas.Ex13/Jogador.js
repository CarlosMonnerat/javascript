class Jogador{
    constructor(ctx,teclado){
        this.ctx=ctx
        this.teclado=teclado
        this.x=0
        this.y=0
        this.vel=3
        this.lnave=100
        this.anave=100
        this.nave=new Image()
        this.nave.src="nave.jpg"
        this.nave.addEventListener('load',()=>{
            this.desenhar()
        })
    }
    
    gerenciar(){
        if(this.teclado.esquerda){
            if(this.x > 0)                                  //Limita a Lateral esquerda do Canvas
                this.x-=this.vel
        }
        if(this.teclado.direita){
            if(this.x < this.ctx.canvas.width-this.lnave)   //Limita a Lateral direita do Canvas
                this.x+=this.vel
        }
        if(this.teclado.cima){
            if(this.y > 0)                                  //Limita a parte superior do Canvas
                this.y-=this.vel
        }
        if(this.teclado.baixo){
            if(this.y < this.ctx.canvas.height-this.anave)  //Limita a parte inferior do Canvas
                this.y+=this.vel
        }
    }

    desenhar(){
        this.gerenciar()
        this.ctx.drawImage(this.nave,this.x,this.y,this.lnave,this.anave)

    }
}