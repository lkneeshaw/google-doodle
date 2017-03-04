// Randomize Image

// Store Image URLS
//var img0 = '../img/sunny-bg.svg';
//var img1 = '../img/partially-cloudy-bg.svg';
//var img2 = '../img/cloudy-svg.svg';

// Get Random Number
var limit = 3;
var numRand = Math.floor( Math.random() * limit );
console.log(numRand);

// Show Images
$('#stage').addClass( 'bg' + numRand );
//$('div').addClass('src', eval('img' + numRand) );

// DrawSVG plugin
var google = $('#steam').drawsvg({
  duration : 2000,
  stagger: 500
});

// Animate SVG points
   google.drawsvg('animate');

$('#stage').click(function(){
   google.drawsvg('animate'); 
    
    console.log('OK');
});


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