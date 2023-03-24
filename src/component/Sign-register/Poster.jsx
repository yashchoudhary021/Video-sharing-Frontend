import React from 'react';
import './style.css';
import { useLocation, Link } from 'react-router-dom';
const Poster = () => {
    const location = useLocation()
    return (
        <>
            <section className="sec-first">
                <h1>Tuner</h1>
                <div>Enjoy Multiple videos at one place</div>
                {location.pathname === "/register" ?
                    <Link to="/sign">
                        <button>Sign In</button>
                    </Link>
                    :
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                }
            </section>
        </>
    )
}

export default Poster
