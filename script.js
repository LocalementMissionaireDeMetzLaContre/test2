const bookElement = document.getElementById("book");

function isMobile() {
  return window.innerWidth <= 768;
}

let pageFlip = new St.PageFlip(bookElement, {
  width: 900,
  height: 600,
  size: "stretch",
  minWidth: 315,
  maxWidth: 1000,
  minHeight: 400,
  maxHeight: 800,
  showCover: true,
  drawShadow: true,
  maxShadowOpacity: 0.5,
  flippingTime: 700,
  usePortrait: false,
  mobileScrollSupport: false,
  startZIndex: 0,
  autoSize: true,
  useMouseEvents: true,
  singlePageMode: false // on gère manuellement
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

// Centrage couverture
function centerCover() {
  if (isMobile() && pageFlip.getCurrentPageIndex() === 0) {
    // Sur mobile, couverture centrée
    bookElement.style.marginLeft = `calc(50% - ${bookElement.offsetWidth / 2}px)`;
  } else {
    // Desktop ou autre page : pas de marge forcée
    bookElement.style.marginLeft = '';
  }
}

// Mise à l’échelle pour simulation mobile
function scaleForMobile() {
  if (isMobile()) {
    const scale = window.innerWidth / 375; // base 375px = width d’un iPhone classique
    bookElement.style.transform = `scale(${scale})`;
  } else {
    bookElement.style.transform = 'scale(1)';
  }
}

// Masquer page droite sur mobile
function updateMobileView() {
  if (!isMobile()) {
    document.querySelectorAll(".stf__page.stf__right").forEach(p => p.style.display = '');
  } else {
    document.querySelectorAll(".stf__page.stf__right").forEach(p => p.style.display = 'none');
  }
}

// Initialisation
centerCover();
updateMobileView();
scaleForMobile();

// Flip
pageFlip.on('flip', () => {
  centerCover();
  updateMobileView();
});

// Redimensionnement
window.addEventListener('resize', () => {
  pageFlip.update();
  centerCover();
  updateMobileView();
  scaleForMobile();
});