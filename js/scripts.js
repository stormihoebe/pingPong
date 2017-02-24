var outputArray = [];

$(function(){
  // $('#about, #rules, #return').height($(window).height());
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
});//end jQuery
