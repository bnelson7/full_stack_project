import React from 'react'
import { Link } from 'react-router-dom'

const VideoIndexItem = props => {

    return (
        <div>
            <div className="video-image"><Link to={`/videos/${props.video.id}`}><img src={props.video.uploadUrl} /></Link></div>

            <div className="video-info">
                <div className="video-title">{props.video.title}</div>
                {/* <div className="video-user">{props.video.userId}</div> */}
                {/* <div className="video-profile-pic">{props.video.userId.avatar}</div> */}
                <div className="video-views">{props.video.views}K views<i class="fas fa-dot-circle"></i></div>
                <div className="video-date">{props.video.upload_date}</div>
            </div>

            <div className="profile-thumbnail"><i class="far fa-user-circle"></i></div>
        </div>
    )
   
}

export default VideoIndexItem