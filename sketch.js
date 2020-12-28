const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,t;
var maxDrops=100;
drops=[];


function preload(){
    one=loadImage("thunder/1.png")
    two=loadImage("thunder/2.png")
    three=loadImage("thunder/3.png")
    four=loadImage("thunder/4.png")

}

function setup(){
   createCanvas(600,600);
   t=createSprite(random(10,550),30,20,20)
   engine=Engine.create();
   world=engine.world;
   Engine.run(engine);
   b=new umb(230,350);
   for(var i=0; i<maxDrops; i++){
    drops.push(new drop(random(0,400), random(0,400)));
}
}
function draw(){
    background("black")
    b.display();
    //r.display();
    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY()
    }
    addt();    
    drawSprites();
}   


function addt(){

if(frameCount%50===0){
t.x=random(100,500)
t.scale=0.5
 var x = Math.round(random(1,4));
 if(x=1){
     t.addImage(one)
 }
 if(x=2){
    t.addImage(two)
 }
 if(x=3){
    t.addImage(three)
 }
 if(x=4){
    t.addImage(four)
 }
}
}
