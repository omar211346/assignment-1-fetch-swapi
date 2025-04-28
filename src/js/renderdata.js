export function renderData(data, type) {
    const contentArea = document.getElementById('app');
    contentArea.innerHTML = '';
    data.slice(0, 6).forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        contentArea.appendChild(card);
      });
  }