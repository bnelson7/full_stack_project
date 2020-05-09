export const updateUser = (formData, id) => {
    
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