import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios';
import "./style.css"

const MyVideoes = () => {
  const [data, setData] = useState([])
  const [user, setUser] = useState([]);
  const token = localStorage.getItem("loginToken");
  // console.log(token)
  useEffect(() => {
    axios.post("https://tuner.onrender.com/myvideos", { token: token })
      .then((res) => {
        // console.log(res.data.data[0].video.vfile)
        // console.log(res.data.userDp)
        console.log(res.data.data)
        setUser(res.data)
        setData(res.data.data)
      }).catch((err) => {
        console.log(err)
      })
  }, [token])
  return (
    <>
      <NavBar />
      <div>
        <img src={user.userDp} alt={user.userName} style={{ borderRadius: "50%", display: "block", margin: "auto", marginTop: "5%" }} height="80px" width="80px" />
        <br />
        <p style={{ textAlign: "center" }} >{user.userName}</p>
      </div>
      <div>
        {data.map((sData, i) => {
          return (
            <div key={i} class="myvideo-video">
              <video src={sData.video.vfile} height="300px" width="300px" controls ></video>
              <p>{sData.video.name} &nbsp;&nbsp;&nbsp; [{sData.video.visibility}]</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default MyVideoes;







