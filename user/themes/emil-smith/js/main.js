const galleries = document.querySelectorAll(".gallery");

galleries.forEach(gallery => {
    const gallerySet = gallery.querySelector('a').getAttribute('class');
    const lightboxDescription = GLightbox({ selector: gallerySet });
});