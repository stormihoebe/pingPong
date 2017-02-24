var outputArray = [];




$(function(){
  $("#pingForm").submit(function(){
    event.preventDefault();
    var inputNumber = parseInt($("input#inputNumber").val());
    for (index = 1; index <= inputNumber; index++) {
      outputArray.push(index);
    };
    console.log(outputArray);
  });//submit
});//jQuery
