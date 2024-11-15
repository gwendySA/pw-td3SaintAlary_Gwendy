// database.ts
import { Database } from 'bun:sqlite';
import { generateRandomNumberId } from './utils/generateRandomNumberld';  // Import de la fonction de génération
import City from './models/City';
import Parking from './models/Parking';

// Créer la connexion à la base de données SQLite
const db = new Database('parking.sqlite');

export function initializeDatabase() {
    try {
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

        // Créer la table "parkings" avec ID en texte
        db.run(`
            CREATE TABLE IF NOT EXISTS "parkings" (
                                                      "id" TEXT PRIMARY KEY,
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

        // Insertion des données dans la table "cities"
        db.run(`
            INSERT INTO cities (id, name, slug, location, country) VALUES
                                                                       (1, 'Aix-en-Provence', 'aix-en-provence', '{"latitude": 43.533329, "longitude": 5.43333}', 'France'),
                                                                       (2, 'La Spezia', 'la-spezia', '{"latitude": 44.238366, "longitude": 9.6912326}', 'Italie'),
                                                                       (3, 'Aix-la-Chapelle', 'aix-la-chapelle', '{"latitude": 50.776351, "longitude": 6.083862}', 'Allemagne'),
                                                                       (4, 'San Cristóbal de La Laguna', 'san-cristobal-de-la-laguna', '{"latitude": 28.4871807, "longitude": -16.313879}', 'Espagne'),
                                                                       (5, 'Newcastle upon Tyne', 'newcastle-upon-tyne', '{"latitude": 54.9738474, "longitude": -1.6131572}', 'Angleterre');
        `);

        // Insertion des parkings avec des IDs générés aléatoirement
        const parkingData = [
            ['Parking A', '{"latitude": 43.533329, "longitude": 5.43333}', 100, 1, 4.5, 1],
            ['Parking B', '{"latitude": 44.238366, "longitude": 9.6912326}', 50, 1, 3, 2],
            ['Parking C', '{"latitude": 44.238366, "longitude": 9.6912326}', 80, 1, 2.5, 2],
            ['Parking D', '{"latitude": 50.776351, "longitude": 6.083862}', 40, 1, 2.8, 3],
            ['Parking E', '{"latitude": 28.4871807, "longitude": -16.313879}', 70, 1, 3.1, 4],
            ['Parking F', '{"latitude": 54.9738474, "longitude": -1.6131572}', 60, 1, 2.4, 5],
            ['Parking G', '{"latitude": 54.9738474, "longitude": -1.6131572}', 90, 1, 3.2, 5]
        ];

        parkingData.forEach(([name, location, numberOfPlaces, opened, hourlyRate, city_id]) => {
            const id = generateRandomNumberId();  // Générer un ID aléatoire
            db.run(`
                INSERT INTO parkings (id, name, location, numberOfPlaces, opened, hourlyRate, city_id) VALUES
                (?, ?, ?, ?, ?, ?, ?)
            `, [id, name, location, numberOfPlaces, opened, hourlyRate, city_id]);
        });

        console.log('Tables bien créées et données insérées.');
    } catch (error) {
        console.error('Erreur lors de la création des tables:', error);
    }
}

export async function getParkingById(id: string): Promise<Parking | null> {
    console.log(`ID recherché: ${id}`);  // Log de l'ID recherché

    // Effectuer l'interpolation de chaîne pour ajouter l'ID directement dans la requête
    const result = db.query(`SELECT * FROM parkings WHERE id = "${id}"`).get();  // Utilisation de l'interpolation de chaîne pour l'ID

    console.log(`Résultat de la requête: ${JSON.stringify(result)}`);  // Log du résultat de la requête

    if (!result) {
        return null;  // Aucun résultat trouvé
    }

    // Créer l'objet Parking à partir du résultat
    const parking = new Parking(
        result.id,
        result.name,
        result.location,
        result.numberOfPlaces,
        result.hourlyRate
    );

    return parking;  // Retourner l'objet Parking
}

// database.ts
export async function getAllParkings(): Promise<Parking[]> {
    const result = db.query('SELECT * FROM parkings').all();  // Utilisation de .all() pour obtenir tous les résultats

    if (!result) {
        return [];  // Retourner un tableau vide si aucun résultat
    }

    return result.map((row: any) => {
        return new Parking(
            row.id,
            row.name,
            row.location,
            row.numberOfPlaces,
            row.hourlyRate
        );
    });

}
// Exportation nommée
export async function getAllCities() {
    const result = db.query('SELECT * FROM cities').all();
    return result;
}

