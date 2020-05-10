export const updateUser = (formData, id) => {
    debugger
    return (
        $.ajax({
            url: `/api/users/${id}`,
            method: 'PATCH',
            data: formData,
            contentType: false,
            processData: false
        })
    )
}

export const fetchUser = id => {
    debugger
    return (
        $.ajax({
            url: `/api/users/${id}`,
            method: 'GET'
        })
    )
}