const userclickedpattern =[]
const buttoncolours = ["red", "blue", "green", "yellow"];
const gamepattern = [];
$(".btn").on("click",function(){
    var userchosencolour = $(this).attr("id");
    console.log (userchosencolour);
    userclickedpattern.push(userchosencolour)
})
function nextsequence() {
    var randomnumber = Math.floor(Math.random() * 4);
  var randomchosencolour = buttoncolours[randomnumber];
  gamepattern.push(randomchosencolour);
  $("#" + randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomchosencolour + ".mp3");
  audio.play();
}
$(document).ready(function () {
  nextsequence();
});

$(".btn").on("click",function(){
    var userchosencolour = $(this).attr("id");
    console.log (userchosencolour);
    userclickedpattern.push(userchosencolour)
})