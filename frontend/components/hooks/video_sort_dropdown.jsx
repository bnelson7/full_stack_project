import React, { useEffect, useState, useRef } from 'react'
import { MdSort } from "react-icons/md";

const VideoSortDropdown = (props) => {
    const videoSort = useRef();

    const [open, setOpen] = useState();

    const handleClick = e => {
        if (videoSort.current.contains(e.target)) {
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
        <div ref={videoSort}>
            <div className="comment-sort" onClick={e => setOpen(!open)}>
                <span><MdSort /></span>SORT BY
            </div>
            {open && 
                <div> 
                    <div className="video-dropdown-form-user">
                        {props.sortSelected === 'popular' ?
                        <ul className="video-dropdown-items-form">
                            <li className="sort-dropdown-selected-videos" onClick={props.handleSort} id="popular">
                                <span className="video-dropdown-sort">
                                    Most popular
                                </span>
                            </li>
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="date-old">
                                <span className="video-dropdown-sort">
                                    Date added (oldest)
                                </span>
                            </li>
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="date-new">
                                <span className="video-dropdown-sort">
                                    Date added (newest)
                                </span>
                            </li>
                        </ul> : props.sortSelected === 'date-old' ?
                        <ul className="video-dropdown-items-form">
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="popular">
                                <span className="video-dropdown-sort">
                                    Most popular
                                </span>
                            </li>
                            <li className="sort-dropdown-selected-videos" onClick={props.handleSort} id="date-old">
                                <span className="video-dropdown-sort">
                                    Date added (oldest)
                                </span>
                            </li>
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="date-new">
                                <span className="video-dropdown-sort">
                                    Date added (newest)
                                </span>
                            </li>
                        </ul> : props.sortSelected === 'date-new' ?
                        <ul className="video-dropdown-items-form">
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="popular">
                                <span className="video-dropdown-sort">
                                    Most popular
                                </span>
                            </li>
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="date-old">
                                <span className="video-dropdown-sort">
                                    Date added (oldest)
                                </span>
                            </li>
                            <li className="sort-dropdown-selected-videos" onClick={props.handleSort} id="date-new">
                                <span className="video-dropdown-sort">
                                    Date added (newest)
                                </span>
                            </li>
                        </ul> :
                        <ul className="video-dropdown-items-form">
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="popular">
                                <span className="video-dropdown-sort">
                                    Most popular
                                </span>
                            </li>
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="date-old">
                                <span className="video-dropdown-sort">
                                    Date added (oldest)
                                </span>
                            </li>
                            <li className="video-dropdown-form-item" onClick={props.handleSort} id="date-new">
                                <span className="video-dropdown-sort">
                                    Date added (newest)
                                </span>
                            </li>
                        </ul>}
                    </div> 
                </div>}
        </div>
    );
}

export default VideoSortDropdown;