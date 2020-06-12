import React from 'react'
import { FaCamera } from 'react-icons/fa'
import { MdCheckCircle, MdNotificationsNone } from 'react-icons/md'

class ChannelLogo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            subscribed: this.props.subscribed
        }

        this.handleLogo = this.handleLogo.bind(this)
        this.createChannel = this.createChannel.bind(this)
        this.handleSubscribe = this.handleSubscribe.bind(this)
        this.handleUnsubscribe = this.handleUnsubscribe.bind(this)
    }

    handleLogo(e) {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('channel[logo]', e.currentTarget.files[0]);
        this.props.editChannel(formData, this.props.channel.id);
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
                        {currentUser && channel.creatorId === currentUser.id  ?
                        <div className="profile-photo-upload-container">
                            {channel.logoUrl ? <img src={channel.logoUrl} /> : <img src={window.user} />}
                            <label className="profile-photo-upload" htmlFor="file3">
                                <FaCamera className="avatar" />
                            </label>
                        </div> :
                        <div className="channel-logo-container">
                            {channel.logoUrl ? <img src={channel.logoUrl} /> : <img src={window.user} />}
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
                        <input type="file" name="file3" id="file3" className="hidden-input" onChange={e => this.handleLogo(e)} />
                    </div>
                    {currentUser && channel.creatorId === currentUser.id ?
                    <div className="channel-btns-container">
                        <button className="channel-btn" onClick={this.props.handleCustomize}>
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

export default ChannelLogo;