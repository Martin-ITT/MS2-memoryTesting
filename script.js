let boardSize = 6; /* 4x3 game -  */

let hasFlippedCard = false; //logic for first click and second click
let lockBoard = false; // only two cards can be fliped at same time
let firstCard, secondCard;


/* call functions on document ready - https://stackoverflow.com/questions/17567176/how-to-call-a-function-inside-document-ready/17567264 */
$(document).ready(function(){
    // call function to shuffle the cards
    cardURL = shuffle(cardURL);
    writeToDocument();
       
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
  /* get random logos - define array */
  /* https://stackoverflow.com/questions/5836833/create-an-array-with-random-values */
  for (var cardURL=[],i=0;i<330;++i) cardURL[i]=i; /* cardURL array to store logo URL's - loop throuhg 330 links */
  /* shuffle logos array */
  function shuffle(array) {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }
  /* function writing to document */
  function writeToDocument() {
      console.log('write to document called');
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
            let firstDiv = document.createElement('div');
            let secondDiv = document.createElement('div');
            const content = document.getElementById('game-board');
            firstDiv.setAttribute("class","memory-card");
            firstDiv.setAttribute("id","card"+i);
            firstDiv.setAttribute("data-framework","card"+i);
            secondDiv.setAttribute("class","memory-card");
            secondDiv.setAttribute("id","card"+i);
            secondDiv.setAttribute("data-framework","card"+i);
            content.appendChild(firstDiv).innerHTML += '<img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';;
            content.appendChild(secondDiv).innerHTML += '<img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';;
            document.querySelectorAll(".card"+i)
            //.innerHTML += '<div class="memory-card" id="card'+i +'" data-framework="card'+i+'"><img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
            /*const fakeImages = document.querySelectorAll(".memory-card");
	        fakeImages.forEach(fakeImage => {
	            fakeImage.innerHTML += '<img class="front-face" src="'+data[x].url+'" alt="Car logo'+i+'"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg"  alt="JS Badge" />';
	        });*/
        }
    });
}

    

/* temporary function to clear document for testing code */
function clearDocument() {
    document.getElementById("demo").innerHTML = "";   
}

function test() {
    console.log(this);
}

// timeout to fix readyState problem 
setTimeout(function() {
console.log('click listener timeout on');
const cards = document.querySelectorAll('.memory-card');
cards.forEach(card => card.addEventListener('click', flipCard));
console.log('click listener timeout off');
},500);

function flipCard() {
    console.log('flipcard called');
    if (lockBoard) return; // rest of the code won't be executed if lockboard true
    if (this === firstCard) return; // prevent double click on first card
    this.classList.toggle('flip');
    // first card has been clicked
    if(!hasFlippedCard) {
        console.log('first card');
        hasFlippedCard = true;
        firstCard = this;
    } 
    //second card click
    else {
        console.log('second card');
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch(); 
    } 
      return;
}

function checkForMatch() {
    console.log('checking match');
    //do cards match?
    //setTimeout(() => { 
        console.log('checking timeout on');
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

function disableCards() {
    console.log('disable cards called');
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}
function unflipCards() {
    console.log('unflip caled');
    lockBoard = true;
    console.log('lockboard on');
    setTimeout(() => { 
    console.log('unflip timer on');
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    lockBoard = false;
    console.log('lockboard off');
    resetBoard();
    },2000);
    console.log('unflip timer off');    
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  
  setTimeout(() => { 
   // IIFE imediately invoked function
  (function shuffleCards() {
      console.log('shuffle called');
      let cards = document.querySelectorAll('.memory-card');//is this legal - defining variable twice
      cards.forEach(card => {
          let randomPos = Math.floor(Math.random() * 100); // returns random number between 0-1 and, multiply to get num 0-11, floor makes it integer 
          card.style.order =randomPos;
      });
  })();
  },1000);
