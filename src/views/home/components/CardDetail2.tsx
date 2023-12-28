import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const CardDetail2: React.FC = () => { 

    const imgGallery = [
        {
          original: "indolabel.png",
          thumbnail: "indolabel.png"
        },
        {
          original: "logo192.png",
          thumbnail: "logo192.png"
        },
        {
          original: "logo512.png",
          thumbnail: "logo512.png"
        },
      ]

    return(
        <>
            <p>a</p>
            <div>
                <ImageGallery
                items={imgGallery}
                // showPlayButton={true}
                showFullscreenButton={true}
                // slideInterval={1000}
                // slideOnThumbnailOver={true}
                showIndex={true}
                onPlay={() => {
                    alert("slideshow is now playing!");
                    }}
                    />
            </div>
        </>
    )
}
export default CardDetail2;