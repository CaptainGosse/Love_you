const fonts = [
    "Lobster, cursive",
    "Dancing Script, cursive",
    "Indie Flower, cursive",
    "Pacifico, cursive",
    //"Satisfy, cursive",
    //"Tangerine, cursive",
    //"Courgette, cursive"
];
const words = ['любимая', 'котик','любимка', 'котёнок', 'звёздочка', 'кити', 'зайка', 'Николенька', 'Николька', 'киса', 'любимочка', 'леди Николь', 'милая', 'милая звёздочка', 'моя звёздочка','моя королева', 'золотце', 'котейка', 'Николечка', 'дорогая', 'самая самая']
let interval;

const colors = []
const fontSizes = ["2rem","2.25rem", "2.5rem", "3rem", "3.25rem"]; // Add more sizes

function startRoulette() {
    let time = 5000; // time to stop (3 seconds)
    let speed = 200; // speed of word switching (in ms)

    clearInterval(interval); // Clear any running intervals

    interval = setInterval(() => {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
        const randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
        const display = document.getElementById('word-display');
        
        display.textContent = randomWord;
        display.style.fontFamily = randomFont;
        display.style.fontSize = randomFontSize;
        display.style.color ="#C472CC";
    }, speed);

    // Stop the roulette after 'time' milliseconds
    setTimeout(() => {
        clearInterval(interval);
    }, time);
}