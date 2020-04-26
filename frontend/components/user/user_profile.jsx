import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { MdSearch } from 'react-icons/md'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            desciption: "",
            photoFile: null,
            clipFile: null,
            thumbnailFile: null
        }

        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount() {
    //     this.props.requestUser()
    // }

    // handlePhoto(e) {
    //     e.preventDefault();
    //     this.props.updateUser()
    // }

    handleUpload(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.files[0]})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const video = new FormData();
        video.append('video[title]', this.state.title);
        video.append('video[description]', this.state.description);
        video.append('video[clipFile]', this.state.clipFile);
        video.append('video[thumbnailFile]', this.state.thumbnailFile);
        this.props.createVideo(video)
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        } 
    }

    render() {
        // const profilePhoto = 
        // <div className="profile-photo">
        //     <img src={this.props.currentUser.photoUrl}/>
        // </div>

        // this.props.currentUser.photoUrl ? profilePhoto : form

        return (
            <div className="background">
                <div className="profile-background">
                    <div className="profile-header">
                        <form onSubmit={this.handlePhoto}></form>
                        <div className="profile-photo">
                            <FaCamera className="avatar"/>
                        </div>
                        <input type="file" name="file" id="file" className="file" onChange={this.handleUpload('photoFile')} />
                        <label for="file">Add a profile picture</label>

                        <div className="profile-nav">
                            <button className="profile-nav-item">HOME</button>
                            <button className="profile-nav-item">VIDEOS</button>
                            <button className="profile-nav-item">PLAYLISTS</button>
                            <button className="profile-nav-item">CHANNELS</button>
                            <button className="profile-nav-item">DISCUSSION</button>
                            <button className="profile-nav-item">ABOUT</button>
                            <button className="profile-nav-item"><MdSearch /></button>
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
                                        <textarea value={this.state.desciption} onChange={this.update('description')} />
                                    </label>
                                    
                                    <input type="file" name="file1" id="file1" className="file1" onChange={this.handleUpload('clipFile')}/>
                                    <label for="file1">UPLOAD VIDEO</label>
                                    
                                    <br/>
                                    <h1>Thumbnail</h1>
                                    <p>Upload a picture that shows what's in your video. A good thumbnail stands out
                                    <br></br>and draws viewers' attention.</p>

                                    <input type="file" name="file2" id="file2" className="file2" onChange={this.handleUpload('thumbnailFile')} />
                                    <label for="file2">Upload thumbnail</label>
                                    <br/>
                                    <button className="upload-btn">UPLOAD VIDEO</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile