const ALARM_SOUND = chrome.runtime.getURL('assets/sounds/alarm.mp3');

chrome.runtime.onInstalled.addListener(() => {
    console.log('Motivation Blocker Extension installed');
});

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        const url = details.url;
        if (url.includes('linkedin.com') && containsMotivationalContent(url)) {
            playAlarm();
            return { cancel: true }; // Block the request
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);

function containsMotivationalContent(url) {
    // Logic to determine if the URL contains motivational content
    // This is a placeholder; implement your own logic here
    return true; // Assume it contains motivational content for demonstration
}

function playAlarm() {
    const audio = new Audio(ALARM_SOUND);
    audio.play();
}