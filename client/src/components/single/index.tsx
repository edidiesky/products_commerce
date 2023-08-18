import React from 'react';
import { styled } from 'styled-components';
import ProductInformation from './productinformation';
import ProductRecommendation from './productrecommendation';
import ProductHero from './hero';

const Single: React.FC = () => {
  return (
    <SingleStyles>
      {/* hero */}
      <ProductHero />
      {/* about */}
      <div className="product_about_wrapper w-85 auto flex column">
        <ProductInformation />
        <ProductRecommendation />
      </div>
    </SingleStyles>
  )
}

const SingleStyles = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: rgb(239, 235, 233);

  .product_about_wrapper {
    width:80%;
    z-index: 70;

  }
`


export default Single