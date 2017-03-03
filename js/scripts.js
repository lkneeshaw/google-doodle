// Randomize Image

// Store Image URLS
var img0 = '../img/200.jpg';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// Get Random Number
var limit = 3;
var numRand = Math.floor( Math.random() * limit );
console.log(numRand);

// Show Images
//$('img').attr('src', eval('img' + numRand) );

// DrawSVG plugin
var doodle = $('#steam1').drawsvg();
// Animate!
  doodle.drawsvg('animate');  


////hide circle
//    $('#steam1').hide();
//
////click on button
//
//$('#stage').click(function(){
//    $('#steam2').show('fast');
//    
    console.log('OK');
    
//});