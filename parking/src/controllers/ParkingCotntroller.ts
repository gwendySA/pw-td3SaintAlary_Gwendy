// src/controllers/ParkingController.ts
import { Context } from 'hono'
import { parkings } from '../data/staticDatabase'
import { html } from 'hono/html'
import { Layout } from '../views/shared/Layout'

export class ParkingController {
    static async readAll(c: Context) {
        const content = html`
      <h2>Nos Parkings</h2>
      <ul>
        ${parkings.map(parking => html`
          <li>
            <a href="/parkings/${parking.id}">${parking.name} (${parking.numberOfSpots} places)</a>
          </li>
        `)}
      </ul>
      <a href="/">Retour à l'accueil</a>
    `

        return c.html(Layout({
            children: content,
            pageTitle: "EuroPark - Nos Parkings",
            headerTitle: "Liste des Parkings"
        }))
    }

    static async readOne(c: Context) {
        const id = parseInt(c.req.param('id'))
        const parking = parkings.find(p => p.id === id)

        if (!parking) {
            return c.notFound()
        }

        const content = html`
      <h2>${parking.name}</h2>
      <p>Nombre de places : ${parking.numberOfSpots}</p>
      <p>Tarif horaire : €${parking.hourlyRate.toFixed(2)}</p>
      <p>Statut : ${parking.opened ? 'Ouvert' : 'Fermé'}</p>
      <p>Coordonnées : Latitude ${parking.location.latitude}, Longitude ${parking.location.longitude}</p>
      <a href="/parkings">Retour à la liste des parkings</a>
    `

        return c.html(Layout({
            children: content,
            pageTitle: `EuroPark - ${parking.name}`,
            headerTitle: parking.name
        }))
    }
}