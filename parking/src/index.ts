import { Hono } from 'hono'
import {toSlug} from "./utils/toSlug";
import {generateRandomNumberId} from "./utils/generateRandomNumberld";
import {cities, parkings} from "./data/staticDatabase";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')

})
const chaine = "JE SUis un cas d'école";
// Exemple d'utilisation
const slug = toSlug(chaine);
console.log(slug);
console.log(parkings);
console.log(cities);
export default app

