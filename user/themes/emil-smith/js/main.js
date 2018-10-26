const galleries = document.querySelectorAll('.gallery');

galleries.forEach(gallery => {
    const gallerySet = gallery.querySelector('a').getAttribute('class');
    const lightboxDescription = GLightbox({ selector: gallerySet });
});

const navItems = document.querySelectorAll('.smoothscroll');

navItems.forEach(navItem => {
    const elemId = navItem.getAttribute("href");
    const elem = document.querySelector(elemId);
    const topPos = elem.getBoundingClientRect().top - 69;
    console.log(elem, topPos);
    navItem.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({ top: topPos, behavior: "smooth" });
    });
});