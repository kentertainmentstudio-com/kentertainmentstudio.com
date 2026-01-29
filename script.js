/* ===================================
   K ENTERTAINMENT STUDIO INC.
   Interactive JavaScript
   Age Gate | Smooth Scroll | Scroll Reveals | Mobile Nav
   =================================== */

// ===========================
// AGE VERIFICATION GATE
// ===========================
class AgeGate {
    constructor() {
        this.modal = document.getElementById('ageGate');
        this.confirmBtn = document.getElementById('ageConfirm');
        this.exitBtn = document.getElementById('ageExit');
        this.storageKey = 'ageVerified';
        this.expiryDays = 30;
        
        this.init();
    }

    init() {
        // Check if user has already verified
        if (this.isVerified()) {
            this.hideModal();
        } else {
            this.showModal();
            this.setupEventListeners();
        }
    }

    setupEventListeners() {
        // Confirm button
        this.confirmBtn.addEventListener('click', () => this.handleConfirm());
        
        // Exit button
        this.exitBtn.addEventListener('click', () => this.handleExit());
        
        // Keyboard support
        this.modal.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleConfirm();
            } else if (e.key === 'Escape') {
                this.handleExit();
            }
        });

        // Prevent body scroll when modal is open
        document.body.classList.add('no-scroll');
    }

    handleConfirm() {
        // Store verification with expiry timestamp
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + this.expiryDays);
        
        const verificationData = {
            verified: true,
            expiry: expiryDate.getTime()
        };
        
        localStorage.setItem(this.storageKey, JSON.stringify(verificationData));
        
        // Hide modal and allow scrolling
        this.hideModal();
        document.body.classList.remove('no-scroll');
    }

    handleExit() {
        // Redirect to Google
        window.location.href = 'https://www.google.com';
    }

    isVerified() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (!stored) return false;
            
            const data = JSON.parse(stored);
            const now = new Date().getTime();
            
            // Check if verification exists and hasn't expired
            if (data.verified && data.expiry > now) {
                return true;
            } else {
                // Clear expired verification
                localStorage.removeItem(this.storageKey);
                return false;
            }
        } catch (error) {
            console.error('Age verification check error:', error);
            return false;
        }
    }

    showModal() {
        if (this.modal) {
            this.modal.classList.remove('hidden');
            // Focus on confirm button for accessibility
            setTimeout(() => {
                this.confirmBtn.focus();
            }, 100);
        }
    }

    hideModal() {
        if (this.modal) {
            this.modal.classList.add('hidden');
        }
    }
}

// ===========================
// NAVIGATION BAR
// ===========================
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.navToggle = document.getElementById('navToggle');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.lastScrollTop = 0;
        
        this.init();
    }

    init() {
        this.setupScrollEffect();
        this.setupMobileMenu();
        this.setupSmoothScroll();
    }

    setupScrollEffect() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    
                    // Add scrolled class when scrolled down
                    if (scrollTop > 50) {
                        this.navbar.classList.add('scrolled');
                    } else {
                        this.navbar.classList.remove('scrolled');
                    }
                    
                    this.lastScrollTop = scrollTop;
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }

    setupMobileMenu() {
        if (!this.navToggle || !this.navMenu) return;

        // Toggle menu
        this.navToggle.addEventListener('click', () => {
            const isActive = this.navMenu.classList.toggle('active');
            this.navToggle.setAttribute('aria-expanded', isActive);
            
            // Prevent body scroll when menu is open
            if (isActive) {
                document.body.classList.add('no-scroll');
            } else {
                document.body.classList.remove('no-scroll');
            }
        });

        // Close menu when clicking links
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.navToggle.contains(e.target) && !this.navMenu.contains(e.target)) {
                this.navMenu.classList.remove('active');
                this.navToggle.setAttribute('aria-expanded', 'false');
                document.body.classList.remove('no-scroll');
            }
        });
    }

    setupSmoothScroll() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // Only handle internal links
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    
                    if (targetElement) {
                        const navHeight = this.navbar.offsetHeight;
                        const targetPosition = targetElement.offsetTop - navHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// ===========================
// SCROLL REVEAL ANIMATIONS
// ===========================
class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal-fade-up');
        this.options = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        // Optionally unobserve after revealing
                        this.observer.unobserve(entry.target);
                    }
                });
            }, this.options);

            this.elements.forEach(element => {
                this.observer.observe(element);
            });
        } else {
            // Fallback: reveal all elements immediately
            this.elements.forEach(element => {
                element.classList.add('revealed');
            });
        }
    }
}

// ===========================
// CONTACT FORM HANDLER
// ===========================
class ContactForm {
    constructor() {
        this.form = document.getElementById('contactForm');
        
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            this.showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            this.showMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission (replace with actual API call)
        console.log('Form submitted:', data);
        
        // Show success message
        this.showMessage(
            'Thank you for your message! We will respond within 24-48 hours.',
            'success'
        );
        
        // Reset form
        this.form.reset();
    }

    showMessage(message, type) {
        // Remove existing message if any
        const existing = this.form.querySelector('.form-message');
        if (existing) {
            existing.remove();
        }

        // Create message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message form-message-${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            text-align: center;
            background: ${type === 'success' ? 'rgba(0, 128, 0, 0.2)' : 'rgba(128, 0, 0, 0.2)'};
            color: ${type === 'success' ? '#90EE90' : '#FF6B6B'};
            border: 1px solid ${type === 'success' ? 'rgba(0, 128, 0, 0.4)' : 'rgba(128, 0, 0, 0.4)'};
        `;

        // Insert before submit button
        const submitBtn = this.form.querySelector('.form-submit');
        this.form.insertBefore(messageDiv, submitBtn);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// ===========================
// PORTFOLIO ITEM INTERACTIONS
// ===========================
class PortfolioInteractions {
    constructor() {
        this.items = document.querySelectorAll('.portfolio-item');
        
        this.init();
    }

    init() {
        this.items.forEach(item => {
            // Make focusable items interactive via keyboard
            item.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleItemClick(item);
                }
            });

            item.addEventListener('click', () => {
                this.handleItemClick(item);
            });
        });
    }

    handleItemClick(item) {
        const title = item.querySelector('.portfolio-title').textContent;
        const category = item.querySelector('.portfolio-category').textContent;
        
        // Log interaction (in production, this could trigger a modal or navigation)
        console.log(`Portfolio item clicked: ${title} - ${category}`);
        
        // Example: You could show a modal with more details here
        // For now, we just add a subtle scale effect
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    }
}

// ===========================
// UTILITY FUNCTIONS
// ===========================
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle function for scroll events
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// ===========================
// INITIALIZE ALL COMPONENTS
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize age gate
    new AgeGate();
    
    // Initialize navigation
    new Navigation();
    
    // Initialize scroll reveal animations
    new ScrollReveal();
    
    // Initialize contact form
    new ContactForm();
    
    // Initialize portfolio interactions
    new PortfolioInteractions();
    
    // Log initialization (remove in production)
    console.log('K Entertainment Studio Inc. - Website Initialized');
    console.log('All interactive features loaded successfully.');
});

// ===========================
// PERFORMANCE MONITORING
// ===========================
window.addEventListener('load', () => {
    // Log page load performance (optional)
    if ('performance' in window) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page loaded in ${pageLoadTime}ms`);
    }
});

// ===========================
// ERROR HANDLING
// ===========================
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// ===========================
// EXPORTS (if using modules)
// ===========================
// Uncomment if using ES6 modules
// export { AgeGate, Navigation, ScrollReveal, ContactForm, PortfolioInteractions, Utils };
