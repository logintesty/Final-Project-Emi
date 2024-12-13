// Animaciones al desplazarse
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.2,
    };

    // Polyfill para IntersectionObserver
    if (!('IntersectionObserver' in window)) {
        console.warn("IntersectionObserver no soportado. El efecto de animación no estará disponible.");
        sections.forEach((section) => section.classList.remove('hidden'));
        return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach((section) => {
        section.classList.add('hidden');
        observer.observe(section);
    });
});
