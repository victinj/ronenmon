// --- Game State Management ---
const GameState = {
    LANDING: 'landing',
    MAIN_MENU: 'main_menu', 
    INVENTORY: 'inventory',
    MONSTER_PAGE: 'monster_page', 
    INCUBATOR_PAGE: 'incubator_page',
    WALLET_PAGE: 'wallet_page'
};

let currentGameState = GameState.LANDING;

// --- DOM Elements (Get references to your HTML elements) ---
const gameContainer = document.getElementById('game-container');
const landingScreen = document.getElementById('landing-screen');
const mainMenuScreen = document.getElementById('main-menu-screen');
const inventoryScreen = document.getElementById('inventory-screen');
const monsterPageScreen = document.getElementById('monster-page-screen');
const incubatorPageScreen = document.getElementById('incubator-page-screen');
const walletPageScreen = document.getElementById('wallet-page-screen');

const tvScreenDisplay = document.getElementById('tvScreenDisplay');
const tvStaticEffect = document.getElementById('tvStaticEffect'); // Get static image element
const tvMonsterInfoOverlay = document.getElementById('tvMonsterInfoOverlay'); // Get info overlay element
const tvMonsterImage = document.getElementById('tvMonsterImage'); // Get img inside overlay
const monsterTvId = document.getElementById('monsterTvId'); // Get h3 inside overlay
const energyBarFill = document.getElementById('energyBarFill'); // Get fill div inside overlay
const energyText = document.getElementById('energyText'); // Get span inside overlay
const energyRateText = document.getElementById('energyRateText'); // Get p inside overlay

const tvRedButton = document.getElementById('tvRedButton'); 
const tvGreenButton = document.getElementById('tvGreenButton'); 
const monsterSlots = document.querySelectorAll('.monster-slot');
// Buttons on Landing Screen
const getRoninmonBtn = document.getElementById('getRoninmonBtn');
const connectWalletBtn = document.getElementById('connectWalletBtn');

// Main Menu Screen Buttons
const exitBtn = document.getElementById('exitBtn');
const playBtn = document.getElementById('playBtn');
const incubatorBtn = document.getElementById('incubatorBtn');
const inventoryBtn = document.getElementById('inventoryBtn');
const walletPageSidebarBtn  = document.getElementById('walletPageSidebarBtn');

// Player/Resource Display Elements (Main Menu)
const walletAddress = document.getElementById('walletAddress'); // Wallet Address
const resourceCount = document.getElementById('resourceCount'); // Currency

// Player/Resource Display Elements (Monster Page - unique IDs for this screen)
const playerNameMonster = document.getElementById('playerNameMonster');
const resourceCountMonster = document.getElementById('resourceCountMonster');


// Buttons on Inventory Screen
const backToMainMenuFromInventoryBtn = document.getElementById('backToMainMenuFromInventoryBtn');

// Buttons on Wallet Screen
const backToMainMenuFromWalletBtn = document.getElementById('backToMainMenuFromWalletBtn');

// Buttons on Monster Page Screen
const backFromMonsterBtn = document.getElementById('backFromMonsterBtn'); // Renamed from backToMainMenuFromMonsterBtn
const battleBtnMonster = document.getElementById('battleBtnMonster'); // Battle button on Monster Page

// Buttons on Incubator Page Screen
const backToMainMenuFromIncubatorBtn = document.getElementById('backToMainMenuFromIncubatorBtn');


// Wallet Modal Elements
const walletModalOverlay = document.getElementById('wallet-modal-overlay');
const connectMetamaskBtn = document.getElementById('connectMetamaskBtn');
const modalStartGameBtn = document.getElementById('modalStartGameBtn'); 
const modalExitBtn = document.getElementById('modalExitBtn');


// Game Message Overlay Elements
const gameMessageOverlay = document.getElementById('game-message-overlay');
const gameMessageText = document.getElementById('game-message-text');


// NEW: Monster Page Specific DOM Elements
// (Removed duplicate declarations to avoid redeclaration errors)


// --- Game Logic Functions ---

/**
 * Changes the active screen based on the desired game state.
 * It hides all screens and then reveals the specified one.
 * @param {string} newState - The target GameState (e.g., GameState.MAIN_MENU).
 */
