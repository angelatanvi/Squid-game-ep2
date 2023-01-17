class Boat {
    constructor(x, y,width,height,boatPos) {
      this.body = Bodies.rectangle(x, y,width,height);
      this.image = loadImage("./assets/boy.png");
      this.width=width
      this.height=height
      this.boatPosition=boatPos
      World.add(world, this.body);
    }
  
    remove(index){
      //settimeout exicutes the task after every given millisecond
      setTimeout(()=>{
        World.remove(world,boats[index].body)
        delete boats[index]
      },2000)

    }
    display() 
    {
      var pos = this.body.position;
      var angle=this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER);
      image(this.image, 0, this.boatPosition, this.width, this.height);
      pop();
      
      
    }
  }
  