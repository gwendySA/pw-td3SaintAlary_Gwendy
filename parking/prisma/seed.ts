import { PrismaClient } from '@prisma/client';
import {toSlug} from "../src/utils/toSlug";

const prisma = new PrismaClient();

async function main() {
    // Créer des villes
    const city1 = await prisma.city.create({
        data: {
            name: "Aix-en-Provence",
            slug: toSlug("Aix-en-Provence"),
            location: JSON.stringify({ latitude: 43.533329, longitude: 5.43333 }),
            country: "France",
        },
    });

    const city2 = await prisma.city.create({
        data: {
            name: "La Spezia",
            slug: toSlug("La Spezia"),
            location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
            country: "Italie",
        },
    });

    const city3 = await prisma.city.create({
        data: {
            name: "Aix-la-Chapelle",
            slug: toSlug("Aix-la-Chapelle"),
            location: JSON.stringify({ latitude: 50.776351, longitude: 6.083862 }),
            country: "Allemagne",
        },
    });

    const city4 = await prisma.city.create({
        data: {
            name: "San Cristóbal de La Laguna",
            slug: toSlug("San Cristóbal de La Laguna"),
            location: JSON.stringify({ latitude: 28.4871807, longitude: -16.313879 }),
            country: "Espagne",
        },
    });

    const city5 = await prisma.city.create({
        data: {
            name: "Newcastle upon Tyne",
            slug: toSlug("Newcastle upon Tyne"),
            location: JSON.stringify({ latitude: 54.9738474, longitude: -1.6131572 }),
            country: "Angleterre",
        },
    });

    // Créer des parkings
    const parking1 = await prisma.parking.create({
        data: {
            name: "A",
            location: JSON.stringify({ latitude: 43.533329, longitude: 5.43333 }),
            numberOfPlaces: 100,
            hourlyRate: 4.5,
            cityId: city1.id,
        },
    });

    const parking2 = await prisma.parking.create({
        data: {
            name: "B",
            location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
            numberOfPlaces: 50,
            hourlyRate: 3,
            cityId: city2.id,
        },
    });

    const parking3 = await prisma.parking.create({
        data: {
            name: "C",
            location: JSON.stringify({ latitude: 44.238366, longitude: 9.6912326 }),
            numberOfPlaces: 80,
            hourlyRate: 2.5,
            cityId: city2.id,
        },
    });

    const parking4 = await prisma.parking.create({
        data: {
            name: "D",
            location: JSON.stringify({ latitude: 50.776351, longitude: 6.083862 }),
            numberOfPlaces: 40,
            hourlyRate: 2.8,
            cityId: city3.id,
        },
    });

    const parking5 = await prisma.parking.create({
        data: {
            name: "E",
            location: JSON.stringify({ latitude: 28.4871807, longitude: -16.313879 }),
            numberOfPlaces: 70,
            hourlyRate: 3.1,
            cityId: city4.id,
        },
    });

    const parking6 = await prisma.parking.create({
        data: {
            name: "F",
            location: JSON.stringify({ latitude: 54.9738474, longitude: -1.6131572 }),
            numberOfPlaces: 60,
            hourlyRate: 2.4,
            cityId: city5.id,
        },
    });

    const parking7 = await prisma.parking.create({
        data: {
            name: "G",
            location: JSON.stringify({ latitude: 54.9738474, longitude: -1.6131572 }),
            numberOfPlaces: 90,
            hourlyRate: 3.2,
            cityId: city5.id,
        },
    });

    // Créer des places de stationnement pour chaque parking
    const spot1 = await prisma.spot.create({
        data: {
            parkingId: parking1.id,
        },
    });

    const spot2 = await prisma.spot.create({
        data: {
            parkingId: parking2.id,
        },
    });

    const spot3 = await prisma.spot.create({
        data: {
            parkingId: parking3.id,
        },
    });

    const spot4 = await prisma.spot.create({
        data: {
            parkingId: parking4.id,
        },
    });

    const spot5 = await prisma.spot.create({
        data: {
            parkingId: parking5.id,
        },
    });

    const spot6 = await prisma.spot.create({
        data: {
            parkingId: parking6.id,
        },
    });

    const spot7 = await prisma.spot.create({
        data: {
            parkingId: parking7.id,
        },
    });

    console.log('Villes, Parkings et Places insérés avec succès!');
}

main()
    .catch((e) => {
        console.error(e);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
