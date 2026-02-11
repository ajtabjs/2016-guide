$("button").click(function(){
  $(".fourby3").show();
});

$("button").click(function(){
  $(".introwarning").hide();
});
$("input").click(function(){
  $("#wow").hide();
});
$("input").click(function(){
  $("#high").show();
});


function high(){

  var ok = document.getElementById("music-high");
  ok.play();
}
function wow(){

var music = document.getElementById("music");
music.play();

}