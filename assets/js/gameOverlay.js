document.addEventListener("DOMContentLoaded", function() {
    // Game data
    const games = {
        "cloaked-protocol": {
            title: "CLOAKED PROTOCOL",
            subtitle: "RETRO ESPIONAGE THRILLER",
            desc: "Sneak, outwit, and survive in a 90s-inspired tactical stealth adventure. One man. One shot.",
            bg: "assets/images/CloakedprotocolPromoImage2.png",
            trailer: "<iframe width='340' height='190' src='https://www.youtube.com/embed/YOUR_VIDEO_ID' frameborder='0' allowfullscreen></iframe>",
            platforms: "<i class='fab fa-steam'></i> <i class='fab fa-xbox'></i> <i class='fab fa-playstation'></i>",
            steam: "https://store.steampowered.com/app/2738700/Cloaked_Protocol_Stealth_Action_Thriller/"
        },
        "project-augment": {
            title: "PROJECT AUGMENT",
            subtitle: "A CLOAKED PROTOCOL STORY",
            desc: "Take on the role of a PMC operative and survive waves of augmented horrors. Fast, brutal, and endlessly replayable — inspired by classic 90s action games.",
            bg: "assets/images/ProjectAugment_PromoImage_NoText.png",
            trailer: "<iframe width='340' height='190' src='https://www.youtube.com/embed/YOUR_VIDEO_ID2' frameborder='0' allowfullscreen></iframe>",
            platforms: "<i class='fab fa-steam'></i> <i class='fab fa-xbox'></i> <i class='fab fa-playstation'></i>",
            steam: "https://store.steampowered.com/app/2738700/Cloaked_Protocol_Stealth_Action_Thriller/"
        }
    };

    const overlay = document.getElementById('game-fullscreen-overlay');
    const bg = overlay.querySelector('.game-bg');
    const title = document.getElementById('game-title');
    const subtitle = document.getElementById('game-subtitle');
    const desc = document.getElementById('game-desc');
    const trailer = document.getElementById('game-trailer');
    const platforms = document.getElementById('game-platforms');
    const steam = document.getElementById('game-steam');
    const closeBtn = overlay.querySelector('.close-overlay');
    const slices = document.querySelectorAll('.game-slice');
    const sliceContainer = document.querySelector('.game-slice-container');

    slices.forEach(function(slice){
        slice.addEventListener('click', function(e){
            e.preventDefault();
            const gameKey = this.dataset.game;
            if (!gameKey || !games[gameKey]) return;
            // Hide slice grid
            sliceContainer.style.display = 'none';
            // Show overlay with correct info
            overlay.classList.add('visible');
            bg.style.backgroundImage = `url('${games[gameKey].bg}')`;
            title.textContent = games[gameKey].title;
            subtitle.textContent = games[gameKey].subtitle;
            desc.textContent = games[gameKey].desc;
            trailer.innerHTML = games[gameKey].trailer;
            platforms.innerHTML = games[gameKey].platforms;
            steam.href = games[gameKey].steam;
        });
    });

    // Close overlay
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('visible');
        setTimeout(() => {
            sliceContainer.style.display = 'flex';
        }, 220);
    });
});
