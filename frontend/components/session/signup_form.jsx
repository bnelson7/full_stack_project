import React from "react"
import { Link } from 'react-router-dom'
import { MdError } from 'react-icons/md'

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            username: "", 
            email: "", 
            password: "" 
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentWillUnmount() {
        this.props.clearSessionErrors();
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
        const { errors } = this.props
        return (
            <div className="signup-container">
                <div className="signup-left">
                    <form onSubmit={this.handleSubmit}>
                        <div className="signup-title">
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKYjKsEQZD25DDd6UFMpTRrskFt04EQcdAY6STEYSyNSDxNu0R&usqp=CAU' className="google-logo" />
                            <h1>Create your Google Account</h1>
                            <h3>to continue to AdTube</h3>
                        </div>
                        <div className="signup-input">
                            <div><input type="text" placeholder="Username" value={this.state.username} onChange={this.update("username")} /></div>
                            {errors.slice(0,1).map((err, i) => (<li className="session-errors" key={`err-${i}`}><span><MdError /></span>  {err}</li>))}
                            <div><input type="text" placeholder="Your email address" value={this.state.email} onChange={this.update("email")} /></div>
                            {errors.slice(1,2).map((err, i) => (<li className="session-errors" key={`err-${i}`}><span><MdError /></span>  {err}</li>))}
                            <div><input type="text" placeholder="Password" value={this.state.password} onChange={this.update("password")} /></div>
                            {errors.slice(2).map((err, i) => (<li className="session-errors" key={`err-${i}`}><span><MdError /></span>  {err}</li>))}
                            <p>Use 6 or more characters with a mix of letters, numbers, & 
                            <br></br>symbols</p>
                        </div>
                        <div className="signup-links">
                            <p className="session-nav"><Link to="/login">Sign in instead</Link></p> 
                            <button className="session-btn">Next</button>
                        </div>
                    </form>
                </div>
                <div className="signup-right">
                    <img src="data:image/png;base64,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"/>
                    <p>One account. All of AdTube 
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;working for you.</p>
                </div>
            </div>   
        )
    }
}

export default SignupForm