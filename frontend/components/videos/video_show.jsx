import React from 'react'


class VideoShow extends React.Component {

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId)
    }

    render() {
        // console.log(this.props)
        const { video } = this.props
        return(
            <div>
                <div className="video-show-container">

                    <div className="video-container">
                        {/* <video src={video.upload.uploadUrl}></video> */}
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
            </div>
        )
    }
}

export default VideoShow