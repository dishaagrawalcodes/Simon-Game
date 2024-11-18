let userClickedPattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let level = 0;
let started = false;

$(".btn").on("click", function () {
    if (!started) return; // Prevent clicks before game starts
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playsound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    // Generate random color
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomChosenColour);
}

$(document).ready(function () {
    // Start the game when the start button is clicked
    $("#start-btn").on("click", function () {
        if (!started) {
            started = true;
            $("#level-title").text("Level " + level);
            nextSequence();
        }
    });

    // Restart the game when a key is pressed after a game over
    $(document).keydown(function () {
        if (!started) {
            started = true;
            $("#level-title").text("Level " + level);
            nextSequence();
        }
    });
});

function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    // Check if the answer is correct
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");

        // If the user has finished their sequence
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");

        // Play the wrong sound
        playsound("wrong");

        // Add game-over class to the body for styling
        $("body").addClass("game-over");

        // After 200ms, remove the "game-over" class
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        // Update the title to indicate game over
        $("h1").text("Game Over, Press Any Key to Restart");

        // Reset the game state
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
