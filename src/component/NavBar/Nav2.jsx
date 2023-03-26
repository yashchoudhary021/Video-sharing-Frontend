import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./nav.css";

function Nav2() {

  // For Upload Modal
  const [show, setShow] = useState(false);

  const [file, setFile] = useState();
  const [name,setName] = useState();
  const [description, setDescription] = useState('');
  const [catergory, setCatergory] = useState("Sci-Fi");
  const [privacy, setPrivacy] = useState("Public");


  const onSubmit = (e) => {
    e.preventDefault()
    const fromData = new FormData();
    const token = localStorage.getItem("loginToken");
    console.log(token);
    console.log(file);
    console.log(name,description,catergory,privacy);
    fromData.append("token",token);
    fromData.append("video",file);
    fromData.append("name",name);
    fromData.append("description",description);
    fromData.append("category",catergory);
    fromData.append("visibility",privacy);
    // console.log(fromData);
    axios.put("http://localhost:8080/myvideos",fromData,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }}).then((res)=>{console.log(res)})
    .catch((err)=>{console.log(err)})
    setShow(false)
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
            <div id="upload_heading">
              <h3>Upload New Video</h3>
              <button id="cross_btn" onClick={() => setShow(false)}>+</button>
            </div>

            <input type="file" name="video" id="video-file" onChange={(e)=>{setFile(e.target.files[0])}} />

            <label style={{color:"white"}}>Name</label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>

            <h1>Description</h1>
            <textarea name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} placeholder="Description" id="description" cols="30" rows="10" ></textarea>

            <div className="upload_category_div">
              <div className="div-container" id="first-div">
                <label htmlFor="category">Catergory</label><br />
                <select name="category" value={catergory} onChange={(e)=>{setCatergory(e.target.value)}} id="Catergory">
                  <label> Catergory </label>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Action">Action</option>
                  <option value="Drama">Drama</option>
                </select>
              </div>

              <div className="div-container">
              <label htmlFor="visibility">Visibility</label><br />
                <select name='visibility' id="Public" value={privacy} onChange={(e)=>{setPrivacy(e.target.value)}}>
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