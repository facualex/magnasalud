import React from 'react';

interface Image {
  src: string;
}

interface ImageViewerProps {
  images: Image[];
  featuredImageId: number | undefined;
}

function ImageViewer({ images, featuredImageId }: ImageViewerProps) {
  return (
    <div className="grid grid-flow-col auto-cols-[87%] gap-2 overflow-x-auto overscoll-x-contain pb-5 snap-x snap-mandatory">
      {images && images.length
        ? images.map((image, index) => {
            return (
              <div key={index} className="grid snap-start">
                <img src={image.src} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ImageViewer;
