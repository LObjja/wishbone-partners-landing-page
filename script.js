document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const menu = document.getElementById("menu");
    const burger = document.getElementById("burger");

    const closeMenu = () => {
        header.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
    };

    burger.addEventListener("click", () => {
        header.classList.toggle("open");

        const isOpen = header.classList.contains("open");
        burger.setAttribute("aria-expanded", isOpen);
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

    document.body.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            closeMenu();
        }
    });
});