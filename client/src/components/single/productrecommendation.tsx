import React from 'react';
import { styled } from 'styled-components';
const recommendData = [
  {
    image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2f94d2e067c112a50fab_lime-p-500.png",
    text: "Key Slime",
    price: 40.1
  },
  {
    image: "https://assets.website-files.com/5d85edd208e53eed3ae194a2/5e2c2e658c2b172ab3b7acbd_peach-p-500.png",
    text: "Coconut",
    price: 40.1
  }
]

const ProductRecommendation = () => {
  return (
    <ProductrecommendationStyles className="flex auto justify-center item-center">
      <div className="Productrecommendation_wrapper w-85 auto gap-2 flex column">
        <h3 style={{ color: "rgb(189, 189, 189)", fontSize: "45px" }} className="uppercase text-center family2">
          MORE PRODUCTS WE RECOMMEND FOR YOU
        </h3>
        <div className="w-85 grid justify-center item-center auto wrapper">
          {
            recommendData.map((x, index) => {
              return <div key={index} className="flex column item-center justify-center recommendCard">
                <h3 className="fs-30 family3 text-center">
                  {x.text}
                  <span className="fs-16 block">${x.price}</span>
                </h3>
                <div className="w-100 auto image_wrappers">
                  <img src={x.image} alt="" className="w-100" />
                </div>
              </div>
            })
          }
        </div>
      </div>
    </ProductrecommendationStyles>
  )
}

const ProductrecommendationStyles = styled.div`
  width: 100%;
  position: relative;
  background-color: #Fff;
  padding-top: 5rem;
  z-index: 30;
  .recommendCard {
    h3 {
      transform:translateY(50%);
      transition: all .3s ease;

    }
    .image_wrappers {
    width:55%;
    overflow:hidden;
    margin-top: 1rem;

    img {
      transform:translateY(30%);
      transition: all .3s ease;
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

  .wrapper {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-gap: 1rem;
    width:80%;
  }
  .Productrecommendation_wrapper {
    width:80%;
    overflow:hidden;
  }
`


export default ProductRecommendation