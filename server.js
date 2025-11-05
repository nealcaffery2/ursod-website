const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`\n🚀 URSOD website is running at:`);
    console.log(`   http://localhost:${PORT}\n`);
    console.log(`Press Ctrl+C to stop the server.\n`);
});

