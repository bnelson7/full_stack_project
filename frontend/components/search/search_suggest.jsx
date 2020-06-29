import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

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
        vidchan.title ? vidchan.title.toLowerCase() : vidchan.name.toLowerCase()
      );
}

function getSuggestionValue(suggestion) {
    return suggestion.name ? suggestion.name : suggestion.title;
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    return (
        <span>
            <span id="auto-suggest-query">{query}</span>{suggestion.slice(query.length)} 
        </span>
    );
}

class SearchSuggest extends React.Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: []
        };
    }

    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
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
                renderSuggestion={renderSuggestion}
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

export default connect(mstp, null)(SearchSuggest);