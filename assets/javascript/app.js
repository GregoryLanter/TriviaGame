$(document).ready(function(){//start game
    //declate variables
    var card = [];
    var q1 = {
        id: 1,
        q: "Q1",
        a1: "A1.1",
        a2: "A1.2",
        a3: "A1.3",
        a4: "A1.4", 
        correct: "a4"
    }
    var q2 = {
        id: 2,
        q: "Q2",
        a1: "A2.1",
        a2: "A2.2",
        a3: "A2.3",
        a4: "A2.4",
        correct: "a1" 
    }
    var q3 = {
        id: 3,
        q: "Q3",
        a1: "A3.1",
        a2: "A3.2",
        a3: "A3.3",
        a4: "A3.4",
        correct: "a2" 
    }
    var q4 = {
        id: 4,
        q: "Q4",
        a1: "A4.1",
        a2: "A4.2",
        a3: "A4.3",
        a4: "A4.4",
        correct: "a3" 
    }
    var timer = 31;
    var intervalId;
    var nextInterval;
    var selectedCard;
    var correct;
    var wrong;
    var unanswered;
    var questionCount;

    card.push(q1);
    card.push(q2);
    card.push(q3);
//get a question
    function getQuestion(){
        return(Math.floor(Math.random() * card.length));
    }

    function displayQ(){
        var qNum = getQuestion();
        var question = card[qNum];
        selectedCard = card[qNum];
        $(".startContainer").css("display", "none");
        $(".qContainer").css("display", "block");
        $("#q").text(question.q);
        $("#a1").text(question.a1);
        $("#a2").text(question.a2);
        $("#a3").text(question.a3);
        $("#a4").text(question.a4);
        $("#"+question.correct).attr("value", "correct");
    }

    function updateTimer(){
        timer--;
        $("#timer").text("Time remaining: "+ timer +" seconds");
        if(timer == 0){
            clearInterval(intervalId);
            endQ();
            nextInterval = setInterval(run, 3000)
        }
    }

    function endQ(){
        unanswered++;
    }

    function run(){
        timer = 31;
        clearInterval(intervalId);
        clearInterval(nextInterval);
        updateTimer();
        intervalId = setInterval(updateTimer, 1000);
        displayQ();
    }
    function reset(){
        wrong = 0;
        correct = 0;
        unanswered = 0;
        questionCount = 0;
        run();
    }

    $(".start").on("click", function(){
        reset();
    });

    $(".answer").on("click", function(event){
        if(event.target.id == selectedCard.correct){
            alert("You are correct");
            correct++;
        }else{
            alert("Sorry not correct");
            wrong++;
        };
        run();
    });

    $(".answer").hover(function(element){
        $(element.target.id).css("background-color", "red");
    });
});
