/**
 * ============================================
 * MAIN JAVASCRIPT - VÕ ĐÀO HUY HOÀNG PORTAL
 * ============================================
 */

// ========== GLOBAL CONFIGURATION ==========
const CONFIG = {
    animationDelay: 100,
    scrollOffset: 100,
    particleCount: 50
};

// ========== THEME MANAGEMENT ==========
const ThemeManager = {
    init() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.setTheme(savedTheme);
        this.bindEvents();
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateToggleIcon(theme);
    },

    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.setTheme(newTheme);
    },

    updateToggleIcon(theme) {
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('i');
            if (icon) {
                icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
            }
        }
    },

    bindEvents() {
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggleTheme());
        }
    }
};

// ========== NAVIGATION ==========
const Navigation = {
    init() {
        this.navbar = document.querySelector('.navbar');
        this.mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        this.navLinks = document.querySelector('.nav-links');
        
        this.bindEvents();
        this.setActiveLink();
    },

    bindEvents() {
        // Scroll event for sticky navbar
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Mobile menu toggle
        if (this.mobileMenuBtn) {
            this.mobileMenuBtn.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Close mobile menu when clicking on a link
        if (this.navLinks) {
            this.navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    this.navLinks.classList.remove('active');
                });
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.navLinks && !e.target.closest('.navbar')) {
                this.navLinks.classList.remove('active');
            }
        });
    },

    handleScroll() {
        if (this.navbar) {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }
    },

    toggleMobileMenu() {
        if (this.navLinks) {
            this.navLinks.classList.toggle('active');
        }
    },

    setActiveLink() {
        const currentPath = window.location.pathname;
        const links = document.querySelectorAll('.nav-links a');
        
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (currentPath.endsWith(href) || 
                (currentPath === '/' && href === 'index.html') ||
                (currentPath.includes(href.replace('.html', '')))) {
                link.classList.add('active');
            }
        });
    }
};

// ========== SCROLL TO TOP ==========
const ScrollToTop = {
    init() {
        this.button = document.querySelector('.scroll-top');
        if (this.button) {
            this.bindEvents();
        }
    },

    bindEvents() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.button.addEventListener('click', () => this.scrollToTop());
    },

    handleScroll() {
        if (window.scrollY > 300) {
            this.button.classList.add('visible');
        } else {
            this.button.classList.remove('visible');
        }
    },

    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

// ========== SMOOTH SCROLL ==========
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleClick(e, anchor));
        });
    },

    handleClick(e, anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            const offsetTop = target.offsetTop - CONFIG.scrollOffset;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
};

// ========== SCROLL REVEAL ANIMATION ==========
const ScrollReveal = {
    init() {
        this.elements = document.querySelectorAll('.card, .project-card, .skill-item, .timeline-item, .award-card, .cert-card, .stat-box');
        
        if (this.elements.length > 0) {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
            );
            
            this.elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                this.observer.observe(el);
            });
        }
    },

    handleIntersection(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * CONFIG.animationDelay);
                
                this.observer.unobserve(entry.target);
            }
        });
    }
};

// ========== CYBER BACKGROUND ==========
const CyberBackground = {
    init() {
        const bg = document.querySelector('.cyber-bg');
        if (bg) {
            this.createParticles(bg);
        }
    },

    createParticles(container) {
        for (let i = 0; i < CONFIG.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random colors
            const colors = ['#3B82F6', '#06B6D4', '#22C55E', '#8B5CF6'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            container.appendChild(particle);
        }
    }
};

// ========== TYPING EFFECT ==========
const TypingEffect = {
    init(element, texts, speed = 100) {
        if (!element) return;
        
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        
        this.type();
    },

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.element.textContent = currentText.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentText.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500; // Pause before next word
        }

        setTimeout(() => this.type(), typeSpeed);
    }
};

