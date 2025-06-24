import React from 'react';

function IncubatorPageScreen({ changeScreen }) {
    const handleBack = () => {
        changeScreen('main_menu'); // Function to go back to the Main Menu
    };

    return (
        // Apply the base game-screen class for structure and transitions
        // Then add Tailwind utility classes for the background
        <div 
            id="incubator-page-screen" 
            className="game-screen active flex flex-col justify-center items-center text-white
                       bg-incubator-bg bg-cover bg-center bg-no-repeat" // NEW Tailwind background classes
        >
            <h1>Roninmon Incubator</h1>
            <p>Hatch new Roninmon here!</p>
            <button 
                onClick={handleBack}
                // Apply Tailwind classes for your tertiary button style
                className="px-3 py-2 my-2 border-3 border-black rounded-lg text-xl font-bold cursor-pointer 
                           transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
                           active:shadow-[inset_0px_3px_6px_rgba(0,0,0,0.7)] active:translate-y-1 
                           bg-transparent text-white flex items-center justify-center gap-2"
            >
                Back to Main Menu
            </button>
        </div>
    );
}

export default IncubatorPageScreen;