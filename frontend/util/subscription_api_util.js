export const createSubscription = subscription => {
    debugger
    return (
        $.ajax({
            url: `/api/channels/${subscription.channelId}/subscriptions`,
            method: 'POST',
            data: { subscription }
        })
    )
}

export const deleteSubscription = id => {
    debugger
    return (
        $.ajax({
            url: `/api/subscriptions/${id}`,
            method: 'DELETE'
        })
    )
}