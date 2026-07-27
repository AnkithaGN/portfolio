document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // FOOTER YEAR
    // =========================

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    // =========================
    // MOBILE NAVIGATION
    // =========================

    const navToggle = document.getElementById("nav-toggle");
    const navLinks = document.getElementById("nav-links");

    if (navToggle && navLinks) {

        navToggle.addEventListener("click", function () {
            navLinks.classList.toggle("show");
        });

    }


    // Close mobile menu after clicking a link

    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navLinks) {
                navLinks.classList.remove("show");
            }

        });

    });


    // =========================
    // ACTIVE NAVBAR LINK
    // =========================

    const sections =
        document.querySelectorAll("section[id], header[id]");

    function updateActiveLink() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 160;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });


        links.forEach(function (link) {

            link.classList.remove("active");

            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener("scroll", updateActiveLink);

    updateActiveLink();


    // =========================
    // SCROLL ANIMATION
    // =========================

    const cards = document.querySelectorAll(
        ".project-card, " +
        ".skill-card, " +
        ".education-card, " +
        ".cert-card, " +
        ".timeline-content, " +
        ".language-card, " +
        ".contact-card"
    );


    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.1
            }

        );


        cards.forEach(function (card) {

            card.classList.add("fade-card");

            observer.observe(card);

        });

    } else {

        // Fallback for older browsers

        cards.forEach(function (card) {
            card.classList.add("visible");
        });

    }

});