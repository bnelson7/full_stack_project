import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import VideoIndexItem from './video_index_item'


class VideoShow extends React.Component {
    constructor(props) {
        super(props)
 
    }

    componentDidMount() {
        this.props.requestVideo(this.props.match.params.videoId)
    }

    render() {
        const { video, videos } = this.props
        return (
            <div className="background">
                <div className="page-container">
                    <div className="show-container">
                        <video className="video-container" controls autoPlay >
                            <source type="video/mp4" src={video.videoUrl} />
                        </video>
                        <div className="video-title">
                            <h1>{video.title}</h1>
                            <span>{video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{video.upload_date}</span>
                        </div>
                        <div className="video-description">
                            <div className="profile-thumbnail">
                                <span><FaUserCircle /></span>
                            </div>
                            {/* {video.username} */}
                            {video.description}
                        </div>
                    </div>
                    <div className="related-container">
                        {/* <div className="upnext-video">

                        </div> */}
                        <div className="suggested-videos">
                            {videos.map(video => !video.videoUrl ? <li className="suggested-grid-item"><VideoIndexItem key={video.id} video={video} /></li> : null)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoShow;