// Timer for quiz
var seconds = document.getElementById("countdown").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) {clearInterval(countdown); alert("TIMES UP")} 
    }, 1000); 

    var choice1 = document.getElementById("choice1");
    var choice2 = document.getElementById("choice2");
    var choice3 = document.getElementById("choice3");
    var choice4 = document.getElementById("choice4");

   console.log(question1.choice1);
// Array of question objects
var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<scripting>",
        choice3: "<javascript>",
        choice4: "<js>",
        answer: 1,
    },
    {
        question: "How do you write ''Hello World'' in an alert box?",
        choice1: "msgBox(''Hello World'');",
        choice2: "msg(''Hello World'');",
        choice3: "alertBox(''Hello World'');",
        choice4: "alert(''Hello World'');",
        answer: 4,
    },
    {
        question: "How do you write an IF statement in JavaScript",
        choice1: "if i = 5",
        choice2: "if i == 5 then",
        choice3: "if i = 5 then",
        choice4: "if (i == 5)",
        answer: 4,
    },
    {
        question: "How does a FOR loop start?",
        choice1: "for (i = 0; i < 5; i++) ",
        choice2: "for (i = 0; i < 5)",
        choice3: "for (i < 5; i++)",
        choice4: "for (i =1 to 5)",
        answer: 1,
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        choice1: "var colors = [“red”, “green”, “blue”]",
        choice2: "var colors = “red”, “green”, “blue”",
        choice3: "var colors = [1:“red”, 2:“green”, 3:“blue”]",
        choice4: "var colors = (“red”, “green”, “blue”)",
        answer: 1,
    },
    {
        question: "Which one of these Disneyland rides is NOT based on a movie?",
        choice1: "Mr. Toads Wild Ride",
        choice2: "Pinocchio's Daring Adventure",
        choice3: "Pirates of the Caribbean",
        choice4: "Don't be tricky - they are all based on movies",
        answer: 3,
    },
];
// Objects for each question
var question1 = {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<scripting>",
        choice3: "<javascript>",
        choice4: "<js>",
        answer: 1,
    };

var question2 = {
    question: "How do you write ''Hello World'' in an alert box?",
    choice1: "msgBox(''Hello World'');",
    choice2: "msg(''Hello World'');",
    choice3: "alertBox(''Hello World'');",
    choice4: "alert(''Hello World'');",
    answer: 4,
};

var question3 =  {
    question: "How does a FOR loop start?",
    choice1: "for (i = 0; i < 5; i++) ",
    choice2: "for (i = 0; i < 5)",
    choice3: "for (i < 5; i++)",
    choice4: "for (i =1 to 5)",
    answer: 1,
};

var question4 = {
    question: "What is the correct way to write a JavaScript array?",
    choice1: "var colors = [“red”, “green”, “blue”]",
    choice2: "var colors = “red”, “green”, “blue”",
    choice3: "var colors = [1:“red”, 2:“green”, 3:“blue”]",
    choice4: "var colors = (“red”, “green”, “blue”)",
    answer: 1,
};

var question5 = {
    question: "What is the correct way to write a JavaScript array?",
    choice1: "var colors = [“red”, “green”, “blue”]",
    choice2: "var colors = “red”, “green”, “blue”",
    choice3: "var colors = [1:“red”, 2:“green”, 3:“blue”]",
    choice4: "var colors = (“red”, “green”, “blue”)",
    answer: 1,
};

var question6 = {
    question: "Which one of these Disneyland rides is NOT based on a movie?",
    choice1: "Mr. Toads Wild Ride",
    choice2: "Pinocchio's Daring Adventure",
    choice3: "Pirates of the Caribbean",
    choice4: "Don't be tricky - they are all based on movies",
    answer: 3,
};











