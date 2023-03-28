import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import axios from 'axios';
import "./SearchPage.css"

const SearchPage = () => {
  const { keyword } = useParams();
  // console.log(keyword);
  const [data, SetData] = useState(null);
  const [enlargedVideo, setEnlargedVideo] = useState(null); 

  useEffect(() => {
    apiCall();
  }, [keyword]) 

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

  const handleVideoClick = (videoUrl) => {
    setEnlargedVideo(videoUrl);
  }

  return (
    <>
      <NavBar />
      <div id="searchPageVideoWrapper">
        {
          data && data.map((sData, i) => {
            return (
              <div key={i} className="searchPage-videoCard" onClick={() => handleVideoClick(sData.video.vfile)}>
                <video src={sData.video.vfile} height="200px" width="270px" controls></video>
                <p>{sData.video.name} [{sData.video.category}]</p>
              </div>
            )
          })
        }
      </div>
      {enlargedVideo && (
        <div className="enlargedVideoWrapper" onClick={() => setEnlargedVideo(null)}>
          <video src={enlargedVideo} height="500px" width="800px" controls></video>
        </div>
      )}
    </>
  )
}

export default SearchPage;





