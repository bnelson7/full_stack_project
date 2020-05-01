import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdCheckCircle } from 'react-icons/md'
import { deleteVideo } from '../../actions/video_actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const VideoIndexItem = props => {
    // debugger
    // const indexGrid = (
    //     <div className="grid-index-container">
    //         <div className="video-thumbnail">
    //             <Link to={`/videos/${props.video.id}`}><img src={props.video.thumbnailUrl} /></Link>
    //         </div>
    //         <div className="video-info-container" role="group">
    //             <div className="profile-thumbnail">
    //                 <span><img src={props.video.creator.photoUrl} /></span>
    //             </div>
    //             <div className="video-info">
    //                 <h1>{props.video.title}</h1>
    //                 <div className="views-date">
    //                     <h1>{props.video.creator.username}&nbsp;<span className="verified"><MdCheckCircle /></span></h1>
    //                     <span>{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.created_at}</span>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    // const showGrid = (
    //     <div className="grid-item-container">
    //         <div className="video-thumbnail-show">
    //             <Link to={`/videos/${props.video.id}`}><img src={props.video.thumbnailUrl} /></Link>
    //         </div>
    //         <div className="video-show-info-container">
    //             <div className="video-show-info">
    //                 <h1 id="show-title">{props.video.title}</h1>
    //                 <div className="views-date-show">
    //                     <h1 id="show-user">{props.video.creator.username}&nbsp;<span className="verified"><MdCheckCircle /></span></h1>
    //                 </div>
    //                 <span id="views-date-show">{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.created_at}</span>
    //             </div>
    //         </div>
    //     </div>
    // )
    debugger
    console.log(props.path)
    return (
        props.path === `/` ? (
            <div className="grid-index-container">
                <div className="video-thumbnail">
                    <Link to={`/videos/${props.video.id}`}><img src={props.video.thumbnailUrl} /></Link>
                </div>
                <div className="video-info-container" role="group">
                    <div className="profile-thumbnail">
                        <span><img src={props.video.creator.photoUrl} /></span>
                    </div>
                    <div className="video-info">
                        <h1>{props.video.title}</h1>
                        <div className="views-date">
                            <h1>{props.video.creator.username}&nbsp;<span className="verified"><MdCheckCircle /></span></h1>
                            <span>{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.created_at}</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className="grid-item-container">
                <div className="video-thumbnail-show">
                    <Link to={`/videos/${props.video.id}`}><img src={props.video.thumbnailUrl} /></Link>
                </div>
                <div className="video-show-info-container">
                    <div className="video-show-info">
                        <h1 id="show-title">{props.video.title}</h1>
                        <div className="views-date-show">
                            <h1 id="show-user">{props.video.creator.username}&nbsp;<span className="verified"><MdCheckCircle /></span></h1>
                        </div>
                        <span id="views-date-show">{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.created_at}</span>
                    </div>
                </div>
            </div>
        )
    )   
}

export default VideoIndexItem;