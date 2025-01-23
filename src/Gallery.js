import React, {useState} from 'react';
import './gallery.css'; // Import CSS for the gallery layout
import echomain from './images/echomainmenu.png'
import gamewebsite from './images/gamewebsite.png'
import equipmaster from './images/autoequip2.png'
import aerospace from './images/aerospace.png'
import discordbot from './images/discordbot.png'
import vrgame from './images/vrgame8.png'
import bokchoy from './images/unity3.png'
import neon from './images/neonnights.png'
import ecoconnect from './images/mobileapp.png'

// Example image array
const images = [
  { id: 1, src: echomain, title:'Echoes of The Abyss', description: '2D roguelike dungeon crawler (In development)'},
  { id: 2, src: gamewebsite, title: 'Game Website', description: 'Website for my 2d Roguelike dungeon crawler.' },
  { id: 3, src: equipmaster, title: 'Equipmaster', description: 'Addon to autoequip the highest item level in game.'},
  { id: 4, src: aerospace, title: 'DOP Map' , description: 'Full Stack web application to display dop data.'},
  { id: 5, src: discordbot, title: 'Discord Bot', description: 'Discord bot that utilizes RestAPI/MongoDB for data.' },
  { id: 6, src: vrgame, title: 'BuildaPCVR', description: 'VR PC-building simulator.' },
  { id: 7, src: bokchoy, title: 'Bok Choy', description: 'Open World MMORPG with bosses and more!' },
  { id: 8, src: neon, title: 'Neon Nights', description: 'Figma framwork Design Idea for a game.' },
  { id: 9, src: ecoconnect, title: 'EcoConnect' , description: 'Mobile app design idea using Figma.'},
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);
  
    const openModal = (image) => {
      setIsAnimating(true); // Start fade-in animation
      setSelectedImage(image);
    };
  
    const closeModal = () => {
      setIsAnimating(false); // Start fade-out animation
      setTimeout(() => setSelectedImage(null), 500); // Wait for animation to complete
    };
  
    return (
      <div className="gallery-container">
        {images.map((image) => (
          <div key={image.id} className="gallery-item" onClick={() => openModal(image)}>
            <img src={image.src} alt={image.title} className="gallery-image" />
            <div className="image-title">{image.title}</div>
          </div>
        ))}
  
        {/* Modal */}
        {selectedImage && (
          <div className={`modal ${isAnimating ? 'animate-in' : 'animate-out'}`} onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Gallery;