//multiplication
//initialize variables
var x=0;
var y=0;
var userInput=0;
var stop=false;
var wrongAnswers=0;
var totalQuestions=0;
var solution=1;
totalQuestions=prompt("how many questions?");
for (question=0; question<totalQuestions; question++){
  wrongAnswers+=multiPractice();
  console.log(question);
}
if (wrongAnswers==0){
alert ("charlie you've won");
}
else{
 alert ("you got "+wrongAnswers+" out of "+question);
}

/* allows for multiple questions
 * genetaes a pair of random numbers
 * asks for solution
 * if its wrong it loops them back
 * and reutrns 1
 */ 
function multiPractice(){
  
    wrong=0;
    var x=Math.floor(Math.random()*7)+3;
    var y=Math.floor(Math.random()*6)+3;
    solution=x*y;
  while(userInput!=solution && stop==false){
    userInput=prompt("what is "+x+" times "+y+" ?");
    if (userInput==solution){
      alert("correct");
    }
   
    else if (userInput=="stop"){
      stop=true;
    }
     else{
      alert("incorrect");
      wrong=1;
    }
   }
 return wrong;
}
