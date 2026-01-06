// Animaciones estilo Vitrina para la página de inicio
gsap.registerPlugin(ScrollTrigger);

// Split text effect para el título principal
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const lines = heroTitle.querySelectorAll('.line');
    
    lines.forEach((line, index) => {
        const text = line.textContent;
        line.innerHTML = '';
        text.split('').forEach((char, charIndex) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.display = 'inline-block';
            line.appendChild(span);
        });
        
        // Animación de entrada letra por letra
        gsap.from(line.querySelectorAll('span'), {
            duration: 0.8,
            y: 100,
            opacity: 0,
            rotationX: -90,
            stagger: 0.03,
            ease: 'power3.out',
            delay: index * 0.2,
            scrollTrigger: {
                trigger: heroTitle,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// Animación del subtítulo
gsap.from('.hero-subtitle', {
    duration: 1.2,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.8,
    scrollTrigger: {
        trigger: '.hero-subtitle',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Parallax effect para la imagen del hero
gsap.to('.hero-image', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero-vitrina',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Máscara de imagen con efecto reveal
gsap.from('.image-mask', {
    scaleX: 0,
    transformOrigin: 'left center',
    duration: 1.5,
    ease: 'power3.inOut',
    delay: 0.5,
    scrollTrigger: {
        trigger: '.hero-image',
        start: 'top 80%',
        toggleActions: 'play none none none'
    }
});

// Scroll indicator animation
gsap.to('.scroll-line', {
    scaleY: 1,
    transformOrigin: 'top center',
    duration: 2,
    ease: 'power2.inOut',
    repeat: -1,
    yoyo: true
});

// Descripción section con efecto reveal
gsap.from('.description-large', {
    clipPath: 'inset(0 100% 0 0)',
    duration: 1.5,
    ease: 'power3.inOut',
    scrollTrigger: {
        trigger: '.description-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.description-small', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out',
    delay: 0.5,
    scrollTrigger: {
        trigger: '.description-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

// Features con efecto stagger y parallax
const featureItems = document.querySelectorAll('.feature-item');
featureItems.forEach((item, index) => {
    // Animación de entrada
    gsap.from(item, {
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        rotationY: 45,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        delay: index * 0.2
    });
    
    // Parallax effect en scroll
    gsap.to(item, {
        y: -50,
        opacity: 0.7,
        ease: 'none',
        scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Hover effect
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 1.05,
            y: -10,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Números de características con contador animado
featureItems.forEach((item) => {
    const number = item.querySelector('.feature-number');
    if (number) {
        gsap.from(number, {
            textContent: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            stagger: 0.2,
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    }
});

// CTA Section con efecto reveal
gsap.from('.cta-title', {
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '.cta-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

// Botones con efecto hover avanzado
const buttons = document.querySelectorAll('.btn-vitrina');
buttons.forEach((btn) => {
    const btnBg = btn.querySelector('.btn-bg');
    
    btn.addEventListener('mouseenter', () => {
        gsap.to(btnBg, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        });
        gsap.to(btn, {
            y: -5,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    
    btn.addEventListener('mouseleave', () => {
        gsap.to(btnBg, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out'
        });
        gsap.to(btn, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
        });
    });
    
    // Animación de entrada
    gsap.from(btn, {
        scale: 0,
        rotation: 180,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.3,
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Smooth scroll reveal para toda la página
gsap.utils.toArray('.hero-vitrina, .description-section, .features-vitrina, .cta-section').forEach((section) => {
    gsap.from(section, {
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Efecto de parallax en el fondo
gsap.to('body', {
    backgroundPositionY: '50%',
    ease: 'none',
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

