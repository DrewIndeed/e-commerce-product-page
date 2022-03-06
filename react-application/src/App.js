import React, { useState } from 'react';
import Header from './components/Header/Header';
import './app.css'
import InfoShowcase from './components/InfoShowcase/InfoShowcase';

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <div className="app h-screen">
      <Header cartQuantity={cartQuantity} />

      <InfoShowcase setCartQuantity={setCartQuantity} />
    </div>
  );
}

export default App;
