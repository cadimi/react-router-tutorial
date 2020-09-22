import React, { Component } from 'react';
import './iframe.css';

class Google extends Component {
    render() {
        // const iframe = '<iframe src="https://www.example.com/show?data..." width="540" height="450"></iframe>';
        return (
            <div className="iframeClass">
                {/*<div dangerouslySetInnerHTML={ iframe } />*/}
                <iframe src="https://www.google.com"/>
            </div>
        );
    }
}

export default Google;
