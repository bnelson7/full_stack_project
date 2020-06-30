import React from 'react'
import { Link } from 'react-router-dom'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdCheckCircle, MdNotificationsNone } from 'react-icons/md'

const ChannelIndexItem = props => {
debugger
    return (
        props.path.includes("/channels") && (props.selected === "home" || props.selected === "about") ? (
            <div className="channel-home-grid-item">
                <div className="channel-logo-home-container">
                    <div className="channel-logo-home">
                        <Link to={`/channels/${props.channel.id}`}>
                            <img src={props.channel.logoUrl} />
                        </Link>
                    </div>
                    <h2>
                        {props.channel.name}
                    </h2>
                </div>
                {props.currentChannel && props.currentChannel.hasOwnProperty('subscriptions') && props.currentChannel.subscriptions.find(subs => subs.id === props.channel.id) !== undefined ? 
                <button className="channel-subscribe-btn" onClick={props.handleUnsubscribe} value={props.channel.id}>
                    SUBSCRIBED
                </button> :
                <button className="channel-subscribe-btn" onClick={props.handleSubscribe} value={props.channel.id}>
                    SUBSCRIBE
                </button>}
            </div> 
        ) : props.path.includes("/channels") && props.selected === "channels" ? (
            <div className="channel-channels-grid-item-">
                <div className="channel-logo-channels">
                    <Link to={`/channels/${props.channel.id}`}>
                        <img src={props.channel.logoUrl} onClick={props.update}/>
                    </Link>
                </div>
                <div className="channel-channels-info">
                    <h1>{props.channel.name}</h1>
                    <span>
                        {props.channel.subscribers.length === 1 ?
                        `${props.channel.subscribers.length} subscriber` :
                        `${props.channel.subscribers.length} subscribers`}
                    </span>
                    <div className="channel-subscribe-btn-container">
                        {props.currentChannel && props.currentChannel.hasOwnProperty('subscriptions') && props.currentChannel.subscriptions.find(subs => subs.id === props.channel.id) !== undefined ? 
                        <button className="channel-subscribe-btn" onClick={props.handleUnsubscribe} value={props.channel.id}>
                            SUBSCRIBED
                        </button> :
                        <button className="channel-subscribe-btn" onClick={props.handleSubscribe} value={props.channel.id}>
                            SUBSCRIBE
                        </button>}
                    </div>
                </div>
            </div>
        ) : (props.modal === "sidebar" || props.modal.type === "sidebar") ? (
            <Link to={`/channels/${props.subscription.id}`}>
                <div className="sidebar-subscriptions-grid-item">
                    <div className="sidebar-subscription-info-container">
                        <div className="channel-logo-home">
                            <img src={props.subscription.logoUrl} />
                        </div>
                        <h1 className="sidebar-subscription-name">
                            {props.subscription.name}
                        </h1>
                    </div>
                </div>
            </Link>
        ) : (
            <div className="grid-item-search-container">
                <div className="channel-logo-search">
                    <Link to={`/channels/${props.channel.id}`}>
                        <img src={props.channel.logoUrl} />
                    </Link>
                </div>
                <div className="channel-search-info-container">
                    <div className="video-search-info">
                        <div className="title-user-search">
                            <div id="search-title">
                                {props.channel.name}&nbsp;&nbsp;
                                <span className="verified">
                                    <MdCheckCircle />
                                </span>
                            </div>
                            <div id="search-user">&nbsp;
                                <span id="title-user-search">
                                    {!props.channel.subscribers.length ? "No subscribers" : 
                                    props.channel.subscribers.length === 1 ? "1 subscriber" :
                                    `${props.channel.subscribers.length} subscribers`}&nbsp;
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    &nbsp;{props.channel.uploads.length} videos
                                </span>
                            </div>
                        </div>
                        <div className="description-search-container">
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
    )
}

export default ChannelIndexItem;