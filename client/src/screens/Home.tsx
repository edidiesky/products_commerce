

import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import LocomotiveScroll from "locomotive-scroll";
import Home from '../components/home/Home';
import Footer from '../components/home/footer';

const HomeIndex: React.FC = () => {
    const homeref = useRef(null);
    // use locomtive scroll
    useEffect(() => {
        let locoScroll;
        const locomotive = new LocomotiveScroll({
            el: homeref?.current,
            smooth: true,
            multiplier: 1,
            class: "is-reveal",
            smoothMobile: true
        });
        new ResizeObserver(() => locomotive.update()).observe(homeref?.current);
        return () => {
            locomotive.destroy();
        };
    }, []);
    return (
        <HomeStyles ref={homeref} data-scroll-section
            style={{ perspective: "1px", minHeight: "100vh" }}>
            <Home />
            <Footer />

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

export default HomeIndex