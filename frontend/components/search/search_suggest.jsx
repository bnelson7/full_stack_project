import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';

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
debugger
    return videosAndChannels.filter(vidchan => vidchan.title ? regex.test(vidchan.title) : regex.test(vidchan.name));
    debugger
}

function getSuggestionValue(suggestion) {
    return suggestion.name ? suggestion.name : suggestion.title;
}

function renderSuggestion(suggestion) {
    return (
        <span>{suggestion.name ? suggestion.name : suggestion.title}</span>
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
        debugger
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        debugger
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
            value,
            onChange: this.onChange
        };
debugger
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
    debugger
    channels.forEach(channel => {
        videosAndChannels.push(channel)
    });

    return {
        videosAndChannels: videosAndChannels
    }
};

export default connect(mstp, null)(SearchSuggest);