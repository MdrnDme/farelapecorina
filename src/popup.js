document.addEventListener('DOMContentLoaded', function() {
    const blockButton = document.getElementById('block-button');
    const alarmAudio = new Audio(chrome.runtime.getURL('assets/sounds/alarm.mp3'));

    blockButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: 'blockMotivationalPosts' });
            alarmAudio.play();
            alert('Cheesy alarm activated! Motivational posts will be blocked.');
        });
    });
});