/* Add to homejs.js */

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: 'images/image1.jpg', caption: 'Caption 1' }, 
        { src: 'images/image2.jpg', caption: 'Caption 2' },
        { src: 'images/image3.jpg', caption: 'Caption 3' }
    ];
    let currentImageIdx = 0;
    const carouselContainer = document.getElementById('carousel');

    function createImageElement(image, idx) {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = `Carousel image ${idx + 1}`;
        imgElement.className = 'carousel-image';
        imgElement.style.display = 'none'; // Images are hidden by default
        if (idx === 0) {
            imgElement.classList.add('visible'); // Show the first image
        }
        carouselContainer.appendChild(imgElement);
    }

    images.forEach((image, index) => createImageElement(image, index));

    function moveToNextImage() {
        images[currentImageIdx].classList.remove('visible');
        currentImageIdx = (currentImageIdx + 1) % images.length;
        images[currentImageIdx].classList.add('visible');
    }

    function moveToPreviousImage() {
        images[currentImageIdx].classList.remove('visible');
        currentImageIdx = (currentImageIdx - 1 + images.length) % images.length;
        images[currentImageIdx].classList.add('visible');
    }

    // Setup event listeners for controls
    const nextButton = document.createElement('div');
    nextButton.textContent = '>';
    nextButton.className = 'carousel-control right';
    nextButton.onclick = moveToNextImage;
    carouselContainer.appendChild(nextButton);

    const prevButton = document.createElement('div');
    prevButton.textContent = '<';
    prevButton.className = 'carousel-control left';
    prevButton.onclick = moveToPreviousImage;
    carouselContainer.appendChild(prevButton);
});

