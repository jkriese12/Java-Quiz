// Timer for quiz
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function () {
  seconds--;
  document.getElementById("countdown").textContent = seconds;
  if (seconds <= 0) {
    clearInterval(countdown);
    alert("TIMES UP");
    window.location = "try-again.html";
  }
}, 1000);

//Setting variable selectors
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var questionText = document.querySelector(".questionText");
var answerCorrect = 0;

// Question one content
var questionOne = "Inside which HTML element do we put the JavaScript?";
var q1c1 = "<script>";
var q1c2 = "<scripting>";
var q1c3 = "<javascript>";
var q1c4 = "<js>";

// Question two content
var questionTwo = "How do you write ''Hello World'' in an alert box?";
var q2c1 = "msgBox(''Hello World'');";
var q2c2 = "msg(''Hello World'');";
var q2c3 = "alertBox(''Hello World'');";
var q2c4 = "alert(''Hello World'');";

// Question three content
var questionThree = "How do you write an IF statement in JavaScript";
var q3c1 = "if i = 5";
var q3c2 = "if i == 5 then";
var q3c3 = "if i = 5 then";
var q3c4 = "if (i == 5)";

// Question four content
var questionFour = "How does a FOR loop start?";
var q4c1 = "for (i = 0; i < 5; i++)";
var q4c2 = "for (i = 0; i < 5)";
var q4c3 = "for (i < 5; i++)";
var q4c4 = "for (i =1 to 5)";

// Question five content
var questionFive = "What is the correct way to write a JavaScript array?";
var q5c1 = "var colors = [“red”, “green”, “blue”]";
var q5c2 = "var colors = “red”, “green”, “blue”";
var q5c3 = "var colors = [1:“red”, 2:“green”, 3:“blue”]";
var q5c4 = "var colors = (“red”, “green”, “blue”)";

// Question six content
var questionSix = "Which one of these Disneyland rides is NOT based on a movie?";
var q6c1 = "Mr. Toads Wild Ride";
var q6c2 = "Pinocchio's Daring Adventure";
var q6c3 = "Pirates of the Caribbean";
var q6c4 = "Don't be tricky - they are all based on movies";

// Function to show question
function displayQuestion(q, c1, c2, c3, c4) {
  document.querySelector("main").innerHTML = `<h2 class="questionText">${q}</h2>
  <div class="title"></div>
  <!-- Buttons for user answers-->
  <div class="questionAnswers highScore">
    <button type="button" class="btn btn-primary btn-lg" id="choice1">${c1}</button>
  </div>
  <div class="questionAnswers">
    <button type="button" class="btn btn-primary btn-lg" id="choice2">${c2}</button>
  </div>
  <div class="questionAnswers">
    <button
      type="button"
      class="btn btn-primary btn-lg special"
      id="choice3"
    >${c3}</button>
  </div>
  <div class="questionAnswers">
    <button type="button" class="btn btn-primary btn-lg" id="choice4">${c4}</button>
  </div>`;
}
// Function for correct answer display
function correctAnswerHandler() {
  alert("correct");
}

// Function for incorrect answer display
function incorrectAnswerHandler() {
  alert("Not Quite!");
  seconds -= 10;
}

// Setting text content to match all question and answers for question 1
$("#choice1").text(q1c1);
$("#choice2").text(q1c2);
$("#choice3").text(q1c3);
$("#choice4").text(q1c4);
$(".questionText").text(questionOne);

// On-click functions for each answer - moving user to next question
$("#choice1").on("click", function () {
  correctAnswerHandler();
  nextQuestion2();
});
$("#choice2").on("click", function () {
  incorrectAnswerHandler();
  nextQuestion2();
});
$("#choice3").on("click", function () {
  incorrectAnswerHandler();
  nextQuestion2();
});
$("#choice4").on("click", function () {
  incorrectAnswerHandler();
  nextQuestion2();
});

