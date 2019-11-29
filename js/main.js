(function() {
    var touchingCarousel = false,
      touchStartCoords;

    document.body.addEventListener('touchstart', function(e) {
      if (e.target.closest('.flickity-slider')) {
        touchingCarousel = true;
      } else {
        touchingCarousel = false;
        return;
      }

      touchStartCoords = {
        x: e.touches[0].pageX,
        y: e.touches[0].pageY
      }
    });

    document.body.addEventListener('touchmove', function(e) {
      if (!(touchingCarousel && e.cancelable)) {
        return;
      }

      var moveVector = {
        x: e.touches[0].pageX - touchStartCoords.x,
        y: e.touches[0].pageY - touchStartCoords.y
      };

      if (Math.abs(moveVector.x) > 7)
        e.preventDefault()

    }, {passive: false});
  })();


  var $carousel = $('.carousel').flickity({
  initialIndex: 0
});
var flkty = $carousel.data('flickity');

$carousel.on( 'staticClick.flickity', function( event, pointer, cellElement, cellIndex ) {
  // dismiss if cell was not clicked
  if ( !cellElement ) {
    return;
  }
  // go to next if current cell selected
  if ( cellIndex == flkty.selectedIndex ) {
    $carousel.flickity('next');
  } else {
    $carousel.flickity( 'select', cellIndex );
  }
});



let vh;
document.addEventListener("DOMContentLoaded", function(){
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

