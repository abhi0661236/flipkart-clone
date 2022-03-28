window.onload = function(e){
    console.log('i am here');


    let carouselItems = document.querySelectorAll('.carousel .carousel-item');
let index = 0;
window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), carouselItems.length-1);
  carouselItems[index].scrollIntoView({behavior: 'smooth'});
}
}
