// Registrar ScrollTrigger con GSAP
gsap.registerPlugin(ScrollTrigger);

// Inicializar Lenis para scroll suave
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
});

// Función para animar el scroll con Lenis
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Registrar GSAP ScrollTrigger con Lenis
lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Animación de entrada para el logo y nombre de marca
gsap.from('.brand-section', {
    duration: 1.5,
    x: -100,
    opacity: 0,
    ease: 'power3.out',
    delay: 0.3
});

// Animación de entrada para la navegación
gsap.from('nav ul li', {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.1,
    ease: 'back.out(1.7)',
    delay: 0.5
});

// Animación de entrada para títulos principales
gsap.utils.toArray('.main-content h2').forEach((title) => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.5,
        rotation: -10,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)'
    });
});

// Animación de entrada para párrafos descriptivos
gsap.utils.toArray('.main-content > p').forEach((p) => {
    gsap.from(p, {
        scrollTrigger: {
            trigger: p,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 30,
        opacity: 0,
        ease: 'power2.out',
        delay: 0.2
    });
});

// Animación sorprendente para las tarjetas de productos (Bolsa de Cafés)
gsap.utils.toArray('.bolsa-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        x: index % 2 === 0 ? -100 : 100,
        y: 50,
        rotation: index % 2 === 0 ? -15 : 15,
        opacity: 0,
        scale: 0.8,
        ease: 'back.out(1.7)',
        delay: index * 0.15
    });

    // Efecto hover mejorado con GSAP
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            duration: 0.5,
            scale: 1.05,
            rotation: 0,
            y: -10,
            boxShadow: '0 20px 40px rgba(255, 184, 77, 0.4)',
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            duration: 0.5,
            scale: 1,
            rotation: 0,
            y: 0,
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
            ease: 'power2.out'
        });
    });
});

// Animación para las tarjetas de características (Inicio)
gsap.utils.toArray('.feature-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 80,
        opacity: 0,
        rotationY: 90,
        ease: 'power3.out',
        delay: index * 0.2
    });

    // Animación del icono dentro de la tarjeta
    const icon = card.querySelector('.feature-icon');
    if (icon) {
        gsap.from(icon, {
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 1.5,
            scale: 0,
            rotation: 360,
            ease: 'elastic.out(1, 0.5)',
            delay: index * 0.2 + 0.3
        });
    }
});

// Animación para el formulario de quejas y sugerencias
gsap.utils.toArray('.form-container').forEach((form) => {
    gsap.from(form, {
        scrollTrigger: {
            trigger: form,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        scale: 0.8,
        opacity: 0,
        rotationX: 90,
        transformOrigin: 'center center',
        ease: 'power3.out'
    });

    // Animación de entrada para los campos del formulario
    gsap.utils.toArray('.form-group').forEach((field, index) => {
        gsap.from(field, {
            scrollTrigger: {
                trigger: form,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            x: -50,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.1 + 0.5
        });
    });
});

// Animación para el botón de envío del formulario
gsap.utils.toArray('.btn-submit').forEach((btn) => {
    gsap.from(btn, {
        scrollTrigger: {
            trigger: btn,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        scale: 0,
        rotation: 180,
        ease: 'back.out(1.7)',
        delay: 0.8
    });

    // Efecto hover pulsante
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1.1,
            boxShadow: '0 8px 25px rgba(255, 184, 77, 0.6)',
            ease: 'power2.out'
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            duration: 0.3,
            scale: 1,
            boxShadow: '0 4px 15px rgba(255, 184, 77, 0.4)',
            ease: 'power2.out'
        });
    });
});

// Animación parallax para imágenes de fondo
gsap.utils.toArray('.historia-image img, .menu-image img').forEach((img) => {
    gsap.to(img, {
        scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        },
        y: -100,
        scale: 1.1,
        ease: 'none'
    });
});

// Animación para el contenedor de historia
gsap.utils.toArray('.historia-container').forEach((container) => {
    gsap.from(container, {
        scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        opacity: 0,
        ease: 'power2.out'
    });

    // Animación para el texto de historia
    gsap.utils.toArray('.historia-text p').forEach((p, index) => {
        gsap.from(p, {
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            x: -50,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.2 + 0.3
        });
    });
});

// Animación para la sección de ubicación
gsap.utils.toArray('.ubicacion-container').forEach((container) => {
    gsap.from(container, {
        scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.2,
        scale: 0.9,
        opacity: 0,
        ease: 'power3.out'
    });
});

