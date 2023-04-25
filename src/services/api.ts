const API_BASE_URL = 'https://fed-team.modyo.cloud/api/content';

interface Animal {
  id: string;
  image: {
    url: string;
  };
}

export const fetchAnimals = async (): Promise<Animal[]> => {
  const response = await fetch(`${API_BASE_URL}/spaces/animals/types/game/entries?per_page=10`);
  const data = await response.json();
  return data.entries.map((entry: any) => ({
    id: entry.id,
    image: entry.fields.image,
  }));
};