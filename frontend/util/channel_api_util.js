export const fetchChannel = (id) => {
    debugger
    return (
        $.ajax({
            url: `/api/channels/${id}`,
            method: 'GET'
        })
    )
}

export const createChannel = channel => {
    debugger
    return (
        $.ajax({
            url: `/api/users/${channel.ownerId}/channels`,
            method: 'POST',
            data: { channel } 
        })
    )
}

export const updateChannel = channel => {
    debugger
    return (
        $.ajax({
            url: `/api/channels/${channel.id}`,
            method: 'PATCH',
            data: { channel }
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