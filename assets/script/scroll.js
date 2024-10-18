function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Scroll event to trigger animation when elements come into view
function handleScroll() {
    const leftElement = document.querySelector('.header_main_lift');
    const rightElement = document.querySelector('.header_main_right');

    if (isInViewport(leftElement)) {
        leftElement.classList.add('in-view');
    }

    if (isInViewport(rightElement)) {
        rightElement.classList.add('in-view');
    }
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Initial check on page load
handleScroll();
// script.js