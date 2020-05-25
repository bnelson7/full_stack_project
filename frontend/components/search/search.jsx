import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import { MdWatchLater } from 'react-icons/md'
import { FiSliders } from 'react-icons/fi'

// problem: need to reset state with orinally searched videos after user clicks another filter that should have different videos
// fix: find way to check if already filtered and need to refetch videos
// once refetched update the state with originally searched videos and run through new filter
// possible solution: recursively call filter search if need to refetch videos
// and pass in original videos into new filter
// problem caused: dont have access to e then 

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            expanded: false,
            selectedFilters: [{ "SORT BY": "Relevance"}],
            alreadyFiltered: false 
        }

        this.handleFilter = this.handleFilter.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.filterSearch = this.filterSearch.bind(this)
    }

    componentDidMount() {
        this.props.requestQueriedVideos(this.props.location.search)
            .then(results => {
                this.setState({ videos: Object.values(results.videos) })
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.search !== this.props.location.search) {
            this.props.requestQueriedVideos(this.props.location.search)
                .then(results => {
                    this.setState({ videos: Object.values(results.videos) })
                })
        }
        debugger
        // if (prevState.selectedFilters !== this.state.selectedFilters) {
        //     debugger
        // }
    }

    handleFilter(e) {
        e.preventDefault();
        this.setState({ expanded: !this.state.expanded })
    }

    filterSearch(filtered, filteredVideos) {
        for (let i = 0; i < filtered.length; i++) {

            switch (Object.keys(filtered[i])[0]) {
                case "UPLOAD DATE":
                    switch (Object.values(filtered[i])[0]) {
                        case "Last hour":
                            let filter = filteredVideos.filter(video => video.createdAt.split(" ")[1] === "minutes")
                            filteredVideos = filter
                            break;
                        case "Today":
                            let filter0 = filteredVideos.filter(video => {
                                return (
                                    video.createdAt.split(" ")[1] === "hours" ||
                                    video.createdAt.split(" ")[1] === "minutes"
                                )
                            })
                            filteredVideos = filter0
                            break;
                        case "This week":
                            let filter1 = filteredVideos.filter(video => {
                                return (
                                    video.createdAt.split(" ")[1] === "days" ||
                                    video.createdAt.split(" ")[1] === "hours" ||
                                    video.createdAt.split(" ")[1] === "minutes"
                                )
                            })
                            filteredVideos = filter1
                            console.log(filteredVideos)
                            break;
                        case "This month":
                            let filter2 = filteredVideos.filter(video => {
                                return (
                                    video.createdAt.split(" ")[2] === "month" ||
                                    video.createdAt.split(" ")[1] === "days" ||
                                    video.createdAt.split(" ")[1] === "hours" ||
                                    video.createdAt.split(" ")[1] === "minutes"
                                )
                            })
                            filteredVideos = filter2
                            break;
                        default:
                            let filter3 = filteredVideos.filter(video => {
                                return (
                                    video.createdAt.split(" ")[2] === "year" ||
                                    video.createdAt.split(" ")[2] === "month" ||
                                    video.createdAt.split(" ")[1] === "days" ||
                                    video.createdAt.split(" ")[1] === "hours" ||
                                    video.createdAt.split(" ")[1] === "minutes"
                                )
                            })
                            filteredVideos = filter3
                            break;
                    }
                    break;
                case "TYPE":
                    switch (Object.values(filtered[i])[0]) {
                        case "Channel":
                            let filter4 = filteredVideos.filter(video => video.channel)
                            filteredVideos = filter4
                            break;
                        case "Playlist":
                            let filter5 = filteredVideos.filter(video => video.playlist)
                            filteredVideos = filter5
                            break;
                        default:
                            filteredVideos
                            break;
                    }
                    break;
                case "DURATION":

                    switch (Object.values(filtered[i])[0]) {
                        case "Short(&lt; 30 seconds)":
                            let filter6 = filteredVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
                            filteredVideos = filter6
                            break;
                        default:
                            filteredVideos
                            break;
                    }
                    break;
                default:
                    switch (Object.values(filtered[i])[0]) {
                        case "Upload date":
                            filteredVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
                            break;
                        case "View count":
                            filteredVideos.sort((a, b) => b.views - a.views)
                            break;
                        case "Rating":
                            filteredVideos.sort((a, b) => b.likes.like - a.likes.like)
                            break;
                        default:
                            filteredVideos
                            break;
                    }
                    break;
            }
        }
        debugger

        this.setState({
            videos: filteredVideos,
            selectedFilters: filtered,
            alreadyFiltered: true
        })
    }


    // make method below handle filter and have if else statement and pass in necessary values
    // ie: if already filtered fetch videos and pass those into filter search upon success
    // to pass in: filtered = this.state.selectedFilters
    //             filteredVideos = this.state.videos if alreadyFiltered is false 
    //             filteredVideos = Object.values(results.videos) if alreadyFiltered is true 
    handleSearch(e) {
        debugger
        // e.preventDefault();

        // if (this.state.alreadyFiltered) {
        //     debugger
        //     this.props.requestQueriedVideos(this.props.location.search)
        //         .then(results => {
        //             debugger
        //             this.setState({
        //                 videos: Object.values(results.videos)
        //             },
        //                 this.filterSearch)
        //         })
        // }

        let filtered = this.state.selectedFilters
        let key = e.currentTarget.firstChild.wholeText
        let foundIdx = null
        let target = null
        debugger
        for (let i = 0; i < filtered.length; i++) {
            debugger
            if (Object.keys(filtered[i]).includes(key)) {
                target = filtered[i]
                foundIdx = i
                debugger
                break;
            }
        }
        debugger

        foundIdx === null ? filtered.push({ [key]: e.target.innerHTML }) : filtered.fill({ [key]: e.target.innerHTML }, foundIdx, foundIdx + 1)

        debugger
        if (!this.state.alreadyFiltered) {
            this.filterSearch(filtered, this.state.videos)
        } else {
            this.props.requestQueriedVideos(this.props.location.search)
                .then(results => {
                    debugger
                    console.log(filtered)
                    this.filterSearch(filtered, Object.values(results.videos))
                })
        }
        // let filteredVideos = !this.state.alreadyFiltered ? this.state.videos 
        //     : this.props.requestQueriedVideos(this.props.location.search)
        //         .then(results => {
        //             debugger
        //             Object.values(results.videos)
        //         } 
        
        
    }

    render() {
        const { path } = this.props        
        // if (this.state.videos.length === 0 && !this.state.alreadyFiltered) return null
        debugger
        // if (this.state.filtered) {
        //     debugger
        //     this.filterVideos()
        // }
        // if (this.state.filtered) {
        //     debugger
        //     this.relevantVideos()
        // }
        debugger
        console.log(this.state)
        return(
            <div className="background">
                <div className="search-background">
                    {!this.state.expanded ?
                    <div className="search-filter" onClick={this.handleFilter}>
                        <span><FiSliders /></span><h1>FILTER</h1>
                    </div> :
                    <div className="search-filter-container">
                        <div className="search-filter" onClick={this.handleFilter}>
                            <span><FiSliders /></span><h1>FILTER</h1>
                        </div>
                        <div className="search-filter-dropdown-container">
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                UPLOAD DATE
                                <hr/>
                                <li>Last hour</li>
                                <li>Today</li>
                                <li>This week</li>
                                <li>This month</li>
                                <li>This year</li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                TYPE
                                <hr/>
                                <li>Video</li>
                                <li>Channel</li>
                                <li>Playlist</li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                DURATION
                                <hr/>
                                <li>Short({"<"} 30 seconds)</li>
                                <li>Long({">"} 2 minutes)</li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                SORT BY
                                <hr/>
                                <li>Relevance</li>
                                <li>Upload date</li>
                                <li>View count</li>
                                <li>Rating</li>
                            </ul>
                        </div>
                    </div>}
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