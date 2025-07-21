document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const overlay = document.getElementById('game-fullscreen-overlay');
    const gameBg = overlay.querySelector('.game-bg');
    const closeBtn = overlay.querySelector('.close-overlay');
    const slices = document.querySelectorAll('.game-slice');
    const sliceContainer = document.querySelector('.game-slice-container');

    // Only for Project Augment
    const projectAugmentSlice = document.querySelector('.game-slice[data-game="project-augment"]');

    projectAugmentSlice.addEventListener('click', function(e) {
        e.preventDefault();
        // Hide slice grid
        sliceContainer.style.display = 'none';
        // Set overlay background to match slice
        const bgUrl = this.style.getPropertyValue('--slice-bg').replace("url(", "").replace(")", "").replace(/'|"/g, "");
        gameBg.style.backgroundImage = `url(${bgUrl})`;
        // Show overlay
        overlay.classList.add('visible');
    });

    // Close overlay
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('visible');
        setTimeout(() => {
            sliceContainer.style.display = 'flex';
        }, 220);
    });
});
