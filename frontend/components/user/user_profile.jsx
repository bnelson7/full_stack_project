import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import ProfilePhotoContainer from './user_profile_photo_container'
import VideoIndexItem from '../videos/video_index_item'

class UserProfile extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            title: "",
            description: "",
            clipFile: null,
            thumbnailFile: null,
            selected: "home",
            edit: false,
            videoId: null
        }
  
        this.handleUpload = this.handleUpload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    componentDidMount() {
        this.props.requestVideos()
    }

    handleUpload(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.files[0]})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[clip]', this.state.clipFile);
        formData.append('video[thumbnail]', this.state.thumbnailFile);
        debugger
        !this.state.edit ? this.props.createVideo(formData) : this.props.updateVideo(formData, this.state.videoId)
    }

    handleEdit(video) {
        this.setState({ 
            title: video.title,
            description: video.description,
            thumbnailFile: video.thumbnailUrl,
            selected: "home",
            edit: true,
            videoId: video.id
        })
    }

    handleDelete(videoId) {
        debugger
        e.preventDefault();
        this.props.deleteVideo(videoId)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        } 
    }

    handleToggle(e) {
        e.target.classList.toggle("selected-profile-nav-item")
        newSelect.classList.toggle("selected-profile-nav-item")
    }

    handleClick(field) {
        this.setState({ selected: field })
    }

    renderSelected() {
        const { selected } = this.state
        const { videos, currentUser } = this.props
        debugger
        switch (selected) {
            case "videos":
                debugger
                return (
                    <div>
                        <h1>Uploads</h1>
                        {videos.filter(video => video.creator_id === currentUser.id).map(video => {
                            debugger
                            return (
                                <li className="grid-item"><VideoIndexItem key={video.id} video={video} />
                                    <button onClick={() => this.handleDelete(video.id)}>delete video</button>
                                    <button onClick={() => this.handleEdit(video)}>edit video</button>
                                </li>
                                )
                            }
                        )}
                    </div>
                )
            case "playlists":
                return (
                    <div>
                        <h1>This profile has no playlists.</h1>
                    </div>
                )
            case "channels":
                return (
                    <div>
                        <h1>This profile has no subscriptions.</h1>
                    </div>
                )
            case "discussion":
                return (
                    <div>

                    </div>
                )
            case "about":
                return (
                    <div>
                        Stats
                        Joined {currentUser.created_at}
                    </div>
                )
            case "search":
                return (
                    <div>

                    </div>
                )
            default:
                return (
                    <div className="upload-container">
                        <img src="https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg" />
                        <h1>Upload a video to get started</h1>
                        <p>Start sharing your story and connecting with viewers. Videos you upload will</p>
                        <p>show up here.</p>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <div className="upload-form">
                                <label> Title:
                                        <input type="text" value={this.state.title} onChange={this.update('title')} />
                                </label>

                                <label> Desciption:
                                        <textarea value={this.state.description} onChange={this.update('description')} />
                                </label>

                                <input type="file" name="file1" id="file1" className="file1" onChange={this.handleUpload('clipFile')} />
                                <label htmlFor="file1">UPLOAD VIDEO</label>

                                <br />
                                <h1>Thumbnail</h1>
                                <p>Upload a picture that shows what's in your video. A good thumbnail stands out
                                    <br></br>and draws viewers' attention.</p>

                                <input type="file" name="file2" id="file2" className="file2" onChange={this.handleUpload('thumbnailFile')} />
                                <label htmlFor="file2">Upload thumbnail</label>
                                <br />
                                {!this.state.edit ? <button className="upload-btn">UPLOAD VIDEO</button> : <button className="upload-btn">SAVE</button>}
                            </div>
                        </form>
                    </div>
                )
        }
    }

    render() {
        const { currentUser, videos } = this.props
        console.log(this.state)
        debugger
        return (
            <div className="background">
                <div className="profile-background">
                    <div className="profile-header">
                        {currentUser.username}
                        No Subscribers
                       <ProfilePhotoContainer />
                        <div className="profile-nav">
                            <button onClick={() => this.handleClick("home")} className="selected-profile-nav-item">HOME</button>
                            <button onClick={() => this.handleClick("videos")} className="profile-nav-item">VIDEOS</button>
                            <button onClick={() => this.handleClick("playlists")} className="profile-nav-item">PLAYLISTS</button>
                            <button onClick={() => this.handleClick("channels")} className="profile-nav-item">CHANNELS</button>
                            <button onClick={() => this.handleClick("discussion")} className="profile-nav-item">DISCUSSION</button>
                            <button onClick={() => this.handleClick("about")} className="profile-nav-item">ABOUT</button>
                            <button onClick={() => this.handleClick("search")} className="profile-nav-item"><MdSearch /></button>
                        </div>
                    </div>
                    <div className="profile-container">
                        {this.renderSelected()}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile