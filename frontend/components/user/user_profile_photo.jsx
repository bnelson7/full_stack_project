import React from 'react'
import { FaCamera } from 'react-icons/fa'

class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            photoFile: null
        }

        this.handlePhoto = this.handlePhoto.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handlePhoto(e) {
        this.setState({ photoFile: e.currentTarget.files[0] })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[photo]', this.state.photoFile);
        this.props.updateUser(formData, this.props.currentUser.id);
    }

    render() {
        const { currentUser } = this.props
      
        return (
            <div>
                {currentUser.photoUrl ?
                    <div className="profile-photo">
                        <img src={currentUser.photoUrl} />
                    </div> :
                    <form onSubmit={this.handleSubmit}>
                        <div className="profile-photo-default">
                            <FaCamera className="avatar" />
                        </div>
                        <input type="file" name="file" id="file" className="file" onChange={this.handlePhoto} />
                        <label htmlFor="file">Add a profile picture</label>
                        <br/>
                        <br/>
                        <button>upload photo</button>
                    </form>}
            </div>
        )
    }
}

export default ProfilePhoto;