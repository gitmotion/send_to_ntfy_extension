# send_to_ntfy_extension

## gitmotion additions
Added Enable Prefill with Url and Enable Dark Mode Options / Checkboxes:
- for more customizability and quality of life improvements
- refactored code so it's more extensible and reusable

| Feature / Update | Description |
|---|---|
| Enable Prefill with URL Option | - Checkbox allowing users to enable/disable adding the page URL to the message. <br> - Useful for sending notifications without the URL. (Saves to storage) |
| **Prefill Functionality** | - Unchecking/checking the checkbox and saving the config updates the message in real-time. <br> - Removes or appends the page URL to the message beginning. <br> - Prevents duplicate removals/additions if the message is edited before saving config. |
| **Enable Dark Mode** | - Checkbox allowing users to enable/disable dark mode for the extension's UI. (Saves to storage) |
| Refactored popup.js | - Hoisted functions and global variables for execution before declaration. <br> - Enables asynchronous functionality by retrieving data from storage once. <br> - Previously called `chrome.storage.sync.get()` three times, now called once onload and stores values in global variables. |
| Modularized Functions | - Improved extensibility by modularizing functions. <br> - Allows independent function calls (e.g., `getConfigs`, `saveConfig`, `updateUI`, `showStatus`, `showWarning`, etc.) from anywhere. <br> - Facilitates future refactoring into separate files. |
| Retained Functionality | - All previous functionalities are maintained and tested. |

##

| Screenshot | Demo |
|---|---|
| <a href="https://github.com/user-attachments/assets/f90afec9-a1c0-4db9-ad15-3b1439e6a1bf" target="_blank">![](https://github.com/user-attachments/assets/f90afec9-a1c0-4db9-ad15-3b1439e6a1bf)</a> | <a href="https://github.com/user-attachments/assets/10e70aa5-65d3-4494-bb5a-0eccb7618002" target="_blank">![](https://github.com/user-attachments/assets/10e70aa5-65d3-4494-bb5a-0eccb7618002)</a> |

##

# Description
Simple browser extenstion to send urls or text to ntfy

# Features 
 - Send the current url or text to preconfigured topics
 - Optional authentication via token
 - Change ntfy server
 - Supports Manifest V3

# Browser Stores
[![Firefox](https://github.com/TheDuffman85/send_to_ntfy_extension/assets/9296618/1219eda6-e480-4859-855c-730e8027379e)](https://addons.mozilla.org/de/firefox/addon/send-to-ntfy/)

[![Chrome](https://github.com/TheDuffman85/send_to_ntfy_extension/assets/9296618/48fa46f9-b210-40bf-92ef-e6797b38bdcc)](https://chromewebstore.google.com/detail/send-to-ntfy/kfiegffaamihidajjcingmognibehdlb)

[![Edge](https://github.com/TheDuffman85/send_to_ntfy_extension/assets/9296618/8389d2f8-39c1-4a42-9d6f-1af0f49277e3)](https://microsoftedge.microsoft.com/addons/detail/send-to-ntfy/nlcjgpmaicbjkjdicgiaighhlihfhafj)

# Screenshot
![grafik](https://github.com/TheDuffman85/send_to_ntfy_extension/assets/9296618/a87f1c2b-b7d4-4d5a-8f38-60436871abe6)
