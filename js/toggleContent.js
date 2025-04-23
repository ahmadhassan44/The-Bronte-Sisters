document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isHidden = content.classList.contains('hidden');

            // Toggle content visibility
            content.classList.toggle('hidden');
            
            // Update button text
            this.textContent = isHidden ? 'Show Less' : 'Explore More';
            
            // Toggle active state for styling
            this.classList.toggle('active');
        });
    });
});