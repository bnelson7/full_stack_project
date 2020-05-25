import React from 'react'
import VideoIndexItem from '../videos/video_index_item'
import { MdWatchLater } from 'react-icons/md'
import { FiSliders } from 'react-icons/fi'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            expanded: false,
            selectedFilters: [{ "SORT BY": "Relevance"}],
            filtered: false 
            // filterTitle: "SORT BY"
        }

        this.handleFilter = this.handleFilter.bind(this)
        this.filterSearch = this.filterSearch.bind(this)
        this.filterVideos = this.filterVideos.bind(this)
    }

    componentDidMount() {
        this.props.requestQueriedVideos(this.props.location.search)
            .then(results => {
                this.setState({ videos: Object.values(results.videos) })
            }); this.state.selectedFilters
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location.search !== this.props.location.search) {
            this.props.requestQueriedVideos(this.props.location.search)
            .then(results => {
                this.setState({ videos: Object.values(results.videos) })
            })
        }
        // if (prevState.selectedFilters !== this.state.selectedFilters) {
        //     debugger
            // want to check if fitlertitles already includes this.state.filter
            // if (prevState.selectedTitles.includes(this.state.filterTitle) && !prevState.alreadyFiltered) {
            //     debugger
            //     prevState.selectedFilters.pop()
            //     prevState.selectedFilters.push(this.state.selectedFilters.pop())
            //     debugger
            //     this.setState({ 
            //         selectedFilters: prevState.selectedFilters,
            //         // alreadyFiltered: !this.state.alreadyFiltered
            //      })
            // }
            // if filterTitle === sort by remove last ele from selectedfilters array
            
        // }
    }

    handleFilter(e) {
        e.preventDefault();
        this.setState({ expanded: !this.state.expanded })
    }

    filterSearch(e) {
        

        // edit filtertitles to be array now
        // here is where we will check if filterTitle is in selectedtitles array
        // if it is we find old and remove using: .includes to check, .find to find, and .splice (or .slice) to remove
        // and update state array with new
        // if it isnt we just add to array
        // not sure if we need alreadyfiltered then or component did update
        let filtered = this.state.selectedFilters
        let foundIdx = null
        let target = null
        for (let i = 0; i < filtered.length; i++) {
            debugger
            if (Object.keys(filtered[i]).includes(e.currentTarget.firstChild.wholeText)) {
                // now we want to find the object whos key is e.current and replace the value with e.target

                target = filtered[i]
                foundIdx = i
                debugger
                break;
            }
        }
        debugger
        if (foundIdx !== null) {
            let key = e.currentTarget.firstChild.wholeText
            filtered.fill({[key]: e.target.innerHTML}, foundIdx, foundIdx+1)
        } 

        let filters = {}
        for (let i = 0; i < filtered.length; i++) {
            filters[i] = filtered[i];
        }
        if (foundIdx === null) {
            debugger
            let key = e.currentTarget.firstChild.wholeText
            filters.newKey = {[key]: e.target.innerHTML}
        } 
        debugger

        let selectedFilters = Object.values(filters)
        const filteredVideos = this.state.videos
        debugger

        for (let i = 0; i < selectedFilters.length; i++) {
            debugger
            switch (Object.keys(selectedFilters[i])[0]) {
                case "UPLOAD DATE":
                    switch (Object.values(selectedFilters[i])[0]) {
                        case "Last hour":
                            const f = filteredVideos.filter(video => video.createdAt.split(" ")[1] === "minutes")
                            break;
                        case "Today":
                            debugger
                            const f1 = filteredVideos.filter(video => {
                                video.createdAt.split(" ")[1] === "hours" ||
                                video.createdAt.split(" ")[1] === "minutes"
                            })
                            break;
                        case "This week":
                            debugger
                            filteredVideos.filter(video => {
                                debugger
                                video.id === 28
                                // video.createdAt.split(" ")[1] === "days" ||
                                // video.createdAt.split(" ")[1] === "hours" ||
                                // video.createdAt.split(" ")[1] === "minutes"
                            })
                            debugger
                            break;
                        case "This month":
                            debugger
                            const f3 = filteredVideos.filter(video => {
                                video.createdAt.split(" ")[2] === "month" ||
                                video.createdAt.split(" ")[1] === "days" ||
                                video.createdAt.split(" ")[1] === "hours" ||
                                video.createdAt.split(" ")[1] === "minutes"
                            })
                            break;
                        default:
                            debugger
                            const f4 = filteredVideos.filter(video => {
                                video.createdAt.split(" ")[2] === "year" ||
                                video.createdAt.split(" ")[2] === "month" ||
                                video.createdAt.split(" ")[1] === "days" ||
                                video.createdAt.split(" ")[1] === "hours" ||
                                video.createdAt.split(" ")[1] === "minutes"
                            })
                            break;
                    }
                    break;
                case "TYPE":
                    switch (Object.values(selectedFilters[i])[0]) {
                        case "Channel":
                            const f5 = filteredVideos.filter(video => video.channel)
                            break;
                        case "Playlist":
                            debugger
                            const f6 = filteredVideos.filter(video => video.playlist)
                            break;
                        default:
                            const f7 = filteredVideos
                            break;
                    }
                    break;
                case "DURATION":
                    debugger
                    switch (Object.values(selectedFilters[i])[0]) {
                        case "Short(&lt; 30 seconds)":
                            debugger
                            const f8 = filteredVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
                            break;
                        default:
                            debugger
                            const f9 = filteredVideos
                            break;
                    }
                    break;
                default:
                    switch (Object.values(selectedFilters[i])[0]) {
                        case "Upload date":
                            const f10 = filteredVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
                            break;
                        case "View count":
                            debugger
                            const f11 = filteredVideos.sort((a, b) => b.views - a.views)
                            break;
                        case "Rating":
                            const f12 = filteredVideos.sort((a, b) => b.likes.like - a.likes.like)
                            break;
                        default:
                            debugger
                            const f13 = filteredVideos
                            break;
                    }
                    break;
                }
        }

        this.setState({ 
            videos: this.state.videos.filter(video => video.id === 28)
            // selectedFilters: Object.values(filters),
            // filtered: true
            // filterTitle: e.currentTarget.firstChild.wholeText 
        })
    }

    filterVideos() {
        // do more shit here
        // ie use state to filter videos
        // iterate though selected filters in state and keep filtering videos by criteria
        // use if currentTarget is sort by then sort otherwise filter by criteria
        // use callback and wait for render 

        // 5/24 add other filters with nested switch cases
        let filteredVideos = this.state.videos
        let filtered = this.state.selectedFilters
        for (let i = 0; i < filtered.length; i++) {
            debugger
            switch (Object.keys(filtered[i])[0]) {
                case "UPLOAD DATE":
                    switch (Object.values(filtered[i])[0]) {
                        case "Last hour":
                            filteredVideos.filter(video => video.createdAt.split(" ")[1] === "minutes")
                            break;
                        case "Today":
                            debugger
                            filteredVideos.filter(video => {
                                video.createdAt.split(" ")[1] === "hours" ||
                                video.createdAt.split(" ")[1] === "minutes"
                            })
                            break;
                        case "This week":
                            debugger
                            filteredVideos.filter(video => {
                                debugger
                                video.id === 28
                                // video.createdAt.split(" ")[1] === "days" ||
                                // video.createdAt.split(" ")[1] === "hours" ||
                                // video.createdAt.split(" ")[1] === "minutes"
                            })
                            console.log(filteredVideos)
                            debugger
                            break;
                        case "This month":
                            debugger
                            filteredVideos.filter(video => {
                                video.createdAt.split(" ")[2] === "month" ||
                                video.createdAt.split(" ")[1] === "days" ||
                                video.createdAt.split(" ")[1] === "hours" ||
                                video.createdAt.split(" ")[1] === "minutes"
                            })
                            break;
                        default:
                            debugger
                            filteredVideos.filter(video => {
                                video.createdAt.split(" ")[2] === "year" ||
                                video.createdAt.split(" ")[2] === "month" ||
                                video.createdAt.split(" ")[1] === "days" ||
                                video.createdAt.split(" ")[1] === "hours" ||
                                video.createdAt.split(" ")[1] === "minutes"
                            })
                            break;
                    }
                    break;
                case "TYPE":
                    switch (Object.values(filtered[i])[0]) {
                        case "Channel":
                            filteredVideos.filter(video => video.channel)
                            break;
                        case "Playlist":
                            debugger
                            filteredVideos.filter(video => video.playlist)
                            break;
                        default:
                            filteredVideos
                            break;
                    }
                    break;
                case "DURATION":
                    debugger
                    switch (Object.values(filtered[i])[0]) {
                        case "Short(&lt; 30 seconds)":
                            debugger
                            filteredVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
                            break;
                        default:
                            debugger
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
                            debugger
                            filteredVideos.sort((a, b) => b.views - a.views)
                            break;
                        case "Rating":
                            filteredVideos.sort((a, b) => b.likes.like - a.likes.like)
                            break;
                        default:
                            debugger
                            filteredVideos
                            break;
                    }
                    break;
                }
        }



            //
            // if (Object.keys(filtered[i])[0] === "SORT BY") {
            //     debugger
            //     switch (Object.values(filtered[i])[0]) {
            //         case "Upload date":
            //             filteredVideos.sort((a, b) => parseInt(a.createdAt.split(" ")[0]) - parseInt(b.createdAt.split(" ")[0]))
            //             break;
            //         case "View count":
            //             debugger
            //             filteredVideos.sort((a, b) => b.views - a.views)
            //             break;
            //         case "Rating":
            //             filteredVideos.sort((a, b) => b.likes.like - a.likes.like)
            //             break;
            //         default:
            //             filteredVideos
            //             break;
            //     }
            // } else {
            //     // this.state.videos.filter(video =>)
            // }
        // let filteredVideos = {}
        // debugger
        // for (let i = 0; i < defaultVideos.length; i++) {
        //     filteredVideos.i = defaultVideos[i];
        // }
        // // console.log(filteredVideos)
        // // this.setState({ 
        // //     alreadyFiltered: true,
        // //     videos: Object.values(filteredVideos) 
        // // })
        debugger
        return filteredVideos;
        // return filters;
    }

    render() {
        const { path } = this.props        
        if (!this.state.videos) return null
        debugger
        // maybe just add && !this.state.filteredtitles.includes(this.state.filterTitle)
        // if (this.state.filtered) {
        //     debugger
        //     this.filterVideos()
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
                            <ul className="search-filter-items-container" onClick={this.filterSearch}>
                                UPLOAD DATE
                                <hr/>
                                <li>Last hour</li>
                                <li>Today</li>
                                <li>This week</li>
                                <li>This month</li>
                                <li>This year</li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.filterSearch}>
                                TYPE
                                <hr/>
                                <li>Video</li>
                                <li>Channel</li>
                                <li>Playlist</li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.filterSearch}>
                                DURATION
                                <hr/>
                                <li>Short({"<"} 30 seconds)</li>
                                <li>Long({">"} 2 minutes)</li>
                            </ul>
                            <ul className="search-filter-items-container" onClick={this.filterSearch}>
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