//set variable to log game progress
var wins = 0;
var losses = 0;
var userScore = 0;

//set random generated number at start (between 19 -120)
var targetNumber = Math.floor(Math.random() * (120 - 19) + 19);

$("#target").html("" + targetNumber);

//each gem rep # and values hidden between (between 1-12)
var gem1 = Math.floor(Math.random() * (12) + 1);
var gem2 = Math.floor(Math.random() * (12) + 1);
var gem3 = Math.floor(Math.random() * (12) + 1);
var gem4 = Math.floor(Math.random() * (12) + 1);


//use hidden crystal values to match the rn, game reset when round has ended
function reset() {
    userScore = 0;
    $("#score").html(userScore);
    targetNumber = Math.floor(Math.random() * (120 - 19) + 19);
    $("#target").html(0 + targetNumber);
    gem1 = Math.floor(Math.random() * (12) + 1);
    gem2 = Math.floor(Math.random() * (12) + 1);
    gem3 = Math.floor(Math.random() * (12) + 1);
    gem4 = Math.floor(Math.random() * (12) + 1);
}

//track points for either wins or loss and resets for new game
var windowTimeout = setTimeout

function gameReset() {
    if (userScore === targetNumber) {
        wins++;
        $("#wins").html("<p>" + wins + "</p>");
        alert("Crystacular Way to GO! Play again?");
        reset();
    }
    else if (userScore > targetNumber) {
        losses++;
        $("#losses").html("<p>" + losses + "</p>");
        alert("Nice try! Play again?");
        reset();
    }
    //click each to have gem values added to score

}
$(".crystal1").click(function () {
    userScore = userScore + gem1;
    $("#score").html(userScore);
    gameReset();
});
$(".crystal2").click(function () {
    userScore = userScore + gem2;
    $("#score").html(userScore);
    gameReset();
});
$(".crystal3").click(function () {
    userScore = userScore + gem3;
    $("#score").html(userScore);
    gameReset();
});
$(".crystal4").click(function () {
    userScore = userScore + gem4;
    $("#score").html(userScore);
    gameReset();
});

//get generated number


