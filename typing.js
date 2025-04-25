const text = `"O ME! O LIFE!... OF THE QUESTIONS OF THESE RECURRING;
OF THE ENDLESS TRAINS OF THE FAITHLESS... OF CITIES FILLED WITH THE FOOLISH;
WHAT GOOD AMID THESE, O ME, O LIFE?"

AN ANSWER TO WHITMAN’S QUESTION— 
THAT YOU EXIST; THAT THE POWERFUL PLAY GOES ON AND YOU MAY CONTRIBUTE A VERSE. 
WE CREATE BECAUSE WE ARE MEMBERS OF THE HUMAN RACE. 
AND THE HUMAN RACE IS FILLED WITH PASSION.

THOREAU WROTE, "THE MASS OF MEN LEAD LIVES OF QUIET DESPERATION. 
WHAT IS CALLED RESIGNATION IS CONFIRMED DESPERATION." 
WE MUST STRIVE TO FIND OUR OWN VOICE—THE LONGER WE WAIT, THE HARDER IT BECOMES.

— IN MEMORY OF MY TIKTOK JOURNEY IN 2021`.trim(); // Removes all leading/trailing spaces and line breaks

let index = 0;
const speed = 50; // Typing speed in milliseconds

function typeText() {
    const typedText = document.getElementById("typed-text");
    const container = document.getElementById("typing-container");

    if (index < text.length) {
        typedText.innerHTML += text.charAt(index);
        index++;
        // Auto-scroll the container as text is typed
        container.scrollTop = container.scrollHeight;
        setTimeout(typeText, speed);
    }
}

// Start typing effect when page loads
window.onload = function () {
    typeText();
};