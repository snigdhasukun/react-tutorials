import React from 'react';

import './styles.css';

function Author({ author }) {
    if (!author) {
        return (<span className="author">Loading...</span>)
    }
    return (
        <span className="author">
            {author.error && 'Error!'}
            {author.isLoading && 'Loading...'}
            {author.author != null && `${author.author}`}
        </span>
    )
}

export default Author;