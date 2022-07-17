import React, { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";

const photos = [...Array(19).keys()].map(i => (
    {
        src: `/photos/Photo${i+1}.jpg`,
        width: 400,
        height: 400
    }
))

const slides = photos.map(({ src}) => ({ src }));

const Photos = () => {
    const [index, setIndex] = useState(-1);
    return (
        <div className="container pt-8">
            <PhotoAlbum layout="columns" photos={photos} onClick={(event, photo, index) => setIndex(index)}/>
            <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow]}
            />
        </div>
    );
};

export default Photos;