import { Context } from 'hono';
import { PrismaClient } from '@prisma/client';
import Spot from '../models/Spot';

const prisma = new PrismaClient();

export class SpotController {
    // Récupère tous les spots
    static async getAllSpots(c: Context) {
        try {
            const spots = await prisma.spot.findMany();
            return c.json(spots);
        } catch (error) {
            console.error("Error fetching spots:", error);
            return c.json({ message: "Internal Server Error" }, 500);
        }
    }

    // Récupère un spot par son id
    static async getSpotById(c: Context) {
        try {
            const id = parseInt(c.req.param('id'), 10);
            const spot = await prisma.spot.findUnique({
                where: { id },
            });
            if (!spot) {
                return c.json({ message: "Spot not found" }, 404);
            }
            return c.json(spot);
        } catch (error) {
            console.error("Error fetching spot by ID:", error);
            return c.json({ message: "Internal Server Error" }, 500);
        }
    }

    // Ajoute un nouveau spot
    static async addSpot(c: Context) {
        try {
            const { parkingId } = await c.req.json();
            const newSpot = await prisma.spot.create({
                data: { parkingId },
            });
            return c.json(newSpot, 201);
        } catch (error) {
            console.error("Error adding new spot:", error);
            return c.json({ message: "Internal Server Error" }, 500);
        }
    }
}

export default SpotController;
