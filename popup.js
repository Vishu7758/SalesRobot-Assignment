document.addEventListener('DOMContentLoaded', function() {
    const clickButton = document.getElementById('clickConnectButtons');
    const statusText = document.getElementById('status');

    clickButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "clickConnectButtons"});
        });
    });

    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.status) {
            statusText.textContent = request.status; // Update the status with progress
        }
        if(request.errorMsg) {
            statusText.textContent = request.errorMsg; // Update the status with error message
        }
    });
});