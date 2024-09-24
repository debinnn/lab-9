
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Replace this URL with your image API endpoint
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img src={image.thumbnailUrl} alt={image.title} style={{ width: '200px', height: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
