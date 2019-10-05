

var galleryElems = document.querySelectorAll('.main-carousel');
for ( var i=0, len = galleryElems.length; i < len; i++ ) {
  var galleryElem = galleryElems[i];
  new Flickity( galleryElem, {
    // options...
    cellAlign: 'center',
  contain: true
  });

