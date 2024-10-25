function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

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

window.addEventListener('scroll', handleScroll);

handleScroll();
const button = document.querySelector('.mobile_icon ')
const modal = document.querySelector('.modal ')
const body = document.querySelector('body ');
const close = document.querySelector('#x_button')

close.onclick = (event) => {
    modal.classList.remove('active')
    event.stopPropagation()
}

button.onclick = (event) => {
    modal.classList.add('active')
    body.style.overflowY = 'hidden'

    console.log("Modal opened")
    event.stopPropagation()


}
window.onclick = (event) => {
    if (modal.classList.contains('active') && !modal.contains(event.target) && !button.contains(event.target)) {
        modal.classList.remove("active")
        body.style.overflowY = 'auto'
        console.log("Modal closed")
    }
}
console.log(body.style.overflow)
console.log(body.style.overflow)
    // Disables right-click
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Disables specific keyboard shortcuts for copy (Ctrl+C, Ctrl+X, etc.)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === 'c' || event.key === 'x' || event.key === 'u')) {
        event.preventDefault();
    }
});
window.replainSettings = { id: '1ee09379-2744-4616-94af-4bb0827f1456' };
(function(u) {
    var s = document.createElement('script');
    s.async = true;
    s.src = u;
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
})('https://widget.replain.cc/dist/client.js');