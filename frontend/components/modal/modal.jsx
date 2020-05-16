import React from 'react'
import { IoMdClose } from 'react-icons/io'

class Modal extends React.Component {
    constructor(props) {
        debugger
        super(props)

        this.state = {
            title: "",
            description: "",
            clipFile: null,
            thumbnailFile: null,
            edit: false,
            videoId: null
        }

        this.handleUpload = this.handleUpload.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        if (!this.state.edit) {
            formData.append('video[title]', this.state.title);
            formData.append('video[description]', this.state.description);
            formData.append('video[clip]', this.state.clipFile);
            formData.append('video[thumbnail]', this.state.thumbnailFile);
            this.props.createVideo(formData)
        } else {
            formData.append('video[title]', this.state.title);
            formData.append('video[description]', this.state.description);

            this.props.updateVideo(formData, this.state.videoId)
        }
    }

    handleUpload(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.files[0] })
        }
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        debugger
        const { modal, closeModal } = this.props
        if (!modal) return null;

        switch (modal) {
            case 'upload':
                return (
                    <div className="upload-modal-background" onClick={closeModal}>
                        <div className="upload-modal-child" onClick={e => e.stopPropagation()}>
                            <div className="upload-form-header">
                                <h1>Upload videos</h1><span><IoMdClose /></span>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="upload-form">
                                    <label> Title:
                                    <input type="text" value={this.state.title} onChange={this.update('title')} />
                                    </label>

                                    <label> Desciption:
                                    <textarea value={this.state.description} onChange={this.update('description')} />
                                    </label>

                                    <input type="file" name="file1" id="file1" className="file1" onChange={this.handleUpload('clipFile')} />
                                    <label htmlFor="file1">UPLOAD VIDEO</label>

                                    <br />
                                    <h1>Thumbnail</h1>
                                    <p>Upload a picture that shows what's in your video. A good thumbnail stands out
                                            <br></br>and draws viewers' attention.</p>

                                    <input type="file" name="file2" id="file2" className="file2" onChange={this.handleUpload('thumbnailFile')} />
                                    <label htmlFor="file2">Upload thumbnail</label>
                                    <br />
                                    {!this.state.edit ? <button className="upload-btn">UPLOAD VIDEO</button> : <button className="upload-btn">SAVE</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                )
            case 'edit':
                return null
            default:
                return null;
        }
    }
}

export default Modal;