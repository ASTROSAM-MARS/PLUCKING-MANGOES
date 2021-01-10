class mango {
    constructor(x,y,diameter){
        var options = {
            isStatic : true, 
            restitution : 0.7,
            friction : 1
        }
        this.body = Bodies.circle(x,y,diameter/2-30, options);
        this.di = diameter/2;
        this.radius =(diameter/2-30)/2;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.di, this.di);
    }
}