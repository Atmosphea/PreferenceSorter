document.addEventListener('DOMContentLoaded', () => {
    const artists = [
        // Thursday
        { name: "Luke Combs", day: "Thursday", size: "large", genres: ["country", "pop"] },
        { name: "Dom Dolla", day: "Thursday", size: "large", genres: ["electronic", "dance"] },
        { name: "Sammy Virji", day: "Thursday", size: "medium", genres: ["electronic", "dance"] },
        { name: "Marcus King", day: "Thursday", size: "medium", genres: ["rock", "blues"] },
        { name: "Green Velvet", day: "Thursday", size: "medium", genres: ["electronic", "house"] },
        { name: "2hollis", day: "Thursday", size: "medium", genres: ["hip-hop", "alternative"] },
        { name: "Insane Clown Posse", day: "Thursday", size: "medium", genres: ["hip-hop", "rap"] },
        { name: "Joey Valence & Brae", day: "Thursday", size: "small", genres: ["hip-hop", "pop"] },
        { name: "Daniel Donato's Cosmic Country", day: "Thursday", size: "small", genres: ["country", "jam"] },
        { name: "Wilderado", day: "Thursday", size: "small", genres: ["indie", "rock"] },
        { name: "Max Styler", day: "Thursday", size: "small", genres: ["electronic", "dance"] },
        { name: "Azzecca", day: "Thursday", size: "small", genres: ["electronic", "house"] },
        { name: "The Lemon Twigs", day: "Thursday", size: "small", genres: ["rock", "pop"] },
        { name: "The Driptones", day: "Thursday", size: "small", genres: ["rock", "alternative"] },
        { name: "Die Spitze", day: "Thursday", size: "small", genres: ["rock", "alternative"] },
        { name: "Hey, Nothing", day: "Thursday", size: "small", genres: ["indie", "rock"] },
        { name: "Wisp", day: "Thursday", size: "small", genres: ["indie", "electronic"] },
        { name: "Sofia Isella", day: "Thursday", size: "small", genres: ["indie", "pop"] },
        { name: "Kitchen Dwellers", day: "Thursday", size: "small", genres: ["bluegrass", "jam"] },
        { name: "Dogs In A Pile", day: "Thursday", size: "small", genres: ["jam", "rock"] },
        // Friday
        { name: "Tyler, The Creator", day: "Friday", size: "large", genres: ["hip-hop", "alternative"] },
        { name: "John Summit", day: "Friday", size: "large", genres: ["electronic", "dance"] },
        { name: "Glass Animals", day: "Friday", size: "large", genres: ["indie", "electronic"] },
        { name: "Megadeth", day: "Friday", size: "medium", genres: ["metal", "rock"] },
        { name: "Goose", day: "Friday", size: "medium", genres: ["jam", "rock"] },
        { name: "The Red Clay Strays", day: "Friday", size: "medium", genres: ["country", "rock"] },
        { name: "Rainbow Kitten Surprise", day: "Friday", size: "medium", genres: ["indie", "alternative"] },
        { name: "Tipper", day: "Friday", size: "medium", genres: ["electronic", "ambient"] },
        { name: "Levity", day: "Friday", size: "small", genres: ["electronic", "dance"] },
        { name: "Inzo", day: "Friday", size: "small", genres: ["electronic", "dance"] },
        { name: "Tape B", day: "Friday", size: "small", genres: ["electronic", "hip-hop"] },
        { name: "Effin", day: "Friday", size: "small", genres: ["electronic", "dance"] },
        { name: "Marina of the Trees", day: "Friday", size: "small", genres: ["indie", "pop"] },
        { name: "Foster the People", day: "Friday", size: "small", genres: ["indie", "pop"] },
        { name: "Slightly Stoopid", day: "Friday", size: "small", genres: ["reggae", "rock"] },
        { name: "Aly & AJ", day: "Friday", size: "small", genres: ["pop", "rock"] },
        { name: "Mannequin Pussy", day: "Friday", size: "small", genres: ["rock", "punk"] },
        { name: "Jpegmafia", day: "Friday", size: "small", genres: ["hip-hop", "experimental"] },
        { name: "Bebe Stockwell", day: "Friday", size: "small", genres: ["indie", "pop"] },
        { name: "Ginger Root", day: "Friday", size: "small", genres: ["indie", "electronic"] },
        { name: "Rachel Chinouriri", day: "Friday", size: "small", genres: ["indie", "pop"] },
        { name: "Detox Unit", day: "Friday", size: "small", genres: ["electronic", "bass"] },
        { name: "Matt Champion", day: "Friday", size: "small", genres: ["hip-hop", "alternative"] },
        { name: "Cults", day: "Friday", size: "small", genres: ["indie", "pop"] },
        { name: "Bossman Slow", day: "Friday", size: "small", genres: ["hip-hop", "rap"] },
        { name: "MJ Lennerman", day: "Friday", size: "small", genres: ["indie", "rock"] },
        { name: "Flipturn", day: "Friday", size: "small", genres: ["indie", "rock"] },
        // Saturday
        { name: "Olivia Rodrigo", day: "Saturday", size: "large", genres: ["pop", "rock"] },
        { name: "Avril Lavigne", day: "Saturday", size: "large", genres: ["pop", "rock"] },
        { name: "Justice", day: "Saturday", size: "large", genres: ["electronic", "dance"] },
        { name: "RL Grime", day: "Saturday", size: "medium", genres: ["electronic", "bass"] },
        { name: "Nelly", day: "Saturday", size: "medium", genres: ["hip-hop", "pop"] },
        { name: "Gorillaz", day: "Saturday", size: "medium", genres: ["alternative", "electronic"] },
        { name: "Mt. Joy", day: "Saturday", size: "medium", genres: ["indie", "folk"] },
        { name: "Beabadoobee", day: "Saturday", size: "medium", genres: ["indie", "pop"] },
        { name: "Tyla", day: "Saturday", size: "medium", genres: ["pop", "r&b"] },
        { name: "Jessie Murph", day: "Saturday", size: "medium", genres: ["pop", "country"] },
        { name: "Modest Mouse", day: "Saturday", size: "small", genres: ["indie", "rock"] },
        { name: "Gorgon City", day: "Saturday", size: "small", genres: ["electronic", "house"] },
        { name: "Flatland Cavalry", day: "Saturday", size: "small", genres: ["country", "folk"] },
        { name: "Hot Mulligan", day: "Saturday", size: "small", genres: ["rock", "pop-punk"] },
        { name: "Action Bronson", day: "Saturday", size: "small", genres: ["hip-hop", "rap"] },
        { name: "Crankdat", day: "Saturday", size: "small", genres: ["electronic", "bass"] },
        { name: "Dope Lemon", day: "Saturday", size: "small", genres: ["indie", "rock"] },
        { name: "Gigi Perez", day: "Saturday", size: "small", genres: ["indie", "folk"] },
        { name: "Wave to Earth", day: "Saturday", size: "small", genres: ["indie", "pop"] },
        { name: "Claptone", day: "Saturday", size: "small", genres: ["electronic", "house"] },
        { name: "Jade Cicada", day: "Saturday", size: "small", genres: ["electronic", "bass"] },
        { name: "What So Not", day: "Saturday", size: "small", genres: ["electronic", "dance"] },
        { name: "Dadi Freyer", day: "Saturday", size: "small", genres: ["indie", "rock"] },
        { name: "Ziggy Alberts", day: "Saturday", size: "small", genres: ["folk", "indie"] },
        { name: "Rossys", day: "Saturday", size: "small", genres: ["pop", "electronic"] },
        { name: "Destroy Boys", day: "Saturday", size: "small", genres: ["rock", "punk"] },
        { name: "The Stews", day: "Saturday", size: "small", genres: ["rock", "alternative"] },
        { name: "Thee Sinisters and The Alltons", day: "Saturday", size: "small", genres: ["rock", "punk"] },
        { name: "Ahee", day: "Saturday", size: "small", genres: ["electronic", "bass"] },
        // Sunday
        { name: "Hozier", day: "Sunday", size: "large", genres: ["folk", "rock"] },
        { name: "Vampire Weekend", day: "Sunday", size: "large", genres: ["indie", "rock"] },
        { name: "Queens of the Stone Age", day: "Sunday", size: "large", genres: ["rock", "alternative"] },
        { name: "Remi Wolf", day: "Sunday", size: "medium", genres: ["pop", "funk"] },
        { name: "Raye", day: "Sunday", size: "medium", genres: ["pop", "r&b"] },
        { name: "Royel Otis", day: "Sunday", size: "medium", genres: ["indie", "rock"] },
        { name: "Dispatch", day: "Sunday", size: "medium", genres: ["rock", "folk"] },
        { name: "Role Model", day: "Sunday", size: "medium", genres: ["pop", "indie"] },
        { name: "Barry Can’t Swim", day: "Sunday", size: "medium", genres: ["electronic", "dance"] },
        { name: "Treaty Oak Revival", day: "Sunday", size: "medium", genres: ["country", "rock"] },
        { name: "Big Gigantic", day: "Sunday", size: "small", genres: ["electronic", "jam"] },
        { name: "Jack’s Mannequin", day: "Sunday", size: "small", genres: ["rock", "pop"] },
        { name: "Saint Motel", day: "Sunday", size: "small", genres: ["indie", "pop"] },
        { name: "Aliens", day: "Sunday", size: "small", genres: ["electronic", "alternative"] },
        { name: "Zingara", day: "Sunday", size: "small", genres: ["electronic", "bass"] },
        { name: "Natasha Bedingfield", day: "Sunday", size: "small", genres: ["pop", "dance"] },
        { name: "Gorillaz", day: "Sunday", size: "small", genres: ["alternative", "electronic"] },
        { name: "YDG", day: "Sunday", size: "small", genres: ["hip-hop", "electronic"] },
        { name: "Lszee", day: "Sunday", size: "small", genres: ["electronic", "dance"] },
        { name: "James Arthur", day: "Sunday", size: "small", genres: ["pop", "r&b"] },
        { name: "Alex Warren", day: "Sunday", size: "small", genres: ["pop", "indie"] },
        { name: "Grace Bowers & Hodge Podge", day: "Sunday", size: "small", genres: ["country", "rock"] },
        { name: "Goldie Boutilier", day: "Sunday", size: "small", genres: ["indie", "pop"] },
        { name: "Alexandra Kay", day: "Sunday", size: "small", genres: ["country", "pop"] },
        { name: "Bilmuri", day: "Sunday", size: "small", genres: ["rock", "alternative"] }
    ];

        let currentArtistIndex = 0;
        let userPreferences = {};
        let selectedColumnIndex = 0; // Track selected preference column (0-4)
        let dayProgress = { Thursday: 0, Friday: 0, Saturday: 0, Sunday: 0 }; // Track progress per day
        const dayTotals = { Thursday: 20, Friday: 27, Saturday: 29, Sunday: 25 }; // Total artists per day
    
        const artistName = document.getElementById('artist-name');
        const currentDay = document.getElementById('current-day');
        const preferenceBoxes = document.querySelectorAll('.preference-box');
        const preferenceTableCells = document.querySelectorAll('#preference-table td:not(:first-child)');
        const artistCard = document.getElementById('artist-card');
        const preferenceTable = document.getElementById('preference-table');
        const submitButton = document.getElementById('submit-preferences');
        const result = document.getElementById('result');
    
        function updateProgressBar() {
            const artist = artists[currentArtistIndex - 1] || artists[currentArtistIndex];
            const day = artist.day;
            const total = dayTotals[day];
            const progress = dayProgress[day] / total * 100;
        
            const progressContainer = document.querySelector(`td[data-day="${day}"] .progress-container`);
            progressContainer.innerHTML = ''; // Clear previous progress
        
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.width = `${progress}%`;
        
            const numRectangles = Math.ceil(progress / 20);
            for (let i = 0; i < numRectangles; i++) {
                const rectangle = document.createElement('div');
                rectangle.style.backgroundColor = `hsl(120, 100%, ${30 + i * 10}%)`; // Darker to Lighter Green
                progressBar.appendChild(rectangle);
            }
        
            progressContainer.appendChild(progressBar);
        }
    
        function flashDay() {
            if (currentArtistIndex > 0) {
                const prevArtist = artists[currentArtistIndex - 1];
                const currArtist = artists[currentArtistIndex];
                if (prevArtist.day !== currArtist.day) {
                    // Flash the day text for the new day
                    currentDay.classList.add('flash');
                    setTimeout(() => currentDay.classList.remove('flash'), 2000); // Flash for 2 seconds
                }
            }
        }
    
        function displayArtist() {
            if (currentArtistIndex >= artists.length) {
                artistName.textContent = "DONE SORTING!";
                currentDay.textContent = "";
                preferenceBoxes.forEach(box => box.style.display = 'none');
                artistCard.style.display = 'none';
                submitButton.style.display = 'block';
                return;
            }
    
            const artist = artists[currentArtistIndex];
            artistName.innerHTML = `<span class="artist-name ${artist.size}">${artist.name.toUpperCase()}</span><br><span class="genres">(${artist.genres.join('/')})</span>`; // Show name and genres in card
            currentDay.textContent = artist.day.toUpperCase(); // Day for progress bar
            preferenceBoxes.forEach(box => box.classList.remove('selected'));
            preferenceTableCells.forEach(cell => cell.classList.remove('selected'));
    
            // Center the artist card in the middle of the screen
            artistCard.style.position = 'fixed';
            artistCard.style.left = '50%';
            artistCard.style.top = '50%';
            artistCard.style.transform = 'translate(-50%, -50%)';
            artistCard.style.display = 'block';
    
            // Highlight the currently selected preference column for the artist's day with a visual indicator
            const dayCells = Array.from(preferenceTableCells).filter(cell => cell.getAttribute('data-day') === artist.day);
            dayCells[selectedColumnIndex].classList.add('selected');
            preferenceBoxes[selectedColumnIndex].classList.add('selected');
    
            // Update progress bar for the current day (now in #day)
            updateProgressBar();
            flashDay(); // Check if we’re starting a new day
        }
    
        preferenceBoxes.forEach(box => {
            box.addEventListener('click', () => {
                if (currentArtistIndex >= artists.length) return;

                const artist = artists[currentArtistIndex];
                const preference = box.dataset.preference;
                const dayCells = Array.from(preferenceTableCells).filter(cell => cell.getAttribute('data-day') === artist.day);
                const selectedCell = dayCells[Array.from(preferenceBoxes).indexOf(box)];

                if (selectedCell) {
                    selectedCell.innerHTML += `<div class="${artist.size}">${artist.name.toUpperCase()}</div>`; // Show only name in table
                    userPreferences[artist.name] = {
                        day: artist.day,
                        preference: preference
                    };
                    dayProgress[artist.day]++;
                    currentArtistIndex++;
                    displayArtist();
                }
            });
        });
    
        document.addEventListener('keydown', (e) => {
            if (currentArtistIndex >= artists.length) return;
    
            const artist = artists[currentArtistIndex];
            const dayCells = Array.from(preferenceTableCells).filter(cell => cell.getAttribute('data-day') === artist.day);
    
            switch (e.key) {
                case 'ArrowLeft': // Move left in preferences
                    selectedColumnIndex = (selectedColumnIndex - 1 + 5) % 5; // Update for 5 columns
                    preferenceTableCells.forEach(cell => cell.classList.remove('selected'));
                    dayCells[selectedColumnIndex].classList.add('selected');
                    preferenceBoxes.forEach(box => box.classList.remove('selected'));
                    preferenceBoxes[selectedColumnIndex].classList.add('selected');
                    displayArtist(); // Update card position
                    break;
                case 'ArrowRight': // Move right in preferences
                    selectedColumnIndex = (selectedColumnIndex + 1) % 5; // Update for 5 columns
                    preferenceTableCells.forEach(cell => cell.classList.remove('selected'));
                    dayCells[selectedColumnIndex].classList.add('selected');
                    preferenceBoxes.forEach(box => box.classList.remove('selected'));
                    preferenceBoxes[selectedColumnIndex].classList.add('selected');
                    displayArtist(); // Update card position
                    break;
                case 'ArrowDown': // Place artist in selected preference column for their day
                    if (selectedColumnIndex !== null) {
                        const preference = preferenceBoxes[selectedColumnIndex].getAttribute('data-preference');
                        userPreferences[artist.name] = {
                            day: artist.day,
                            preference: preference
                        };
                        const cell = dayCells[selectedColumnIndex];
                        cell.innerHTML += `<div class="${artist.size}">${artist.name.toUpperCase()}</div>`; // Show only name in table
                        dayProgress[artist.day]++;
                        currentArtistIndex++;
                        displayArtist();
                    } else {
                        alert("Please select a preference before placing the artist!");
                    }
                    break;
                case 'Enter': // Move to next artist without placing (optional)
                    if (currentArtistIndex < artists.length - 1) {
                        currentArtistIndex++;
                        displayArtist();
                    }
                    break;
            }
        });
    
        submitButton.addEventListener('click', () => {
            if (currentArtistIndex >= artists.length) {
                fetch('/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ preferences: userPreferences })
                })
                .then(response => response.json())
                .then(data => {
                    result.innerHTML = `Your unique link: <a href="/group/${data.linkId}" target="_blank">/group/${data.linkId}</a>`;
                    submitButton.style.display = 'none';
                })
                .catch(error => console.error('Error:', error));
            }
        });
    
        displayArtist();
    });