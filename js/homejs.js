document.addEventListener('DOMContentLoaded', function() {
    const images = [
        { src: 'images/image1.jpg', caption: '' }, 
        { src: 'images/image2.jpg', caption: '' },
        { src: 'images/image3.jpg', caption: '' }
    ];
    const carouselContainer = document.getElementById('carousel');

    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = `Carousel image ${index + 1}`;
        imgElement.className = 'carousel-image';
        if (index === 0) imgElement.style.display = 'block'; 
        carouselContainer.appendChild(imgElement);
    });

    
});

const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.opacity = '0.7';
    });
    link.addEventListener('mouseleave', () => {
        link.style.opacity = '1';
    });
});
