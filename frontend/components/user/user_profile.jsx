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

    handlePhoto() {

    }

    handleUpload() {

    }

    handleSubmit(e) {
        e.preventDefault();
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        } 
    }

    render() {
        return (
            <div className="background">
                <div className="profile-background">
                    <div className="profile-header">
                        <div className="profile-photo" onClick={this.handlePhoto}>
                            <FaCamera className="avatar"/>
                        </div>
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
                                    <input type="file" onChange={this.handleUpload}/>
                                    <label> Desciption: 
                                        <textarea value={this.state.desciption} onChange={this.update('desciption')}/>
                                    </label>
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