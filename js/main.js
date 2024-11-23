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
