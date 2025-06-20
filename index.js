const express = require('express');
const app = express();
const PORT = 3000;

// Example Endpoint
app.get('/random/quote', (req, res) => {
    const quotes = [
        "Jangan menyerah!",
        "Terus belajar!",
        "Kamu hebat, Handii!",
        "Semangat coding!"
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.json({ status: true, result: randomQuote });
});

// Default endpoint
app.get('/', (req, res) => {
    res.send('API is Running... 👌');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
