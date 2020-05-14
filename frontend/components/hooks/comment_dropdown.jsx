import React, { useEffect, useState, useRef } from 'react'
import { MdMoreVert, MdModeEdit, MdFlag } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'

const CommentDropdown = (props) => {
    const comment = useRef();

    const [open, setOpen] = useState();

    const handleClick = e => {
        if (comment.current.contains(e.target)) {
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
        <div ref={comment}>
            <div className="comment-dropdown-container">
                <button className="comment-dropdown" onClick={e => setOpen(!open)}>
                    <MdMoreVert />
                </button>
            </div>
            {open && !props.editing &&
            <div> {props.comment.author.id === props.currentUser.id ?
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
                </div> :       
                <div className="comment-dropdown-flag">
                    <div className="comment-dropdown-flag-item">
                        <span className="comment-dropdown-flag-icon">
                            <MdFlag />
                        </span>
                        <span className="comment-dropdown-flag-text">
                            Report
                        </span>
                    </div>
                </div>}
            </div>}
        </div>
    );
}

export default CommentDropdown;