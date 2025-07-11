class Placar{
    constructor(ctx){
        this.ctx=ctx
        this.direita=this.ctx.canvas.width
        this.margem=10
        this.largMax=100
        this.posx1=330
        this.posy1=this.largMax
        this.posx2=630
        this.posy2=this.largMax
    }

    desenhar(){
        this.ctx.font="70px arial"
        this.ctx.fillStyle="#000"
        this.ctx.strokeText(pj1,this.posx1,this.posy1,this.largMax) //("texto", PosX,Posy, LarguraMáx)
        this.ctx.strokeText(pj2,this.posx2,this.posy2,this.largMax)

    }
}