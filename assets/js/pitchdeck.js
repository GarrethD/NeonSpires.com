document.addEventListener("DOMContentLoaded", function() {
    const pitchdecks = {
        "cloaked-protocol": {
            url: "https://docs.google.com/presentation/d/1MnIX0eXao2DxOZBCdRarTBcgUimfUF_sUT1aHetxK5E/embed?start=false&loop=false&delayms=3000",
            logo: "assets/images/CloakedProtocol_Logo.png",
            title: "CLOAKED PROTOCOL"
        },
        "project-augment": {
            url: "https://docs.google.com/presentation/d/1VVHQz0mTAdRhNMddJfYpDFbqKEm5YTUo3waJYx9sdQ0/embed?start=false&loop=false&delayms=3000",
            logo: "assets/images/ProjectAugment_Logo.png",
            title: "PROJECT AUGMENT"
        }
    };

    const overlay = document.getElementById('pitchdeck-overlay');
    const iframeContainer = overlay.querySelector('.pitchdeck-iframe-container');
    const closeBtn = document.getElementById('close-pitchdeck');
    const logoOverlay = overlay.querySelector('.pitchdeck-logo-overlay');

    // Card or button opens overlay
    document.querySelectorAll('.game-panel, .view-pitch-btn').forEach(function(element) {
        element.addEventListener('click', function(e) {
            if (e.target.closest('.close-overlay')) return;
            e.preventDefault();
            const panel = this.closest('.game-panel');
            if (!panel) return;
            const gameKey = panel.getAttribute('data-game');
            if (pitchdecks[gameKey]) {
                // Add Logo to modal
                logoOverlay.innerHTML = `<img src="${pitchdecks[gameKey].logo}" alt="${pitchdecks[gameKey].title} Logo">`;
                // Add Iframe
                iframeContainer.innerHTML = '';
                const iframe = document.createElement('iframe');
                iframe.src = pitchdecks[gameKey].url;
                iframe.allowFullscreen = true;
                iframe.loading = "lazy";
                iframeContainer.appendChild(iframe);
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
        logoOverlay.innerHTML = '';
        iframeContainer.innerHTML = '';
        document.body.style.overflow = '';
    });

    // Backdrop click closes overlay
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) closeBtn.click();
    });

    // Escape closes overlay
    document.addEventListener('keydown', function(e) {
        if (e.key === "Escape" && overlay.classList.contains('active')) {
            closeBtn.click();
        }
    });
});
