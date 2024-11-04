import { Context } from 'hono';
import { parkings } from '../data/staticDatabase';
import { Layout } from '../views/shared/Layout';
import { ParkingListView, ParkingDetailView } from '../views/parking/ParkingViews'; // Importer les vues

export class ParkingController {
    static async readAll(c: Context) {
        const content = ParkingListView({ parkings }); // Utiliser la vue pour la liste des parkings

        return c.html(Layout({
            children: content,
            pageTitle: "EuroPark - Nos Parkings",
            headerTitle: "Liste des Parkings"
        }));
    }

    static async readOne(c: Context) {
        const id = parseInt(c.req.param('id'));
        const parking = parkings.find(p => p.id === id);

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
    }
}
