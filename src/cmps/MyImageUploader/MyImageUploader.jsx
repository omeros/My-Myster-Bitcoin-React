
import { Component } from 'react'
import './MyImageUploader.scss'
import React from 'react';
import ImageUploader from 'react-images-upload';

export class MyImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({   pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <div>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={52428800000}
                />
            </div>
        )
    }
}
