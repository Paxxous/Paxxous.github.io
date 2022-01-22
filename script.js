console.log("Welcome to the console.");

for (let i = 100; i > 0; i--) {
  console.log("Loop test :D");
}

var up_down = 0;
var right_left = 0;
var you = document.getElementById("you");


// movement part of the game :D
document.addEventListener('keydown', function(key) {
  // console.log(you.style.marginTop);

  // Controls, wasd and arrow keys
  if (key.key == "w" || key.key == "ArrowUp") {
    // console.log("w");
    up_down = up_down - 10;
    you.style.marginTop = up_down + 'px';      
  }

  if (key.key == "a" || key.key == "ArrowLeft") {
    // console.log("a");
    right_left = right_left - 10;
    you.style.marginLeft = right_left + 'px';    
  }
  
  if (key.key == "d" || key.key == "ArrowRight") {
    // console.log("d");
    right_left = right_left + 10;
    you.style.marginLeft = right_left + 'px';       
  }

  if (key.key == "s" || key.key == "ArrowDown") {
    // console.log("s");
    up_down = up_down + 10;
    you.style.marginTop = up_down + 'px';       
  }


  // Prevent the character from going off of the game
  if (you.style.marginLeft == "570px" || you.style.marginLeft == "580px") {
    you.style.marginLeft = "0px";
    right_left = 0;
  }

  if (you.style.marginLeft == "-10px" || you.style.marginLeft == "-20px") {
    you.style.marginLeft = "570px";
    right_left = 570;
  }

  if (you.style.marginTop == "580px" || you.style.marginTop == "590px") {
    you.style.marginTop = "0px";
    up_down = 0;
  }

  if (you.style.marginTop == "-10px" || you.style.marginTop == "-20px") {
    you.style.marginTop = "570px";
    up_down = 570;
  }
});