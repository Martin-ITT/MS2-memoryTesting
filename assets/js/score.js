var testArray = [
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