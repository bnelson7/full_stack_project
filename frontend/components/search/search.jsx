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
        .then(results => {
            debugger
            this.setState({ videos: [results.videos] })
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
                    {this.state.videos.length >= 1 ? this.state.videos.map(video => <li className="grid-item"><VideoIndexItem key={video.id} video={video} /></li>) : <p>No videos match your Search</p>}
                </div>
            </div>
        )
    }
}

export default Search;