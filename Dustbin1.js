class Dustbin1{  
    constructor(x,y,width,height){
var props={
    isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,props)
this.x=x
this.y=y
this.width=width
this.height=height
World.add(world,this.body)

    }

display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}
