const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((item) => {
	item.textContent.toLowerCase().includes("js") && item.remove();
});
