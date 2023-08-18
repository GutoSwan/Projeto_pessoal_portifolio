// Add the "fade-in" class to sections when they come into view
const sections = document.querySelectorAll("section");

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const applyAnimations = () => {
    sections.forEach((section) => {
        if (isInViewport(section)) {
            section.classList.add("fade-in");
        }
    });
};

window.addEventListener("scroll", applyAnimations);
window.addEventListener("load", applyAnimations);
