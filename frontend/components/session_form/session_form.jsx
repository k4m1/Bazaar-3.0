import React from 'react';
import Button from "@material-ui/core/Button";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div id="bigdaddymid">

                <div>
                    <video id="background-video" loop autoPlay muted preload>
                        <source src={this.props.formType === 'signup' ? "https://bazaar-media-bucket.s3-us-west-1.amazonaws.com/daze.mp4 " : 'https://bazaar-media-bucket.s3-us-west-1.amazonaws.com/heros.mp4'} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
               

            <div className="loginWrapper">
                    <div className="accountContainer" id={this.props.errors.length === 0 ? '' : "errorsPopup"}>
                <div id="loginContainer" className="innerBox">


                <form onSubmit={this.handleSubmit} className="accountLogin">
                    <h2 className="neon h2 centered">Welcome to: TCGPlayer</h2>
          <hr />
          <div className="formInputEmailError neon" id="magicErrors">
                    {this.renderErrors()}
          </div>
                    <div className="innerBox" id="loginContainer">
                        <br />
                        <div className="formInputEmail">
              <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="textfield"
                                placeholder="Email"
                                id="emailinput"
                            />
                        </div>
                        <br />
                        <div className="formInputPassword">
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="textfield"
                                placeholder="password"
                                id="passwordinput"
                            />
                        </div>
                        <br />
                                    <Button onClick={this.handleSubmit} variant="contained" color="primary" id="loginButton" className="GreenButtonNoArrow" type="submit">{this.props.formType.toUpperCase()}</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default SessionForm;



