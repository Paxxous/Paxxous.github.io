console.log("Welcome to the console.");

for (let i = 100; i > 0; i--) {
  console.log("Loop test :D");
}


// movement part of the game :D
document.addEventListener('keypress', function(key) {
  var you = document.getElementById("you");
  // console.log("key pressed")
  var marginUp;
  var marginSide;

  if (key.key == "w") {
    console.log("w");
    // marginUp = marginUp + 1;
    you.style.marginLeft = "auto";      
  }
  if (key.key == "a") {
    console.log("a");    
  }
  if (key.key == "s") {
    console.log("s");    
  }
  if (key.key == "d") {
    console.log("d");    
  }



  // var posRight = key.offsetY;

  // you.style.marginLeft = posLeft + 'px';
  // you.style.marginTop = posRight + 'px';

  // console.log(posLeft + posRight);
});