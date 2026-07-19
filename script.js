window.addEventListener("load", () => {
    document.querySelector(".hero-meta").classList.add("show");
    document.querySelector(".hero-links").classList.add("show");
    document.querySelector(".hero-image").classList.add("show");

    const heroSection = document.querySelector(".hero");
    const backToToplink = document.querySelector(".back-to-top");

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                backToToplink.classList.add("visible");
            } else {
                backToToplink.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1 
    });

    if (heroSection && backToToplink) {
        heroObserver.observe(heroSection);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");
    const aboutContent = document.querySelector(".about-content.layout");
    const svgElement = document.getElementById("handwritten-name");
    
    if (svgElement) {
        const paths = svgElement.querySelectorAll(".stroke-line");
        paths.forEach((path, index) => {
            const length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            path.style.animationDelay = `${index * 0.3}s`; 
        });
    }

    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (aboutContent) aboutContent.classList.add("show");
                if (svgElement) svgElement.classList.add("active");
            } else {
               
                if (aboutContent) aboutContent.classList.remove("show");
                if (svgElement) svgElement.classList.remove("active");
            }
        });
    }, {
        threshold: 0.15 
    });

    if (aboutSection) {
        aboutObserver.observe(aboutSection);
    }
});
