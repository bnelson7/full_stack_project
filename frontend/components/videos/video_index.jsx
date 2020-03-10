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
            <div className="index-container">
                <h1>Recommended</h1>
                <ul>
                    {videos.map(video => <VideoIndexItem key={video.id} video={video} />)}
                </ul>
            </div>
        )
    }
}

export default VideoIndex