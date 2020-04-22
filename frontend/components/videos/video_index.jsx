import React from 'react'
import VideoIndexItem from './video_index_item'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        this.props.requestVideos()
    }

    render() {
        const { videos, path } = this.props
        return (
            <div className= "background">
                <div className="index-title">
                    <h1>Recommended</h1>
                </div>
                <div className="grid-container">
                    {videos.map(video => <li className="grid-item"><VideoIndexItem key={video.id} video={video} path={path}/></li>)}
                </div>
            </div>

        )
    }
}

export default VideoIndex