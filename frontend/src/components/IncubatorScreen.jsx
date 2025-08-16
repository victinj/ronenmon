import React from 'react';
import PlayerInfoCard from './PlayerInfoCard';

function IncubatorScreen({ player, navigateTo }) {
    const backLogoSrc = '/assets/image/backLogo.png';
    const incubatorLogoSrc = '/assets/image/incubatorLogo.png';
    const walletLogoSrc = '/assets/image/walletLogo.png';
    const coinLogoSrc = '/assets/image/coinLogo.png';
    const incubatorContainer = '/assets/image/incubatorContainer.png';

    const handleBack = () => {
        navigateTo('mainMenu');
    };

    const handleIncubatorContainer = () => {
        navigateTo('incubatorContainer');
    };

    const handleBuyIncubator = () => {
        navigateTo('incubtatorBuy');
    };


    return (
        <div
            id='incubator screen'
            className=''
            >

        </div>
    );
}

export default IncubatorScreen;