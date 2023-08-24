import React from 'react';
import { styled } from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const list = [
    {
        head: "Company",
        links: ['Home', 'About us', 'Journal', 'Reviews', 'Contact']
    },
    {
        head: "Customer Care",
        links: ['Terms and Conditions', 'FAQ', 'Changelog', 'Image license info', 'Style guide', 'Instructions']
    },
    {
        head: "Shop",
        links: ['Shop all', 'Yogurt', 'Lactose•free']
    }
]

const Footer: React.FC = () => {
    return (
        <FooterStyles data-scroll-section className="flex auto justify-center item-center">
            {/* Header */}
            <div className="footer_wrapper w-85 auto flex item-start">
                <div className="footer_left flex auto column gap-2 item-start w-100">
                    <h4 className="fs-24 text-extra-bold family2 text-dark">Keep in touch and receive fun updates!</h4>
                    <form className="flex w-85 item-center">
                        <input type="text" placeholder='Enter you email here' />
                        <div className="form_btn flex item-center justify-center text-white fs-16 uppercase family2">Sign Up</div>
                    </form>
                    <div className="flex item-center" style={{ gap: ".5rem" }}>
                        <div className="icons icon2 flex item-center justify-center">
                            <FaInstagram fontSize={'20px'} />
                        </div><div className="icons icon2 flex item-center justify-center">
                            <FaTwitter fontSize={'20px'} />
                        </div><div className="icons icon2 flex item-center justify-center">
                            <FaFacebook fontSize={'20px'} />
                        </div>
                    </div>
                    <h3 style={{ fontWeight: "300" }} className="fs-24">Customer Support Center</h3>
                    <ul style={{ fontWeight: "300", gap: ".5rem" }} className="fs-16 flex column">
                        <li>Monday – Friday</li>
                        <li>9am – 5pm PST</li>
                        <li>essienedidiong1000@gmail.com</li>
                        <li>(080) 0123-45678</li>
                    </ul>
                </div>
                <div className="borders"></div>
                <div className="flex w-100 column gap-2">
                    <div className="grid_wrapper grid flex auto justify-center item-center w-100">
                        {
                            list.map((x, index) => {
                                return <div key={index} className="flex column gap-1">
                                    <h3 className="fs-30 text-extra-bold family2 text-dark">{x.head}</h3>
                                    <ul className="flex column" style={{ gap: ".6rem" }}>
                                        {
                                            x.links.map((x, index) => {
                                                return <li key={index} className="fs-16 text-dark text-light">{x}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                    <div className="w-100 item-center justify-center flex fs-12 text-light text-dark">
                    Copyright © 2023 Edidiong Essien Victor
                    </div>
                </div>
            </div>
        </FooterStyles>
    )
}

const FooterStyles = styled.div`
  width: 100%;
  position: relative;
  padding:5rem 0;
  background:#f7f3f1db;
  z-index:100;
  .icons {
        background-color: #EF5350 !important;
        width:2.4rem;
        height: 2.4rem;
        border-radius:50%;

        svg {
            color:#fff;
        }
    }
  form {
    height: 4rem;
    border-radius: 6px;
    background-color: #D7D8D9;
    .form_btn {
        padding: 0 2rem;
        height:100%;
        background:#212121;
    border-radius: 6px;
    width: 30%;

    }
    input {
        background-color: #D7D8D9;
        border:none;
        outline:none;
        height:100%;
        padding:0 2rem;
        width: 80%;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }
  }
  .grid_wrapper {
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    grid-gap: 1rem;
    place-items: start;
  }
  .borders{ 
    width:1px;
    background-color:rgba(0,0,0,.2);
    @media (max-width:780px)  {
        display: none;
    }
}
  .footer_left {}
  .footer_wrapper {
    gap:6rem;
    width: 80%;
    @media (max-width:780px)  {
        flex-direction: column;
        align-items: flex-start;
    }
  }
`


export default Footer