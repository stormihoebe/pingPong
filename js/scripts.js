//------------------------------BUISINESS LOGIC---------------------------------
  //START FIRST GAME BACK END -----------------------------------------------
var outputArray = [];
var pingPongCount = function(number){
  for (index = 1; index <= number; index++) {
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
};
  //START SECOND GAME BACK END ------------------------------------------------
var secondGameCount = function(countTo, countBy, word){
  for (index = 1; index <= countTo; index++) {
    if (index%countBy===0){
      outputArray.push(word);
    } else {
      outputArray.push(index);
    };
  };
};
//START THIRD GAME BACK END -----------------------------------------------
var thirdGameInputArray = [];
var correctThirdGameArray = ["twosAndThrees", "seven", "five"];
var thirdGameArray = []
var correctString
var inputString
var thirdGameCounting = function(){
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
};
var message
var testArrays = function(){
  correctString = correctThirdGameArray.join("");
  inputString = thirdGameInputArray.join("");
  if (correctString === inputString) {
    message = "You are Correct! Instead of saying numbers that are both divisible by 3 and 2, I say Cat! Instead of saying numbers divisible by 5 or 7, I say Dog and Turtle, respectively."
  } else {
    message = "That is not quite right. Try Again!";
  };
};
thirdGameCounting();
//---------------------------------UI LOGIC---------------------------------
$(function(){
  //START FIRST GAME FRONT END--------------------------------------------
  $("#pingForm").submit(function(){
    event.preventDefault();
    outputArray = [];
    $(".outputList").text("");
    var inputNumber = parseInt($("input#inputNumber").val());
    pingPongCount(inputNumber);
    outputArray.forEach(function(output){
      $(".outputList").append("<li>" + output + "</li>");
    });//output array apprend
  });

//START SECOND GAME  FRONT END--------------------------------------------
  $("#differentGameForm").submit(function(){
    event.preventDefault();
    outputArray = [];
    $(".outputList").text("");
    var countTo = parseInt($("input#newCountTo").val());
    var countBy = parseInt($("input#newCountBy").val());
    var word = $("input#newWord").val();
    secondGameCount(countTo, countBy, word);
    outputArray.forEach(function(output){
      $(".outputList").append("<li>" + output + "</li>");
    });//output array apprend
  });
//START THIRD GAME FRONT END-------------------------------------------------
  thirdGameArray.forEach(function(output){
    $(".quizList").append("<li>" + output + "</li>");
  });
  $("#thirdForm").submit(function(){
    event.preventDefault();
    thirdGameInputArray = [];
    $("input:checkbox[name=counting-way]:checked").each(function(){
      thirdGameInputArray.push($(this).val());
    });
    testArrays();
    $(".thirdGameOutput").text(message);
  });
});//end jQuery

//footer functionality
function ScrollToBottom(){
  window.scrollTo(0, document.body.scrollHeight);
};
