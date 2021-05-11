//FUN QUIZZ GAME

var readlineSync = require('readline-sync');
var score = 0;
var userName = readlineSync.question("What is your name ? ");
console.log("Welcome "+userName+" to, Do you know Saba!!");

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer)
  {
    console.log("right");
    score++;
  }
  else
  {
    console.log("wrong");
  }
}

console.log("Current Score : ",score);
console.log("------------");
console.log("Answer in Yes or No");
var questions = [{
  question: " Saba's favourite color is black ?",
  answer: "Yes"
},
{
  question: "Saba is a beach person?",
  answer: "Yes"
},
{
  question: "Saba like roses?",
  answer: "No"
},
{
  question: "Saba likes to watch horror movies?",
  answer: "No"
}]

for (var i=0;i<questions.length;i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

console.log("Your Total Score ="+score);
