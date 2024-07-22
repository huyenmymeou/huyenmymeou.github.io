//cuộn trang
document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    // Existing code for chatbox...

    // Scroll to top button functionality
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        const scrollToTopButton = document.getElementById('scroll-to-top');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }

    document.getElementById('scroll-to-top').addEventListener('click', function() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    });

    // Existing code for send message...

});