import React from 'react';
import { useGameController } from '../hooks/useGameController';
import { Routes } from '../App';

function LandingScreen({ navigateTo }) {
  const roninmonLogoSrc = '/assets/image/roninmon-trademarkLogo.png';
  const controller = useGameController();

  const handleGetRoninmon = () => {
    console.log("Get your Roninmon button clicked (React)!");
    navigateTo(Routes.mainMenu);
    // later on this route goinng to opensea 
    // navigateTo(Routes.Opensea)
  };

  const handleConnectWallet = () => {
    console.log("Connect Wallet button clicked (React)! Navigating to wallet screen.");
    navigateTo(Routes.connectWallet);
  };

  return (
    <div 
      id='landing-screen'
      className='game-screen active flex flex-col justify-center
                 items-center
                '>

        <div className='flex flex-col items-center absolute gap'>

        </div>

    </div>
  );
}

// function LandingScreen({ onConnectWallet, navigateTo }) {
//   const roninmonLogoSrc = '/assets/image/roninmon-trademarkLogo.png';
//   const controller = useGameController()
  
//   // Figma design base dimensions
//   const FIGMA_WIDTH = 1920;
//   const FIGMA_HEIGHT = 1080;
  
//   // Responsive scaling function
//   const getResponsiveValue = (figmaValue, dimension = 'width') => {
//     if (dimension === 'width') {
//       return `${(figmaValue / FIGMA_WIDTH) * 100}vw`;
//     } else {
//       return `${(figmaValue / FIGMA_HEIGHT) * 100}vh`;
//     }
//   };
  
//   const handleGetRoninmon = () => {
//     console.log("Get your Roninmon button clicked (React)!");
//     navigateTo(Routes.mainMenu)
//   };

//   const handleConnectWallet = () => {
//     console.log("Connect Wallet button clicked (React)! Navigat
// ing to wallet screen.");
//     navigateTo(Routes.connectWallet);
//   };

//   return (
//     <div
//       id="landing-screen"
//       className="game-screen active flex flex-col justify-center items-center bg-black/[0.2] w-screen h-screen relative"
//     >
//       {/* Main container div - matches Figma parent container */}
//       <div
//         className="flex flex-col items-center absolute"
//         style={{
//           width: getResponsiveValue(805.5),
//           height: getResponsiveValue(494.7899169921875, 'height'),
//           top: getResponsiveValue(292, 'height'),
//           left: getResponsiveValue(557),
//           gap: getResponsiveValue(50, 'height'),
//         }}
//       >
//         {/* Logo */}
//         <img
//           src={roninmonLogoSrc}
//           alt="Roninmon Logo"
//           className="w-full h-auto drop-shadow-[0_0_10px_rgba(0,0,0,0.7)] 
//                      transition-transform duration-300 ease-out 
//                      hover:scale-[1.03] hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] 
//                      cursor-pointer"
//           style={{
//             maxWidth: '100%',
//             objectFit: 'contain'
//           }}
//         />

//         {/* Buttons container div - matches Figma buttons container */}
//         <div
//           className="flex flex-col items-center justify-center"
//           style={{
//             width: getResponsiveValue(357),
//             height: getResponsiveValue(190, 'height'),
//             gap: getResponsiveValue(22, 'height'),
//           }}
//         >
//           <button
//             onClick={handleGetRoninmon}
//             className="cursor-pointer 
//                        transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
//                        active:shadow-[inset_0px_3px_6px_rgba(0,0,0,0.43)] active:translate-y-1 
//                        bg-[#0B6DA3] text-white flex items-center justify-center"
//             style={{
//               width: getResponsiveValue(357),
//               height: getResponsiveValue(84, 'height'),
//               borderRadius: getResponsiveValue(20),
//               borderWidth: getResponsiveValue(4),
//               borderColor: 'black',
//               borderStyle: 'solid',
//               padding: getResponsiveValue(20),
//               gap: getResponsiveValue(10),
//               fontFamily: 'Irish Grover',
//               fontWeight: 400,
//               fontStyle: 'normal',
//               fontSize: getResponsiveValue(36),
//               lineHeight: '100%',
//               letterSpacing: '0%',
//               whiteSpace: 'nowrap',
//               textOverflow: 'ellipsis',
//               overflow: 'hidden'
//             }}
//           >
//             Get your Roninmon
//           </button>

//           <button
//             onClick={handleConnectWallet}
//             className="cursor-pointer 
//                        transition-all duration-200 ease-in-out shadow-[0px_10px_10px_rgba(0,0,0,0.56)] 
//                        active:shadow-[inset_0px_3px_6px_rgba(0,0,0,0.43)] active:translate-y-1 
//                        bg-[#D3BF2C] text-white flex items-center justify-center"
//             style={{
//               width: getResponsiveValue(279),
//               height: getResponsiveValue(84, 'height'),
//               borderRadius: getResponsiveValue(20),
//               borderWidth: getResponsiveValue(4),
//               borderColor: 'black',
//               borderStyle: 'solid',
//               padding: getResponsiveValue(20),
//               gap: getResponsiveValue(10),
//               fontFamily: 'Irish Grover',
//               fontWeight: 400,
//               fontStyle: 'normal',
//               fontSize: getResponsiveValue(36),
//               lineHeight: '100%',
//               letterSpacing: '0%',
//               whiteSpace: 'nowrap',
//               textOverflow: 'ellipsis',
//               overflow: 'hidden'
//             }}
//           >
//             Connect Wallet
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

export default LandingScreen;