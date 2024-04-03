function createFooter() {
	let footer = document.createElement("footer");
	footer.textContent = `Copyright © ${new Date().getFullYear()} najju1997`;
	return footer;
}
export default createFooter;