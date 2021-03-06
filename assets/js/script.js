window.onload = function(e){
    console.log('i am here');


    let itemClassName = 'carousel-item';
    let items = document.getElementsByClassName(itemClassName);
    let totalItems = items.length;
    let slide=0;
    let moving=true;


    // set classes

    function setInitialClasses(){
      // Targets the previous, current, and next items
      // This assumes there are at least three items.
      
      items[totalItems - 1].classList.add("prev");
      items[0].classList.add("active");
      items[1].classList.add("next");
    }


    // Set event listeners
    function setEventListeners() {
      let next = document.getElementsByClassName('carousel__button--next')[0],
          prev = document.getElementsByClassName('carousel__button--prev')[0];
      next.addEventListener('click', moveNext);
      prev.addEventListener('click', movePrev);
    }


    // Next navigation handler
    function moveNext() {
      // check if moving

      if(!moving){
        // if it is the last slide reset to 0 else +1
        if(slide === totalItems-1){
            slide = 0; 
        }else{
          slide++;
        }


        // move carousel to slide 

        moveCarouselTo(slide); 
      }
    }


    // previous navigation handler
    function movePrev() {
      // Check if moving
      if (!moving) {
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
          slide = (totalItems - 1);
        } else {
          slide--;
        }
              
        // Move carousel to updated slide
        moveCarouselTo(slide);
      }
    }


    function disableInteraction() {
      // Set 'moving' to true for the same duration as our transition.
      // (0.5s = 500ms)
      
      moving = true;
      // setTimeout runs its function once after the given time
      setTimeout(function(){
        moving = false
      }, 500);
    }



    // important function driver

    function moveCarouselTo(slide){
      // check if carousel is moving, if not, allow interaction
      if (!moving) {
        // temporarily disable interactivity
        disableInteraction();
        // Update the "old" adjacent slides with "new" ones
        var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
        console.log(totalItems);

        // Test if carousel has more than three items
    if ((totalItems - 1) > 3) {

      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = (totalItems - 1);
      } else if (newNext >= (totalItems - 1)){
        oldNext = 0;
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = (totalItems - 1);
        oldPrevious = (totalItems - 2);
        oldNext = (slide + 1);
      } else if (slide === (totalItems -1)) {
        newPrevious = (slide - 1);
        newNext = 0;
        oldNext = 1;
      }
      // Now we've worked out where we are and where we're going, 
      // by adding/removing classes we'll trigger the transitions.
      // Reset old next/prev elements to default classes
      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;
      // Add new classes
      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";

      }
    }
    



}

function initCarousel() {
  setInitialClasses();
  setEventListeners();
  // Set moving to false so that the carousel becomes interactive
  moving = false;
}

// make it rain
initCarousel();

// to auto slidings
setInterval(moveNext, 4000);

// @abhi on 1/03/2022
// adding a product carousel on flipkart-clone


let prodNextBtn = document.querySelector('.prod_next');
let elemToMove = prodNextBtn.parentElement.children[0];
let prodPrevBtn = document.querySelector('.prod_prev');
console.log(prodPrevBtn)
// console.log(prodNextBtn.parentElement);

prodNextBtn.addEventListener('click', () => {
  console.log(elemToMove);
  elemToMove.scroll({
    top: 0,
    left: 1000,
    behavior: "smooth"
  });

  prodPrevBtn.style.visibility = 'visible';
  prodNextBtn.style.visibility = 'hidden';
  
})


prodPrevBtn.addEventListener('click', ()=>{
  elemToMove.scroll({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

  prodPrevBtn.style.visibility = 'hidden';
  prodNextBtn.style.visibility = 'visible';
})



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the modal
let modal = document.getElementsByClassName('modal')[0];
// Get the login btn
let loginbtn = document.getElementsByClassName('login-btn')[0];
// Get body
let body = document.getElementsByTagName('body');
console.log(body)
// When the user clicks on login button, show the modal
loginbtn.onclick = ()=>{
  modal.style.display = 'block';
  // body.style.overflow = 'hidden'; didnt work dont know why
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 


}