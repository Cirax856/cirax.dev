const cv = document.getElementById("cv");
const dc = document.getElementById("discord");
const tooltip = document.getElementById("tooltip");

var timeout;
const offset = 15;

const enter = (text) =>
{
    tooltip.textContent = text;
    tooltip.style.opacity = 1;
    tooltip.style.backgroundColor = "rgba(20, 20, 20, 0.9)";
}

const leave = () =>
{
    tooltip.style.opacity = 0;
    clearTimeout(timeout);
}

const move = (e) =>
{
    tooltip.style.left = e.clientX + offset + "px";
    tooltip.style.top = e.clientY + offset + "px";
}

// cv
cv.addEventListener("mouseenter", () => enter("CV - Work in progress :)"));
cv.addEventListener("mouseleave", leave);
cv.addEventListener("mousemove", (e) => move(e));

// discord
dc.addEventListener("mouseenter", () => enter("Click to copy username"));
dc.addEventListener("mouseleave", leave);
dc.addEventListener("mousemove", e => move(e));
dc.addEventListener("click", (e) => {
    navigator.clipboard.writeText("cirax856")
        .then(() => {
            tooltip.style.backgroundColor = "var(--primary)";
            tooltip.textContent = "Copied!";
            timeout = setTimeout(() => {
                tooltip.style.backgroundColor = "rgba(20, 20, 20, 0.9)";
                tooltip.textContent = "Click to copy username";
            }, 2000);
        })
        .catch(err => {
            console.error(err);
        });
});
