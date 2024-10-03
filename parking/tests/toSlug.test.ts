import { expect, describe,it } from "bun:test";
import {toSlug} from "../src/utils/toSlug";

describe('toSlug', () => {
    it('should convert a string to a slug', () => {
        expect(toSlug('Je suis 1 cas d\'école')).toBe('je-suis-1-cas-d-ecole');
        expect(toSlug('Éléphant à l\'école')).toBe('elephant-a-l-ecole');
        expect(toSlug('  Espaces  en  trop  ')).toBe('espaces-en-trop');
    });
});