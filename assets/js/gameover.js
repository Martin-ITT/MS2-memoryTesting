if (sessionStorage.getItem("reasonLost") === "flips") {   
$('#gameOverID').html('Out of flips<br>' +'Number of flips: ' +sessionStorage.getItem("flips") +'<br> Time left: ' +sessionStorage.getItem("time"));
}

else if (sessionStorage.getItem("reasonLost") === "time") {   
    $('#gameOverID').html('Out of time<br>' +'Number of flips: ' +sessionStorage.getItem("flips") +'<br> Time left: ' +sessionStorage.getItem("time"));
    }
    