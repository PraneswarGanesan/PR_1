  // import React, { useState } from 'react';
  // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  // import Home from './components/Home';
  // import Account from './components/Account';
  // import About from './components/About';
  // import Products from './components/Products';
  // import Carts from './components/Carts';
  // import Navbar from './components/Navbar';
  // import Login from './components/Login';
  // import Signup from './components/Signup';

  // function App() {
  //   const [user, setUser] = useState(null);
  //   const [cart, setCart] = useState([]); 

  //   const handleLogin = (userData) => {
  //     setUser(userData);
  //   };

  //   const handleSignup = (newUser) => {
  //     setUser(newUser);
  //   };

  //   const addToCart = (product) => {
  //     // Implement your logic to add product to cart
  //     setCart((prevCart) => [...prevCart, product]);
  //   };

  //   const updateUser = (updatedUser) => {
  //     setUser(updatedUser);
  //   };

  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path='/' element={<Home />} />
  //         <Route path='/home' element={<Home />} />
  //         <Route path='/about' element={<About />} />
  //         <Route path='/about-us' element={<About />} />
  //         <Route path='/products' element={<Products addToCart={addToCart} />} />
  //       <Route path='/carts' element={<Carts cart={cart} />} />
  //         <Route path='/account' element={<Account user={user} onUpdateUser={updateUser} />} />
  //         <Route path='/login' element={<Login onLogin={handleLogin} />} />
  //         <Route path='/signup' element={<Signup onSignup={handleSignup} />} />
  //       </Routes>
  //     </Router>
  //   );
  // }

  // export default App;

  import React, { useState } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './components/Home';
  import Account from './components/Account';
  import About from './components/About';
  import Products from './components/Products';
  import Carts from './components/Carts';
  import Navbar from './components/Navbar';
  import Login from './components/Login';
  import Signup from './components/Signup';
  
  function App() {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]); 
  
    const handleLogin = (userData) => {
      setUser(userData);
    };
  
    const handleSignup = (newUser) => {
      setUser(newUser);
    };
  
    const addToCart = (product) => {
      // Implement your logic to add product to cart
      setCart((prevCart) => [...prevCart, product]);
    };
  
    const removeFromCart = (productId) => {
      // Implement your logic to remove product from cart
      setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };
  
    const updateUser = (updatedUser) => {
      setUser(updatedUser);
    };
  
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/products' element={<Products addToCart={addToCart} />} />
          <Route path='/carts' element={<Carts cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='/account' element={<Account user={user} onUpdateUser={updateUser} />} />
          <Route path='/login' element={<Login onLogin={handleLogin} />} />
          <Route path='/signup' element={<Signup onSignup={handleSignup} />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
  