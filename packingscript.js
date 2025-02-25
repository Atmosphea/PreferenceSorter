document.addEventListener('DOMContentLoaded', () => {

    const packingList = [
        {
            category: "Essentials",
            name: "Tickets/Wristband",
            tooltip: "Essential for entry. Take pictures for backup and register it!",
        },
        {
            category: "Campsite",
            name: "Tent",
            tooltip: "Choose one size larger for comfort.  Ventilation is key!",
        },
        {
            category: "Campsite",
            name: "Sleeping Bag/Pad",
            tooltip: "Temperature rating is important! A self-inflating pad is a luxury worth having.",
        },
        {
            category: "Campsite",
            name: "Camp Chairs",
            tooltip: "Low-profile is best. Consider one with a cooler or rocking feature.",
        },
        {
            category: "Campsite",
            name: "Cooler(s)",
            tooltip: "One for drinks, one for food. Pre-chill and use frozen water bottles as ice.",
        },
        {
            category: "Essentials",
            name: "Water Bottles/Hydration Pack",
            tooltip: "Hydration is crucial! Freeze your hydration pack bladder for longer-lasting cold water.",
        },
        {
            category: "Essentials",
            name: "Sunscreen/Hat/Sunglasses",
            tooltip: "Protect yourself from the sun! A wide-brimmed hat is ideal.",
        },
        {
            category: "Medicine",
            name: "First Aid Kit",
            tooltip: "Include blister treatment, pain relievers, antiseptic wipes, and electrolyte tablets.",
        },
        {
            category: "Hygiene",
            name: "Toiletries",
            tooltip: "Biodegradable soap, toothbrush, toothpaste, dry shampoo, face wipes, and a small mirror.",
        },
        {
            category: "Clothing",
            name: "Clothing",
            tooltip: "Pack for all weather. Layers are essential.",
        },
        {
            category: "Campsite",
            name: "Trash Bags",
            tooltip: "Leave no trace! Bring extra for unexpected uses.",
        },
        {
            category: "Campsite",
            name: "Flashlight/Headlamp",
            tooltip: "Headlamp is best for hands-free. String lights add a nice vibe.",
        },
        {
            category: "Electronics",
            name: "Phone Charger/Power Bank",
            tooltip: "Don't rely on festival charging. A solar charger is a good backup.",
        },
        {
            category: "Campsite",
            name: "Duct Tape/Zip Ties",
            tooltip: "Fix anything, anytime.",
        },
        {
            category: "Hygiene",
            name: "Wet Wipes/Hand Sanitizer",
            tooltip: "Essential for staying clean.",
        },
        {
            category: "Interaction Enhancers",
            name: "Glow Sticks/LED Toys",
            tooltip: "Offer them to people, trade them, create light shows. Instant icebreaker.",
        },
        {
            category: "Interaction Enhancers",
            name: "Small, Unique Trinkets",
            tooltip: "Vintage buttons, stickers, temporary tattoos to give away.",
        },
        {
            category: "Interaction Enhancers",
            name: "Funny Sunglasses/Hats",
            tooltip: "Makes you more approachable and memorable.",
        },
        {
            category: "Interaction Enhancers",
            name: "Bubbles",
            tooltip: "Surprisingly fun for all ages.",
        },
        {
            category: "Interaction Enhancers",
            name: "A Small Instrument (Ukulele, Harmonica, etc.)",
            tooltip: "For campsite jam sessions.",
        },
        {
            category: "Interaction Enhancers",
            name: "A Deck of Cards/Travel Games",
            tooltip: "Great for downtime and bonding.",
        },
        {
            category: "Interaction Enhancers",
            name: "A Kite",
            tooltip: "Brings joy to others to watch.",
        },
        {
            category: "Essentials",
            name: "Extra Snacks",
            tooltip: "Offer them to people who look like they need them. Instant karma points.",
        },
        {
            category: "Interaction Enhancers",
            name: "Bandanas",
            tooltip: "Multi-purpose (dust mask, sweatband, gift).",
        },
        {
            category: "Interaction Enhancers",
            name: "Small, Thoughtful Notes",
            tooltip: "Leave positive messages around.",
        },
        {
            category: "Interaction Enhancers",
            name: "A Polaroid Camera",
            tooltip: "Give people a souvenir photo.",
        },
        {
            category: "Interaction Enhancers",
            name: "Fidget Toys",
            tooltip: "Helpful for anxiety in crowded spaces.",
        },
        {
            category: "Interaction Enhancers",
            name: "Walkie-Talkies",
            tooltip: "Stay in touch when cell service is bad.",
        },
        {
            category: "Interaction Enhancers",
            name: "A Small Whiteboard/Chalkboard",
            tooltip: "Leave messages at the campsite.",
        },
        {
            category: "Interaction Enhancers",
            name: "Small Candy",
            tooltip: "Something small and sweet to share.",
        },
            {
            category: "Interaction Enhancers",
            name: "Lighters/Rolling Papers",
            tooltip: "Something to share.",
        },

        {
            category: "Campsite Comfort",
            name: "Portable Fan (Battery or Solar Powered)",
            tooltip: "A lifesaver for hot days.",
        },
        {
            category: "Campsite Comfort",
            name: "Inflatable Couch/Lounger",
            tooltip: "Ultimate campsite relaxation.",
        },
        {
            category: "Campsite Comfort",
            name: "A Hammock",
            tooltip: "Perfect for afternoon naps.",
        },
        {
            category: "Campsite Comfort",
            name: "A Small Rug/Tapestry",
            tooltip: "Defines your campsite space.",
        },
        {
            category: "Campsite Comfort",
            name: "A Portable Espresso Maker/Coffee Grinder",
            tooltip: "For the caffeine addicts.",
        },
        {
            category: "Personal Pampering",
            name: "Essential Oil Diffuser (Battery Powered)",
            tooltip: "Creates a calming atmosphere.",
        },
        {
            category: "Personal Pampering",
            name: "Face Masks",
            tooltip: "Rejuvenate your skin.",
        },
        {
            category: "Personal Pampering",
            name: "A Small Bluetooth Speaker",
            tooltip: "For campsite tunes (be respectful!).",
        },
        {
            category: "Personal Pampering",
            name: "A Book of Poetry/Inspirational Quotes",
            tooltip: "For moments of reflection.",
        },
        {
            category: "Personal Pampering",
            name: "A Travel Sewing Kit",
            tooltip: "To fix any tears!",
        },
        {
            category: "Creative Expression",
            name: "Glow-in-the-Dark Body Paint/Markers",
            tooltip: "Get creative with your look.",
        },
        {
            category: "Creative Expression",
            name: "A Journal and Pen",
            tooltip: "Record your memories.",
        },
        {
            category: "Creative Expression",
            name: "A Small Art Kit (Watercolors, Sketchbook)",
            tooltip: "Capture the beauty of the festival.",
        },
        {
            category: "Campsite Comfort",
            name: "Fairy Lights/Tapestries",
            tooltip: "Great for decoration and photo ops.",
        },
        {
            category: "RV Specific",
            name: "Pillows & Sheets",
            tooltip: "Rental RVs may not have enough.",
        },
            {
            category: "RV Specific",
            name: "Cooking Utensils",
            tooltip: "Rental RVs may not have enough.",
        },
        {
            category: "RV Specific",
            name: "Sunshade",
            tooltip: "Rental RVs may not have enough.",
        },
        {
            category: "On The Farm",
            name: "Earplugs",
            tooltip: "Essential for protecting your hearing at concerts.",
        },
        {
            category: "On The Farm",
            name: "Glow Sticks/LED Lights",
            tooltip: "For nighttime fun.",
        },
        {
            category: "Medicine",
            name: "Gold Bond Powder",
            tooltip: "Helps with heat and friction.",
        },
        {
            category: "Essentials",
            name: "Camelbak or Water Bottle",
            tooltip: "For carrying water around the festival.",
        },
        {
            category: "Electronics",
            name: "Phone Charger",
            tooltip: "Solar chargers are a bonus.",
        },
        {
            category: "Essentials",
            name: "Cash",
            tooltip: "Some vendors may not accept cards.",
        },
        {
            category: "Essentials",
            name: "Sunglasses",
            tooltip: "Protect your eyes from the sun.",
        },
        {
            category: "Campsite Comfort",
            name: "Bubble Machine",
            tooltip: "Adds a fun element to your campsite.",
        },
            {
            category: "Campsite Comfort",
            name: "Battery-Powered Fans",
            tooltip: "Helps keep cool.",
        },
        {
            category: "Food",
            name: "Salad Bags",
            tooltip: "Easy and healthy food option.",
        },
            {
            category: "Food",
            name: "Ensure Protein/Vitamin Shake",
            tooltip: "Easy and healthy food option.",
        },
        {
            category: "Food",
            name: "Shredded Chicken, Quesadillas",
            tooltip: "Easy and healthy food option.",
        },
        {
            category: "On The Farm",
            name: "Dust Ventilators",
            tooltip: "Protect yourself from dust during long walks.",
        },
        {
            category: "On The Farm",
            name: "Pro Earplugs",
            tooltip: "Protect your ears.",
        },
        {
            category: "Medicine",
            name: "Sinus Rinse",
            tooltip: "A must to help stay clean.",
        },
        {
            category: "Medicine",
            name: "Allergy Meds",
            tooltip: "Easy and healthy food option.",
        },
        {
            category: "Medicine",
            name: "Bandaids, OTC Meds",
            tooltip: "Easy and healthy food option.",
        },
            {
            category: "Medicine",
            name: "an ace bandage or two, 2 narcan",
            tooltip: "Easy and healthy food option.",
        },
        {
        category: "Medicine",
            name: "Big sunhat",
            tooltip: "Essential for blocking out sun rays.",
        },
            {
        category: "On The Farm",
            name: "Electrolytes",
            tooltip: "Essential for staying hydrated.",
        },
        {
        category: "Medicine",
            name: "Meds in prescription bottles w id",
            tooltip: "Necessary to ensure you get your medications.",
        },
        {
        category: "Campsite Comfort",
            name: "Soft Seating, moon mat",
            tooltip: "Necessary to ensure you are comfy.",
        },
        {
        category: "Campsite Comfort",
            name: "Hammock/chill utensils",
            tooltip: "Necessary to ensure you are comfy.",
        },
        {
        category: "Body",
            name: "Chapstick",
            tooltip: "Easy and healthy food option.",
        },
            {
        category: "Body",
            name: "Boomboom sticks (iykyk)",
            tooltip: "Necessary to ensure you are comfy.",
        },
    ];
    let currentItemIndex = 0;
    let userPreferences = {};
    let selectedColumnIndex = null;

    const packingTable = document.getElementById('packing-table');
    const preferenceBoxes = document.querySelectorAll('.preference-box');
    const submitButton = document.getElementById('submit-preferences');
    const result = document.getElementById('result');

    function displayItem() {
        if (currentItemIndex >= packingList.length) {
            alert("All items sorted!"); // Or update UI
            return;
        }

        const item = packingList[currentItemIndex];

        // Reset selection visuals
        preferenceBoxes.forEach(box => box.classList.remove('selected'));
        const cells = packingTable.querySelectorAll('td'); // Get ALL TDs
        cells.forEach(cell => cell.classList.remove('selected'));
        selectedColumnIndex = null;

        // Select the first preference box initially.
        preferenceBoxes[0].classList.add('selected');
        selectedColumnIndex = 0;


        // Prompt user for their preference
        const itemName = packingList[currentItemIndex].name;
        const userPreference = prompt(`Select preference for "${itemName}": Have, Shopping List, or Pass?`, 'Have');

        // Validate user input
        if (userPreference === null) {
            // User cancelled, handle as needed (e.g., stop processing)
            alert("Sorting cancelled.");
            return;
        }

        let preferenceIndex = -1;

        switch (userPreference.toLowerCase()) {
            case "have":
                preferenceIndex = 0;
                break;
            case "shopping list":
                preferenceIndex = 1;
                break;
            case "pass":
                preferenceIndex = 2;
                break;
            default:
                alert("Invalid preference. Please choose 'Have', 'Shopping List', or 'Pass'.");
                displayItem();
                return;
        }

        const preference = preferenceBoxes[preferenceIndex].getAttribute('data-preference');

        // Store the preference in the userPreferences object
        userPreferences[item.name] = {
            preference: preference
        };

        // Find the correct column and add the item's name
        const row = packingTable.querySelector('tbody tr'); // Get the first (and only) row
        const cell = row.cells[preferenceIndex];
        cell.innerHTML += `<div>${item.name}</div>`;

        // Move to the next item
        currentItemIndex++;
        displayItem();
    }
    function fillTable() {
      const table = document.getElementById('packing-table');
      const tbody = table.querySelector('tbody');

      const row = document.createElement('tr');

      const haveCell = document.createElement('td');
      haveCell.className = 'have';
      row.appendChild(haveCell);

      const shoppingListCell = document.createElement('td');
      shoppingListCell.className = 'shopping-list';
      row.appendChild(shoppingListCell);

      const passCell = document.createElement('td');
      passCell.className = 'pass';
      row.appendChild(passCell);

      tbody.appendChild(row);
    }
    submitButton.addEventListener('click', () => {
        // Process userPreferences (e.g., save to server)
        console.log("User Preferences:", userPreferences);
        alert("Preferences submitted (check console for output)!");
    });
    function fillColumns(){
        const table = document.getElementById('packing-table');
        const tbody = table.querySelector('tbody');
    }
    // Start the sorting process
    fillTable();
    displayItem();
});