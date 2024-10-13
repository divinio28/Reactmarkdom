import React, { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText';
import 'bootstrap/dist/css/bootstrap.min.css';
import { marked } from 'marked'; // <-- Import spécifique
import DOMPurify from 'dompurify'; // Installation avec `npm install dompurify`

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: sampleText,
        };
    }

    handleChange = (event) => {
        const text = event.target.value;
        this.setState({ text });
    };

    renderText = (text) => {
        const rawMarkup = marked(text); // Utilisation correcte de marked
        return { __html: DOMPurify.sanitize(rawMarkup) };
    };

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-6">
                        <textarea
                            onChange={this.handleChange}
                            value={this.state.text}
                            className="form-control"
                            rows="35"
                        />
                    </div>
                    <div className="col-sm-6">
                        <div
                            dangerouslySetInnerHTML={this.renderText(this.state.text)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
