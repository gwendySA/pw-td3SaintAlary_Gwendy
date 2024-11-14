import { Context } from 'hono';
import { cities, parkings } from '../data/staticDatabase';
import { Layout } from '../views/shared/Layout';
import { ReadOneCityView } from '../views/city/ReadOneCityViews';

export class ReadOneCityController {
    static async handle(c: Context) {
        const slug = c.req.param('slug');
        const city = cities.find(city => city.slug === slug);

        if (!city) {
            c.status(404); // HTTP 404
            return c.json({ error: 'Ville non trouvée' });
        }

        // Récupérer les parkings associés à la ville
        const cityParkings = parkings.filter(parking => parking.city_id === city.id);

        // Appel à la vue avec les données de la ville et les parkings
        const content = ReadOneCityView({ city, cityParkings });

        return c.html(Layout({
            children: content,
            pageTitle: `EuroPark - ${city.name}`,
            headerTitle: city.name
        }));
    }
}