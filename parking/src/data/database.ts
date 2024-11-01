import { Database } from 'bun:sqlite';

// Initialiser la base de données SQLite
const db = new Database('src/data/parking.sqlite');

export default db;
