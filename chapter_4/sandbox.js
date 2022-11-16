// arguments & parametrs

const speak = function (name = "soran", time = "night") {
	console.log(`good ${time} ${name}`);
};

speak();
speak("sahar", "morning");
speak("mahsa");
