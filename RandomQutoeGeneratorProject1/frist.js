const qutoes = [
    "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "TThe way to get started is to quit talking and begin doing. - Walt Disney"
];

const button = document.querySelector('button');
const quoteContainer = document.querySelector('h1');
button.addEventListener('click', () => {
    const index = Math.floor(Math.random() * 3)
    quoteContainer.textContent = qutoes[index]
})