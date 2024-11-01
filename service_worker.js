chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.get(['topic', 'apiUrl', 'accessToken', 'prefillEnabled', 'darkModeEnabled'], function(items) {
    if (!items.topic && !items.apiUrl && !items.accessToken) {
      chrome.storage.sync.set({ topic: '', apiUrl: '', accessToken: '', prefillEnabled: true, darkModeEnabled: true }, function() {
        console.log("The ntfy configuration is set to empty.");
      });
    }
  });
});
