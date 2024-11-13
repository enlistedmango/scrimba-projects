// Toggle Dark/Light Mode
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Project Modal
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');
const closeButton = document.querySelector('.close');

const projectDetails = {
    'business-card': {
        title: 'Business Card',
        description: 'A digital business card template.',
        link: 'projects/business-card/dist/index.html'
    },
    'counter-app': {
        title: 'Counter App',
        description: 'A simple interactive counter application.',
        link: 'projects/counter-app/dist/index.html'
    },
    'personal-site': {
        title: 'Personal Site',
        description: 'My personal website showcasing my portfolio.',
        link: 'projects/personal-site/dist/index.html'
    }
};

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const project = card.getAttribute('data-project');
        modalTitle.textContent = projectDetails[project].title;
        modalDescription.textContent = projectDetails[project].description;
        modalLink.href = projectDetails[project].link;
        modal.style.display = 'block';
    });
});

// Close Modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
