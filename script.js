const projects = [
    {
        title: 'Project 1',
        description: 'Brief description of Project 1.',
        category: 'web',
        image: 'https://via.placeholder.com/350x200',
        detailPageUrl: 'project1.html'
    },
    {
        title: 'Project 2',
        description: 'Brief description of Project 2.',
        category: 'mobile',
        image: 'https://via.placeholder.com/350x200',
        detailPageUrl: 'project2.html'
    },
    // Add more projects with their respective detailPageUrl properties
];

    // Render project cards
   // Render project cards
   function renderProjectCards(filteredProjects) {
    projectGrid.innerHTML = '';
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.detailPageUrl}" class="btn btn-primary">View Details</a>
            </div>
        `;
        projectGrid.appendChild(card);
    });
}
        // Initial render
        renderProjectCards(projects);
        
        // Filter projects
        filterSelect.addEventListener('change', function() {
            const selectedCategory = this.value;
            const filteredProjects = selectedCategory === 'all'
                ? projects
                : projects.filter(project => project.category === selectedCategory);
            renderProjectCards(filteredProjects);
        });
        
        // Handle form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here, you can add code to handle the form submission
            // For example, you can use an API or a server-side script to send the data
            console.log('Form submitted!');
            this.reset();
        });



        // script.js
document.addEventListener('DOMContentLoaded', function() {
    const projectGrid = document.getElementById('project-grid');
    const filterSelect = document.getElementById('filter');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sample project data
    const projects = [
        {
            title: 'Project 1',
            description: 'Brief description of Project 1.',
            category: 'web',
            image: 'https://via.placeholder.com/350x200'
        },
        {
            title: 'Project 2',
            description: 'Brief description of Project 2.',
            category: 'mobile',
            image: 'https://via.placeholder.com/350x200'
        },
        // Add more projects as needed
    ];



    

    // Render project cards
    function renderProjectCards(filteredProjects) {
        projectGrid.innerHTML = '';
        filteredProjects.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            `;
            projectGrid.appendChild(card);
        });
    }

    // Initial render
    renderProjectCards(projects);

    // Filter projects
    filterSelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        const filteredProjects = selectedCategory === 'all'
            ? projects
            : projects.filter(project => project.category === selectedCategory);
        renderProjectCards(filteredProjects);
    });

    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here, you can add code to handle the form submission
        // For example, you can use an API or a server-side script to send the data
        console.log('Form submitted!');
        this.reset();
    });

    // Toggle mobile menu
    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });
});

// Render project cards
function renderProjectCards(filteredProjects) {
    projectGrid.innerHTML = '';
    filteredProjects.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${project.image}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="project${index + 1}.html" class="btn btn-primary">View Details</a>
            </div>
        `;
        projectGrid.appendChild(card);
    });
}