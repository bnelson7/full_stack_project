import React from 'react'
import VideoIndexItem from './video_index_item'

class VideoIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            prevVideo: null
        }
    }

    componentDidMount() {
        this.props.requestVideos()
    }

    // shouldComponentUpdate(nextProps) {
    //     debugger
    //     if (JSON.stringify(this.props.videos) !== JSON.stringify(nextProps.videos)) {
    //         debugger
    //         return false;
    //     } else {
    //         debugger
    //         return true;
    //     }
    // }

    static getDerivedStateFromProps(props) {
        for (let i = 0; i < props.videos.length; i++) {
            if (props.videos[i].hasOwnProperty('clipUrl')){
                return {
                    prevVideo: props.videos[i]
                }
            }
        }
        return {
            prevVideo: null
        };
    }

    render() {
        const { videos, path, deleteVideo } = this.props
        if (this.state.prevVideo) return null

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