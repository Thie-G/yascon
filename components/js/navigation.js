//This code is for making header be transparent when window not scrowed else turn into green when scrowed
// Select the header element
const siteHeader = document.getElementById('site-header');
const nav_brand = document.getElementById('nav-brand');


// Function to handle scroll event
function handleScroll() {
    // Check if the user has scrolled past 0px
    if (window.scrollY > 0) {
        // Add classes for a solid background and shadow when scrolled
        nav_brand.classList.add('bg-green-800', 'shadow-md', 'backdrop-blur-3xl','border-b');
        siteHeader.classList.add('bg-green-800', 'shadow-md');
        siteHeader.classList.remove('bg-transparent');
        nav_brand.classList.remove('bg-transparent');
    } else {
        // Remove classes for a transparent background when at the top
        
        nav_brand.classList.remove('bg-green-800', 'shadow-md', 'backdrop-blur-3xl','border-b')  
        siteHeader.classList.remove('bg-green-800', 'shadow-md');
        siteHeader.classList.add('bg-transparent');
        nav_brand.classList.add('bg-transparent');
    }
}

// scroll event listener
window.addEventListener('scroll', handleScroll);
// Calling the function initially in case the page loads already scrolled
handleScroll();