import React from 'react'
import { Link } from 'react-router-dom'
import { GoPrimitiveDot } from 'react-icons/go'
import { MdCheckCircle } from 'react-icons/md'
import VideoDropdown from '../hooks/video_dropdown'

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props)

        this.handleDelete = this.handleDelete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(e) {
        e.preventDefault();
        const editVideo = Object.assign({}, {type: 'edit'}, this.props)
        this.props.openModal(editVideo)
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteVideo(this.props.video.id)
            .then(() => {
                this.props.update()
            })
    }
  
    formatVideos() {
        const { video, path, channel, currentUser } = this.props

        return (
            path === `/` ? (
                <div className="grid-index-container">
                    <div className="video-thumbnail">
                        <Link to={`/videos/${video.id}`}>
                            <img src={video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="video-info-container" role="group">
                        <div className="profile-thumbnail">
                            <span>
                                <Link to={`/channels/${video.channel.id}`}>
                                    {video.channel.logoUrl ? <img src={video.channel.logoUrl} /> : <img src={window.user} />}
                                </Link>
                            </span>
                        </div>
                        <div className="video-info">
                            <h1>{video.title}</h1>
                            <div className="views-date">
                                <h1>{video.channel.name}&nbsp;<MdCheckCircle className="verified"/></h1>
                                <span>{video.views} views&nbsp;
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    &nbsp;{video.createdAt} ago
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : path.includes('/videos') ? (
                <div className="grid-item-container">
                    <div className="video-thumbnail-show">
                        <Link to={`/videos/${video.id}`}>
                            <img src={video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="video-show-info-container">
                        <div className="video-show-info">
                            <h1 id="show-title">{video.title}</h1>
                            <div className="views-date-show">
                                <h1 id="show-user">
                                    {video.channel.name}&nbsp;
                                    <span className="verified">
                                        <MdCheckCircle />
                                    </span>
                                </h1>
                            </div>
                            <span id="views-date-show">{video.views} views&nbsp;
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                &nbsp;{video.createdAt} ago
                            </span>
                        </div>
                    </div>
                </div>
            ) : (path.includes('/users') || path.includes('/channels')) ? (
                <div className="profile-videos-item-container">
                    <div className="profile-videos-item">
                        <Link to={`/videos/${video.id}`}>
                            <img src={video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="profile-videos-item-info">
                        <div className="profile-videos-item-title-container">
                            <div className="profile-videos-item-title">
                                <h1 id="show-title">{video.title}</h1>
                            </div>
                            <div className="profile-videos-item-views">
                                <span id="views-date-show">{video.views} views&nbsp;
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    &nbsp;{video.createdAt} ago
                                </span>
                            </div>
                        </div>
                        {channel && currentUser && channel.creatorId === currentUser.id ? 
                        <VideoDropdown 
                        video={video} 
                        handleDelete={this.handleDelete} 
                        handleEdit={this.handleEdit} 
                        /> : null}
                    </div>
                </div>
            ) : (
                <div className="grid-item-search-container">
                    <div className="video-thumbnail-search">
                        <Link to={`/videos/${video.id}`}>
                            <img src={video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="video-search-info-container">
                        <div className="video-search-info">
                            <div className="title-user-search">
                                <h1 id="search-title">{video.title}</h1>
                                <h1 id="search-user">{video.channel.name}&nbsp;
                                    <span className="verified">
                                        <MdCheckCircle />
                                    </span>
                                    &nbsp;&nbsp;
                                    <span id="title-user-search">
                                        {video.views} views&nbsp;
                                        <span>
                                            <GoPrimitiveDot />
                                        </span>
                                        &nbsp;{video.createdAt} ago
                                    </span>
                                </h1>
                            </div>
                            <div>
                                <span id="description-search">
                                    {video.description}
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 
            )
        )   
    }

    render() {
        
        return (
            <div>
                {this.formatVideos()}
            </div>
        )
    }
}

export default VideoIndexItem;