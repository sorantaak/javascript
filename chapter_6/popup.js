const button = document.querySelector("button");
const popupOverlay = document.querySelector(".popup-wrapper");
const close = document.querySelector(".popup-close");
const popup = document.querySelector(".popup");

button.addEventListener("click", () => {
	popupOverlay.style.display = "block";
});

popup.addEventListener("click", (e) => {
	e.stopPropagation();
});

close.addEventListener("click", () => {
	popupOverlay.style.display = "none";
});
popupOverlay.addEventListener("click", () => {
	popupOverlay.style.display = "none";
});
