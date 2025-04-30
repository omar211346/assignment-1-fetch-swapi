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
  document.getElementById('btn-planets').addEventListener('click', () => {
    fetchCategory('planets', 'https://swapi.py4e.com/api/planets/', [
      'name', 'climate', 'terrain', 'population', 'diameter'
    ]);
  });

  document.getElementById('btn-vehicles').addEventListener('click', () => {
    fetchCategory('vehicles', 'https://swapi.py4e.com/api/vehicles/', [
      'name', 'model', 'manufacturer', 'cost_in_credits', 'max_atmosphering_speed'
    ]);
  });
  
  