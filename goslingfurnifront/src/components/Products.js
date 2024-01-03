import React from 'react'
import '../styles/Products.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCard from './ProductCard';
import Pro1 from '../assets/pro-1.jpg';
import Pro2 from '../assets/pro-2.jpg';
import Pro3 from '../assets/pro-3.jpg';
import Pro4 from '../assets/pro-4.jpg';
function Products() {
  return (
    <div className='Products'>
      <Navbar />
      <div className='products'>
        <div className='products-content'>
          <div className='special-off'>
            <div className='specs-1'>
            <ProductCard id="cards" title="Sofa" rate={"$50,000"} image={Pro1}/>
            <ProductCard id="cards" title="Stool" rate={"10,000"} image={Pro2}/>
            <ProductCard id="cards" title="Flowecase" rate={"$25,000"} image={Pro3}/>
            <ProductCard id="cards" title="Vintage Sofa" rate={"$80,000"} image={Pro4}/>
              </div>
          </div>
          <div className='normal-products'>
            <div className='sofa'>
              <h3>Sofa</h3>
            <div className='special-off'>
             <div className='specs-1'>
                 <ProductCard id="cards" title="Sofa" rate={"$50,000"} image={Pro1}/>
                 <ProductCard id="cards" title="Stool" rate={"10,000"} image={Pro2}/>
                 <ProductCard id="cards" title="Flowecase" rate={"$25,000"} image={Pro3}/>
                 <ProductCard id="cards" title="Vintage Sofa" rate={"$80,000"} image={Pro4}/>
              </div>
            </div>
            </div>
            <div className='chair'>
              <h3>chair</h3>
              <div className='specs-1'>
                 <ProductCard id="cards" title="Sofa" rate={"$50,000"} image={Pro1}/>
                 <ProductCard id="cards" title="Stool" rate={"10,000"} image={Pro2}/>
                 <ProductCard id="cards" title="Flowecase" rate={"$25,000"} image={Pro3}/>
                 <ProductCard id="cards" title="Vintage Sofa" rate={"$80,000"} image={Pro4}/>
              </div>

            </div>
            <div className='lamp'>
              <h3>Decoration</h3>
              <div className='specs-1' id='spo'>
                 <ProductCard id="cards" title="Sofa" rate={"$50,000"} image={Pro1}/>
                 <ProductCard id="cards" title="Stool" rate={"10,000"} image={Pro2}/>
                 <ProductCard id="cards" title="Flowecase" rate={"$25,000"} image={Pro3}/>
                 <ProductCard id="cards" title="Vintage Sofa" rate={"$80,000"} image={Pro4}/>
              </div>  

            </div>
          </div>
        </div>
        <Footer />
      </div>
      </div>
  )
}

export default Products