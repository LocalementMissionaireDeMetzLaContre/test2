const bookEl = document.getElementById("book");

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

// 🔒 Bloque le flip si zoom actif
bookEl.addEventListener("touchmove", (e) => {
    const zoom = pageFlip.getZoom();
    if (zoom !== 1) {
        e.preventDefault();       // empêche le scroll et swipe
        e.stopPropagation();      // ne laisse pas passer l'événement au flip
    }
}, { passive: false });
