import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Topbar from '../components/common/Topbar';
import Footer from '../components/home/footer';


const LayoutIndex: React.FC = () => {
    return (
        <>
            <Topbar />
            <Outlet />
            <Footer/>
        </>
    )
}


export default LayoutIndex