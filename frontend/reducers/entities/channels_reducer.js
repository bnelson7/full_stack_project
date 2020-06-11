import { RECEIVE_CHANNEL, REMOVE_CHANNEL, RECEIVE_CHANNELS } from '../../actions/channel_actions'

const channelsReducer = (prevState = {}, action) => {
    Object.freeze(prevState)
    let nextState = Object.assign({}, prevState)

    switch (action.type) {
        case RECEIVE_CHANNELS:
            
            return action.channels;
        case RECEIVE_CHANNEL:
            
            nextState[action.channel.id] = action.channel
            return nextState;
        case REMOVE_CHANNEL:
            delete nextState[action.channel]
            return nextState;
        default:
            return prevState;
    }
}

export default channelsReducer;