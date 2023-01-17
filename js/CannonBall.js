class CannonBall {
  constructor(x, y) {
    var options = {
      isStatic: true
    };
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("./assets/cannonball.png");
    this.trajectory=[]
    World.add(world, this.body);
  }
  remove(index){
    Body.setVelocity(this.body,{x:0,y:0})
    //settimeout exicutes the task after every given millisecond
    setTimeout(()=>{
      World.remove(world,this.body)
    },2000)

  }

  shoot(){
    var ballangle=cannon.angle;
    //converting angle to randiants
    //180degree=3.14 radiants
    ballangle=ballangle*(3.14/180)
    var velocity=p5.Vector.fromAngle(ballangle)
    velocity.mult(0.5)
    Body.setStatic(this.body,false)
    Body.setVelocity(this.body,{
      x:velocity.x*(180/3.14),y:velocity.y*(180/3.14)
    })
    

  }
  display() 
  {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();
    
    if(this.body.velocity.x>0&&pos.x>10){
      // recording positions of the ball
      var positions=[pos.x,pos.y]
      this.trajectory.push(positions)
    }

    // creating small ball images for the ball trajectory
    for(var i=0;i<this.trajectory.length;i+=1){
       image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5)
    }
  }
}
