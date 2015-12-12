$(document).ready(function(){

var colorCounter = 0;

var changeGreen = function(){
  $(".hello").css("color", "green");
  colorCounter = 1;
}

var changeBlue = function(){
  $(".hello").css("color", "blue");
  colorCounter = 0;
}

setInterval(function(){
if(colorCounter == 0)
{
  changeGreen();
}

else{
  changeBlue();
}
}, 1000);


function moveBlock(){
$("#block").animate({left: '70%'}, 4000);
$("#block").animate({left: '20%'}, 4000);
}

setInterval(function(){
  moveBlock();
}, 1000);
});
