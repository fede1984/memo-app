import { fetchAnimals } from './api';

describe('fetchAnimals', () => {
  it('should fetch a list of animals', async () => {
    const animals = await fetchAnimals();
    expect(Array.isArray(animals)).toBe(true);
    expect(animals.length).toBeGreaterThan(0);
    expect(animals[0]).toHaveProperty('id');
    expect(animals[0]).toHaveProperty('image');
  });
});