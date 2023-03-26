import React from 'react';
import './style.css';
import { useLocation, Link } from 'react-router-dom';
const Poster = () => {
    const location = useLocation()
    return (
        <>
            <section className="poster">
                <h1>Tuner</h1>
                <div>Enjoy Multiple videos at one place</div>
                {location.pathname === "/register" ?
                    <Link to="/sign">
                        <p style={{color:"white" ,  fontSize:"1.9rem" ,marginTop:"30%" , marginLeft:"5%"}}>Sign In</p>
                    </Link>
                    :
                    <Link to="/register">
                        <p style={{color:"white",  fontSize:"1.9rem" ,marginTop:"30%" , marginLeft:"5%"}}>Register</p>
                    </Link>
                }
            </section>
        </>
    )
}

export default Poster
