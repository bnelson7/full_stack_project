import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md'

class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props)

        this.handlePhoto = this.handlePhoto.bind(this)
    }

    handlePhoto(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[photo]', e.currentTarget.files[0]);
        this.props.updateUser(formData, this.props.currentUser.id);
    }

    render() {
        const { currentUser } = this.props
      
        return (
            <div>
                {/* {currentUser.photoUrl ?
                <div className="profile-photo-container">
                    <div className="profile-photo">
                        <div className="profile-photo-upload-container">
                            <img src={currentUser.photoUrl} />
                            <input type="file" name="file3" id="file3" className="hidden-input" onChange={e => this.handlePhoto(e)} />
                            <label className="profile-photo-upload" htmlFor="file3">
                                <FaCamera className="avatar" />
                            </label>
                        </div> 
                        <div className="profile-photo-user">
                            <span>{currentUser.username}<MdCheckCircle className="profile-verified-icon"/></span>
                            <span>No Subscribers</span>
                        </div>
                    </div>
                    <button className="subscribe-btn">
                        SUBSCRIBE
                    </button>  
                </div> : */}
                <div className="profile-photo-container">
                    <div className="profile-photo">
                        <div className="profile-photo-upload-container">
                            {currentUser.photoUrl ? <img src={currentUser.photoUrl} /> : <img src={window.user} />}
                            <input type="file" name="file3" id="file3" className="hidden-input" onChange={e => this.handlePhoto(e)} />
                            <label className="profile-photo-upload" htmlFor="file3">
                                <FaCamera className="avatar" />
                            </label>
                        </div>
                        <div className="profile-photo-user">
                            <span>{currentUser.username}<MdCheckCircle className="profile-verified-icon"/></span>
                            <span>No Subscribers</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePhoto;