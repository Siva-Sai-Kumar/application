const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to SQLite database
const db = new sqlite3.Database('./db/database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

// Create table if not exists
db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    age INTEGER,
    dob DATE
)`);

// Submit form data
app.post('/submit', (req, res) => {
    const { name, email, age, dob } = req.body;
    db.run('INSERT INTO users (name, email, age, dob) VALUES (?, ?, ?, ?)', [name, email, age, dob], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/data');
        }
    });
});

// Retrieve and display data
app.get('/data', (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send('Internal Server Error');
        } else {
            res.send(`
                <h1>User Data</h1>
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Date of Birth</th>
                    </tr>
                    ${rows.map(row => `
                        <tr>
                            <td>${row.id}</td>
                            <td>${row.name}</td>
                            <td>${row.email}</td>
                            <td>${row.age}</td>
                            <td>${row.dob}</td>
                        </tr>
                    `).join('')}
                </table>
            `);
        }
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
