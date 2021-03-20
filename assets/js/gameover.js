console.log('gameover.js here! sessionStorage: ');
console.log(sessionStorage);
if (sessionStorage.getItem("reasonGameOver") === "flips") {   
$('#gameOverID').html('Out of flips<br>' +'Number of flips: ' +sessionStorage.getItem("flips") +'<br> Time left: ' +sessionStorage.getItem("time"));
}

else if (sessionStorage.getItem("reasonGameOver") === "time") {   
    $('#gameOverID').html('Out of time<br>' +'Number of flips: ' +sessionStorage.getItem("flips") +'<br> Time left: ' +sessionStorage.getItem("time"));
}
else if (sessionStorage.getItem("reasonGameOver") === "won") {
    $('#gameWonID').html('Well done!<br>' +'Number of flips: ' +sessionStorage.getItem("flips") +'<br> Time left: ' +sessionStorage.getItem("time"));
}
else if (sessionStorage.getItem("reasonGameOver") === "0") {
    $('#gameOverID').html('Player has quit the game<br>' +'Number of flips: ' +sessionStorage.getItem("flips") +'<br> Time left: ' +sessionStorage.getItem("time"));
}