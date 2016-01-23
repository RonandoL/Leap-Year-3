// Business Logic
var leapYear = function(year) {  // year parameter
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};








// User Interface Logic
// $(document).ready(function() {
//   $("form#IDselector").submit(function(event) {

//
//     // It's all good baby.'
//     event.preventDefault();
//   });
// });
