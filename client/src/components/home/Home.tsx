import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import LocomotiveScroll from "locomotive-scroll";
import Hero from './hero';
import ProductList from './product_list';
import About from './about';
const Home: React.FC = () => {

  return (
    <HomeStyles>

      <Hero />
      <ProductList />
      <About />

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