## Instructions to run
1. Clone the git repo
2. Enable developer mode on chrome extensions
3. Click on load unpacked
4. Select the cloned repo
5. Extension should be visible in your chrome extensions

## Design Decsrciption
1. `manifest.json`:
It contains the metdata information like name, version, permissions, etc.
2. `popup.html`, `popup.css` & `popup.js`:
These file contains HTML code, CSS styling and JS script for the extension UI shown in the chrome. `popup.js` contains event listeners to recieve and send data from extension to the current open HTML page and vice-versa.
3. `content.js`:
This file contains the main script to auto click the connect button on the current page one by one with random delay of 5-10 seconds.