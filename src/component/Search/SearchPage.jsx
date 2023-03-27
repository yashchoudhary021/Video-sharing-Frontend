import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';

const SearchPage = () => {
  const { keyword } = useParams();
  // console.log(keyword);
  const [data,SetData]= useState(null);

  useEffect(() => {
    apiCall();
  })
  const apiCall = () => {
    axios.get('https://tuner.onrender.com/search', {
      params: {
        keyword: keyword
      }
    }).then((res) => {
      console.log(res.data.data)
      SetData(res.data.data)
    })
  }

  return (
    <>
      <NavBar />
      <div>
        {
          data && data.map((sData,i)=>{
            return (
              <div key={i} className="card-video" >
                <video src={sData.video.vfile} height="200px" width="300px" controls></video>
                <p>{sData.video.name} [{sData.video.category}]</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default SearchPage
