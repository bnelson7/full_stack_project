import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import { FaSlidersH } from 'react-icons/fa'
import { MdWatchLater } from 'react-icons/md'

class Search extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            videos: []
        }

    }

    componentDidMount() {
        debugger
        this.props.requestQueriedVideos(this.props.location.search)
        .then(matchedVideos => {
            debugger
            this.setState({ videos: [matchedVideos.videos] })
        });
    }

    render() {
        debugger
        if (!this.state.videos) return null
        console.log(this.state.videos)
        return(
            <div className="background">
                <div className="search-background">
                    <h1><FaSlidersH />FILTER</h1>
                    <hr/>
                    {this.state.videos.length >= 1 ? this.state.videos.map(video => <li className="grid-item"><VideoIndexItem key={video.id} video={video} /></li>) : null}
                </div>
            </div>
        )
    }
}

export default Search;