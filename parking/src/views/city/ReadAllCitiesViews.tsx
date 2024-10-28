// src/views/ReadAllCitiesView.tsx
//generer du html
import { html } from 'hono/html'
import City from "../../models/City";
import { Layout } from '../shared/Layout'

type Props = {
    cities: City[]//tab des villes
}

export const ReadAllCitiesView = ({ cities }: Props) => {
    return Layout({
        children: html`
      <ul>
        ${cities.map(
            (city) => html`
            <li>
              <a href="/cities/${city.slug}">${city.name}, ${city.country}</a>
            </li>
          `
        )}
      </ul>
      <a href="/">Back to Home</a>
    `,
        pageTitle: "EuroPark - Our Cities",
        headerTitle: "Our Cities"
    })
}