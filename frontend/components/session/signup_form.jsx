import React from "react"

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { username: "", email: "", password: "" }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createNewUser(this.state)
    }

    render() {
        // console.log(this.props)
        return (
            <div className="session-form">
                <h1>SIGN IN</h1>
                <h3>to continue to AdTube</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>email: 
                        <input type="text" value={this.state.email} onChange={this.update("email")} />
                    </label>
                    <button onClick={this.handleSubmit}>SIGN IN</button>
                </form>
            </div>   
        )
    }
}

export default SignupForm