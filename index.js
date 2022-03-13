
// @very-dark-blue-bg: hsl(230, 17%, 14%);
// @very-dark-blue-top-bg-pattern: hsl(232, 19%, 15%);
// @dark-desaturated-blue-card-bg: hsl(228, 28%, 20%);
// @desaturated-blue-text: hsl(228, 34%, 66%);
// @white-text: hsl(0, 0%, 100%);
const toggle = document.querySelector('.checkbox');
const header = document.querySelector('.header');
var cards = document.querySelectorAll('.card');
const heading1 = document.querySelector('.heading-1');
const heading2 = document.querySelector('.heading-2');
const toggleHeading = document.querySelector('.toggle-heading-2');
const overviewHeading = document.querySelector('.overview-heading');
var noOfFolloweres = document.querySelectorAll('.no-of-followeres'); 
var detailsNumber = document.querySelectorAll('.details-number');
var detailsCard = document.querySelectorAll('.details');
var followers = document.querySelectorAll('.followers');
var detailHeadingText = document.querySelectorAll('.detail-heading-text');



toggle.addEventListener('click', changeColor);


function changeColor() {
    document.body.classList.toggle('body-dark');
    header.classList.toggle('header-dark');

  
    for (i = 0; i < cards.length; ++i) {

       cards[i].classList.toggle('card-dark');
      }

      heading1.classList.toggle('heading-1-dark'); 
      heading2.classList.toggle('heading-2-dark'); 
      toggleHeading.classList.toggle('heading-2-dark'); 
      overviewHeading.classList.toggle('heading-1-dark');

      for (i = 0; i < noOfFolloweres.length; ++i) {
        noOfFolloweres[i].classList.toggle('heading-1-dark');
       }

       for (i = 0; i < detailsNumber.length; ++i) {
        detailsNumber[i].classList.toggle('heading-1-dark');
       }

       for (i = 0; i < detailsCard.length; ++i) {
        detailsCard[i].classList.toggle('card-dark');
       }

       for (i = 0; i < followers.length; ++i) {
        followers[i].classList.toggle('heading-2-dark');
       }

       for (i = 0; i < detailHeadingText.length; ++i) {
        detailHeadingText[i].classList.toggle('heading-2-dark');
       }
    
}