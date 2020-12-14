class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }

    

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x < 220){
                strokeWeight(8);
                stroke(81, 38, 14);
                line(pointA.x-20, pointA.y+5, pointB.x-10, pointB.y+15);
                line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+15);
                image(this.sling3,pointA.x-25,pointA.y,10,10);
            }
            else{
                strokeWeight(8);
            stroke(81, 38, 14);
            line(pointA.x-20, pointA.y+5, pointB.x-10, pointB.y+15);
            line(pointA.x+20, pointA.y, pointB.x+20, pointB.y+15);
            image(this.sling3,pointA.x+25,pointA.y,10,10);
            }
        }

        image(this.sling1,200,70,35,150);
        image(this.sling2,175,75,35,80);
    }
    
}