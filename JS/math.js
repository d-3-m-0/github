var welcomeMessage;
welcomeMessage = "Can't wait to get started!";
alert(welcomeMessage);

var visitorNumber1 = prompt("Pick a number between 1 and 100!");
var input1 = parseFloat(visitorNumber1);
var visitorNumber2 = prompt("Ok. Humour me. One more time. Another number between 1 and 100 please!");
var input2 = parseFloat(visitorNumber2);

var message = "<h1> Math is super fun. Just watch what we can do with " + input1 + " and " + input2 +  ".</h1>";
message += visitorNumber1 + " + " + visitorNumber2 + " = " + (input1 + input2);
message += "<br>" + visitorNumber1 + " * " + visitorNumber2 + " = " + (input1 * input2) + "</br>";
message += visitorNumber1 + " / " + visitorNumber2 + " = " + (input1 / input2);
message += "<br>" + visitorNumber1 + " - " + visitorNumber2 + " = " + (input1 - input2) + "</br>";
document.write(message);
