const gallery = document.getElementById('gallery');
const filterButtons = document.querySelectorAll('#filters button');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeModalBtn = document.getElementById('close-modal');

//funtion cards images
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

// funtion to filters
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.category;
        displayImages(category);
    });
});

//close the modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

displayImages();