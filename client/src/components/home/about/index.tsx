import React from 'react';
import { styled } from 'styled-components';
const aboutdata1 = [
    {
        image: 'https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d821b43a9e756fc2feb3995_fruit-5.png',
        text: "Kinbiome™ • Plant-based probiotic supports clear skin + a strong skin barrier. Learn more"
    },
    {
        image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d823ee3251dcc696beea811_fruit-5.png",
        text: "Kinbiome™ • Plant-based probiotic supports clear skin + a strong skin barrier. Learn more"
    },
    {
        image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d832052e8178d1ae662bc4e_cherry.svg",
        text: "Kinbiome™ • Plant-based probiotic supports clear skin + a strong skin barrier. Learn more"

    },
    {
        image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d823ee3251dccf5faeea7fc_fruit-8.png",
        text: "Kinbiome™ • Plant-based probiotic supports clear skin + a strong skin barrier. Learn more"
    }
]

const aboutdata2 = [
    {
        image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e23224f2e290c48b9c7b4b7_shop-bag.svg", 
        text: "Make Waves",
        subtext:"Sign up to receive convenient shipments for your beauty routine. Subscribe and you’ll receive 15% off your next order",

    },
    {
        image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e232223b966d9fe1c82e826_label.svg",
        text: "Receive Your Products",
        subtext:"We’ll send you a shipping label with your products. All you need to do is put your used bottles in the box and leave out for your mail carrier."
    },
    {
        image: "https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e232257daefb875504b4048_letter.svg",
        text: "Get Rewarded",
        subtext:"Each time you send in your empty bottles, you'll receive 15% off your next shipment."

    }
]
const About: React.FC = () => {
    return (
        <AboutStyles className="flex auto justify-center item-center">
            {/* Header */}
            <div className="about_wrapper w-85 auto flex column">
                <div className="about_top flex auto justify-center item-center w-100">
                    <div className="flex column w-85 auto about_header gap-2 item-center justify-center">
                        <div style={{width:"80%"}} className="w-85 auto grid grid_wrapper">
                        {
                                aboutdata2.map((x ,index)=> {
                                    return <div style={{background:"#FAFAFA", padding:"3rem 0"}} className="flex column gap-1">
                                        <div
                                            className="images flex item-center justify-center ">
                                            <img src={x.image} style={{ width: '5rem', height: "5rem",}} alt="" />
                                        </div>
                                        <div className="flex column gap-1 item-center justify-center ">
                                            <h6 style={{color:"rgb(66, 165, 245)"}} className="fs-12 family3 text-bold">STEP {index + 1}</h6>
                                            <h4 style={{fontWeight:"600"}} className="fs-24 text-extra-bold text-center family2">{x.text}</h4>
                                            <h5 style={{lineHeight:"1.8"}} className="fs-14 text-light text-center w-90 auto">{x.subtext}</h5>
                                        </div>

                                    </div>
                                })
                            }
                        </div>
                    </div>


                </div>
                <div className="about_center flex auto justify-center item-center w-100">
                    <img src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5e2866783a68325c8d897d6d_dose-juice-mP0xREKwrqg-unsplash.jpg" alt=""
                        className="image_background" />
                    <div className="flex column about_header gap-2 item-center justify-center">
                        <h3 className="fs-30 text-extra-bold family2 text-dark">Say hello to good-for-you ingredients</h3>
                        <div className="w-100 flex item-center justify-center gap-1">
                            {
                                aboutdata1.map(x => {
                                    return <div className="flex column">
                                        <div
                                            style={{ width: '6rem', height: "6rem", borderRadius: "50%", background: "#fff" }}
                                            className="images flex item-center justify-center ">
                                            <img src={x.image} style={{ width: '5rem', height: "5rem"}} alt="" />
                                        </div>

                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="about_top flex auto justify-center item-center w-100">
                    <div className="flex column w-85 auto about_header gap-2 item-center justify-center">
                        <h3 className="fs-30 text-extra-bold family2 text-dark">For all well beings</h3>
                        <h4 className="text-light family3 auto text-center text-black fs-24">We are kind to people + planet with clean,
                            cruelty-free products + conscious packaging.
                        </h4>
                        <div className="card_btn_wrapper flex item-center justify-center">
                            <div className="card_btn fs-18 flex justify-center item-center family1 text-white text-light">
                                <div className="text">About Us</div>
                            </div></div>
                    </div>


                </div>

            </div>
        </AboutStyles >
    )
}

const AboutStyles = styled.div`
  width: 100%;
  position: relative;
  background:#D1E7F3;
  min-height: 100vh;
  z-index:100;
  padding:8rem 0;

  .grid_wrapper {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-gap: 1rem;
  }
  .card_btn_wrapper {
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
      background:hsla(206.81564245810057, 89.95%, 60.98%, 1.00);

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
      background-color:#000 ;
  /* Add more styles for the card here */
      transition: all 1s ease;
      z-index: 1;
      padding: 2rem;
    }
    }
        }
  .image_background {
    position:absolute;
    object-fit: cover;
            height:100%;
            width:100%;
    z-index:10;

  }
  h4 {
    width:60%;
    font-weight: 300;
  }
  .about_header {
    z-index:20;
  }
  h3 {
    font-size: 45px;
  }
  .about_wrapper {
    width:80%;
    position: sticky;
  top: 0;
  }
  .about_top {
    position: relative;
    min-height: 10rem;
    background:#fff;
    padding:6rem 0;
  }
  .about_center {
    position: relative;
    min-height: 30rem;
    background-repeat: no-repeat;
    object-fit: cover;
  }
`


export default About