const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.resolve(__dirname, 'users.db');
const db = new sqlite3.Database(dbPath);

// Create a table to store users
db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL)', function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Table "users" created successfully');

    // Now you can perform other operations like adding users or querying the table
    // Example: addUser('John Doe', 'john@example.com');
    //         viewUsers(); 
});

// Function to add a user
function addUser(name, email) {
    db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function (err) {
        if (err) {
            return console.error(err.message);
        }
        console.log(`User added with ID: ${this.lastID}`);
    });
}
 
// Function to view all users
function viewUsers() {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log('All Users:');
        rows.forEach(row => {
            console.log(`${row.id} - ${row.name} - ${row.email}`);
        });
    });
}

// Example usage
// addUser('Yash Thesiya', 'yash@example.com');
// addUser('Arpit Ramoliya', 'arpit@example.com');

viewUsers();

// Close the database connection
db.close();
