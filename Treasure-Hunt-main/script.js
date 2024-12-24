//first page
function game() {
  location.href = "game.html";
}

//second page

var randomno = Math.floor(Math.random() * 100) ;
console.log(randomno);
var chance = 10;
function check() {
  chance--;
  document.getElementById("chance").innerHTML = "Remaining lives:" + chance;
  var number = document.getElementById("value");
  number = Number(values.value);
  if (number > 100) {
    alert("Please enter valid number!!");
  } else if (number == randomno) {
    location.href = "win.html";
  } else if (number > randomno) {
    var high = document.getElementById("message");
    high.innerHTML = "Your guess is high";
  } else if (number < randomno) {
    var low = document.getElementById("message");
    message.innerHTML = "Your guess is low";
  }
  if (chance == 0) {
    chance = 10;
    location.href = "loss.html";
  }
}

function reset()
{
    document.getElementById("values").value=' ';
    
}
// tresure opened or failed
function home()
{
    location.href="index.html"
}