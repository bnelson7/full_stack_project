import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { deleteVideo } from '../../actions/video_actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const VideoIndexItem = props => {
    const indexGrid = (
        <div className="grid-index-container">
            <div className="video-thumbnail">
                <Link to={`/videos/${props.video.id}`}><img src={props.video.thumbnailUrl} /></Link>
            </div>
            <div className="video-info-container">
                <div className="profile-thumbnail">
                    <span><FaUserCircle /></span>
                </div>
                <div className="video-info">
                    <h1>{props.video.title}</h1>
                    <div className="views-date">
                        {/* <h1>{props.video.creator.username}</h1> */}
                        <span>{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.created_at}</span>
                    </div>
                </div>
            </div>
        </div>
    )
    const showGrid = (
        <div className="grid-item-container">
            <div className="video-thumbnail">
                <Link to={`/videos/${props.video.id}`}><img src={props.video.thumbnailUrl} /></Link>
            </div>
            <div className="video-info-container">
                <div className="video-info">
                    <h1>{props.video.title}</h1>
                    <div className="views-date">
                        {/* <h1>{props.video.username}</h1> */}
                        <span>{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.created_at}</span>
                    </div>
                </div>
            </div>
        </div>
    )
    debugger
    return (
        props.path === `/videos/${props.video.id}` ? showGrid : indexGrid
    )   
}

export default VideoIndexItem;