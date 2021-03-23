// Game won / Game over window
// game over time out
if (sessionStorage.getItem("reasonGameOver") === "flips") {   
$('#gameOverID').html('Out of flips<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter"));
}
// game over no flips
else if (sessionStorage.getItem("reasonGameOver") === "time") {   
    $('#gameOverID').html('Out of time<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter"));
}
// game interrupted
else if (sessionStorage.getItem("reasonGameOver") === "user") {
    $('#gameOverID').html('Player has quit the game<br>');
}