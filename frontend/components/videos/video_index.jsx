import React from 'react'
import VideoIndexItem from './video_index_item'
import { Link } from 'react-router-dom'
import { MdHome } from "react-icons/md";
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { MdHistory } from 'react-icons/md'
import { FaFire } from 'react-icons/fa'
import { MdVideoLibrary } from 'react-icons/md'
import { MdSubscriptions } from 'react-icons/md'

class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.requestVideos()
    }

    render() {
        const { videos } = this.props
        return (
            <div>
                <div className="sidebar-container">

                    <div className="home-icon">
                            <MdHome />
                        <div className="sidebar-text">Home</div>
                    </div>
                    <div className="sidebar-icon">
                        <FaFire />
                        <span>Trending</span>
                    </div>
                    <div className="sidebar-icon">
                        <MdSubscriptions />
                        <span>Subscriptions</span>
                    </div>
                    <div className="sidebar-icon">
                        <MdVideoLibrary />
                        <span>Library</span>
                    </div>
                    <div className="sidebar-icon">
                        < MdHistory/>
                        <span>History</span>
                    </div>
                    <div className="sidebar-icon">
                        < FaGithub/>
                        <span>Github</span>
                    </div>
                    <div className="sidebar-icon">
                        < FaLinkedin/>
                        <span>Linkedin</span>
                    </div>

                </div>

                    <div className="index-container">

                        <div className="index-container-title">
                            <h1 id="title">Recommended</h1>
                        </div>
                        
                        <ul className="index-item-list">
                            {videos.map(video => <li className="index-item"><VideoIndexItem key={video.id} video={video} /></li>)}
                            <hr />
                        </ul>

                    </div>
            </div>

        )
    }
}

export default VideoIndex