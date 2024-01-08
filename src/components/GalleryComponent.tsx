import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../views/home/components/CardDetail.css'

const GalleryComponent: React.FC<{ galleryImageUrls: string[] }> = ({ galleryImageUrls }) => {
  console.log("galleryImageUrls: ", galleryImageUrls);
  const galleryItems = galleryImageUrls.map(url => ({
    original: url,
    thumbnail: url, 
  }));

  return (
    <div className="custom-gallery">
        
    <ImageGallery
        items={galleryItems}
        showFullscreenButton={true}
        showIndex={true}
        onPlay={() => {
            alert("slideshow is now playing!");
        }}
        />
    </div>
  );
};

export default GalleryComponent;
