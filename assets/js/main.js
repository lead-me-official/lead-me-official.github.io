// Main JS extracted from index.html - initialize interactivity and small helpers

// Navbar scroll effect
(function () {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
})();

// Intersection Observer for fade-in animations
(function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
})();

// Newsletter form (uses accessible toast)
(function () {
    const form = document.getElementById('newsletter-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    if (!form) return;

    function showToast(message, timeout = 5000) {
        if (!toast || !toastMessage) {
            window.alert(message);
            return;
        }
        toastMessage.textContent = message;
        toast.hidden = false;
        toast.classList.add('show');
        toast.setAttribute('aria-hidden', 'false');
        // Move focus to toast for screen reader announcement, but restore focus after
        const prevFocus = document.activeElement;
        toast.focus({ preventScroll: true });

        const hide = () => {
            toast.classList.remove('show');
            toast.setAttribute('aria-hidden', 'true');
            setTimeout(() => {
                toast.hidden = true;
            }, 250);
            if (prevFocus && typeof prevFocus.focus === 'function') prevFocus.focus();
        };

        const timer = setTimeout(hide, timeout);

        // allow manual dismiss on click
        const onClick = () => {
            clearTimeout(timer);
            hide();
            toast.removeEventListener('click', onClick);
        };

        toast.addEventListener('click', onClick);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        showToast(`Thank you for subscribing! We'll send insights to ${email} every week.`);
        e.target.reset();
    });
})();

// Smooth scroll for anchor links
(function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
})();
