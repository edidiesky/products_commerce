import React from 'react';
import { styled } from 'styled-components';
import Hero from './hero';
import ProductList from './product_list';
import About from './about';
import Footer from './footer';

const Home: React.FC = () => {
    return (
        <HomeStyles>
            {/* hero */}
          
            {/* top bar */}
            
            <Hero/>
            <ProductList/>
            <About/>
            <Footer/>
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  .image_wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    ing {
        width: 100%;
        object-fit: cover;
    }
  }
`


export default Home