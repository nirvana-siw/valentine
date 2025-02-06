const messages = [
    "Are you sure mam?",
    "Really sure MJ??",
    "Are you positive?",
    "Bacchuu please...",
    "Just think about it!",
    "I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Pem nahi khane dunga...",
    "Kissi kar dunga sabke saamne! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}