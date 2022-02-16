import React, { useState } from 'react'
import './index.css'
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import data from './data.json'

function App() {
  const [product, setProduct] = useState(data)
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Product products={product} />
          <div>Filter</div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
