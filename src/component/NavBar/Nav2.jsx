import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./nav.css";

function Nav2() {

  // For Upload Modal
  const [show, setShow] = useState(false);
  const [privacy, setPrivacy] = useState(0);
  const [catergory, setCatergory] = useState("Catergory")
  const [description, setDescription] = useState('')
  const [file, setFile] = useState();

  const handleChange = (e) => {
    setCatergory(e.target.value)
  }
  const handleChangePrivacy = (e) => {
    setPrivacy(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    console.log(file)
    console.log(description)
    console.log(privacy)
    console.log(catergory)
    // axios.post("http://localhost:8080/uploadfiles")
    setDescription("")
    setCatergory('')
    setPrivacy('')
    setShow(false)
  }
  const handleFile = (e) => {
    // console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  // For Sending token to backend

  const navigation = useNavigate()
  const handelSignOut = () => {
    const token = localStorage.getItem("loginToken");
    // console.log(token);
    axios.post("http://localhost:8080/logout", { token: token }).then((res) => {
      window.alert(res.data.msg);
      navigation("/sign")
      localStorage.clear("loginToken");
    }).catch((err) => {
      console.log(err);
      // window.alert("try later")
    })
  }
  return (<>
    <nav>
      <div className="Container">
        <span id="Nav2-heading" onClick={() => navigation("/")}>Tuner</span>
        <input placeholder="Search" className="input" type="text" />
        <Link className="btn-11 com-btn">My Videos</Link>
        <span className="com-btn">|</span>
        <Link to="/myvideos" className="btn-2 com-btn" onClick={() => setShow(true)}>Upload</Link>
        <span className="com-btn">|</span>
        <Link className="btn-3 com-btn" style={{color: "red"}} onClick={handelSignOut}>Sign out</Link>
      </div>
    </nav>
    {show && <div>
      <div className="wrapper"></div>
      <section className="Container-Section">
        <div>
          <form onSubmit={onSubmit}>
            <div id="heading">
              <h3>Upload New Video</h3>
              <button onClick={() => setShow(false)}>+</button>
            </div>
            <input type="file" name="video-file" id="video-file" onChange={handleFile} />
            <h1>Name</h1>
            <textarea name="description" value={description} onChange={handleDescription} placeholder="Description" id="description" cols="30" rows="10"></textarea>

            <div className="main-div">
              <div className="div-container" id="first-div">
                <label htmlFor="">Catergory</label><br />
                <select value={catergory} onChange={handleChange} id="Catergory">
                  <option >Catergory</option>
                  <option value="0">Sci-Fi</option>
                  <option value="1">Action</option>
                  <option value="2">Drama</option>
                </select>
              </div>
              <div className="div-container">
                <label htmlFor="">Visibility</label><br />
                <select id="Public" value={privacy} onChange={handleChangePrivacy}>
                  <option value="0">Public</option>
                  <option value="1">Private</option>
                </select>
              </div>
            </div>
            <button id="button-save" onSubmit={onSubmit}>Save</button>
          </form>
        </div>
      </section>
    </div>
    }
  </>);
}

export default Nav2;