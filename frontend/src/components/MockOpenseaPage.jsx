import React from 'react';

// --- Placeholder Data ---
// In a real application, this data would come from an API.
const mockNfts = [
  { id: 1, name: 'Fireheart #007', price: '0.5 ETH', image: '/assets/image/Monster/fireheart-monsterLogo.png', type: 'Fire' },
  { id: 2, name: 'Blustar #012', price: '0.8 ETH', image: '/assets/image/Monster/blustar-monsterLogo.png', type: 'Water' },
  { id: 3, name: 'Yepi #025', price: '0.3 ETH', image: '/assets/image/Monster/yepi-monsterLogo.png', type: 'Earth' },
  { id: 4, name: 'Chillguy #031', price: '1.2 ETH', image: '/assets/image/Monster/chillguy-monsterLogo.png', type: 'Ice' },
  { id: 5, name: 'Beight #042', price: '0.6 ETH', image: '/assets/image/Monster/beight-monsterLogo.png', type: 'Electric' },
  { id: 6, name: 'Smileypong #056', price: '0.9 ETH', image: '/assets/image/Monster/smileypong-monsterLogo.png', type: 'Poison' },
  { id: 7, name: 'Fireheart #088', price: '1.5 ETH', image: '/assets/image/Monster/fireheart-monsterLogo.png', type: 'Fire' },
  { id: 8, name: 'Blustar #101', price: '1.1 ETH', image: '/assets/image/Monster/blustar-monsterLogo.png', type: 'Water' },
];

// --- Sub-components for better structure ---

const NftCard = ({ nft }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
    <img src={nft.image} alt={nft.name} className="w-full h-56 object-contain bg-gray-900 p-4" />
    <div className="p-4">
      <h3 className="text-lg font-bold text-white">{nft.name}</h3>
      <p className="text-sm text-gray-400 mt-1">Type: {nft.type}</p>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <p className="text-xs text-gray-500">Price</p>
          <p className="text-md font-semibold text-cyan-400">{nft.price}</p>
        </div>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

const FilterSidebar = () => (
  <aside className="w-full md:w-1/4 lg:w-1/5 p-6 bg-gray-900 rounded-lg">
    <h2 className="text-2xl font-bold text-white mb-6">Filters</h2>
    <div className="space-y-6">
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-400 mb-2">Status</label>
        <select id="status" className="w-full bg-gray-800 text-white rounded-lg p-2">
          <option>Buy Now</option>
          <option>On Auction</option>
        </select>
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-400 mb-2">Price Range</label>
        <select id="price" className="w-full bg-gray-800 text-white rounded-lg p-2">
          <option>Under 1 ETH</option>
          <option>1 - 5 ETH</option>
          <option>5+ ETH</option>
        </select>
      </div>
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-400 mb-2">Monster Type</label>
        <div className="space-y-2">
          {['Fire', 'Water', 'Earth', 'Ice', 'Electric', 'Poison'].map(type => (
            <div key={type} className="flex items-center">
              <input id={`type-${type}`} name="type" type="checkbox" className="h-4 w-4 rounded bg-gray-700 border-gray-600 text-cyan-600 focus:ring-cyan-500" />
              <label htmlFor={`type-${type}`} className="ml-3 text-sm text-gray-300">{type}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
);


// --- Main Page Component ---

function MockOpenseaPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            <span className="text-cyan-400">Roninmon</span> Marketplace
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-300 hover:text-white">Explore</a>
            <a href="#" className="text-gray-300 hover:text-white">My Collection</a>
            <a href="#" className="text-gray-300 hover:text-white">Stats</a>
          </div>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Connect Wallet
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Filters */}
          <FilterSidebar />

          {/* NFT Grid */}
          <div className="w-full">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold text-white">Explore Roninmon</h1>
              <select className="bg-gray-800 text-white rounded-lg p-2">
                <option>Sort by: Recently Listed</option>
                <option>Sort by: Price: Low to High</option>
                <option>Sort by: Price: High to Low</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mockNfts.map(nft => (
                <NftCard key={nft.id} nft={nft} />
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-12">
        <div className="container mx-auto px-6 py-4 text-center text-gray-400">
          <p>&copy; 2025 Roninmon. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default MockOpenseaPage;