var testString = "";

// To make the input field accept LETTERS ONLY:
function alphaOnly(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90) || key == 8); // key == 8 allows backspace
};

// Submit Button once clicked:
var submit = document.getElementById("submit");
submit.addEventListener("click", submitInput);

function submitInput() {
	testString = document.getElementById("userinput").value;
	reversal();
	alphabits();
	palindrome();
}

// Execute these functions on submit:
function reversal() {
	var wordReverse = testString.split('').reverse().join('');
	document.getElementById("backwardsoutput").innerHTML += wordReverse;
}

function alphabits() {
	var wordAlphabetize = testString.split('').sort().join('');
	document.getElementById("alphabeticaloutput").innerHTML += wordAlphabetize;
}

function palindrome() {
	if (testString == testString.split('').reverse().join('')) {
		document.getElementById("palindromeoutput").innerHTML += "Your word is a palindrome!";	
	}
	else {
		document.getElementById("palindromeoutput").innerHTML += "Your word is NOT a palindrome!";
	}
}
