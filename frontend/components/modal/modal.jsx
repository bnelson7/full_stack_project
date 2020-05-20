import React from 'react'
import { IoMdClose, IoMdImage } from 'react-icons/io'
import { GoPlus } from 'react-icons/go'
import { MdFileUpload } from 'react-icons/md'

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
        // this.handleClose = this.handleClose.bind(this)
    }

    componentWillReceiveProps(nextProps) {
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

    // handleClose() {
    //     // document.body.style.position = null
    //     this.props.closeModal()
    // }

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
        const { modal, closeModal } = this.props
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
            default:
                
                return null;
        }
    }
}

export default Modal;