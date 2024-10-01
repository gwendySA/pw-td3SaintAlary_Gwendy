import { Hono } from 'hono'
import {toSlug} from "./utils/toSlug";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')

})
const chaine = "Juliette a réussi à utiliser HONO";
// Exemple d'utilisation
const slug = toSlug(chaine);
console.log(slug);
export default app
