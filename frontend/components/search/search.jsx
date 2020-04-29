import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import { FaSlidersH } from 'react-icons/fa'

class Search extends React.Component {
    constructor(props) {
        debugger
        super(props)

    }

    componentDidMount() {
        debugger
        this.props.requestQueriedVideos(this.props.location.search)
    }

    render() {
        const { videos } = this.props
debugger
        return(
            <div className="background">
                <div className="search-background">
                    <h1><FaSlidersH />FILTER</h1>
                    <hr/>
                    {videos.map(video => <li className="grid-item"><VideoIndexItem key={video.id} video={video} /></li>)}
                </div>
            </div>
        )
    }
}

export default Search;