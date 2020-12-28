class umb{
    constructor(x,y){
        var options={
            density:1,
            restitution:1,
            friction:1.2,
            isStatic:true
            //isStatic:false
        }
        this.x=x
        this.y=y
        this.body=Bodies.circle(235,400,65,options)
        this.t=loadImage("walking_1.png")
        World.add(world,this.body)
    }
    
        
    display(){
        imageMode(CENTER)
        ellipseMode(RADIUS)
        //ellipse(235,400,65,65)
        image(this.t,230,450,300,300)
    }
}

