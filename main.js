function preload(){

}

function setup(){
    c = createCanvas(1000,600);
    c.center();
    
    capture = createCapture(VIDEO);
    capture.size(1000, 700);
    capture.hide();
}

function draw(){
    background(0,0,0);
    image(capture, 0, 0);
    //filter();
    button = createButton('mustache');
    button.position(300,600);
    button.style("background","#FF0090");
    button.style("outline","none");
    button.style("border","none");
    button.style("padding","14px");
    button.style("color","white");
    button.style("border-radius","10px");
    button2 = createButton('❮');
    button2.position(500,600);
    button2.style("background","#FF0090");
    button2.style("outline","none");
    button2.style("border","none");
    button2.style("padding","14px");
    button2.style("color","white");
    button2.style("border-radius","10px");
    button3 = createButton('grayscale');
    button3.position(540,600);
    button3.style("background","#FF0090");
    button3.style("outline","none");
    button3.style("border","none");
    button3.style("padding","14px");
    button3.style("color","white");
    button3.style("width","300px");
    button3.style("border-radius","10px");
    button4 = createButton('❯');
    button4.position(845,600);
    button4.style("background","#FF0090");
    button4.style("outline","none");
    button4.style("border","none");
    button4.style("padding","14px");
    button4.style("color","white");
    
    button4.style("border-radius","10px");
    button5 = createButton('capture');
    button5.position(980,600);
    button5.style("background","#FF0090");
    button5.style("outline","none");
    button5.style("border","none");
    button5.style("padding","14px");
    button5.style("color","white");
    
    button5.style("border-radius","10px");

    
    

}