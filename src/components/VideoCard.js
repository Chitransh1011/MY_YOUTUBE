import React from 'react'

const VideoCard = ({info}) => {
    
  return (
    <div className='p-2 m-5 w-56 shadow-lg'>
        <img alt="thumbnail" className='rounded-xl' src={info?.snippet?.thumbnails?.medium?.url}></img>
        <ul>
            <li className='font-bold py-2'>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics?.viewCount +" "+"views"}</li>
            <li>{info?.statistics?.likeCount+" "+"👍"}</li>
        </ul>
    </div>
  )
}

export default VideoCard