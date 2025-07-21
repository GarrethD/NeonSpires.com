document.addEventListener("DOMContentLoaded", function() {
    const games = {
        "cloaked-protocol": {
            title: "CLOAKED PROTOCOL",
            release: "TBA",
            genre: "Stealth / Espionage Thriller",
            bg: "assets/images/CloakedprotocolPromoImage2.png",
            platforms: [
                { name: "PS5", class: "platform-badge platform-ps" },
                { name: "Xbox Series", class: "platform-badge platform-xbox" },
                { name: "PC", class: "platform-badge platform-pc" }
            ],
            trailer: "<iframe width='100%' height='200' src='https://www.youtube.com/embed/watch?v=lg1WJigjm7M' frameborder='0' allowfullscreen></iframe>",
            steam: "https://store.steampowered.com/app/2738700/Cloaked_Protocol_Stealth_Action_Thriller/"
        },
        "project-augment": {
            title: "PROJECT AUGMENT - A Cloaked Protocol experience",
            release: "TBA",
            genre: "Arcade Action wave shooter",
            bg: "assets/images/ProjectAugment_PromoImage_NoText.png",
            platforms: [
                { name: "PS5", class: "platform-badge platform-ps" },
                { name: "Xbox Series", class: "platform-badge platform-xbox" },
                { name: "PC", class: "platform-badge platform-pc" }
            ],
            trailer: "<iframe width='100%' height='200' src='https://www.youtube.com/embed/watch?v=lg1WJigjm7M' frameborder='0' allowfullscreen></iframe>",
            steam: "https://store.steampowered.com/app/2738700/Cloaked_Protocol_Stealth_Action_Thriller/"
        }
    };
    const overlay = document.getElementById('game-fullscreen-overlay');
    const bg = overlay.querySelector('.game-bg');
    const title = document.getElementById('game-title');
    const platforms = document.getElementById('game-platforms');
    const release = document.getElementById('game-release');
    const genre = document.getElementById('game-genre');
    const trailer = document.getElementById('game-trailer');
    const steam = document.getElementById('game-steam');
    const closeBtn = overlay.querySelector('.close-overlay');
    const slices = document.querySelectorAll('.game-slice');
    const sliceContainer = document.querySelector('.game-slice-container');

    slices.forEach(function(slice){
        slice.addEventListener('click', function(e){
            e.preventDefault();
            const gameKey = this.dataset.game;
            if (!gameKey || !games[gameKey]) return;

            // Show overlay, hide the selection grid
            overlay.classList.add('visible');
            sliceContainer.style.display = 'none';

            // Set the full background image
            bg.style.backgroundImage = `url('${games[gameKey].bg}')`;

            // Fill details
            title.textContent = games[gameKey].title;
            release.textContent = games[gameKey].release;
            genre.textContent = games[gameKey].genre;
            platforms.innerHTML = games[gameKey].platforms.map(p =>
                `<span class="${p.class}">${p.name}</span>`
            ).join(' ');
            trailer.innerHTML = games[gameKey].trailer;
            steam.href = games[gameKey].steam;

            document.body.style.overflow = 'hidden'; // Prevent background scroll
        });
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('visible');
        sliceContainer.style.display = 'flex'; // Show the game selection again
        document.body.style.overflow = '';
        // Optional: clear background image
        bg.style.backgroundImage = '';
        trailer.innerHTML = '';
    });
});
