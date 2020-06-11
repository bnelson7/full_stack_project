import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { MdCheckCircle, MdNotificationsNone } from 'react-icons/md'

class ProfilePhoto extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            subscribed: this.props.subscribed
        }

        this.handlePhoto = this.handlePhoto.bind(this)
        this.createChannel = this.createChannel.bind(this)
        this.handleSubscribe = this.handleSubscribe.bind(this)
        this.handleUnsubscribe = this.handleUnsubscribe.bind(this)
    }

    handlePhoto(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[photo]', e.currentTarget.files[0]);
        this.props.updateUser(formData, this.props.currentUser.id);
    }

    createChannel() {
        
        this.props.history.push("/create_channel")
    }

    handleSubscribe(e) {
        e.preventDefault();
        
        const subscription = { channelId: this.props.channel.id }
        this.props.createSubscription(subscription)
            .then(() => {
                
                this.props.requestChannel(this.props.channel.id)
            })
    }

    handleUnsubscribe(e) {
        e.preventDefault();
        
        this.props.deleteSubscription(this.props.channel.id)
            .then(() => {
                
                this.props.requestChannel(this.props.channel.id)
            })
    }

    render() {
        const { currentUser, path, channel } = this.props
        
        return (
            <div>
                <div className="profile-photo-container">
                    <div className="profile-photo">
                        {path.includes("/users")  ?
                        <div className="profile-photo-upload-container">
                            {/* {path.includes("/users") ? */}
                            {currentUser.photoUrl ? <img src={currentUser.photoUrl} /> : <img src={window.user} />}
                            {/* : <img src={window.user} />} */}
                            <label className="profile-photo-upload" htmlFor="file3">
                                <FaCamera className="avatar" />
                            </label>
                        </div> :
                        <div className="channel-logo-container">
                            {/* {path.includes("/users") ? */}
                            {/* currentUser.photoUrl ? <img src={currentUser.photoUrl} /> : <img src={window.user} /> : */}
                            <img src={window.user} />
                        </div>}
                        <div className="profile-photo-user">
                            <span>
                                {path.includes("/channels") ? channel.name : currentUser.username}
                                <MdCheckCircle className="profile-verified-icon"/>
                            </span>
                            <span>
                                {path.includes("/channels") ? (channel.subscribers.length === 1 ? 
                                `${channel.subscribers.length} subscriber` : 
                                `${channel.subscribers.length} subscribers`) : null}
                            </span>
                        </div>
                        <input type="file" name="file3" id="file3" className="hidden-input" onChange={e => this.handlePhoto(e)} />
                    </div>
                    {currentUser && channel.ownerId === currentUser.id ?
                    <div className="channel-btns-container">
                        <button className="channel-btn">
                            CUSTOMIZE CHANNEL
                        </button> 
                        <button className="channel-btn" onClick={this.createChannel}>
                            CREATE CHANNEL
                        </button> 
                    </div> :
                    !this.props.subscribed ?
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
            </div>
        )
    }
}

export default ProfilePhoto;