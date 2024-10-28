// src/controllers/ReadAllCitiesController.ts
import { Context } from 'hono'
import { cities } from '../data/staticDatabase'
import { ReadAllCitiesView } from '../views/city/ReadAllCitiesViews'
import { HTTPException } from 'hono/http-exception'

export class ReadAllCitiesController {
    static async handle(c: Context) {
        return c.html(ReadAllCitiesView({ cities }))
    }
}