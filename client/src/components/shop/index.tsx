import React from 'react';
import { styled } from 'styled-components';
import ProductInformation from './productinformation';
import ProductRecommendation from './productrecommendation';

const Shop: React.FC = () => {
  return (
    <ShopStyles className="flex item-center justify-center">
      <div className="shop_wrapper w-85 auto flex column">
        {/* <ProductInformation /> */}
        <ProductRecommendation />
      </div>
    </ShopStyles>
  )
}

const ShopStyles = styled.div`
  width: 100%;
  position: relative;
  min-height: 100vh;
  background-color: #FCDDE8;
  padding: 10rem 0;

  .shop_wrapper {
    width:85%;
    z-index: 70;
    @media (max-width:780px) {
      width: 100%;
    }
    /* margin: 12rem auto; */
  }
`


export default Shop