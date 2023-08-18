import React from 'react';
import { styled } from 'styled-components';

interface ProductCardProps {
  backgroundColor: string;
  color: string;
}

const recommendData = [

  {
    image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f718c2b172653b7bf1b_strwaberry-p-500.png",
    text: "Strawberry",
    price: 2.99,
    backgroundcolor: "#FFEBEE",
    color: "#FF7043"
  },
  {
    image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f7fd2e06746e4a50f05_blueberry-p-500.png",
    text: "BlueBerry",
    price: 40.1,
    backgroundcolor: "#E3F2FD",
    color: "#47A5F5"
  },
  {
    image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2e658c2b172ab3b7acbd_peach-p-500.png",
    text: "Peach",
    price: 3.98,
    backgroundcolor: "#FBE9E7",
    color: "#FF7043"
  },
  {
    image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f94d2e067c112a50fab_lime-p-500.png",
    text: "KeySlime",
    price: 4.1,
    backgroundcolor: "#F1F8E9",
    color: "#9CCC65"
  },
  {
    image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2fa3b0943f1845ba818e_coconut-p-500.png",
    text: "Coconut",
    price: 4.1,
    backgroundcolor: "#EFEBE9",
    color: "#8D6E63"
  }
]

const ProductRecommendation = () => {
  return (
    <ProductrecommendationStyles style={{ gap: '.2rem' }} className="flex column auto justify-center item-center">
      <div className="Productrecommendation_wrapper w-85 auto gap-4 flex column">
        <h2 className="uppercase text-start w-85 auto family2">
          GIFT BETTER
        </h2>
        {/* product list */}
        <div className="w-85 py-2 grid justify-center item-center auto wrapper">
          {
            recommendData.map((x, index) => {
              return <ProductCard backgroundColor={x.backgroundcolor} className='flex item-center justify-center' key={index}>
                <div className="product_card_wrapper auto flex column">
                  <div className="flex header column" style={{ gap: ".5rem" }}>
                    <h3 style={{ fontSize: "26px", color: `${x.color}` }} color={x.color} className=" family3 text-center">{x.text}</h3>
                    <h5 className="fs-14 text-light family3 text-center">${x.price} USD</h5>
                  </div>
                  <div className="image_wrappers auto">
                    <img src={x.image} alt="" className="image auto" />

                  </div>

                </div>
              </ProductCard>
            })
          }
        </div>
      </div>
      <div className="Product_center w-85 auto gap-4 flex column">

        <div className="w-85 py-2 grid auto wrapper_1">
          <div style={{ background: "#F5F5F5", padding: "5rem 0" }} className="flex item-center justify-center column gap-1 gap-1">
            <div className="w-85 left auto flex item-center justify-center column gap-1">
              <h3 style={{ fontWeight: "300", fontSize: "24px", lineHeight: "1.4" }}
                className="fs-24 w-85 auto text-dark">
                <span className="block family2 text-extra-bold fs-10">IN THE GIVING MOOD?</span>
                Give them the gift of better. They'll thank you. We promise
              </h3>
              <h4 style={{ fontWeight: "300", fontSize: "15px", lineHeight: "1.6" }}
                className="fs-16 w-85 auto family3">PS. Select "Make it a gift" at checkout to have it wrapped up with all the love.</h4>
            </div>
          </div>
          <div className="flex">
            <img
              src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e286bc83a68325fe189b150_dose-juice-KNU61gmh3fE-unsplash.jpg" alt="" className="w-100 h-100" />
          </div>
        </div>
      </div>
      <div className="Product_bottom relative w-85 auto gap-4 flex column">
        <img style={{objectFit:"cover"}} src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2c2870ba7fff0f20992bfd_oriol-portell-AbwqpFnBDms-unsplash-(1).jpg" alt="" className="image_wrappers absolute h-100 w-100" />
        <div style={{ zIndex: "40" }} className="w-85 py-2 grid auto wrapper_1">
          <div className="flex item-center justify-center column gap-1 gap-1">
          </div>
          <div className="flex">
            <div style={{ background: "#F5F5F5", padding: "8rem 0" }} className="flex item-center justify-center column gap-1 gap-1">
              <div className="w-85 left auto flex item-center justify-center column gap-1">
                <h3 style={{ fontWeight: "300", fontSize: "24px", lineHeight: "1.4" }}
                  className="fs-24 w-85 auto text-dark">
                  Great bubbles make for a great bath!
                </h3>
                <h4 style={{ fontWeight: "300", fontSize: "14px", lineHeight: "1.8" }}
                  className="fs-16 w-85 auto family3">I read several people say this doesn't bubble. I added a good 2+ tbsp to my tub and noticed it didn't really bubble a lot under the running water. But boy oh boy did I get bubbles when I turned
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProductrecommendationStyles>
  )
}

const ProductCard = styled.div<ProductCardProps>`
  position: relative;
  width:100%;
  padding:2rem 0;
  background-color: ${(props) => props.backgroundColor || "white"};
  /* Add more styles for the card here */
  .product_card_wrapper {
    z-index:30;
    width: 60%;
    overflow: hidden;
    .header {
      h3 {
        font-weight: 500;
      color: ${(props) => props.color};
     }
    }
    
    .image_wrappers {
        width: 80%;
        position: relative;
        transform:translateY(40%);
        transition: all .4s ease;
        img {
        width: 100%;
        }
    }
    
  }
    &:hover {
      h3 {
      transform:translateY(0%);

    }
      .image_wrappers {
      transform:translateY(0%);

      }
    }
`;


const ProductrecommendationStyles = styled.div`
  width: 100%;
  position: relative;
  z-index: 30;
  .left {
    width:50%;
    @media (max-width:780px) {
      width:90%;
    }
  }
  h2 {
    font-size: 121px;
    width:80%;
    max-width: 1480px;
    text-decoration: underline;
    @media (max-width:780px) {
      font-size: 60px;
    }
  }
  .recommendCard {
    h3 {
      transform:translateY(50%);
      transition: all .3s ease;
      @media (max-width:780px) {
      transform:translateY(0%);

      }
    }
    .image_wrappers {
    width:55%;
    overflow:hidden;
    margin-top: 1rem;

    img {
      transform:translateY(30%);
      transition: all .3s ease;
      @media (max-width:780px) {
      transform:translateY(0%);

      }
    }
  }
    &:hover {
      h3 {
      transform:translateY(0%);

    }
      .image_wrappers img {
      transform:translateY(0%);

      }
    }
  }
  .Product_center,.Productrecommendation_wrapper {
    padding: 5rem 0;
    background-color: #Fff;
  }
  .wrapper_1 {
    grid-template-columns: 1fr 1fr;
    grid-gap: .2rem;
    width:80%;
    max-width: 1480px;
    @media (max-width:780px) {
      grid-template-columns: 1fr;
    }
  }


  .wrapper {
    grid-template-columns: 1fr 1fr;
    grid-gap: .2rem;
    width:80%;
    max-width: 1480px;
    @media (max-width:780px) {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }
    
  }
`


export default ProductRecommendation