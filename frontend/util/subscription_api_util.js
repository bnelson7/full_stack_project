export const createSubscription = subscription => {
    
    return (
        $.ajax({
            url: `/api/channels/${subscription.channelId}/subscriptions`,
            method: 'POST',
            data: { subscription }
        })
    )
}

export const deleteSubscription = subscription => {
    
    return (
        $.ajax({
            url: `/api/subscriptions/${subscription.id}`,
            method: 'DELETE',
            data: { subscription }
        })
    )
}