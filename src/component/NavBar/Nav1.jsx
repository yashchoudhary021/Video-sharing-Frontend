import "./nav.css"
import { Link, useNavigate } from "react-router-dom";

function Nav1() {
  const navigate = useNavigate()
  return (<>
    <nav>
      <div className="Container">
        <span className="heading" onClick={()=>navigate("/")}>Tuner</span>
        <input placeholder="Search" className="input" type="text" />
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
