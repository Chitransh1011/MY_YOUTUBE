import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { formatDistanceToNow } from "date-fns";
import { Link } from 'react-router-dom';
const SearchPage = () => {
  const items = useSelector((store)=>store.searchpage);
  
 if (!items || items.length === 0) {
    return <div className="text-center mt-10">No items found.</div>;
  }
  return (
    <div>
      {items.map((item)=>{
        const {snippet,id} = item;
        const publishedAt = snippet?.publishedAt;
        const timeAgo = formatDistanceToNow(new Date(publishedAt), { addSuffix: true });
        return(
          <Link to={"/watch?v="+id?.videoId} key={id?.videoId}>
          <div  className='flex border border-gray-400 p-2 mx-4 my-8 bg-gray-200 shadow-xl cursor-pointer'>
            <img className=' mr-4 my-4 rounded-xl w-96 h-56' src={snippet?.thumbnails?.medium?.url}></img>
            <div className='mt-8 flex flex-col'>
                <p className='font-bold text-xl'>{snippet?.title}</p>
                <p>{timeAgo}</p>
                <p className='mt-6'>{snippet?.description}</p>
            </div>
          </div>
          </Link>
        );
      })}
      
    </div>
  )
}

export default SearchPage