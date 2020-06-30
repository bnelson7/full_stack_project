import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { requestVideos } from '../../actions/video_actions'
import { requestChannels } from '../../actions/channel_actions'

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value, videosAndChannels) {
    
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
            vidchan.hasOwnProperty("title") ? { video: vidchan.title.toLowerCase() } : { channel: vidchan.name.toLowerCase() }
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
    //     
    //     if (prevProps.videosAndChannels !== this.props.videosAndChannels) {
    //         
    //         this.props.requestVideos()
    //             .then(() => {
    //                 this.props.requestChannels()
    //             })
    //     }
    // }

    onChange = (event, { newValue, method }) => {
        
        if (event.type === "change") {
            this.setState({ value: newValue });
            this.props.getQueryString(event) 
        } else {
            
            const idx = parseInt(event.currentTarget.dataset.suggestionIndex)
            const type = document.getElementById(`suggestion-type-${idx}`)
            
            this.setState({ value: event.currentTarget.innerText })
            this.props.getQueryString(event)
            this.props.handleSearch(event, event.currentTarget.innerText, type.value)
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
        let idx = this.state.suggestions.indexOf(suggestion)

        if (suggestion.video) {
            suggestion = suggestion.video
            type = "video"
        } else {
            suggestion = suggestion.channel
            type = "channel"
        }
        return (
            <button id={`suggestion-type-${idx}`} value={type}>
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