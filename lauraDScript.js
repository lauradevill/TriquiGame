let can = document.getElementById("myCanvas");//Getting canvas from HTML document
let canva = can.getContext("2d");//Get the canvas context

let playAloneButton = document.getElementById("playAlone");//Getting play alone buttom from HTML document
playAloneButton.addEventListener("click", playAlone);//Click event on play alone button

let resetButton = document.getElementById("resetButton");//Getting reset buttom from HTML document
resetButton.addEventListener("click", loadPage);//Click event on reset button

let playComputerButton = document.getElementById("playComputer");//Getting play with the computer buttom from HTML document
playComputerButton.addEventListener("click", playWithComputer);//Click event on playComputer button

//Reload the page
function loadPage(){
    window.location.reload();
}

//Paint a line in canvas
function drawLine(color, xInitial, yInitial, xFinal, yFinal, drawingArea){
    drawingArea.beginPath();
    drawingArea.strokeStyle = color;
    drawingArea.lineWidth = 3
    drawingArea.moveTo(xInitial, yInitial);
    drawingArea.lineTo(xFinal, yFinal);
    drawingArea.stroke();
    drawingArea.closePath();
}

//PAINTING GAME LINES (3*3 grid)
let x1 = can.width / 3;
let x2 = 2 * x1; 
let myColor = "#fff952";

//Vertical lines
//drawLine(myColor, 0, 0, 0, can.height, canva);
drawLine(myColor, x1, 0, x1, can.width, canva);
drawLine(myColor, x2, 0, x2, can.width, canva);
//drawLine(myColor, can.width, 0, can.width, can.height, canva);

let y1 = can.height / 3;
let y2 = 2 * y1; 

//Horizontal lines
//drawLine(myColor, 0, 0, can.width, 0, canva);
drawLine(myColor, 0, y1, can.width, y1, canva);
drawLine(myColor, 0, y2, can.width, y2, canva);
//drawLine(myColor, 0, can.height, can.width, can.height, canva);

/////PLAYING ALONE
function playAlone(){
    window.addEventListener("click", play);
    let counter = 0;
    let emo1 = {
        url: "emoticon1.png",
    }
    let emo2 = {
        url: "emoticon2.png",
    }
    emo1.image = new Image();//Instance of Image class
    emo1.image.src = emo1.url;
    emo2.image = new Image();
    emo2.image.src = emo2.url;
    
    
    function play(event){
        let x = event.layerX;
        let y = event.layerY;
        counter++;
        console.log (counter);
        if (counter % 2 == 0){
            paintEmo(emo1);
        } else if (!counter % 2 == 0){
            paintEmo(emo2);
        }
        //Paint an emoticon
        function paintEmo(emoticon){
            if ((x >= 0 && x <= can.width / 3) && (y >= 0 && y <= can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 9, can.height / 9);
    
            } else if ((x >= can.width / 3 && x <= 2 * can.width / 3)  && (y >= 0 && y <= can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 3 + can.width / 9, can.height / 9);
    
            } else if ((x >= 2 * can.width / 3 && x <= can.width)  && (y >= 0 && y <= can.height / 3)){
                canva.drawImage(emoticon.image, 2 * can.width / 3 + can.width / 9, can.height / 9);
    
            } else if ((x >= 0 && x <= can.width / 3) && (y >= can.height / 3 && y <= 2 * can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 9, can.height / 3 + can.height / 9);
    
            } else if ((x >= can.width / 3 && x <= 2 * can.width / 3)  && (y >= can.height / 3 && y <= 2 * can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 3 + can.width / 9, can.height / 3 + can.height / 9);
    
            } else if ((x >= 2 * can.
                width / 3 && x <= can.width)  && (y >= can.height/3 && y <= 2 * can.height / 3)){
                canva.drawImage(emoticon.image, 2 * can.width / 3 + can.width / 9, can.height / 3 + can.height / 9);
    
            } else if ((x >= 0 && x <= can.width / 3) && (y >= 2 * can.height / 3 && y <= can.height)){
                canva.drawImage(emoticon.image, can.width / 9, 2 * can.height / 3 + can.height / 9);
    
            } else if ((x >= can.width / 3 && x <= 2 * can.width / 3)  && (y >= 2 * can.height / 3 && y <= can.height)){
                canva.drawImage(emoticon.image, can.width / 3 + can.width / 9, 2 * can.height / 3 + can.height / 9);
    
            } else if ((x >= 2 * can.width / 3 && x <= can.width)  && (y >= 2 * can.height / 3 && y <= can.height)){
                canva.drawImage(emoticon.image, 2 * can.width / 3 + can.width / 9, 2 * can.height / 3 + can.height / 9);
            }
        }
    }
}

