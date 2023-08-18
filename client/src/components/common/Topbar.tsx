import React from 'react';
import { styled } from 'styled-components';
import { HiBars2 } from 'react-icons/hi2'
import Magnetic from './magnetic';

const Topbar: React.FC = () => {
    return (
        <TopbarStyles>
            <div className="w-90 auto flex item-center justify-space top_wrapper">
                <div className="flex item-center gap-2">
                    <Magnetic>
                        <div className="icon flex item-center justify-center fs-30 text-dark"><HiBars2 /></div>
                    </Magnetic>
                    <h3 className="fs-30 text-dark text-light">Productas</h3>
                </div>

                <div className="flex item-center gap-2">
                    <Magnetic>
                        <div className="icon flex item-center justify-center fs-30 text-dark">
                            <div className="notification flex item-center fs-16 text-white justify-center">1</div>
                            <img style={{ width: "1.4rem", height: "1.4rem" }} src="https://assets.website-files.com/5d820ccf1097dd2dccadc680/5d87847c8de89cd7fb9de138_Orion_shopping-basket.svg" alt="" />
                        </div>
                    </Magnetic>
                </div>
            </div>
        </TopbarStyles>
    )
}

const TopbarStyles = styled.div`
  width: 100%;
  position: relative;
  position: fixed;
  top: 5%;
  z-index:20;
  .icon {
    width:5rem;
    height:5rem;
    background:#fff;
    position: relative;
    transition: all .3s;
    &:hover {
        transform: scale(1.2);
    }
    .notification {
        position: absolute;
    border-radius: 50%;
    background:#222;
    z-index: 1;
    top:-5%;
    right:-2%;
    padding: .2rem;
    width:1.4rem;
    height:1.4rem;
    }
  }
`


export default Topbar