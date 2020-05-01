import React from 'react';

export default class MyForm extends React.Component {
    state = {
        name: "",
        email: "",
        notes: "",
    };

    handleChange = event => {
        this.setState({name: event.target.value, email: event.target.value});
    };

    handleNotes = event => {
        this.setState({notes: event.target.value});
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <h2 className="business-header">Get NordPass for business</h2>
                <div className="layout">
                    <img className="business-grid-left nordpass-image" src='assets/np-form-image.png' alt="form-image"/>
                    <div className="business-grid-right">
                        <p className="form-details">Fill out your details, and we will get back to you shortly:</p>
                        <input value={this.state.name} onChange={this.handleChange} placeholder="Name"/>
                        <input value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
                        <textarea
                            value={this.state.notes}
                            onChange={this.handleNotes}
                            placeholder="Notes"
                        />
                        <p className="form-info">This information will be used by NordPass to respond to
                            your <br/> inquiry as provided in our Privacy Policy.</p>
                        <button onClick={this.handleSubmit}>Get started</button>
                    </div>
                </div>
            </div>
        );
    }
}