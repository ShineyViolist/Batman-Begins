class Umbrella {
   constructor(x,y){
        var options = {
            isStatic: true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        this.body = Bodies.circle(x,y,50,options);
        Worldi.add(world,this.body);
        this.radius = 50;
        this.image = loadImage("images/boy.png");
    } 

    display(){
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y + 35);
        //ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}