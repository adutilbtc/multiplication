/* Multiplication Merit: JS Katas
 *
 *  GROUP ONE
 *
 */

// 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
// 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
// 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
var x = 0;
var y = 0;
var userInput=0;
var solution = 0;
var stop = false;
var question = 0;
var correctAnswers;
var wrongAnswers=0;


for (question=1; question<11; question++){
x = Math.floor(Math.random()*7)+3;
y = Math.floor(Math.random()*7)+3;
solution=x*y;
while(userInput!=solution){
userInput = prompt("what is "+x+" times "+y+ "?");
  if(solution!=userInput)alert("incorrect");
}
alert("correct");
}

/* Multiplication Merit: JS Katas
 *
 *  GROUP TWO
 *
 *
* 1. Embed all code in a For loop that runs 10 times.
* 2. Move code parts 1-3 into a function called multiPractice, and call multiPractice within the For loop.
* 3. Count how many not-right-first-answers and return that count from multiPractice.
* 4. Accept manual input for loop (not 10 but "questions") and calculate percent correct first time. 
* 5. At "stop" or at loop end, report answer percent correct.  If no wrong answers, say "Charlie, you've won!"
*/
