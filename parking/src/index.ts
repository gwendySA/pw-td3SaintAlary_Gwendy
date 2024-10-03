import { Hono } from 'hono'
import {toSlug} from "./utils/toSlug";
import {generateRandomNumberId} from "./utils/generateRandomNumberld";

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')

})
const chaine = "JE SUis un cas d'école";
// Exemple d'utilisation
const slug = toSlug(chaine);
console.log(slug);
const id = generateRandomNumberId();
export default app
