// server.js
const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = 3000;

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sahil@1234',
    database: 'personaldatabase'
});
db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Serve static files (CSS, JS, images, etc.) from the 'public' directory
// Serve static files (CSS, JS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve uploaded files (images, documents, etc.) from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

// Rest of your code...



// API endpoint to retrieve files from the database
app.get('/files', (req, res) => {
    db.query('SELECT * FROM files', (err, results) => {
        if (err) {
            console.error('MySQL query error:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
