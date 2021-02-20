class Dustbin{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution :0,
            friction :0.5,
            density : 3

        }
        this.bottomWall = Bodies.rectangle(x,y,100,10,options);
        this.bwidth  = 100;
        this.bheight  = 10;

        this.sidewidth = 10,
        this.sideheight = 50;

        this.leftWall = Bodies.rectangle(x-55,y-25,10,50,options);
        this.rightWall  = Bodies.rectangle(x+55,y-25,10,50,options);

        this.image = loadImage("trashcangreen.png");

        World.add(myWorld,this.bottomWall);
        World.add(myWorld,this.leftWall);
        World.add(myWorld,this.rightWall)

    }

    display(){
        var bpos = this.bottomWall.position;
        var lpos = this.leftWall.position;
        var rpos = this.rightWall.position;

        image(this.image,bpos.x-17,bpos.y-90,100,100);
    }
}