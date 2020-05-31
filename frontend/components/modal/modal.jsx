import React from 'react'
import { IoMdClose, IoMdImage } from 'react-icons/io'
import { GoPlus } from 'react-icons/go'
import { MdFileUpload, MdHome, MdHistory, MdMenu } from 'react-icons/md'
import Sidebar from "../sidebar/sidebar_container"
import { FaFire, FaGithub, FaLinkedin, FaUserCircle, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

class Modal extends React.Component {
    constructor(props) {
        super(props)
        debugger

        this.state = {
            title: "",
            description: "",
            clipFile: null,
            thumbnailFile: null
        }

        this.handleUpload = this.handleUpload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    // maybe use componentDidUpdate instead
    UNSAFE_componentWillReceiveProps(nextProps) {
        debugger
        if (nextProps.video) {
            this.setState({
                title: nextProps.video.title,
                description: nextProps.video.description
            })
        }
    }

    // componentDidMount() {
    //     // document.body.style.position = 'fixed'
    //     // // document.html.style.position = 'fixed'
      
    // }

    handleClose(e) {
        // document.body.style.position = null
        const close = document.querySelector(".sidebar-modal-background")
        e.target === close && this.props.closeModal()
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        if (this.props.modal.type === 'upload') {
            formData.append('video[title]', this.state.title);
            formData.append('video[description]', this.state.description);
            formData.append('video[clip]', this.state.clipFile);
            formData.append('video[thumbnail]', this.state.thumbnailFile);
            this.props.createVideo(formData)
            .then(() => {
                this.props.closeModal()
                this.setState({
                    title: "",
                    description: "",
                    clipFile: null,
                    thumbnailFile: null
                })
            })

        } else {
            debugger
            formData.append('video[title]', this.state.title);
            formData.append('video[description]', this.state.description);
            this.props.updateVideo(formData, this.props.video.id)
            .then(() => {
                debugger
                this.props.closeModal()
                this.setState({
                    title: "",
                    description: "",
                    clipFile: null,
                    thumbnailFile: null
                })
            })
        }
    }

    handleUpload(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.files[0] })
        }
    }

    update(field) {
        debugger
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        const { modal, closeModal, location } = this.props
        if (!modal) return null;
      
        debugger
        switch (modal.type) {
            case 'upload':
                return (
                    <div className="upload-modal-background">
                        <div className="upload-modal-child">
                            <div className="upload-form-header">
                                <h1>Upload videos</h1>
                                <span onClick={closeModal}><IoMdClose /></span>
                            </div>
                            <form onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
                                <div className="upload-form-container">
                                    <div className="upload-form">
                                        <div className="upload-form-info">
                                            <h1>Details</h1>
                                            <div className="upload-title-description">
                                                <div className="upload-title">
                                                    <h2>Title (required)</h2>
                                                    <textarea value={this.state.title} placeholder="Add a title that describes your video" onChange={this.update('title')} />
                                                </div>
                                                <div className="upload-description">
                                                    <h2>Description</h2>
                                                    <textarea value={this.state.description} placeholder="Tell viewers about your video" onChange={this.update('description')} />
                                                </div>
                                            </div>

                                            <div className="upload-form-thumbnail">
                                                <h1>Thumbnail</h1>
                                                <p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention.</p>

                                                <div className="upload-thumbnail">
                                                    <input type="file" name="file2" id="file2" className="hidden-input" onChange={this.handleUpload('thumbnailFile')} />
                                                    <label className="upload-thumbnail-btn" htmlFor="file2"><span className="thumbnail-icons"><IoMdImage className="thumbnail-image-icon" /><GoPlus className="thumbnail-plus-icon"/></span>Upload thumbnail</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="upload-form-video">
                                            <input type="file" name="file1" id="file1" className="hidden-input" onChange={this.handleUpload('clipFile')} />
                                            <label htmlFor="file1">
                                                <span className="upload-icon">
                                                    <MdFileUpload />
                                                </span>
                                            </label>
                                            <div className="upload-form-video-info">
                                                <span>Drag and drop video files to upload</span>
                                                <span>Your videos will be private until you publish them.</span>
                                            </div>
                                            <label className="upload-btn" htmlFor="file1">SELECT FILES</label>
                                        </div>
                                    </div>
                                    <div className="upload-form-footer">
                                        <button>
                                            NEXT
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            case 'edit':
                debugger
                return (
                    <div className="upload-modal-background">
                        <div className="upload-modal-child">
                            <div className="upload-form-header">
                                <h1>Upload videos</h1>
                                <span onClick={closeModal}><IoMdClose /></span>
                            </div>
                            <form onSubmit={this.handleSubmit} onClick={e => e.stopPropagation()}>
                                <div className="upload-form-container">
                                    <div className="upload-form">
                                        <div className="upload-form-info">
                                            <h1>Details</h1>
                                            <div className="upload-title-description">
                                                <div className="upload-title">
                                                    <h2>Title (required)</h2>
                                                    <textarea value={this.state.title} placeholder="Add a title that describes your video" onChange={this.update('title')} />
                                                </div>
                                                <div className="upload-description">
                                                    <h2>Description</h2>
                                                    <textarea value={this.state.description} placeholder="Tell viewers about your video" onChange={this.update('description')} />
                                                </div>
                                            </div>

                                            <div className="upload-form-thumbnail">
                                                <h1>Thumbnail</h1>
                                                <p>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention.</p>

                                                <div className="upload-thumbnail">
                                                    <input type="file" name="file2" id="file2" className="hidden-input" onChange={this.handleUpload('thumbnailFile')} />
                                                    <label className="upload-thumbnail-btn" htmlFor="file2"><span className="thumbnail-icons"><IoMdImage className="thumbnail-image-icon" /><GoPlus className="thumbnail-plus-icon"/></span>Upload thumbnail</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="upload-form-video">
                                            <input type="file" name="file1" id="file1" className="hidden-input" onChange={this.handleUpload('clipFile')} />
                                            <label htmlFor="file1">
                                                <span className="upload-icon">
                                                    <MdFileUpload />
                                                </span>
                                            </label>
                                            <div className="upload-form-video-info">
                                                <span>Drag and drop video files to upload</span>
                                                <span>Your videos will be private until you publish them.</span>
                                            </div>
                                            <label className="upload-btn" htmlFor="file1">SELECT FILES</label>
                                        </div>
                                    </div>
                                    <div className="upload-form-footer">
                                        <button>
                                            SAVE
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            case 'sidebar':
                // could also reuse sidebar component and pass in props
                // stick with this for now bc its more simple
                debugger
                if (location.pathname.includes("/videos")) {
                    debugger
                return (
                    <div className="sidebar-modal-background" onClick={this.handleClose}>
                        <div className="sidebar-container-expanded">
                            <div className="left-navbar-modal-container">
                                <div className="left-navbar-modal">
                                    <div className="menu-container" onClick={this.handleSidebar}>
                                        <MdMenu className="menu" />
                                    </div>
                                    <Link to="/">
                                        <div className="title-logo-container">
                                            <FaYoutube className="logo" />
                                            <span className="title">AdTube</span>
                                        </div>
                                    </Link>
                                </div>  
                            </div>
                            <ul className="sidebar-items-expanded">
                                <Link to="/">
                                    <li>
                                        <div className="sidebar-icon-expanded">
                                            <MdHome />
                                        </div> 
                                        <div className="sidebar-text-expanded">
                                            Home
                                        </div>
                                    </li> 
                                </Link>
                                <li>
                                    <div className="sidebar-icon-expanded">
                                        <FaFire id="icon-size"/>
                                    </div>
                                    <div className="sidebar-text-expanded">
                                        Trending
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-icon-expanded">
                                        <MdHistory />
                                    </div>
                                    <div className="sidebar-text-expanded">
                                        History
                                    </div>
                                </li>
                            </ul>
                            <hr id="sidebar-hr"/>
                            <ul className="sidebar-items-expanded">
                                <a href="https://github.com/bnelson7">
                                    <li>
                                            <div className="sidebar-icon-expanded">
                                                <FaGithub id="icon-size" />
                                            </div>
                                            <div className="sidebar-text-expanded">
                                                Github
                                            </div>
                                    </li>
                                </a>
                                <a href="https://www.linkedin.com/in/brad-nelson-919b90a7/">
                                    <li>
                                        <div className="sidebar-icon-expanded">
                                            <FaLinkedin id="linkedin" />
                                        </div>
                                        <div className="sidebar-text-expanded">
                                            LinkedIn
                                        </div>
                                    </li>
                                </a>
                            </ul>
                            <hr id="sidebar-hr" />
                            {!this.props.currentUser ? 
                            <div>
                                <div className="sidebar-signin">
                                    <p>
                                        Sign in to like videos, 
                                        comment, and subscribe.
                                    </p>
                                    <Link className="signin-button" to="/login">
                                        <span className="profile-icon">
                                            <FaUserCircle />
                                        </span>
                                        SIGN IN
                                    </Link>
                                </div> 
                                <hr id="sidebar-hr" />
                            </div> : null}
                        </div>
                    </div>
                    )
                } else {
                    debugger
                    return null;
                }
            default:
                
                return null;
        }
    }
}

export default Modal;