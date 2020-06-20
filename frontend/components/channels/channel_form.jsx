import React from 'react'
import { AiOutlineCopyright } from 'react-icons/ai'
import NavBarDropdown from '../hooks/navbar_dropdown'

class ChannelForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            // ownerId: this.props.currentUser.id
        }

        this.handleChannel = this.handleChannel.bind(this)
        this.handleBack = this.handleBack.bind(this)
    }

    update(e) {
        return e => {
            this.setState({ name: e.currentTarget.value })
        }
    }

    handleChannel(e) {
        e.preventDefault();
        const newChannel = Object.assign({}, this.state)
        
        this.props.createChannel(newChannel)
        .then(res => {
            
            this.props.history.push(`/channels/${res.channel.id}`);
        })
    }

    handleBack(e) {
        e.preventDefault();
        
        this.props.history.goBack()
    }

    render() {
        
        return (
            <div className="channel-form-background">
                <header>
                    {/* <img src={window.google_logo} className="google-logo-login" /> */}
                    <NavBarDropdown
                        currentUser={this.props.currentUser}
                        handleLogout={this.handleLogout}
                        path={this.props.path}
                    />
                </header>
                <div className="brand-accounts-container">
                    {/* <img src={window.channel_brand_logo} /> */}
                    <h1>Brand Accounts</h1>
                </div>
                <div className="channel-form-input-container">
                    <h1>
                        To create a new channel, create a Brand Account
                    </h1>
                    <h4>
                        This Brand Account can have a different name than your personal account,
                        for example a business name or another name that you choose.
                    </h4>
                    <div className="channel-input-container">
                        <label>
                            Brand Account name
                        </label>
                        <div className="channel-input">
                                <input className="channel-form-input" type="text" value={this.state.name} onChange={this.update("name")}/>
                            <div className="channel-form-btns-container">
                                <button className="create-channel-btn" onClick={this.handleChannel}>
                                    Create
                                </button>
                                <button className="back-channel-btn" onClick={this.handleBack}>
                                    Back
                                </button>
                            </div>
                            <p>
                                By clicking "Create" you agree to AdTube's Terms of Service.
                                Learn more about Channels or Brand Accounts. 
                            </p>
                        </div>
                    </div>
                </div>
                <footer>
                    <AiOutlineCopyright /> 2020 AdTube 
                </footer>
            </div>
        )
    }
}

export default ChannelForm