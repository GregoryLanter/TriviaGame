$(document).ready(function(){//start game
    //declate variables
    var card = []; //array to hold question objects

    //question objects
    var q1 = {
        id: 1,
        q: "Beer is the second most popular beverage in the world. What is the first?",
        a1: "Tea",
        a2: "Milk",
        a3: "Water",
        a4: "Soda", 
        correct: "a1",
        image: "tea.jpg"
    }
    var q2 = {
        id: 2,
        q: "Which is the largest brewery in the United States?",
        a1: "Coors",
        a2: "Anheuser-Busch",
        a3: "Molson",
        a4: "Samuel Adams",
        correct: "a2",
        image: "ab.jpg"
    }
    var q3 = {
        id: 3,
        q: "What is the oldest brewery still operating in the United States?",
        a1: "Anheuser-Busch",
        a2: "Samuel Adams",
        a3: "D.G. Yuengling Brewery",
        a4: "Coors",
        correct: "a3",
        image: "yuengling.jpg"
    }
    var q4 = {
        id: 4,
        q: "In what year was the first brewery built in America?",
        a1: "1666",
        a2: "1712",
        a3: "1642",
        a4: "1701",
        correct: "a3",
        image: "america.jpg"
    }
    var q5 = {
        id: 5,
        q: "The thickness of beer in your mouth can be referred to as what?",
        a1: "Body",
        a2: "Head",
        a3: "Wort",
        a4: "Foam",
        correct: "a1",
        image: "thickness.jpg"
    }
    var q6 = {
        id: 6,
        q: "Lagers are ideally meant to be drunk at what temperature in Farenheit?",
        a1: "70-90 degrees",
        a2: "40-50 degrees",
        a3: "50-60 degrees",
        a4: "10-20 degrees",
        correct: "a2",
        image: "tempurature.jpg"
    }
    var q7 = {
        id: 7,
        q: "What is the amber liquid extracted from malted barley?",
        a1: "Ale",
        a2: "Yeast",
        a3: "Wort",
        a4: "Mead",
        correct: "a3",
        image: "wort.jpg"
    }
    var q8 = {
        id: 8,
        q: "What type of beer has the highest alcohol content?",
        a1: "Kolsch",
        a2: "Pale Ale",
        a3: "Pilsner",
        a4: "Stout",
        correct: "a4",
        image: "stout.jpg"
    }
    var q9 = {
        id: 9,
        q: "What style of beer is produced with bottom fermentation?",
        a1: "Lagers",
        a2: "Ales",
        a3: "Champagne",
        a4: "Near Beer",
        correct: "a1",
        image: "lager.jpg"
    }
    var q10 = {
        id: 10,
        q: "What style of beer is produced with top fermentation?",
        a1: "Lager",
        a2: "Ales",
        a3: "Champagne",
        a4: "Near Beer",
        correct: "a2",
        image: "ale.jpg"
    }
    var q11 = {
        id: 11,
        q: "What ingedient in beer is responsible for fermentation?",
        a1: "Malted Barley",
        a2: "Hops",
        a3: "Yeast",
        a4: "Water",
        correct: "a3",
        image: "yeast.jpg"
    }
    var q12 = {
        id: 12,
        q: "What European Beer Brand uses a red star in its logo?",
        a1: "Budvar",
        a2: "Guinness",
        a3: "Becks",
        a4: "Heineken",
        correct: "a4",
        image: "heineken.jpg"
    }
    var q13 = {
        id: 13,
        q: "This beer was once advertised as being From the Land of Sky Blue Waters?",
        a1: "Hamms",
        a2: "Strohs",
        a3: "Stag",
        a4: "Black Label",
        correct: "a1",
        image: "hamms.jpg"
    }
    var q14 = {
        id: 14,
        q: "According to The Code of Hammurabi of ancient Babylonia (c. 1750 B.C.) what could happen to a merchant for diluting beer?",
        a1: "Forced to pay a fine",
        a2: "Put to Death",
        a3: "Forced out of Business",
        a4: "Thier hand would be removed",
        correct: "a2",
        image: "hammurabi.jpg"
    }
    var q15 = {
        id: 15,
        q: "What beer was called The Champagne of Bottled Beers?",
        a1: "Coors",
        a2: "Budwiser",
        a3: "Miller High Life",
        a4: "Boston Lager",
        correct: "a3",
        image: "miller.jpg"
    }
    var q16 = {
        id: 16,
        q: "The German beer purity law or Reinheitsgebot, says beer can only contain water, barley, hops and what?",
        a1: "Rice",
        a2: "Corn",
        a3: "Beechwood",
        a4: "Yeast",
        correct: "a4",
        image: "reinheitsgebot.png"
    }
    var q17 = {
        id: 17,
        q: "In 1965, a Belgian royal decree mandated that lambics must contain what percentage of wheat.",
        a1: "35%",
        a2: "30%",
        a3: "25%",
        a4: "20%",
        correct: "a1",
        image: "lambic.jpg"
    }
    var q18 = {
        id: 18,
        q: "What king is known as the patron saint of beer?",
        a1: "King Wilhelm II",
        a2: "King Gambrinus",
        a3: "Frederick I",
        a4: "Charles III",
        correct: "a2",
        image: "gambrinus.jpg"
    }
    var q19 = {
        id: 19,
        q: "What country has the most individual beer brands?",
        a1: "United States",
        a2: "Germany",
        a3: "Belgium",
        a4: "Brazil",
        correct: "a3",
        image: "belgium.png"
    }
    var q20 = {
        id: 20,
        q: "Which city hosts the outrageous festival of beer drinking known as Oktoberfest?",
        a1: "Berlin",
        a2: "Hamburg",
        a3: "Frankford",
        a4: "Munich",
        correct: "a4",
        image: "oktoberfest.jpg"
    }

    var timer = 31;
    var intervalId;
    var nextInterval;
    var selectedCard;
    var correctCount;
    var wrongCount;
    var unansweredCount;
    var used = [];
    var modeAnswering;
    var modeReset;

    //load question objects into the array
    card.push(q1);
    card.push(q2);
    card.push(q3);
    card.push(q4);
    card.push(q5);
    card.push(q6);
    card.push(q7);
    card.push(q8);
    card.push(q9);
    card.push(q10);
    card.push(q11);
    card.push(q12);
    card.push(q13);
    card.push(q14);
    card.push(q15);
    card.push(q16);
    card.push(q17);
    card.push(q18);
    card.push(q19);
    card.push(q20);

//get a question make sure not to repeat a question
    function getQuestion(){
        var bool = true;
        var num;
        for(;bool;){
            num = Math.floor(Math.random() * card.length);
            if(used.indexOf(num) == -1){
                used.push(num)
                bool = false;
            };
        }
        return num;
    }

    //display the question
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
        modeAnswering = true; //use this to control mouseover events
    }

    //check the answer
    function updateQ(correct, answer){
        modeAnswering = false;
        if(correct == "correct"){
            //correct answer
            $("#q").text(answer + " is Correct!");
            $("#a1").text(" ");
        }else{
            //wrong answer
            if(correct == "wrong"){
                $("#q").text("Sorry that was not correct!");
            }else{
                //time out
                $("#q").text("Sorry you are out of time!");
            }
            $("#a1").text("The correct answer was: " + answer);
        }
        //clear answers
        $("#a2").text(" ");
        $("#a3").text(" ");
        $("#a4").text(" ");
        //after 10 questions the game is over
        if(correctCount+wrongCount+unansweredCount == 10){
            //game is over, after three seconds of displaying the correct answer move to the end screen
            nextInterval = setInterval(endScreen, 3000);
        }else{  
            //next question after 3 seconds of displaying correct answer
            nextInterval = setInterval(run, 3000);
        }
        // show the picture
        $(".picHolder").css("display","block");
        var img = $("<img id ='pic' class='img' />").attr({
            src: "../TriviaGame/assets/images/" + selectedCard.image,
            alt: selectedCard.image,
            width: 250,
        }).appendTo('.picHolder');
        
    };

    //update timer on the screen
    function updateTimer(){
        timer--;
        $("#timer").text("Time remaining: "+ timer +" seconds");
        if(timer == 0){
            clearInterval(intervalId);
            endQ();
        }
    }

    //time out with no answer 
    function endQ(){
        unansweredCount++;
        updateQ("outOfTime", answer())
    }

    //start a question
    function run(){
        timer = 31;
        clearInterval(intervalId);
        clearInterval(nextInterval);
        updateTimer();
        intervalId = setInterval(updateTimer, 1000);
        $("#pic").remove();
        $(".picHolder").css("display", "none");
        displayQ();

    }

    //reset the game
    function reset(){
        modeReset = false;
        wrongCount = 0;
        correctCount = 0;
        unansweredCount = 0;
        for(;used.length != 0;){
            used.pop(used[0]);
        }
        run();

    }

    //check for a correct answer
    function answer(){
        switch(selectedCard.correct){
            case "a1":
                return(selectedCard.a1);
                break;
            case "a2":
                return(selectedCard.a2);
                break;
            case "a3":
                return(selectedCard.a3);
                break;
            case "a4":
                return(selectedCard.a4);
                break;
        }
    }

    //display the end screen
    function endScreen(){
        modeReset = true;
        clearInterval(nextInterval);
        clearInterval(intervalId);
        $(".picHolder").css("display", "none");
        $("#q").text("Complete! Here are your results");
        $("#a1").text("Correct: " + correctCount);
        $("#a2").text("Wrong: " + wrongCount);
        $("#a3").text("Timed out: "+ unansweredCount);
        $("#a4").text("Start Over");
        selectedCard = "";
    }

    //handle start button clicks and start the game
    $(".start").on("click", function(){
        reset();
    });

    //answer has been clicked
    $(".answer").on("click", function(event){
        $(this).css("background-color", "transparent");
        clearInterval(intervalId);
        //CORRECT answer
        if(event.target.id == selectedCard.correct){
            correctCount++;
            updateQ("correct", answer());
        }else{
            //WRONG answer
            if(event.target.textContent != "Start Over"){
                wrongCount++;
                updateQ("wrong", answer());
            }else{
                //start game over
                reset();

            }
        };
        //run();
    });

    //color answer on mouse over
    $(".answer").mouseover(function(){
        if(modeAnswering){
            $(this).css("background-color", "red");
        }
    });

    //turn off color
    $(".answer").mouseleave(function(){
        $(this).css("background-color", "transparent");
    });

    //color start over
    $("#a4").mouseover(function(){
        if(modeReset){
            $(this).css("background-color", "red");
        }
    });

    //turn off color
    $("#a4").mouseleave(function(){
        $(this).css("background-color", "transparent");
    });
});
