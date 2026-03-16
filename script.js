// Full mobile-first : on part du téléphone
const pageFlip = new St.PageFlip(document.getElementById("book"), {
    width: 300,             // taille initiale mobile
    height: 500,
    size: "stretch",         // s'adapte à la div
    showCover: true,
    usePortrait: true,       // 1 page à la fois
    mobileScrollSupport: true, // support tactile
    minWidth: 300,
    maxWidth: 500,
    minHeight: 400,
    maxHeight: 700
});

pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));

