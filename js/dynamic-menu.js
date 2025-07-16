// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const nav = document.querySelector('header nav');
    const body = document.body;
    
    // Create mobile menu overlay
    const mobileMenuOverlay = document.createElement('div');
    mobileMenuOverlay.id = 'mobile-menu-overlay';
    mobileMenuOverlay.classList.add('mobile-menu-overlay');
    
    // Clone the navigation for mobile
    const mobileNav = nav.cloneNode(true);
    mobileNav.id = 'mobile-nav';
    mobileNav.classList.add('mobile-nav');
    
    // Add mobile menu to overlay
    mobileMenuOverlay.appendChild(mobileNav);
    
    // Add close button to mobile menu
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.classList.add('mobile-menu-close');
    closeButton.setAttribute('aria-label', 'Close menu');
    mobileMenuOverlay.insertBefore(closeButton, mobileNav);
    
    // Insert overlay into body
    body.appendChild(mobileMenuOverlay);
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        const isOpen = mobileMenuOverlay.classList.contains('active');
        
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    function openMobileMenu() {
        mobileMenuOverlay.classList.add('active');
        body.classList.add('menu-open');
        menuButton.setAttribute('aria-expanded', 'true');
    }
    
    function closeMobileMenu() {
        mobileMenuOverlay.classList.remove('active');
        body.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
    }
    
    // Event listeners
    menuButton.addEventListener('click', toggleMobileMenu);
    closeButton.addEventListener('click', closeMobileMenu);
    
    // Close menu when clicking on overlay background
    mobileMenuOverlay.addEventListener('click', function(e) {
        if (e.target === mobileMenuOverlay) {
            closeMobileMenu();
        }
    });
    
    // Close menu when clicking on a navigation link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 750) {
            closeMobileMenu();
        }
    });
});