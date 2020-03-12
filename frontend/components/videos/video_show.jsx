import React from 'react'


class VideoShow extends React.Component {

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId)
    }

    render() {
        console.log(this.props)
        const { video } = this.props
        return(
            <div>
                <h1>{video.title}</h1>
            
            {/* <div className="video-container">
                <div className="video-desciption">

                </div>
            </div>
                <div className="recommended-videos">

                </div> */}
            </div>
        )
    }
}

export default VideoShow