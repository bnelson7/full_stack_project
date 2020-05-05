import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import VideoIndexItem from './video_index_item'
import { IoMdThumbsUp, IoMdThumbsDown, IoMdShareAlt } from 'react-icons/io'
import { MdPlaylistAdd, MdMoreHoriz, MdCheckCircle } from 'react-icons/md'
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexContainer from '../comments/comment_index_container'

class VideoShow extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            collapsed: true
        }

    }

    componentDidMount() {
        debugger
        this.props.requestVideo(this.props.match.params.videoId)
    }

    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.requestVideo(this.props.match.params.videoId)
            this.props.requestComments(this.props.match.params.videoId)
        }

    }

    render() {
        const { video, videos, videoId, path } = this.props
        debugger
        if (!video || !video.clipUrl) return null
        debugger
        return (
            <div className="background">
                <div className="page-container">
                    <div className="show-comment-container">
                        <div className="video-container">
                            <video controls autoPlay >
                                <source type="video/mp4" src={video.clipUrl} />
                            </video>
                        </div>
                        <div className="video-title">
                            <div className="video-title-info">
                                <h1>{video.title}</h1>
                                <span>{video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{video.createdAt}</span>
                            </div>
                            <div className="video-title-icons">
                                <div>
                                    <button>
                                        <span id="video-title-icon"><IoMdThumbsUp /></span>
                                        <span id="video-title-text">14K</span>
                                    </button>
                                    <button>
                                        <span id="video-title-icon"><IoMdThumbsDown /></span>
                                        <span id="video-title-text">1K</span>
                                    </button>
                                    <button>
                                        <span id="video-title-icon"><IoMdShareAlt /></span>
                                        <span id="video-title-text">SHARE</span>
                                    </button>
                                    <button>
                                        <span id="video-title-icon"><MdPlaylistAdd /></span>
                                        <span id="video-title-text">SAVE</span>
                                    </button>
                                </div>
                                    <button className="horiz-dots">
                                        <span id="video-title-icon"><MdMoreHoriz /></span>
                                    </button>
                            </div>
                        </div>
                        <div className="video-description-container">
                            <div className="profile-thumbnail-show">
                                <span><img src={video.creator.photoUrl} /></span>
                            </div>
                            <div className="video-description-text">
                                <div className="video-description-title">
                                    <h1>{video.creator.username}&nbsp;<span className="verified"><MdCheckCircle /></span></h1>
                                    <p>no subscribers</p>
                                </div>
                                <div className="video-description">
                                    {video.description}
                                    <br/><span>SHOW MORE</span>
                                </div>
                            </div>
                            <button className="subscribe-btn">SUBSCRIBE</button>
                        </div>
                        <CommentFormContainer />
                        <CommentIndexContainer />
                    </div>
                    <div className="related-container">
                        <div className="upnext-video">
                            <h1>Up next</h1>
                            {videos.slice(0, 1).map(video => <li className="suggested-grid-item"><VideoIndexItem key={video.id} video={video} path={path}/></li>)}
                        </div>
                        <hr id="related-hr"/>
                        <div className="suggested-videos">
                            {videos.filter(video => video.id !== videoId).slice(1).map(video => <li className="suggested-grid-item"><VideoIndexItem key={video.id} video={video} path={path}/></li>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;