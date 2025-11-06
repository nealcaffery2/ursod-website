// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Dropdown functionality for mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('> a');
    
    // For mobile, toggle dropdown on click
    dropdownLink.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
    
    // Close dropdown when clicking on a dropdown item in mobile
    const dropdownItems = dropdown.querySelectorAll('.dropdown-menu a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
                dropdown.classList.remove('active');
            }
        });
    });
});

// Close mobile menu when clicking on a link (non-dropdown)
const navLinks = document.querySelectorAll('.nav-menu > li:not(.dropdown) > a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            inquiry: document.getElementById('inquiry').value,
            message: document.getElementById('message').value
        };

        // Here you would typically send the data to a server
        // For now, we'll just show an alert
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry. We will get back to you soon!');
        
        // Reset form
        contactForm.reset();
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .step-item, .stat-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Video background fallback and initialization
const video = document.getElementById('hero-video');
const videoBackground = document.querySelector('.video-background');

if (video && videoBackground) {
    // Try to play video immediately
    const playVideo = () => {
        if (video.readyState >= 2) {
            video.play().catch(function(error) {
                console.log('Video autoplay failed:', error);
                video.classList.add('hidden');
            });
        }
    };

    // Ensure video plays when loaded
    video.addEventListener('loadeddata', function() {
        playVideo();
    });

    video.addEventListener('canplay', function() {
        playVideo();
    });

    // Handle video errors - hide video and show background image
    video.addEventListener('error', function(e) {
        console.log('Video failed to load, using background image');
        video.classList.add('hidden');
        // Background image is already set in CSS as fallback
    });

    // Try to play video on load
    window.addEventListener('load', function() {
        playVideo();
    });

    // Try to play on user interaction (for autoplay restrictions)
    document.addEventListener('click', function() {
        if (video.paused) {
            video.play().catch(function(error) {
                console.log('Video play prevented:', error);
            });
        }
    }, { once: true });

    // Fallback: if video doesn't load within 5 seconds, hide it
    setTimeout(function() {
        if (video.readyState < 2) {
            console.log('Video loading timeout, using background image');
            video.classList.add('hidden');
        }
    }, 5000);
}

