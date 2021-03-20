
// variables
let currentScore; // last game score
const highestScores = JSON.parse(sessionStorage.getItem("highestscores")) || [ {"score":120, "name": "Martin"},{"score":100, "name": "Sarah"},{"score":80, "name": "Peter"},{"score":80, "name": "Rob"},{"score":60, "name": "Aoife"}]; // best scores

$('#gameWonID').html('Well done!<br>' +'Number of flips: ' +sessionStorage.getItem("flipCounter") +'<br> Time left: ' +sessionStorage.getItem("timeCounter"));
if (sessionStorage.getItem("gameHard") === "yes") {
    currentScore = ((20 - (JSON.parse(sessionStorage.getItem("flipCounter")))) *20) + JSON.parse(sessionStorage.getItem("timeCounter")); // score = flips left * 20 + time left
    $('#gameWonScore').html('Score<br>' +currentScore); 
    $("#scoreForm").css("display","block"); // display high score section
}

// score 
const playername = document.getElementById("playername");
const saveScoreBtn = document.getElementById("saveScoreBtn");
//saveScoreBtn.disabled = !playername.value;
playername.addEventListener("keyup", () =>  {
    //disable button
    saveScoreBtn.disabled = !playername.value;
    //if (playername.value) {
      //  saveScoreBtn.disabled = false;
    //}
    //if (!playername.value) {
      //  saveScoreBtn.disabled = true;
    //}
    console.log(playername.value);
});

saveHighScore = (e) => {
    console.log("save score button clicked");
    e.preventDefault(); // prevents submitting form on default
    const storedScore = { // set as key:value pair to add to object
        score: currentScore, //Math.floor(Math.random()*100),
        name: playername.value
    };
    console.log(storedScore);
    highestScores.push(storedScore); // add key:value to stored score object
    highestScores.sort( (a,b) => b.score - a.score); // sort by score. same as code below
    /*highestScores.sort( (a,b) => {
        return a.storedScore - b.storedScore;
    })*/
    highestScores.splice(5); // only allow five records
    sessionStorage.setItem("highestScores", JSON.stringify(highestScores));
    console.log(highestScores);
    console.log(JSON.stringify(highestScores));
    window.open("score.html","_self");
}



/*var testArray = [
    [100, 'Martin'],
    [90, 'Philip'],
    [80, 'John'],
    [70, 'Peter'],
    [60, 'Suzy'],
];
window.sessionStorage.setItem("items", JSON.stringify(testArray));
var storedArray = JSON.parse(sessionStorage.getItem("items"));//no brackets
var i;
for (i = 0; i < storedArray.length; i++) {
        console.log(storedArray[i]);
}

let newScore = 75;

var i = 0;
while (i < testArray.length) {
    if (testArray[i].test == newScore) {
       array.splice(i, newScore)
    } else {
       ++i;
    }
}
/* https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object
for (var key in testArray) {
    if (testArray.hasOwnProperty(key)) {
        console.log(key + " -> " + testArray[key]);
    }
}
*/
/*
for (var key in testArray) {
    if (newScore > testArray[key][0]){
        console.log('larger at' +key);
        testArray[key].splice(0,0,newScore);
        testArray[key].splice(1,0,"newName");
        testArray.pop();
        break;    
    }
    //if (testArray.hasOwnProperty(key)) {
        //console.log(key + " -> " + testArray[key][0]);
        //testArray.splice(key);
    //}
}
for (i = 0; i < storedArray.length; i++) {
    console.log(storedArray[i]);
}
/*
var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr);
arr.splice(2, 0, "Lene");
arr.pop();
console.log(arr.join());
*/

/*
https://www.javascripttutorial.net/javascript-multidimensional-array/
*/
/*
// loop the outer array
for (let i = 0; i < testArray.length; i++) {
    // get the size of the inner array
    var innerArrayLength = testArray[i].length;
    // loop the inner array
    for (let j = 0; j < innerArrayLength; j++) {
        if(newScore > testArray[i]) {
            console.log('newScore over');
            testArray.splice(i,0,newScore);
        }
        console.log('[' + i + ',' + j + '] = ' + testArray[i][j]);
    }
}
*/