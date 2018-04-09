var init = function(){

    // setup canvas
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    // generate 10 random points
    var length = 10;
    var points = [];
    for(var i=0; i<length; i++){
        var x = random();
        var y = random();   
        circle(context,x,y,'blue');
        points.push({x:x,y:y});
    }

    // calculate centroid 
    var centroid = calculateCentroid(points);
    circle(context, centroid.x, centroid.y, 'red');
    var coordinates = 'x:' + centroid.x + ', y:' + centroid.y;
    document.getElementById('centroid').innerHTML = coordinates;
};


var calculateCentroid = function(points){
    //----------------------------------
    //  YOUR CODE
    //----------------------------------    

    // return centroid with the following format
    // return {x:10, y:30};

    var length = points.length;
    var sum_x = 0;
    var sum_y = 0;

    points.forEach(function(point){
        sum_x += point.x;
        sum_y += point.y;
    });

    var xCentroid =  sum_x / length;
    var yCentroid = sum_y / length;

    return {x: Math.floor(xCentroid), y: Math.floor(yCentroid)};

};


function circle(context,x,y,fillStyle) {
    context.fillStyle = fillStyle;
    context.beginPath();
    context.arc(x, y, 10, 0, Math.PI*2, true);
    context.closePath();
    context.fill();
}

function random(){
    var value = Math.random()*650;
    return Math.floor(value);
}

var exercise = {};
exercise.calculateCentroid = calculateCentroid;