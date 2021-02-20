class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic : false,
            restitution :0.3,
            friction :0.8,
            density : 1.2,
            

        }
        this.body = Bodies.circle(x,y,5,options);

        //this.radius = radius;
        this.image = loadImage("paper.png");

        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle  = this.body.angle;

        push();
        //fill("Magenta");
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,30,30);
        //ellipseMode(RADIUS);
        
        //ellipse(pos.x,pos.y,this.radius,this.radius);

        pop();
    }
}