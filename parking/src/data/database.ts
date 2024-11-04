import { Database } from 'sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, 'parking.sqlite');//trouvé sur un forum d'aide
const db = new Database(dbPath);

export default db;
