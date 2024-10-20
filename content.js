async function clickConnectButtons() {
    const connectButtons = document.querySelectorAll('button[aria-label^="Invite "]');
    if(connectButtons.length === 0) {
        chrome.runtime.sendMessage({errorMsg: `No connect buttons found`});
        return 0;
    }
    
    let clickCount = 0;
    for (const button of connectButtons) {
        if (button.textContent.trim() === 'Connect') {
            // Random delay between 5-10 seconds
            const delay = Math.floor(Math.random() * (5000) + 5000);
            await new Promise(resolve => setTimeout(resolve, delay));

            button.click();
            clickCount++;
            await new Promise(resolve => setTimeout(resolve, delay));

            try {
                // Wait for the "Send without note" button in the modal and click it
                const sendWithoutNote = document.querySelector('button[aria-label^="Send "]');
                sendWithoutNote.click();
                chrome.runtime.sendMessage({status: `Clicked ${clickCount} connect button(s)`});
            } catch (error) {
                console.log('Send button not found, moving to next connection');
                chrome.runtime.sendMessage({errorMsg: `Send button not found, moving to next connection)`});
            }
        }
    }

    return clickCount;
}


// Listen for messages from the extension UI
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "clickConnectButtons") {
        clickConnectButtons().then(clickCount => {
            sendResponse({status: `Clicked ${clickCount} connect buttons`});
        });
        // Indicates to send a response asynchronously
        return true;
    }
});
