// src/controllers/HomeController.ts
import { Context } from 'hono';
import { Layout } from '../views/shared/Layout';
import { HomeView } from '../views/HomeViews'; // Importer la vue pour la page d'accueil

export class HomeController {
    static async handle(c: Context) {
        const content = HomeView(); // Utiliser la vue pour générer le contenu

        return c.html(Layout({
            children: content,
            pageTitle: "Welcome to EuroPark",
            headerTitle: "Welcome to EuroPark"
        }));
    }
}
