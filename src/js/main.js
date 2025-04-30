import { fetchCategory } from './fetchController.js';

document.getElementById('btn-films').addEventListener('click', () => {
  fetchCategory('films', 'https://swapi.py4e.com/api/films/', [
    'title', 'director', 'producer', 'release_date'
  ]);
});

document.getElementById('btn-people').addEventListener('click', () => {
    fetchCategory('people', 'https://swapi.py4e.com/api/people/', [
      'name', 'height', 'mass', 'hair_color', 'eye_color'
    ]);
  });
  