import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPass: '',
            error: ''
        }
        this.submit = this.submit.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleConfirmPassChange = this.handleConfirmPassChange.bind(this);
    }

    componentDidMount() {
        this.submit();
    }

    async submit() {
        try {
            if(!this.state.username || !this.state.email || !this.state.password || !this.state.confirmPass) {
                this.setState({error: 'Email, Username, and/or Password fields cannot be empty'})
                return;
            }
            if(this.state.password !== this.state.confirmPass) {
                this.setState({error: 'Passwords do not match'})
                return;
            }
            let url = process.env.REACT_APP_API_ENDPOINT;
            let data = {email: this.state.email, username: this.state.username, password: this.state.password, confirmPass: this.state.confirmPass};
            let result = await axios.post(url + 'registration', data);
            console.log(result);
            localStorage.setItem('user', JSON.stringify(result.data.user))
            this.props.register(result.data.user);
            this.props.history.push('/player'); //placeholder
        }
        catch(error) {
            this.setState({error: 'Registration Failed'});
        }
    }
    
    handleEmailChange(event) {
        this.setState({email: event.target.value, error: ''});
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value, error: ''});
    }

    handlePassChange(event) {
        this.setState({password: event.target.value, error: ''});
    }

    handleConfirmPassChange(event) {
        this.setState({confirmPass: event.target.value, error: ''});
    }

    render() {
        return (
            <div>
                <label>Email Address:</label>
                <div>
                    <TextField value={this.state.email} onChange={this.handleEmailChange} />
                </div>
                <label>Username</label>
                <div>
                    <TextField value={this.state.username} onChange={this.handleUsernameChange} />
                </div>
                <label>Password</label>
                <div>
                    <TextField value={this.state.password} onChange={this.handlePassChange} />
                </div>
                <label>Confirm Password</label>
                <div>
                    <TextField value={this.state.confirmPass} onChange={this.handleConfirmPassChange} 
                    onKeyPress={(event) => {
                        if(event.key === "Enter") {
                            this.submit();
                        }
                    }}
                    />
                </div>
                <Button variant="outlined" onClick={this.submit}>Register</Button>
            </div>
        )
    }
}

export default RegistrationPage;