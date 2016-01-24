// User Interface Logic
$(function() {
  $("form.leapYear").submit(function(event) {
    var userInput = parseInt($("input.userInput").val());  // grab user input from site
    var result = leapYear(userInput);  // plug user input into the business function

    $(".error, .output, .negative").empty();  // clears output before displaying
    if (result === "error") {
      $(".error").text("Please just enter a number.");
    } else if (result === "negative") {
      $(".negative").text(userInput + " is negative. Please enter a positive number.");      
    } else if (result === true) {
      $(".output").text(userInput + " is a leap year");
    } else if (result === false) {
      $(".output").text(userInput + " is not a leap year");
    }

    $(".results").show();     // displays hidden results <div>
    event.preventDefault();
  });
});


// Business Logic
var leapYear = function(year) {
  if (isNaN(year)) {
    return "error";
  } else if (year < 0) {
    return "negative";
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};



// if (isNaN(year)) {   // is error or not
//   return "error";
// } else














//
