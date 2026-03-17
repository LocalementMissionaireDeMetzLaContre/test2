let isPinching = false;

// Détecte le pinch à 2 doigts
document.addEventListener('touchstart', e => {
    if (e.touches.length > 1) isPinching = true;
}, { passive: false });

document.addEventListener('touchend', e => {
    if (e.touches.length < 2) isPinching = false;
}, { passive: false });

// Initialisation PageFlip
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
    maxZoom: 4,

    swipeAreaWidth: 50,    // swipe seulement sur 50px des bords
    clickEventForward: false
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

// Bloque le flip si pinch en cours
pageFlip.on('flipStart', e => {
    if (isPinching) e.preventDefault();
});
