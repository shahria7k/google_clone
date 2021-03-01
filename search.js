var mainInput = document.querySelector("#mainInput");

const imgSearch = () => {
	let value = mainInput.value;
	window.open(`https://www.google.com.bd/search?&tbm=isch&q=${value}`, "_self");
};
mainInput.addEventListener("keyup", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		imgSearch();
	}
});
