const userclickedpattern =[]
const buttoncolours = ["red", "blue", "green", "yellow"];
const gamepattern = [];
var level = 0;
$(".btn").on("click",function(){
    var userchosencolour = $(this).attr("id");
    userclickedpattern.push(userchosencolour);
    playsound(userchosencolour);
    animatePress(userchosencolour);
})
function nextsequence() {
  level++;
  $("#level-title").text("Level " + level)
    var randomnumber = Math.floor(Math.random() * 4);
  var randomchosencolour = buttoncolours[randomnumber];
  gamepattern.push(randomchosencolour);
  $("#" + randomchosencolour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomchosencolour + ".mp3");
  audio.play();
}
$(document).ready(function () {
  let keypressed = false;
  let startButtonPressed = false;
    $("#start-btn").on("click", function() {
        startButtonPressed = true;  
         if (startButtonPressed){
          $("#level-title").text("Level " + level);
         nextsequence();
         }});
         $(document).keydown(function() {
      keypressed =true;
      if(keypressed&&startButtonPressed){
        $("#level-title").text("Level " + level);
        nextsequence();
      }
    })
    });
function playsound(randomchosencolour){
    var audio = new Audio("sounds/" + randomchosencolour + ".mp3");
  audio.play();
}
function animatePress(userchosencolour){
$("#"+userchosencolour).addClass("pressed");
setTimeout(function() {
    $("#" + userchosencolour).removeClass("pressed");
  }, 100);  // Adjust the duration as needed (e.g., 100ms)
}
