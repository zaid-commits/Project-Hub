document.addEventListener('DOMContentLoaded', function() {
    const projectGrid = document.getElementById('project-grid');
    const filterSelect = document.getElementById('filter');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    // Sample project data
    const projects = [
        {
            title: 'Work Tracker',
            description: 'Work Tracker is a comprehensive web application designed to help individuals and teams effectively manage their work tasks and track time spent on various projects. With its intuitive interface and powerful features, Work Tracker simplifies the process of task management and time tracking, allowing users to stay organized and productive.',
            category: 'web',
            image: 'https://socialify.git.ci/zaid-commits/Work-Tracker/image?description=1&font=Rokkitt&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Light',
            detailPageUrl: 'project1.html',
            rating: 4.5
        },
        {
            title: 'Project 2',
            description: 'Brief description of Project 2.',
            category: 'mobile',
            image: 'https://socialify.git.ci/zaid-commits/Password-Manager/image?description=1&font=Rokkitt&forks=1&issues=1&language=1&name=1&owner=1&pulls=1&stargazers=1&theme=Light',
            detailPageUrl: 'project2.html',
            rating: 3.8
        },
        // Add more projects as needed
    ];

    // Create project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'transition', 'duration-300', 'hover:scale-105');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('relative', 'h-64', 'overflow-hidden');

        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.title;
        img.classList.add('w-full', 'h-full', 'object-cover', 'object-center');

        const categoryLabel = document.createElement('div');
        categoryLabel.textContent = project.category;
        categoryLabel.classList.add('absolute', 'top-0', 'left-0', 'bg-indigo-600', 'text-white', 'font-semibold', 'px-4', 'py-2', 'rounded-br-lg');

        imageContainer.appendChild(img);
        imageContainer.appendChild(categoryLabel);

        const cardBody = document.createElement('div');
        cardBody.classList.add('p-6');

        const title = document.createElement('h3');
        title.textContent = project.title;
        title.classList.add('text-xl', 'font-semibold', 'mb-2', 'text-gray-800');

        const description = document.createElement('p');
        description.textContent = project.description;
        description.classList.add('text-gray-600', 'mb-4', 'leading-relaxed');

        const bottomContainer = document.createElement('div');
        bottomContainer.classList.add('flex', 'items-center', 'justify-between');

        const link = document.createElement('a');
        link.href = project.detailPageUrl;
        link.textContent = 'View Details';
        link.classList.add('bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-semibold', 'py-2', 'px-4', 'rounded-lg', 'inline-block', 'transition', 'duration-300');

        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('flex', 'items-center');

        const ratingIcon = document.createElement('svg');
        ratingIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        ratingIcon.classList.add('h-5', 'w-5', 'text-yellow-400', 'mr-2');
        ratingIcon.setAttribute('viewBox', '0 0 20 20');
        ratingIcon.setAttribute('fill', 'currentColor');
        ratingIcon.innerHTML = '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />';

        const ratingValue = document.createElement('span');
        ratingValue.textContent = project.rating.toFixed(1);
        ratingValue.classList.add('text-gray-600');

        ratingContainer.appendChild(ratingIcon);
        ratingContainer.appendChild(ratingValue);

        bottomContainer.appendChild(link);
        bottomContainer.appendChild(ratingContainer);

        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(bottomContainer);

        card.appendChild(imageContainer);
        card.appendChild(cardBody);

        return card;
    }

    // Render project cards
    function renderProjectCards(projects) {
        projectGrid.innerHTML = '';
        projects.forEach(project => {
            const card = createProjectCard(project);
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
        console.log('Form submitted!');
        this.reset();
    });

    // Toggle mobile menu
    hamburgerBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('md:hidden');
    });
});

const form = document.querySelector('form');
const firstNameInput = document.getElementById('name');
const customSubjectInput = document.getElementById('Subject');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Set the custom subject with the user's name
    customSubjectInput.value = `${firstNameInput.value} sent a message from your projectsofzaid website`;

    // Submit the form
    form.submit();
});