function drawFlower(){  
  
   var on = 0;
  
  function drawFlower()
  {  
    this.flower();
  }
  
  this.flower = function()
  {  
      
      noStroke();
       fill(255);
       ellipse(mouseX,mouseY,20,20); //20,50
       ellipse(mouseX+20,mouseY,20,20); //40,50
       ellipse(mouseX+10,mouseY+10,15,20);//30,60
       ellipse(mouseX+10,mouseY-10,15,20);//30,40  
  } 
 
}
