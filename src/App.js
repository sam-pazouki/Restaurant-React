import  { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';

function App() {
  const [cartIsShown, setCardIsShow] = useState(false);

  const showCartHandler = () => {
    setCardIsShow(true);
  };

  const hideCartHandler = () => {
    setCardIsShow(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClick={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
