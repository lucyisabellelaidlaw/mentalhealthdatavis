let data_0_4 = [116,	72,	72,	63,	71,	123, 78,148,148,125,140,68,61];
  let data_5_11 = [354,346,246,291,223,294,291,213,223,213,246,228,297];
  let data_12_17 = [1582,	1574,	1814,	1890,	2085,	2151,	2299,	2352,	2361,	2468,	2576,	2850,	2915];
  let data_18_24 = [7555,	7374,	7106,	6840,	7538,	7952,	8220,	8222,	9208,	10312,	10623,	11023,	11028];
  let data_25_34 = [14951,	14386,	13693,	13620,	14101,	14564,	14819,	15334,	16070,	18008,	18328,	17813,	18371];
  let data_35_44 = [12478,	12510,	12649,	12420,	13662,	14096,	14327,	15049,	16386,	18165,	18686,	18287,	18834];
  let data_45_54 = [8088,	8165,	8388,	8887,	9368,	9633,	10371,	10580,	11278,	12359,	13337,	13836,	14437];
  let data_55_64 = [5257,	5503,	5679,	5796,	6013,	6105,	6106,	6299,	6590,	7288,	7868,	8246,	8592];
  let data_65_74 = [2396,	2377,	2522,	2599,	3066,	3122,	3563,	3860,	4134,	4272,	4500,	4491,	4725];
  let data_75_84 = [1775,	1751,	1710,	1825,	1611,	1598,	1593,	1674,	1548,	1572,	1744,	1686,	1652];
  let data_85_onwards = [490,498,504,486,485,498,491,485,534,547,496,506,467];

var i = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}



function draw() {
  background(220);

  fill(100);
  textSize(30);
  textAlign(CENTER);
  text('Total Mens Overnight Mental Health Hospitalisations per Year', width/2, 50);


  fill(color(55, 193, 221));



  textSize(15);
  text('0-4', width/11-width/11/2, height-150);
  text('5-11', 2*width/11-width/11/2, height-150);
  text('12-17', 3*width/11-width/11/2, height-150);
  text('18-24', 4*width/11-width/11/2, height-150);
  text('25-34', 5*width/11-width/11/2, height-150);
  text('35-44', 6*width/11-width/11/2, height-150);
  text('45-54', 7*width/11-width/11/2, height-150);
  text('55-64', 8*width/11-width/11/2, height-150);
  text('65-74', 9*width/11-width/11/2, height-150);
  text('75-84', 10*width/11-width/11/2, height-150);
  text('85+', 11*width/11-width/11/2, height-150);

  textSize(15);
  textAlign(CENTER);
  fill(100);
  text('2006-07', width/13-width/13/2, height-80);
  text('2007-08', 2*width/13-width/13/2, height-80);
  text('2008-09', 3*width/13-width/13/2, height-80);
  text('2009-10', 4*width/13-width/13/2, height-80);
  text('2010-11', 5*width/13-width/13/2, height-80);
  text('2011-12', 6*width/13-width/13/2, height-80);
  text('2012-13', 7*width/13-width/13/2, height-80);
  text('2013-14', 8*width/13-width/13/2, height-80);
  text('2014-15', 9*width/13-width/13/2, height-80);
  text('2015-16', 10*width/13-width/13/2, height-80);
  text('2016-17', 11*width/13-width/13/2, height-80);
  text('2017-18', 12*width/13-width/13/2, height-80);
  text('2018-19', 13*width/13-width/13/2, height-80);

  fill(color(55, 193, 221, 50));

  ellipse(width/11-width/11/2, height/2-75, data_0_4[i]*0.02);
  ellipse(2*width/11-width/11/2, height/2-75, data_5_11[i]*0.02);
  ellipse(3*width/11-width/11/2, height/2-75, data_12_17[i]*0.02);
  ellipse(4*width/11-width/11/2, height/2-75, data_18_24[i]*0.02);
  ellipse(5*width/11-width/11/2, height/2-75, data_25_34[i]*0.02);
  ellipse(6*width/11-width/11/2, height/2-75, data_35_44[i]*0.02);
  ellipse(7*width/11-width/11/2, height/2-75, data_45_54[i]*0.02);
  ellipse(8*width/11-width/11/2, height/2-75, data_55_64[i]*0.02);
  ellipse(9*width/11-width/11/2, height/2-75, data_65_74[i]*0.02);
  ellipse(10*width/11-width/11/2, height/2-75, data_75_84[i]*0.02);
  ellipse(11*width/11-width/11/2, height/2-75, data_85_onwards[i]*0.02);

  let startFill = 120
  for(let j = 0; j<width; j=j+width/13) {
    fill(startFill);
    rect(j, height-70, width/13, 70);
    startFill = startFill + 10;
  }



  if (mouseX<width/13) {
    i = 0;
  } else if(mouseX<2*width/13) {
    i = 1;
  } else if(mouseX<3*width/13) {
    i = 2;
  } else if(mouseX<4*width/13) {
    i = 3;
  } else if(mouseX<5*width/13) {
    i = 4;
  } else if(mouseX<6*width/13) {
    i = 5;
  } else if(mouseX<7*width/13) {
    i = 6;
  } else if(mouseX<8*width/13) {
    i = 7;
  } else if(mouseX<9*width/13) {
    i = 8;
  } else if(mouseX<10*width/13) {
    i = 9;
  } else if(mouseX<11*width/13) {
    i = 10;
  } else if(mouseX<12*width/13) {
    i = 11;
  } else if(mouseX<13*width/13) {
    i = 12;
  }


}
