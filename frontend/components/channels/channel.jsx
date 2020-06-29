import React from 'react'
import { MdSearch } from 'react-icons/md'
import ChannelLogo from './channel_logo'
import VideoIndexItem from '../videos/video_index_item'
import { MdFlag, MdModeEdit } from 'react-icons/md'
import CommentFormContainer from '../comments/comment_form_container'
import { GoPrimitiveDot } from "react-icons/go";
import { Link } from 'react-router-dom'
import VideoSortDropdown from '../hooks/video_sort_dropdown'
import ChannelIndexItem from './channel_index_item'
import { FaPlusCircle } from "react-icons/fa"

class Channel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: "home",
            sortSelected: null,
            subscribed: null,
            customize: false,
            customizing: false,
            description: "",
            addLinks: false,
            addingLinks: true,
            links: ""
        }
   
        this.handleToggle = this.handleToggle.bind(this)
        this.getDate = this.getDate.bind(this)
        this.getViews = this.getViews.bind(this)
        this.update = this.update.bind(this)
        this.handleSort = this.handleSort.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.handleCustomize = this.handleCustomize.bind(this)
        this.handleBanner = this.handleBanner.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditForm = this.handleEditForm.bind(this)
        this.handleSubscribe = this.handleSubscribe.bind(this)
        this.handleUnsubscribe = this.handleUnsubscribe.bind(this)
        this.handleLinks = this.handleLinks.bind(this)
        this.addLinks = this.addLinks.bind(this)
    }

    componentDidMount() {
        
        // this.props.path.includes("/channels") ? 
        !this.props.channel && this.props.requestChannel(this.props.match.params.channelId)
            .then(res => {
                
                this.props.requestUser(res.channel.creatorId)
            })
        // : this.props.requestCurrentUser(this.props.currentUser.id)
    }

    componentDidUpdate(prevProps) {
        
        if (this.props.path !== prevProps.path) {
            
            this.props.requestChannel(this.props.match.params.channelId)
                .then(res => {

                    this.props.requestUser(res.channel.creatorId)
                })
        }
        // if (this.props.featuredChannel !== prevProps.featuredChannel) {
        //     
        //     this.props.requestChannel(this.props.featuredChannel)
        // }
    }

    // shouldComponentUpdate(nextProps) {
    //     
    //     if (typeof this.props.video !== "undefined" && this.props.video !== nextProps.video) {
    //         
    //         return false;
    //     } 
    //      else {
    //          
    //         return true;
    //     }
    // }

    // updateSubscribed(updatedSubscribers) {
    //     this.setState({ subscribed: updatedSubscribers })
    // }

    update() {
        const nextSelected = document.getElementById('home')
        const prevSelected = document.querySelector(".selected-profile-nav-item")

        prevSelected.classList.remove("selected-profile-nav-item")
        prevSelected.classList.add("profile-nav-item")
        nextSelected.classList.remove("profile-nav-item")
        nextSelected.classList.add("selected-profile-nav-item")

        this.setState({ selected: "home" })
    }

    handleToggle(e) {
        // e.preventDefault();
        // e.target.id !== "about" && this.setState({ 
        //     customize: false,
        //     customizing: false
        // })
        
        const nextSelected = e === "about" ? document.getElementById("about") : document.getElementById(e.target.id)
        const prevSelected = document.querySelector(".selected-profile-nav-item")

        prevSelected.classList.remove("selected-profile-nav-item")
        prevSelected.classList.add("profile-nav-item")
        nextSelected.classList.remove("profile-nav-item")
        nextSelected.classList.add("selected-profile-nav-item")

        e === "about" ? this.setState({selected: "about"}) : this.setState({ selected: e.target.id })
    }

    getDate() {
        const { channel } = this.props
        let date = new Date(`${channel.createdAt}`)
        let month = date.getMonth()
        let day = date.getDate()
        let year = date.getFullYear()
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        let uploadDateformatted = new Date(year, month, day)
        const newDateTimeFormat = Intl.DateTimeFormat('en-US', options)
        return newDateTimeFormat.format(uploadDateformatted)
    }

    getViews() {
        
        let totalViews = 0
        this.props.channel.uploads.forEach(upload => {
            totalViews += upload.views
        });
        return totalViews;
    }

    handleSort(e) {
        e.preventDefault();
        this.setState({ sortSelected: e.currentTarget.id })
    }

    sortVideos(channelVideos) {
        const { sortSelected } = this.state
        const { currentUser, path, deleteVideo, updateVideo, openModal } = this.props
        // let channelVideos = videos.filter(video => video.creatorId === currentUser.id)

        if (sortSelected === "popular") {
            channelVideos.sort((a, b) => b.views - a.views)
            return (
                <div className="profile-videos-grid-container">
                    {channelVideos.map(video => {
                        return (
                            <li className="profile-videos-grid-item" key={video.id}>
                                <VideoIndexItem 
                                video={video} 
                                path={path} 
                                deleteVideo={deleteVideo} 
                                updateVideo={updateVideo} 
                                update={this.update} 
                                openModal={openModal}
                                />
                            </li>
                            )
                        }
                    )}
                </div>
            )
        } else if (sortSelected === "date-old") {
            channelVideos.sort((a, b) => parseInt(b.createdAt.split(" ")[0]) - parseInt(a.createdAt.split(" ")[0]))
            return (
                <div className="profile-videos-grid-container">
                    {channelVideos.map(video => {
                        return (
                            <li className="profile-videos-grid-item" key={video.id}>
                                <VideoIndexItem 
                                video={video} 
                                path={path} 
                                deleteVideo={deleteVideo} 
                                updateVideo={updateVideo} 
                                update={this.update} 
                                openModal={openModal}
                                />
                            </li>
                            )
                        }
                    )}
                </div>
            )
        } else {
            channelVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
            return (
                <div className="profile-videos-grid-container">
                    {channelVideos.map(video => {
                        return (
                            <li className="profile-videos-grid-item" key={video.id}>
                                <VideoIndexItem 
                                video={video} 
                                path={path} 
                                deleteVideo={deleteVideo} 
                                updateVideo={updateVideo} 
                                update={this.update} 
                                openModal={openModal}
                                />
                            </li>
                            )
                        }
                    )}
                </div>
            )
        }
    }

    handleUpload(e) {
        e.preventDefault();
        this.props.openModal({ type: 'upload' })
    }

    updateInfo(field) {
        
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleEditForm() {
        this.setState({ 
            customizing: !this.state.customizing,
            customize: !this.state.customize,
            description: this.props.channel.description
        })
    }

    handleLinks(e) {
        
        e.currentTarget.value === "cancel" 
        ? this.setState({ addLinks: false})
        : e.currentTarget.value === "add" ? this.setState({ addingLinks: true, links: this.props.channel.links }) 
        : this.setState({ addLinks: true })
    }

    addLinks() {
        
        return (
            <input className="link-input" placeholder="URL" value={this.state.links}
                onChange={this.updateInfo("links")}></input>
        )
    }

    handleEdit(e) {
        e.preventDefault();
        const update = new FormData()
        e.currentTarget.value === "description" ? 
        update.append('channel[description]', this.state.description) :
        update.append('channel[links]', this.state.links)
        
        this.props.editChannel(update, this.props.channel.id)
        .then(() => {
            
                this.setState({
                    customize: false,
                    customizing: false,
                    addLinks: false,
                    addingLinks: false,
                    links: ""
                })
            })
    }

    handleSubscribe(e) {
        e.preventDefault();
        const { currentUser, history } = this.props

        if (!currentUser) {
            history.push("/login")
        } else {
            const subscription = { channelId: e.currentTarget.value, subscriber_id: this.props.currentChannel.id }
            this.props.createSubscription(subscription)
                .then(res => {
                    
                    // this.props.requestChannel(res.channel.id)
                    this.props.requestCurrentChannel(this.props.currentChannel.id)
                })
        }
    }

    handleUnsubscribe(e) {
        e.preventDefault();
        const subscription = { id: e.currentTarget.value, subscriber_id: this.props.currentChannel.id }
        
        this.props.deleteSubscription(subscription)
            .then(res => {

                // this.props.requestChannel(res.channel.id)
                this.props.requestCurrentChannel(this.props.currentChannel.id)
            })
    }

    renderSelected() {
        const { selected, sortSelected } = this.state
        const { videos, video, path, deleteVideo, updateVideo, openModal, currentUser, channel, currentChannel, channels } = this.props

        switch (selected) {
            case "videos":
                if (!videos || videos.length === 0) {
                    return (
                        <div className="profile-videos-default">
                            <h1>
                                This channel has no videos.
                            </h1>
                        </div>
                    )
                } else {
                    
                    return (
                        <div className="profile-videos-container">
                            <div className="profile-videos">
                                <div className="profile-videos-title">
                                    <h1>Uploads</h1>
                                    <VideoSortDropdown 
                                    handleSort={this.handleSort} 
                                    sortSelected={sortSelected} 
                                    />
                                </div>
                                {!sortSelected ? 
                                <div className="profile-videos-grid-container">
                                    {videos.map(video => {
                                        return (
                                            <li className="profile-videos-grid-item" key={video.id}>
                                                <VideoIndexItem 
                                                video={video} 
                                                path={path} 
                                                deleteVideo={deleteVideo} 
                                                updateVideo={updateVideo} 
                                                update={this.update} 
                                                openModal={openModal}
                                                currentUser={currentUser}
                                                channel={channel}
                                                />
                                            </li>
                                            )
                                        }
                                    )}
                                </div> :
                                this.sortVideos(videos)}
                            </div>
                        </div>
                    )
                }
            case "playlists":
                return (
                    <div className="profile-playlists">
                        <h1>This channel has no playlists.</h1>
                    </div>
                )
            case "channels":
                
                if (channels.length) {
                    return (
                        <div className="channels-featured-channels">
                            <h1>Featured channels</h1>
                            <ul className="channel-channels-grid-container">
                                {channels.map(channel => {
                                    
                                    return (
                                        <li className="channel-channels-grid-item-container" key={channel.id}>
                                            <ChannelIndexItem
                                                path={path}
                                                selected={this.state.selected}
                                                channel={channel}
                                                handleSubscribe={this.handleSubscribe}
                                                handleUnsubscribe={this.handleUnsubscribe}
                                                currentChannel={currentChannel}
                                                update={this.update}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    )
                } else {
                    return (
                        <div className="profile-channels">
                            <h1>This channel doesn't feature any other channels.</h1>
                        </div>
                    )
                }
            case "community":
                return (
                    <div className="profile-playlists">
                        <h1>This channel hasn't posted yet</h1>
                    </div>
                )
            case "about":
                return (
                    <div className="channel-about-container">
                        <ul className="channel-about-info">
                            <li className="channel-about-info-item">
                                <h1 className="channel-about-title">Description</h1> 
                                {!this.state.customize && !this.state.customizing && 
                                <span>{channel.description}</span>}
                                {this.state.customize &&
                                    <button className="channel-description-btn" onClick={this.handleEditForm}>
                                        <FaPlusCircle className="plus-icon"/> Channel description
                                    </button>}
                                {this.state.customizing &&
                                <form>
                                    <div className="channel-description-form-container">
                                        <h3 className="channel-description-title">
                                            CHANNEL DESCRIPTION
                                        </h3>
                                        <textarea 
                                        className="channel-description-form" 
                                        value={this.state.description} 
                                        onChange={this.updateInfo("description")}
                                        >
                                        </textarea>
                                        <div className="channel-descriptions-btns">
                                            <button className="channel-description-btn-cancel" onClick={this.handleEditForm}>
                                                Cancel
                                            </button>
                                            <button className="channel-description-btn-done" onClick={this.handleEdit} value="description">
                                                Done
                                            </button>
                                        </div>
                                    </div>
                                </form>}
                            </li>
                            <li className="channel-about-info-item">
                                <h1 className="channel-about-title">Details</h1>
                                {(this.state.customize || this.state.customizing) && 
                                <div>
                                    <label className="channel-description-btn-art" htmlFor="file4">
                                        <FaPlusCircle className="plus-icon" /> Edit channel art
                                    </label>
                                    <input type="file" name="file4" id="file4" className="hidden-input" onChange={e => this.handleBanner(e)} />
                                </div>}
                            </li>
                            <li className="channel-about-info-item">
                                <h1 className="channel-about-title">Links</h1>
                                {(this.state.customize || this.state.customizing) && !this.state.addLinks ?
                                    <button className="channel-description-btn-link" onClick={this.handleLinks}>
                                        <FaPlusCircle className="plus-icon" /> Links
                                    </button>
                                : this.state.addLinks ?
                                    <form>
                                        <ul className="channel-links">
                                            {channel.links.map((link, i) => (
                                                <li key={`link-${i}`}>
                                                    <a href={link}>
                                                        <span className="channel-about-info-link">
                                                            {link}
                                                        </span>
                                                    </a>
                                                </li>))}
                                        </ul>
                                        <div className="channel-link-form-container">
                                            {this.state.addingLinks && this.addLinks()}
                                            <button className="channel-description-btn-add" onClick={this.handleLinks} value="add">
                                                <FaPlusCircle className="plus-icon" /> Add
                                            </button>
                                            <div className="channel-descriptions-btns">
                                                <button className="channel-description-btn-cancel" onClick={this.handleLinks} value="cancel">
                                                    Cancel
                                                </button>
                                                <button className="channel-description-btn-done" onClick={this.handleEdit} value="link">
                                                    Done
                                                </button>
                                            </div>
                                        </div>
                                    </form> :
                                <ul className="channel-links">
                                    {channel.links.map((link, i) => (
                                        <li key={`link-${i}`}>
                                            <a href={link}>
                                                <span className="channel-about-info-link">
                                                    {link}
                                                </span>
                                            </a>
                                        </li>))}
                                </ul>}
                            </li>
                        </ul>
                        <div className="profile-about-container">
                            <ul className="profile-about">
                                <li>Stats</li>
                                <li>Joined {this.getDate()}</li>
                                <li>{this.getViews()} views</li>
                                <li><MdFlag /></li>
                            </ul>
                            <div className="about-featured-channels">
                                <h1>
                                    FEATURED CHANNELS
                                </h1>
                                <ul className="channel-home-grid-container">
                                    {channels.map(channel => {

                                        return (
                                            <li className="channel-home-grid-item-container" key={channel.id}>
                                                <ChannelIndexItem
                                                    path={path}
                                                    selected={this.state.selected}
                                                    channel={channel}
                                                    handleSubscribe={this.handleSubscribe}
                                                    handleUnsubscribe={this.handleUnsubscribe}
                                                    currentChannel={currentChannel}
                                                />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            case "search":
                return (
                    <div className="profile-search">

                    </div>
                )
            default:
                if (!videos || videos.length === 0 && channel.creatorId === currentUser.id) {
                    return (
                    <div className="upload-container-default">
                        <div className="profile-upload">
                            <img src="https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg" />
                            <h1>Upload a video to get started</h1>
                            <div className="profile-upload-info">
                                <p>Start sharing your story and connecting with viewers. Videos you upload will</p>
                                <p>show up here.</p>
                            </div>
                            <button className="upload-btn" onClick={this.handleUpload}>
                                UPLOAD VIDEO
                            </button>
                        </div>
                    </div>
                )
            } else if (!videos || videos.length === 0) {
                
                return (
                    <div className="profile-videos-default">
                        <h1>
                            This channel has no uploads.
                        </h1>
                    </div>
                    )
            }
            else {
                
                return (
                    <div className="upload-container-content">
                        <div className="upload-container-uploads">
                            <div className="uploads-featured-video-container">
                                <div className="uploads-featured-video">
                                    <video controls autoPlay >
                                        <source type="video/mp4" src={video.clipUrl} />
                                    </video>
                                </div>
                                <div className="uploads-featured-video-info">
                                    <div className="uploads-profile-videos-item-info">
                                        <div className="profile-videos-item-title">
                                            <h1 id="show-title">{video.title}</h1>
                                        </div>
                                        <div className="uploads-profile-videos-item-views">
                                            <span id="views-date-show">{video.views} views&nbsp;
                                                <span>
                                                    <GoPrimitiveDot />
                                                </span>&nbsp;
                                                {video.createdAt} ago
                                            </span>
                                        </div>
                                    </div>
                                    <div className="uploads-profile-videos-description">
                                        {video.description}
                                        <Link to={`/videos/${video.id}`}>
                                            <span>READ MORE</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="uploads-uploads">
                                <h1 className="uploads-uploads-title">
                                    Uploads
                                </h1>
                                <div className="profile-videos-grid-container">
                                    {videos.map(video => {
                                        return (
                                            <li className="profile-videos-grid-item" key={video.id}>
                                                <VideoIndexItem 
                                                video={video} 
                                                path={path} 
                                                deleteVideo={deleteVideo} 
                                                updateVideo={updateVideo} 
                                                update={this.update} 
                                                openModal={openModal}
                                                currentUser={currentUser}
                                                channel={channel} 
                                                />
                                            </li>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="uploads-featured-channels">
                            <h1>
                                FEATURED CHANNELS
                            </h1>
                            <ul className="channel-home-grid-container">
                                {channels.map(channel => {
                                    
                                    return (
                                        <li className="channel-home-grid-item-container" key={channel.id}>
                                            <ChannelIndexItem 
                                            path={path} 
                                            selected={this.state.selected}
                                            channel={channel}
                                            handleSubscribe={this.handleSubscribe}
                                            handleUnsubscribe={this.handleUnsubscribe}
                                            currentChannel={currentChannel}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                )
            }
        }
    }

    handleBanner(e) {
        e.preventDefault();
        const formData = new FormData();
        
        formData.append('channel[banner]', e.currentTarget.files[0]);
        this.props.editChannel(formData, this.props.channel.id)
            .then(() => {
                this.update()
            })
    }

    handleCustomize(e) {
        e.preventDefault();
        
        this.setState({ 
            customize: true
        }, this.handleToggle("about"))
    }

    render() {
        const { path, 
            currentUser, 
            currentChannel,
            featuredChannel,
            featuredChannelSubscribed, 
            channel, 
            channels,
            videos, 
            subscribed, 
            createSubscription, 
            deleteSubscription, 
            requestChannel, 
            editChannel, 
            history,
            creator,
            requestCurrentChannel } = this.props
        
        // if (path.includes("/users") && !currentUser.uploads) return null
        // might need to check if && there's no creator return null 
        
        if (!channel || !creator || !videos || (currentUser && !currentChannel) || (featuredChannel && !featuredChannelSubscribed)) return null
            
        return (
            <div className="channel-banner-profile-container">

                    {channel.bannerUrl &&
                        <div className="channel-banner-container">
                            <img src={channel.bannerUrl} />
                        </div>}
                <div className="profile-background">
                    <div className="profile-header-container">
                        <div className="profile-header">
                        <ChannelLogo 
                        currentUser={currentUser} 
                        path={path} 
                        channel={channel} 
                        subscribed={subscribed}
                        createSubscription={createSubscription}
                        deleteSubscription={deleteSubscription}
                        editChannel={editChannel}
                        requestChannel={requestChannel}
                        history={history}
                        handleCustomize={this.handleCustomize}
                        handleSubscribe={this.handleSubscribe}
                        handleUnsubscribe={this.handleUnsubscribe}
                        currentChannel={currentChannel}
                        requestCurrentChannel={requestCurrentChannel}
                        />
                        <div className="profile-nav">
                            <button onClick={this.handleToggle} className="selected-profile-nav-item" id="home">
                                HOME
                            </button>
                            <button onClick={this.handleToggle} className="profile-nav-item" id="videos">
                                VIDEOS
                            </button>
                            <button onClick={this.handleToggle} className="profile-nav-item" id="playlists">
                                PLAYLISTS
                            </button>
                            <button onClick={this.handleToggle} className="profile-nav-item" id="channels">
                                CHANNELS
                            </button>
                            <button onClick={this.handleToggle} className="profile-nav-item" id="community">
                                COMMUNITY
                            </button>
                            <button onClick={this.handleToggle} className="profile-nav-item" id="about">
                                ABOUT
                            </button>
                            <button className="profile-nav-item" id="search">
                                <MdSearch className="profile-search-icon"/>
                            </button>
                        </div>
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

export default Channel