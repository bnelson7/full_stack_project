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
    //                     <span>{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.createdAt}</span>
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
    //                 <span id="views-date-show">{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.createdAt}</span>
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
                            <span>{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.createdAt}</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : props.path.includes('/videos') ? (
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
                        <span id="views-date-show">{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.createdAt}</span>
                    </div>
                </div>
            </div>
        ) : (
            <div className="grid-item-search-container">
                <div className="video-thumbnail-search">
                    <Link to={`/videos/${props.video.id}`}><img src={props.video.thumbnailUrl} /></Link>
                </div>
                <div className="video-search-info-container">
                    <div className="video-search-info">
                        <div className="title-user-search">
                            <h1 id="search-title">{props.video.title}</h1>
                            <h1 id="search-user">{props.video.creator.username}&nbsp;<span className="verified"><MdCheckCircle /></span>&nbsp;&nbsp;<span id="title-user-search">{props.video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{props.video.createdAt}</span></h1>
                        </div>
                        <div >
                            <span id="description-search">{props.video.description}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    )   
}

export default VideoIndexItem;