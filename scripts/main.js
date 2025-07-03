// Loading screen
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hide');
    }, 1000);
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Staggered animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

// Staggered animation for destination cards
const destinationCards = document.querySelectorAll('.destination-card');
destinationCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-background');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Enhanced hover effects for cards
document.querySelectorAll('.feature-card, .destination-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Text animation for navigation items
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            item.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});

// Enhanced text animations for content sections
const textElements = document.querySelectorAll('h1, h2, h3, p');
textElements.forEach(element => {
    observer.observe(element);
});

// Add dynamic background animation
function createFloatingElements() {
    const hero = document.querySelector('.hero');
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.width = Math.random() * 4 + 'px';
        element.style.height = element.style.width;
        element.style.background = 'rgba(248, 188, 51, 0.3)';
        element.style.borderRadius = '50%';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        element.style.animationDelay = Math.random() * 5 + 's';
        hero.appendChild(element);
    }
}

// Initialize floating elements
createFloatingElements();

// Add scroll-triggered animations for text content
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in:not(.animate)');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Enhanced navigation link animations
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.letterSpacing = '1px';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.letterSpacing = '0px';
    });
});