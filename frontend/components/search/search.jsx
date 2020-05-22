import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import { FaSlidersH } from 'react-icons/fa'
import { MdWatchLater } from 'react-icons/md'
import { FiSliders } from 'react-icons/fi'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: []
        }

    }

    componentDidMount() {
        this.props.requestQueriedVideos(this.props.location.search)
            .then(results => {
                this.setState({ videos: Object.values(results.videos) })
            });
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.props.requestQueriedVideos(this.props.location.search)
            .then(results => {
                this.setState({ videos: Object.values(results.videos) })
            })
        }
    }

    render() {
        const { path } = this.props        
        if (!this.state.videos) return null

        return(
            <div className="background">
                <div className="search-background">
                    <div className="search-filter">
                        <span><FiSliders /></span><h1>FILTER</h1>
                    </div>
                    <hr id="search-hr"/>
                    {this.state.videos.length > 0 ?
                    <div className="search-grid-container">
                        {this.state.videos.map(video => <li className="search-grid-item" key={video.id}><VideoIndexItem video={video} path={path}/></li>)}
                    </div> :
                    <div className="search-no-results-container">
                        <div className="search-no-results">
                            <img src={window.no_search_results} />
                        </div>
                        <div className="search-no-results-text">
                            <span>No results found</span>
                            <span>Try different keywords or remove search filters</span>
                        </div>
                    </div>}
                </div>
            </div>
        )
    }
}

export default Search;