document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu');
    const mainNav = document.getElementById('main-nav');

    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', function() {
            mainNav.classList.toggle('active'); // Toggles the 'active' class for display
        });
    }

    // Optional: Close menu if clicking outside of it (more advanced)
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnButton = mobileMenuButton.contains(event.target);

        if (!isClickInsideNav && !isClickOnButton && mainNav.classList.contains('active')) {
             mainNav.classList.remove('active');
        }
    });

});
