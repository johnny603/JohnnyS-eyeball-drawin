function draw(){

createCanvas(400, 400);
background(255);

strokeWeight(10);
line(200, 200, 300, 50);

noStroke();
smooth();
fill('#000000'); //black
ellipse(200, 200, 200, 300);

noStroke();
smooth();
fill('#FFFAFA'); //white
ellipse(240, 200, 130, 50);


smooth();
noFill();
strokeWeight(2);
stroke('#938B8B');
ellipse(200, 200, 150, 250);

smooth();
stroke('#FA0D0D');
fill('#FA0D0D'); //red
ellipse(200, 200, 50, 100);


fill('#DEA710'); //dark orange
ellipse(200, 200, 25, 50);


stroke('#D6FF24');
strokeWeight(5);
line(195, 200, 205, 200);

stroke('#D6FF24');
strokeWeight(5);
line(200, 190, 200, 210);


}
