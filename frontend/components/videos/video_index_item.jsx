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
        const { channel, currentUser } = this.props
        debugger
        return (
            this.props.path === `/` ? (
                <div className="grid-index-container">
                    <div className="video-thumbnail">
                        <Link to={`/videos/${this.props.video.id}`}>
                            <img src={this.props.video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="video-info-container" role="group">
                        <div className="profile-thumbnail">
                            <span>
                                {this.props.video.creator.photoUrl ? <img src={this.props.video.creator.photoUrl} /> : <img src={window.user} />}
                            </span>
                        </div>
                        <div className="video-info">
                            <h1>{this.props.video.title}</h1>
                            <div className="views-date">
                                <h1>{this.props.video.creator.username}&nbsp;<MdCheckCircle className="verified"/></h1>
                                <span>{this.props.video.views} views&nbsp;
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    &nbsp;{this.props.video.createdAt} ago
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : this.props.path.includes('/videos') ? (
                <div className="grid-item-container">
                    <div className="video-thumbnail-show">
                        <Link to={`/videos/${this.props.video.id}`}>
                            <img src={this.props.video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="video-show-info-container">
                        <div className="video-show-info">
                            <h1 id="show-title">{this.props.video.title}</h1>
                            <div className="views-date-show">
                                <h1 id="show-user">{this.props.video.creator.username}&nbsp;<span className="verified"><MdCheckCircle /></span></h1>
                            </div>
                            <span id="views-date-show">{this.props.video.views} views&nbsp;
                                <span>
                                    <GoPrimitiveDot />
                                </span>
                                &nbsp;{this.props.video.createdAt} ago
                            </span>
                        </div>
                    </div>
                </div>
            ) : (this.props.path.includes('/users') || this.props.path.includes('/channels')) ? (
                <div className="profile-videos-item-container">
                    <div className="profile-videos-item">
                        <Link to={`/videos/${this.props.video.id}`}>
                            <img src={this.props.video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="profile-videos-item-info">
                        <div className="profile-videos-item-title-container">
                            <div className="profile-videos-item-title">
                                <h1 id="show-title">{this.props.video.title}</h1>
                            </div>
                            <div className="profile-videos-item-views">
                                <span id="views-date-show">{this.props.video.views} views&nbsp;
                                    <span>
                                        <GoPrimitiveDot />
                                    </span>
                                    &nbsp;{this.props.video.createdAt} ago
                                </span>
                            </div>
                        </div>
                        {channel && currentUser && channel.ownerId === currentUser.id ? 
                        <VideoDropdown 
                        video={this.props.video} 
                        handleDelete={this.handleDelete} 
                        handleEdit={this.handleEdit} 
                        /> : null}
                    </div>
                </div>
            ) : (
                <div className="grid-item-search-container">
                    <div className="video-thumbnail-search">
                        <Link to={`/videos/${this.props.video.id}`}>
                            <img src={this.props.video.thumbnailUrl} />
                        </Link>
                    </div>
                    <div className="video-search-info-container">
                        <div className="video-search-info">
                            <div className="title-user-search">
                                <h1 id="search-title">{this.props.video.title}</h1>
                                <h1 id="search-user">{this.props.video.creator.username}&nbsp;
                                    <span className="verified">
                                        <MdCheckCircle />
                                    </span>
                                    &nbsp;&nbsp;
                                    <span id="title-user-search">{this.props.video.views} views&nbsp;
                                        <span>
                                            <GoPrimitiveDot />
                                        </span>
                                        &nbsp;{this.props.video.createdAt} ago
                                    </span>
                                </h1>
                            </div>
                            <div >
                                <span id="description-search">{this.props.video.description}</span>
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