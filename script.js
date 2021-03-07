let boardSize = 12; /* 4x3 game */
/*let myCards = [];
*/
/* call functions on document ready - https://stackoverflow.com/questions/17567176/how-to-call-a-function-inside-document-ready/17567264 */
$(document).ready(function(){
    // we call the function
    validate();
  });
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
  /* https://stackoverflow.com/questions/5836833/create-an-array-with-random-values */
  for (var a=[],i=0;i<330;++i) a[i]=i;

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
  a = shuffle(a);

  console.log(a);
  function writeToDocument() {
    getData(function(data) {
        for (let i=1; i<7; i++) {
        let x = a[i];
        let carBox = document.querySelectorAll("#card"+i);
        carBox.forEach((e) => {
        e.innerHTML = '<img src="'+data[x].url+'" alt="Car logo" width="150" height="120" border="1px black solid"><img class="back-face" src="./www.pexels.com--photo--yellow-nissan-classic-car-beside-gray-beige-concrete-building-69020.jpg" style="width: 120px" alt="JS Badge" />';
        });
        /*myCards[i] = data[i];
        console.log(myCards[i].url);*/
        }
       
  });
}
function clearDocument() {
    document.getElementById("demo").innerHTML = "";   
}