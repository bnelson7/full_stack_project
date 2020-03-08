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
        console.log(this.props)
        return (
            <div className="signup-container">
                <h1>Create an account</h1>
                <h3>to continue to AdTube</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <p><input type="text" placeholder="username" value={this.state.username} onChange={this.update("username")} /></p>
                        <p><input type="text" placeholder="email" value={this.state.email} onChange={this.update("email")} /></p>
                        <p><input type="text" placeholder="password" value={this.state.password} onChange={this.update("password")} /></p>
                    </div>
                    <button onClick={this.handleSubmit}>SIGN IN</button>
                </form>
            </div>   
        )
    }
}

export default SignupForm