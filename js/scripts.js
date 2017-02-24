var outputArray = [];




$(function(){
  $("#pingForm").submit(function(){
    event.preventDefault();
    outputArray = [];
    $(".outputList").text("");
    var inputNumber = parseInt($("input#inputNumber").val());
    for (index = 1; index <= inputNumber; index++) {
      if (index%3===0){
        outputArray.push("PING THIS IS A THREE");
      } else {
      outputArray.push(index);
      };
    // for (index = 3; index <= inputNumber; index +=3){
    //   outputArray.push(index);
    //   console.log(outputArray);
    };


    outputArray.forEach(function(output){
      $(".outputList").append("<li>" + output + "</li>");
    });//output array apprend
  });//end submit
});//end jQuery
