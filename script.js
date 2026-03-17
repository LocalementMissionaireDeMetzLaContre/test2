const bookEl = document.getElementById("book");
let isZooming = false;

// Initialisation PageFlip
const pageFlip = new St.PageFlip(bookEl, {
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
    maxZoom: 4
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

// Détecte si l'utilisateur utilise 2 doigts → mode zoom
bookEl.addEventListener("touchstart", (e) => {
    if (e.touches.length > 1) {
        isZooming = true;
    }
}, { passive: false });

bookEl.addEventListener("touchend", (e) => {
    if (e.touches.length < 2) {
        isZooming = false;
    }
}, { passive: false });

// Bloque le flip si zoom actif ou si le zoom est supérieur à 1
bookEl.addEventListener("touchmove", (e) => {
    const zoom = pageFlip.getZoom(); // récupère le niveau de zoom actuel
    if (isZooming || zoom !== 1) {
        e.stopImmediatePropagation(); // bloque le flip
    }
}, { passive: false });
