import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./nav.css";

function Nav2() {

  const navigate = useNavigate()

  // For Upload Modal
  const [show, setShow] = useState(false);

  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState('');
  const [catergory, setCatergory] = useState("Sci-Fi");
  const [privacy, setPrivacy] = useState("Public");


  //Uploading Video
  const onSubmit = (e) => {
    e.preventDefault()
    const fromData = new FormData();
    const token = localStorage.getItem("loginToken");
    // console.log(token);
    // console.log(file);
    // console.log(name, description, catergory, privacy);
    fromData.append("token", token);
    fromData.append("video", file);
    fromData.append("name", name);
    fromData.append("description", description);
    fromData.append("category", catergory);
    fromData.append("visibility", privacy);

    axios.put("https://tuner.onrender.com/myvideos", fromData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    }).then((res) => {
      if (res.status === 200) {
        window.alert(res.data.message)
        navigate("/")
      }
    }).catch((err) => { 
      console.log(err);
      window.alert("OOPS!!! Uploading Failed")
    })
    setShow(false)
  }

  // For Sending token to backend
  
  const handelSignOut = () => {
    const token = localStorage.getItem("loginToken");
    // console.log(token);
    axios.post("https://tuner.onrender.com/logout", { token: token }).then((res) => {
      window.alert(res.data.msg);
      navigate("/sign")
      localStorage.clear("loginToken");
    }).catch((err) => {
      console.log(err);
      // window.alert("try later")
    })
  }

  //Search Function

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
        <span id="Nav2-heading" onClick={() => navigate("/")}>Tuner</span>
        <input placeholder="Search" className="input" type="text" onChange={(e)=> setSearchTerm(e.target.value)} onKeyDown={handleKeyDown} value={searchTerm}/>
        <Link to="/myvideos" className="btn-11 com-btn">My Videos</Link>
        <span className="com-btn">|</span>
        <Link to="/myvideos" className="btn-2 com-btn" onClick={() => setShow(true)}>Upload</Link>
        <span className="com-btn">|</span>
        <Link className="btn-3 com-btn" style={{ color: "red" }} onClick={handelSignOut}>Sign out</Link>
      </div>
    </nav>
    {show && <div>
      <div className="wrapper"></div>
      <section className="Container-Section">
        <div>
          <form onSubmit={onSubmit}>
            <div id="upload_heading">
              <h3>Upload New Video</h3>
              <button id="cross_btn" onClick={() => setShow(false)}>+</button>
            </div>

            <input type="file" name="video" id="video-file" onChange={(e) => { setFile(e.target.files[0]) }} />

            <label style={{ color: "white"}}>Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />

            <textarea name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} placeholder="Description" id="description" cols="30" rows="10" style={{marginTop:"20px"}}></textarea>

            <div className="upload_category_div">
              <div className="div-container" id="first-div">
                <label htmlFor="category">Catergory</label><br />
                <select name="category" value={catergory} onChange={(e) => { setCatergory(e.target.value) }} id="Catergory">
                  <label> Catergory </label>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                </select>
              </div>

              <div className="div-container">
                <label htmlFor="visibility">Visibility</label><br />
                <select name='visibility' id="Public" value={privacy} onChange={(e) => { setPrivacy(e.target.value) }}>
                  <label>Visibility</label><br />
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
              </div>
            </div>

            <button id="button-save" >Save</button>

          </form>
        </div>
      </section>
    </div>
    }
  </>);
}

export default Nav2;