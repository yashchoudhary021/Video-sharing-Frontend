import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./nav.css";

function Nav2() {
  const navigation = useNavigate()
  const handelSignOut = ()=>{
    const token = localStorage.getItem("loginToken");
    // console.log(token);
    axios.post("http://localhost:8080/logout", {token: token}).then((res)=>{
      window.alert(res.data.msg);
      navigation("/sign")
      localStorage.clear("loginToken");
    }).catch((err)=>{
      console.log(err);
      // window.alert("try later")
    })
  }
  return (<>
    <nav>
      <div className="Container">
        <span id="Nav2-heading" onClick={()=>navigation("/")}>Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        <Link className="com-btn">My Videos</Link>
        <span className="com-btn">|</span>
        <Link className="com-btn">Upload</Link>
        <span className="com-btn">|</span>
        <Link className="com-btn" onClick={handelSignOut} style={{color:"red"}}>Sign out</Link>

      </div>
    </nav>
  </>);
}

export default Nav2;
