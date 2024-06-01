'use client';

import { useState } from 'react';

const Home: React.FC = () => {
  const [zoomed, setZoomed] = useState(false);
  const [showPanel, setShowPanel] = useState(false);

  const handleZoom = () => {
    setZoomed(true);
    setTimeout(() => {
      setShowPanel(true);
    }, 500); // 延迟以同步动画效果
  };

  const handleClosePanel = () => {
    setShowPanel(false);
    setZoomed(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out ${zoomed ? 'transform scale-150 -translate-x-1/8 -translate-y-1/4' : 'transform scale-100'}`}
        style={{ backgroundImage: "url('/guild-hall.jpg')" }}
        onClick={handleZoom}
      ></div>
      {!showPanel && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white p-5 bg-black bg-opacity-75 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold">Adventurers Guild DAO</h1>
            <button onClick={handleZoom} className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300">
              Start your journey
            </button>
          </div>
        </div>
      )}
      {showPanel && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="text-center text-white p-5 bg-black bg-opacity-90 rounded-lg relative">
            <p className="text-xl md:text-2xl">Coming Soon .....</p>
            <button onClick={handleClosePanel} className="absolute top-0 right-0 text-white font-bold">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
