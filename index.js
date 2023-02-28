/*Variables*/

let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

var userClickedPatter = [];

let started = false;

let level = 0;


/*Sound and press Functions*/

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play()
}

function animatePress(currentColor) {
    $("#" + currentColor).fadeOut(100).fadeIn(100);
    $("#" + currentColor).toggleClass("pressed").delay(800).toggleClass("pressed");
}


/*Key and Click events Functions*/ 

$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level)
        started = true;
        nextSequence();
    } 
    
})

$(".btn").click(function() {
    let userChosenColour = $(this).attr("id");
    userClickedPatter.push(userChosenColour);
    animatePress(userChosenColour);
    console.log(userClickedPatter);
    playSound(userChosenColour);
})


/*Game functions*/

function nextSequence(level) {
    let randomNumber = Math.floor(Math.random() * 4 );
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
}


function checkAnswer(currentLevel) {
    
}