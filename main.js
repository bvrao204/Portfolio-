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

/* ==================== interactive gauge charts ==================== */
document.querySelectorAll('.chart-dashboard').forEach(dashboard => {
    const legendItems = dashboard.querySelectorAll('.legend-item');
    const needle = dashboard.querySelector('.gauge-needle');
    const valueEl = dashboard.querySelector('.gauge-value');
    const detailsCard = dashboard.querySelector('.skills-details-card');

    function activateSkill(item) {
        // Remove active class from all other legend items
        legendItems.forEach(l => l.classList.remove('active'));

        // Highlight this legend item
        item.classList.add('active');

        // Extract skill details
        const skillKey = item.getAttribute('data-skill');
        const name = item.querySelector('.legend-name').textContent;
        const percentVal = parseInt(item.getAttribute('data-val'));
        const percentStr = percentVal + '%';
        const desc = item.getAttribute('data-desc');
        const themeColor = window.getComputedStyle(item.querySelector('.legend-dot')).backgroundColor;

        // Calculate needle rotation: 0% is -90deg, 100% is +90deg
        const rotation = (percentVal / 100) * 180 - 90;

        // Rotate needle
        needle.style.transform = `rotate(${rotation}deg)`;

        // Update value text and its color
        valueEl.textContent = percentStr;
        valueEl.style.fill = themeColor;

        // Update details card content and active glow color
        detailsCard.classList.add('active');
        detailsCard.style.setProperty('--active-color', themeColor);
        const rgb = themeColor.match(/\d+/g);
        if (rgb) {
            detailsCard.style.setProperty('--active-rgb', `${rgb[0]}, ${rgb[1]}, ${rgb[2]}`);
        }

        detailsCard.innerHTML = `
            <h4>${name} <span style="color: ${themeColor}; float: right;">${percentStr}</span></h4>
            <p>${desc}</p>
        `;
    }

    // Attach click and mouseenter handlers
    legendItems.forEach(item => {
        item.addEventListener('click', () => activateSkill(item));
        item.addEventListener('mouseenter', () => activateSkill(item));
    });
});
