//backgound는 확장프로그램이 클릭되어 실행 될 때 실행되는 자바스크립트 부분
chrome.browserAction.onClicked.addListener(function(tab) {
   chrome.tabs.executeScript(null, {file: "myscript.js"});
});
