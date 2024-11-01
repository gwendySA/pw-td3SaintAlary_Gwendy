import { Database } from 'bun:sqlite';

const db = new Database('parking.sqlite');

export function initializeDatabase() {
    try {
        db.transaction(() => {
            // Créer la table "cities"
            db.run(`
                CREATE TABLE IF NOT EXISTS "cities" (
                    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
                    "name" TEXT NOT NULL UNIQUE,
                    "slug" TEXT NOT NULL UNIQUE,
                    "location" TEXT,
                    "country" TEXT NOT NULL
                );
            `);

            // Créer la table "parkings"
            db.run(`
                CREATE TABLE IF NOT EXISTS "parkings" (
                    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
                    "name" TEXT NOT NULL UNIQUE,
                    "location" TEXT,
                    "numberOfPlaces" INTEGER NOT NULL,
                    "opened" INTEGER NOT NULL DEFAULT 1,
                    "hourlyRate" REAL NOT NULL,
                    "city_id" INTEGER NOT NULL,
                    FOREIGN KEY("city_id") REFERENCES "cities"("id")
                );
            `);

            // Créer la table "spots"
            db.run(`
                CREATE TABLE IF NOT EXISTS "spots" (
                    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
                    "parking_id" INTEGER NOT NULL,
                    FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
                );
            `);

            // Créer la table "parks"
            db.run(`
                CREATE TABLE IF NOT EXISTS "parks" (
                    "id" TEXT PRIMARY KEY,
                    "startedAt" TEXT NOT NULL,
                    "endedAt" TEXT,
                    "vehicleNumberPlate" TEXT,
                    "spot_id" INTEGER NOT NULL,
                    "price" REAL NOT NULL DEFAULT 0,
                    FOREIGN KEY("spot_id") REFERENCES "spots"("id")
                );
            `);

            // Ajouter des index pour améliorer les performances
            db.run(`CREATE INDEX IF NOT EXISTS idx_city_name ON cities(name)`);
            db.run(`CREATE INDEX IF NOT EXISTS idx_parking_city_id ON parkings(city_id)`);
            db.run(`CREATE INDEX IF NOT EXISTS idx_spot_parking_id ON spots(parking_id)`);
            db.run(`CREATE INDEX IF NOT EXISTS idx_park_spot_id ON parks(spot_id)`);
        })();

        console.log('Tables bien crées.');
    } catch (error) {
        console.error('Erreur lors de la création:', error);
    }
}

// Appel de la fonction pour initialiser la base de données
initializeDatabase();