/* ==================== toggle icon navbar ==================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ==================== scroll sections active link ==================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let matchingLink = document.querySelector('header nav a[href*=' + id + ']');
                if (matchingLink) {
                    matchingLink.classList.add('active');
                }
            });
        }
    });

    /* ==================== highlight last link at page bottom ==================== */
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 80) {
        navLinks.forEach(links => links.classList.remove('active'));
        let contactLink = document.querySelector('header nav a[href*="contact"]');
        if (contactLink) {
            contactLink.classList.add('active');
        }
    }

    /* ==================== sticky navbar ==================== */
    let header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    /* ==================== remove toggle icon and navbar when click navbar link (scroll) ==================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* ==================== typed js ==================== */
var typed = new Typed(".text", {
    strings: ["Software Engineer", "Web Developer", "Data Scientist", "AI Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/* ==================== CV Download & Open Handler ==================== */
let downloadBtn = document.querySelector('#download-cv-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // 1. Open the resume image in a new browser tab
        window.open('resume.jpg', '_blank');
        // 2. Programmatically download the image
        let tempLink = document.createElement('a');
        tempLink.href = 'resume.jpg';
        tempLink.download = 'B_Venkateswara_Rao_Resume.jpg';
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
}
