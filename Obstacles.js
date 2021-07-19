class Obstacles
{
        constructor(x,y)
        {
            var option={
                'restitution' : 0.8,
                'friction': 0.3,
                'density': 0.1
            }
            this.body=Bodies.rectangle(x,y,50,50,option);
            World.add(world,this.body);
            this.image=loadImage("enemy.png");
            this.image.scale=0.8
            this.width=50;
            this.height=50;
        }
    
        display()
        {
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            
            image(this.image,0,0,this.width,this.height);
            
            pop();     
        }
        
    }
