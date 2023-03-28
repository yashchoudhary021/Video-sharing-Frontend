// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// const Card = () => {
//   const [item, setItem] = useState([]);
//   const [limit, setLimit] = useState("")
//   const [btnName, setBtnName] = useState('View All');

//   //api call
//   useEffect(() => {
//     axios.get("https://tuner.onrender.com/")
//       .then((res) => {
//         // console.log(res.data.data)
//         setItem(res.data.data)
//       })
//   }, [])

//   //btn 
//   const Handlebtn = () => {
//     if (btnName === "View All") {
//       setBtnName('View Less')
//     } else {
//       setBtnName('View All')
//       setLimit(4)
//     }
//   }

//   return (
//     <>
//     <div className='btn-container'>
//         <button id='view-btn' onClick={Handlebtn} style={{ position: 'fixed' }}>{btnName}</button>
//       </div>
//     <div id="card-video-wrapper" style={{ display: "block" }}>
//       {item.map((res, i) => {
//         return (
//           <div key={i} className="card-video" >
//             <video src={res.video.vfile} height="200px" width="300px" controls></video>
//             <p>{res.video.name} [{res.video.category}]</p>
//           </div>
//         )
//       })}
//     </div>
//     </>
//   )
// }
// export default Card;


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Home.css'
const Card = () => {
  const [item, setItem] = useState([])
  const [btn,setBtn]=useState('View All')
  const [val,setVal] =useState(false)
  const Handlebtn = () => {
    if (!val) {
      setVal(true)
      setBtn('View Less')
    } else {
      setVal(false)
      setBtn('View All')
    }
  }
  useEffect(() => {
    axios.get("https://tuner.onrender.com/")
      .then((res) => {
        // console.log(res.data.data[0].video.vfile)
        console.log(res.data.data)
        // setItem(res.data.data[0].video.vfile)
        setItem(res.data.data)
      })
  }, [])
  return (
    <div id="card-main_containner_div">
      <div className='btn-container'>
        <button id='new-view-btn' onClick={Handlebtn}>{btn}</button>
      </div>
      <div className='card-video-container'>
      { val===false ? <>
        {item.slice(0,4).map((res,i) => {
        return <>
          <div key={i} className="card-video">
            <video src={res.video.vfile} height="200px" width="300px" controls ></video>
            <p>{res.video.name} [{res.video.category}]</p>
          </div>
        </>
      })}
      </>
      :
      <>
      {item.map((res,i) => {
        return <>
          <div key={i} className="card-video">
            <video src={res.video.vfile} height="200px" width="300px" controls></video>
            <p>{res.video.name} [{res.video.category}]</p>
          </div>
        </>
      })}
      </>
      }
      </div>
    </div>
  )
}
export default Card;




