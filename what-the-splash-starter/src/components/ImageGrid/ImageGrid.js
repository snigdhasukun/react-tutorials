import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions/index';
import './styles.css';
import Button from '../Button/index';
import Author from '../Author/index';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
// const key = 'N2JHImdd24VqzlE09jsRrmouMVAF7OIPRIen2lCRloQ'

class ImageGrid extends Component {
    // state = {
    //     images: [],
    // };

    componentDidMount() {
        // fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
        // fetch(`https://picsum.photos/v2/list`)
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             images,
        //         });
        //     })
        //     .catch(err => {
        //         console.log('Error happened during fetching!', err);
        //     });

        this.props.loadImages();
    }

    render() {
        const { images, error, isLoading, loadImages, imageAuthor } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Author author={imageAuthor[image.id]}/>
                            <img
                                src={image.download_url}
                                alt={image.author}
                            />
                        </div>
                    ))}
                    {/* <a onClick={this.props.loadImages}>Load Images</a> */}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                {/* <Button>
                    Load More
                </Button> */}
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}>
                    Load More
                </Button>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error, imageAuthor }) => ({
    isLoading,
    images,
    error,
    imageAuthor
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageGrid);
