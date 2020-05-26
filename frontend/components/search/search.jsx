import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import { MdWatchLater } from 'react-icons/md'
import { FiSliders } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

// give iomdclose a classname and toggle visiblity
// add onClick to iomdclose

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            expanded: false,
            selectedFilters: [{ "SORT BY": "Relevance"}],
            alreadyFiltered: false,
            selected: false 
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

    componentDidUpdate(prevProps) {
        if (prevProps.location.search !== this.props.location.search) {
            this.props.requestQueriedVideos(this.props.location.search)
                .then(results => {
                    this.setState({ videos: Object.values(results.videos) })
                })
        }
    }

    handleFilter(e) {
        e.preventDefault();
        debugger
        const filter = document.querySelector(".search-filter")
        if (!this.state.expanded) {
            debugger
            filter.classList.remove("search-filter")
            filter.classList.add("search-filter-expanded")
        } else {
            filter.classList.remove("search-filter-expanded");
            filter.classList.add("search-filter")
        }
        
        $("li:contains('Relevance')").css({
        color : "#030303",
        "font-weight" : "500"
        });

        debugger
        this.setState({ expanded: !this.state.expanded })
    }

    handleSearch(e) {
        e.preventDefault();

        let filtered = this.state.selectedFilters
        let key = e.currentTarget.firstChild.innerHTML
        let foundIdx = null
        let target = null

        for (let i = 0; i < filtered.length; i++) {
            if (Object.keys(filtered[i]).includes(key)) {
                target = filtered[i]
                foundIdx = i
                $(`li:contains(${Object.values(filtered[i])[0]})`)
                  .css({
                    color: "",
                    "font-weight": ""
                  });
                break;
            }
        }
        debugger
        foundIdx === null ? filtered.push({ [key]: e.target.innerHTML }) : filtered.fill({ [key]: e.target.innerHTML }, foundIdx, foundIdx + 1)
        debugger
        if (!this.state.alreadyFiltered) {
            debugger
            this.filterSearch(filtered, this.state.videos)
        } else {
            this.props.requestQueriedVideos(this.props.location.search)
                .then(results => {
                    debugger
                    console.log(filtered)
                    this.filterSearch(filtered, Object.values(results.videos))
                })
        }
        debugger
        for (let i = 0; i < filtered.length; i++) {
            debugger
            $(`li:contains(${Object.values(filtered[i])[0]})`).css({"color" : "#030303", "font-weight" : "500"});

        }
        // iterate through each filter and toggle selected classlist and maybe figure out way to add X icon
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

    render() {
        const { path } = this.props        
        // if (this.state.videos.length === 0 && !this.state.alreadyFiltered) return null
        debugger
        console.log(this.state)
        return(
            <div className="background">
                <div className="search-background">
                    {!this.state.expanded ?
                    <div className="search-filter" onClick={this.handleFilter}>
                        <span>
                            <FiSliders />
                        </span>
                        <h1>FILTER</h1>
                    </div> :
                    <div className="search-filter-container">
                        <div className="search-filter" onClick={this.handleFilter}>
                            <span>
                                <FiSliders />
                            </span>
                            <h1>FILTER</h1>
                        </div>
                        <div className="search-filter-dropdown-container">
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                <h1>UPLOAD DATE</h1>
                                <hr/>
                                <li>Last hour</li><IoMdClose />
                                <li>Today</li><IoMdClose />
                                <li>This week</li><IoMdClose />
                                <li>This month</li><IoMdClose />
                                <li>This year</li><IoMdClose />
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                <h1>TYPE</h1>
                                <hr/>
                                <li>Video</li><IoMdClose />
                                <li>Channel</li><IoMdClose />
                                <li>Playlist</li><IoMdClose />
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                <h1>DURATION</h1>
                                <hr/>
                                <li>Short({"<"} 30 seconds)</li><IoMdClose />
                                <li>Long({">"} 2 minutes)</li><IoMdClose />
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                <h1>SORT BY</h1>
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