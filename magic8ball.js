var type;
var body;
var eightBall;
var answer;
var classic = [];
var funny = [];
var crude = [];

window.onload = function()
{
  body = document.querySelector("body");
  type = document.getElementById("type");
  answer = document.getElementById("answer")
  eightBall = document.getElementById("eightBall");
  eightBall.addEventListener("click", function()
  {
    // console.log(type.value);
    response(type.value);
  });
  makeArrays();
  // console.log("loaded");
}
function response(value)
{
  if (value === "Classic")
  {
    var num = Math.floor(Math.random() * 20);
    answer.innerHTML=classic[num];
  }
  else if (value === "Classic")
  {

  }
  else if (value === "Classic")
  {

  }
}
function makeArrays()
{
  classic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
}
// Classic

// It is certain
// It is decidedly so
// Without a doubt
// Yes, definitely
// You may rely on it
// As I see it, yes
// Most likely
// Outlook good
// Yes
// Signs point to yes
// Reply hazy try again
// Ask again later
// Better not tell you now
// Cannot predict now
// Concentrate and ask again
// Don't count on it
// My reply is no
// My sources say no
// Outlook not so good
// Very doubtful
