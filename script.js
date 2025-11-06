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

// Dropdown functionality for mobile - improved tap support
const dropdowns = document.querySelectorAll('.dropdown');
let isMobile = window.innerWidth <= 768;

// Update mobile detection on resize
window.addEventListener('resize', function() {
    isMobile = window.innerWidth <= 768;
});

dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('> a');
    
    // For mobile, toggle dropdown on tap/click
    dropdownLink.addEventListener('click', function(e) {
        if (isMobile) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        }
    });
    
    // Close dropdown when clicking on a dropdown item in mobile
    const dropdownItems = dropdown.querySelectorAll('.dropdown-menu a');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (isMobile) {
                // Allow navigation, then close menu
                setTimeout(() => {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                    dropdown.classList.remove('active');
                }, 100);
            }
        });
    });
});

// Close dropdowns when clicking outside on mobile
document.addEventListener('click', function(e) {
    if (isMobile) {
        const clickedDropdown = e.target.closest('.dropdown');
        if (!clickedDropdown) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    }
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

// reCAPTCHA callbacks
let recaptchaVerified = false;

function onRecaptchaSuccess(token) {
    recaptchaVerified = true;
    document.getElementById('recaptcha-error').style.display = 'none';
}

function onRecaptchaExpired() {
    recaptchaVerified = false;
    document.getElementById('recaptcha-error').style.display = 'block';
}

// Input sanitization function
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Contact form handling with security
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');
const charCount = document.getElementById('char-count');
const messageField = document.getElementById('message');

if (contactForm) {
    // Character counter for message field
    if (messageField && charCount) {
        messageField.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = length;
            if (length > 1900) {
                charCount.parentElement.style.color = '#ff4444';
            } else {
                charCount.parentElement.style.color = 'var(--gray-medium)';
            }
        });
    }

    // Form validation and submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset status
        formStatus.textContent = '';
        formStatus.className = 'form-status';
        
        // Validate reCAPTCHA
        if (typeof grecaptcha === 'undefined') {
            formStatus.textContent = 'reCAPTCHA is loading. Please wait a moment and try again.';
            formStatus.className = 'form-status error';
            return;
        }
        
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse || recaptchaResponse.length === 0) {
            document.getElementById('recaptcha-error').style.display = 'block';
            formStatus.textContent = 'Please complete the reCAPTCHA verification';
            formStatus.className = 'form-status error';
            return;
        }
        
        // Get and sanitize form values
        const name = sanitizeInput(document.getElementById('name').value.trim());
        const email = document.getElementById('email').value.trim();
        const company = sanitizeInput(document.getElementById('company').value.trim());
        const inquiry = document.getElementById('inquiry').value;
        const message = sanitizeInput(document.getElementById('message').value.trim());
        
        // Validation
        if (!name || name.length < 2) {
            formStatus.textContent = 'Please enter a valid name (at least 2 characters)';
            formStatus.className = 'form-status error';
            return;
        }
        
        if (!isValidEmail(email)) {
            formStatus.textContent = 'Please enter a valid email address';
            formStatus.className = 'form-status error';
            return;
        }
        
        if (!inquiry) {
            formStatus.textContent = 'Please select an inquiry type';
            formStatus.className = 'form-status error';
            return;
        }
        
        if (!message || message.length < 10) {
            formStatus.textContent = 'Please enter a message (at least 10 characters)';
            formStatus.className = 'form-status error';
            return;
        }
        
        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Prepare form data
        const formData = {
            name: name,
            email: email,
            company: company,
            inquiry: inquiry,
            message: message,
            recaptcha: recaptchaResponse,
            timestamp: new Date().toISOString()
        };

        // Here you would send the data to your server
        // For now, simulate API call
        setTimeout(() => {
            console.log('Form submitted:', formData);
            
            // Show success message
            formStatus.textContent = 'Thank you for your inquiry. We will get back to you soon!';
            formStatus.className = 'form-status success';
            
            // Reset form
            contactForm.reset();
            grecaptcha.reset();
            recaptchaVerified = false;
            charCount.textContent = '0';
            
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
            
            // Clear status after 5 seconds
            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 5000);
        }, 1000);
    });
    
    // Real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderBottomColor = '#ff4444';
            } else {
                this.style.borderBottomColor = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.style.borderBottomColor === 'rgb(255, 68, 68)') {
                this.style.borderBottomColor = '';
            }
        });
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

