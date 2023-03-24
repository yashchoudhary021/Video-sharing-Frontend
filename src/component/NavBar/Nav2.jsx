import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
        <span className="heading" onClick={()=>navigation("/")}>Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        <button className="btn-3 com-btn" onClick={handelSignOut}>Sign out</button>
        <span className="com-btn">|</span>
        <button className="btn-2 com-btn">Upload</button>
        <span className="com-btn">|</span>
        <button className="btn-11 com-btn">My Videos</button>
      </div>
    </nav>
  </>);
}

export default Nav2;
