export const createSubscription = subscription => {
    
    return (
        $.ajax({
            url: `/api/channels/${subscription.channelId}/subscriptions`,
            method: 'POST',
            data: { subscription }
        })
    )
}

export const deleteSubscription = id => {
    
    return (
        $.ajax({
            url: `/api/subscriptions/${id}`,
            method: 'DELETE'
        })
    )
}