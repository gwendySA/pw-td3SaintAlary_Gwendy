// src/controllers/ReadOneCityController.ts
import { Context } from 'hono'
import { cities, parkings } from '../data/staticDatabase'
import { html } from 'hono/html'
import { Layout } from '../views/shared/Layout'

export class ReadOneCityController {
    static async handle(c: Context) {
        const slug = c.req.param('slug')
        const city = cities.find(city => city.slug === slug)

        if (!city) {
            return c.notFound()
        }

        // Récupérer les parkings associés à la ville
        const cityParkings = parkings.filter(parking => parking.city_id === city.id)

        const content = html`
            <h2>Informations sur ${city.name}</h2>
            <p>Pays : ${city.country}</p>
            <p>Coordonnées : Latitude ${city.location.latitude}, Longitude ${city.location.longitude}</p>

            <h2>Parkings à ${city.name}</h2>
            ${cityParkings.length > 0 ? html`
                <ul>
                    ${cityParkings.map(parking => html`
                        <li>
                            <strong>${parking.name}</strong><br>
                            Nombre de places : ${parking.numberOfSpots}<br>
                            Tarif horaire : €${parking.hourlyRate.toFixed(2)}<br>
                            Statut : ${parking.opened ? 'Ouvert' : 'Fermé'}
                        </li>
                    `)}
                </ul>
            ` : html`
                <p>Aucun parking disponible dans cette ville.</p>
            `}

            <a href="/cities">Retour aux villes</a>
        `

        return c.html(Layout({
            children: content,
            pageTitle: `EuroPark - ${city.name}`,
            headerTitle: city.name
        }))
    }
}