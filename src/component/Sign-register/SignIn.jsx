import { useState } from 'react';
import Poster from './Poster';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

function SignIn() {
    const navigate = useNavigate();
    const [username, SetUsername] = useState("");
    const [Password, SetPassword] = useState("");
    const handelSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", Password);
        axios.post("http://localhost:8080/login", formData)
        .then((res) => {
                console.log(res);
                localStorage.setItem("loginToken", res.data.token)
                window.alert("login Sucessful");
                navigate("/");
            }).catch((err) => {
                console.log(err)
                window.alert("invalid credential")
            })
    }
    return (<>
            <NavBar/>
        <main className="sr_main">
            <Poster />
            <section className="signin">
                <form onSubmit={handelSubmit}>
                    <h1 style={{margin:"8%" ,fontSize:"5rem"}}>Sing In</h1>
                    <div style={{ margin: "3%" , fontSize:"3rem" }}>Sing in to continue access pages</div><br />
                    <input type="text" placeholder="username" name='username' onChange={(e) => { SetUsername(e.target.value) }} value={username} /><br />
                    <input type="password" placeholder="Password" name='password' onChange={(e) => { SetPassword(e.target.value) }} value={Password} /><br />
                    <button id="signin_btn" type="submit">Sing in</button>
                </form>
            </section>
        </main>
    </>);
}
export default SignIn;