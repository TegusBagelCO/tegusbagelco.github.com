// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Remove active class from all links
        document.querySelectorAll('header ul li a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to the clicked link
        this.classList.add('active');
    });
});

// Toggle Mobile Menu
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('active');
});

// Close Sidebar on Link Click or Tap Outside
document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('active');
    }
});

// Back-to-Top Button and Order Button
const backToTopButton = document.getElementById('top');
const orderButton = document.querySelector('.order-btn');
const footer = document.querySelector('.footer');

window.addEventListener('scroll', () => {
    const footerRect = footer.getBoundingClientRect();
    const bottomOffset = 30;
    
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        backToTopButton.classList.add('show');
        if (footerRect.top <= window.innerHeight) {
            const newPosition = window.innerHeight - footerRect.top + bottomOffset;
            backToTopButton.style.bottom = `${newPosition}px`;
            orderButton.style.bottom = `${newPosition + 50}px`;
        }
    } else {
        backToTopButton.classList.remove('show');
        backToTopButton.style.bottom = `${bottomOffset}px`;
        orderButton.style.bottom = '80px';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Floating Characters Interaction
document.querySelectorAll('.floating-character').forEach(character => {
    character.addEventListener('mousemove', (e) => {
        const x = e.clientX - character.getBoundingClientRect().left;
        const y = e.clientY - character.getBoundingClientRect().top;
        character.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    character.addEventListener('mouseleave', () => {
        character.style.transform = 'translate(0, 0)';
    });
});
