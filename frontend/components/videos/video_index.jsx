import React from 'react'
import VideoIndexItem from './video_index_item'
import { Link } from 'react-router-dom'

class VideoIndex extends React.Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         videos: []
    //     }
    // }

    componentDidMount() {
        this.props.requestVideos()
    }

    render() {
        const { videos } = this.props
        return (
            <div>
                <div className="sidebar-container">
                    <div className="home-icon"><i className="fas fa-home"></i><span>Home</span></div>
                    <div className="sidebar-icon"><i className="fas fa-fire"></i><span>Trending</span></div>
                    <div className="sidebar-icon"><i className="fab fa-github"></i><span>Github</span></div>
                    <div className="sidebar-icon"><i className="fab fa-linkedin"></i><span>Linkedin</span></div>
                    <div className="sidebar-icon"><i class="fas fa-history"></i><span>History</span></div>
                </div>
                    <div className="index-container">
                        <div className="index-container-title"><h1 id="title">Recommended</h1></div>
                        <ul className="index-item-list">
                            {videos.map(video => <li className="index-item"><VideoIndexItem key={video.id} video={video} /></li>)}
                        </ul>
                    </div>
            </div>

        )
    }
}

export default VideoIndex