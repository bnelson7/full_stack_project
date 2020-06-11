import React from 'react'
import { Link } from 'react-router-dom'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdCheckCircle, MdNotificationsNone } from 'react-icons/md'

const ChannelIndexItem = props => {
    
    return (
        <div className="grid-item-search-container">
            <div className="channel-logo-search">
                <Link to={`/channels/${props.channel.id}`}>
                    <img src={props.channel.logoUrl} />
                </Link>
            </div>
            <div className="channel-search-info-container">
                <div className="video-search-info">
                    <div className="title-user-search">
                        <h1 id="search-title">
                            {props.channel.name}&nbsp;&nbsp;
                            <span className="verified">
                                <MdCheckCircle />
                            </span>
                        </h1>
                        <h1 id="search-user">{}&nbsp;
                            <span id="title-user-search">
                                {props.channel.subscribers.length} subscribers&nbsp;
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                &nbsp;{props.channel.uploads.length} videos
                            </span>
                        </h1>
                    </div>
                    <div>
                        <span id="description-search">
                            {props.channel.description}
                        </span>
                    </div>
                </div>
                {!props.channel.isSubscribed ?
                    <button className="subscribe-btn" onClick={props.handleSubscribe} value={props.channel.id}>
                        SUBSCRIBE
                    </button> :
                    <div className="subscribed-btns-container">
                        <button className="subscribed-btn" onClick={props.handleUnsubscribe} value={props.channel.id}>
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

export default ChannelIndexItem;