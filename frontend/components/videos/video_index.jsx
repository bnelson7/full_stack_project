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
                    {videos.slice(0, 10).map(video => {
                        return (
                            <li className="grid-item" key={video.id}>
                                <VideoIndexItem video={video} path={path} deleteVideo={deleteVideo}/>
                            </li>
                            )
                        }
                    )}
                </div>    
                <hr className="video-index-hr"/>
                <div className="grid-container">     
                    {videos.slice(10).map(video => {
                        return (
                            <li className="grid-item" key={video.id}>
                                <VideoIndexItem video={video} path={path} deleteVideo={deleteVideo} />
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