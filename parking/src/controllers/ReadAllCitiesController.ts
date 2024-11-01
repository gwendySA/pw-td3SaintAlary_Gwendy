// src/controllers/ReadAllCitiesController.ts
import { Context } from 'hono'
import { cities } from '../data/staticDatabase'
import { ReadAllCitiesView } from '../views/city/ReadAllCitiesViews'
//import { HTTPException } from 'hono/http-exception'

export class ReadAllCitiesController {
    static async handle(c: Context) {
        //fonction inspirée de forum internet
        if (cities.length === 0) {// pas de ville dans la liste
            c.status(404); //HTTP 404
            return c.json({ error: 'Aucune ville trouvée' });
        }
        return c.html(ReadAllCitiesView({ cities }))
    }

}