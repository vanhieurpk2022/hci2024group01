document.querySelector('.new-sidebar').addEventListener('wheel', function(e) {
    const mainContent = document.querySelector('.main-content');
    
    // If scrolling down on the sidebar, scroll the main content up
    if (e.deltaY > 0) {
        mainContent.scrollBy({
            top: 30,  // Adjust the scroll amount to your preference
            behavior: 'smooth'
        });
    }
    // If scrolling up on the sidebar, scroll the main content down
    else {
        mainContent.scrollBy({
            top: -30,  // Adjust the scroll amount to your preference
            behavior: 'smooth'
        });
    }

    // Prevent the default scroll behavior for the sidebar
    e.preventDefault();
});