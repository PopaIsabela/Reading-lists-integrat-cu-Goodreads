const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./data/database.db', (err) => {
    if (err) {
        console.error('Eroare la conectarea la baza de date:', err.message);
    } else {
        console.log('Conexiune reușită la baza de date SQLite.');
    }
});

module.exports = db;
