class drop{
    constructor(x,y){
        var options={
            density:1,
            restitution:.1,
            friction:1.2,
            isStatic:false
            //isStatic:false
        }
        this.x=x
        this.y=y
        this.body=Bodies.circle(this.x,this.y,5,options)
        World.add(world,this.body)
        //circle(this.x,this.y)
    }
    updateY(){     
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,600)})
        }
    }
        
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(RADIUS)
        fill("blue")
        circle(0,0,5)
        pop();
    }
}