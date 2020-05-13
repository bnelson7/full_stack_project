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
        const { videos, path, deleteVideo } = this.props
        return (
            <div className= "background">
                <div className="index-title">
                    <h1>Recommended</h1>
                </div>
                <div className="grid-container">
                    {videos.map(video => {
                        return (
                            <li className="grid-item" key={video.id}>
                                <VideoIndexItem video={video} path={path} deleteVideo={deleteVideo}/>
                            </li>
                            )
                        }
                    )}
                </div>
            </div>

        )
    }
}

export default VideoIndex