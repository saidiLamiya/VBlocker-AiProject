/* background.js
 *
 * BACKGROUND SCRIPT
 *
 * This is loaded once when you reload the extension, and it is
 * responsible for passing messages back and forth between the popup
 * JS and the content script JS on each open tab.
 */

console.log("BACKGROUND PAGE ACTIVATED, NOW LISTENING!");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if (message.method === 'runFilter') {
    console.log("RUNNING FILTER WITH", message.allKeywords);
  }
});

