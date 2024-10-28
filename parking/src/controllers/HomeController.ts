// src/controllers/HomeController.ts
import { Context } from 'hono'
import { Layout } from '../views/shared/Layout'
import {html} from "hono/html";

export class HomeController {
    static async handle(c: Context) {
        return c.html(Layout({
            children: html`
        <img src="/static/parking.png" alt="Parking">
        <p>Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!</p>
        <ul>
        <li><a href="/cities">Our Cities</a></li>
            <li><a href="/parkings">Our Car Parks</a></li>
        </ul>
      `,
            pageTitle: "Welcome to EuroPark",
            headerTitle: "Welcome to EuroPark"
        }))
    }
}