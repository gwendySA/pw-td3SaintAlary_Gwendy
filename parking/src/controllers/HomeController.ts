//controlleur pour la page d'acceuil
import { Context } from 'hono';
import { PrismaClient } from '@prisma/client'; // Importer Prisma
import { Layout } from '../views/shared/Layout'; // Importer le Layout
import { HomeView } from '../views/HomeViews'; // Importer la vue de la page d'accueil

const prisma = new PrismaClient(); // Initialiser Prisma

export class HomeController {
    // Méthode pour gérer la page d'accueil
    static async handle(c: Context) {
        try {
            // Récupérer toutes les villes depuis la base de données
            const cities = await prisma.city.findMany();  // Utilisation de Prisma pour récupérer toutes les villes

            // Créer le contenu de la page d'accueil, en passant les villes récupérées à la vue
            const content = HomeView({ cities });

            // Retourner la réponse HTML avec le Layout en injectant le contenu
            return c.html(Layout({
                children: content,
                pageTitle: "Welcome to EuroPark",
                headerTitle: "Welcome to EuroPark"
            }));
        } catch (error) {
            console.error(error);
            return c.json({ error: "Erreur lors de la récupération des villes." }, 500);
        }
    }
}
