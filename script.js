const bookElement = document.getElementById("book");

// Initialisation PageFlip
const pageFlip = new St.PageFlip(bookElement, {
    width: 300,
    height: 500,
    size: "stretch",
    showCover: true,
    usePortrait: true,
    mobileScrollSupport: true,
    minWidth: 300,
    maxWidth: 500,
    minHeight: 400,
    maxHeight: 700,
    zoomEnabled: true,
    pinchZoom: true,
    maxZoom: 4,

    swipeAreaWidth: 40
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

// Variable pour savoir si l'utilisateur fait un pinch
let isZooming = false;

// Détecte le pinch avec 2 doigts
document.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
        isZooming = true;
        pageFlip.disable(); // 🚫 désactive le swipe PageFlip
    }
}, { passive: false });

// Quand il relâche un doigt
document.addEventListener("touchend", (e) => {
    if (e.touches.length < 2) {
        isZooming = false;
        pageFlip.enable(); // ✅ réactive le swipe PageFlip
    }
}, { passive: false });

// On empêche la propagation pour être sûr
document.addEventListener("touchmove", (e) => {
    if (isZooming) {
        e.stopPropagation();
        e.preventDefault();
    }
}, { passive: false });
