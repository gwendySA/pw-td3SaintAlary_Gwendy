import { Database } from 'bun:sqlite';
import City from "./models/City";
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
            // insertion données table villes
            db.run(`
                INSERT INTO cities (id ,name, slug, location, country) VALUES
                    (1,'Aix-en-Provence', 'aix-en-provence', '{"latitude": 43.533329, "longitude": 5.43333}', 'France'),
                    (2,'La Spezia', 'la-spezia', '{"latitude": 44.238366, "longitude": 9.6912326}', 'Italie'),
                    (3,'Aix-la-Chapelle', 'aix-la-chapelle', '{"latitude": 50.776351, "longitude": 6.083862}', 'Allemagne'),
                    (4,'San Cristóbal de La Laguna', 'san-cristobal-de-la-laguna', '{"latitude": 28.4871807, "longitude": -16.313879}', 'Espagne'),
                    (5,'Newcastle upon Tyne', 'newcastle-upon-tyne', '{"latitude": 54.9738474, "longitude": -1.6131572}', 'Angleterre');

            `);
            // insertion donnnées de la table parking
            db.run(`
                INSERT INTO parkings (name, location, numberOfPlaces, opened, hourlyRate, city_id) VALUES
                ('A', '{"latitude": 43.533329, "longitude": 5.43333}', 100, 1, 4.5, 1),     -- Aix-en-ProvenceSELECT * FROM NOM_DE_TABLE
                ('B', '{"latitude": 44.238366, "longitude": 9.6912326}', 50, 1, 3, 2),      -- La Spezia
                ('C', '{"latitude": 44.238366, "longitude": 9.6912326}', 80, 1, 2.5, 2),    -- La Spezia
                ('D', '{"latitude": 50.776351, "longitude": 6.083862}', 40, 1, 2.8, 3),     -- Aix-la-Chapelle
                ('E', '{"latitude": 28.4871807, "longitude": -16.313879}', 70, 1, 3.1, 4),  -- San Cristóbal de La Laguna
                ('F', '{"latitude": 54.9738474, "longitude": -1.6131572}', 60, 1, 2.4, 5),  -- Newcastle upon Tyne
                ('G', '{"latitude": 54.9738474, "longitude": -1.6131572}', 90, 1, 3.2, 5);  -- Newcastle upon Tyne

            `);

        })();

        console.log('Tables bien crées.');
    } catch (error) {
        console.error('Erreur lors de la création:', error);
    }
}

//requete pour obtenir toutes les villes // généré par IA

export async function getAllCities(): Promise<City[]> {
    const results = db.query('SELECT * FROM cities').all();
    return results.map((row: any) => new City( row.id,row.name, row.slug, row.parkingIds , row.location,row.country));
}
