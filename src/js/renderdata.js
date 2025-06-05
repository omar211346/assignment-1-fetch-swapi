export function renderData(data, type) {
    const contentArea = document.getElementById('app');
    contentArea.innerHTML = '';
  
    data.slice(0, 10).forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const title = document.createElement('h3');
      title.textContent = item.name || item.title;
      card.appendChild(title);
  
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name || item.title || 'Star Wars';
      img.classList.add('card-image');
      card.appendChild(img);

      if (type === 'people') {
        if (item.height) {
          const p = document.createElement('p');
          p.textContent = `Height: ${item.height}`;
          card.appendChild(p);
        }
        if (item.mass) {
          const p = document.createElement('p');
          p.textContent = `Mass: ${item.mass}`;
          card.appendChild(p);
        }
        if (item.hair_color) {
          const p = document.createElement('p');
          p.textContent = `Hair Color: ${item.hair_color}`;
          card.appendChild(p);
        }
        if (item.eye_color) {
          const p = document.createElement('p');
          p.textContent = `Eye Color: ${item.eye_color}`;
          card.appendChild(p);
        }
        if (item.birth_year) {
          const p = document.createElement('p');
          p.textContent = `Birth Year: ${item.birth_year}`;
          card.appendChild(p);
        } 
      }
  
      if (type === 'films') {
        if (item.director) {
          const p = document.createElement('p');
          p.textContent = `Director: ${item.director}`;
          card.appendChild(p);
        }
        if (item.producer) {
          const p = document.createElement('p');
          p.textContent = `Producer: ${item.producer}`;
          card.appendChild(p);
        }
        if (item.release_date) {
          const p = document.createElement('p');
          p.textContent = `Release Date: ${item.release_date}`;
          card.appendChild(p);
        }
        if (item.episode_id) {
          const p = document.createElement('p');
          p.textContent = `Episode: ${item.episode_id}`;
          card.appendChild(p);
        }
        if (item.title) {
          const p = document.createElement('p');
          p.textContent = `Title: ${item.title}`;
          card.appendChild(p);
        }
      }
  
      if (type === 'vehicles') {
        if (item.model) {
          const p = document.createElement('p');
          p.textContent = `Model: ${item.model}`;
          card.appendChild(p);
        }
        if (item.manufacturer) {
          const p = document.createElement('p');
          p.textContent = `Manufacturer: ${item.manufacturer}`;
          card.appendChild(p);
        }
        if (item.cost_in_credits) {
          const p = document.createElement('p');
          p.textContent = `Cost: ${item.cost_in_credits}`;
          card.appendChild(p);
        }
        if (item.max_atmosphering_speed) {
          const p = document.createElement('p');
          p.textContent = `Speed: ${item.max_atmosphering_speed}`;
          card.appendChild(p);
        }
        if (item.passengers) {
          const p = document.createElement('p');
          p.textContent = `Passengers: ${item.passengers}`;
          card.appendChild(p);
        }
      }
  
      if (type === 'planets') {
        if (item.climate) {
          const p = document.createElement('p');
          p.textContent = `Climate: ${item.climate}`;
          card.appendChild(p);
        }
        if (item.terrain) {
          const p = document.createElement('p');
          p.textContent = `Terrain: ${item.terrain}`;
          card.appendChild(p);
        }
        if (item.population) {
          const p = document.createElement('p');
          p.textContent = `Population: ${item.population}`;
          card.appendChild(p);
        }
        if (item.diameter) {
          const p = document.createElement('p');
          p.textContent = `Diameter: ${item.diameter}`;
          card.appendChild(p);
        }
        if (item.gravity) {
          const p = document.createElement('p');
          p.textContent = `Gravity: ${item.gravity}`;
          card.appendChild(p);
        }
      }
  
      contentArea.appendChild(card);
    });
  }
  