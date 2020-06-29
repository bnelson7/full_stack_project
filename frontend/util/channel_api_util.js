export const fetchChannels = () => {
    debugger
    return (
        $.ajax({
            url: '/api/channels',
            method: 'GET'
        })
    )
}

export const fetchChannel = (id) => {
    
    return (
        $.ajax({
            url: `/api/channels/${id}`,
            method: 'GET'
        })
    )
}

export const createChannel = channel => {
    
    return (
        $.ajax({
            url: `/api/users/${channel.ownerId}/channels`,
            method: 'POST',
            data: { channel } 
        })
    )
}

export const updateChannel = (channel, id) => {
    
    return (
        $.ajax({
            url: `/api/channels/${id}`,
            method: 'PATCH',
            data: channel,
            contentType: false,
            processData: false
        })
    )
}

export const deleteChannel = id => {
    
    return (
        $.ajax({
            url: `/api/channels/${id}`,
            method: 'DELETE'
        })
    )
}

export const fetchQueriedChannel = queryString => {

    return (
        $.ajax({
            url: `/api/channels/results${queryString}`,
            method: 'GET'
        })
    )
}

export const fetchQueriedChannels = queryString => {

    return (
        $.ajax({
            url: `/api/channels/${queryString}`,
            method: 'GET'
        })
    )
}