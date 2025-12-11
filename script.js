// Animate fade/pop-in on load
window.addEventListener("load", () => {
    const elements = document.querySelectorAll(".fade");
    elements.forEach((el, index) => {
        el.style.opacity = 0;
        el.style.transform = "scale(0.8) rotate(-2deg)";
        setTimeout(() => {
            el.style.transition = "all 0.8s ease";
            el.style.opacity = 1;
            el.style.transform = "scale(1) rotate(0deg)";
        }, 200 * index);
    });

    // Button hover pop effect
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("mouseover", () => {
            btn.style.transform = "scale(1.1) rotate(-2deg)";
        });
        btn.addEventListener("mouseout", () => {
            btn.style.transform = "scale(1) rotate(0deg)";
        });
    });
});
