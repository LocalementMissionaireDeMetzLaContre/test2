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

    swipeAreaWidth: 40,
    clickEventForward: false
    
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

// Variable pour savoir si l'utilisateur fait un pinch
let isPinching = false;

document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        isPinching = true;  // on commence un pinch
    }
}, {passive: false});

document.addEventListener('touchend', (e) => {
    if (e.touches.length < 2) {
        isPinching = false; // pinch terminé
    }
}, {passive: false});

pageFlip.on('flipStart', (e) => {
    if (isPinching) {
        e.preventDefault(); // bloque le flip si pinch en cours
    }
});
