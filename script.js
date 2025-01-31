document.addEventListener("DOMContentLoaded", () => {
    // Smooth fade-in animation
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.5 });

    fadeElements.forEach(el => observer.observe(el));

    // Click effect for project cards
    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", () => {
            alert("Project details coming soon!");
        });
    });

    // Smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
