const keywords = [
    "motivational",
    "inspirational",
    "success",
    "grind",
    "hustle",
    "dream",
    "achieve",
    "believe",
    "you can do it",
    "never give up"
];

function blockMotivationalPosts() {
    const posts = document.querySelectorAll('div'); // Adjust selector based on LinkedIn's post structure
    posts.forEach(post => {
        const text = post.innerText.toLowerCase();
        if (keywords.some(keyword => text.includes(keyword))) {
            post.remove();
            playAlarm();
        }
    });
}

function playAlarm() {
    const audio = new Audio(chrome.runtime.getURL('assets/sounds/alarm.mp3'));
    audio.play();
}

setInterval(blockMotivationalPosts, 5000); // Check for motivational posts every 5 seconds