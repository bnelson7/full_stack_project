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
        super(props)
        
        this.state = {
            collapsed: true,
            liked: false,
            disliked: false,
            likeableId: this.props.match.params.videoId,
            likeableType: 'Video'
        }
        
        this.handleLike = this.handleLike.bind(this)
        this.toggleLike = this.toggleLike.bind(this)
        this.handleInfo = this.handleInfo.bind(this)
    }

    componentDidMount() {
        this.props.requestVideos()
        .then(() => {
            this.props.requestVideo(this.props.match.params.videoId)
        })
        .then(() => {
            debugger
            this.props.requestUser(this.props.currentUser.id)
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.requestVideo(this.props.match.params.videoId)
        }

        if ((prevState.liked !== this.state.liked) || prevState.disliked !== this.state.disliked) {
            if (this.props.alreadyLiked) {
                debugger
                // const deleteLike = Object.assign({}, this.state.likeId)
                this.props.deleteVideoLike(this.props.currentUser.id, this.props.match.params.videoId)
                .then(() => {
                    debugger
                    // this.setState({ likeId: null })
                    const formData = new FormData()
                    formData.append('video[likes]', null)
                    this.props.updateVideo(formData, this.props.match.params.videoId)
                    this.props.updateUser(formData, this.props.currentUser.id)
                })
            } else {
                const likedVideo = Object.assign({}, this.state)
                this.props.createVideoLike(likedVideo)
                .then(like => {
                    // this.setState({ likeId: like.like.id })
                    const formData = new FormData()
                    const user = new FormData()
                    formData.append('video[likes]', like.like)
                    formData.append('user[likes]', like.like)
                    this.props.updateVideo(formData, like.like.likeableId)
                    this.props.updateUser(user, this.props.currentUser.id)
                })
            }
        }
    }

    handleLike(e) {
        e.preventDefault();
        const { currentUser, history } = this.props
        if (currentUser) {
            e.currentTarget.value === "liked" ? this.setState({ liked: !this.state.liked }) : this.setState({ disliked: !this.state.disliked })
        } else {
            history.push("/login")
        }
    }

    toggleLike() {
        const { video } = this.props
        if (this.state.likeId && this.state.liked) {
           return (
               <div className="video-title-icons">
                   <div>
                    <div className="liked-btns-border-liked">
                        <button onClick={this.handleLike} value="liked">
                            <span id="video-title-icon-liked"><IoMdThumbsUp /></span>
                            <span id="video-title-text-liked">{video.likes.like ? video.likes.like : null}</span>
                        </button>
                        <button onClick={this.handleLike} value="disliked">
                            <span id="video-title-icon"><IoMdThumbsDown /></span>
                            <span id="video-title-text">{video.likes.dislike ? video.likes.dislike : null}</span>
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
           )
        } else if (this.state.likeId && this.state.disliked) {
            return (
                <div className = "video-title-icons" >
                    <div className="liked-btns-border-liked">
                        <button onClick={this.handleLike} value="liked">
                            <span id="video-title-icon"><IoMdThumbsUp /></span>
                            <span id="video-title-text">{video.likes.like ? video.likes.like : null}</span>
                        </button>
                        <button onClick={this.handleLike} value="disliked">
                            <span id="video-title-icon-liked"><IoMdThumbsDown /></span>
                            <span id="video-title-text-liked">{video.likes.dislike ? video.likes.dislike : null}</span>
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
            )
        } else {
            debugger
            return (
                <div className="video-title-icons">
                    <div className="liked-btns-border">
                        <button onClick={this.handleLike} value="liked">
                            <span className="liked" id="video-title-icon"><IoMdThumbsUp /></span>
                            <span className="liked" id="video-title-text">{video.likes.like ? video.likes.like : null}</span>
                        </button>
                        <button onClick={this.handleLike} value="disliked">
                            <span id="video-title-icon"><IoMdThumbsDown /></span>
                            <span id="video-title-text">{video.likes.dislike ? video.likes.dislike : null}</span>
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
            )
        }
    }

    handleInfo(e) {
        e.preventDefault();
        this.setState({ collapsed: !this.state.collapsed })
    }
 
    render() {
        const { video, videos, videoId, path} = this.props
        if (!video || !video.clipUrl) return null
  
        console.log(this.state)
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
                            {this.toggleLike()}
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
                                    {this.state.collapsed ? 
                                    <button onClick={this.handleInfo}>SHOW MORE</button> :
                                    <div className="info-category-container">
                                        <div className="info-category">
                                            Category<span>Advertising</span>
                                        </div>
                                        <button onClick={this.handleInfo}>SHOW LESS</button>
                                    </div>}
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
                            {videos.slice(0, 1).map(video => <li className="suggested-grid-item" key={video.id}><VideoIndexItem video={video} path={path}/></li>)}
                        </div>
                        <hr id="related-hr"/>
                        <div className="suggested-videos">
                            {videos.filter(video => video.id !== videoId).slice(1).map(video => <li className="suggested-grid-item" key={video.id}><VideoIndexItem video={video} path={path}/></li>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;