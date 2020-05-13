function evenNum() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  // check if the numbers fit criteria
  if (num1 <= 2 || num1 >= 100 || num2 <= 2 || num2 >= 100) {
    document.getElementById("msg").innerHTML =
      "Invalid input, please try again.";
    document.getElementById("result").innerHTML = "";
  } else if (num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100) {
    calculateEvenNum(num1, num2);
  }
}
function calculateEvenNum(firstNum, secondNum) {
  var eNumArray = [];
  var sNum = 0;
  var bNum = 0;