/////PLAYING WITH THE COMPUTER
//Return a random number between the numbers n1 and n2
function randomNumber(n1, n2){
    let result;
    result = Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
    return result;
}

function playWithComputer(){
    alert("You begin! then click to see the computer movement");
    window.addEventListener("click", playComputer);
    let counter = 0;
    let emo1 = {
        url: "emoticon1.png",
    }
    let emo2 = {
        url: "emoticon2.png",
    }
    emo1.image = new Image();//Instance of Image class
    emo1.image.src = emo1.url;
    emo2.image = new Image();
    emo2.image.src = emo2.url;

    let xi;//Initial number in x to computer draw
    let yi;//Initial number in y to computer draw
    let xf;//Final number in x to computer draw
    let yf;//Final number in y to computer draw
 
    function playComputer(event){
        let x = event.layerX;
        let y = event.layerY;

        counter++;
        console.log (counter);
        if (counter % 2 == 0){
            paintEmo(emo2);

        } else if (!counter % 2 == 0){
            x = randomNumber(xi, xf);
            y = randomNumber(yi, yf);        
            paintEmo(emo1);
        }            
        //Paint an emoticon
        function paintEmo(emoticon){
            if ((x >= 0 && x <= can.width / 3) && (y >= 0 && y <= can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 9, can.height / 9);
                xi = 0;
                xf = can.width;
                yi = can.height / 3;
                yf = can.height;
    
            } else if ((x >= can.width / 3 && x <= 2 * can.width / 3)  && (y >= 0 && y <= can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 3 + can.width / 9, can.height / 9);
                xi = 0;
                xf = can.width;
                yi = can.height / 3;
                yf = can.height;       
    
            } else if ((x >= 2 * can.width / 3 && x <= can.width)  && (y >= 0 && y <= can.height / 3)){
                canva.drawImage(emoticon.image, 2 * can.width / 3 + can.width / 9, can.height / 9);
                xi = 0;
                xf = can.width;
                yi = can.height / 3;
                yf = can.height;    
    
            } else if ((x >= 0 && x <= can.width / 3) && (y >= can.height / 3 && y <= 2 * can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 9, can.height / 3 + can.height / 9);
                xi = 0;
                xf = can.width;
                yi = 2 * can.height / 3;
                yf = can.height;     
    
            } else if ((x >= can.width / 3 && x <= 2 * can.width / 3)  && (y >= can.height / 3 && y <= 2 * can.height / 3)){
                canva.drawImage(emoticon.image, can.width / 3 + can.width / 9, can.height / 3 + can.height / 9);
                xi = 0;
                xf = can.width;
                yi = 2 * can.height / 3;
                yf = can.height;  
    
            } else if ((x >= 2 * can.width / 3 && x <= can.width)  && (y >= can.height/3 && y <= 2 * can.height / 3)){
                canva.drawImage(emoticon.image, 2 * can.width / 3 + can.width / 9, can.height / 3 + can.height / 9);
                xi = 0;
                xf = can.width;
                yi = 2 * can.height / 3;
                yf = can.height;
    
            } else if ((x >= 0 && x <= can.width / 3) && (y >= 2 * can.height / 3 && y <= can.height)){
                canva.drawImage(emoticon.image, can.width / 9, 2 * can.height / 3 + can.height / 9);
                xi = 0;
                xf = can.width;
                yi = 0;
                yf = 2 * can.height / 3;
    
            } else if ((x >= can.width / 3 && x <= 2 * can.width / 3)  && (y >= 2 * can.height / 3 && y <= can.height)){
                canva.drawImage(emoticon.image, can.width / 3 + can.width / 9, 2 * can.height / 3 + can.height / 9);
                xi = 0;
                xf = can.width;
                yi = 0;
                yf = 2 * can.height / 3;
    
            } else if ((x >= 2 * can.width / 3 && x <= can.width)  && (y >= 2 * can.height / 3 && y <= can.height)){
                canva.drawImage(emoticon.image, 2 * can.width / 3 + can.width / 9, 2 * can.height / 3 + can.height / 9);
                xi = 0;
                xf = can.width;
                yi = 0;
                yf = 2 * can.height / 3;
            }
        }
    }
}