// Animación para el mapa
gsap.utils.toArray('.mapa-container').forEach((mapa) => {
    gsap.from(mapa, {
        scrollTrigger: {
            trigger: mapa,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        scale: 0,
        rotation: 45,
        opacity: 0,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.3
    });
});

// Animación para el footer
gsap.utils.toArray('.footer').forEach((footer) => {
    gsap.from(footer, {
        scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power3.out'
    });

    // Animación para las secciones del footer
    gsap.utils.toArray('.footer-section').forEach((section, index) => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: footer,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            delay: index * 0.15
        });
    });
});

// Animación para los iconos de redes sociales
gsap.utils.toArray('.social-icons a').forEach((icon, index) => {
    gsap.from(icon, {
        scrollTrigger: {
            trigger: icon.closest('.footer-section'),
            start: 'top 90%',
            toggleActions: 'play none none reverse'
        },
        duration: 0.8,
        scale: 0,
        rotation: 360,
        ease: 'back.out(1.7)',
        delay: index * 0.1
    });

    // Efecto hover con rotación
    icon.addEventListener('mouseenter', () => {
        gsap.to(icon, {
            duration: 0.4,
            scale: 1.2,
            rotation: 360,
            ease: 'power2.out'
        });
    });

    icon.addEventListener('mouseleave', () => {
        gsap.to(icon, {
            duration: 0.4,
            scale: 1,
            rotation: 0,
            ease: 'power2.out'
        });
    });
});

// Animación especial para la sección de bienvenida
gsap.utils.toArray('.welcome-section').forEach((section) => {
    // Animación del título principal
    gsap.from('.welcome-title', {
        duration: 1.5,
        y: -100,
        opacity: 0,
        scale: 0.5,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5
    });

    // Animación del subtítulo
    gsap.from('.welcome-subtitle', {
        duration: 1.2,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0.8
    });

    // Animación de la taza de café con efecto flotante continuo
    gsap.to('.coffee-cup', {
        duration: 2,
        y: -15,
        rotation: 5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.5
    });

    // Animación del texto de bienvenida
    gsap.from('.welcome-text', {
        duration: 1.5,
        x: -100,
        opacity: 0,
        ease: 'power3.out',
        delay: 1.2
    });

    // Animación de los botones
    gsap.utils.toArray('.welcome-buttons a').forEach((btn, index) => {
        gsap.from(btn, {
            duration: 1,
            scale: 0,
            rotation: index % 2 === 0 ? -180 : 180,
            opacity: 0,
            ease: 'back.out(1.7)',
            delay: 1.5 + index * 0.2
        });
    });
});

// Animación para los enlaces de navegación con efecto hover mejorado
gsap.utils.toArray('nav ul li a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            duration: 0.3,
            scale: 1.1,
            y: -3,
            ease: 'power2.out'
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            duration: 0.3,
            scale: 1,
            y: 0,
            ease: 'power2.out'
        });
    });
});

// Efecto de cursor personalizado (opcional, muy sorprendente)
if (window.innerWidth > 768) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid #FFB84D;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    cursorFollower.style.cssText = `
        width: 8px;
        height: 8px;
        background: #FFB84D;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        display: none;
    `;
    document.body.appendChild(cursorFollower);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.3,
            ease: 'power2.out'
        });
        gsap.to(cursorFollower, {
            x: e.clientX - 4,
            y: e.clientY - 4,
            duration: 0.1,
            ease: 'power2.out'
        });
    });

    // Mostrar cursor solo en desktop
    if (window.innerWidth > 768) {
        cursor.style.display = 'block';
        cursorFollower.style.display = 'block';
    }

    // Efecto al pasar sobre elementos interactivos
    gsap.utils.toArray('a, button, .btn-submit, .bolsa-card, .feature-card').forEach((el) => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                borderColor: '#FFA500',
                duration: 0.3
            });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                borderColor: '#FFB84D',
                duration: 0.3
            });
        });
    });
}

// Animación de carga inicial (splash screen effect)
window.addEventListener('load', () => {
    gsap.from('body', {
        duration: 0.5,
        opacity: 0,
        ease: 'power2.in'
    });
});

// Smooth reveal para elementos que aparecen en scroll
const revealElements = gsap.utils.toArray('.main-content > *');
revealElements.forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
});