function changeScreen(newState) {
    document.querySelectorAll('.game-screen').forEach(screen => {
        screen.classList.remove('active');
    });

    switch (newState) {
        case GameState.LANDING:
            landingScreen.classList.add('active');
            break;
        case GameState.MAIN_MENU:
            mainMenuScreen.classList.add('active');
            break;
        case GameState.INVENTORY:
            inventoryScreen.classList.add('active');
            break;
        case GameState.MONSTER_PAGE:
            monsterPageScreen.classList.add('active');
            // NEW: Update top-right info for Monster Page to match main menu (simulated)
            // In a real game, this would load actual player/resource data.
            walletAddress.textContent = walletAddress.textContent; 
            resourceCount.textContent = resourceCount.textContent;
            break;
        case GameState.INCUBATOR_PAGE:
            incubatorPageScreen.classList.add('active');
            break;
        case GameState.WALLET_PAGE:
            walletPageScreen.classList.add('active');
            break
        default:
            console.warn('Attempted to switch to an unknown game state:', newState);
            landingScreen.classList.add('active'); 
            break;
    }
    currentGameState = newState; 
    console.log(`Game state changed to: ${currentGameState}`);
}

/**
 * Displays a temporary message overlay to the user (e.g., "Wallet Connected!").
 * @param {string} message - The message text to display.
 * @param {number} duration - How long the message should be visible in milliseconds (default: 2000ms).
 */
function showGameMessage(message, duration = 2000) {
    gameMessageText.textContent = message;
    gameMessageOverlay.style.opacity = '1';
    gameMessageOverlay.style.pointerEvents = 'auto'; 

    setTimeout(() => {
        gameMessageOverlay.style.opacity = '0';
        gameMessageOverlay.style.pointerEvents = 'none'; 
    }, duration);
}

/**
 * Shows the wallet connection modal.
 */
function showWalletModal() {
    walletModalOverlay.classList.add('active');
}

/**
 * Hides the wallet connection modal.
 */
function hideWalletModal() {
    walletModalOverlay.classList.remove('active');
}

// --- Event Listeners (Handle user interactions) ---

// Landing Screen Buttons
getRoninmonBtn.addEventListener('click', () => {
    console.log('Get your Roninmon button clicked!');
    window.location.href = 'under_construction.html'; 
});

connectWalletBtn.addEventListener('click', () => {
    console.log('Connect Wallet button clicked!');
    showWalletModal(); 
});

// Wallet Modal Buttons Logic
connectMetamaskBtn.addEventListener('click', () => {
    console.log('Connect to Metamask button clicked!');
    showGameMessage("Connecting to Metamask... (Simulation)");
    setTimeout(() => {
        showGameMessage("Metamask connected successfully! (Simulated)");
        hideWalletModal(); 
    }, 2000);
});

modalStartGameBtn.addEventListener('click', () => {
    console.log('Start button inside modal clicked! Transitioning to Main Menu.');
    hideWalletModal(); 
    changeScreen(GameState.MAIN_MENU); 
});

// Wallet Modal specific Exit button
modalExitBtn.addEventListener('click', () => {
    console.log('Wallet Modal EXIT button clicked!');
    hideWalletModal();
});


// Main Menu Screen Buttons Logic
exitBtn.addEventListener('click', () => {
    console.log('EXIT button clicked! Returning to Landing Screen.');
    changeScreen(GameState.LANDING);
});

// UPDATED: Play button now leads directly to the Monster Page (which is the Inventory Screen)
playBtn.addEventListener('click', () => {
    console.log('PLAY button clicked! Transitioning to Monster Page (Inventory Screen) for selection.');
    changeScreen(GameState.MONSTER_PAGE); // Go to the Monster Page for selection
});

incubatorBtn.addEventListener('click', () => {
    console.log('Incubator button clicked!');
    changeScreen(GameState.INCUBATOR_PAGE);
});

// Inventory button (backpack icon) already leads to the Monster Page (Inventory Screen)
// No change needed here, as its function aligns with the refactor.
inventoryBtn.addEventListener('click', () => {
    console.log('Inventory button clicked! Transitioning to Monster Page (Inventory Screen).');
    changeScreen(GameState.INVENTORY);
});

