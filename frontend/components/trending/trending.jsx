import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import moment from "moment";
import "moment-duration-format";

class Trending extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            prevVideo: null
        }
        
        this.trendingAlgorithm = this.trendingAlgorithm.bind(this)
        this.getTrending = this.getTrending.bind(this)
    }

    componentDidMount() {
       (!this.props.videos.length || this.state.prevVideo) && this.props.requestVideos()
    }

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

    getTrending(trendingVideos) {
        trendingVideos.sort((a, b) => b.ranking - a.ranking)
    }

    trendingAlgorithm(videos) {
        for (let i = 0; i < videos.length; i++) {
            let ranking = 0
  
            ranking += (videos[i].likes.like + videos[i].likes.dislike)
            ranking += (videos[i].views / 100)

            let totalCommentsWithLikes = 0

            videos[i].comments.forEach(comment => {
                if (comment.replies) {
                    let queue = [comment]
                    while (queue.length > 0) {
                        let parent = queue.shift()
                        if (parent.replies) {
                            for (let i = 0; i < parent.replies.length; i++) {
                                queue.push(parent.replies[i])
                            }
                        }
                        totalCommentsWithLikes++
                        totalCommentsWithLikes += (parent.likes.like + parent.likes.dislike)
                    }
                } else {
                    totalCommentsWithLikes++
                    totalCommentsWithLikes += (comment.likes.like + comment.likes.dislike)
                }
            });

            ranking += totalCommentsWithLikes

            let x = moment(Date.now()) 
            let y = moment(videos[i].uploadDate)
            let milliseconds = moment.duration(x.diff(y))._milliseconds;
            let days = (milliseconds / 86400000) 
           
            videos[i].ranking = (ranking / days)
        }

        this.getTrending(videos)
    }

    render() {
        const { path, videos } = this.props
        videos.length && this.trendingAlgorithm(videos)
        if (this.state.prevVideo) return null;

        return (
            <div className="background">
                <div className="search-background">
                    <div className="search-filter">
                        <h1 id="trending-title">Ads</h1>
                    </div> 
                    <div className="search-grid-container">
                        {videos.map(video => 
                        <li className="search-grid-item" key={video.id}>
                            <VideoIndexItem 
                            video={video} 
                            path={path}
                            />
                        </li>)}
                    </div> 
                </div>
            </div>
        )
    }
}

export default Trending