const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: true }));

// Route handler for the root URL
app.get('/', (req, res) => {
    const htmlContent = `
        <h1>Welcome to the Voting App!</h1>
        <p>What's your favorite pet?</p>
        <form action="/vote" method="post">
            <button type="submit" name="vote" value="cat">Cat</button>
            <button type="submit" name="vote" value="dog">Dog</button>
        </form>
    `;
    res.send(htmlContent);
});

// Route handler for processing votes
app.post('/vote', (req, res) => {
    const vote = req.body.vote;
    if (vote === 'cat' || vote === 'dog') {
        // Process the valid vote here
        console.log(`Received vote for: ${vote}`);
        res.send(`Thank you for voting for ${vote}!`);
    } else {
        // Handle invalid votes
        res.status(400).send('Invalid vote. Please vote for either cats or dogs.');
    }
});

app.listen(port, () => {
    console.log(`Voting app listening at http://localhost:${port}`);
});