class Box
{
    constructor(x,y,w,h)
    {
        var options= {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w;
        this.height= h;
        this.image = loadImage("images/box2.png");
        World.add(world , this.body);
        this.visibility = 255;
    }

    display()
    {
        var pos= this.body.position;
        var angle= this.body.angle;
       
 
        // In case boxes fall , they would cover some distance in the left or right. 
       if(pos.x < 200 || pos.x>750)
       {            
           World.remove(world, this.body);
           push();
           this.visibility = this.visibility - 5;
           translate(pos.x,pos.y)
           rotate(angle);            
           tint(255, this.visibility);
           image(this.image , 0,0 , 50,50);
           pop();
       }
       // Regular display
       else{
            push();         
            stroke("white");
            translate(pos.x,pos.y)
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            imageMode(CENTER);
            image(this.image, 0,0, 50,50);            
            pop();
       }

    }

}