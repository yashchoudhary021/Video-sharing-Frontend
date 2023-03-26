import { useState } from 'react';
import Poster from './Poster';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import './style.css';
import NavBar from '../NavBar/NavBar';

function Register() {
    const navigate = useNavigate();
    const [photo, SetPhoto] = useState(null);
    const [name, SetName] = useState("");
    const [email, SetEmail] = useState("");
    const [phone, SetPhone] = useState("");
    const [profession, SetProfession] = useState("");
    const [password, SetPassword] = useState("");
    const [confirmPassword, SetConfirmPassword] = useState("")


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            const formData = new FormData();
            formData.append('photo', photo);
            formData.append('name', name);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('profession', profession);
            formData.append('password', password);
            formData.append('confirmPassword', confirmPassword);
            console.log(formData)
            await axios.post("http://localhost:8080/register", formData)
                .then((res) => {
                    console.log(res);
                    window.alert("Your Registration is Sucessfull");
                    navigate("/sign");
                }).catch((err) => {
                    console.log("err is ====>" + err)
                    console.log(err)
                    window.alert(err.response.data.message);
                })
        } else {
            window.alert("passwor not match with confirm password")
        }
    }

    return (<>
        <NavBar />
        <main className="sr_main">
            <Poster />
            <section className="register">
                <h1 id='register_heading'>Register</h1>
                <div style={{ margin: "3%" }}>Register to continue access pages</div>
                <form onSubmit={handleSubmit} id="register_form">
                    <input type="file" name='photo' onChange={(e) => SetPhoto(e.target.files[0])} /><br />
                    {/* <button id='btn-circle'>+</button><br /> */}
                    <input type="text" placeholder="Name" name='name' onChange={(e) => { SetName(e.target.value) }} value={name} /><br />
                    <input type="text" placeholder="Email" name='email' onChange={(e) => { SetEmail(e.target.value) }} value={email} /><br />
                    <input type="text" placeholder="Phone" name='phone' onChange={(e) => { SetPhone(e.target.value) }} value={phone} /><br />
                    <input type="text" placeholder="Profession" name='profession' onChange={(e) => { SetProfession(e.target.value) }} value={profession} /><br />
                    <input type="password" placeholder="Password" name='password' onChange={(e) => { SetPassword(e.target.value) }} value={password} /><br />
                    <input type="password" placeholder="Confirm Password" name='confirmPassword' onChange={(e) => { SetConfirmPassword(e.target.value) }} value={confirmPassword} /><br />
                    <button id="register_btn" type="submit">Register</button><br />
                </form>
            </section>
        </main>
    </>);
}
export default Register;