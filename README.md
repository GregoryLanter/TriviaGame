# TriviaGame
Trivia game using JQuery and Timers/Intervals
In this trivia game we are using an interval to give the user 30 seconds to answer a question.
We load the questions in the program.
We randomly pick a question.
Display the question and 4 choices for answers.
We track the number correct, wrong and timded out.

We make a object out of the question, the answers and the correct answer.
We load these objects into an array and then choose one. 
When we choose a question we make sure we do not repeat a question.

We use the mouseover/mouseleave events to highlight the answers.

Once a question is answered we show an image associated with the correct answer.
If the answer is correct we tell the user they were right.
If a question is timed out or wrong twe let the user know the correct answer.
