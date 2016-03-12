//global variables

//function defintions
function playGame (max) {
	for (var i = 1; i <= max; i++) {
	    var msg = "";
	    if (!(i % 3)) msg += "Fizz";
	    if (!(i % 5)) msg += "Buzz";
		var cont = (msg || i);
		$("body").append("<p>" + cont + "</p>");
	}
}
function verifyNum (num) {
	var val = +num;
	if (typeof val==="number" && val%1===0) {
		return true;
	}
	else {
		return false
	}
}
function getNum () {
	limit = prompt("Enter a positive integer:", "enter number here");
	if (verifyNum(limit)) {
		playGame(limit);
	}
	else{
		alert("Your entry was not a valid positive integer, please try again.");
		getNum();
	};
}
//function usage
$(document).ready(function() {

	getNum();

});