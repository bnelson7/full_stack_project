import React from 'react'
import { Link } from 'react-router-dom'

const VideoIndexItem = props => {

    return (
        <div className="index-item-container">
            <Link to={`/videos/${props.video.id}`}><img src={props.video.uploadUrl}/></Link>
            <div className="item-info">
                {props.video.title}
                {props.video.views}
            </div>
        </div>
    )
   
}

export default VideoIndexItem