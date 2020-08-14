class Droplet{
    constructor(xMin, xMax){
        var options = {
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        } 

        this.x = random(xMin,xMax);
        this.xMin = xMin;
        this.xMax = xMax;

        this.body = Bodies.circle(this.x,-10,5,options);
        Worldi.add(world,this.body);
    }

    display(){
        fill("blue");
        ellipse(this.body.position.x,this.body.position.y,5);
        if(this.body.position.y > 700){
            this.body.position.x = random(this.xMin,this.xMax);
            this.body.position.y = -10;
            dropletCount--;
        }

    }
}