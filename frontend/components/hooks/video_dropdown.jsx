import React, { useEffect, useState, useRef } from 'react'
import { MdMoreVert, MdModeEdit, MdFlag } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

const VideoDropdown = (props) => {
    const video = useRef();

    const [open, setOpen] = useState();

    const handleClick = e => {
        if (video.current.contains(e.target)) {
            return;
        }
        setOpen(false);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    return (
        <div ref={video}>
            <div className="video-dropdown-container">
                <button className="video-dropdown" onClick={e => setOpen(!open)}>
                    <MdMoreVert />
                </button>
            </div>
            {open && 
                <div> 
                    <div className="comment-dropdown-form">
                        <ul className="comment-dropdown-items">
                            <li onClick={props.handleEdit}>
                                <span className="comment-dropdown-edit-icon">
                                    <MdModeEdit />
                                </span>
                                <span className="comment-dropdown-edit">
                                    Edit
                                </span>
                            </li>
                            <li onClick={props.handleDelete}>
                                <span className="comment-dropdown-delete-icon">
                                    <FaTrash />
                                </span>
                                <span className="comment-dropdown-delete">
                                    Delete
                                </span>
                            </li>
                        </ul>
                    </div> 
                </div>}
        </div>
    )
}

export default VideoDropdown;