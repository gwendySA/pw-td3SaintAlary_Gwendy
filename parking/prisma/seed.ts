import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        // Créer des villes
        const city1 = await prisma.city.create({
            data: {
                name: "Aix-en-Provence",
                slug: "aix-en-provence",
                location: JSON.stringify({ latitude: 43.533329, longitude: 5.43333 }),
                country: "France",
            },
        });

        const city2 = await prisma.city.create({
            data: {
                name: "La Spezia",
                slug: "la-spezia",
                location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
                country: "Italie",
            },
        });

        // Créer des parkings
        const parking1 = await prisma.parking.create({
            data: {
                name: "Parking A",
                location: JSON.stringify({ latitude: 43.533329, longitude: 5.43333 }),
                numberOfPlaces: 100,
                hourlyRate: 4.5,
                cityId: city1.id,
            },
        });

        const parking2 = await prisma.parking.create({
            data: {
                name: "Parking B",
                location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
                numberOfPlaces: 50,
                hourlyRate: 3,
                cityId: city2.id,
            },
        });

        // Créer des spots pour chaque parking
        const spots1 = await prisma.spot.createMany({
            data: Array.from({ length: parking1.numberOfPlaces }, () => ({
                parkingId: parking1.id,
            })),
        });

        const spots2 = await prisma.spot.createMany({
            data: Array.from({ length: parking2.numberOfPlaces }, () => ({
                parkingId: parking2.id,
            })),
        });

        // Créer un park pour un spot spécifique
        const spot = await prisma.spot.findFirst({
            where: {
                parkingId: parking1.id,
            },
        });

        if (spot) {
            const newPark = await prisma.park.create({
                data: {
                    spotId: spot.id,
                    startedAt: new Date(),
                    endedAt: null,
                    price: 20.0,
                    paid: false,
                },
            });

            console.log("Park créé avec succès :", newPark);
        }
    } catch (error) {
        console.error("Erreur lors de l'insertion :", error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