// ========== TABS ==========
const Tabs = {
    init() {
        document.querySelectorAll('.tabs').forEach(tabContainer => {
            const buttons = tabContainer.querySelectorAll('.tab-btn');
            const panels = tabContainer.querySelectorAll('.tab-panel');
            
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.dataset.tab;
                    
                    // Update buttons
                    buttons.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // Update panels
                    panels.forEach(panel => {
                        panel.classList.remove('active');
                        if (panel.id === target) {
                            panel.classList.add('active');
                        }
                    });
                });
            });
        });
    }
};

// ========== ACCORDION ==========
const Accordion = {
    init() {
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                
                // Close all items (optional - remove for multi-open)
                // item.parentElement.querySelectorAll('.accordion-item').forEach(i => {
                //     i.classList.remove('active');
                // });
                
                // Toggle current item
                item.classList.toggle('active', !isActive);
            });
        });
    }
};

// ========== COPY TO CLIPBOARD ==========
const CopyToClipboard = {
    init() {
        document.querySelectorAll('[data-copy]').forEach(element => {
            element.addEventListener('click', () => this.copy(element));
        });
        
        // Code copy buttons
        document.querySelectorAll('.code-copy').forEach(btn => {
            btn.addEventListener('click', () => {
                const codeBlock = btn.closest('.code-block');
                const code = codeBlock.querySelector('code').textContent;
                this.copyText(code, btn);
            });
        });
    },

    copy(element) {
        const text = element.dataset.copy;
        this.copyText(text, element);
    },

    async copyText(text, element) {
        try {
            await navigator.clipboard.writeText(text);
            
            const originalText = element.textContent;
            element.textContent = 'Copied!';
            element.classList.add('copied');
            
            setTimeout(() => {
                element.textContent = originalText;
                element.classList.remove('copied');
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    }
};

// ========== PROJECT FILTERS ==========
const ProjectFilters = {
    init() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        if (filterButtons.length === 0) return;
        
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.dataset.categories?.split(',') || [];
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
};

// ========== FORM VALIDATION ==========
const FormValidation = {
    init() {
        const forms = document.querySelectorAll('form[data-validate]');
        
        forms.forEach(form => {
            form.addEventListener('submit', (e) => this.handleSubmit(e, form));
        });
    },

    handleSubmit(e, form) {
        e.preventDefault();
        
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                this.showError(input, 'This field is required');
            } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
                isValid = false;
                this.showError(input, 'Please enter a valid email');
            } else {
                this.clearError(input);
            }
        });
        
        if (isValid) {
            // Submit form or handle data
            console.log('Form is valid!');
            // form.submit();
        }
    },

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    },

    showError(input, message) {
        input.classList.add('error');
        let errorEl = input.parentElement.querySelector('.error-message');
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'error-message';
            input.parentElement.appendChild(errorEl);
        }
        errorEl.textContent = message;
    },

    clearError(input) {
        input.classList.remove('error');
        const errorEl = input.parentElement.querySelector('.error-message');
        if (errorEl) errorEl.remove();
    }
};

// ========== COUNTER ANIMATION ==========
const CounterAnimation = {
    init() {
        const counters = document.querySelectorAll('[data-counter]');
        
        if (counters.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        counters.forEach(counter => observer.observe(counter));
    },

    animateCounter(element) {
        const target = parseInt(element.dataset.counter);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const animate = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(animate);
            } else {
                element.textContent = target;
            }
        };
        
        animate();
    }
};

// ========== UTILITY FUNCTIONS ==========
const Utils = {
    // Debounce function
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

    // Throttle function
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

    // Format date
    formatDate(date, locale = 'vi-VN') {
        return new Date(date).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    // Get URL parameters
    getUrlParams() {
        return Object.fromEntries(new URLSearchParams(window.location.search));
    }
};

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    Navigation.init();
    ScrollToTop.init();
    SmoothScroll.init();
    ScrollReveal.init();
    CyberBackground.init();
    Tabs.init();
    Accordion.init();
    CopyToClipboard.init();
    ProjectFilters.init();
    FormValidation.init();
    CounterAnimation.init();
    
    console.log('🚀 Portal initialized successfully!');
});

// Export for use in other scripts
window.Portal = {
    ThemeManager,
    Navigation,
    TypingEffect,
    Utils
};
