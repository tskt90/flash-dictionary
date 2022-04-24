function addWords() {
	alert("単語を登録してください");
}
chrome.action.onClicked.addListener((tab) => {
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: showAlert
	});
});
