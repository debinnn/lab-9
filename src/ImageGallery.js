// ImageGallery.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css'; // Importing CSS for gallery styling

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: { query: 'agriculture', per_page: 10 },
          headers: {
            Authorization: 'Client-ID 5cgFu4VxgY9XdDE2VY8hfPZSrTqBoLvLfxBadtMjclI',
          },
        });
        setImages(response.data.results);
        setLoading(false);
      } catch (err) {
        setError('Error fetching images.');
        setLoading(false);
      }
    };

    fetchImages();
  }, []); // The useEffect runs only once when the component is mounted

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="gallery-container">
      <h1>Image Gallery</h1>
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img
              src={image.urls.small}
              alt={image.alt_description || 'Agricultural Image'}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
