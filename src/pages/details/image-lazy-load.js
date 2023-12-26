import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import styled, { createGlobalStyle } from 'styled-components'
const MyLazyLoadedImage = ({ imageSrc, altText , onClick}) => {

    return (

            <LazyLoadImager
                src={imageSrc}
                alt={altText}
                effect="blur"
                height="auto"
                onClick={onClick}
            />
    );
};


const LazyLoadImager = styled(LazyLoadImage)`
  cursor:pointer;

`



export default MyLazyLoadedImage;