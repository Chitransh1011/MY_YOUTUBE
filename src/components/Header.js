import React from 'react'
import { useDispatch } from 'react-redux'
import { sideBarToggle } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();
    const handleToggle = ()=>{
        dispatch(sideBarToggle());
    }
  return (
    <div className='grid grid-flow-col p-5 shadow-xl'>
        <div className='flex col-span-1 px-5'>
            <img onClick={()=>handleToggle()} className='h-8 cursor-pointer' alt='handburger' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'></img>
            <img className='h-8 mx-2' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png'></img>
    
        </div>
        <div className='col-span-10'>
            <input className='border border-gray-600 w-1/2 p-2 rounded-l-full' type='text'></input>
            <button className='border border-gray-600 p-2 rounded-r-full'>Search</button>
        </div>
        <div>
            <img className='h-8' alt='user-icon' src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg'></img>
        </div>
    </div>
  )
}

export default Header