chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
      return {cancel: true}; 
    },
    {urls: 
      ["*://*.doubleclick.net/*",
      "*://*.googleadservices.com/*",
      "*://*.googlesyndication.com/*",
      "*://*.moat.com/*",
      "*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*"]
    },
    ["blocking"]
  );
	