import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { requestVideos } from '../../actions/video_actions'
import { requestChannels } from '../../actions/channel_actions'

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value, videosAndChannels) {
    debugger
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return videosAndChannels
      .filter(vidchan =>
        vidchan.title ? regex.test(vidchan.title) : regex.test(vidchan.name)
      )
      .map(vidchan =>
        vidchan.title ? {video: vidchan.title.toLowerCase()} : { channel: vidchan.name.toLowerCase()}
      );
}

function getSuggestionValue(suggestion) {
    return suggestion.name ? suggestion.name : suggestion.title;
}

class SearchSuggest extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (prevProps.videosAndChannels !== this.props.videosAndChannels) {
    //         debugger
    //         this.props.requestVideos()
    //             .then(() => {
    //                 this.props.requestChannels()
    //             })
    //     }
    // }

    onChange = (event, { newValue, method }) => {
        debugger
        if (event.type === "change") {
            this.setState({ value: newValue });
            this.props.getQueryString(event) 
        } else {
            const type = document.getElementById("suggestion-type").value
            debugger
            this.setState({ value: event.currentTarget.innerText })
            this.props.getQueryString(event)
            this.props.handleSearch(event, event.currentTarget.innerText, type)
        }
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value, this.props.videosAndChannels)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    renderSuggestion = (suggestion, { query, isHighlighted }) => {
        let type = ""
        if (suggestion.video) {
            suggestion = suggestion.video
            type = "video"
        } else {
            suggestion = suggestion.channel
            type = "channel"
        }
        return (
            <button id="suggestion-type" value={type}>
                <span id="auto-suggest-query">{query}</span>{suggestion.slice(query.length)} 
            </button>
        )
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            placeholder: "Search",
            value,
            onChange: this.onChange
        };
        console.log(this.props.videosAndChannels)
debugger
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps} />
        );
    }
}

const mstp = state => {
    let videosAndChannels = Object.values(state.entities.videos)
    let channels = Object.values(state.entities.channels)

    channels.forEach(channel => {
        videosAndChannels.push(channel)
    });

    return {
        videosAndChannels: videosAndChannels
    }
};

const mdtp = dispatch => ({
   requestVideos: () => dispatch(requestVideos()),
   requestChannels: () => dispatch(requestChannels()) 
});

export default connect(mstp, mdtp)(SearchSuggest);