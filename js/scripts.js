var outputArray = [];

$(function(){
  //ping pong game start
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

  //new game start
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
    console.log(outputArray)
    outputArray.forEach(function(output){
      $(".outputList").append("<li>" + output + "</li>");
    });//output array apprend
  });//end submit
});//end jQuery
