document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: 'images/image1.jpg', caption: '1' },
        { src: 'images/image2.jpg', caption: '2' },
        { src: 'images/image3.jpg', caption: '3' }
    ];
    let currentImageIdx = 0;
    const carouselContainer = document.getElementById('carousel');
    const imgElements = []; 

    function createImageElement(image, idx) {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = `Carousel image ${idx + 1}`;
        imgElement.className = 'carousel-image';
        if (idx === 0) {
            imgElement.classList.add('visible');
        } else {
            imgElement.classList.add('hidden'); 
        }
        imgElements.push(imgElement); 
        carouselContainer.appendChild(imgElement);
    }

    images.forEach(createImageElement);

    function moveToNextImage() {
        imgElements[currentImageIdx].classList.remove('visible');
        imgElements[currentImageIdx].classList.add('hidden');
        currentImageIdx = (currentImageIdx + 1) % images.length;
        imgElements[currentImageIdx].classList.add('visible');
        imgElements[currentImageIdx].classList.remove('hidden');
    }

    function moveToPreviousImage() {
        imgElements[currentImageIdx].classList.remove('visible');
        imgElements[currentImageIdx].classList.add('hidden');
        currentImageIdx = (currentImageIdx - 1 + images.length) % images.length;
        imgElements[currentImageIdx].classList.add('visible');
        imgElements[currentImageIdx].classList.remove('hidden');
    }

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

