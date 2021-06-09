// setting up clock variables
let analogClock = document.getElementById('analogClock');
// returning a 2d drawing context on the canvas
let canvasClock = analogClock.getContext('2d');
// considered as normal circle radius (diameter/2)
let clockRadius = analogClock.height/2;
// creating the outer edge of the clock 
canvasClock.translate(clockRadius, clockRadius);
// leaving the space between the canvas edge and the clock
clockRadius = clockRadius * 0.9;

// starting the clock ticking
// as 1s = 1000ms the interval is set so that the hands will change their position at every second
setInterval(createClock, 1000);

// creating a clock function
function createClock(){


    clockFace(canvasClock, clockRadius);
    clockNumbers(canvasClock, clockRadius);
    clockRun(canvasClock, clockRadius);
}

// creating clock's face center
function clockFace(canvasClock, clockRadius){

    // adding a circular arc to the current sub-path
    canvasClock.beginPath();
    canvasClock.arc(0, 0, clockRadius, 0 , 2 * Math.PI);
    canvasClock.fillStyle = "rgba(226, 226, 219, 0.7)";
    canvasClock.fill();
    // adding clock's center
    canvasClock.beginPath();
    canvasClock.arc(0, 0, clockRadius * 0.07, 0, 2 * Math.PI);
    // color dark (as per Bootstrap 5 nomenclature)
    canvasClock.fillStyle = '#343a40';
    canvasClock.fill();
}

// creating the numbering system
function clockNumbers(canvasClock, clockRadius){
    let angle;
    let num;
    canvasClock.font = clockRadius * 0.27 + "px arial";
    canvasClock.textBaseline = "middle";
    canvasClock.textAlign = "center";
    // asingning a number at angle
        for(num = 1; num < 13; num++){
            angle = num * Math.PI / 6;
          canvasClock.rotate(angle);
          canvasClock.translate(0, -clockRadius * 0.8);
          canvasClock.rotate(-angle);
          canvasClock.fillText(num.toString(), 0, 0);
          canvasClock.rotate(angle);
          canvasClock.translate(0, clockRadius * 0.8);
          canvasClock.rotate(-angle);
    }
}
// setting up the running time
function clockRun(canvasClock, clockRadius){
    // getting the precise date and time
    let timeNow = new Date();
    // h - hours, m - minutes, s - seconds
    let h = timeNow.getHours();
    let m = timeNow.getMinutes();
    let s = timeNow.getSeconds();

    // recalculating hour to the clock position, as a percentage of a full pie diagram 
    h = h % 12;
    // the hour hand is not always positioned exactly at the full hour, but it is moving smothly with passing minutes and seconds
    h = (h*Math.PI/6)+(m*Math.PI/(6*60))+(s*Math.PI/(360*60));
    // invoking an hour hand
    clockHands(canvasClock, h, clockRadius*0.5, clockRadius*0.05);
    // calculating minutes
    m = (m*Math.PI/(30))+(s*Math.PI/(30*60));
    clockHands(canvasClock, m, clockRadius*0.67, clockRadius*0.04);
    // calculating seconds
    s = s*Math.PI/(30);
    clockHands(canvasClock, s, clockRadius*0.75, clockRadius*0.01);

}
// setting up clock's hands display function
function clockHands(canvasClock, handAngle, lenght, width){
    canvasClock.beginPath();
    canvasClock.lineWidth = width;
    // butt round square
    canvasClock.lineCap = 'square';
    // chaging the hands color to dark (Bootstrap 5 nomenclature)
    canvasClock.strokeStyle = "#343a40";

    canvasClock.moveTo(0,0);
    canvasClock.rotate(handAngle);
    canvasClock.lineTo(0, -lenght);
    canvasClock.stroke();
    canvasClock.rotate(-handAngle);

}
