import React, { useEffect, useState, useRef } from 'react'
import { MdSort } from "react-icons/md";

const CommentSortDropdown = (props) => {
    const commentSort = useRef();

    const [open, setOpen] = useState();

    const handleClick = e => {
        if (commentSort.current.contains(e.target)) {
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
        <div ref={commentSort}>
            <div className="comment-sort" onClick={e => setOpen(!open)}>
                <span><MdSort /></span>SORT BY
            </div>
            {open && 
                <div> 
                    <div className="comment-dropdown-form-form">
                        {props.selected === 'top' ?
                        <ul className="comment-dropdown-items-form">
                            <li className="sort-dropdown-selected" onClick={props.handleSort} id="top">
                                <span className="comment-dropdown-sort">
                                    Top comments
                                </span>
                            </li>
                            <li className="comment-dropdown-items-form-item" onClick={props.handleSort} id="new">
                                <span className="comment-dropdown-sort">
                                    Newest first
                                </span>
                            </li>
                        </ul> : props.selected === 'new' ?
                        <ul className="comment-dropdown-items-form">
                            <li className="comment-dropdown-items-form-item" onClick={props.handleSort} id="top">
                                <span className="comment-dropdown-sort">
                                    Top comments
                                </span>
                            </li>
                            <li className="sort-dropdown-selected" onClick={props.handleSort} id="new">
                                <span className="comment-dropdown-sort">
                                    Newest first
                                </span>
                            </li>
                        </ul> :
                        <ul className="comment-dropdown-items-form">
                            <li className="comment-dropdown-items-form-item" onClick={props.handleSort} id="top">
                                <span className="comment-dropdown-sort">
                                    Top comments
                                </span>
                            </li>
                            <li className="comment-dropdown-items-form-item" onClick={props.handleSort} id="new">
                                <span className="comment-dropdown-sort">
                                    Newest first
                                </span>
                            </li>
                        </ul>}
                    </div> 
                </div>}
        </div>
    );
}

export default CommentSortDropdown;