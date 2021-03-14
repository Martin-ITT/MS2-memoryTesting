let boardSize; /* game size */
let boardSizeClass; /* CSS class  */
let matchedPairs = 0; /* stores each pair matched */
let cardUrl; /* array of image urls */
let hasFlippedCard = false; //logic for first click and second click
let lockBoard = false; // only two cards can be fliped at same time
let firstCard, secondCard; //variables to store and compare selected cards
let numberOfFlips = 0; // flip counter
let startTime; // time limit variable in minutes
let time; // time limit stored in seconds
const timeIdSelector = document.getElementById('timeID');
let timerOn = false; // timer not running
//const cards = document.querySelectorAll('.memory-card'); has to be inside timeout function


// When document ready
$('document').ready(function () {
    // grab the query parameter from the url and pass it in to create a game - https://github.com/David-A-Ray/MS2-Whats-your-poison-memory-game/blob/master/
    mode = new URLSearchParams(window.location.search).get('mode');
    if (mode === "highScores") { // check if highscores has been selected first
        displayHighScores(highScores);
    } else if (mode === "Easy") {
        //create 6 pairs game
        boardSize = 6;
        boardSizeClass = "easy";
    }
    else if (mode === "Medium") {
        //create 8 pairs game
        boardSize = 8;
        boardSizeClass = "medium";
    }
    else if (mode === "Hard") {
        //create 10 pairs game
        boardSize = 10;
        boardSizeClass = "hard"
    }
    // get random logos 
    cardURL = getRandomImages(cardURL);
    // create game 
    createGame();
});


/* call functions on document ready - https://stackoverflow.com/questions/17567176/how-to-call-a-function-inside-document-ready/17567264 
$(document).ready(function(){
    // call function to shuffle the cards
    cardURL = shuffle(cardURL);
    createGame();
       
  });

/* get data from JSON */
function getData(cb) {
    var xhr = new XMLHttpRequest(cb);
    xhr.open("GET", "cars.json", true);
    xhr.send();
  
    xhr.onreadystatechange = function() {
      
      if (this.readyState == 4 && this.status == 200) {
          cb(JSON.parse(this.responseText));   
      }
    }
  };
  /* fill cardURL array from  */
  /* https://stackoverflow.com/questions/5836833/create-an-array-with-random-values */
  for (cardURL=[],i=0;i<330;++i) cardURL[i]=i; /* cardURL array to store logo URL's - loop throuhg 330 links */
  /* shuffle logos array */
  function getRandomImages(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
  /* function creating game - document writer */
  function createGame() {
    console.log('create game called');
    //sessionStorage.removeItem("flips");
    //sessionStorage.removeItem("time");
    sessionStorage.clear(); // clear sessionStorage for new game
    console.log(sessionStorage);
    //call data function to retreive urls and create divs - cards
    getData(function(data) {
        /*
        for (let i=1; i<boardSize; i++) {
        let x = cardURL[i];
        let carBox = document.querySelectorAll("#card"+i);
        carBox.forEach((e) => {
        e.innerHTML = '<img src="'+data[x].url+'" alt="Car logo" width="150" height="120" border="1px black solid"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg" style="width: 120px" alt="JS Badge" />';
        */
        for (let i=0; i<boardSize; i++) {
            let x = cardURL[i];
            //document.getElementById("game-board").innerHTML += '<div class="memory-card" id="card'+i +'" data-framework="card'+i+'"><img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
            //document.getElementById("game-board").innerHTML += '<div class="memory-card" id="card'+i +'" data-framework="card'+i+'"><img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
            
            //creating first card element
            let firstDiv = document.createElement('div');
            //creating second card element
            let secondDiv = document.createElement('div');
            //variable where created elements will be appended
            const content = document.getElementById('game-board');
            //setting necessary attributes
            firstDiv.setAttribute("class","memory-card");
            firstDiv.setAttribute("id","card"+i);
            firstDiv.classList.add("card"+boardSizeClass);
            firstDiv.setAttribute("data-framework","card"+i);
            secondDiv.setAttribute("class","memory-card");
            secondDiv.setAttribute("id","card"+i);
            secondDiv.classList.add("card"+boardSizeClass);
            secondDiv.setAttribute("data-framework","card"+i);
            //appending elements to a parent
            content.appendChild(firstDiv).innerHTML += '<img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
            content.appendChild(secondDiv).innerHTML += '<img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
            //document.querySelectorAll(".card"+i)
            //.innerHTML += '<div class="memory-card" id="card'+i +'" data-framework="card'+i+'"><img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
            /*const fakeImages = document.querySelectorAll(".memory-card");
            fakeImages.forEach(fakeImage => {
                fakeImage.innerHTML += '<img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
            });*/
        }
    // add class to identify game size for css
    const changeDiv = document.getElementById('game-board');
    changeDiv.classList.add(boardSizeClass);
    });
}

    

/* temporary function to clear document for testing code 
function clearDocument() {
    document.getElementById("demo").innerHTML = "";   
}

function test() {
    console.log(this);
}
*/

// card click event listener
// timeout to fix readyState problem - wouldn't flip card
setTimeout(function() {
console.log('click listener timeout on');
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));
console.log('click listener timeout off');
},100);

