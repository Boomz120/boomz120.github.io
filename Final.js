$( function() {
    $( "#accordion" ).accordion();
  } );


$( function() {
    $( ".widget input[type=submit], .widget button" ).button();
    $( "button, input" ).click( function( event ) {
      event.preventDefault();
    } );
  } );

function pokemon() {
    document.getElementById("cool").src = "FinalPics/sharpedo.png";
  $("#character").html("Sharpedo");
}
function naruto() {
    document.getElementById("cool").src = "FinalPics/gara.png";
  $("#character").html("Gara");
}
function sao() {
    document.getElementById("cool").src = "FinalPics/sinon.jpg";
  $("#character").html("Sinon");
}
function note() {
    document.getElementById("cool").src = "FinalPics/L.jpg";
  $("#character").html("L");
}
function fairy() {
    document.getElementById("cool").src = "FinalPics/laxus.jpg";
  $("#character").html("Laxus");
}function marvel(){
    document.getElementById("cool").src = "FinalPics/strange.jpg";
  $("#character").html("Doctor Strange");
}function dc() {
    document.getElementById("cool").src = "FinalPics/flash.jpg";
  $("#character").html("The Flash");
}function nintendo() {
    document.getElementById("cool").src = "FinalPics/link.jpg";
  $("#character").html("Link");
}function dead() {
    document.getElementById("cool").src = "FinalPics/daryl.jpg";
  $("#character").html("Daryl Dixon");
}function smash() {
    document.getElementById("cool").src = "FinalPics/ness.jpg";
  $("#character").html("Ness");
}function warframe() {
    document.getElementById("cool").src = "FinalPics/valkyr.jpg";
  $("#character").html("Valkyr");
}


$( function() {
    $( "#progressbar1" ).progressbar({
      value: 5
    });
    $( "#progressbar2" ).progressbar({
      value: 5
    });
  } );



$("#progressbar1").html("5% Done");
$("#progressbar2").html("5% Through Campaign");

var sh = document.getElementsByClassName("show");
sh[1].innerHTML = "Man in the High Castle";
sh[2].innerHTML = "Far Cry Primal";

document.getElementById("show1").src = "FinalPics/castle.jpg";
document.getElementById("game").src = "FinalPics/farcry.jpg";

$( function() {
    $( document ).tooltip();
  } );
$("#potatoImg").attr('title', 'OMG WHAT A FABULOUS POTATO');
$("#sax").attr('title', 'Sax > Trumpet');
$("#coral").attr('title', 'COOOORALLLLL');
$("#DBZ").attr('title', 'Will Kai ever become cool? Find out next time, on Dragonball Z');
$("#redvblue").attr('title', 'Memory is key');
$("#x").attr('title', 'I like potatoes');