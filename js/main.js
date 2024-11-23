document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".custom-navbar");
    const scrollTopButton = document.querySelector("#scrollTopButton");

    // Cambiar fondo de la barra al hacer scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            scrollTopButton.style.display = "flex";
        } else {
            navbar.classList.remove("scrolled");
            scrollTopButton.style.display = "none";
        }
    });

    // Scroll suave para los enlaces
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth",
                });
            }
        });
    });

    // Scroll suave para el botón "Ir arriba"
    scrollTopButton.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

//SECCION NOSOTROS
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, offset = 150) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (el) => {
        el.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, offset = 150) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (el) => {
        el.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".testimonials-slider");
    const prevBtn = document.querySelector("#prev-btn");
    const nextBtn = document.querySelector("#next-btn");
    let scrollInterval;

    // Función para deslizar automáticamente
    const startAutoScroll = () => {
        scrollInterval = setInterval(() => {
            slider.scrollBy({
                left: 300, // Desplaza el ancho de una tarjeta
                behavior: "smooth",
            });
            // Si está en el final, vuelve al inicio
            if (
                slider.scrollLeft + slider.offsetWidth >=
                slider.scrollWidth
            ) {
                slider.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            }
        }, 4000); // Cada 4 segundos
    };

    // Detener el desplazamiento automático
    const stopAutoScroll = () => {
        clearInterval(scrollInterval);
    };

    // Navegación manual con botones
    prevBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: -300, // Desplaza el ancho de una tarjeta
            behavior: "smooth",
        });
    });

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: 300, // Desplaza el ancho de una tarjeta
            behavior: "smooth",
        });
    });

    // Iniciar el auto-scroll
    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);

    // Iniciar desplazamiento automático
    startAutoScroll();
});


// Animación en scroll (reutilizable)
document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, offset = 150) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (el) => {
        el.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});


// Validación básica del formulario
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Gracias por contactarnos. Te responderemos pronto.");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");

    const elementInView = (el, offset = 150) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) - offset
        );
    };

    const displayScrollElement = (el) => {
        el.classList.add("visible");
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 150)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener("scroll", handleScrollAnimation);
});


