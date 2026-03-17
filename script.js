const pageFlip = new St.PageFlip(document.getElementById("book"), {
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

// ⚡ Bloquer flip pendant le zoom
let isZooming = false;

function checkZoom() {
    const zoom = pageFlip.getZoom();
    if (zoom > 1 && !isZooming) {
        isZooming = true;
        pageFlip.disable(); // Bloque le swipe
    } else if (zoom <= 1 && isZooming) {
        isZooming = false;
        pageFlip.enable(); // Réactive le swipe
    }
}

// Vérifie le zoom à chaque frame pendant le pinch
document.addEventListener("touchmove", () => {
    checkZoom();
}, { passive: false });

// Aussi au relâchement, pour s’assurer que le swipe revient
document.addEventListener("touchend", () => {
    checkZoom();
}, { passive: false });
