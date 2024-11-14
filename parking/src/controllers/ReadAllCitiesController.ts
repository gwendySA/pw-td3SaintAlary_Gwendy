import { Context } from 'hono';
import { getAllCities } from '../TabPaking';
import {ReadAllCitiesView} from "../views/city/ReadAllCitiesViews"; // Importer la fonction

export class ReadAllCitiesController {
    static async handle(c: Context) {
        try {
            const cities = await getAllCities(); // Récupérer les villes depuis la base de données

            if (cities.length === 0) { // Pas de ville dans la liste
                c.status(404); // HTTP 404
                return c.json({ error: 'Aucune ville trouvée' });
            }
            return c.html(ReadAllCitiesView({ cities }));
        } catch (err) {
            c.status(500); // Erreur serveur
            return c.json({ error: 'Erreur lors de la récupération des villes' });
        }
    }
}