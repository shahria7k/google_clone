var mainInput = document.querySelector("#mainInput");
var mike = document.querySelector("#mike");
const imgSearch = () => {
	let value = mainInput.value;
	if (value != null) {
		window.open(
			`https://www.google.com.bd/search?q=${value}&tbm=isch`,
			"_self"
		);
	}
};
mainInput.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		imgSearch();
	}
});

const search = () => {
	let input = document.querySelector("#mainInput");
	if (input.value != null) {
		window.open(`https://www.google.com.bd/search?&q=${input.value}`, "_self");
	}
};
const clear = () => {
	let input = document.querySelector("#mainInput");
	input.innerHTML = "";
	input.value = "";
	input.innerText = "";
};
function runSpeechRecognition() {
	// get output div reference
	var output = document.getElementById("mainInput");
	// get action element reference
	// var action = document.getElementById("action");
	// new speech recognition object
	var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
	var recognition = new SpeechRecognition();
	console.log(SpeechRecognition);

	// This runs when the speech recognition service starts
	recognition.onstart = function () {
		output.placeholder = "listening, please speak...";
		// console.log("hello world")
	};

	recognition.onend = function () {
		recognition.stop();
		mike.style = "";
	};

	// This runs when the speech recognition service returns result
	recognition.onresult = function (event) {
		transcript = event.results[0][0].transcript;
		// var confidence = event.results[0][0].confidence;
		// output.innerHTML = "<b>Text:</b> " + transcript + "<br/> <b>Confidence:</b> " + confidence*100+"%";
		// output.classList.remove("hide");
		output.value = transcript;
		// console.log(transcript)
		mike.style = "";
		console.log("hello");
		imgSearch();
	};

	// start recognition

	// console.log(event.target)
	var mike = document.querySelector("#mike");
	mike.style =
		"animation-name: example; animation-duration: 1s; animation-iteration-count: infinite;";
	recognition.start();
}
