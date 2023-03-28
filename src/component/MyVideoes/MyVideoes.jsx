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
        // console.log(res.data)
        // console.log(res.data.data)
        setUser(res.data)
        setData(res.data.data)
      }).catch((err) => {
        window.alert("You didn't Upload Any Video Till Now")
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
      <div >
        {data.map((sData, i) => {
          return (
            < div key={i} class="myvideo-video">
              <video src={sData.video.vfile} height="300px" width="300px" controls></video>
              <p>{sData.video.name} &nbsp;&nbsp;&nbsp; [{sData.video.visibility}]</p>
              <div className="myvideo-video-info">
                <video src={sData.video.vfile} height="500px" width="500px" controls ></video>
                <p >{sData.video.name} &nbsp;&nbsp;&nbsp; [{sData.video.visibility}]</p>
                <p>{sData.video.description}</p>
                <img src={user.userDp} alt={user.userName} style={{height: "50px", borderRadius: "50%"}}/>
                <p style={{color:"black", fontSize:"1.2rem" ,marginTop: "2px"}}>Uploaded By:: {user.userName}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default MyVideoes;

// import React, { useEffect, useState } from 'react'
// import NavBar from '../NavBar/NavBar'
// import axios from 'axios';
// import "./style.css"

// const MyVideoes = () => {
//   const [data, setData] = useState([])
//   const [user, setUser] = useState([]);
//   const token = localStorage.getItem("loginToken");

//   useEffect(() => {
//     axios.post("https://tuner.onrender.com/myvideos", { token: token })
//       .then((res) => {
//         setUser(res.data)
//         setData(res.data.data)
//       }).catch((err) => {
//         console.log(err)
//       })
//   }, [token])

//   return (
//     <>
//       <NavBar />
//       <div>
//         <img src={user.userDp} alt={user.userName} style={{ borderRadius: "50%", display: "block", margin: "auto", marginTop: "5%" }} height="80px" width="80px" />
//         <br />
//         <p style={{ textAlign: "center" }} >{user.userName}</p>
//       </div>
//       <div className="myvideo-container">
//         {data.map((sData, i) => (
//           <div key={i} className="myvideo-video">
//             <video src={sData.video.vfile} height="300px" width="300px" controls ></video>
//             <p>{sData.video.name} &nbsp;&nbsp;&nbsp; [{sData.video.visibility}]</p>
//             <div className="myvideo-video-info">
//               <p>{sData.video.name} &nbsp;&nbsp;&nbsp; [{sData.video.visibility}]</p>
//               <p>{sData.video.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

// export default MyVideoes;







