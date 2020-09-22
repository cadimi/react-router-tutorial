import React from 'react';
// import queryString from 'query-string';
import './iframe.css';

const Google = ({match}) => {
    // const query = queryString.parse(location.search);
    // console.log(query);
    return (
        <div className="iframeClass">
            <iframe src={`https://${match.params.url}`}/>
        </div>
    );
};

export default Google;
