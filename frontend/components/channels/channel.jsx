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

class Channel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selected: "home",
            sortSelected: null,
            subscribed: null,
            customize: false,
            customizing: false,
            description: ""
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
        // this.updateSubscribed = this.updateSubscribed.bind(this)
    }

    componentDidMount() {
        debugger
        // this.props.path.includes("/channels") ? 
        !this.props.channel && this.props.requestChannel(this.props.match.params.channelId)
            .then(res => {
                debugger
                this.props.requestUser(res.channel.creatorId)
            })
        // : this.props.requestUser(this.props.currentUser.id)
    }


    // shouldComponentUpdate(nextProps) {
    //     debugger
    //     if (typeof this.props.video !== "undefined" && this.props.video !== nextProps.video) {
    //         debugger
    //         return false;
    //     } 
    //     // else if (this.props.channel.subscribed !== nextProps.channel.subscribed) {
    //     //     
    //     //     return true
    //     // }
    //      else {
    //          debugger
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

    sortVideos(videos) {
        const { sortSelected } = this.state
        const { currentUser, path, deleteVideo, updateVideo, openModal } = this.props
        let userVideos = videos.filter(video => video.creatorId === currentUser.id)

        if (sortSelected === "popular") {
            userVideos.sort((a, b) => b.views - a.views)
            return (
                <div className="profile-videos-grid-container">
                    {userVideos.map(video => {
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
            userVideos.sort((a, b) => parseInt(b.createdAt.split(" ")[0]) - parseInt(a.createdAt.split(" ")[0]))
            return (
                <div className="profile-videos-grid-container">
                    {userVideos.map(video => {
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
            userVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
            return (
                <div className="profile-videos-grid-container">
                    {userVideos.map(video => {
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

    updateDescription(e) {
        
        return e => {
            this.setState({ description: e.currentTarget.value })
        }
    }

    handleEditForm() {
        this.setState({ 
            customizing: !this.state.customizing,
            customize: !this.state.customize,
            description: this.props.channel.description
        })
    }

    handleEdit(e) {
        e.preventDefault();
        const description = new FormData()
        description.append('channel[description]', this.state.description)
        
        
        this.props.editChannel(description, this.props.channel.id)
        .then(() => {
            
                this.setState({
                    customize: false,
                    customizing: false
                })
            })
    }

    renderSelected() {
        const { selected, sortSelected } = this.state
        const { videos, video, path, deleteVideo, updateVideo, openModal, currentUser, channel } = this.props
debugger
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
                return (
                    <div className="profile-channels">
                        <h1>This channel doesn't feature any other channels.</h1>
                    </div>
                )
            case "discussion":
                return (
                    <div className="profile-comment-form-container">
                        <CommentFormContainer />
                    </div>
                )
            case "about":
                return (
                    <div className="channel-about-container">
                        <div className="channel-about-info">
                            <h1>
                                Description
                            </h1> 
                            {channel.description}
                            {this.state.customize &&
                                <button onClick={this.handleEditForm}>
                                    Channel description
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
                                    onChange={this.updateDescription("description")}
                                    >

                                    </textarea>
                                    <div>
                                        <button onClick={this.handleEditForm}>
                                            Cancel
                                        </button>
                                        <button onClick={this.handleEdit}>
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </form>}
                        
                            <div>
                                <h1>
                                    Details
                                </h1>
                                <label htmlFor="file4">
                                    Edit channel art:
                                    {/* <button className="banner-btn"> */}
                                        <MdModeEdit />
                                    {/* </button> */}
                                </label>
                                <input type="file" name="file4" id="file4" className="hidden-input" onChange={e => this.handleBanner(e)} />
                            </div>
                    
                        </div>
                        <ul className="profile-about">
                            <li>Stats</li>
                            <li>Joined {this.getDate()}</li>
                            <li>{this.getViews()} views</li>
                            <li><MdFlag /></li>
                        </ul>
                        <div>
                            <h1>
                                FEATURED CHANNELS
                            </h1>
                                <ul>
                                    {this.props.channels.map(channel => {
                                        <li key={channel.id}>
                                            <ChannelIndexItem path={path} />
                                        </li>
                                    })}
                                </ul>
                        </div>
                    </div>
                )
            case "search":
                return (
                    <div className="profile-search">

                    </div>
                )
            default:
                if (!videos || videos.length === 0) {
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
            } else {
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
                                {this.props.channels.map(channel => {
                                    debugger
                                    return (
                                        <li className="channel-home-grid-item-container" key={channel.id}>
                                            <ChannelIndexItem 
                                            path={path} 
                                            selected={this.state.selected}
                                            channel={channel}
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
        const { path, currentUser, channel, channels, subscribed, createSubscription, deleteSubscription, requestChannel, editChannel, history } = this.props
        debugger
        // if (path.includes("/users") && !currentUser.uploads) return null
        // might need to check if && there's no creator return null 
        if (!channel || !channels) return null
        debugger
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
                        // updateUser={updateUser} 
                        channel={channel} 
                        subscribed={subscribed}
                        createSubscription={createSubscription}
                        deleteSubscription={deleteSubscription}
                        editChannel={editChannel}
                        // updateSubscribed={this.updateSubscribed} 
                        requestChannel={requestChannel}
                        history={history}
                        handleCustomize={this.handleCustomize}
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
                            <button onClick={this.handleToggle} className="profile-nav-item" id="discussion">
                                DISCUSSION
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