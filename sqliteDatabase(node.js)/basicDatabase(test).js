const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const dbpath = path.resolve(__dirname, 'user.db');
const db = new sqlite3.Database(dbpath);

db.run('CREATE TABLE IF NOT EXISTS user(id INTEGER PRIMARY KEY, name TEST NOT NULL,emil TEXT NOT NULL )', function (err) {
    if (err) {
        return console.error(err.message);
    }
    console.log('Table Create Successfully');
});

function adddata(name, email) {
    db.run('INSERT INTO user (name,email) VALUES (?,?)', [name, email], function (err) {
        if (err) {
            return console.error(err.message);
        };
        console.log(`User add with ${this.lastID}`);
    });
}
adddata('test2', 'test2@gmail.com');
adddata('test3', 'test3@gmail.com');

function displaydata() {
    db.all('SELECT * FROM user', [], (err, row) => {
        if (err) {
            throw err;
        }
        console.log('All user data');
        row.forEach(rows => {
            console.log(`${rows.id}-${rows.name}-${rows.email}`);
        });
    });
}
displaydata();

db.close();