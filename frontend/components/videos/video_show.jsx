import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import VideoIndexItem from './video_index_item'


class VideoShow extends React.Component {
    constructor(props) {
        debugger
        super(props)

    }

    componentDidMount() {
        debugger
        this.props.requestVideo(this.props.match.params.videoId)
        // .then(videos => {
        //     debugger
        //     this.setState({ videos: [videos] })
        // })
    }

    componentDidUpdate(prevProps) {
        debugger
        if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
            this.props.requestVideo(this.props.match.params.videoId)
        }

    }

    render() {
        const { video, videos, videoId } = this.props
        debugger
        if (!video || !video.clipUrl) return null
        debugger
        return (
            <div className="background">
                <div className="page-container">
                    <div className="show-container">
                        <div className="video-container">
                            <video controls autoPlay >
                                <source type="video/mp4" src={video.clipUrl} />
                            </video>
                        </div>
                        <div className="video-title">
                            <h1>{video.title}</h1>
                            <span>{video.views}K views&nbsp;<span><GoPrimitiveDot /></span>&nbsp;{video.created_at}</span>
                        </div>
                        <div className="video-description">
                            <div className="profile-thumbnail">
                                <span><img src={video.creator.photoUrl} /></span>
                            </div>
                            {/* {video.username} */}
                            {video.description}
                        </div>
                    </div>
                    {/* <div className="related-container"> */}
                        {/* <div className="upnext-video">

                        </div> */}
                        <div className="suggested-videos">
                            {videos.map(video => video.id !== videoId ? <li className="suggested-grid-item"><VideoIndexItem key={video.id} video={video} /></li> : null)}
                        </div>
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default VideoShow;