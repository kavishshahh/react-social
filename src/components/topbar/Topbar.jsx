import React from 'react'
import './topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            {/* Topbar Left part */}
            <div className="topbarLeft">
                <span className='logo'>KavishSocial</span>
            </div>
            {/* Topbar center part */}
            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon className='searchIcon'/>
                    <input placeholder='Search for friends, Post or video' className="searchInput" />
                </div>
            </div>
            {/* Topbar right part */}
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatBubbleIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="../../assets/person/1.jpeg" alt="" className="topbarImg" />
            </div>
        </div>
    )
}
