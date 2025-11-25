const icon = document.getElementById("cv");
const tooltip = document.getElementById("tooltip");

// Your tooltip text
const text = "CV - Work in progress :)";

// Show tooltip on hover
icon.addEventListener("mouseenter", () => {
    tooltip.textContent = text;
    tooltip.style.opacity = 1;
});

// Hide tooltip when leaving
icon.addEventListener("mouseleave", () => {
    tooltip.style.opacity = 0;
});

// Update tooltip position to follow cursor
icon.addEventListener("mousemove", (e) => {
    const offset = 15; // spacing from pointer
    tooltip.style.left = e.clientX + offset + "px";
    tooltip.style.top = e.clientY + offset + "px";
});

