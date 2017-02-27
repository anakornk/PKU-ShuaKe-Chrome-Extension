// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('browserAction Clicked');
  chrome.tabs.executeScript({
    file: 'script.js'
  });
});
