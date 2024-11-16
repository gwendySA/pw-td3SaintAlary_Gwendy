// Controlleur des park avce prisma et sqlite ( on ne s'en sert jamais )
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // Initialisation de Prisma

class ParkController {
    // Méthode pour récupérer tous les park
    static async getAllParks(req, res) {
        try {
            const parks = await prisma.park.findMany();  // Utilisation de Prisma pour récupérer les parcs
            res.json(parks);
        } catch (error) {
            console.error(error);//gestion des erreurs
            res.status(500).json({ error: "Erreur lors de la récupération des parcs." });
        }
    }

    // Méthode pour récupérer un parking par son ID
    static async getParkById(req, res) {
        const { id } = req.params;
        try {
            const park = await prisma.park.findUnique({
                where: { id: Number(id) }  // Recherche du park par son ID avec Prisma
            });
            if (park) {
                res.json(park);
            } else {
                res.status(404).json({ error: "Parc non trouvé." });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur lors de la récupération du parc." });
        }
    }

    // Méthode pour ajouter un nouveau park
    static async addPark(req, res) {
        const { spotId, startedAt, endedAt, price, paid } = req.body;

        try {
            const createdPark = await prisma.park.create({
                data: {
                    spotId,      // `spotId` fait partie des champs attendus pour la création d'un parc
                    startedAt,   // Date de début du parking
                    endedAt,     // Date de fin (peut être null pour le moment)
                    price,       // Le prix du stationnement
                    paid,        // Si le parking est payé ou non (1 = payé, 0 = non payé)
                },
            });

            // Réponse avec le parc créé
            res.status(201).json(createdPark);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Erreur lors de la création du parc." });
        }
    }
}

export default ParkController;
