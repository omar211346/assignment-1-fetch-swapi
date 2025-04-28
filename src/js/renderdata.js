export function renderData(data, type) {
    const contentArea = document.getElementById('app');
    contentArea.innerHTML = '';

    // card
    data.slice(0, 6).forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

    //    title 
        const title = document.createElement('h3');
      title.textContent = item.name || item.title;
      card.appendChild(title);

    //   image
      const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name || item.title || 'Star Wars';
        img.classList.add('card-image');
        card.appendChild(img);


        contentArea.appendChild(card);
      });

    
  }