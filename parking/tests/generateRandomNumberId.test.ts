import { describe, expect, it } from 'bun:test';
import {generateRandomNumberId} from "../src/utils/generateRandomNumberld";

describe('generateRandomNumberId', () => {
    it('devrait genrer 6 chiffres aléatoires', () => {
        const id = generateRandomNumberId();
        expect(id).toBeGreaterThanOrEqual(100000);
        expect(id).toBeLessThanOrEqual(999999);
        expect(Number.isInteger(id)).toBe(true);
    });

    it('devrait faire des nombres unique', () => {
        const ids = new Set();
        for (let i = 0; i < 1000; i++) {
            ids.add(generateRandomNumberId());
        }
        expect(ids.size).toBe(1000);
    });
});