// UPDATED: Wallet Page Sidebar button (new icon) now leads to the Wallet Page placeholder
walletPageSidebarBtn.addEventListener('click', () => {
    console.log('Wallet Page sidebar button clicked! Transitioning to Wallet Page (Monster Page Screen).');
    changeScreen(GameState.WALLET_PAGE); // Go to the Wallet Page placeholder
});


// Monster Page Specific UI Interaction Logic
backFromMonsterBtn.addEventListener('click', () => {
    console.log('BACK button on Monster Page clicked! Returning to Main Menu.');
    changeScreen(GameState.MAIN_MENU);
});

battleBtnMonster.addEventListener('click', () => {
    console.log('Battle button clicked!');
    showGameMessage("Preparing for battle! (Game logic for battle will go here)");
    // Future: Logic to start a battle with selected monsters
});

// UPDATED: TV Screen Controls
if (tvRedButton) { 
    tvRedButton.addEventListener('click', () => {
        console.log('TV Red Button clicked! (Reseting TV Display)');
        showGameMessage('TV Display Reset!');
        // Reset TV to static
        tvMonsterInfoOverlay.style.opacity = 0;
        tvMonsterInfoOverlay.style.pointerEvents = 'none';
        tvStaticEffect.style.opacity = 0.8; // Show static
        tvStaticEffect.style.pointerEvents = 'auto'; // Make static interactive if needed (not here)
        tvScreenDisplay.style.filter = 'none'; // Clear any filters
        // Clear selected monster slot
        monsterSlots.forEach(s => s.classList.remove('selected'));
    });
}

if (tvGreenButton) { 
    tvGreenButton.addEventListener('click', () => {
        console.log('TV Green Button clicked! (Simulating display filter)');
        // Apply filter ONLY if monster info is visible (i.e. a monster is selected)
        if (tvMonsterInfoOverlay.style.opacity === '1') {
            showGameMessage('Applied Green Filter to Monster!');
            // Apply filter to the main display area which contains the monster
            tvScreenDisplay.style.filter = 'hue-rotate(90deg) saturate(1.5)';
        } else {
            showGameMessage('No monster selected to filter!');
        }
    });
}

// UPDATED: Monster Slot Selection
monsterSlots.forEach(slot => {
    slot.addEventListener('click', (event) => {
        // Clear previous selections
        monsterSlots.forEach(s => s.classList.remove('selected'));
        // Clear any filters on the TV display
        tvScreenDisplay.style.filter = 'none';

        // Add 'selected' class to the clicked slot
        slot.classList.add('selected');

        // Get monster info from the slot
        const monsterImgElement = slot.querySelector('img');
        const monsterName = monsterImgElement ? monsterImgElement.alt : 'Empty Slot';
        const monsterImageSrc = monsterImgElement ? monsterImgElement.src : '';

        // Simulate monster data (replace with actual data lookup in a real game)
        const monsterId = `#${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`; // Random ID
        const currentEnergy = Math.floor(Math.random() * 100);
        const maxEnergy = 100;
        const energyRate = Math.floor(Math.random() * 10) + 1; // 1-10 energy/hour

        console.log(`Monster Slot clicked: ${monsterName}, ID: ${monsterId}, Energy: ${currentEnergy}/${maxEnergy}`);
        showGameMessage(`Selected: ${monsterName}`);

        // Update content of the persistent overlay
        tvMonsterImage.src = monsterImageSrc;
        tvMonsterImage.alt = monsterName;
        monsterTvId.textContent = monsterId;
        energyBarFill.style.width = `${((currentEnergy / maxEnergy) * 100)}%`;
        energyText.textContent = `${currentEnergy}/${maxEnergy}`;
        energyRateText.textContent = `⚡ ${energyRate} energy/hour`;

        // Toggle visibility: Hide static, Show monster info overlay
        tvStaticEffect.style.opacity = 0;
        tvStaticEffect.style.pointerEvents = 'none'; // Make static non-interactive when hidden

        tvMonsterInfoOverlay.style.opacity = 1;
        tvMonsterInfoOverlay.style.pointerEvents = 'auto'; // Make info overlay interactive if needed
    });
});

// --- Initialization (Runs when the HTML document is fully loaded) ---
document.addEventListener('DOMContentLoaded', () => {
    changeScreen(GameState.LANDING); 
});