// Changing text for next question
function nextQuestion2() {
  displayQuestion(questionTwo, q2c1, q2c2, q2c3, q2c4);
  changeAnswer2();
}

// Question 2 updated click handlers
function changeAnswer2() {
  $("#choice1").on("click", function () {
    incorrectAnswerHandler();

    nextQuestion3();
  });
  $("#choice2").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion3();
  });
  $("#choice3").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion3();
  });
  $("#choice4").on("click", function () {
    correctAnswerHandler();
    nextQuestion3();
  });
}

// Changing text for next question
function nextQuestion3() {
  displayQuestion(questionThree, q3c1, q3c2, q3c3, q3c4);
  changeAnswer3();
}

// Question 3 updated click handlers
function changeAnswer3() {
  $("#choice1").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion4();
  });
  $("#choice2").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion4();
  });
  $("#choice3").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion4();
  });
  $("#choice4").on("click", function () {
    correctAnswerHandler();
    nextQuestion4();
  });
}

// Changing text for next question
function nextQuestion4() {
  displayQuestion(questionFour, q4c1, q4c2, q4c3, q4c4);
  changeAnswer4();
}
// Question 4 updated click handlers
function changeAnswer4() {
  $("#choice1").on("click", function () {
    correctAnswerHandler();
    nextQuestion5();
  });
  $("#choice2").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion5();
  });
  $("#choice3").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion5();
  });
  $("#choice4").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion5();
  });
}

// Changing text for next question
function nextQuestion5() {
  displayQuestion(questionFive, q5c1, q5c2, q5c3, q5c4);
  changeAnswer5();
}

// Question 5 updated click handlers
function changeAnswer5() {
  $("#choice1").on("click", function () {
    correctAnswerHandler();
    nextQuestion6();
  });
  $("#choice2").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion6();
  });
  $("#choice3").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion6();
  });
  $("#choice4").on("click", function () {
    incorrectAnswerHandler();
    nextQuestion6();
  });
}

// Changing text for next question
function nextQuestion6() {
  displayQuestion(questionSix, q6c1, q6c2, q6c3, q6c4);
  changeAnswer6();
}

//Question 6 updated click handlers
function changeAnswer6() {
  $("#choice1").on("click", function () {
    incorrectAnswerHandler();
    if (seconds <= 0) {
      window.location.href = "try-again.html";
    } else {
      highScore();
    }
  });
  $("#choice2").on("click", function () {
    incorrectAnswerHandler();
    if (seconds <= 0) {
      window.location.href = "try-again.html";
    } else {
      highScore();
    }
  });
  $("#choice3").on("click", function () {
    correctAnswerHandler();
    if (seconds <= 0) {
      window.location.href = "try-again.html";
    } else {
      highScore();
    }
  });
  $("#choice4").on("click", function () {
    incorrectAnswerHandler();
    if (seconds <= 0) {
      window.location.href = "try-again.html";
    } else {
      highScore();
    }
  });
}
// Function called to show users score and time remaining
function highScore() {
  $("#timeLeft").empty();
  $("button").empty();
  $(".questionAnswers").empty();
  $(".questionText").text("You answered " + answerCorrect + " questions correct!");
  $(".questionText").addClass("title container");
  $(".questionText").css({ "font-size": "60px", "text-align": "center" });
  $("<div></div>")
    .appendTo("h2")
    .css({ color: "green", "margin-top": "100px" })
    .text("Total time remaining " + seconds + " seconds");
  $("div").removeClass("questionAnswers");
  // Creates button link for user to click to take them to their highscore page
  $("<a></a>")
    .appendTo(".highScore")
    .addClass("btn btn-primary btn-lg btn-block btn-hover")
    .text("Enter your score")
    .attr("href", "high-score.html");
}

//DID NOT USE, KEPT FOR LEARNING AND TO GO OVER WITH TUTOR

