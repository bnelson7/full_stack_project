import React from 'react'

class ChannelForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            ownerId: this.props.currentUser.id
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
        debugger
        this.props.createChannel(newChannel)
        .then(res => {
            debugger
            this.props.history.push(`/channels/${res.channel.id}`);
        })
    }

    handleBack(e) {
        e.preventDefault();
        debugger
        this.props.history.push(`/users/${this.props.currentUser.id}`)
    }

    render() {
        debugger
        return (
            <div className="channel-form-background">
                <header>

                </header>
                <div>

                </div>
                <div className="channel-form-input-container">
                    <h1>
                        To create a new channel, create a Brand Account
                    </h1>
                    <h4>
                        This Brand Account can have a different name than your personal account,
                        for example a business name or another name that you choose.
                    </h4>
                    <label>
                        Brand Account name
                        <input className="channel-form-input" type="text" value={this.state.name} onChange={this.update("name")}/>
                    </label>
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
                <footer>

                </footer>
            </div>
        )
    }
}

export default ChannelForm