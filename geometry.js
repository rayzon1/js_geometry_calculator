// JavaScript Code G Keys
var quest;
var circ;
var sqr;

// Function created for the Area of a Circle
function areaCircle(radius){
    return Math.PI* (Math.pow(radius, 2));
}

// Function created for Area of a Square
function areaSquare(side){
    return Math.pow(side, 2);
}

// Alert with choices of Geometric formulas
alert("Provide number for formula wanted " +
        "(1) Area of a Circle " +
        "(2) Area of a Square ")

quest = prompt('Please provide a number: ');
if (quest == 1){
    circ = parseInt(prompt('Please provide a radius for (Area of a circle) in inches: '));
    document.write('<h2>The area of a circle with radius ' + circ + ' in. is: <span id = "circle" >' + areaCircle(circ).toFixed(1) + ' </span>in.^2</h2><br>');
} else if(quest == 2){
   sqr = parseInt(prompt('Please provide a number for base (Area of a square): '));
   document.write('<h2>The area of a square with base ' + sqr + ' in. is: <span id = "square" >' + areaSquare(sqr).toFixed(1) + ' </span>in.^2</h2><br>');
}
