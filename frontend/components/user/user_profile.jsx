import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'
import ProfilePhotoContainer from './user_profile_photo_container'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            clipFile: null,
            thumbnailFile: null,
            selected: "home"
        }

        this.handleUpload = this.handleUpload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleToggle = this.handleToggle.bind(this)
    }

    // componentDidMount() {
    //     this.props.requestVideos()
    // }

    handleUpload(field) {
        debugger
        return e => {
            this.setState({ [field]: e.currentTarget.files[0]})
            debugger
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const video = new FormData();
        video.append('video[title]', this.state.title);
        video.append('video[description]', this.state.description);
        video.append('video[clip]', this.state.clipFile);
        video.append('video[thumbnail]', this.state.thumbnailFile);
        debugger
        this.props.createVideo(video)
    }

    update(field) {
        debugger
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

    selectedRender() {
        const { selected } = this.state
        switch (selected === "home") {
            case (selected === "video"):
                return (
                    <div>

                    </div>
                )
                break;
            default:
                break;
        }
    }

    render() {
        const { currentUser, videos } = this.props
        console.log(this.state)
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
                        <div className="upload-container">
                            <img src="https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg" />
                            <h1>Upload a video to get started</h1>
                            <p>Start sharing your story and connecting with viewers. Videos you upload will</p>
                            <p>show up here.</p>
                            <br/>
                            <form onSubmit={this.handleSubmit}>
                                <div className="upload-form">
                                    <label> Title: 
                                        <input type="text" value={this.state.title} onChange={this.update('title')} />
                                    </label>

                                    <label> Desciption:
                                        <textarea value={this.state.description} onChange={this.update('description')} />
                                    </label>
                                    
                                    <input type="file" name="file1" id="file1" className="file1" onChange={this.handleUpload('clipFile')}/>
                                    <label htmlFor="file1">UPLOAD VIDEO</label>
                                    
                                    <br/>
                                    <h1>Thumbnail</h1>
                                    <p>Upload a picture that shows what's in your video. A good thumbnail stands out
                                    <br></br>and draws viewers' attention.</p>

                                    <input type="file" name="file2" id="file2" className="file2" onChange={this.handleUpload('thumbnailFile')} />
                                    <label htmlFor="file2">Upload thumbnail</label>
                                    <br/>
                                    <button className="upload-btn">UPLOAD VIDEO</button>
                                </div>
                            </form>
{/* 
                            <div>
                                {videos.filter(video => <li>{video.creator_id === currentUser.id}</li>)}
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile