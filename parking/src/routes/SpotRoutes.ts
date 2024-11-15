import { Hono } from 'hono';
import SpotController from '../controllers/SpotController';

const spotRoutes = new Hono();

// Route pour obtenir tous les spots
spotRoutes.get('/', SpotController.getAllSpots);

// Route pour obtenir un spot par ID
spotRoutes.get('/:id', SpotController.getSpotById);

// Route pour ajouter un nouveau spot
spotRoutes.post('/', SpotController.addSpot);

export default spotRoutes;
