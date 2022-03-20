import React from 'react';

interface Image {
  src: string;
}

interface ImageViewerProps {
  images: Image[];
}

function ImageViewer({ images }: ImageViewerProps) {
  return (
    <div className="grid grid-flow-col auto-cols-[87%] gap-2 overflow-x-auto overscoll-x-contain pb-5 snap-x snap-mandatory">
      {images && images.length
        ? images.map((image, index) => {
            return (
              <div key={index} className="grid snap-center">
                <img src={image.src} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ImageViewer;
