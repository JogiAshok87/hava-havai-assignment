import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon.png'
import dashboard from '../assets/dashboard.png'

export default function Sidebar(){
    const navigate = useNavigate();

    function onServices(){
        navigate('/MainContent');
    }
    function onAirport(){
        navigate('/MainContent');
    }
    function onVideo(){
        navigate('/MainContent');
    }
    return(
    <div className="sidebar">
            <div className='home'>
                <img src={HomeIcon} alt="" />
                <p >Home</p>
                
            </div>
            <div className='dashboard'>
                <img src={dashboard}  alt="" />
                <p>Dashboard</p>

            </div>
        
            <div className="">
                <p  onClick = {onServices}>Services</p>
                <p  onClick={onAirport}>Airports</p>
                <p  onClick={onVideo}>Videos</p>
            </div>
        
    
            <div className='list-items'>
                <p >Others</p>
                <p>List1</p>
                <p>List2</p>
                <p>List3</p>
            </div>
    </div>
    
    )
}