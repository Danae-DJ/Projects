const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('#filters button');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('#close-modal');

// cards-images
function displayImages(category = "all") {
  gallery.innerHTML = ""; 

  const filtered = category === "all" 
    ? imagesData 
    : imagesData.filter(img => img.category === category);

  filtered.forEach(img => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${img.src}" alt="${img.title}">
      <h3>${img.title}</h3>
    `;

    card.addEventListener('click', () => {
      modalImg.src = img.src;
      modalTitle.textContent = img.title;
      modalDesc.textContent = img.description;
      modal.classList.remove('hidden');
    });

    gallery.appendChild(card);
  });
}

// Filters
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    displayImages(category);
  });
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

modal.addEventListener('click', (event) => {
    if (!event.target.closest('.modal-content')) {
        modal.classList.add('hidden');
    }
});

// All images
displayImages();
