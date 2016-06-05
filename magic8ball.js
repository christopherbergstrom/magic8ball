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
    animate();
  });
  makeArrays();
}
function animate()
{
  eightBall.style.transition = ".5s linear";
  eightBall.style.backgroundColor = "white";
  var wait4 = setTimeout(function()
  {
    response(type.value);
  }, 500);
  var wait5 = setTimeout(function()
  {
    eightBall.style.backgroundColor = "black";
  }, 1000);
}
function response(value)
{
  if (value === "Classic")
  {
    var num = Math.floor(Math.random() * 20);
    answer.innerHTML=classic[num];
  }
  else if (value === "Funny")
  {
    var num = Math.floor(Math.random() * 22);
    answer.innerHTML=funny[num];
  }
}
function makeArrays()
{
  classic = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
  funny = ["I guess so...", "If you try hard enough", "Sure", "Anything is possible!", "It might happen", "Fingers crossed", "I'll say yes if you hand me a Benjamin Franklin", "Did you really just ask that?", "Of course not", "I don't think so", "Please tell me you're joking", "Probably not...", "Yeah right...", "In your dreams!", "I'm not sure", "I'm not here right now, please try again later", "I can't see that far in the future", "Check your Wi-Fi connection", "System error", "Null pointer exception", "StackOverFlowError", "Sorry, I'm having trouble loading"];
}
