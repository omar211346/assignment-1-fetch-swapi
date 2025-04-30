import { getImage } from './imageMappe.js';
import { renderData } from './renderdata.js';

export async function fetchCategory(category, endpoint, fields = []) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Klarte ikke hente data");

    const data = await response.json();

    const enriched = data.results.slice(0, 6).map((item, index) => {
      const card = { image: getImage(category, index) };
      fields.forEach(field => {
        card[field] = item[field];
      });
      return card;
    });

;

    renderData(enriched, category);
 

  } catch (error) {
    console.error(error);
  }
}
