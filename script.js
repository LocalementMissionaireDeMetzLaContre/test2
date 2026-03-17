
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

