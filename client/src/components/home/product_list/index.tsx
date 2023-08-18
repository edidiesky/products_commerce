import React from 'react';
import { styled } from 'styled-components';
interface ProductCardProps {
    backgroundColor: string;
}

const product = [
    {
        background: "hsla(206.81564245810057, 89.95%, 60.98%, 1.00)",
        image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f7fd2e06746e4a50f05_blueberry.png",

    },
    {
        background: "hsla(14.361702127659573, 100.00%, 63.14%, 1.00)",
        image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2e658c2b172ab3b7acbd_peach.png",
    },
    {
        background: "hsla(87.96116504854368, 50.24%, 59.80%, 1.00)",
        image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f94d2e067c112a50fab_lime.png"
    }
]

const ProductList: React.FC = () => {
    return (
        <PorductListStyles>
            {/* Header */}
            <div className="flex hero_wrapper column  auto justify-center item-center">
                {/* <img src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d823ee3251dccb171eea802_fruit-7.png" alt="" className="image image_1" /> */}

                {
                    product.map((x, index) => {
                        return <ProductCard backgroundColor={x.background} className='flex item-center justify-center' key={index}>
                            <div className="product_card_wrapper auto flex column gap-2">
                                <div className="image_wrappers auto">
                                    <img src={x.image} alt="" className="image auto" />
                                    <div className="flex card_btn_wrapper w-100 justify-center item-center">
                                        <div backgroundColor={x.background} className="card_btn fs-20 flex justify-center item-center family1 text-white text-light">
                                            <div className="text">View Product</div>
                                        </div></div>
                                </div>

                            </div>
                        </ProductCard>
                    })
                }
                {/* <img src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d824200708f0f8c1ba3cd96_fruits-3.png" alt="" className="image image_2" />
                <img src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d8240fdd06ccc780fa240d0_fruits-1.png" alt="" className="image image_3" /> */}

            </div>
        </PorductListStyles>
    )
}

const ProductCard = styled.div<ProductCardProps>`
  position: relative;
  min-height: 100vh;
  width:100%;
  padding:5rem 0;
  background-color: ${(props) => props.backgroundColor || "white"};
  /* Add more styles for the card here */
  .product_card_wrapper {
    z-index:30;
    width: 60%;
    .image_wrappers {
        width: 40%;
        position: relative;
        img {
        width: 100%;
        }
        .card_btn_wrapper {
            position:absolute;
            bottom:10%;
            left:50%;
            transform:translateX(-50%);
            .card_btn {
        /* padding:1.6rem 3rem; */
        width:12rem;
        height: 5rem;
        border-radius: 40px;
        background: #000;
        overflow: hidden;
        cursor: pointer;
        position: relative;
      transition: all 0.7s ease;

        &:is(:hover, :focus-visible) {
            transform:scale(1.1);
        }
        .text {
      z-index: 10;

        }
        &:is(:hover, :focus-visible)::before {
      bottom: -10%;
      transform:translateX(-50%) scale(1.4);
      
    }
        &::before {
      content: "";
      position: absolute;
      bottom: -200%;
      left: 50%;
      transform: translateX(-50%);
      width: 40%;
      height: 50%;
      border-radius: 100%;
      background-color: ${(props) => props.backgroundColor || "white"};
  /* Add more styles for the card here */
      transition: all 1s ease;
      z-index: 1;
      padding: 2rem;
    }
    }
        }

    
    }
    
  }
`;


const PorductListStyles = styled.div`
width: 100%;
position: relative;
min-height:100vh;
.hero_wrapper {
position: relative;
}

`



export default ProductList