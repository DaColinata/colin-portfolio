document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    // The master function to toggle everything
    window.toggleMenu = function() {
        // Toggle the sidebar sliding
        sidebar.classList.toggle('translate-x-full');
        
        // Toggle the fade/blur effect
        // We toggle opacity-0 (invisible) and pointer-events-none (unclickable)
        overlay.classList.toggle('opacity-0');
        overlay.classList.toggle('pointer-events-none');
    }
});