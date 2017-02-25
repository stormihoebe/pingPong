var outputArray = [];
var thirdGameInputArray = [];
var correctThirdGameArray = ["twosAndThrees", "seven", "five"];

$(function(){
  //START FIRST GAME ------------------------------------------------------
  $("#pingForm").submit(function(){
    event.preventDefault();
    outputArray = [];
    $(".outputList").text("");
    var inputNumber = parseInt($("input#inputNumber").val());
    for (index = 1; index <= inputNumber; index++) {
      if ((index%5===0) && (index%3===0)){
        outputArray.push("ping-pong");
      } else if (index%5===0){
        outputArray.push("pong");
      } else if (index%3===0){
        outputArray.push("ping");
      } else {
        outputArray.push(index);
      };
    };
    outputArray.forEach(function(output){
      $(".outputList").append("<li>" + output + "</li>");
    });//output array apprend
  });//end submit
//END FIRST GAME

//START SECOND GAME  ------------------------------------------------------
  $("#differentGameForm").submit(function(){
    event.preventDefault();
    outputArray = [];
    $(".outputList").text("");
    var countTo = parseInt($("input#newCountTo").val());
    var countBy = parseInt($("input#newCountBy").val());
    var word = $("input#newWord").val();
    for (index = 1; index <= countTo; index++) {
      if (index%countBy===0){
        outputArray.push(word);
      } else {
        outputArray.push(index);
      };
    };
    outputArray.forEach(function(output){
      $(".outputList").append("<li>" + output + "</li>");
    });//output array apprend
  });//end submit second game
//END SECOND GAME

//START THIRD GAME  ------------------------------------------------------
  //Start Business Logic for Third Game
  var thirdGameArray = []
  for (index = 1; index <= 20; index++) {
    if ((index%2===0) && (index%3===0)){
      thirdGameArray.push("Cat");
    } else if (index%5===0){
      thirdGameArray.push("Dog");
    } else if (index%7===0){
      thirdGameArray.push("Turtle");
    } else {
      thirdGameArray.push(index);
    };
  };

  //Start UI Logic for Third Game
  thirdGameArray.forEach(function(output){
    $(".quizList").append("<li>" + output + "</li>");
  });
  $("#thirdForm").submit(function(){
    event.preventDefault();
    thirdGameInputArray = [];
    $("input:checkbox[name=counting-way]:checked").each(function(){
      thirdGameInputArray.push($(this).val());
    });
    var correctString = correctThirdGameArray.join("");
    var inputString = thirdGameInputArray.join("");
    if (correctString === inputString) {
      console.log("You are correct!!");
      $(".thirdGameOutput").text("You are Correct! Instead of saying numbers that are both divisible by 3 and 2, I say Cat! Instead of saying numbers divisible by 5 or 7, I say Dog and Turtle, respectively.");
    } else {
      $(".thirdGameOutput").text("That is not quite right. Try Again!");
    };
  });
});//end jQuery

//footer functionality
function ScrollToBottom()
{
window.scrollTo(0, document.body.scrollHeight);
}
