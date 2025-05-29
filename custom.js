document.addEventListener('DOMContentLoaded', function() {
    // Add the button after page loads
    const leftButtons = document.querySelector('.left-buttons');
    if (leftButtons && !document.querySelector('.back-button')) {
        const backButton = document.createElement('button');
        backButton.className = 'icon-button back-button';
        backButton.innerHTML = '<a href="/courses" target="_parent"><i class="fa fa-backward"></i></a>';
        backButton.title = 'Go Back';
        leftButtons.appendChild(backButton);
    }
});
