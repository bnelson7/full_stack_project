import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import VideoIndexItem from './video_index_item'
import { IoMdThumbsUp, IoMdThumbsDown, IoMdShareAlt } from 'react-icons/io'
import { MdPlaylistAdd, MdMoreHoriz, MdCheckCircle, MdNotificationsNone } from 'react-icons/md'
import CommentFormContainer from '../comments/comment_form_container'
import CommentIndexContainer from '../comments/comment_index_container'
import { Link } from 'react-router-dom'

class VideoShow extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: true,
            sorted: null
        }
        
        this.handleLike = this.handleLike.bind(this)
        this.toggleLike = this.toggleLike.bind(this)
        this.handleInfo = this.handleInfo.bind(this)
        this.getDate = this.getDate.bind(this)
        this.handleCommentSort = this.handleCommentSort.bind(this)
        this.handleSubscribe = this.handleSubscribe.bind(this)
        this.handleUnsubscribe = this.handleUnsubscribe.bind(this)
    }

    componentDidMount() {
        this.props.requestVideos()
            .then(() => {
                // this.props.currentUser && 
                // this.props.requestCurrentUser(this.props.currentUser.id)
                this.props.requestVideo(this.props.match.params.videoId)
                    // .then(() => {
                    //     
                    //     this.props.video.channelId && 
                    //     this.props.requestChannel(this.props.video.channelId)
                    // })
            })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.requestVideos()
            .then(() => {
                this.props.requestVideo(this.props.match.params.videoId)
            })
        }
    }

    componentWillUnmount() {
        this.props.closeModal()
    }

    handleLike(e) {
        e.preventDefault();
        const { currentUser, history, match, liked, disliked, currentChannel } = this.props
        const createLike = (liked, disliked) => {
            let like = { likeableId:  match.params.videoId, likeableType: 'Video', liked: liked, disliked: disliked}
            return like
        }
        if (currentUser) {
            let clicked = e.currentTarget.value
            
            if ((clicked === 'liked' || clicked === 'disliked') && !liked && !disliked) {
                let likedVideo = clicked === 'liked' ? createLike(true, false) : createLike(false, true)
                this.props.createVideoLike(likedVideo)
                .then(like => {
                    const formData = new FormData()
                    formData.append('video[likes]', like.like)
                    this.props.updateVideo(formData, this.props.match.params.videoId)
                    this.props.requestCurrentChannel(this.props.currentChannel.id)
                })
            } else if ((clicked === 'liked' && liked) || (clicked === 'disliked' && disliked)) {
                this.props.deleteVideoLike(this.props.like.id)
                .then(() => { 
                    const formData = new FormData()
                    formData.append('video[likes]', null)
                    this.props.updateVideo(formData, this.props.match.params.videoId)
                    this.props.requestCurrentChannel(this.props.currentChannel.id)
                })
            } else {
                this.props.deleteVideoLike(this.props.like.id)
                .then(() => {
                    let likedVideo = (clicked === 'liked') ? createLike(true, false) : createLike(false, true)
                    this.props.createVideoLike(likedVideo)
                    .then(like => {
                        const formData = new FormData()
                        formData.append('video[likes]', like.like)
                        this.props.updateVideo(formData, this.props.match.params.videoId)
                        this.props.requestCurrentChannel(this.props.currentChannel.id)
                    })
                })
            }
        } else {
            history.push("/login")
        }
    }

    toggleLike() {
        const { video, liked, disliked } = this.props
        if (liked) {
           return (
               <div className="video-title-icons">
                    <div className="liked-btns-border-liked">
                        <button onClick={this.handleLike} value="liked">
                            <span id="video-title-icon-liked">
                                <IoMdThumbsUp />
                            </span>
                            <span id="video-title-text-liked">
                                {video.likes.like}
                            </span>
                        </button>
                        <button onClick={this.handleLike} value="disliked">
                            <span id="video-title-icon">
                                <IoMdThumbsDown />
                            </span>
                            <span id="video-title-text">
                                {video.likes.dislike}
                            </span>
                        </button>
                        <button>
                            <span id="video-title-icon">
                                <IoMdShareAlt />
                            </span>
                            <span id="video-title-text">
                                SHARE
                            </span>
                        </button>
                        <button>
                            <span id="video-title-icon">
                                <MdPlaylistAdd />
                            </span>
                            <span id="video-title-text">
                                SAVE
                            </span>
                        </button>
                    </div>
                    <button className="horiz-dots">
                        <span id="video-title-icon">
                            <MdMoreHoriz />
                        </span>
                    </button>
               </div>
           )
        } else if (disliked) {
            return (
                <div className = "video-title-icons" >
                    <div className="liked-btns-border-liked">
                        <button onClick={this.handleLike} value="liked">
                            <span id="video-title-icon">
                                <IoMdThumbsUp />
                            </span>
                            <span id="video-title-text">
                                {video.likes.like
                            }</span>
                        </button>
                        <button onClick={this.handleLike} value="disliked">
                            <span id="video-title-icon-liked">
                                <IoMdThumbsDown />
                            </span>
                            <span id="video-title-text-liked">
                                {video.likes.dislike}
                            </span>
                        </button>
                        <button>
                            <span id="video-title-icon">
                                <IoMdShareAlt />
                            </span>
                            <span id="video-title-text">
                                SHARE
                            </span>
                        </button>
                        <button>
                            <span id="video-title-icon">
                                <MdPlaylistAdd />
                            </span>
                            <span id="video-title-text">
                                SAVE
                            </span>
                        </button>
                    </div>
                    <button className="horiz-dots">
                        <span id="video-title-icon">
                            <MdMoreHoriz />
                        </span>
                    </button>
               </div>
            )
        } else {
            return (
                <div className="video-title-icons">
                    <div className="liked-btns-border">
                        <button onClick={this.handleLike} value="liked">
                            <span className="liked" id="video-title-icon">
                                <IoMdThumbsUp />
                            </span>
                            <span className="liked" id="video-title-text">
                                {video.likes.like}
                            </span>
                        </button>
                        <button onClick={this.handleLike} value="disliked">
                            <span id="video-title-icon">
                                <IoMdThumbsDown />
                            </span>
                            <span id="video-title-text">
                                {video.likes.dislike}
                            </span>
                        </button>
                        <button>
                            <span id="video-title-icon">
                                <IoMdShareAlt />
                            </span>
                            <span id="video-title-text">
                                SHARE
                            </span>
                        </button>
                        <button>
                            <span id="video-title-icon">
                                <MdPlaylistAdd />
                            </span>
                            <span id="video-title-text">
                                SAVE
                            </span>
                        </button>
                    </div>
                    <button className="horiz-dots">
                        <span id="video-title-icon">
                            <MdMoreHoriz />
                        </span>
                    </button>
                </div>
            )
        }
    }

    handleInfo(e) {
        e.preventDefault();
        // this.setState({ collapsed: !this.state.collapsed })
        const collapse = document.querySelector(".info-category-container")
        if (collapse.style.display === "block") {
            
            $(".info-category-container").css("display", "")
            $("#show-more").css("display", "block")
            $("#show-less").css("display", "")
        } else {
            
            $(".info-category-container").css("display", "block")
            $("#show-more").css("display", "none")
            $("#show-less").css("display", "block")
        }
    }

    getDate() {
        const { video } = this.props
        // let date = (video.createdAt === video.updatedAt) ? new Date(`${video.createdAt}`) : new Date(`${video.updatedAt}`)
        let date = new Date(`${video.createdAt}`)
        let month = date.getMonth()
        let day = date.getDate()
        let year = date.getFullYear()
        const options = { year: 'numeric', month: 'long', day: 'numeric'}
        let uploadDateformatted = new Date(year, month, day)
        const newDateTimeFormat = Intl.DateTimeFormat('en-US', options)
        return newDateTimeFormat.format(uploadDateformatted)
    }

    handleCommentSort(e) {
        e.preventDefault();
        this.setState({ sorted: e.currentTarget.textContent })
    }

    handleSubscribe(e) {
        e.preventDefault();
        const { currentUser, history, video } = this.props
        
        
        if (!currentUser) {
            history.push("/login")
        } else {
            const subscription = { channelId: video.channel.id, subscriber_id: this.props.currentChannel.id }

            this.props.createSubscription(subscription)
                // .then(() => {
                //     
                //     this.props.requestChannel(video.channel.id)
                // })
        }
    }    

    handleUnsubscribe(e) {
        e.preventDefault();
        const { video } = this.props
        const subscription = { id: video.channel.id, subscriber_id: this.props.currentChannel.id }
        
        this.props.deleteSubscription(subscription)
            // .then(() => {
            //     
            //     this.props.requestChannel(video.channel.id)
            // })
    }

    render() {
        const { video, videos, videoId, path, channel, currentUser } = this.props
        if (!video || !video.clipUrl) return null
        
        const filteredVideos = videos.filter(video => video.id !== parseInt(videoId))
     
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
                                <span>{video.views} views&nbsp;
                                    <span><GoPrimitiveDot /></span>&nbsp;
                                    {this.getDate()}
                                </span>
                            </div>
                            {this.toggleLike()}
                        </div>
                        <div className="video-description-container">
                            <div className="profile-thumbnail-show">
                                <span>   
                                    <Link to={`/channels/${video.channel.id}`}>
                                        {video.channel.logoUrl ? 
                                        <img src={video.channel.logoUrl} /> : 
                                        <img src={window.user} />}
                                    </Link>
                                </span>
                            </div>
                            <div className="video-description-text">
                                <div className="video-description-title">
                                    <h1>
                                        {video.channel.name}&nbsp;
                                        <span className="verified">
                                            <MdCheckCircle />
                                        </span>
                                    </h1>
                                    <span>
                                        {this.props.subscribers === 0 ? "No subscribers" :
                                        this.props.subscribers === 1 ? "1 subscriber" :
                                        `${this.props.subscribers} subscribers`}
                                    </span>
                                </div>
                                <div className="video-description">
                                    {video.description}
                                    <button id="show-more" onClick={this.handleInfo}>
                                        SHOW MORE
                                    </button>
                                </div>
                                <div className="info-category-container">
                                    <div className="info-category">
                                        Category
                                        <span>
                                            Advertising
                                        </span>
                                    </div>
                                    <button id="show-less" onClick={this.handleInfo}>
                                        SHOW LESS
                                    </button>
                                </div>
                            </div>
                            {!this.props.subscribed ?
                            <button className="subscribe-btn" onClick={this.handleSubscribe}>
                                SUBSCRIBE
                            </button> : 
                            <div className="subscribed-btns-container">
                                <button className="subscribed-btn" onClick={this.handleUnsubscribe}>
                                    SUBSCRIBED
                                </button>
                                <button className="subscribed-notification">
                                    <MdNotificationsNone />
                                </button>
                            </div>}
                        </div>
                        <CommentFormContainer handleCommentSort={this.handleCommentSort}/>
                        <CommentIndexContainer sorted={this.state.sorted} />
                    </div>
                    <div className="related-container">
                        <div className="upnext-video">
                            <h1>Up next</h1>
                            {filteredVideos.slice(0, 1).map(video => 
                                <li className="suggested-grid-item" key={video.id}>
                                    <VideoIndexItem video={video} path={path}/>
                                </li>)}
                        </div>
                        <hr id="related-hr"/>
                        <div className="suggested-videos">
                            {filteredVideos.slice(1).map(video => 
                            <li className="suggested-grid-item" key={video.id}>
                                <VideoIndexItem video={video} path={path}/>
                            </li>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;