// Array of question objects
// var questions = [
//     {
//         question: "Inside which HTML element do we put the JavaScript?",
//         choice1: "<script>",
//         choice2: "<scripting>",
//         choice3: "<javascript>",
//         choice4: "<js>",
//         answer: 1,
//     },
//     {
//         question: "How do you write ''Hello World'' in an alert box?",
//         choice1: "msgBox(''Hello World'');",
//         choice2: "msg(''Hello World'');",
//         choice3: "alertBox(''Hello World'');",
//         choice4: "alert(''Hello World'');",
//         answer: 4,
//     },
//     {
//         question: "How do you write an IF statement in JavaScript",
//         choice1: "if i = 5",
//         choice2: "if i == 5 then",
//         choice3: "if i = 5 then",
//         choice4: "if (i == 5)",
//         answer: 4,
//     },
//     {
//         question: "How does a FOR loop start?",
//         choice1: "for (i = 0; i < 5; i++) ",
//         choice2: "for (i = 0; i < 5)",
//         choice3: "for (i < 5; i++)",
//         choice4: "for (i =1 to 5)",
//         answer: 1,
//     },
//     {
//         question: "What is the correct way to write a JavaScript array?",
//         choice1: "var colors = [“red”, “green”, “blue”]",
//         choice2: "var colors = “red”, “green”, “blue”",
//         choice3: "var colors = [1:“red”, 2:“green”, 3:“blue”]",
//         choice4: "var colors = (“red”, “green”, “blue”)",
//         answer: 1,
//     },
//     {
//         question: "Which one of these Disneyland rides is NOT based on a movie?",
//         choice1: "Mr. Toads Wild Ride",
//         choice2: "Pinocchio's Daring Adventure",
//         choice3: "Pirates of the Caribbean",
//         choice4: "Don't be tricky - they are all based on movies",
//         answer: 3,
//     },
// ];
// // Objects for each question
// var question1 = {
//         question: "Inside which HTML element do we put the JavaScript?",
//         choice1: "<script>",
//         choice2: "<scripting>",
//         choice3: "<javascript>",
//         choice4: "<js>",
//         answer: 1,
//     };

// var question2 = {
//     question: "How do you write ''Hello World'' in an alert box?",
//     choice1: "msgBox(''Hello World'');",
//     choice2: "msg(''Hello World'');",
//     choice3: "alertBox(''Hello World'');",
//     choice4: "alert(''Hello World'');",
//     answer: 4,
// };

// var question3 =  {
//     question: "How does a FOR loop start?",
//     choice1: "for (i = 0; i < 5; i++) ",
//     choice2: "for (i = 0; i < 5)",
//     choice3: "for (i < 5; i++)",
//     choice4: "for (i =1 to 5)",
//     answer: 1,
// };

// var question4 = {
//     question: "What is the correct way to write a JavaScript array?",
//     choice1: "var colors = [“red”, “green”, “blue”]",
//     choice2: "var colors = “red”, “green”, “blue”",
//     choice3: "var colors = [1:“red”, 2:“green”, 3:“blue”]",
//     choice4: "var colors = (“red”, “green”, “blue”)",
//     answer: 1,
// };

// var question5 = {
//     question: "What is the correct way to write a JavaScript array?",
//     choice1: "var colors = [“red”, “green”, “blue”]",
//     choice2: "var colors = “red”, “green”, “blue”",
//     choice3: "var colors = [1:“red”, 2:“green”, 3:“blue”]",
//     choice4: "var colors = (“red”, “green”, “blue”)",
//     answer: 1,
// };

// var question6 = {
//     question: "Which one of these Disneyland rides is NOT based on a movie?",
//     choice1: "Mr. Toads Wild Ride",
//     choice2: "Pinocchio's Daring Adventure",
//     choice3: "Pirates of the Caribbean",
//     choice4: "Don't be tricky - they are all based on movies",
//     answer: 3,
// };
