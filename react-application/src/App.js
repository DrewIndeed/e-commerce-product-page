import React, { useState } from 'react';
import Header from './components/Header/Header';
import './app.css';
import InfoShowcase from './components/InfoShowcase/InfoShowcase';

function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartList, setCartList] = useState([]);

  return (
    <div className="app h-screen">
      <Header cartList={cartList} setCartList={setCartList} cartQuantity={cartQuantity} />

      <InfoShowcase
        setCartList={setCartList}
        setCartQuantity={setCartQuantity}
      />
    </div>
  );
}

export default App;
