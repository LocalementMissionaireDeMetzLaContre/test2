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

bookEl.addEventListener("touchmove", (e) => {
    const zoom = pageFlip.getZoom();
    if (zoom !== 1) {
        // Si on est zoomé, empêche le flip mais pas le pinch
        e.preventDefault(); // bloque le scroll / flip
        e.stopPropagation(); // laisse PageFlip tranquille sur les autres events
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
