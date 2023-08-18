import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Topbar from '../components/common/Topbar';


const LayoutIndex: React.FC = () => {
    return (
        <>
            <Topbar />
            <Outlet />
        </>
    )
}


export default LayoutIndex