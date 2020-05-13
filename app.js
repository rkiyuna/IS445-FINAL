//established even number functions
function evenNum() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

//check for valid numbers from user
  if (num1 <= 2 || num1 >= 100){
    console.log(parseInt(num1,10));
    document.getElementById("msg").innerHTML += "Number 1 input" + num1 + " is not a valid number.";
    document.getElementById("result").innerHTML = "";
}
if (num2 <= 2 || num2 >= 100){
    document.getElementById("msg").innerHTML += "Number 1 input" + num2 + " is not a valid number.";
    document.getElementById("result").innerHTML = "";
}
else if (num1 >= 2 && num1 <= 100 && num2 >= 2 && num2 <= 100){
    calculateEvenNum(num1,num2);
}


