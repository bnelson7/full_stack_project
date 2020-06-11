import * as ChannelAPIUtil from '../util/channel_api_util'
import * as SubscriptionAPIUtil from '../util/subscription_api_util'

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS'
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

const receiveChannels = channels => {
    
    return {
        type: RECEIVE_CHANNELS,
        channels
    }
}

const receiveChannel = channel => {
    
    return {
        type: RECEIVE_CHANNEL,
        channel
    }
}

const removeChannel = channel => {
    return {
        type: REMOVE_CHANNEL,
        channel
    }
}

export const requestChannel = id => dispatch => {
    
    return (
        ChannelAPIUtil.fetchChannel(id)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const createChannel = channel => dispatch => {
    
    return (
        ChannelAPIUtil.createChannel(channel)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const editChannel = channel => dispatch => {
    
    return (
        ChannelAPIUtil.updateChannel(channel)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const deleteChannel = channelId => dispatch => {
    
    return (
        ChannelAPIUtil.deleteChannel(channelId)
        .then(() => dispatch(removeChannel(channelId)))
    )
}

export const requestQueriedChannel = queryString => dispatch => {

    return (
        ChannelAPIUtil.fetchQueriedChannel(queryString)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const requestQueriedChannels = queryString => dispatch => {

    return (
        ChannelAPIUtil.fetchQueriedChannels(queryString)
        .then(channels => dispatch(receiveChannels(channels)))
    )
}

export const createSubscription = subscription => dispatch => {
    
    return (
        SubscriptionAPIUtil.createSubscription(subscription)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const deleteSubscription = subscriptionId => dispatch => {
    
    return (
        SubscriptionAPIUtil.deleteSubscription(subscriptionId)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}