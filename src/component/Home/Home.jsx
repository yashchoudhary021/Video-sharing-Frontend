import React from 'react'
import NavBar from '../NavBar/NavBar'
import Ad from './Ad'
import Card from './Card'

const Home = () => {
    return (
        <>
            <NavBar />
        {/* <div style={{display:"flex", flexDirection:"column"}}> */}
            <Ad />
            <Card />
        {/* </div> */}
        </>
    )
}

export default Home;
