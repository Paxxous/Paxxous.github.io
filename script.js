console.log("Welcome to the console.");


// Fetch some variables
var up_down = 0;
var right_left = 0;
var you = document.getElementById("you");
var enemy = document.getElementById("enmy");

//randomly position the enemy
enemy.style.right = Math.random() + 'px';

// movement part of game
document.addEventListener('keydown', function(key) {
  // console.log(you.style.marginTop);

  // Controls, wasd and arrow keys
  if (key.key == "w" || key.key == "ArrowUp") {
    // console.log("w");
    up_down = up_down - 10;
    you.style.top = up_down + 'px';      
  }

  if (key.key == "a" || key.key == "ArrowLeft") {
    // console.log("a");
    right_left = right_left - 10;
    you.style.left = right_left + 'px';    
  }
  
  if (key.key == "d" || key.key == "ArrowRight") {
    // console.log("d");
    right_left = right_left + 10;
    you.style.left = right_left + 'px';       
  }

  if (key.key == "s" || key.key == "ArrowDown") {
    // console.log("s");
    up_down = up_down + 10;
    you.style.top = up_down + 'px';       
  }


  // Prevent the character from going off of the game
  if (you.style.left == "580px" || you.style.left == "590px") {
    you.style.left = "0px";
    right_left = 0;
  }

  if (you.style.left == "-10px" || you.style.left == "-20px") {
    you.style.left = "570px";
    right_left = 570;
  }

  if (you.style.top == "580px" || you.style.top == "590px") {
    you.style.top = "0px";
    up_down = 0;
  }

  if (you.style.top == "-10px" || you.style.top == "-20px") {
    you.style.top = "570px";
    up_down = 570;
  }

  // sorry if this isn't the ideal code
});

//Check if the player and the enemy is colliding to cause a game over. :(
var isColliding = setInterval(function() {
  //fetch both the player and the enemy's properties
  var wherePlayer = you.getBoundingClientRect();
  var whereEnemy = enemy.getBoundingClientRect();

  //detect if player is touching enemy
  var horizontal = wherePlayer.x < whereEnemy.x + whereEnemy.width && wherePlayer.x + wherePlayer.width > whereEnemy.x;
  var vertical = wherePlayer.y < whereEnemy.y + whereEnemy.width && wherePlayer.y + wherePlayer.width > whereEnemy.y;

  //
  if (horizontal && vertical) {
    console.log("touching enemy");

    setInterval(function(){}, 1000);
    // window.location.reload()
  }
}, 10);

var i = 0;
var animation = setInterval(function() {
  let difficulty = 100; // in short how many enemys you woudl like to create

  // create an enemey
  

  


  var newenemy = document.getElementById("enmy").cloneNode(true)
  newenemy.id = "asdf";
  console.log(i)
  document.getElementById("enmy").parentNode.appendChild(newenemy);


  
  
  // createEnemy();

  // create enemys for the amount we want to create
  for (let i = 0; i < difficulty; i++) {
    console.log("Hello world");
  }

}, 1000);

