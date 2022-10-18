import LightGallery from 'lightgallery/react';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = (props) =>  {
    const onInit = () => {

    };
    return (
        <div className="App">
            <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="img/https://plus.unsplash.com/premium_photo-1661720042952-f19397ed8682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                    <img alt="img1" src="img/thumb1.jpg" />
                </a>

            </LightGallery>
        </div>
    );
}

export default Gallery;
