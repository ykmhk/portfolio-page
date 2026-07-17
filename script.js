window.addEventListener("load",()=>{


    document.querySelector(".hero-meta").classList.add("show");
    document.querySelector(".hero-links").classList.add("show");
    document.querySelector(".hero-image").classList.add("show");

    const heroSection = document.querySelector(".hero");
    const backToToplink = document.querySelector(".back-to-top");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // isIntersecting = false = out of hero section
            if (!entry.isIntersecting) {
                backToToplink.classList.add("visible");
            } else {
                backToToplink.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1 
    });

    observer.observe(heroSection);

});
