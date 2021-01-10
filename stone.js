class stone{
    constructor(){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(180, 500, 20, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 50,50);
    }
}


