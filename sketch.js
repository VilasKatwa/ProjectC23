


function setup() {
  //world = Matter.World;
  createCanvas(1600,800);
  background(116,243,250);
  line(0, 3, width, 3);
  line(0, 797, width, 797);
  line(3, 0, 3, height);
  line(1597, 0, 1597, height);
  textSize(30);
  textAlign(CENTER);
  
  
}

function draw() {
  
  //drawSprites();

  //textSize(30);
  //textAlign(CENTER);
  
  

  let c  = color(0, 0, 0); // Black Color
  let c1 = color(253, 126, 0); // orange color
  let c2 = color(75,200,0); // green,
  let c3 = color(0,0,255); //bule
  let c4 = color(155,0,0); // maroon
  let c4a = color(255,175,140); // light brown
  let c5 = color(95,95,150); //purple
  let c6 = color(255,145,200); //pink color, 
  let c7 = color(222,232,30); // yellow
  let c8 = color(145,86,175);// indigo
  let bg = color(116,243,250)// background color
  let c9 = color(175,90,50)// brown wood color
  
  
  fill(c); // Use color variable 'c' as fill color
  noStroke(); 
  //triangle(200,20, 150,70, 250, 70);
  triangle(460,150, 410,200, 510, 200);
  triangle(1140,150, 1090,200, 1190, 200);
  
  // MIDDLE BLOCK
  fill(c4a);
  stroke(0);
  strokeWeight(1);
  rect(600,300,400,400);

  // Middle Door

  fill(c3);
  stroke(0);
  strokeWeight(1);
  rect(750,500,100,150);
  line(750,650,700,700);
  line(850,650,900,700);

  fill(c7);
  stroke(0);
  quad(750, 460, 850, 460, 875, 495, 725, 495);
  arc(750,495,40,30,0,180);
  arc(800,495,40,30,0,180);
  arc(850,495,40,30,0,180);


  // Middle Block Circles
  fill(bg);
  noStroke(0);
  circle(650, 350, 50);
  circle(750, 350, 50);
  circle(850, 350, 50);
  circle(950, 350, 50);

  //Middle block Slab
  fill(c4a);
  stroke(0);
  strokeWeight(1);
  rect(550,225,500,75);

// Left Pillar
  fill(c9);
  stroke(0);
  strokeWeight(1);
  quad (200,200, 250, 200, 300,700,150,700);
  arc (225,700, 150,40,0, 180);
  arc (225,500, 110,40,0, 180);
  arc (225,520, 110,40,0, 180);
  
  fill(bg);
  noStroke();
  ellipse(225, 150, 55, 100);
  ellipse(1375, 150, 55, 100);
  
  fill(c9);
  noStroke;
  let x = frameCount % 55;
  let cy =  int(frameCount/55);
  
  if (x>0) {
  if ((cy % 2) == 0) {
  ellipse(225, 150, x, 100);
  ellipse(1375, 150, x, 100);
  } else {ellipse(225, 150, 55-x, 100);
    ellipse(1375, 150, 55-x, 100);}
  }
   
 stroke(0);
  text("Project C23 - Vilas Katwa Date: 13.05.2020", 1250, 775);
   
   // Right Pillar

  fill(c9);
  stroke(0);
  strokeWeight(1);
  quad (1350,200, 1400, 200, 1450,700,1300,700);
  arc (1375,700, 150,40,0, 180);
  arc (1375,500, 110,40,0, 180)
  arc (1375,520, 110,40,0, 180)

 // LEFT BLOCK
  fill(c4);
  stroke(0);
  strokeWeight(1);
  rect(350,450,250,250);

  // RIGHT BLOCK

  fill(c4);
  stroke(0);
  strokeWeight(1);
  rect(1000,450,250,250);

// Left Slab
  fill(c2);
  stroke(0);
  strokeWeight(1);
  rect(300,350,300,100);

// left slab notches
   
  fill(bg);
  noStroke();
  //strokeWeight(1);
  rect(350,325,75,75);
  rect(500,325,75,75);
  

// RIGHT Slab
fill(c2);
stroke(0);
strokeWeight(1);
rect(1000,350,300,100);


// RIGHT slab notches
   
fill(bg);
noStroke();
//strokeWeight(1);
rect(1025,325,75,75);
rect(1175,325,75,75);

// left Cylinder
  fill(c1);
  noStroke(0);
  strokeWeight(1);
  rect(385,200,150,150);
  rect(385,350,50,50);
  rect(500,350,35,50);

// Right Cylinder
fill(c1);
noStroke(0);
strokeWeight(1);
rect(1070,200,150,150);
rect(1070,350,50,50);
rect(1165 ,350,55,50);


// Center Slab Dome
  
  arc(800, 175, 200, 200, 180, 0);
  rect(700,180,200,20);
  rect(700,205,200,20);
  stroke(0);
  strokeWeight(4);
  line(800,50,800,75);
  
  // Flag
  fill(c3);
  stroke(c4);
  strokeWeight(3);
  triangle(800,25,800,55,850,40);

  // Flame Post
  
  fill(c4);
  stroke(c);
  strokeWeight(3);
  quad(675, 632, 725, 632, 715, 645, 685, 645);
  quad(685, 685, 715, 685, 725, 697,675, 697);

  quad(875, 632, 925, 632, 915, 645, 885, 645);
  quad(885, 685, 915, 685, 925, 697, 875, 697);
  
  fill(c5)
  stroke(c);
  strokeWeight(3);
  rect(685,645,10,40);
  rect(705,645,10,40);

  rect(885,645,10,40);
  rect(905,645,10,40);
  // The Flames

  if (frameCount % 5 == 0) {
  fill(c7)
  noStroke();
  ellipse(900, 600, 20, 65);
  ellipse(700, 600, 20, 65);

  fill(c4);
  stroke(c7);
  strokeWeight(3);
  ellipse(900, 600, 5, 20);
  ellipse(700, 600, 5, 20);
  } else {
    fill(c4)
    noStroke();
    ellipse(900, 600, 15, 25);
    ellipse(700, 600, 15, 25);
  
    fill(c7);
    stroke(c4);
    strokeWeight(3);
    ellipse(900, 600, 10, 35);
    ellipse(700, 600, 10, 35);
  }




}