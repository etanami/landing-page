/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll('section');
const menuNav = document.getElementById("navbar__list");
const myBtn = document.getElementById("top_btn");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNav = () => {
    navHtml = '';
    //adds this html as <li>
    allSections.forEach(section => {     
        navHtml += `<li><a class= "menu__link" href="${section.id}">${section.dataset.nav}</a></li>`;
    });
    //sets html to the <ul>
    menuNav.innerHTML = navHtml;

};

buildNav();


// Add class 'active' to section when near top of viewport
const activeSection = () => {
    allSections.forEach(section => {
        //gets the value of top
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < 200 && sectionTop >= -200){
            section.classList.add('your-active-class');
        }else{
            section.classList.remove('your-active-class');
        }
    });
}
//calls activeSection function into the scroll event
document.addEventListener('scroll', activeSection);

// Scroll to anchor ID using scrollTO event
document.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', event => {
        //stopped the default occuring event
        event.preventDefault();
        //'smooth' scrolls to the section instead of an automatic jump        
        document.getElementById(a.getAttribute('href')).scrollIntoView({behavior: 'smooth'});
    });
});

// scroll to top button when below fold of page
window.onscroll = function() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    	myBtn.style.display = "block";
    }else{
    	myBtn.style.display = "none";
    }
};

function toTopFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/**
 * End Main Functions
 * 
*/
