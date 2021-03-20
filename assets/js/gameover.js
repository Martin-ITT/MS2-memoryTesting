console.log('gameover.js here! sessionStorage: ');
console.log(sessionStorage);
// game over time out
if (sessionStorage.getItem("reasonGameOver") === "flips") {   
$('#gameOverID').html('Out of flips<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter"));
}
// game over no flips
else if (sessionStorage.getItem("reasonGameOver") === "time") {   
    $('#gameOverID').html('Out of time<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter"));
}
// game won
else if (sessionStorage.getItem("reasonGameOver") === "won") {
    $('#gameWonID').html('Well done!<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter"));
    if (sessionStorage.getItem("gameHard") === "yes") {
        let score = ((20 - (JSON.parse(sessionStorage.getItem("flipCounter")))) *20) + JSON.parse(sessionStorage.getItem("timeCounter")); // score = flips left * 20 + time left
        $('#gameWonScore').html('Score: <br>' +'Your score is: ' +score); 
    }
}
// game interrupted
else if (sessionStorage.getItem("reasonGameOver") === "user") {
    $('#gameOverID').html('Player has quit the game<br>');
}