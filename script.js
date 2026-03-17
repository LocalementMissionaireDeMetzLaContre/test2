let isZooming = false;

// Détecte si l'utilisateur utilise 2 doigts → active le mode zoom
document.addEventListener("touchstart", function(e) {
    if (e.touches.length > 1) {
        isZooming = true;
    }
}, { passive: false });

// Désactive le mode zoom quand il n'y a plus que 1 doigt
document.addEventListener("touchend", function(e) {
    if (e.touches.length < 2) {
        isZooming = false;
    }
}, { passive: false });

// Empêche le flip PageFlip pendant le zoom
document.addEventListener("touchmove", function(e) {
    if (isZooming) {
        e.stopImmediatePropagation(); // bloque le flip
    }
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
    maxZoom: 4
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
