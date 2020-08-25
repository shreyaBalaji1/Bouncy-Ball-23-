class Box{
    //properties
    constructor(x, y, width, height){
        var options = {
            restitution:1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        //Add this new setting
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(255);
        rect(0, 0, this.width, this.height);
        //Come back to the old setting
        pop();
    }

}

/*
rotate() - rotation about an angle
translate() - Moving without rotation - about an axis

push() - adds a new setting
pop() - reverts back to the old setting
*/