import React from 'react'


class VideoShow extends React.Component {
    constructor(props) {
        super(props)
 
    }

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId)
    }

    render() {
        const { video } = this.props
        return (
            <div className="background">
                    <div>
                        <video className="video-container" controls autoPlay >
                            <source type="video/mp4" src={video.videoUrl} />
                        </video>
                    </div>

                    <div className="video-title-container">
            
                    </div>

                    <div className="video-description-container">

                    </div>

                    <div className="upnext-video-container">

                    </div>

                    <div className="related-videos-container">

                    </div>

                    {/* <h1>{video.title}</h1> */}
            </div>
        )
    }
}

export default VideoShow;