import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
interface MagneticProps {
  children: React.ReactNode
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const ref = useRef();
  // creating a mouse move function
  useEffect(() => {
    const MouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref?.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      gsap.to(ref?.current, { x: x, duration: 1, ease: "elastic.out(1, .3)" });
      gsap.to(ref?.current, { y: y, duration: 1, ease: "elastic.out(1, .3)" });
    };
    const MouseLeave = (e) => {
      gsap.to(ref?.current, { x: 0,duration: 1, ease: "elastic.out(1, .3)" });
      gsap.to(ref?.current, { y: 0,duration: 1, ease: "elastic.out(1, .3)" });
    };
    ref?.current?.addEventListener("mousemove", MouseMove);
    ref?.current?.addEventListener("mouseleave", MouseLeave);

    return () => {
      ref?.current?.removeEventListener("mousemove", MouseLeave);
      ref?.current?.removeEventListener("mouseleave", MouseLeave);
    };
  }, []);
  return <MagneticContent ref={ref}>{children}</MagneticContent>;
};

const MagneticContent = styled.div``;

export default Magnetic;
