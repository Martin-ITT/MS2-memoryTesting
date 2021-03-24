// variables
let currentScore; // last game score
var localHighestScores = JSON.parse(sessionStorage.getItem("sessionHighestScores"));// || [ {"score":bestScoresSetter[0], "name": "Martin"},{"score":bestScoresSetter[1], "name": "Sarah"},{"score":bestScoresSetter[2], "name": "Peter"},{"score":bestScoresSetter[3], "name": "Rob"},{"score":bestScoresSetter[4], "name": "Aoife"}]; // local best scores
const playername = document.getElementById("playername"); // name input
const saveScoreBtn = document.getElementById("saveScoreBtn"); // save btn

//document writer - update time & score. display high score section on condition
$('#gameWonID').html('Well done!<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter")); // update flips & time

if (sessionStorage.getItem("gameHard") === "yes") { // count score for hard level
    currentScore = ((20 - (JSON.parse(sessionStorage.getItem("flipCounter")))) *20) + JSON.parse(sessionStorage.getItem("timeCounter")); // count score = flips left * 20 + time left
    $('#gameWonScore').html('Score:' +currentScore); //display score
    if (currentScore > localHighestScores[4].score){ // if current is better  than last allow to save
    //$("#scoreForm").css("display","block"); // display high score section
    $('#saveScoreModal').modal('toggle');
    $('#gameWonIDCongrat').html('Well done!<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter"));
    $('#gameWonScoreCongrat').html('Score:' +currentScore);
    }
}

// name length input restriciton
// https://stackoverflow.com/questions/9841363/how-to-restrict-number-of-characters-that-can-be-entered-in-html5-number-input-f
function limitKeypress(event, value, maxLength) {
    if (value != undefined && value.toString().length >= maxLength) {
        event.preventDefault();
    }
}

// blank name input restriciton
playername.addEventListener("keyup", () =>  {
    //disable button if no name
    saveScoreBtn.disabled = !playername.value;
});

// on btn click sort and save score
saveHighScore = (e) => {
    e.preventDefault(); // prevents submitting form on default
    const storedScore = { // set as key:value pair to add to object
        score: currentScore,
        name: playername.value
    };
    localHighestScores.push(storedScore); // add key:value to stored score object
    localHighestScores.sort( (a,b) => b.score - a.score); // sort by score
    localHighestScores.splice(5); // only allow five records
    sessionStorage.setItem("sessionHighestScores", JSON.stringify(localHighestScores)); // sting and store to session memory
    window.open("score.html","_self"); // open best scores window
}
