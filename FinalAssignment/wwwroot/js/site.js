// JavaScript Animation Example (Rotate the heading)
document.addEventListener('DOMContentLoaded', function () {
    const heading = document.querySelector('h1');

    function rotateHeading() {
        heading.style.transition = 'transform 1s';
        heading.style.transform = 'rotate(360deg)';
    }

    // Call the rotateHeading function after a delay (e.g., 2 seconds)
    setTimeout(rotateHeading, 2000);
});
