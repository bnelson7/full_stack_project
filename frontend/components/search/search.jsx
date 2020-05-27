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
            alreadyFiltered: false 
        }

        this.handleFilter = this.handleFilter.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.filterSearch = this.filterSearch.bind(this)
        this.handleClose = this.handleClose.bind(this)
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

    handleFilter() {
        if (this.state.expanded) {
            $(".search-filter").css("color", "#111111")
            for (let i = 0; i < this.state.selectedFilters.length; i++) {
                $(`li:contains(${Object.values(this.state.selectedFilters[i])[0]})`).css({ "color": "#030303", "font-weight": "500" });
                $(`li:contains(${Object.values(this.state.selectedFilters[i])[0]})`).children().css("display", "inline")
            }
        } else {
            this.setState({ expanded: true }, this.handleFilter)
        }
    }

    handleClose(e) {
        e.preventDefault();
        this.setState({ expanded: false })
    }

    handleSearch(e) {
        e.preventDefault();
        let filtered = this.state.selectedFilters
        let key = e.currentTarget.firstChild.innerHTML
        let val = e.target.innerText
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

        e.target.tagName === "svg" && $(e.target).css("display", "")

        let removed = [] 
        if (foundIdx === null) {
            filtered.push({ [key]: val })
        } else if (foundIdx !== null && Object.values(filtered[foundIdx])[0] === val) {
            $(e.target.firstElementChild).css("display", "")
            removed = filtered.splice(foundIdx, 1)
            filtered
        } else {
            for (let i = 0; i < e.currentTarget.children.length; i++) {
                if (e.currentTarget.children[i].innerText === Object.values(target)[0]) {
                    $(e.currentTarget.children[i].firstElementChild).css("display", "")
                    break;
                }
            }
            filtered.fill({ [key]: val }, foundIdx, foundIdx + 1)
        }

        if (!this.state.alreadyFiltered) {
            this.filterSearch(filtered, this.state.videos)
        } else {
            this.props.requestQueriedVideos(this.props.location.search)
                .then(results => {
                    this.filterSearch(filtered, Object.values(results.videos))
                })
        }
 
        for (let i = 0; i < filtered.length; i++) {
            $(`li:contains(${Object.values(filtered[i])[0]})`).css({"color" : "#030303", "font-weight" : "500"});
            $(`li:contains(${Object.values(filtered[i])[0]})`).children().css("display", "inline")
        }
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
                            // let filter6 = filteredVideos
                            // filteredVideos = filter6
                            filteredVideos
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
                        <div className="search-filter" onClick={this.handleClose}>
                            <span>
                                <FiSliders />
                            </span>
                            <h1>FILTER</h1>
                        </div>
                        <div className="search-filter-dropdown-container">
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                <h1>UPLOAD DATE</h1>
                                <hr/>
                                <li>Last hour<IoMdClose className="close-filter"/></li>
                                <li>Today<IoMdClose className="close-filter"/></li>
                                <li>This week<IoMdClose className="close-filter"/></li>
                                <li>This month<IoMdClose className="close-filter"/></li>
                                <li>This year<IoMdClose className="close-filter"/></li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                <h1>TYPE</h1>
                                <hr/>
                                <li>Video<IoMdClose className="close-filter"/></li>
                                <li>Channel<IoMdClose className="close-filter"/></li>
                                <li>Playlist<IoMdClose className="close-filter"/></li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.handleSearch}>
                                <h1>DURATION</h1>
                                <hr/>
                                <li>Short({"<"} 30 seconds)<IoMdClose className="close-filter"/></li>
                                <li>Long({">"} 2 minutes)<IoMdClose className="close-filter"/></li>
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