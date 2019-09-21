
var array = [];

//QUESTION 1
var button1 = $('.btn-one');
var response1 = $('#program-response1');

button1.on("click", checkAnswerOne);

function checkAnswerOne() {
  event.preventDefault();
  var answer1 = $('.answer1').val();
  if (answer1==="All of the above") {
    response1.text("You're correct! There are so many cool things about you, and these are just a few. You're an authentic person who's unafraid to be themselves, and I love how you encourage others to do the same");
    array.push(1);
 } else {
    response1.text("Try again!");
    $('.answer1').val("");
  }
}

//QUESTION 2
var button2 = $('.btn-two');
var response2 = $('#program-response2');

button2.on("click", checkAnswerTwo);

function checkAnswerTwo() {
  event.preventDefault();
  var answer2 = $('.answer2').val();
  if (answer2==="All of the above") {
    response2.text("You're right! There are so many people in our family other than those we share a last name with. My view of 'family' is so flexible because of the example you've set of expanding ours and welcoming all in");
    array.push(1);
 } else {
    response2.text("Try again!");
    $('.answer2').val("");
  }
}

//QUESTION 3
var button3 = $('.btn-three');
var response3 = $('#program-response3');

button3.on("click", checkAnswerThree);

function checkAnswerThree() {
  event.preventDefault();
  var answer3 = $('.answer3').val();
  if (answer3==="All of the above, plus more, plus things that haven't even happened yet!") {
    response3.text("Nice job! You're right, there are so many great memories of you I have, and I am gaining new ones every day. I am so grateful to have you as a pervasive and consistent presence as I've grown up (and let's be honest, as I STILL grow up)");
    array.push(1);
 } else {
    response3.text("WRONG.");
    $('.answer3').val("");
  }
}

//QUESTION 4
var button4 = $('.btn-four');
var response4 = $('#program-response4');

button4.on("click", checkAnswerFour);

function checkAnswerFour() {
  event.preventDefault();
  var answer4 = $('.answer4').val();
  if (answer4==="Your hatred towards otters") {
    response4.text("Yeah, that really sucks that you don't like otters. They're so cute and smart and never even did anything to you. Why must you be like this??");
    array.push(1);
 } else {
    response4.text("No, I like that. That's pretty cool.");
    $('.answer4').val("");
  }
}

//QUESTION 5
var button5 = $('.btn-five');
var response5 = $('#program-response5');

button5.on("click", checkAnswerFive);

function checkAnswerFive() {
  event.preventDefault();
  var answer5 = $('.answer5').val();
  if (answer5==="Depends... is it an African or European swallow?") {
    response5.text("Nicely done. In case you're wondering, if we were talking European swallows, the answer is actually 11 m/s, or 24 miles per hour.");
    array.push(1);
 } else {
    response5.text("INCORRECT (you just got shot off the mountain)");
    $('.answer5').val("");
  }
}

//FINAL BUTTON
var button6 = $('.final-btn');
var response6 = $('#program-response6');

button6.on("click", finalFunction);

function finalFunction() {
  event.preventDefault();
  if (array.length === 5) {
    response6.text("I love you lots, and hope you've had a great birthday week! Maybe this is just a great way to elongate it? You rock. Enjoy Montana, and here's the gift that is coming in the mail: https://rocketbookhelp.zendesk.com/hc/en-us");
  } else {
    response6.text("Don't cheat-- check all your answers above first!");
  }
}
