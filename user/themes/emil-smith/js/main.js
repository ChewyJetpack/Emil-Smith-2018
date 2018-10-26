const galleries = document.querySelectorAll('.gallery');

galleries.forEach(gallery => {
    const gallerySet = gallery.querySelector('a').getAttribute('class');
    const lightboxDescription = GLightbox({ selector: gallerySet });
});

const navItems = document.querySelectorAll('.smoothscroll');


navItems.forEach(navItem => {
    const position = window.pageYOffset;
    const header = document.getElementById("header");
    const headerHeight = header.clientHeight;
    const elemId = navItem.getAttribute("href");
    const target = document.querySelector(elemId);
    const getElemDistance = function (elem) {
        let location = 0;
        if (elem.offsetParent) {
            do {
                location += elem.offsetTop;
                elem = elem.offsetParent;
            } while (elem);
        }
        return location >= 0 ? location : 0;
    }
    navItem.addEventListener('click', function(e) {
        e.preventDefault();
        let location = getElemDistance(target) - headerHeight;
        console.log(location);
        window.scrollTo({ top: location, behavior: "smooth" });
    })
});

const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.main-nav');

navToggle.addEventListener('click',(e) => {
    e.preventDefault();
    if (navToggle.classList.contains('active')) {
        navToggle.classList.remove("active");
        nav.classList.remove("active");
    } else {
        navToggle.classList.add("active");
        nav.classList.add("active");
    }
})

document.body.addEventListener("click",(e) => {
    if (!e.target.matches("#navToggle", ".main-nav") && navToggle.classList.contains("active")) {
      navToggle.classList.remove("active");
      nav.classList.remove("active");
    }
});