import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const VideoIndexItem = props => {
    return (
        <div className="grid-item-container">
            <div className="video-thumbnail">
                <Link to={`/videos/${props.video.id}`}><img src={props.video.photoUrl} /></Link>
            </div>
            <div className="video-info-container">
                <div className="profile-thumbnail">
                    <span><FaUserCircle /></span>
                </div>
                <div className="video-info">
                    <h1>{props.video.title}</h1>
                    <div className="views-date">    
                        {/* <h1>{props.video.username}</h1> */}
                        <span>{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.upload_date}</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default VideoIndexItem