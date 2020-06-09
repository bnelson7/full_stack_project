import * as ChannelAPIUtil from '../util/channel_api_util'
import * as SubscriptionAPIUtil from '../util/subscription_api_util'

export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL'
export const REMOVE_CHANNEL = 'REMOVE_CHANNEL'

const receiveChannel = channel => {
    debugger
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
    debugger
    return (
        ChannelAPIUtil.fetchChannel(id)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const createChannel = channel => dispatch => {
    debugger
    return (
        ChannelAPIUtil.createChannel(channel)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const editChannel = channel => dispatch => {
    debugger
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

export const createSubscription = subscription => dispatch => {
    debugger
    return (
        SubscriptionAPIUtil.createSubscription(subscription)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}

export const deleteSubscription = subscriptionId => dispatch => {
    debugger
    return (
        SubscriptionAPIUtil.deleteSubscription(subscriptionId)
        .then(channel => dispatch(receiveChannel(channel)))
    )
}