import React, { useEffect, useState } from 'react'
import Nav2 from './Nav2';
import Nav1 from './Nav1';

const NavBar = () => {
    const [val, setVal] = useState(true);
    useEffect(()=>{
        if (localStorage.getItem("loginToken")) {
            setVal(true)
        }
    },[val])
    
    return (
        <>
            {
                val === true ? <Nav2 /> : <Nav1 />
            }
        </>
    )
}
export default NavBar;