//flip card on click function
function flipCard() {
    console.log('flipcard called');
    if (boardSize === 10 && !timerOn) startTimer();
    timerOn = true;
    if (lockBoard) return; // rest of the code won't be executed if lockboard true. return = exit function
    if (this === firstCard) return; // prevent double click on first card
    this.classList.toggle('flip'); // toggle flip class on selected card
    // first card has been clicked - hasFlippedCard is false
    if(!hasFlippedCard) {
        console.log('first card');
        hasFlippedCard = true; // card flipped then set hasFlippedCard to true
        firstCard = this; // store card in first variable 
    } 
    //second card click
    else {
        console.log('second card');
        hasFlippedCard = false; // first card has been already clicked as hasFlippedCard is true
        secondCard = this; // set second card variable
        numberOfFlips ++; // flip counter
        sessionStorage.setItem("flips", numberOfFlips);// add number of flips to session storage
        console.log('flips in session storage:' + sessionStorage.getItem("flips"));
        $('#flipsID').html('FLIPS: '+numberOfFlips);
        console.log("flips:" +numberOfFlips);
        checkForMatch(); // call compare cards function
    } 
      return; //exit current function
}
// compare flipped cards
function checkForMatch() {
    console.log('checking match');
    //do cards match?
    //setTimeout(() => { 
        console.log('checking timeout on');
        //if cards match call function to remove click listeners. if cards dont match call another function flip them back
        let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
        isMatch ? disableCards() : unflipCards();
        /*
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            // cards match - remove event listeners click
          disableCards();
        }
        else {
            //not matching
            unflipCards();
        }*/
    //},100);// do I need this timer?
    console.log('checking timeout off');
}

// remove click event listeners 
function disableCards() {
    console.log('disable cards called');
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matchedPairs ++; //matched pairs counter
    // call function to clear/restore variables
    resetBoard();
    checkGameWon ();
}
// flip cards back
function unflipCards() {
    console.log('unflip caled');
    lockBoard = true; // only two cards can be flipped at a same time
    console.log('lockboard on');
    setTimeout(() => { 
        console.log('unflip timer on');
        firstCard.classList.remove('flip'); // unflip cards
        secondCard.classList.remove('flip');
        lockBoard = false; // unlock board so cards can be clicked again
        console.log('lockboard off');
        resetBoard(); // call function to clear/restore variables
    },1500); //cards will flip back in 1.5 sec
    console.log('unflip timer off');    
}
// restore variables as before clicking cards
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  
  setTimeout(() => { 
   // IIFE imediately invoked function
   // shuffle cards on board
  (function shuffleCards() {
      console.log('shuffle called');
      let cards = document.querySelectorAll('.memory-card');//is this legal - defining variable twice
      cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 100); // returns random number between 0-1 and, multiply to get num 0-100, floor makes it integer 
          card.style.order =randomPos;
      });
  })();
},500);

//check if all cards are flipped
function checkGameWon(){
    console.log('checkgamewon called');
    console.log('matched pairs: ' +matchedPairs);
    let gameWon = matchedPairs === boardSize;
    gameWon ? gameComplete() :resetBoard();
}
// game was won toggle modal on
function gameComplete() {
    console.log('gamecomplete called');
    $('#gameWonModal').modal('toggle');
}

function startTimer() {
    // timer https://www.youtube.com/watch?v=x7WJEmxNlEs
    // https://stackoverflow.com/questions/5978519/how-to-use-setinterval-and-clearinterval
    var interval = setInterval(updateTimer, 1000); //run time every second and stop on out of time
    
    startTime = .5;
    time = startTime * 60;
    
    function updateTimer() {
       // while (time != 1) {
            const minutes = Math.floor(time/60);
            let seconds = time % 60;

            seconds = seconds < 10 ? '0' + seconds : seconds; //format time - if less than ten seconds add leading zero otherwise display normal

            timeIdSelector.innerHTML = `TIME: ${minutes}: ${seconds}`;
        if (time != 0) { // stops timer
        time --;
        sessionStorage.setItem("time", time); // store time left in session storage
        console.log(time);
        }
        if (time == 0 ) { // end game
            clearInterval(interval);
            gameLost();
            return;
        }
      //  }
    }
}
function gameLost() {
    console.log('gameLost called');
    //$('#gameLostModal').modal('toggle');
    window.open("gameOver.html","_self");
}