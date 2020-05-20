import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import ProfilePhotoContainer from './user_profile_photo_container'
import VideoIndexItem from '../videos/video_index_item'
import { MdFlag, MdSort } from 'react-icons/md'
import CommentFormContainer from '../comments/comment_form_container'
import TimeAgo from "javascript-time-ago";
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: "home"
        }
        
        this.handleToggle = this.handleToggle.bind(this)
        this.getDate = this.getDate.bind(this)
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.props.requestUser(this.props.currentUser.id)
        .then(() => {
            this.props.requestVideos()
                this.props.requestVideo(this.props.video.id)
            })
    }

    update() {
        debugger
        const nextSelected = document.getElementById('home')
        const prevSelected = document.querySelector(".selected-profile-nav-item")

        prevSelected.classList.remove("selected-profile-nav-item")
        prevSelected.classList.add("profile-nav-item")
        nextSelected.classList.remove("profile-nav-item")
        nextSelected.classList.add("selected-profile-nav-item")

        this.setState({ selected: "home" })
    }

    handleToggle(e) {
        e.preventDefault();
        const nextSelected = document.getElementById(e.target.id)
        const prevSelected = document.querySelector(".selected-profile-nav-item")

        prevSelected.classList.remove("selected-profile-nav-item")
        prevSelected.classList.add("profile-nav-item")
        nextSelected.classList.remove("profile-nav-item")
        nextSelected.classList.add("selected-profile-nav-item")

        this.setState({ selected: e.target.id })
    }

    getDate() {
        const { currentUser } = this.props
        let date = new Date(`${currentUser.createdAt}`)
        let month = date.getMonth()
        let day = date.getDate()
        let year = date.getFullYear()
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        let uploadDateformatted = new Date(year, month, day)
        const newDateTimeFormat = Intl.DateTimeFormat('en-US', options)
        return newDateTimeFormat.format(uploadDateformatted)
    }

    renderSelected() {
        const { selected } = this.state
        const { videos, currentUser, path, deleteVideo, updateVideo, openModal } = this.props
        debugger
        switch (selected) {
            case "videos":
                debugger
                return (
                    <div className="profile-videos-container">
                        <div className="profile-videos">
                            <div className="profile-videos-title">
                                <h1>Uploads</h1>
                                <div className="comment-sort">
                                    <span><MdSort /></span>SORT BY
                                </div>
                            </div>
                            <div className="profile-videos-grid-container">
                                {videos.filter(video => video.creatorId === currentUser.id).map(video => {
                                    debugger
                                    return (
                                        <li className="profile-videos-grid-item" key={video.id}>
                                            <VideoIndexItem video={video} path={path} deleteVideo={deleteVideo} updateVideo={updateVideo} update={this.update} openModal={openModal} />
                                        </li>
                                        )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                )
            case "playlists":
                return (
                    <div className="profile-playlists">
                        <h1>This channel has no playlists.</h1>
                    </div>
                )
            case "channels":
                return (
                    <div className="profile-channels">
                        <h1>This channel doesn't feature any other channels.</h1>
                    </div>
                )
            case "discussion":
                return (
                    <div className="profile-comment-form-container">
                        <CommentFormContainer />
                    </div>
                )
            case "about":
                return (
                    <ul className="profile-about">
                        <li>Stats</li>
                        <li>Joined {this.getDate()}</li>
                        <li><MdFlag /></li>
                    </ul>
                )
            case "search":
                return (
                    <div className="profile-search">

                    </div>
                )
            default:
                if (!this.props.currentUser.uploads) {
                    return (
                    <div className="upload-container-default">
                        <div className="profile-upload">
                            <img src="https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg" />
                            <h1>Upload a video to get started</h1>
                            <div className="profile-upload-info">
                                <p>Start sharing your story and connecting with viewers. Videos you upload will</p>
                                <p>show up here.</p>
                            </div>
                            <button className="upload-btn">UPLOAD VIDEO</button>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="upload-container-content">
                        <div className="upload-container-uploads">
                            <div className="uploads-featured-video-container">
                                <div className="uploads-featured-video">
                                    <video controls autoPlay >
                                        <source type="video/mp4" src={this.props.video.clipUrl} />
                                    </video>
                                </div>
                                <div className="uploads-featured-video-info">
                                    <div className="uploads-profile-videos-item-info">
                                        <div className="profile-videos-item-title">
                                            <h1 id="show-title">{this.props.video.title}</h1>
                                        </div>
                                        <div className="uploads-profile-videos-item-views">
                                            <span id="views-date-show">{this.props.video.views}K views&nbsp;
                                                <span><GoPrimitiveDot /></span>&nbsp;{this.props.video.createdAt} ago
                                            </span>
                                        </div>
                                    </div>
                                    <div className="uploads-profile-videos-description">
                                        {this.props.video.description}
                                        <Link to={`/videos/${this.props.video.id}`}><span>READ MORE</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="uploads-uploads">
                                <h1 className="uploads-uploads-title">Uploads</h1>
                                <div className="profile-videos-grid-container">
                                    {videos.filter(video => video.creatorId === currentUser.id).map(video => {
                                        return (
                                            <li className="profile-videos-grid-item" key={video.id}>
                                                <VideoIndexItem video={video} path={path} deleteVideo={deleteVideo} updateVideo={updateVideo} update={this.update} openModal={openModal} />
                                            </li>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="uploads-featured-channels">
                            
                        </div>
                    </div>
                )
            }
        }
    }

    render() {
        return (
            <div className="profile-background">
                <div className="profile-header-container">
                    <div className="profile-header">
                    <ProfilePhotoContainer />
                    <div className="profile-nav">
                        <button onClick={this.handleToggle} className="selected-profile-nav-item" id="home">
                            HOME
                        </button>
                        <button onClick={this.handleToggle} className="profile-nav-item" id="videos">
                            VIDEOS
                        </button>
                        <button onClick={this.handleToggle} className="profile-nav-item" id="playlists">
                            PLAYLISTS
                        </button>
                        <button onClick={this.handleToggle} className="profile-nav-item" id="channels">
                            CHANNELS
                        </button>
                        <button onClick={this.handleToggle} className="profile-nav-item" id="discussion">
                            DISCUSSION
                        </button>
                        <button onClick={this.handleToggle} className="profile-nav-item" id="about">
                            ABOUT
                        </button>
                        <button className="profile-nav-item" id="search">
                            <MdSearch className="profile-search-icon"/>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="profile-container">
                    {this.renderSelected()}
                </div>
            </div>
        )
    }
}

export default UserProfile