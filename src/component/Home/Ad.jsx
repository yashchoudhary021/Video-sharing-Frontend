import React, { useState } from 'react'
import './Home.css'
const Ad = () => {
  const [val, setVal] = useState(false)
  const [btnName, setBtnName] = useState('View All')

  const [height,setHeight]= useState("40%");

  // const [Video,setVideo] =useState(false)
  const Handlebtn = () => {
    if (!val) {
      setVal(true)
      setBtnName('View Less')
      setHeight("20%")
    } else {
      setVal(false)
      setBtnName('View All')
    }
  }
  return (
    <div id='ad_mainDiv' style={{height: {height}}}>
      <div id='main-div'>
        {
          val === false ?
            <>
              <div className='container'>
                <div className='first'>Godzilla</div>
                <div >Attack in the city</div>
                <ul>
                  <li>10 Jan 2020</li>
                  <li>15 Mins</li>
                  <li>200 view</li>
                </ul>
                {/* <section id='FisrtPublisher'>Publisher Name</section> */}
              </div>
            </>
            :
            <>
              <div className='ad2-container'>
                <div className='second'>Godzilla</div>
                <div >Attack in the city</div>
                <ul>
                  <li>10 Jan 2020</li>
                  <li>15 Mins</li>
                  <li>200 view</li>
                </ul>
                {/* <section id='secondpublisher'>Publisher Name</section> */}
              </div>
            </>
        }
      </div>
      <div className='btn-container'>
        <button id='view-btn' onClick={Handlebtn}>{btnName}</button>
      </div>
    </div>
  )
}
export default Ad;