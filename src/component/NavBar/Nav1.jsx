import "./nav.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Nav1() {
  const navigate = useNavigate()

  const [searchTerm, setSearchTerm] = useState('');

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      search();
    }
  };
  const search = ()=>{
    navigate(`/search/${searchTerm}`)
  }

  return (<>
    <nav>
      <div className="Container">
        <span id="Nav1-heading" onClick={() => navigate("/")}>Tuner</span>
        <input placeholder="Search" className="input" type="text" onChange={(e)=> setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} value={searchTerm}/>
        <div className="com-btn">
          <Link to="/sign" className="btn-2 com-btn" >Login </Link>
          <span className="com-btn"> &nbsp;| &nbsp;</span>
          <Link to="/register" className="btn-1 com-btn">Register</Link>
        </div>
      </div>
    </nav>
  </>);
}

export default Nav1;
