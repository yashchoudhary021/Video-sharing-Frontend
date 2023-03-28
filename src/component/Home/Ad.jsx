import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

const Ad = () => {
  // const [val, setVal] = useState(false)
  // const [btnName, setBtnName] = useState('View All')


  // const Handlebtn = () => {
  //   if (!val) {
  //     setVal(true)
  //     setBtnName('View Less')
  //   } else {
  //     setVal(false)
  //     setBtnName('View All')
  //   }
  // }

  const [item, setItem] = useState("")
  useEffect(() => {
    axios.get("https://tuner.onrender.com/")
      .then((res) => {
        console.log(res.data.data.length);
        const x = Math.floor(Math.random() * res.data.data.length)
        // console.log(res.data.data[2].video.vfile);
        setItem(res.data.data[x].video);
      })
  }, [])

  return (
    <>
      {/* <div id='main-div'> */}
      {/* { */}
      {/* val === false ? */}
      <>
        <div className='ad1-container'>
          <video src={item.vfile}></video>
          <div className='first'>{item.name}</div>
          <p>{item.category} &nbsp;&nbsp; [{item.visibility}]</p>
          <ul>
            <li>29 Jan 2023</li>
            <li>0.15 Mins</li>
            <li>200 view</li>
          </ul>
        </div>
      </>
      {/* :
      <>
        <div className='ad2-container'>
          <video src={item.vfile}></video>
          <div className='second'>{item.name}</div>
          <p >{item.category} &nbsp;&nbsp; [{item.visibility}]</p>
          <ul>
            <li>29 Jan 2023</li>
            <li>0.15 Mins</li>
            <li>200 view</li>
          </ul>
        </div>
      </> */}
      {/* }
      </div> */}
      {/* <div className='btn-container'>
        <button id='view-btn' onClick={Handlebtn} style={{ position: 'fixed' }}>{btnName}</button>
      </div> */}
    </>
  )
}
export default Ad;

