import { Context } from 'hono';
import { getAllParkings, getParkingById } from '../TabPaking'; // Importer les services pour les données
import { Layout } from '../views/shared/Layout';
import { ParkingListView, ParkingDetailView } from '../views/parking/ParkingViews'; // Importer les vues

export class ParkingController {
    // Récupérer la liste des parkings
    static async readAll(c: Context) {
        try {
            const parkings = await getAllParkings(); // Récupérer les parkings depuis la base de données

            if (parkings.length === 0) {
                c.status(404); // HTTP 404
                return c.json({ error: 'Aucun parking trouvé' });
            }

            const content = ParkingListView({ parkings }); // Utiliser la vue pour la liste des parkings

            return c.html(Layout({
                children: content,
                pageTitle: "EuroPark - Nos Parkings",
                headerTitle: "Liste des Parkings"
            }));
        } catch (err) {
            c.status(500); // Erreur serveur
            return c.json({ error: 'Erreur lors de la récupération des parkings' });
        }
    }

    // Récupérer le détail d'un parking
    static async readOne(c: Context) {
        try {
            const id = c.req.param('id').trim(); // Nettoyer l'ID des espaces inutiles
            const parking = await getParkingById(id); // Récupérer un parking spécifique

            if (!parking) {
                c.status(404); // HTTP 404
                return c.json({ error: 'Parking non trouvé' });
            }

            const content = ParkingDetailView({ parking }); // Utiliser la vue pour le détail d'un parking

            return c.html(Layout({
                children: content,
                pageTitle: `EuroPark - ${parking.name}`,
                headerTitle: parking.name
            }));
        } catch (err) {
            c.status(500); // Erreur serveur
            return c.json({ error: 'Erreur lors de la récupération du parking' });
        }
    }
}
